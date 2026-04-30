import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, MapPin, Wrench } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { guides } from "@/lib/guides";
import { ogImage, staticOg } from "@/lib/og";

const pageOgDescription = `A complete human-readable sitemap for ${site.name}, including services, service areas, repair guides, quote, contact, reviews, privacy, and terms.`;

export const metadata: Metadata = {
  title: "Sitemap",
  description: pageOgDescription,
  alternates: { canonical: "/sitemap" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Summit Handyman sitemap",
    description: pageOgDescription,
    type: "website",
    images: ogImage(staticOg("home"), "Summit Handyman sitemap"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Handyman sitemap",
    description: pageOgDescription,
    images: [staticOg("home")],
  },
};

const mainPages = [
  { label: "Home", href: "/", description: "Overview, services, recent work, reviews, FAQ, and quote path." },
  { label: "Services", href: "/services", description: "All handyman services grouped by interior, exterior, safety, and prevention." },
  { label: "Service Areas", href: "/areas", description: "Lower Mainland cities currently served by Summit Handyman." },
  { label: "About Brody", href: "/about", description: "Owner-operated story, promise, standards, and trust markers." },
  { label: "Reviews", href: "/reviews", description: "Public review wall, trust patterns, and review links." },
  { label: "Repair Guides", href: "/repair-guides", description: "Practical repair planning guides for homeowners and property managers." },
  { label: "Contact", href: "/contact", description: "Primary contact path and quote form." },
  { label: "Start My Quote", href: "/quote", description: "Send scope, photos, location, and reply details straight to Brody." },
  { label: "Privacy Policy", href: "/legal/privacy", description: "How customer information, photos, analytics, reviews, and records are handled." },
  { label: "Terms of Service", href: "/legal/terms", description: "Terms for estimates, scope, payment, workmanship, materials, and website use." },
];

function LinkCard({ href, label, description }: { href: string; label: string; description?: string }) {
  return (
    <Link
      href={href}
      className="summit-card-motion motion-area group block rounded-2xl border border-divider-strong bg-surface-panel p-5 shadow-panel transition-colors hover:border-accent-soft"
    >
      <span className="flex items-start justify-between gap-4">
        <span className="min-w-0">
          <span className="block font-display text-lg font-bold text-fg-strong group-hover:text-accent">
            {label}
          </span>
          {description ? (
            <span className="mt-2 block text-sm leading-relaxed text-fg-muted">
              {description}
            </span>
          ) : null}
        </span>
        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-accent transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function SitemapPage() {
  const comboCount = services.length * areas.length;

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
        eyebrow="Website Map"
        title="Every Summit Handyman page, in one place."
        description="A clean index for customers, search engines, and anyone who wants the whole site without hunting through the footer like a raccoon in a tuxedo."
      >
        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap">
          <Button href="/quote" size="lg" withArrow>
            Start My Quote
          </Button>
          <Button href="/sitemap.xml" variant="secondary" size="lg" withArrow>
            XML Sitemap
          </Button>
        </div>
      </PageHero>

      <Section size="md" atmosphere="paper">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="summit-card-motion motion-trust rounded-2xl border border-divider-strong bg-surface-panel p-5 shadow-panel">
              <FileText className="mb-3 h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="font-display text-3xl font-extrabold text-fg-strong">{guides.length}</p>
              <p className="mt-1 text-sm text-fg-muted">Repair guides</p>
            </div>
            <div className="summit-card-motion motion-trust rounded-2xl border border-divider-strong bg-surface-panel p-5 shadow-panel">
              <Wrench className="mb-3 h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="font-display text-3xl font-extrabold text-fg-strong">{services.length}</p>
              <p className="mt-1 text-sm text-fg-muted">Service categories</p>
            </div>
            <div className="summit-card-motion motion-trust rounded-2xl border border-divider-strong bg-surface-panel p-5 shadow-panel">
              <MapPin className="mb-3 h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="font-display text-3xl font-extrabold text-fg-strong">{comboCount}</p>
              <p className="mt-1 text-sm text-fg-muted">Service and city pages</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section size="md" className="bg-surface-panel border-y border-divider" atmosphere="panel">
        <Container>
          <SectionTitle
            eyebrow="Core Pages"
            title="Main customer paths"
            description="The top-level pages customers are most likely to need before they send a repair request."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {mainPages.map((page) => (
              <LinkCard key={page.href} {...page} />
            ))}
          </div>
        </Container>
      </Section>

      <Section size="md" atmosphere="service">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Handyman service pages"
            description="Each service page explains what fits, what is included, and how the quote process works."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <LinkCard
                key={service.slug}
                href={`/services/${service.slug}`}
                label={service.name}
                description={service.shortDescription}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section size="md" className="bg-surface-panel border-y border-divider" atmosphere="area">
        <Container>
          <SectionTitle
            eyebrow="Areas"
            title="Service area pages"
            description="City pages for homeowners, property managers, tenants, and strata contacts across the Lower Mainland."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <LinkCard
                key={area.slug}
                href={`/areas/${area.slug}`}
                label={`Handyman in ${area.name}`}
                description={area.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section size="md" atmosphere="workbench">
        <Container>
          <SectionTitle
            eyebrow="Repair Guides"
            title="Planning guides"
            description="Useful reading for common repairs, budgeting questions, red flags, maintenance, and quote prep."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <LinkCard
                key={guide.slug}
                href={`/repair-guides/${guide.slug}`}
                label={guide.title}
                description={guide.excerpt}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
