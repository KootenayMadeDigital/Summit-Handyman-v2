import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { ServiceIcon } from "@/components/ui/service-icon";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FinalCTA } from "@/components/sections/final-cta";
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

const process = [
  { step: "01", title: "Email or text", body: "Send a few details. Photos help. Brody reads everything personally." },
  { step: "02", title: "Quick assessment", body: "I'll ask any clarifying questions and confirm scope." },
  { step: "03", title: "Estimate within 24hr", body: "A clear, written estimate by email — no pressure." },
  { step: "04", title: "Job done right", body: "Booked, completed, cleaned up. Followed by an invoice and warranty." },
];

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
                <div className="h-14 w-14 rounded-xl bg-summit-gold/10 border border-summit-gold/30 flex items-center justify-center mb-6">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-summit-mist mb-5 text-balance">
                  What's included
                </h2>
                <p className="text-summit-mist/80 leading-relaxed font-serif text-lg text-pretty">
                  {service.longDescription}
                </p>
                <p className="mt-6 text-sm text-summit-stone">
                  <span className="text-summit-gold font-semibold">{site.pricing.minimumDisplay}.</span>{" "}
                  Free written estimates. Licensed & insured.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 p-5 rounded-xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/40 transition-colors"
                  >
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-summit-gold/15 border border-summit-gold/30 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-summit-gold" strokeWidth={3} />
                    </span>
                    <span className="text-summit-mist leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section size="lg" className="bg-summit-panel/40 border-y border-summit-slate/40">
        <Container>
          <SectionTitle
            eyebrow="How it works"
            title={
              <>
                A simple, predictable{" "}
                <span className="font-serif italic font-normal text-gradient-gold">process.</span>
              </>
            }
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <div className="relative p-6 rounded-2xl bg-summit-panel border border-summit-slate/60 h-full">
                  <p className="font-display text-5xl font-extrabold text-gradient-gold mb-3">
                    {p.step}
                  </p>
                  <h3 className="font-display text-xl font-bold text-summit-mist mb-2">{p.title}</h3>
                  <p className="text-sm text-summit-stone leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related projects */}
      {relevantProjects.length > 0 && (
        <Section size="lg">
          <Container>
            <SectionTitle
              eyebrow="Recent work"
              title={
                <>
                  Recent {service.name.toLowerCase()}{" "}
                  <span className="font-serif italic font-normal text-gradient-gold">jobs.</span>
                </>
              }
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantProjects.slice(0, 3).map((p) => (
                <Reveal key={p.slug}>
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
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <Section size="md" className="bg-summit-panel/40 border-y border-summit-slate/40">
          <Container>
            <SectionTitle
              eyebrow="Related"
              title="Other services in this category"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 rounded-xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/60 hover:bg-summit-panel/80 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <ServiceIcon name={r.icon} className="h-5 w-5" />
                    <span className="font-display font-bold text-summit-mist group-hover:text-summit-gold transition-colors">
                      {r.name}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-summit-stone group-hover:text-summit-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <FinalCTA />
    </>
  );
}
