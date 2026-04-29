"use client";

import { AnimatedIcon } from "./animated-icon";
import { cn } from "@/lib/utils";

export function ServiceIcon({
  name,
  className,
  trigger = "hover",
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
  trigger?: "hover" | "in-view" | "always";
}) {
  return <AnimatedIcon name={name} className={cn("text-summit-gold", className)} trigger={trigger} />;
}
