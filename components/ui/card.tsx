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
    default: "bg-summit-panel border border-summit-slate/60",
    elevated: "bg-summit-panel border border-summit-slate/60 shadow-panel",
    outline: "bg-transparent border border-summit-slate/60",
    gold: "bg-summit-panel border border-summit-gold/40 shadow-gold",
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
