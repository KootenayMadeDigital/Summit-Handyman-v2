import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";
import { Section, SectionTitle, Container } from "@/components/ui/section";
import { ServiceIcon } from "@/components/ui/service-icon";
import { areas, getArea, type Area } from "@/lib/areas";
import { aggregateRating } from "@/lib/reviews";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { areaOg, ogImage } from "@/lib/og";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

type CityProfile = {
  intro: string;
  texture: string;
  serviceFit: string;
  commonJobs: string[];
  trustAngle: string;
  accent: string;
};

const cityProfiles: Record<string, CityProfile> = {
  langley: {
    intro: "Township acreage, Willoughby townhomes, Walnut Grove family houses, and Langley City repair lists all need the same thing: one careful person who actually finishes the job.",
    texture: "Langley mixes new construction, established subdivisions, strata complexes, and rural properties. That makes it a strong fit for bundled repair lists, drywall touch-ups, mounting, doors, trim, exterior maintenance, and property-manager follow-through.",
    serviceFit: "Best fit for homeowners and managers who want clear scope, documented work, and one handyman, one standard across mixed property types.",
    commonJobs: ["Drywall repair and paint touch-ups", "Door, trim, and hardware fixes", "Mounting, assembly, and fixture installs", "Fence, deck, and exterior upkeep"],
    trustAngle: "Langley jobs often involve mixed lists. Brody reviews the whole scope first so the estimate matches the actual home, not a generic hourly guess.",
    accent: "Township homes, strata units, and acreages",
  },
  surrey: {
    intro: "Surrey is dense, varied, and practical: strata towers, townhomes, older detached homes, and rental units all sitting inside one large service area.",
    texture: "From South Surrey and Fleetwood to Guildford, Newton, Whalley, and Panorama Ridge, the work often comes down to clean coordination: access, photos, written scope, and repairs that do not create a second problem.",
    serviceFit: "Best fit for homeowners, strata units, and property managers who want written scope, direct replies, and no rotating crew.",
    commonJobs: ["Tenant turnover punch lists", "Drywall, paint, and finish repairs", "Fixture, hardware, and door work", "Mounting, assembly, and safety installs"],
    trustAngle: "Surrey jobs benefit from clear communication up front. Send the list, address, and photos so Brody can assess the scope before anything gets booked.",
    accent: "Townhomes, towers, and family homes",
  },
  "white-rock": {
    intro: "White Rock homes have a different feel: hillside properties, beach-area condos, older character homes, and exterior surfaces exposed to coastal weather.",
    texture: "Around East Beach, West Beach, Marine Drive, and the hillside neighbourhoods, small repairs often overlap with exterior upkeep, weathered finishes, railings, decks, and detail work that needs to look clean when finished.",
    serviceFit: "Best fit for homeowners who care about careful finish work, tidy access, and repairs that respect a more visible home environment.",
    commonJobs: ["Exterior maintenance and touch-ups", "Deck and fence upkeep", "Interior repair lists", "Fixture, hardware, and safety upgrades"],
    trustAngle: "White Rock jobs are often about detail. Brody keeps the scope written so exterior upkeep, interior repairs, and finish expectations stay clear.",
    accent: "Coastal homes, condos, and hillside properties",
  },
  aldergrove: {
    intro: "Aldergrove brings together suburban family homes, working acreages, country properties, and practical repair lists that do not need a big contractor production.",
    texture: "Around Aldergrove Town Centre, Otter District, and County Line, the work often leans toward exterior upkeep, doors, fences, decks, pressure washing, and interior repair lists for busy households.",
    serviceFit: "Best fit for owners who need versatile handyman help across house, shop, yard, and acreage details without handing the job to a mystery crew.",
    commonJobs: ["Fence, deck, and gate repairs", "Pressure washing and exterior upkeep", "Door, trim, and hardware fixes", "Interior repairs and painting prep"],
    trustAngle: "Aldergrove properties can have scattered repair lists. Brody helps turn that list into a written scope so the day has a plan.",
    accent: "Acreages, country properties, and family homes",
  },
  abbotsford: {
    intro: "Abbotsford spans established neighbourhoods, newer master-planned homes, rural properties, townhomes, and rental units that need practical repairs handled cleanly.",
    texture: "From Clearbrook and Abbotsford East to Auguston, Mount Lehman, Matsqui, Bradner, and Sumas Mountain, the work can range from drywall and paint to seasonal exterior maintenance and turnover lists.",
    serviceFit: "Best fit for homeowners and property managers who want repair lists handled with written scope, practical documentation, and clear replies.",
    commonJobs: ["Drywall, paint, and turnover repairs", "Exterior maintenance and small fixes", "Door, trim, and hardware work", "Mounting, assembly, and fixture installs"],
    trustAngle: "Abbotsford bookings work best when the list is clear up front. Photos, access notes, and priorities help Brody quote accurately before the visit.",
    accent: "Established homes, rural properties, and townhomes",
  },
  cloverdale: {
    intro: "Cloverdale has a grounded mix of historic homes, Clayton Heights townhomes, family houses, and rural edges that call for practical, careful repair work.",
    texture: "From Cloverdale Town Centre and West Cloverdale to Clayton Heights and Hazelwood, common projects include interior repair lists, mounting, doors, trim, paint prep, exterior upkeep, and rental-ready fixes.",
    serviceFit: "Best fit for families, strata units, rentals, and property managers who want the request reviewed by the person doing the work.",
    commonJobs: ["Interior repair lists", "Door, trim, and hardware fixes", "Painting prep and drywall touch-ups", "Mounting, assembly, and exterior upkeep"],
    trustAngle: "Cloverdale jobs often need the basics done properly. Brody keeps the estimate written, the communication direct, and the finish clean.",
    accent: "Historic core, townhomes, and family houses",
  },
};

