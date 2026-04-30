import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  HandCoins,
  Clock,
  Mail,
  FileText,
  Camera,
  Home,
  Building2,
  HeartHandshake,
  Sparkles,
  ListChecks,
  PhoneCall,
  Wrench,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { services, serviceCategories, type ServiceCategory } from "@/lib/services";
import { site } from "@/lib/site";
import { ogImage, staticOg } from "@/lib/og";

import { placeholderReviews } from "@/lib/reviews";
import { cn } from "@/lib/utils";

const pageOgDescription = "Brody-led handyman services across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. 11 repair categories, $150 minimum per job, licensed and insured.";

export const metadata: Metadata = {
  title: "Handyman Services in Langley, Surrey & Lower Mainland BC",
  description:
    "Brody-led handyman services across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. 11 repair categories, $150 minimum per job, licensed and insured.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Summit Handyman services",
    description: pageOgDescription,
    type: "website",
    images: ogImage(staticOg("services"), "Summit Handyman services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Handyman services",
    description: pageOgDescription,
    images: [staticOg("services")],
  },
};

const order: ServiceCategory[] = ["interior", "exterior", "safety"];

const personas = [
  {
    Icon: ListChecks,
    label: "The fix-it list",
    headline: "One pro for the whole list.",
    body: "You've been adding to a list for months: a faucet that drips, a door that catches, a fence post leaning, three picture mounts. Brody turns the scattered list into one written scope.",
    bullet: "Grouped small jobs are usually cleaner than booking separate visits for every fix.",
  },
  {
    Icon: Building2,
    label: "Property managers",
    headline: "Documented turnovers, calm owners.",
    body: "Tenant turnover, common-area repairs, and time-sensitive coordination. Itemized invoices with photos before and after. Built for clean handoffs and documented follow-through.",
    bullet: "Repeat property work can be scoped by email when you need documentation across multiple units.",
  },
  {
    Icon: HeartHandshake,
    label: "First-time hire",
    headline: "Honest, gentle, and clear.",
    body: "First handyman? Brody explains what he sees before work starts. Written estimate first, plain language throughout, no surprise add-ons slipped in later.",
    bullet: "Always licensed, insured, and tidy. Comes back free if anything fails.",
  },
];

const trustSignals = [
  {
    Icon: HandCoins,
    label: "$150 minimum per job",
    sub: "No hourly games. No hidden fees.",
  },
  {
    Icon: ShieldCheck,
    label: "Licensed & insured",
    sub: "Comprehensive liability coverage.",
  },
  {
    Icon: FileText,
    label: "Free written estimates",
    sub: "Reviewed and answered within 24 hours.",
  },
  {
    Icon: Star,
    label: "5.0 on Google",
    sub: "Verified by Google + Trustindex.",
  },
];

const processSteps = [
  {
    step: "01",
    Icon: FileText,
    title: "Start with the repair list",
    body: "Pick the service, area, and timing. Add photos so Brody can review the scope before reaching out. About 90 seconds.",
  },
  {
    step: "02",
    Icon: Mail,
    title: "Brody emails back within 24 hours",
    body: "He either sends a written estimate or asks the missing question before anyone wastes a visit.",
  },
  {
    step: "03",
    Icon: PhoneCall,
    title: "Confirm a time that works",
    body: "Pick a date and timeframe by reply email or text. Brody confirms what tools and materials he's bringing.",
  },
  {
    step: "04",
    Icon: Sparkles,
    title: "Job done right, then cleaned up",
    body: "Drop cloths down, tools off the floor, space cleaner than he found it. Itemized invoice on completion.",
  },
];

