import { Instagram, ArrowUpRight, Info } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function ProjectsSection() {
  const featured = projects.slice(0, 6);
  const hasSamples = featured.some((p) => p.isSample);

  return (
    <Section id="projects" size="lg" className="bg-surface relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-14">
          <SectionTitle
            eyebrow="Recent Summits"
            title={
              <>
                Quality you can{" "}
                <span className="font-serif italic font-normal text-gradient-gold">see.</span>
              </>
            }
            description="Recent work across the Lower Mainland — every job handled by Brody himself."
          />
          <Reveal>
            <Button href={site.social.instagram.url} variant="secondary" size="md" withArrow>
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </Button>
          </Reveal>
        </div>

        {hasSamples && (
          <Reveal>
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-divider bg-surface-panel/60 p-4 text-sm text-fg-muted">
              <Info className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              <p>
                Photos shown are representative samples from Brody's portfolio. Full
                job-by-job captions and case studies will appear here as new work is documented.{" "}
                <a
                  href={site.social.instagram.url}
                  target="_blank"
                  rel="noopener"
                  className="text-accent font-semibold hover:text-accent-hot underline-offset-4 hover:underline"
                >
                  Follow on Instagram
                </a>{" "}
                for daily updates.
              </p>
            </div>
          </Reveal>
        )}

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((p) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} />
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
