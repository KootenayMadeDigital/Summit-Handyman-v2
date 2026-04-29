import { cn } from "@/lib/utils";

/**
 * Section divider — visually separates sections without being heavy-handed.
 * Variants:
 *  - line: a centered gold-accent line (default)
 *  - dot: a centered gold dot with hairlines
 *  - mark: small Summit "S" peak SVG between two hairlines
 */
export function SectionDivider({
  variant = "line",
  className,
}: {
  variant?: "line" | "dot" | "mark";
  className?: string;
}) {
  if (variant === "dot") {
    return (
      <div className={cn("relative mx-auto flex items-center justify-center w-full max-w-5xl px-6", className)}>
        <span aria-hidden className="h-px flex-1 bg-[var(--border)]" />
        <span aria-hidden className="mx-4 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_2px_color-mix(in_srgb,var(--accent)_60%,transparent)]" />
        <span aria-hidden className="h-px flex-1 bg-[var(--border)]" />
      </div>
    );
  }
  if (variant === "mark") {
    return (
      <div className={cn("relative mx-auto flex items-center justify-center w-full max-w-5xl px-6", className)}>
        <span aria-hidden className="h-px flex-1 bg-[var(--border)]" />
        <svg
          aria-hidden
          viewBox="0 0 32 22"
          className="mx-5 h-5 w-7 text-[var(--accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20 L11 6 L17 14 L22 9 L30 20 Z" />
        </svg>
        <span aria-hidden className="h-px flex-1 bg-[var(--border)]" />
      </div>
    );
  }
  return <div aria-hidden className={cn("summit-divider", className)} />;
}
