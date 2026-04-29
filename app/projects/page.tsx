import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { RevealStagger, RevealItem } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FinalCTA } from "@/components/sections/final-cta";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Recent Summits — Project Gallery",
  description:
    "Recent handyman work across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Drag any slider to see before and after.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        eyebrow="Recent Summits"
        title={
          <>
            Quality you can{" "}
            <span className="font-serif italic font-normal text-gradient-gold">see.</span>
          </>
        }
        description="A curated set of recent jobs. Drag any slider to see the transformation. Every project handled by Brody himself."
      />

      <Section size="lg">
        <Container>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((p) => (
              <RevealItem key={p.slug}>
                <article className="group">
                  <BeforeAfterSlider
                    beforeSrc={p.beforeImage}
                    afterSrc={p.afterImage}
                    beforeAlt={`${p.title} before`}
                    afterAlt={`${p.title} after`}
                    className="aspect-[4/3]"
                  />
                  <Link href={`/projects/${p.slug}`} className="mt-4 flex items-start justify-between gap-4 group/link">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
                        {p.area} · {p.duration}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold text-summit-mist group-hover/link:text-summit-gold transition-colors">
                        {p.title}
                      </h2>
                      <p className="mt-1 text-sm text-summit-stone leading-snug">{p.shortStory}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 text-summit-stone group-hover/link:text-summit-gold group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all flex-shrink-0" />
                  </Link>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