const reassurances = [
  {
    Icon: ShieldCheck,
    title: "Licensed and insured",
    body: "Comprehensive liability insurance covers your home from the moment Brody arrives. Business # 79853 7957. GST # 79853 7957 RT0001.",
  },
  {
    Icon: HandCoins,
    title: "Honest, predictable pricing",
    body: "$150 minimum per job. No hourly meter running. The written estimate Brody emails is the price you pay, barring scope changes you approve in writing.",
  },
  {
    Icon: Wrench,
    title: "The come-back-free promise",
    body: '"If it\'s not done right, I come back and fix it. No charge. No questions." Clear promise, no fine-print games.',
  },
  {
    Icon: HeartHandshake,
    title: "One pro, every job",
    body: "Brody Robertson reviews the scope and handles the work personally. No dispatcher, no rotating subcontractors, no handoff drift.",
  },
];

export default function ServicesPage() {
  const servicesPageReview = placeholderReviews.find((review) => review.author === "Katrina S") ?? placeholderReviews[0];

  const serviceCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/services#webpage`,
    url: `${site.url}/services`,
    name: "Handyman services in Langley, Surrey, and the Lower Mainland",
    description: metadata.description,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: `${site.url}/services/${service.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* === HERO === */}
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Repair list, meet Brody"
        title={
          <>
            One handyman.{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              The whole list.
            </span>
          </>
        }
        description={`${services.length} service categories across the Lower Mainland, all handled personally by Brody Robertson. Licensed, insured, $150 minimum per job, and written estimates before work begins.`}
        image={{ src: "/images/page-header-services.webp" }}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-3">
          <MagneticCTA href="/quote" size="lg">
            Start My Quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 -mx-2 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            or email Brody directly
          </a>
        </div>
      </PageHero>

      {/* === TRUST BAND (right under hero so cold visitors absorb the proposition) === */}
      <Section size="sm" className="bg-surface-panel border-y border-divider">
        <Container>
          <Reveal>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-6">
              {trustSignals.map((t) => (
                <li
                  key={t.label}
                  className="flex flex-col items-center md:items-start text-center md:text-left min-w-0 px-2"
                >
                  <t.Icon className="h-5 w-5 text-accent mb-3" strokeWidth={1.6} aria-hidden />
                  <p className="font-display text-base sm:text-lg font-bold text-fg-strong leading-tight">
                    {t.label}
                  </p>
                  <p className="mt-1 text-xs text-fg-muted leading-snug">{t.sub}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* === WHO BRODY WORKS WITH (3 personas) === */}
      <Section size="lg" className="bg-surface">
        <Container>
          <SectionTitle
            eyebrow="Who Brody works with"
            title={
              <>
                Three kinds of clients,{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  same standard.
                </span>
              </>
            }
            description="Whether you're sitting on a list of small fixes, managing a portfolio of properties, or hiring a handyman for the very first time, Brody adapts the process to fit. The standard of work doesn't change."
            align="center"
            className="mb-12 sm:mb-14"
          />

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {personas.map((p) => (
              <RevealItem key={p.label}>
                <article className="summit-card-motion motion-trust h-full p-6 sm:p-7 rounded-2xl bg-surface-panel border border-divider-strong hover:border-accent-soft transition-colors">
                  <div className="summit-icon-box h-11 w-11 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center mb-5">
                    <p.Icon className="h-5 w-5 text-accent" strokeWidth={1.6} aria-hidden />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                    {p.label}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-fg-strong mb-3 leading-tight text-balance">
                    {p.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-fg/85 leading-relaxed mb-4">{p.body}</p>
                  <div className="flex items-start gap-2 pt-4 border-t border-divider">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-xs sm:text-sm text-fg-muted leading-snug">{p.bullet}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <SectionDivider variant="measure" />

      {/* === FULL SERVICE CATALOG ===
          For each category, a clean header followed by service cards that
          preview the scope without inventing prices. */}
      <Section size="lg" className="bg-surface">
        <Container>
          <SectionTitle
            eyebrow="Full service catalog"
            title={
              <>
                {services.length} service categories.{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  One accountable handyman.
                </span>
              </>
            }
            description="Every service Brody offers, handled personally. Pricing is quoted in writing, with a $150 minimum per job. Send photos and a description so the estimate starts from the real scope."
            className="mb-12 sm:mb-14"
          />

          <div className="space-y-16 sm:space-y-20">
            {order.map((cat) => {
              const list = services.filter((s) => s.category === cat);
              const meta = serviceCategories[cat];
              return (
                <div key={cat}>
                  <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6 mb-7 sm:mb-8 pb-4 border-b border-divider-strong">
                      <div className="min-w-0">
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-1.5">
                          {cat}
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-fg-strong leading-tight">
                          {meta.name}
                        </h3>
                      </div>
                      <p className="hidden md:block text-sm text-fg-muted max-w-md text-right">
                        {meta.description}
                      </p>
                    </div>
                  </Reveal>

                  <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {list.map((s) => (
                      <RevealItem key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={cn(
                            "summit-card-motion motion-service group relative flex h-full flex-col p-6 rounded-2xl",
                            "bg-surface-panel border border-divider-strong",
                            "hover:border-accent-soft hover:bg-surface-elevated",
                            "transition-all duration-300 ease-editorial",
                            "hover:shadow-gold hover:-translate-y-0.5",
                          )}
                        >
                          <div className="flex items-start justify-between gap-4 mb-5">
                            <div className="summit-icon-box h-12 w-12 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center flex-shrink-0">
                              <ServiceIcon name={s.icon} className="h-6 w-6" />
                            </div>
                            <ArrowUpRight className="summit-arrow h-5 w-5 text-fg-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>

                          <h4 className="font-display text-xl font-bold text-fg-strong leading-tight">
                            {s.name}
                          </h4>
                          <p className="mt-2 text-sm text-fg-muted leading-relaxed">
                            {s.shortDescription}
                          </p>

                          <ul className="mt-4 space-y-1.5 flex-1">
                            {s.includes.slice(0, 3).map((inc) => (
                              <li
                                key={inc}
                                className="flex items-start gap-2 text-xs text-fg/75"
                              >
                                <Check
                                  className="h-3 w-3 text-accent mt-1 flex-shrink-0"
                                  strokeWidth={2.5}
                                />
                                <span className="leading-snug">{inc}</span>
                              </li>
                            ))}
                            {s.includes.length > 3 && (
                              <li className="text-xs text-fg-faint italic pt-1">
                                +{s.includes.length - 3} more included
                              </li>
                            )}
                          </ul>

                          <div className="mt-5 pt-4 border-t border-divider flex items-center justify-between gap-3">
                            <span className="text-[11px] uppercase tracking-wider text-fg-muted font-semibold">
                              Pricing
                            </span>
                            <span className="text-xs font-semibold text-accent">
                              By quote · $150 minimum
                            </span>
                          </div>
                        </Link>
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <SectionDivider variant="ridge" />

      {/* === PROCESS TIMELINE ===
          Linda needs to see what hiring Brody actually looks like. Mark
          wants to confirm there's a documented flow. Sarah benefits from
          knowing the email-first process is clear. */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow="The process"
            title={
              <>
                Four steps from{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  request to done.
                </span>
              </>
            }
            description="Simple, documented, and calm. The written estimate comes before the commitment, so you are not guessing at price or scope."
            align="center"
            className="mb-12 sm:mb-14"
          />

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {processSteps.map((p) => (
              <RevealItem key={p.step}>
                <article className="summit-card-motion motion-process relative h-full p-6 rounded-2xl bg-surface border border-divider-strong">
                  <p className="font-display text-5xl font-extrabold text-gradient-gold mb-4 leading-none">
                    {p.step}
                  </p>
                  <p.Icon className="h-5 w-5 text-accent mb-3" strokeWidth={1.6} aria-hidden />
                  <h3 className="font-display text-lg font-bold text-fg-strong mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{p.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticCTA href="/quote" size="lg">
                Start step 1 now
                <ArrowRight className="h-5 w-5" />
              </MagneticCTA>
              <p className="text-sm text-fg-muted">
                Quote requests are reviewed within 24 hours.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* === REASSURANCE BLOCK ===
          For all 3 personas: this is where Linda's anxiety gets resolved,
          Mark sees the license/GST identifiers, and Sarah re-reads the
          come-back-free promise. */}
      <Section size="lg" className="bg-surface">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Reassurance
              </p>
              <h2 className="font-display text-display-lg font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                Built to remove every reason to{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  hesitate.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-fg/85 leading-relaxed text-pretty">
                Hiring a handyman should feel like a relief, not a risk. Brody makes the decision easier with licensing, insurance, written estimates, clear pricing rules, and a workmanship promise attached to the repair.
              </p>
            </Reveal>

            <RevealStagger className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
              {reassurances.map((r) => (
                <RevealItem key={r.title}>
                  <article className="summit-card-motion motion-trust h-full p-6 rounded-2xl bg-surface-panel border border-divider-strong">
                    <r.Icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.6} aria-hidden />
                    <h3 className="font-display text-lg font-bold text-fg-strong mb-2 leading-tight">
                      {r.title}
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed">{r.body}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      <SectionDivider variant="measure" />

      {/* === PROPERTY MANAGER LANE ===
          Mark needs explicit reassurance that Brody understands portfolio
          work. Standalone section gives that audience a clear home. */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal className="lg:col-span-7 space-y-5">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                For property managers
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-display-lg font-extrabold tracking-tightest text-fg-strong leading-[1.05] text-balance">
                Tenant turnovers, common-area repairs, access notes, and owner updates.{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  Documented where it counts.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-fg/85 leading-relaxed">
                Brody runs property-management work with itemized invoicing, photo documentation when it helps, and clear email threads per property. Summit is a strong fit when managers need clean handoffs, direct communication, and repairs that do not create a second problem.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Tenant turnover punch lists",
                  "Common-area repairs",
                  "Time-sensitive repair coordination",
                  "Detailed itemized invoicing",
                  "Before and after photos when useful",
                  "Repeat documentation process",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-fg/85">
                    <Check
                      className="h-4 w-4 text-accent mt-0.5 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button
                  href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Property management inquiry")}`}
                  size="md"
                >
                  <Mail className="h-4 w-4" />
                  Email about portfolio work
                </Button>
                <Link
                  href="/quote"
                  className="inline-flex min-h-11 items-center gap-1 rounded-xl px-2 -mx-2 text-sm text-fg-muted hover:text-accent transition-colors"
                >
                  or submit a quote request
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="rounded-2xl bg-surface border border-accent/40 p-6 sm:p-7 shadow-gold">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                  What managers can expect
                </p>
                <ul className="space-y-3.5">
                  {[
                    { Icon: Camera, label: "Before/after photos" },
                    { Icon: FileText, label: "Itemized invoice with GST" },
                    { Icon: ShieldCheck, label: "Comprehensive liability cover" },
                    { Icon: Clock, label: "Quotes reviewed within 24 hours" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-fg-strong">
                      <span className="summit-icon-box h-9 w-9 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center flex-shrink-0">
                        <item.Icon className="h-4 w-4 text-accent" strokeWidth={1.6} />
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* === EDUCATIONAL FAQ ===
          Linda's anxiety reducer. Concrete answers to the questions people
          are too embarrassed to ask. Schema-loaded for rich SERPs. */}
      <Section size="lg" className="bg-surface">
        <Container size="narrow">
          <SectionTitle
            eyebrow="Common questions"
            title={
              <>
                The things people{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  often hesitate to ask.
                </span>
              </>
            }
            description="The best copy is a straight answer. These are the questions customers usually need settled before sending the form."
            align="center"
            className="mb-10 sm:mb-12"
          />
          <Reveal>
            <ul className="space-y-3">
              {[
                {
                  q: "How is the price determined?",
                  a: "Brody reviews your quote submission (description and photos), then sends a written estimate by email within 24 hours. The price is set before any work begins. The $150 minimum applies to all jobs to cover tools, insurance, travel, and craftsmanship time.",
                },
                {
                  q: "What if I have a long list of small things?",
                  a: "Bundle them. The $150 minimum covers a single visit, so a grouped repair list is usually more practical than booking separate visits for every small fix.",
                },
                {
                  q: "Is this safe? I've never hired a handyman before.",
                  a: "Brody is licensed (Business # 79853 7957) and carries comprehensive liability insurance. He is the only handyman on every job, so the person reviewing your quote is the person doing the work. The workmanship promise means he comes back free if the repair fails due to his work.",
                },
                {
                  q: "Do you work with property managers?",
                  a: "Yes. Summit Handyman is built for tenant turnovers, common-area repairs, documented punch lists, and clear invoicing. Email Brody with the property details, access notes, and repair list to set up the right process.",
                },
                {
                  q: "What does 'come back free' mean exactly?",
                  a: 'It means: if a repair Brody completed fails due to installation error, he comes back and fixes it without charge. This is workmanship coverage on every job, not a sales pitch. The exact wording: "If it\'s not done right, I come back and fix it. No charge. No questions."',
                },
                {
                  q: "How soon can you start?",
                  a: "Quote requests are reviewed within 24 hours. Once you confirm scope and timing, scheduling depends on the work required, access, materials, and Brody's current calendar.",
                },
                {
                  q: "Can you pick up materials, or should I?",
                  a: "Either way. Brody can pick up materials and bill them at cost plus a small handling fee, or you can supply your own. Whatever's easier for you. He'll confirm in the written estimate.",
                },
              ].map((f, i) => (
                <li
                  key={i}
                  className="rounded-2xl bg-surface-panel border border-divider-strong p-6"
                >
                  <h3 className="font-display text-lg font-bold text-fg-strong mb-2 text-balance">
                    {f.q}
                  </h3>
                  <p className="text-fg/85 leading-relaxed text-pretty">{f.a}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <SectionDivider variant="ridge" />

      {/* === SOCIAL PROOF + WORKMANSHIP PROMISE ===
          Final confidence stack before the close. Single review pull
          quote from the real public fallback set + Brody promise + ratings line. */}
      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container size="narrow">
          <Reveal>
            <div className="text-center space-y-7 sm:space-y-8">
              <div className="flex items-center justify-center gap-1 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
                What clients consistently say
              </p>
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-fg-strong leading-snug text-balance text-pretty max-w-3xl mx-auto">
                "{servicesPageReview.body}"
              </blockquote>
              <p className="text-sm text-fg-muted">
                {servicesPageReview.author}, {servicesPageReview.city} · via {servicesPageReview.source}
              </p>
              <div className="pt-6 border-t border-divider max-w-2xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                  The Brody Promise
                </p>
                <p className="font-serif text-xl sm:text-2xl text-fg-strong italic leading-snug text-balance">
                  "{site.promise}"
                </p>
                <p className="mt-4 text-sm text-fg-muted">
                  {site.owner}, handyman & founder
                </p>
              </div>
              <div className="pt-3">
                <Link
                  href="/reviews"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 -mx-2 text-sm text-accent hover:text-accent-hot transition-colors font-semibold underline-offset-4 hover:underline"
                >
                  Read every review on the reviews page
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* === FINAL CTA === */}
      <Section size="lg" className="bg-surface-panel border-t border-divider">
        <Container size="narrow">
          <Reveal>
            <div className="text-center space-y-6 sm:space-y-7">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                Ready when you are
              </p>
              <h2 className="font-display text-display-xl font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                Tell Brody what you need.{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  Take 90 seconds.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-fg/85 max-w-xl mx-auto leading-relaxed">
                Add details, attach photos, and send the list. Brody reviews the scope before replying, so the first answer can be specific.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <MagneticCTA href="/quote" size="lg">
                  Start My Quote
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 -mx-2 text-sm text-fg-muted hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  or email Brody directly
                </a>
              </div>
              <p className="pt-3 text-sm text-fg-muted">
                <span className="text-accent font-semibold">$150 minimum per job</span>
                <span className="text-fg-faint mx-2">·</span>
                <span>Free written estimate</span>
                <span className="text-fg-faint mx-2">·</span>
                <span>Reply within 24 hours</span>
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
