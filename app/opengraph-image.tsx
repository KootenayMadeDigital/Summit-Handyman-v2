import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a0c10 0%, #161a21 50%, #0a0c10 100%)",
          color: "#e5e7eb",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#d4a24c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a0c10",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Summit<span style={{ color: "#d4a24c" }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#d4a24c",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            Summit Handyman
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1000,
            }}
          >
            Reliability Reaching{" "}
            <span style={{ fontStyle: "italic", color: "#d4a24c", fontWeight: 600 }}>
              New Heights.
            </span>
          </div>
          <div style={{ fontSize: 28, color: "#9ca3af", maxWidth: 900 }}>
            Premium handyman repairs for property managers and families across the Lower Mainland.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6b7280",
            fontSize: 22,
            borderTop: "1px solid #2a2f3a",
            paddingTop: 24,
          }}
        >
          <div>summit-handyman.ca</div>
          <div>Langley · Surrey · White Rock · Abbotsford · Cloverdale</div>
        </div>
      </div>
    ),
    size,
  );
}
