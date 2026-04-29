import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";
import { getService } from "@/lib/services";
import { getArea } from "@/lib/areas";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PHOTOS = 5;
const MAX_PHOTO_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Honeypot — silently drop bots
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

    // Basic validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!contact || contact.length < 5) {
      return NextResponse.json({ error: "Contact is required." }, { status: 400 });
    }
    if (!description || description.trim().length < 10) {
      return NextResponse.json({ error: "Please describe the job (10+ chars)." }, { status: 400 });
    }

    // Photos
    const photos = formData.getAll("photos").filter((f): f is File => f instanceof File);
    if (photos.length > MAX_PHOTOS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_PHOTOS} photos.` },
        { status: 400 },
      );
    }
    let totalSize = 0;
    for (const p of photos) {
      if (p.size > MAX_PHOTO_SIZE) {
        return NextResponse.json(
          { error: `Each photo must be under 5MB.` },
          { status: 400 },
        );
      }
      totalSize += p.size;
    }
    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        { error: "Total photo size too large." },
        { status: 400 },
      );
    }

    const serviceObj = service !== "other" ? getService(service) : null;
    const areaObj = getArea(area);

    const subject = `New Quote · ${name} · ${serviceObj?.name ?? "General inquiry"}`;
    const html = renderEmailHtml({
      name,
      contact,
      preferredContact,
      service: serviceObj?.name ?? service ?? "Other",
      timing: humanizeTiming(timing),
      area: areaObj?.name ?? area ?? "Not specified",
      postalCode,
      description,
      photoCount: photos.length,
    });
    const text = renderEmailText({
      name,
      contact,
      preferredContact,
      service: serviceObj?.name ?? service ?? "Other",
      timing: humanizeTiming(timing),
      area: areaObj?.name ?? area ?? "Not specified",
      postalCode,
      description,
      photoCount: photos.length,
    });

    // Try Resend if API key is configured
    const resendKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.QUOTE_FROM_EMAIL ?? "Summit Handyman <quote@summit-handyman.ca>";

    if (resendKey) {
      const attachments = await Promise.all(
        photos.map(async (p) => ({
          filename: p.name,
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
        const body = await resp.text();
        console.error("Resend error", body);
        return NextResponse.json(
          { error: "Email delivery failed. Please try again or email Brody directly." },
          { status: 500 },
        );
      }
    } else {
      // Dev fallback — log the submission
      console.log("[QUOTE — no RESEND_API_KEY configured, would have sent:]");
      console.log({ subject, name, contact, service, timing, area, postalCode, description, photoCount: photos.length });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote submission error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email Brody directly." },
      { status: 500 },
    );
  }
}

function humanizeTiming(t: string) {
  return (
    {
      urgent: "Urgent — today or tomorrow",
      "this-week": "This week",
      "two-weeks": "Within 2 weeks",
      "no-rush": "No rush",
    }[t] ?? "Not specified"
  );
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
}) {
  return `
  <!DOCTYPE html>
  <html><body style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0a0c10;color:#e5e7eb;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#161a21;border:1px solid #2a2f3a;border-radius:16px;overflow:hidden;">
      <div style="padding:24px 28px;border-bottom:1px solid #2a2f3a;background:linear-gradient(135deg,#161a21,#0a0c10);">
        <h1 style="margin:0;color:#d4a24c;font-size:14px;text-transform:uppercase;letter-spacing:.18em;">Summit Handyman</h1>
        <p style="margin:4px 0 0;color:#e5e7eb;font-size:22px;font-weight:700;">New quote request from ${escape(o.name)}</p>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", escape(o.name))}
          ${row("Contact", `<a href="${o.contact.includes("@") ? `mailto:${escape(o.contact)}` : `sms:${escape(o.contact)}`}" style="color:#d4a24c;text-decoration:none;">${escape(o.contact)}</a>`)}
          ${row("Prefers", escape(o.preferredContact))}
          ${row("Service", escape(o.service))}
          ${row("Area", escape(o.area))}
          ${o.postalCode ? row("Postal code", escape(o.postalCode)) : ""}
          ${row("Timing", escape(o.timing))}
          ${row("Photos", String(o.photoCount))}
        </table>
        <h2 style="margin:24px 0 8px;color:#e5e7eb;font-size:14px;text-transform:uppercase;letter-spacing:.12em;">What needs doing</h2>
        <p style="white-space:pre-wrap;color:#e5e7eb;background:#0a0c10;padding:16px;border-radius:12px;border:1px solid #2a2f3a;line-height:1.6;">${escape(o.description)}</p>
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
}) {
  return `New quote request — Summit Handyman

Name: ${o.name}
Contact: ${o.contact}
Prefers: ${o.preferredContact}
Service: ${o.service}
Area: ${o.area}${o.postalCode ? `\nPostal: ${o.postalCode}` : ""}
Timing: ${o.timing}
Photos: ${o.photoCount}

Description:
${o.description}
`;
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:.08em;width:120px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#e5e7eb;font-size:15px;">${value}</td>
  </tr>`;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
