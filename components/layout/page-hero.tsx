import { Container } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };
type PageHeroImage = {
  src: string;
  alt?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "left",
  className,
  image,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Crumb[];
  align?: "left" | "center";
  className?: string;
  image?: PageHeroImage;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "grainient-promise relative isolate overflow-hidden pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-16 md:pb-24",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            image && align !== "center"
              ? "grid gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(22rem,0.72fr)] lg:items-center"
              : "",
          )}
        >
          <div className={cn("max-w-4xl space-y-5 sm:space-y-6 min-w-0", align === "center" && "mx-auto text-center")}>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="overflow-x-auto -mx-1 px-1">
                <ol className="flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-fg-muted whitespace-nowrap">
                  {breadcrumbs.map((c, i) => (
                    <li key={i} className="flex items-center gap-1.5 flex-shrink-0">
                      {c.href ? (
                        <Link href={c.href} className="inline-flex min-h-11 items-center rounded-lg px-2 -mx-2 hover:text-accent transition-colors">
                          {c.label}
                        </Link>
                      ) : (
                        <span className="text-fg-strong truncate max-w-[160px] sm:max-w-none">{c.label}</span>
                      )}
                      {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 flex-shrink-0" />}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            {eyebrow && (
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-display-xl font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05] hyphens-none">
              {title}
            </h1>
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-fg/85 leading-relaxed text-pretty max-w-2xl">
                {description}
              </p>
            )}
            {children && <div className="pt-3">{children}</div>}
          </div>

          {image && align !== "center" && (
            <div className="summit-photo-motion summit-scan-accent photo-grade relative aspect-[3/2] overflow-hidden rounded-[1.75rem] border border-divider-strong bg-surface-panel shadow-panel-lg lg:justify-self-end lg:w-full">
              <Image
                src={image.src}
                alt={image.alt ?? ""}
                fill
                priority={image.priority ?? true}
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-summit-black/45 via-transparent to-accent/10" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
