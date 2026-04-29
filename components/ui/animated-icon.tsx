"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight Lordicon-style animated icon system.
 * SVGs paired with hover-triggered CSS animations. ~3KB total.
 * Tinted gold by default, respects prefers-reduced-motion.
 */

type IconName =
  | "wrench"
  | "paintbrush"
  | "hammer"
  | "zap"
  | "tile"
  | "package"
  | "droplets"
  | "rain"
  | "fence"
  | "house"
  | "shield"
  | "wifi";

const SIZE = 32;

const variants: Record<IconName, React.ReactNode> = {
  wrench: (
    <g className="ai-wrench">
      <path
        d="M22 4l-4 4 2 2 4-4M18 8l-9 9-3 3 4-4 9-9M6 22l4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="22" cy="6" r="1.5" fill="currentColor" />
    </g>
  ),
  paintbrush: (
    <g className="ai-paint">
      <path
        d="M19 3l3 3-9 9-4 1 1-4 9-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M9 16l-4 6 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </g>
  ),
  hammer: (
    <g className="ai-hammer">
      <path
        d="M14 4l8 4-3 5-8-4 3-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M11 9l-9 9c-1 1-1 3 0 4s3 1 4 0l9-9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  ),
  zap: (
    <g className="ai-zap">
      <path
        d="M18 4l-9 12h6l-3 12 9-13h-6l3-11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  ),
  tile: (
    <g className="ai-tile">
      <rect x="4" y="4" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="18" y="4" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="4" y="18" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="18" y="18" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </g>
  ),
  package: (
    <g className="ai-package">
      <path
        d="M16 2L4 8v16l12 6 12-6V8L16 2zM4 8l12 6m0 0l12-6M16 14v16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  ),
  droplets: (
    <g className="ai-droplets">
      <path
        d="M10 4c-3 4-5 7-5 10a5 5 0 0010 0c0-3-2-6-5-10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M22 14c-2 3-3 5-3 7a3 3 0 006 0c0-2-1-4-3-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  ),
  rain: (
    <g className="ai-rain">
      <path
        d="M8 14h16a4 4 0 100-8 6 6 0 00-12 0 4 4 0 00-4 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M10 19v3M16 19v4M22 19v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  fence: (
    <g className="ai-fence">
      <path
        d="M5 14l3-3v17H5V14zM12 14l3-3v17h-3V14zM19 14l3-3v17h-3V14zM26 14l3-3v17h-3V14zM5 18h26M5 24h26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  ),
  house: (
    <g className="ai-house">
      <path
        d="M4 16l12-10 12 10v12a2 2 0 01-2 2H6a2 2 0 01-2-2V16z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M12 30v-8h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </g>
  ),
  shield: (
    <g className="ai-shield">
      <path
        d="M16 4l10 4v8c0 6-4 11-10 14-6-3-10-8-10-14V8l10-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M11 16l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  ),
  wifi: (
    <g className="ai-wifi">
      {/* Three signal arcs cascade outward, dot pulses at the centre. */}
      <path
        className="ai-wifi-arc ai-wifi-arc-3"
        d="M3 13c7-7 19-7 26 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        className="ai-wifi-arc ai-wifi-arc-2"
        d="M8 18c4-4 12-4 16 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        className="ai-wifi-arc ai-wifi-arc-1"
        d="M12 23c2-2 6-2 8 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle className="ai-wifi-dot" cx="16" cy="27" r="1.5" fill="currentColor" />
    </g>
  ),
};

const lucideToAnimated: Record<string, IconName> = {
  Wrench: "wrench",
  Paintbrush: "paintbrush",
  Hammer: "hammer",
  Zap: "zap",
  Square: "tile",
  Package: "package",
  Droplets: "droplets",
  CloudRain: "rain",
  Fence: "fence",
  Home: "house",
  Shield: "shield",
  Wifi: "wifi",
};

export function AnimatedIcon({
  name,
  className,
  trigger = "hover",
}: {
  name: IconName | string;
  className?: string;
  trigger?: "hover" | "in-view" | "always";
}) {
  const key = (lucideToAnimated[name] ?? (name as IconName)) as IconName;
  const variant = variants[key] ?? variants.wrench;

  return (
    <svg
      className={cn(
        "ai-root text-summit-gold transition-colors",
        trigger === "hover" && "ai-trigger-hover",
        trigger === "in-view" && "ai-trigger-once",
        className,
      )}
      width={SIZE}
      height={SIZE}
      viewBox="0 0 32 32"
      aria-hidden
      data-icon={key}
    >
      {variant}
    </svg>
  );
}
