import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Facebook,
  FileText,
  Home,
  Instagram,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Brody",
  description:
    "Meet Brody Robertson, the owner-operated handyman behind Summit Handyman. Reliable repairs, clear communication, clean work, and a come-back-free promise across the Lower Mainland.",
  alternates: { canonical: "/about" },
};

const proofStats = [
  { label: "Owner-operated", value: "1", detail: "The same person quotes, shows up, and stands behind the work." },
  { label: "Google rating", value: "5.0", detail: "Local trust earned one finished repair at a time." },
  { label: "Minimum", value: "$150", detail: "Clear starting point. Written estimate before work begins." },
];

const principles = [
  {
    Icon: Mail,
    title: "Answers before assumptions",
    body: "Brody reviews the scope, photos, timing, and location first, so the reply is useful instead of vague.",
  },
  {
    Icon: Sparkles,
    title: "Clean work is part of the job",
    body: "Drop cloths, dust control, careful staging, and cleanup are not bonuses. They are the baseline.",
  },
  {
    Icon: Wrench,
    title: "Fixes should stay fixed",
    body: "The repair is built for the next season, the next tenant, and the next inspection, not just the next photo.",
  },
  {
    Icon: FileText,
    title: "Documentation removes doubt",
    body: "Photos, itemized notes, and plain invoices make life easier for homeowners, sellers, strata, and property managers.",
  },
];

const friction = [
  "You do not know if the handyman will reply",
  "You do not know if the quote is real",
  "You do not know who will actually show up",
  "You do not know if the repair will last",
];

const antidote = [
  "Direct email or text with Brody",
  "Free written estimate after scope review",
  "Owner-operated visits, not rotating crews",
  "Come-back-free workmanship promise",
];

