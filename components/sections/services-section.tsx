import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services, serviceCategories, type ServiceCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

const categoryOrder: ServiceCategory[] = ["interior", "exterior", "safety"];

/**
 * SERVICES. answers "Do they do MY job?"
 * Three categories, each clearly delineated, with a hover-rich card grid.
 */
export function ServicesSection() {
  return (
    <Section id="services" size="lg" className="bg-surface relative">
      <Container>
        <SectionTitle
          eyebrow="Full Service Capabilities"
          title={
            <>
              Transforming homes with{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                precision.
              </span>
            </>
          }
          description="Find the closest match for the repair list, then send the details once. Brody handles the scope personally, so the job starts with clarity instead of contractor fog."
          className="mb-14 sm:mb-16"
        />

        <div className="space-y-16 sm:space-y-20">
          {categoryOrder.map((cat) => {
            const list = services.filter((s) => s.category === cat);
            const meta = serviceCategories[cat];
            return (
              <div key={cat}>
                <Reveal>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6 mb-7 sm:mb-8 pb-4 border-b border-divider-strong">
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-1.5">
                        {cat}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-fg-strong leading-tight">
                        {meta.name}
                      </h3>
                    </div>
                    <p className="hidden md:block text-sm text-fg-muted max-w-md text-right">
                      {meta.description}
                    </p>
                  </div>
                </Reveal>

                <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {list.map((s) => (
                    <RevealItem key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={cn(
                          "summit-card-motion motion-service group relative block h-full p-6 rounded-2xl",
                          "bg-surface-panel border border-divider",
                          "hover:border-accent-soft hover:bg-surface-elevated",
                          "transition-all duration-300 ease-editorial",
                          "hover:shadow-gold hover:-translate-y-0.5",
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="summit-icon-box h-12 w-12 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center group-hover:scale-105 transition-transform">
                            <ServiceIcon name={s.icon} className="h-6 w-6" />
                          </div>
                          <ArrowUpRight className="summit-arrow h-5 w-5 text-fg-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <h4 className="mt-5 font-display text-xl font-bold text-fg-strong">
                          {s.name}
                        </h4>
                        <p className="mt-2 text-sm text-fg-muted leading-relaxed">
                          {s.shortDescription}
                        </p>
                      </Link>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-16 text-center font-serif italic text-base sm:text-lg text-fg-muted">
            "The view is always better from a home that works."
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
