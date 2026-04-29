import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { ServiceIcon } from "@/components/ui/service-icon";
import { ProjectCard } from "@/components/ui/project-card";
import { services, getService } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.longDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);
  const relevantProjects = projects.filter((p) => p.serviceSlug === service.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        eyebrow={service.category}
        title={service.name}
        description={service.tagline}
      >
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <MagneticCTA href={`/quote?service=${service.slug}`} size="lg">
            Get a Quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <Button
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Quote: ${service.name}`)}`}
            variant="secondary"
            size="lg"
          >
            <Mail className="h-5 w-5" />
            Email Brody
          </Button>
        </div>
      </PageHero>

      {/* What's included */}
      <Section size="lg">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="h-14 w-14 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center mb-6">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-strong mb-5 text-balance">
                  What's included
                </h2>
                <p className="text-fg-strong/80 leading-relaxed font-serif text-lg text-pretty">
                  {service.longDescription}
                </p>
                <p className="mt-6 text-sm text-fg-muted">
                  <span className="text-accent font-semibold">{site.pricing.minimumDisplay}.</span>{" "}
                  Free written estimates. Licensed & insured.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 p-5 rounded-xl bg-surface-panel border border-divider-strong hover:border-accent/50 transition-colors"
                  >
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-accent-soft border border-accent/40 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                    </span>
                    <span className="text-fg-strong leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Recent work + inline related — combined section */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          {relevantProjects.length > 0 && (
            <>
              <SectionTitle
                eyebrow="Recent work"
                title={
                  <>
                    Recent {service.name.toLowerCase()}{" "}
                    <span className="font-serif italic font-normal text-gradient-gold">jobs.</span>
                  </>
                }
              />
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relevantProjects.slice(0, 3).map((p) => (
                  <Reveal key={p.slug}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>
            </>
          )}

          {related.length > 0 && (
            <Reveal>
              <p className="mt-12 text-sm text-fg-muted">
                Related:{" "}
                {related.map((r, i) => (
                  <span key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="text-accent font-semibold underline-offset-4 hover:underline"
                    >
                      {r.name}
                    </Link>
                    {i < related.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </Reveal>
          )}
        </Container>
      </Section>
    </>
  );
}
