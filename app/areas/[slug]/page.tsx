import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { ServiceIcon } from "@/components/ui/service-icon";
import { ProjectCard } from "@/components/ui/project-card";
import { areas, getArea } from "@/lib/areas";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Handyman in ${area.name}, BC`,
    description: `Premium handyman services in ${area.name}, BC. ${area.description} Email or text Brody for a free quote.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const localProjects = projects.filter(
    (p) => p.area.toLowerCase() === area.name.toLowerCase(),
  );

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/areas/${area.slug}#business`,
    name: `${site.name} — ${area.name}`,
    image: `${site.url}/images/logo.webp`,
    url: `${site.url}/areas/${area.slug}`,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: area.province,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.geo.lat,
      longitude: area.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: area.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/areas" },
          { label: area.name },
        ]}
        eyebrow={`Service area · ${area.province}`}
        title={
          <>
            Handyman in{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              {area.name}.
            </span>
          </>
        }
        description={area.description}
      >
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <MagneticCTA href={`/quote?area=${area.slug}`} size="lg">
            Get a {area.name} Quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <Button
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Quote in ${area.name}`)}`}
            variant="secondary"
            size="lg"
          >
            <Mail className="h-5 w-5" />
            Email Brody
          </Button>
        </div>
      </PageHero>

      {/* Quick info — combined response + neighborhoods */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <Reveal className="lg:col-span-4 space-y-5">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.6} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-fg-muted font-semibold">
                    Response time
                  </p>
                  <p className="font-display text-lg font-bold text-fg-strong">
                    {area.responseTime}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.6} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-fg-muted font-semibold">
                    Email Brody
                  </p>
                  <a
                    href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Quote in ${area.name}`)}`}
                    className="font-display text-base font-bold text-fg-strong hover:text-accent transition-colors break-all"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-8" delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Neighborhoods covered
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {area.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="px-3.5 py-1.5 rounded-full bg-surface border border-divider-strong text-sm text-fg-strong"
                  >
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-fg-muted">
                If your neighborhood isn't listed but you're nearby, just ask — odds are it's covered.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Local projects */}
      {localProjects.length > 0 && (
        <Section size="lg">
          <Container>
            <SectionTitle
              eyebrow={`Recent work in ${area.name}`}
              title={
                <>
                  Local jobs,{" "}
                  <span className="font-serif italic font-normal text-gradient-gold">
                    real homes.
                  </span>
                </>
              }
            />
            <RevealStagger className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localProjects.slice(0, 6).map((p) => (
                <RevealItem key={p.slug}>
                  <ProjectCard project={p} />
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      )}

      {/* All services available in this area */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow="Available in this area"
            title={
              <>
                Every Summit service —{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  delivered in {area.name}.
                </span>
              </>
            }
          />
          <RevealStagger className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
            {services.slice(0, 6).map((s) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-surface border border-divider-strong hover:border-accent-soft transition-all"
                >
                  <ServiceIcon name={s.icon} className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-semibold text-fg-strong group-hover:text-accent transition-colors">
                    {s.name}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal>
            <p className="mt-8 text-sm text-fg-muted">
              <Link
                href="/services"
                className="text-accent font-semibold underline-offset-4 hover:underline"
              >
                See all services →
              </Link>
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
