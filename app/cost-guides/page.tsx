import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { RevealStagger, RevealItem } from "@/components/ui/reveal";
import { FinalCTA } from "@/components/sections/final-cta";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Cost Guides & Resources",
  description:
    "Real handyman costs and homeowner guidance for Lower Mainland BC homes. Drywall, painting, decks, gutters, smart home — practical advice from a working pro.",
  alternates: { canonical: "/cost-guides" },
};

export default function CostGuidesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cost Guides" }]}
        eyebrow="Resources"
        title={
          <>
            Real costs.{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              Real homes.
            </span>{" "}
            Lower Mainland.
          </>
        }
        description="Practical guidance from a working handyman — what jobs really cost, how to spot when a quote is too low, and which repairs save thousands later."
      />

      <Section size="lg">
        <Container>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <RevealItem key={g.slug}>
                <Link
                  href={`/cost-guides/${g.slug}`}
                  className="group block h-full rounded-2xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/60 hover:bg-summit-panel/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={g.hero}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-summit-black via-summit-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-summit-gold font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      {g.readingMinutes} min read
                      {g.area && (
                        <>
                          <span className="text-summit-stone/40">·</span>
                          <span>{g.area}</span>
                        </>
                      )}
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold text-summit-mist group-hover:text-summit-gold transition-colors text-balance leading-snug">
                      {g.title}
                    </h2>
                    <p className="mt-2 text-sm text-summit-stone leading-relaxed line-clamp-3">
                      {g.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-summit-gold">
                      Read guide
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
