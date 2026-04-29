import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { ServiceIcon } from "@/components/ui/service-icon";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FinalCTA } from "@/components/sections/final-cta";
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
  const otherAreas = areas.filter((a) => a.slug !== area.slug);

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

      {/* Quick info */}
      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-summit-panel border border-summit-slate/60">
              <Clock className="h-6 w-6 text-summit-gold mb-3" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-wider text-summit-stone font-semibold mb-1">
                Response time
              </p>
              <p className="font-display text-xl font-bold text-summit-mist">{area.responseTime}</p>
            </div>
            <div className="p-6 rounded-2xl bg-summit-panel border border-summit-slate/60">
              <MapPin className="h-6 w-6 text-summit-gold mb-3" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-wider text-summit-stone font-semibold mb-1">
                Postal codes
              </p>
              <p className="font-display text-xl font-bold text-summit-mist">
                {area.postalCodePrefixes.join(" · ")}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-summit-panel border border-summit-gold/30">
              <Mail className="h-6 w-6 text-summit-gold mb-3" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-wider text-summit-gold font-semibold mb-1">
                Email-first contact
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="font-display text-lg font-bold text-summit-mist hover:text-summit-gold transition-colors"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Neighborhoods */}
      <Section size="md" className="bg-summit-panel/40 border-y border-summit-slate/40">
        <Container>
          <SectionTitle
            eyebrow="Neighborhoods"
            title={`Areas covered in ${area.name}`}
            description={`If your neighborhood isn't listed, email Brody — odds are it's covered.`}
          />
          <Reveal>
            <ul className="mt-10 flex flex-wrap gap-3">
              {area.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="px-4 py-2 rounded-full bg-summit-panel border border-summit-slate/60 text-sm text-summit-mist hover:border-summit-gold/60 transition-colors"
                >
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
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
                  <article>
                    <BeforeAfterSlider
                      beforeSrc={p.beforeImage}
                      afterSrc={p.afterImage}
                      beforeAlt={`${p.title} before`}
                      afterAlt={`${p.title} after`}
                      className="aspect-[4/3]"
                    />
                    <Link href={`/projects/${p.slug}`} className="mt-4 block group">
                      <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
                        {p.area} · {p.duration}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold text-summit-mist group-hover:text-summit-gold transition-colors">
                        {p.title}
                      </h3>
                    </Link>
                  </article>
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      )}

      {/* All services available in this area */}
      <Section size="lg" className="bg-summit-panel/40 border-y border-summit-slate/40">
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
          <RevealStagger className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/60 transition-all"
                >
                  <ServiceIcon name={s.icon} className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-semibold text-summit-mist group-hover:text-summit-gold transition-colors">
                    {s.name}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Other areas */}
      <Section size="md">
        <Container>
          <SectionTitle eyebrow="Also serving" title="Nearby areas" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="group flex items-center justify-between gap-2 p-4 rounded-xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/60 transition-all"
              >
                <span className="text-sm font-semibold text-summit-mist group-hover:text-summit-gold transition-colors">
                  {a.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-summit-stone group-hover:text-summit-gold transition-colors" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
