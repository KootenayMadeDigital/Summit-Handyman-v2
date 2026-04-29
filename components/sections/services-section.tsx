import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services, serviceCategories, type ServiceCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

const categoryOrder: ServiceCategory[] = ["interior", "exterior", "safety"];

export function ServicesSection() {
  return (
    <Section id="services" size="lg" className="relative">
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
          description="Welcome to Summit Handyman, where quality craftsmanship meets exceptional service. From everyday fixes to weekend overhauls — one trusted pro for the whole list."
        />

        <div className="mt-16 space-y-16">
          {categoryOrder.map((cat) => {
            const list = services.filter((s) => s.category === cat);
            const meta = serviceCategories[cat];
            return (
              <div key={cat}>
                <Reveal>
                  <div className="flex items-end justify-between gap-4 mb-8 border-b border-summit-slate/40 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold mb-1">
                        Category
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-summit-mist">
                        {meta.name}
                      </h3>
                    </div>
                    <p className="hidden md:block text-sm text-summit-stone max-w-sm text-right">
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
                          "bg-summit-panel border border-summit-slate/60",
                          "hover:border-summit-gold/60 hover:bg-summit-panel/80",
                          "transition-all duration-300 ease-editorial",
                          "hover:shadow-gold hover:-translate-y-0.5",
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="h-12 w-12 rounded-xl bg-summit-gold/10 border border-summit-gold/20 flex items-center justify-center group-hover:bg-summit-gold/20 transition-colors">
                            <ServiceIcon name={s.icon} className="h-6 w-6" />
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-summit-stone group-hover:text-summit-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <h4 className="mt-5 font-display text-xl font-bold text-summit-mist">
                          {s.name}
                        </h4>
                        <p className="mt-2 text-sm text-summit-stone leading-relaxed">
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
          <p className="mt-16 text-center text-sm text-summit-stone italic font-serif text-lg">
            "The view is always better from a home that works."
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
