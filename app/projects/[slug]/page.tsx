import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Clock, Calendar, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FinalCTA } from "@/components/sections/final-cta";
import { projects, getProject } from "@/lib/projects";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.area}`,
    description: project.longStory,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.serviceSlug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        eyebrow={`${project.area} · Recent Summit`}
        title={project.title}
        description={project.shortStory}
      />

      <Section size="md">
        <Container>
          <Reveal>
            <BeforeAfterSlider
              beforeSrc={project.beforeImage}
              afterSrc={project.afterImage}
              beforeAlt={`${project.title} before`}
              afterAlt={`${project.title} after`}
              className="aspect-[16/10]"
            />
          </Reveal>
        </Container>
      </Section>

      <Section size="lg">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
                The Story
              </p>
              <p className="text-xl text-summit-mist/85 leading-relaxed font-serif text-pretty">
                {project.longStory}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <MagneticCTA href={`/quote?service=${project.serviceSlug}`} size="lg">
                  Get a Similar Quote
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
                <Button
                  href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Like this project: ${project.title}`)}`}
                  variant="secondary"
                  size="lg"
                >
                  <Mail className="h-5 w-5" />
                  Email Brody
                </Button>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.1}>
              <dl className="rounded-2xl bg-summit-panel border border-summit-slate/60 divide-y divide-summit-slate/40">
                <div className="flex items-center justify-between p-5">
                  <dt className="flex items-center gap-2 text-sm text-summit-stone">
                    <MapPin className="h-4 w-4 text-summit-gold" />
                    Location
                  </dt>
                  <dd>
                    <Link
                      href={`/areas/${project.area.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-summit-mist font-semibold hover:text-summit-gold transition-colors"
                    >
                      {project.area}
                    </Link>
                  </dd>
                </div>
                <div className="flex items-center justify-between p-5">
                  <dt className="flex items-center gap-2 text-sm text-summit-stone">
                    <Clock className="h-4 w-4 text-summit-gold" />
                    Duration
                  </dt>
                  <dd className="text-summit-mist font-semibold">{project.duration}</dd>
                </div>
                <div className="flex items-center justify-between p-5">
                  <dt className="flex items-center gap-2 text-sm text-summit-stone">
                    <Calendar className="h-4 w-4 text-summit-gold" />
                    Completed
                  </dt>
                  <dd className="text-summit-mist font-semibold">{project.date}</dd>
                </div>
                {service && (
                  <div className="flex items-center justify-between p-5">
                    <dt className="text-sm text-summit-stone">Service</dt>
                    <dd>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-summit-gold font-semibold hover:text-summit-gold-hot transition-colors"
                      >
                        {service.name}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="sm">
        <Container size="narrow">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-summit-stone hover:text-summit-gold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
          </Reveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
