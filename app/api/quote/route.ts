import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getArea } from "@/lib/areas";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

/**
 * POST /api/quote
 *
 * Receives the multi-step quote form (FormData with photos), validates the
 * payload, and sends a formatted lead email to brody@summit-handyman.ca via
 * Resend. Reply-To is set to the customer's email when they provided one,
 * so Brody can hit Reply in his existing inbox and the message goes back to
 * the customer with no Resend interception.
 *
 * Required env vars:
 *   - RESEND_API_KEY        Resend API key (set in Vercel project env)
 *
 * Optional env vars (sensible defaults if absent):
 *   - RESEND_FROM_EMAIL     Defaults to "Summit Handyman Quote <quotes@summit-handyman.ca>"
 *   - CONTACT_TO_EMAIL      Defaults to site.contact.email (brody@summit-handyman.ca)
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PHOTOS = 5;
const MAX_PHOTO_SIZE_MB = 8;
const MAX_PHOTO_SIZE = MAX_PHOTO_SIZE_MB * 1024 * 1024; // 8 MB per photo
const MAX_TOTAL_SIZE_MB = 32;
const MAX_TOTAL_SIZE = MAX_TOTAL_SIZE_MB * 1024 * 1024; // 32 MB total (Resend caps at 40 MB)
const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

const DEFAULT_FROM = "Summit Handyman Quote <quotes@summit-handyman.ca>";

function humanizeTiming(t: string): string {
  return (
    {
      "time-sensitive": "Time-sensitive (sooner is better)",
      "this-week": "This week",
      "two-weeks": "Within 2 weeks",
      "no-rush": "No rush",
    }[t] ?? "Not specified"
  );
}

function humanizePreferredContact(p: string): string {
  return (
    {
      email: "Email",
      text: "Text message",
      call: "Phone call",
      either: "Either is fine",
    }[p] ?? p
  );
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Summit quote: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Quote delivery is not configured. Please try again later." },
        { status: 503 },
      );
    }

    const formData = await req.formData();

    // Honeypot. Bots fill the hidden "website" field; real users do not.
    const honeypot = formData.get("website");
    if (typeof honeypot === "string" && honeypot.length > 0) {
      // Pretend success so the bot moves on. No email sent.
      return NextResponse.json({ ok: true });
    }

    const service = String(formData.get("service") ?? "").trim();
    const timing = String(formData.get("timing") ?? "").trim();
    const area = String(formData.get("area") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const name = String(formData.get("name") ?? "").trim();
    const contact = String(formData.get("contact") ?? "").trim();
    const preferredContact = String(formData.get("preferredContact") ?? "email").trim();
    const postalCode = String(formData.get("postalCode") ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please tell Brody your name." }, { status: 400 });
    }
    if (!contact || contact.length < 5) {
      return NextResponse.json({ error: "Please include an email or phone." }, { status: 400 });
    }
    if (!description || description.length < 10) {
      return NextResponse.json(
        { error: "Please describe the job (10 characters minimum)." },
        { status: 400 },
      );
    }
    if (!service) {
      return NextResponse.json({ error: "Please choose the closest service." }, { status: 400 });
    }
    if (!timing) {
      return NextResponse.json({ error: "Please choose a timing option." }, { status: 400 });
    }
    if (!area) {
      return NextResponse.json({ error: "Please choose your city." }, { status: 400 });
    }

    const photoEntries = formData.getAll("photos").filter((f): f is File => f instanceof File);

    if (photoEntries.length > MAX_PHOTOS) {
      return NextResponse.json({ error: `Maximum ${MAX_PHOTOS} photos.` }, { status: 400 });
    }

    let totalSize = 0;
    for (const p of photoEntries) {
      if (p.size > MAX_PHOTO_SIZE) {
        return NextResponse.json(
          { error: `Each photo must be under ${MAX_PHOTO_SIZE_MB}MB. Try fewer or smaller images.` },
          { status: 400 },
        );
      }
      if (p.type && !ALLOWED_MIME.has(p.type.toLowerCase())) {
        return NextResponse.json(
          { error: "Photos must be JPG, PNG, WEBP, or HEIC." },
          { status: 400 },
        );
      }
      totalSize += p.size;
    }
    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        { error: `Total photo size too large (${MAX_TOTAL_SIZE_MB}MB max). Try fewer or smaller images.` },
        { status: 400 },
      );
    }

    const serviceObj = service !== "other" ? getService(service) : null;
    const areaObj = getArea(area);
    const fields = {
      name,
      contact,
      preferredContact: humanizePreferredContact(preferredContact),
      service: serviceObj?.name ?? service,
      timing: humanizeTiming(timing),
      area: areaObj?.name ?? area,
      postalCode,
      description,
      photoCount: photoEntries.length,
    };

    /*
      Resend attachment format: { filename, content }
      content can be a Buffer (Node) or base64 string. Buffer works in the
      Node runtime which this route opts into via `export const runtime = "nodejs"`.
    */
    const attachments = await Promise.all(
      photoEntries.map(async (p) => ({
        filename: p.name || `photo-${Date.now()}.jpg`,
        content: Buffer.from(await p.arrayBuffer()),
      })),
    );

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;
    const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
    const subject = `New Quote: ${name} - ${serviceObj?.name ?? "General inquiry"} (${areaObj?.name ?? area})`;

    /*
      replyTo is the killer feature here. Brody opens the email in his
      regular inbox, hits Reply, and the response goes straight back to
      the customer's email instead of bouncing off our quotes@ address.
      If the customer only left a phone number, replyTo is omitted and
      Brody just texts them back from his phone.
    */
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: contact.includes("@") ? contact : undefined,
      subject,
      html: renderEmailHtml(fields),
      text: renderEmailText(fields),
      attachments,
    });

    if (error) {
      console.error("Summit quote: Resend send failed", error);
      return NextResponse.json(
        { error: "Quote delivery failed. Please try again in a moment." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Summit quote: unexpected error", err);
    return NextResponse.json(
      { error: "Quote delivery failed. Please try again in a moment." },
      { status: 502 },
    );
  }
}

function renderEmailHtml(o: {
  name: string;
  contact: string;
  preferredContact: string;
  service: string;
  timing: string;
  area: string;
  postalCode: string;
  description: string;
  photoCount: number;
}): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:.08em;width:120px;vertical-align:top;">${label}</td><td style="padding:8px 0;color:#e5e7eb;font-size:15px;">${value}</td></tr>`;

  return `<!DOCTYPE html><html><body style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f1115;color:#e5e7eb;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#181b21;border:1px solid #2a2f3a;border-radius:16px;overflow:hidden;">
    <div style="padding:24px 28px;border-bottom:1px solid #2a2f3a;background:linear-gradient(135deg,#181b21,#0f1115);">
      <h1 style="margin:0;color:#d97706;font-size:14px;text-transform:uppercase;letter-spacing:.18em;">Summit Handyman</h1>
      <p style="margin:4px 0 0;color:#e5e7eb;font-size:22px;font-weight:700;">New quote request from ${escapeHtml(o.name)}</p>
    </div>
    <div style="padding:24px 28px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", escapeHtml(o.name))}
        ${row("Contact", escapeHtml(o.contact))}
        ${row("Prefers", escapeHtml(o.preferredContact))}
        ${row("Service", escapeHtml(o.service))}
        ${row("Area", escapeHtml(o.area))}
        ${o.postalCode ? row("Postal code", escapeHtml(o.postalCode)) : ""}
        ${row("Timing", escapeHtml(o.timing))}
        ${row("Photos", o.photoCount > 0 ? `${o.photoCount} attached` : "None")}
      </table>
      <h2 style="margin:24px 0 8px;color:#e5e7eb;font-size:14px;text-transform:uppercase;letter-spacing:.12em;">What needs doing</h2>
      <p style="white-space:pre-wrap;color:#e5e7eb;background:#0f1115;padding:16px;border-radius:12px;border:1px solid #2a2f3a;line-height:1.6;">${escapeHtml(o.description)}</p>
    </div>
    <div style="padding:16px 28px;border-top:1px solid #2a2f3a;color:#6b7280;font-size:12px;">Sent from summit-handyman.ca quote form</div>
  </div>
</body></html>`;
}

function renderEmailText(o: {
  name: string;
  contact: string;
  preferredContact: string;
  service: string;
  timing: string;
  area: string;
  postalCode: string;
  description: string;
  photoCount: number;
}): string {
  return `New quote request from ${o.name}

Name: ${o.name}
Contact: ${o.contact}
Prefers: ${o.preferredContact}
Service: ${o.service}
Area: ${o.area}${o.postalCode ? `\nPostal: ${o.postalCode}` : ""}
Timing: ${o.timing}
Photos: ${o.photoCount > 0 ? `${o.photoCount} attached` : "None"}

What needs doing:
${o.description}

Sent from summit-handyman.ca quote form.`;
}
