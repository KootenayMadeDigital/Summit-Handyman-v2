import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services, serviceCategories, type ServiceCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Full handyman service capabilities — interior repairs, exterior maintenance, and home safety installs across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale.",
  alternates: { canonical: "/services" },
};

const order: ServiceCategory[] = ["interior", "exterior", "safety"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Full Service Capabilities"
        title={
          <>
            One handyman.{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              The whole list.
            </span>
          </>
        }
        description="From a leaky faucet to a deck refinish, every service below is handled by Brody himself — never subbed out. $150 minimum per job, no hourly games."
      />

      <Section size="lg" className="bg-surface">
        <Container>
          <div className="space-y-20">
            {order.map((cat) => {
              const list = services.filter((s) => s.category === cat);
              const meta = serviceCategories[cat];
              return (
                <div key={cat}>
                  <Reveal>
                    <div className="flex items-end justify-between gap-4 mb-8 border-b border-divider pb-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-1">
                          {cat}
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-strong">
                          {meta.name}
                        </h2>
                      </div>
                      <p className="hidden md:block text-sm text-fg-muted max-w-md text-right">
                        {meta.description}
                      </p>
                    </div>
                  </Reveal>

                  <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {list.map((s) => (
                      <RevealItem key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={cn(
                            "group relative block h-full p-6 rounded-2xl",
                            "bg-surface-panel border border-divider-strong",
                            "hover:border-accent-soft hover:bg-surface-elevated",
                            "transition-all duration-300 ease-editorial",
                            "hover:shadow-gold hover:-translate-y-0.5",
                          )}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="h-12 w-12 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center group-hover:bg-accent-soft transition-colors">
                              <ServiceIcon name={s.icon} className="h-6 w-6" />
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-fg-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>
                          <h3 className="mt-5 font-display text-xl font-bold text-fg-strong">
                            {s.name}
                          </h3>
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
        </Container>
      </Section>

    </>
  );
}
