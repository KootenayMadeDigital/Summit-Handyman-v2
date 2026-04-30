import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Home,
  Map,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceAreaMapSection } from "@/components/sections/service-area-map";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";
import { areas, type Area } from "@/lib/areas";
import { site } from "@/lib/site";
import { ogImage, staticOg } from "@/lib/og";

const pageOgDescription = "Summit Handyman serves Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale with Brody-led repairs, written estimates, and clear communication.";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Summit Handyman serves Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale with Brody-led repairs, written estimates, and clear communication.",
  alternates: { canonical: "/areas" },
  openGraph: {
    title: "Summit Handyman service areas",
    description: pageOgDescription,
    type: "website",
    images: ogImage(staticOg("areas"), "Summit Handyman service areas"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Handyman service areas",
    description: pageOgDescription,
    images: [staticOg("areas")],
  },
};

const serviceSignals = [
  {
    label: "Coverage",
    value: `${areas.length} Lower Mainland cities`,
    detail: "Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale are all inside Summit's service area.",
    Icon: MapPin,
  },
  {
    label: "Quote timing",
    value: "Replies within 24 hours",
    detail: "Every city uses the same quote expectation. Send the scope, photos, and address, then Brody replies directly.",
    Icon: Clock,
  },
  {
    label: "Service model",
    value: "Brody on every job",
    detail: "The location changes. The standard does not. Brody is still the person responsible for the estimate and the repair.",
    Icon: ShieldCheck,
  },
];

const localPromises = [
  "One handyman, one standard, across every city",
  "Written estimate before work begins",
  "Photos and documentation when the job needs proof",
  "Clean work inside real homes, rentals, and strata units",
];

const areaFit = [
  {
    title: "Homeowners",
    body: "Small repairs, mounting, drywall, painting, doors, fixtures, safety upgrades, and the list that has been sitting too long.",
    Icon: Home,
  },
  {
    title: "Property managers",
    body: "Tenant turnovers, unit repairs, punch lists, photo documentation, and clear invoicing that keeps owner threads calm.",
    Icon: Building2,
  },
  {
    title: "Strata and rentals",
    body: "Common repair requests handled cleanly, with a direct line to Brody instead of mystery crews and missed handoffs.",
    Icon: ClipboardCheck,
  },
];