const processSteps = [
  {
    title: "Send the scope",
    body: "Use the quote form and include the city, address, repair list, photos, and any access notes.",
    Icon: ClipboardCheck,
  },
  {
    title: "Brody reviews it",
    body: "The scope is checked before scheduling so the estimate is based on the actual home, not a loose hourly guess.",
    Icon: FileText,
  },
  {
    title: "Work gets handled cleanly",
    body: "Brody shows up prepared, protects the space, documents what matters, and leaves the repair finished.",
    Icon: Wrench,
  },
];

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const profile = cityProfiles[area.slug];
  const title = `Handyman in ${area.name}, BC`;
  const description = `Handyman in ${area.name}, BC for homeowners and property managers. ${profile?.accent ?? area.description}. ${site.pricing.minimumDisplay}. Licensed and insured. Written estimates within 24 hours.`;
  const image = areaOg(area.slug);

  return {
    title,
    description,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      type: "website",
      images: ogImage(image, `${title} from ${site.name}`),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function AreaPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const profile = cityProfiles[area.slug];

  const cityServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/areas/${area.slug}#handyman-service`,
    name: `Handyman services in ${area.name}, BC`,
    description: profile.serviceFit,
    provider: { "@type": "HomeAndConstructionBusiness", "@id": `${site.url}/#business`, name: site.name },
    serviceType: "Handyman services",
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" },
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.geo.lat,
        longitude: area.geo.lng,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${area.name} handyman services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.name} in ${area.name}`,
          url: `${site.url}/services/${service.slug}/in/${area.slug}`,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.rating.toFixed(1),
      reviewCount: String(aggregateRating.reviewCount),
    },
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

  const areaFaqs = [
    {
      q: `Do you do handyman work in ${area.name}?`,
      a: `Yes. Summit Handyman serves ${area.name}, including ${area.neighborhoods.join(", ")}. ${area.description}`,
    },
    {
      q: `How quickly does Brody reply to ${area.name} quote requests?`,
      a: `Written quote requests are reviewed within 24 hours. Scheduling depends on scope, access, materials, and Brody's current calendar.`,
    },
    {
      q: `What does a handyman cost in ${area.name}?`,
      a: `Summit Handyman has a ${site.pricing.minimumDisplay}. Brody provides free written estimates after reviewing the project description, photos, and location.`,
    },
    {
      q: `Are you licensed and insured for ${area.name} jobs?`,
      a: "Yes. Summit Handyman is licensed and carries comprehensive liability insurance. Work is backed by Brody's workmanship promise.",
    },
  ];

  const areaFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: areaFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqSchema) }} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/areas" },
          { label: area.name },
        ]}
        eyebrow={`${area.name}, ${area.province} handyman service`}
        title={
          <>
            Handyman in {area.name} for homes that need the job done right.
            <span className="block font-serif italic font-normal text-gradient-gold">
              Written estimate. Clean work. Brody on the tools.
            </span>
          </>
        }
        description={profile.intro}
      >
        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
          <MagneticCTA href={`/quote?area=${area.slug}`} size="lg">
            Get a {area.name} quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <p className="text-sm text-fg-muted">
            The form sends your {area.name} request straight to Brody.
          </p>
        </div>
      </PageHero>

      <Section size="lg" className="relative overflow-hidden bg-surface">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <Container className="relative">
          <div className="grid gap-5 lg:grid-cols-4">
            <ProofCard Icon={Clock} label="Quote reply" value={area.responseTime} body="Same quote expectation across every Summit service area." />
            <ProofCard Icon={ShieldCheck} label="Business standard" value="Licensed and insured" body="A real local business, not a marketplace mystery crew." />
            <ProofCard Icon={MapPin} label="Local coverage" value={`${area.neighborhoods.length} areas listed`} body={area.neighborhoods.slice(0, 3).join(", ")} />
            <ProofCard Icon={Sparkles} label="Minimum" value={site.pricing.minimumDisplay} body="Clear starting point before scope turns into guesswork." />
          </div>
        </Container>
      </Section>

      <Section size="lg" className="grainient-promise relative overflow-hidden border-y border-divider">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-stretch">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-accent/35 bg-surface-panel/85 p-6 shadow-panel-lg backdrop-blur sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Local feel
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-fg-strong text-balance sm:text-4xl">
                  {profile.accent}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-fg/85">
                  {profile.texture}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid h-full gap-4 sm:grid-cols-2">
                <LocalPanel title="Neighbourhoods" items={area.neighborhoods} Icon={MapPin} />
                <LocalPanel title="Home types" items={area.homeTypes} Icon={Home} />
                <LocalPanel title="Nearby reference points" items={area.landmarks} Icon={MapPin} />
                <div className="rounded-[1.5rem] border border-divider-strong bg-surface-panel p-5">
                  <FileText className="mb-4 h-6 w-6 text-accent" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold text-fg-strong">Why scope matters</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {profile.trustAngle}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow={`Common work in ${area.name}`}
            title={
              <>
                The jobs that fit Summit's one-handyman model in {area.name}.
                <span className="block font-serif italic font-normal text-gradient-gold">
                  Practical repairs, handled cleanly.
                </span>
              </>
            }
            description={profile.serviceFit}
            align="center"
            className="mb-12 sm:mb-14"
          />
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.05}>
            {profile.commonJobs.map((job) => (
              <RevealItem key={job}>
                <div className="summit-card-motion motion-service h-full rounded-[1.5rem] border border-divider-strong bg-surface p-6 shadow-panel transition-all duration-300 hover:border-accent-soft">
                  <CheckCircle2 className="mb-5 h-6 w-6 text-accent" strokeWidth={1.7} />
                  <h3 className="font-display text-lg font-bold leading-tight text-fg-strong">{job}</h3>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <SectionTitle
              eyebrow="How it works"
              title={
                <>
                  A clear process for {area.name} repair lists.
                  <span className="block font-serif italic font-normal text-gradient-gold">
                    No guessing game.
                  </span>
                </>
              }
              description="A local page should make the next step obvious: pick the job, send the details, and get a written reply from Brody."
              className="mb-0"
            />
            <RevealStagger className="grid gap-4" staggerDelay={0.05}>
              {processSteps.map((step, index) => (
                <RevealItem key={step.title}>
                  <div className="flex gap-4 rounded-[1.5rem] border border-divider-strong bg-surface-panel p-5 shadow-panel">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-accent-soft font-display text-lg font-bold text-accent">
                      {index + 1}
                    </div>
                    <div>
                      <step.Icon className="mb-3 h-5 w-5 text-accent" strokeWidth={1.6} />
                      <h3 className="font-display text-xl font-bold text-fg-strong">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow={`Services in ${area.name}`}
            title={
              <>
                Pick the exact repair path for {area.name}.
                <span className="block font-serif italic font-normal text-gradient-gold">
                  Same Brody, clearer scope.
                </span>
              </>
            }
            description={`Each link leads to ${area.name}-specific scope, FAQs, and quote guidance for that service.`}
            align="center"
            className="mb-12 sm:mb-14"
          />
          <RevealStagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.035}>
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}/in/${area.slug}`}
                  className="summit-card-motion motion-service group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-divider-strong bg-surface p-4 transition-all duration-300 hover:border-accent-soft hover:shadow-panel"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent-soft">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="truncate text-sm font-semibold text-fg-strong transition-colors group-hover:text-accent">
                      {service.name} in {area.name}
                    </span>
                  </span>
                  <ArrowUpRight className="summit-arrow h-4 w-4 flex-shrink-0 text-fg-muted transition-all duration-300 group-hover:text-accent" />
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface">
        <Container size="narrow">
          <SectionTitle
            eyebrow={`${area.name} coverage details`}
            title={
              <>
                Where Summit fits in {area.name}.
                <span className="block font-serif italic font-normal text-gradient-gold">
                  Neighbourhoods, home types, and service context.
                </span>
              </>
            }
            className="mb-8"
          />
          <Reveal>
            <div className="rounded-[2rem] border border-divider-strong bg-surface-panel p-6 shadow-panel-lg sm:p-8">
              <p className="text-base leading-relaxed text-fg/85 sm:text-lg">{area.longDescription}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <SeoList title="Neighbourhood coverage" items={area.neighborhoods} />
                <SeoList title="Home types" items={area.homeTypes} />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-fg-muted">
                Service area references include {area.landmarks.slice(0, 3).join(", ")} and nearby {area.name} neighbourhoods.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container size="narrow">
          <SectionTitle
            eyebrow={`${area.name} FAQ`}
            title={`Common questions about handyman work in ${area.name}.`}
            align="center"
            className="mb-10"
          />
          <Reveal>
            <ul className="space-y-3">
              {areaFaqs.map((faq) => (
                <li key={faq.q} className="rounded-2xl border border-divider-strong bg-surface p-6">
                  <h3 className="font-display text-lg font-bold text-fg-strong mb-2">{faq.q}</h3>
                  <p className="text-fg/85 leading-relaxed">{faq.a}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container>
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] border border-accent/35 bg-surface-panel/75 p-6 shadow-panel-lg backdrop-blur sm:p-8 md:p-10 lg:grid-cols-[1fr_0.42fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Ready in {area.name}?
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-fg-strong text-balance sm:text-4xl md:text-5xl">
                  Send Brody the repair list and make the next step obvious.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg/85 sm:text-lg">
                  Add the address, photos, and what needs fixing. Brody reviews the scope and replies with a clear written estimate.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <MagneticCTA href={`/quote?area=${area.slug}`} size="lg">
                  Start my {area.name} quote
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
                <p className="text-sm text-fg-muted">
                  The form keeps the address, photos, and repair list together.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function ProofCard({
  Icon,
  label,
  value,
  body,
}: {
  Icon: typeof Clock;
  label: string;
  value: string;
  body: string;
}) {
  return (
    <Reveal>
      <div className="h-full rounded-[1.5rem] border border-divider-strong bg-surface-panel p-5 shadow-panel">
        <Icon className="mb-4 h-6 w-6 text-accent" strokeWidth={1.5} />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-muted">{label}</p>
        <p className="mt-2 font-display text-xl font-bold leading-tight text-fg-strong">{value}</p>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{body}</p>
      </div>
    </Reveal>
  );
}

function LocalPanel({
  title,
  items,
  Icon,
}: {
  title: string;
  items: string[];
  Icon: typeof MapPin;
}) {
  return (
    <div className="rounded-[1.5rem] border border-divider-strong bg-surface-panel p-5">
      <Icon className="mb-4 h-6 w-6 text-accent" strokeWidth={1.5} />
      <h3 className="font-display text-xl font-bold text-fg-strong">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-full border border-divider bg-surface px-3 py-1 text-xs text-fg/85">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SeoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-divider bg-surface/70 p-4">
      <h3 className="font-display text-lg font-bold text-fg-strong">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-fg-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
