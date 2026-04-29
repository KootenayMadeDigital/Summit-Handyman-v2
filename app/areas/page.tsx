import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { FinalCTA } from "@/components/sections/final-cta";
import { ServiceAreaMapSection } from "@/components/sections/service-area-map";
import { SectionDivider } from "@/components/ui/section-divider";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Summit Handyman serves Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Find local service info, response times, and recent work in your area.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Areas" }]}
        eyebrow="Service Areas"
        title={
          <>
            Six cities across the{" "}
            <span className="font-serif italic font-normal text-gradient-gold">Lower Mainland.</span>
          </>
        }
        description="From Langley home base to White Rock bluffs to Abbotsford acreages — same handyman, same standard, same direct line."
      />

      <Section size="lg">
        <Container>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((a) => (
              <RevealItem key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="group block h-full p-7 rounded-2xl bg-surface-panel border border-divider-strong hover:border-accent-soft hover:bg-surface-elevated transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    <ArrowUpRight className="h-5 w-5 text-fg-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-fg-strong mb-2">
                    {a.name}, {a.province}
                  </h2>
                  <p className="text-sm text-fg-muted leading-relaxed mb-5">{a.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.neighborhoods.slice(0, 4).map((n) => (
                      <span
                        key={n}
                        className="text-[11px] px-2 py-1 rounded-full bg-surface-elevated/80 border border-divider text-fg-strong/70"
                      >
                        {n}
                      </span>
                    ))}
                    {a.neighborhoods.length > 4 && (
                      <span className="text-[11px] px-2 py-1 rounded-full text-fg-muted">
                        +{a.neighborhoods.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="mt-5 pt-5 border-t border-divider flex items-center justify-between text-xs">
                    <span className="text-fg-muted/70">Response</span>
                    <span className="text-accent font-semibold">{a.responseTime}</span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <ServiceAreaMapSection />

      <SectionDivider variant="mark" />

      <FinalCTA />
    </>
  );
}
