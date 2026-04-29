"use client";

import {
  Wrench,
  Paintbrush,
  Hammer,
  Zap,
  Square,
  Package,
  Droplets,
  CloudRain,
  Fence,
  Home,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Paintbrush,
  Hammer,
  Zap,
  Square,
  Package,
  Droplets,
  CloudRain,
  Fence,
  Home,
  Shield,
};

export function ServiceIcon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = iconMap[name] ?? Wrench;
  return (
    <Icon
      className={cn("text-summit-gold", className)}
      strokeWidth={strokeWidth}
      aria-hidden
    />
  );
}
