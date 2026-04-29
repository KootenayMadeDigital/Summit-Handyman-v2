import { Container } from "@/components/ui/section";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Crumb[];
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "grainient-promise relative isolate overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24",
        className,
      )}
    >
      <Container>
        <div className={cn("max-w-4xl space-y-5 sm:space-y-6 min-w-0", align === "center" && "mx-auto text-center")}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="overflow-x-auto -mx-1 px-1">
              <ol className="flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-summit-stone whitespace-nowrap">
                {breadcrumbs.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5 flex-shrink-0">
                    {c.href ? (
                      <Link href={c.href} className="hover:text-summit-gold transition-colors">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-summit-mist truncate max-w-[160px] sm:max-w-none">{c.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 flex-shrink-0" />}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-display-xl font-extrabold tracking-tightest text-summit-mist text-balance leading-[1.05] hyphens-none">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-summit-mist/80 leading-relaxed text-pretty max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="pt-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
