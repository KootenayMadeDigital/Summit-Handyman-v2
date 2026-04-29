import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function ProjectsSection() {
  const featured = projects.slice(0, 6);
  return (
    <Section id="projects" size="lg" className="bg-summit-black">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="Recent Summits"
            title={
              <>
                Quality you can{" "}
                <span className="font-serif italic font-normal text-gradient-gold">see.</span>
              </>
            }
            description="A few jobs from the last month. Drag the slider to see before and after — every project handled by Brody himself."
          />
          <Reveal>
            <Button href="/projects" variant="secondary" size="md" withArrow>
              See all projects
            </Button>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <RevealItem key={p.slug}>
              <article className="group">
                <BeforeAfterSlider
                  beforeSrc={p.beforeImage}
                  afterSrc={p.afterImage}
                  beforeAlt={`${p.title} — before`}
                  afterAlt={`${p.title} — after`}
                  className="aspect-[4/3]"
                />
                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-4 flex items-start justify-between gap-3 group/link"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs uppercase tracking-wider text-summit-gold font-semibold">
                      {p.area} · {p.duration}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-summit-mist group-hover/link:text-summit-gold transition-colors text-balance">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-summit-stone leading-snug text-pretty">
                      {p.shortStory}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-summit-stone group-hover/link:text-summit-gold group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all flex-shrink-0" />
                </Link>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <a
            href={site.social.instagram.url}
            target="_blank"
            rel="noopener"
            className="mt-14 inline-flex items-center gap-2 text-sm text-summit-mist/80 hover:text-summit-gold transition-colors group"
          >
            <Instagram className="h-4 w-4" />
            See daily updates on Instagram
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}
