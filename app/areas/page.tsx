import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { FinalCTA } from "@/components/sections/final-cta";
import { ServiceAreaMapSection } from "@/components/sections/service-area-map";
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
                  className="group block h-full p-7 rounded-2xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/60 hover:bg-summit-panel/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-summit-gold" strokeWidth={1.5} />
                    <ArrowUpRight className="h-5 w-5 text-summit-stone group-hover:text-summit-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-summit-mist mb-2">
                    {a.name}, {a.province}
                  </h2>
                  <p className="text-sm text-summit-stone leading-relaxed mb-5">{a.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.neighborhoods.slice(0, 4).map((n) => (
                      <span
                        key={n}
                        className="text-[11px] px-2 py-1 rounded-full bg-summit-black/40 border border-summit-slate/40 text-summit-mist/70"
                      >
                        {n}
                      </span>
                    ))}
                    {a.neighborhoods.length > 4 && (
                      <span className="text-[11px] px-2 py-1 rounded-full text-summit-stone">
                        +{a.neighborhoods.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="mt-5 pt-5 border-t border-summit-slate/40 flex items-center justify-between text-xs">
                    <span className="text-summit-stone/70">Response</span>
                    <span className="text-summit-gold font-semibold">{a.responseTime}</span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <ServiceAreaMapSection />
      <FinalCTA />
    </>
  );
}