export default function AreasPage() {
  const areaCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/areas#webpage`,
    url: `${site.url}/areas`,
    name: "Summit Handyman service areas",
    description: metadata.description,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: areas.map((area, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Handyman in ${area.name}, BC`,
        url: `${site.url}/areas/${area.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Areas", item: `${site.url}/areas` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Areas" }]}
        eyebrow="Lower Mainland coverage"
        title={
          <>
            Find out if Summit serves your home.
            <span className="block font-serif italic font-normal text-gradient-gold">
              Then send the repair list.
            </span>
          </>
        }
        description={`Summit Handyman serves ${areas.length} Lower Mainland cities from Langley to Abbotsford. The quote process is the same everywhere: send the scope, photos, and address, then Brody replies with a clear written estimate.`}
        image={{ src: "/images/page-header-areas.webp" }}
      >
        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap">
          <MagneticCTA href="/quote" size="lg">
            Start a local quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <Button href="#area-guide" variant="secondary" size="lg">
            <Map className="h-5 w-5" />
            Browse areas
          </Button>
        </div>
      </PageHero>

      <Section size="sm" className="relative overflow-hidden bg-surface !pt-12 sm:!pt-14 md:!pt-16">
        <div className="absolute left-1/2 top-4 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <Container className="relative">
          <div className="grid gap-5 lg:grid-cols-3">
            {serviceSignals.map((signal) => (
              <Reveal key={signal.label}>
                <div className="summit-card-motion motion-trust h-full rounded-[2rem] border border-divider-strong bg-surface-panel p-6 shadow-panel transition-all duration-300 hover:border-accent-soft hover:shadow-panel-lg">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="summit-icon-box flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent-soft">
                      <signal.Icon className="h-5 w-5 text-accent" strokeWidth={1.6} />
                    </div>
                    <span className="rounded-full border border-divider bg-surface px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-muted">
                      {signal.label}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold leading-tight text-fg-strong">
                    {signal.value}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{signal.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="area-guide" size="lg" className="grainient-promise relative overflow-hidden border-y border-divider">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
            <SectionTitle
              eyebrow="Choose your area"
              title={
                <>
                  Your city page should answer one question first.
                  <span className="block font-serif italic font-normal text-gradient-gold">
                    Does Brody serve my place?
                  </span>
                </>
              }
              description="Compare city coverage, neighbourhoods, common home types, and the same written-reply expectation across the service area."
              className="mb-0"
            />
            <Reveal delay={0.1}>
              <div className="summit-card-motion motion-trust rounded-[2rem] border border-accent/35 bg-surface-panel/80 p-5 shadow-panel-lg backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-accent-soft">
                    <Wrench className="h-5 w-5 text-accent" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-fg-strong">
                      Same quote process in every city
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      Submit the repair list once. Include photos if you have them. Brody reviews the scope and replies directly, without area-based timing games.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.05}>
            {areas.map((area, index) => (
              <RevealItem key={area.slug}>
                <AreaCard area={area} index={index} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow="Who this serves"
            title={
              <>
                Coverage only matters if the work model fits the client.
                <span className="block font-serif italic font-normal text-gradient-gold">
                  Summit is built for repeat trust.
                </span>
              </>
            }
            description="The area pages are local. The standard is not. Every booking still runs through Brody, with clear scope, clean execution, and proof when needed."
            align="center"
            className="mb-12 sm:mb-14"
          />

          <RevealStagger className="grid gap-5 md:grid-cols-3" staggerDelay={0.05}>
            {areaFit.map((item) => (
              <RevealItem key={item.title}>
                <div className="summit-card-motion motion-trust h-full rounded-[2rem] border border-divider-strong bg-surface p-6 shadow-panel transition-all duration-300 hover:border-accent-soft">
                  <item.Icon className="mb-5 h-8 w-8 text-accent" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-bold text-fg-strong">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <ServiceAreaMapSection />

      <Section size="lg" className="bg-surface">
        <Container>
          <Reveal>
            <div className="summit-card-motion motion-cta grid gap-8 rounded-[2rem] border border-accent/35 bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_10%,var(--bg-panel))] p-6 shadow-panel-lg sm:p-8 md:p-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Service area promise
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-fg-strong text-balance sm:text-4xl md:text-5xl">
                  If Brody takes the job, the city does not change the standard.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg/85 sm:text-lg">
                  The quote stays written, the work stays documented, and the person you contact is the person responsible for the repair.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-divider-strong bg-surface/70 p-5">
                <ul className="space-y-3">
                  {localPromises.map((promise) => (
                    <li key={promise} className="flex items-start gap-3 text-sm leading-relaxed text-fg/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <MagneticCTA href="/quote" size="lg">
                    Start a local quote
                    <ArrowRight className="h-5 w-5" />
                  </MagneticCTA>
                  <Button href={`mailto:${site.contact.email}`} variant="secondary" size="lg">
                    Email Brody
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function AreaCard({ area, index }: { area: Area; index: number }) {
  const topNeighborhoods = area.neighborhoods.slice(0, 5);
  const topHomeTypes = area.homeTypes.slice(0, 2);

  return (
    <Link
      href={`/areas/${area.slug}`}
      className="summit-card-motion motion-area group block h-full rounded-[2rem] border border-divider-strong bg-surface-panel p-6 shadow-panel transition-all duration-300 hover:border-accent hover:shadow-gold"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="summit-icon-box flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent-soft font-display text-lg font-bold text-accent">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h2 className="min-w-0 font-display text-2xl font-bold leading-tight text-fg-strong">
            {area.name}, {area.province}
          </h2>
        </div>
        <ArrowUpRight className="summit-arrow h-5 w-5 flex-shrink-0 text-fg-muted transition-all duration-300 group-hover:text-accent" />
      </div>

      <p className="text-sm leading-relaxed text-fg-muted">{area.description}</p>

      <div className="mt-5 grid gap-3 rounded-2xl border border-divider bg-surface/65 p-4">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="inline-flex items-center gap-2 text-fg-muted">
            <Clock className="h-4 w-4 text-accent" />
            Quote reply
          </span>
          <span className="text-right font-semibold text-accent">{area.responseTime}</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="inline-flex items-center gap-2 text-fg-muted">
            <MapPin className="h-4 w-4 text-accent" />
            Neighbourhoods
          </span>
          <span className="font-semibold text-fg-strong">{area.neighborhoods.length}</span>
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-muted">
          Common home types
        </p>
        <div className="flex flex-wrap gap-2">
          {topHomeTypes.map((homeType) => (
            <span key={homeType} className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
              {homeType}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-muted">
          Local coverage
        </p>
        <div className="flex flex-wrap gap-1.5">
          {topNeighborhoods.map((neighborhood) => (
            <span key={neighborhood} className="rounded-full border border-divider bg-surface-elevated/80 px-2.5 py-1 text-[11px] text-fg-strong/75">
              {neighborhood}
            </span>
          ))}
          {area.neighborhoods.length > topNeighborhoods.length && (
            <span className="rounded-full px-2.5 py-1 text-[11px] text-fg-muted">
              +{area.neighborhoods.length - topNeighborhoods.length} more
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-divider pt-5 text-sm font-semibold text-accent">
        <span>View {area.name} details</span>
        <ArrowRight className="summit-arrow h-4 w-4" />
      </div>
    </Link>
  );
}
