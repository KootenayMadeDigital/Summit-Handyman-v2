import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { areas } from "@/lib/areas";

export function AreasSection() {
  return (
    <Section id="areas" size="lg" className="relative">
      <Container>
        <SectionTitle
          eyebrow="Service Areas"
          title={
            <>
              Six cities. One{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                trusted pro.
              </span>
            </>
          }
          description="Same-day or next-day response across the Lower Mainland. Click any city for local jobs, neighborhoods, and response times."
        />

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a) => (
            <RevealItem key={a.slug}>
              <Link
                href={`/areas/${a.slug}`}
                className="group block h-full p-5 sm:p-6 md:p-7 rounded-2xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/60 hover:bg-summit-panel/80 transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:shadow-gold min-w-0"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <MapPin className="h-6 w-6 text-summit-gold" strokeWidth={1.5} />
                  <ArrowUpRight className="h-5 w-5 text-summit-stone group-hover:text-summit-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-summit-mist mb-2 leading-tight">
                  {a.name}
                </h3>
                <p className="text-sm text-summit-stone leading-relaxed text-pretty">{a.description}</p>
                <div className="mt-5 pt-5 border-t border-summit-slate/40 flex items-center justify-between gap-3 text-xs">
                  <span className="text-summit-stone/70 flex-shrink-0">Response</span>
                  <span className="text-summit-gold font-semibold text-right">{a.responseTime}</span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
