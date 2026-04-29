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
    description: `Top-rated handyman in ${area.name}, BC. ${area.description} ${site.pricing.minimumDisplay}. Licensed and insured. Email Brody for a 24-hour reply.`,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `Handyman in ${area.name}, BC | ${site.name}`,
      description: area.description,
      type: "website",
    },
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
    name: `${site.name} in ${area.name}`,
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
    areaServed: { "@type": "City", name: area.name },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Areas", item: `${site.url}/areas` },
      { "@type": "ListItem", position: 3, name: area.name, item: `${site.url}/areas/${area.slug}` },
    ],
  };

  const areaFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you do handyman work in ${area.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `Yes. Summit Handyman serves all of ${area.name} including ${area.neighborhoods.join(", ")}. ${area.description}` },
      },
      {
        "@type": "Question",
        name: `How fast is response time in ${area.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `${area.responseTime} for ${area.name}. Email is checked throughout the day; most quotes are returned within 24 hours.` },
      },
      {
        "@type": "Question",
        name: `What does a handyman cost in ${area.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `Summit Handyman has a ${site.pricing.minimumDisplay} (no hourly games) for ${area.name}. Free written estimates after a quick description and photos by email.` },
      },
      {
        "@type": "Question",
        name: `Are you licensed and insured for ${area.name} jobs?`,
        acceptedAnswer: { "@type": "Answer", text: "Yes. Summit Handyman is licensed and carries comprehensive liability insurance. All work backed by a come-back-free workmanship promise." },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqSchema) }}
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

      {/* Quick info. combined response + neighborhoods */}
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
                If your neighborhood isn't listed but you're nearby, just ask. odds are it's covered.
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

      {/* About this city — long-form rich content for SEO */}
      <Section size="lg" className="bg-surface">
        <Container size="narrow">
          <SectionTitle
            eyebrow={`About ${area.name}, BC`}
            title={
              <>
                Handyman work in{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  {area.name}.
                </span>
              </>
            }
          />
          <Reveal className="mt-8 space-y-5 text-fg/85 leading-relaxed text-base sm:text-lg max-w-prose">
            <p>{area.longDescription}</p>
            {area.homeTypes.length > 0 && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                  Home types served in {area.name}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {area.homeTypes.map((h) => (
                    <li
                      key={h}
                      className="px-3 py-1.5 rounded-full bg-surface-panel border border-divider-strong text-sm text-fg/85"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {area.landmarks.length > 0 && (
              <p className="text-sm text-fg-muted">
                Service area near {area.landmarks.slice(0, 3).join(", ")} and surrounding {area.name} neighborhoods.
              </p>
            )}
          </Reveal>
        </Container>
      </Section>

      {/* All services available in this area */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow={`Services in ${area.name}`}
            title={
              <>
                Every handyman service{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  in {area.name}.
                </span>
              </>
            }
            description={`Click any service for ${area.name}-specific pricing, scope, and FAQs.`}
          />
          <RevealStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}/in/${area.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-surface border border-divider-strong hover:border-accent-soft transition-all min-w-0"
                >
                  <ServiceIcon name={s.icon} className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-semibold text-fg-strong group-hover:text-accent transition-colors truncate">
                    {s.name} in {area.name}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Area-specific FAQ for SERP rich-result */}
      <Section size="md" className="bg-surface">
        <Container size="narrow">
          <SectionTitle
            eyebrow={`${area.name} FAQ`}
            title={`Common questions about handyman work in ${area.name}.`}
            align="center"
            className="mb-10"
          />
          <Reveal>
            <ul className="space-y-3">
              {areaFaqSchema.mainEntity.map((q, i) => (
                <li key={i} className="rounded-2xl bg-surface-panel border border-divider-strong p-6">
                  <h3 className="font-display text-lg font-bold text-fg-strong mb-2">
                    {q.name}
                  </h3>
                  <p className="text-fg/85 leading-relaxed">{q.acceptedAnswer.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
