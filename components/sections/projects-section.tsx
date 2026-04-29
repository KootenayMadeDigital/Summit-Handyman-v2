import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

/**
 * RECENT WORK — answers "Do they do my kind of job, well?"
 * Static photo cards with hover-reveal overlay. Sliders stay on the dedicated
 * /projects and /projects/[slug] pages where there are real before/after assets.
 */
export function ProjectsSection() {
  const featured = projects.slice(0, 6);
  return (
    <Section id="projects" size="lg" className="bg-surface relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Recent Summits"
            title={
              <>
                Quality you can{" "}
                <span className="font-serif italic font-normal text-gradient-gold">see.</span>
              </>
            }
            description="Six recent jobs across the Lower Mainland — every one handled by Brody himself."
          />
          <Reveal>
            <Button href="/projects" variant="secondary" size="md" withArrow>
              See all projects
            </Button>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-divider-strong bg-surface-panel transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-accent-soft hover:shadow-gold-lg"
              >
                <div className="photo-grade relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.afterImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-summit-black/95 via-summit-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-summit-black/70 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-summit-gold border border-summit-gold/30">
                      {p.area}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-summit-gold font-semibold mb-1">
                      {p.duration}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-summit-mist text-balance leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-summit-mist/75 leading-snug text-pretty line-clamp-2">
                      {p.shortStory}
                    </p>
                  </div>
                  <span className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-summit-black/70 text-summit-mist backdrop-blur transition-colors group-hover:bg-summit-gold group-hover:text-summit-black">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <a
            href={site.social.instagram.url}
            target="_blank"
            rel="noopener"
            className="mt-12 inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent transition-colors group"
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
