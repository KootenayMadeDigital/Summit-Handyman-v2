import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";
import { getService } from "@/lib/services";
import { getArea } from "@/lib/areas";

/**
 * POST /api/quote
 *
 * Receives a multi-step quote form submission with optional photo attachments
 * (up to 5 photos, 5MB each, 20MB total). Sends a structured email to
 * brody@summit-handyman.ca via Resend so Brody has all the context he needs
 * to give an accurate estimate before reaching out.
 *
 * Env vars:
 *   RESEND_API_KEY (required for production email delivery)
 *   QUOTE_FROM_EMAIL (optional, defaults to Summit Handyman <quote@summit-handyman.ca>)
 *
 * If RESEND_API_KEY is missing the route still returns 200 so the form
 * doesn't break; the submission is logged server-side and the user is told
 * to email Brody directly as a fallback.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PHOTOS = 5;
const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_SIZE = 20 * 1024 * 1024;
const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

function humanizeTiming(t: string): string {
  return (
    {
      urgent: "Urgent (today or tomorrow)",
      "this-week": "This week",
      "two-weeks": "Within 2 weeks",
      "no-rush": "No rush",
    }[t] ?? "Not specified"
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
    const formData = await req.formData();

    // Honeypot. silently drop bots.
    const honeypot = formData.get("website");
    if (typeof honeypot === "string" && honeypot.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const service = String(formData.get("service") ?? "");
    const timing = String(formData.get("timing") ?? "");
    const area = String(formData.get("area") ?? "");
    const description = String(formData.get("description") ?? "");
    const name = String(formData.get("name") ?? "");
    const contact = String(formData.get("contact") ?? "");
    const preferredContact = String(formData.get("preferredContact") ?? "email");
    const postalCode = String(formData.get("postalCode") ?? "");

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Please tell Brody your name." }, { status: 400 });
    }
    if (!contact || contact.trim().length < 5) {
      return NextResponse.json({ error: "Please include an email or phone." }, { status: 400 });
    }
    if (!description || description.trim().length < 10) {
      return NextResponse.json(
        { error: "Please describe the job (10 characters minimum)." },
        { status: 400 },
      );
    }

    const photoEntries = formData.getAll("photos").filter((f): f is File => f instanceof File);

    if (photoEntries.length > MAX_PHOTOS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_PHOTOS} photos.` },
        { status: 400 },
      );
    }

    let totalSize = 0;
    for (const p of photoEntries) {
      if (p.size > MAX_PHOTO_SIZE) {
        return NextResponse.json(
          { error: "Each photo must be under 5MB. Try fewer or smaller images." },
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
        { error: "Total photo size too large (20MB max). Try fewer or smaller images." },
        { status: 400 },
      );
    }

    const serviceObj = service !== "other" ? getService(service) : null;
    const areaObj = getArea(area);

    const subject = `New Quote · ${name} · ${serviceObj?.name ?? "General inquiry"}${areaObj ? " · " + areaObj.name : ""}`;

    const fields = {
      name,
      contact,
      preferredContact,
      service: serviceObj?.name ?? service ?? "Other",
      timing: humanizeTiming(timing),
      area: areaObj?.name ?? area ?? "Not specified",
      postalCode,
      description,
      photoCount: photoEntries.length,
    };

    const html = renderEmailHtml(fields);
    const text = renderEmailText(fields);

    const resendKey = process.env.RESEND_API_KEY;
    const fromAddress =
      process.env.QUOTE_FROM_EMAIL ?? "Summit Handyman <quote@summit-handyman.ca>";

    if (resendKey) {
      const attachments = await Promise.all(
        photoEntries.map(async (p) => ({
          filename: p.name || `photo-${Date.now()}.jpg`,
          content: Buffer.from(await p.arrayBuffer()).toString("base64"),
        })),
      );

      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [site.contact.email],
          reply_to: contact.includes("@") ? contact : undefined,
          subject,
          html,
          text,
          attachments: attachments.length ? attachments : undefined,
        }),
      });

      if (!resp.ok) {
        const errorBody = await resp.text();
        console.error("Resend delivery failed", { status: resp.status, body: errorBody });
        return NextResponse.json(
          {
            error:
              "Email delivery failed. Try again, or email Brody directly at " + site.contact.email,
          },
          { status: 502 },
        );
      }
    } else {
      // Dev / unconfigured fallback. Log so the operator can see what would have been sent.
      console.log("[QUOTE submission] RESEND_API_KEY not set. Submission contents:", {
        subject,
        ...fields,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote submission error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email Brody directly at " + site.contact.email },
      { status: 500 },
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
        ${row("Contact", `<a href="${o.contact.includes("@") ? `mailto:${escapeHtml(o.contact)}` : `sms:${escapeHtml(o.contact)}`}" style="color:#d97706;text-decoration:none;">${escapeHtml(o.contact)}</a>`)}
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
