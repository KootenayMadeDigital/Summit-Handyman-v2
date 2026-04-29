import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services, getService } from "@/lib/services";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { aggregateRating } from "@/lib/reviews";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const cityList = "Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale";
  return {
    title: `${service.name} in Langley, Surrey & Lower Mainland BC`,
    description: `${service.name}: ${service.tagline} Serving ${cityList}. ${site.pricing.minimumDisplay}. Licensed and insured. Written estimates within 24 hours.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.longDescription.slice(0, 200),
      type: "website",
      images: [{ url: service.hero, width: 1600, height: 1000, alt: service.name }],
    },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${site.url}/services/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}#service`,
    name: service.name,
    description: service.longDescription,
    provider: { "@type": "HomeAndConstructionBusiness", name: site.name, "@id": `${site.url}/#business` },
    serviceType: service.name,
    areaServed: areas.map((a) => ({ "@type": "City", name: a.name })),
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CAD",
        minPrice: site.pricing.minimum,
      },
      availability: "https://schema.org/InStock",
      url: `${site.url}/quote?service=${service.slug}`,
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: aggregateRating.rating.toFixed(1), reviewCount: String(aggregateRating.reviewCount) },
  };

  const faqSchema = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-3">
          <MagneticCTA href={`/quote?service=${service.slug}`} size="lg">
            Submit a Quote Request
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <a
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Quote: ${service.name}`)}`}
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            or email Brody directly
          </a>
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
                <div className="photo-grade relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-divider-strong shadow-panel-lg">
                  <Image
                    src={service.hero}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="summit-card-motion motion-trust flex items-start gap-4 p-5 rounded-xl bg-surface-panel border border-divider-strong hover:border-accent/50 transition-colors"
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

      {/* Related services inline */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container>
          {related.length > 0 && (
            <Reveal>
              <p className="text-sm text-fg-muted">
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

      {/* Per-city links for SEO */}
      <Section size="md" className="bg-surface">
        <Container>
          <SectionTitle
            eyebrow={`${service.name} by city`}
            title={
              <>
                {service.name}{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  near you.
                </span>
              </>
            }
            description={`Click your city for ${service.name.toLowerCase()} pricing, scope, and local quote guidance.`}
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/services/${service.slug}/in/${a.slug}`}
                className="summit-card-motion motion-service group flex items-center justify-between gap-2 p-4 rounded-xl bg-surface-panel border border-divider-strong hover:border-accent-soft transition-all"
              >
                <span className="text-sm font-semibold text-fg-strong group-hover:text-accent transition-colors">
                  {a.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