const experience = [
  {
    step: "01",
    title: "You send the real picture",
    body: "The quote form captures the service, city, timing, description, and photos so Brody starts with context.",
  },
  {
    step: "02",
    title: "Brody reviews the work himself",
    body: "No dispatcher translation. No mystery subcontractor. The person thinking through the job is the person doing the job.",
  },
  {
    step: "03",
    title: "The house is protected first",
    body: "Drop cloths, controlled dust, careful staging, and straight cleanup come before anyone calls the job finished.",
  },
  {
    step: "04",
    title: "The promise stays behind",
    body: site.promise,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="The Brody Story"
        title={
          <>
            Built for people who are tired of chasing{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              contractors who ghost.
            </span>
          </>
        }
        description="Summit Handyman is owner-operated by Brody Robertson for homeowners and property managers who want the small-job experience to feel professional, predictable, and clean from the first message."
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-3">
          <MagneticCTA href="/quote" size="lg">
            Submit a Quote Request
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            email Brody directly
          </a>
        </div>
      </PageHero>

      <Section size="lg" className="relative overflow-hidden bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="photo-grade relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-divider-strong shadow-panel-lg group">
                  <Image
                    src="/images/about-brody.webp"
                    alt={`${site.owner}, owner of ${site.name}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-summit-black via-summit-black/85 to-transparent">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                      Owner & Founder
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-summit-mist">
                      {site.owner}
                    </p>
                    <p className="text-sm text-summit-mist/70 mt-0.5">Langley, BC · Lower Mainland</p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-surface-panel border border-divider-strong p-6 shadow-panel">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                    Direct line
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                      {site.contact.email}
                    </a>
                    <a
                      href={`sms:${site.contact.phoneTel}`}
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <MessageSquare className="h-4 w-4 text-accent" />
                      Text {site.contact.phone}
                    </a>
                    <a
                      href={site.social.facebook.url}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-accent" />
                      facebook.com/{site.social.facebook.handle}
                    </a>
                    <a
                      href={site.social.instagram.url}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <Instagram className="h-4 w-4 text-accent" />
                      @{site.social.instagram.handle}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 space-y-10" delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-accent/35 bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_10%,var(--bg-panel))] p-6 sm:p-8 md:p-10 shadow-panel-lg">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-5">
                    Why Summit exists
                  </p>
                  <blockquote className="font-serif text-3xl md:text-5xl leading-[1.08] text-fg-strong text-pretty text-balance">
                    “Most people do not need a bigger contractor. They need one reliable person who answers, protects the home, fixes it properly, and leaves nothing loose behind.”
                  </blockquote>
                  <p className="mt-6 text-sm uppercase tracking-[0.16em] text-fg-muted font-semibold">
                    Brody Robertson, founder
                  </p>
                  <div className="mt-8 space-y-5 text-fg-strong/85 leading-relaxed text-base sm:text-lg">
                    <p>
                      The handyman category has a trust problem. People expect delays, vague prices, rushed work, and a mess left behind. Summit Handyman was built to make that experience feel completely different.
                    </p>
                    <p>
                      Brody brings a property-manager mindset to small and medium repairs: clear scope, clean execution, practical documentation, and workmanship that still makes sense after the invoice is paid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {proofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="summit-card-motion motion-trust rounded-2xl border border-divider-strong bg-surface-panel p-5 transition-colors hover:border-accent-soft"
                  >
                    <p className="font-display text-4xl font-extrabold text-fg-strong leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-accent font-semibold">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm text-fg-muted leading-relaxed">{stat.detail}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-[2rem] border border-red-500/20 bg-red-500/5 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-red-300 font-semibold">
                    What people fear
                  </p>
                  <div className="mt-5 space-y-3">
                    {friction.map((item) => (
                      <p key={item} className="flex gap-3 text-sm text-fg-muted leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-300 flex-shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-[2rem] border border-accent/30 bg-accent-soft p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                    How Summit answers
                  </p>
                  <div className="mt-5 space-y-3">
                    {antidote.map((item) => (
                      <p key={item} className="flex gap-3 text-sm text-fg-strong leading-relaxed">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="relative overflow-hidden bg-surface-panel border-y border-divider">
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:64px_64px]" />
        <Container className="relative">
          <SectionTitle
            eyebrow="The Summit standard"
            title={
              <>
                Small repairs should still feel{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  premium.
                </span>
              </>
            }
            description="Premium does not mean overbuilt. It means the experience is calm, the work is clean, and the result does not create a new problem later."
            className="mb-10 sm:mb-12"
          />

          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.05}>
            {principles.map((p) => (
              <RevealItem key={p.title}>
                <div className="summit-card-motion motion-trust h-full p-5 sm:p-6 rounded-[1.5rem] bg-surface border border-divider-strong hover:border-accent-soft transition-all duration-300">
                  <div className="h-11 w-11 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center mb-5">
                    <p.Icon className="h-5 w-5 text-accent" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-fg-strong mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
            <Reveal>
              <div className="photo-grade relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-divider-strong shadow-panel-lg">
                <Image
                  src="/images/about-workmanship-detail.webp"
                  alt="Craftsmanship tools arranged beside a clean finished trim corner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-summit-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-summit-black/65 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                    The detail layer
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold text-summit-mist leading-tight">
                    Clean details are not a slogan. They are the business model.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionTitle
                eyebrow="What working with Brody feels like"
                title={
                  <>
                    Predictable from the first email to the{" "}
                    <span className="font-serif italic font-normal text-gradient-gold">
                      final sweep.
                    </span>
                  </>
                }
                description="The experience is the product as much as the repair. Clear scope, clean execution, and no wondering whether the handyman is coming back."
                className="mb-8"
              />
              <div className="space-y-4">
                {experience.map((item) => (
                  <article
                    key={item.step}
                    className="summit-card-motion motion-process group grid grid-cols-[4rem_1fr] gap-4 rounded-2xl border border-divider-strong bg-surface-panel p-5 transition-all duration-300 hover:border-accent-soft"
                  >
                    <p className="font-display text-3xl font-extrabold text-accent/70 leading-none">
                      {item.step}
                    </p>
                    <div>
                      <h3 className="font-display text-xl font-bold text-fg-strong leading-tight group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-fg-muted leading-relaxed">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container>
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-[2rem] border border-accent/35 bg-surface-panel/75 p-6 sm:p-8 md:p-10 shadow-panel-lg backdrop-blur">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent-soft px-4 py-2 text-xs uppercase tracking-[0.16em] text-accent font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  The Brody Promise
                </div>
                <h2 className="font-display text-display-lg font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                  The job is not finished until Brody is willing to put his name on it.
                </h2>
                <p className="text-base sm:text-lg text-fg/85 max-w-2xl leading-relaxed">
                  If it is not done right, he comes back and fixes it. No charge. No questions. That is not fine print. It is the standard.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
                <MagneticCTA href="/quote" size="lg">
                  Start with a quote
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
                <Button href="/reviews" variant="secondary" size="lg" withArrow>
                  Read reviews
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
