import * as React from "react";
import { cn } from "@/lib/utils";

type SectionAtmosphere = "auto" | "none" | "workbench" | "panel" | "service" | "area" | "proof" | "paper" | "cta";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article";
  size?: "sm" | "md" | "lg";
  atmosphere?: SectionAtmosphere;
};

function resolveAtmosphere({
  atmosphere,
  className,
  id,
}: {
  atmosphere: SectionAtmosphere;
  className?: string;
  id?: string;
}): Exclude<SectionAtmosphere, "auto"> {
  if (atmosphere !== "auto") return atmosphere;

  const classes = className ?? "";
  if (classes.includes("grainient-promise")) return "cta";
  if (id === "areas" || id === "map" || classes.includes("motion-area")) return "area";
  if (id === "services" || classes.includes("motion-service")) return "service";
  if (id === "reviews" || classes.includes("motion-review")) return "proof";
  if (id === "faq" || classes.includes("prose")) return "paper";
  if (classes.includes("bg-surface-panel")) return "panel";

  return "workbench";
}

export function Section({
  as: As = "section",
  size = "md",
  className,
  children,
  atmosphere = "auto",
  ...rest
}: SectionProps) {
  const sizeMap = {
    sm: "py-16 md:py-20",
    md: "py-section",
    lg: "py-section-lg",
  } as const;

  const atmosphereKind = resolveAtmosphere({
    atmosphere,
    className: typeof className === "string" ? className : undefined,
    id: typeof rest.id === "string" ? rest.id : undefined,
  });

  return (
    <As
      className={cn("summit-section-shell relative w-full", sizeMap[size], className)}
      data-atmosphere={atmosphereKind === "none" ? undefined : atmosphereKind}
      {...rest}
    >
      {atmosphereKind !== "none" && <SectionAtmosphereLayer kind={atmosphereKind} />}
      {children}
    </As>
  );
}

function SectionAtmosphereLayer({
  kind,
}: {
  kind: Exclude<SectionAtmosphere, "auto" | "none">;
}) {
  return (
    <div className="summit-section-atmosphere" aria-hidden="true">
      <span className="summit-section-glow summit-section-glow-a" />
      <span className="summit-section-glow summit-section-glow-b" />
      <span className="summit-section-pattern" data-pattern={kind} />
      <span className="summit-section-edge" />
    </div>
  );
}

export function Container({
  className,
  children,
  size = "default",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  size?: "narrow" | "default" | "wide" | "full";
}) {
  const sizeMap = {
    narrow: "max-w-3xl",
    default: "max-w-7xl",
    wide: "max-w-[88rem]",
    full: "max-w-none",
  } as const;
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizeMap[size],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]",
        "text-accent",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-accent opacity-60" />
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4 sm:space-y-5",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display font-extrabold text-display-lg text-balance text-fg-strong">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-fg-muted leading-relaxed text-pretty max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
