"use client";

import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { areas } from "@/lib/areas";
import "leaflet/dist/leaflet.css";

// Lower Mainland centroid (between Surrey and Abbotsford)
const CENTER: [number, number] = [49.08, -122.55];
const ZOOM = 10;

// Custom gold pin SVG
const goldPinIcon = L.divIcon({
  html: `
    <div style="position: relative; width: 32px; height: 40px; transform: translate(-50%, -100%);">
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.16 0 0 7.16 0 16C0 27 16 40 16 40C16 40 32 27 32 16C32 7.16 24.84 0 16 0Z" fill="#D4A24C" stroke="#0A0C10" stroke-width="2"/>
        <circle cx="16" cy="15" r="6" fill="#0A0C10"/>
      </svg>
    </div>
  `,
  className: "summit-marker",
  iconSize: [32, 40],
  iconAnchor: [16, 40],
  popupAnchor: [0, -36],
});

function MapBoundsFitter() {
  const map = useMap();
  React.useEffect(() => {
    const bounds = L.latLngBounds(areas.map((a) => [a.geo.lat, a.geo.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
  }, [map]);
  return null;
}

export default function ServiceAreaMapClient() {
  return (
    <div className="relative h-[480px] md:h-[560px] bg-summit-black">
      <MapContainer
        center={CENTER}
        zoom={ZOOM}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", background: "#0A0C10" }}
        attributionControl={false}
        zoomControl={true}
      >
        {/* Carto dark tiles. free, no auth. matches our dark theme */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />
        <MapBoundsFitter />

        {areas.map((area) => (
          <React.Fragment key={area.slug}>
            <Circle
              center={[area.geo.lat, area.geo.lng]}
              radius={3500}
              pathOptions={{
                color: "#D4A24C",
                fillColor: "#D4A24C",
                fillOpacity: 0.08,
                weight: 1.5,
                opacity: 0.6,
              }}
            />
            <Marker position={[area.geo.lat, area.geo.lng]} icon={goldPinIcon}>
              <Popup>
                <div style={{ minWidth: 200, fontFamily: "Switzer, system-ui, sans-serif" }}>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#D4A24C", fontWeight: 600, marginBottom: 4 }}>
                    {area.responseTime}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#0A0C10", marginBottom: 6 }}>
                    {area.name}, {area.province}
                  </div>
                  <div style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.4, marginBottom: 12 }}>
                    {area.neighborhoods.slice(0, 3).join(" · ")}
                    {area.neighborhoods.length > 3 ? " · …" : ""}
                  </div>
                  <Link
                    href={`/areas/${area.slug}`}
                    style={{
                      display: "inline-block",
                      padding: "6px 12px",
                      background: "#D4A24C",
                      color: "#0A0C10",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 13,
                      borderRadius: 999,
                    }}
                  >
                    View {area.name} →
                  </Link>
                </div>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>
      <style jsx global>{`
        .leaflet-container {
          font-family: "Switzer", system-ui, sans-serif;
        }
        .leaflet-popup-content-wrapper {
          background: #f8f6f2;
          border-radius: 12px;
          box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.6);
          padding: 4px;
        }
        .leaflet-popup-tip {
          background: #f8f6f2;
        }
        .leaflet-popup-content {
          margin: 12px 14px;
        }
        .leaflet-control-zoom a {
          background: #161a21 !important;
          color: #e5e7eb !important;
          border-color: #2a2f3a !important;
        }
        .leaflet-control-zoom a:hover {
          background: #d4a24c !important;
          color: #0a0c10 !important;
        }
        .leaflet-control-attribution {
          background: rgba(10, 12, 16, 0.7) !important;
          color: #6b7280 !important;
          font-size: 10px !important;
        }
        .leaflet-control-attribution a {
          color: #d4a24c !important;
        }
      `}</style>
    </div>
  );
}
