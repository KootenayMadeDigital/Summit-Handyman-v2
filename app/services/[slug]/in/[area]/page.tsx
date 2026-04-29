import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, Clock, ShieldCheck, HandCoins } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services, getService } from "@/lib/services";
import { aggregateRating } from "@/lib/reviews";
import { areas, getArea } from "@/lib/areas";
import { site } from "@/lib/site";

/**
 * Combo SEO page: /services/[service]/in/[area]
 *
 * Generates a dedicated landing page for every (service x area) combination,
 * targeting "[service] in [city]" search intent. Examples:
 *   /services/drywall-repair/in/langley
 *   /services/painting/in/surrey
 *   /services/gutter-maintenance/in/abbotsford
 *
 * Each page is a unique 600+ word landing experience with:
 *  - City-targeted title and meta description
 *  - LocalBusiness + Service + BreadcrumbList JSON-LD
 *  - City-aware copy and value props
 *  - Pricing table specific to the service
 *  - FAQs from the service
 *  - Cross-links to all other services in this city + same service in other cities
 */

type PageParams = { slug: string; area: string };

export function generateStaticParams(): PageParams[] {
  return services.flatMap((s) =>
    areas.map((a) => ({ slug: s.slug, area: a.slug })),
  );
}

export async function generateMetadata(
  { params }: { params: Promise<PageParams> },
): Promise<Metadata> {
  const { slug, area: areaSlug } = await params;
  const service = getService(slug);
  const area = getArea(areaSlug);
  if (!service || !area) return {};

  const title = `${service.name} in ${area.name}, BC`;
  const description = `${service.name} in ${area.name}: ${service.tagline} ${site.pricing.minimumDisplay}. Licensed and insured. Free written estimates. Email Brody at Summit Handyman for a written estimate.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/in/${area.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      type: "website",
    },
  };
}

export default async function ServiceInAreaPage(
  { params }: { params: Promise<PageParams> },
) {
  const { slug, area: areaSlug } = await params;
  const service = getService(slug);
  const area = getArea(areaSlug);
  if (!service || !area) notFound();

  const otherServicesInCity = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);
  const sameServiceOtherCities = areas.filter((a) => a.slug !== area.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${site.url}/services/${service.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${service.name} in ${area.name}`,
        item: `${site.url}/services/${service.slug}/in/${area.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}/in/${area.slug}#service`,
    name: `${service.name} in ${area.name}, BC`,
    description: service.longDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      "@id": `${site.url}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" },
    },
    serviceType: service.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.rating.toFixed(1),
      reviewCount: String(aggregateRating.reviewCount),
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/services/${service.slug}/in/${area.slug}#business`,
    name: `${site.name} - ${service.name} in ${area.name}`,
    image: `${site.url}/images/logo.webp`,
    url: `${site.url}/services/${service.slug}/in/${area.slug}`,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.rating.toFixed(1),
      reviewCount: String(aggregateRating.reviewCount),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
          { label: `In ${area.name}` },
        ]}
        eyebrow={`${service.name} · ${area.name}, ${area.province}`}
        title={
          <>
            {service.name} in{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              {area.name}.
            </span>
          </>
        }
        description={`${service.tagline} Serving ${area.name} from ${area.neighborhoods.slice(0, 3).join(", ")} and beyond. ${site.pricing.minimumDisplay}, free written estimates, licensed and insured.`}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-3">
          <MagneticCTA
            href={`/quote?service=${service.slug}&area=${area.slug}`}
            size="lg"
          >
            Submit a Quote Request
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <a
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`${service.name} quote in ${area.name}`)}`}
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            or email Brody directly
          </a>
        </div>
      </PageHero>

      {/* Quick trust band */}
      <Section size="sm" className="bg-surface-panel border-y border-divider">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-x-6">
            <Stat Icon={HandCoins} label="$150 minimum" sub="No hourly games" />
            <Stat Icon={ShieldCheck} label="Licensed & insured" sub="Comprehensive liability" />
            <Stat Icon={Clock} label={area.responseTime} sub={`Response in ${area.name}`} />
            <Stat Icon={MapPin} label={`${area.name} local`} sub="Owner-operated" />
          </div>
        </Container>
      </Section>

      {/* What you get */}
      <Section size="lg" className="bg-surface">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="summit-icon-box h-14 w-14 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center mb-6">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-strong mb-5 text-balance">
                  {service.name} done right in {area.name}
                </h2>
                <p className="text-fg/85 leading-relaxed text-base sm:text-lg text-pretty">
                  {service.longDescription}
                </p>
                <p className="mt-6 text-fg/85 leading-relaxed text-pretty">
                  {area.longDescription}
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <h3 className="font-display text-xl font-bold text-fg-strong mb-5">
                What's included
              </h3>
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="summit-card-motion motion-trust flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-surface-panel border border-divider-strong"
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

      {/* How pricing works */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container size="narrow">
          <SectionTitle
            eyebrow={`${service.name} pricing in ${area.name}`}
            title={
              <>
                Honest pricing,{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  by quote.
                </span>
              </>
            }
            description={`Every ${service.name.toLowerCase()} job in ${area.name} is quoted in writing after Brody reviews your photos and details. ${site.pricing.minimumDisplay}. No hourly games, no surprise charges.`}
            className="mb-8"
          />
          <Reveal>
            <div className="summit-card-motion motion-trust rounded-2xl bg-surface border border-divider-strong p-6 sm:p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-fg/85 text-sm sm:text-base">
                    <strong className="text-fg-strong">Submit photos and details</strong> through the quote form so scope is clear before pricing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-fg/85 text-sm sm:text-base">
                    <strong className="text-fg-strong">Get a written estimate within 24 hours</strong> after Brody reviews the scope.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-fg/85 text-sm sm:text-base">
                    <strong className="text-fg-strong">{site.pricing.minimumDisplay}</strong> covers tools, insurance, travel, and craftsmanship time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-fg/85 text-sm sm:text-base">
                    <strong className="text-fg-strong">The estimate is the price you pay</strong>, barring scope changes you approve in writing.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <Section size="lg" className="bg-surface">
          <Container size="narrow">
            <SectionTitle
              eyebrow="Common questions"
              title={
                <>
                  About {service.name.toLowerCase()} in{" "}
                  <span className="font-serif italic font-normal text-gradient-gold">
                    {area.name}.
                  </span>
                </>
              }
              align="center"
              className="mb-12"
            />
            <Reveal>
              <ul className="space-y-3">
                {service.faqs.map((f, i) => (
                  <li
                    key={i}
                    className="summit-card-motion motion-review rounded-2xl bg-surface-panel border border-divider-strong p-6"
                  >
                    <h3 className="font-display text-lg font-bold text-fg-strong mb-2">
                      {f.q}
                    </h3>
                    <p className="text-fg/85 leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* Cross-link: other services in same city */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow={`Other handyman services in ${area.name}`}
            title={`Brody also handles these in ${area.name}.`}
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {otherServicesInCity.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/in/${area.slug}`}
                className="summit-card-motion motion-service group flex items-center gap-3 p-4 rounded-xl bg-surface border border-divider-strong hover:border-accent-soft transition-all min-w-0"
              >
                <ServiceIcon name={s.icon} className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-semibold text-fg-strong group-hover:text-accent transition-colors truncate">
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-sm text-fg-muted">
              <Link
                href={`/areas/${area.slug}`}
                className="text-accent font-semibold underline-offset-4 hover:underline"
              >
                See everything in {area.name} →
              </Link>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Cross-link: same service in other cities */}
      <Section size="md" className="bg-surface">
        <Container>
          <SectionTitle
            eyebrow={`${service.name} elsewhere`}
            title={`${service.name} available across the Lower Mainland.`}
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {sameServiceOtherCities.map((a) => (
              <Link
                key={a.slug}
                href={`/services/${service.slug}/in/${a.slug}`}
                className="summit-card-motion motion-area group flex items-center justify-between gap-2 p-4 rounded-xl bg-surface-panel border border-divider-strong hover:border-accent-soft transition-all"
              >
                <span className="text-sm font-semibold text-fg-strong group-hover:text-accent transition-colors">
                  {a.name}
                </span>
                <ArrowRight className="h-4 w-4 text-fg-muted group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Local CTA */}
      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container size="narrow">
          <Reveal>
            <div className="summit-card-motion motion-cta text-center space-y-5 rounded-[2rem] border border-accent/30 bg-surface-panel/55 p-6 sm:p-8 shadow-panel-lg">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                Ready in {area.name}?
              </p>
              <h2 className="font-display text-display-xl font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                Get a {service.name.toLowerCase()} quote{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  in {area.name}.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-fg/80 max-w-xl mx-auto leading-relaxed">
                {area.responseTime} response. {site.pricing.minimumDisplay}. Free written estimate.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <MagneticCTA
                  href={`/quote?service=${service.slug}&area=${area.slug}`}
                  size="lg"
                >
                  Submit a quote request
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
              </div>
              <p className="pt-2 text-sm text-fg-muted">
                Prefer to skip the form?{" "}
                <a
                  href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`${service.name} in ${area.name}`)}`}
                  className="text-accent font-semibold underline-offset-4 hover:underline"
                >
                  Email Brody directly
                </a>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function Stat({
  Icon,
  label,
  sub,
}: {
  Icon: typeof MapPin;
  label: string;
  sub: string;
}) {
  return (
    <div className="summit-card-motion motion-trust flex items-start gap-3 min-w-0 rounded-2xl border border-divider-strong bg-surface/55 p-4">
      <Icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.6} />
      <div className="min-w-0">
        <p className="font-display text-base sm:text-lg font-bold text-fg-strong leading-tight">
          {label}
        </p>
        <p className="text-xs sm:text-sm text-fg-muted leading-snug">{sub}</p>
      </div>
    </div>
  );
}
