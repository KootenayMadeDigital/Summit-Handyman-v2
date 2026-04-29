import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  variant = "default",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "elevated" | "outline" | "gold";
}) {
  const variantStyles = {
    default: "bg-surface-panel border border-divider",
    elevated: "bg-surface-panel border border-divider shadow-panel",
    outline: "bg-transparent border border-divider",
    gold: "bg-surface-panel border border-accent-soft shadow-gold",
  } as const;

  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-8 transition-all duration-300 ease-editorial",
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
