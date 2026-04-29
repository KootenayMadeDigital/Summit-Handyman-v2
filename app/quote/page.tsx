import type { Metadata } from "next";
import { ArrowRight, Camera, Clock, FileText, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/forms/quote-form";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";

export const metadata: Metadata = {
  title: "Start a Quote Request",
  description:
    "The recommended way to get a written estimate from Brody. Tell him what's going on, attach photos, and he'll review the job before reaching out within 24 hours.",
  alternates: { canonical: "/quote" },
};

const prep = [
  {
    Icon: FileText,
    title: "Scope first",
    body: "Pick the closest service and timing so Brody knows what kind of visit he is planning.",
  },
  {
    Icon: Camera,
    title: "Photos help",
    body: "A few clear photos can save a round of questions and make the written estimate sharper.",
  },
  {
    Icon: Clock,
    title: "24-hour reply",
    body: "Most requests get a practical answer within 24 hours, always with next steps in writing.",
  },
  {
    Icon: ShieldCheck,
    title: "No guessing game",
    body: "$150 minimum per job. Free written estimate before work starts.",
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Start Quote" }]}
        eyebrow="Recommended way to reach Brody"
        title={
          <>
            The cleanest path to a written{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              estimate.
            </span>
          </>
        }
        description="Tell Brody what needs fixing, where it is, when you need it, and what the photos show. The first reply gets sharper because the details are already in front of him."
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-3">
          <MagneticCTA href="#quote-form" size="lg">
            Start the 90-second quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <span className="text-sm text-fg-muted">
            Owner-reviewed · free written estimate · no hourly games
          </span>
        </div>
      </PageHero>

      <Section size="sm" className="relative overflow-hidden bg-surface-panel border-y border-divider">
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:56px_56px]" />
        <Container className="relative">
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.05}>
            {prep.map((item) => (
              <RevealItem key={item.title}>
                <div className="summit-card-motion motion-trust h-full rounded-2xl border border-divider-strong bg-surface/70 p-5 shadow-panel backdrop-blur">
                  <div className="summit-icon-box h-11 w-11 rounded-xl border border-accent/40 bg-accent-soft flex items-center justify-center">
                    <item.Icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-bold text-fg-strong">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section id="quote-form" size="lg" className="relative overflow-hidden bg-surface">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <Container>
          <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-6 lg:gap-8 items-start">
            <Reveal>
              <aside className="summit-card-motion motion-trust lg:sticky lg:top-28 rounded-[2rem] border border-accent/35 bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_10%,var(--bg-panel))] p-6 sm:p-7 shadow-panel-lg">
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  Before you start
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-fg-strong text-balance">
                  Good details make better estimates.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  You do not need perfect details. A rough list, a few photos, and the city are enough for Brody to reply with useful next steps instead of vague contractor talk.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Use the closest service match",
                    "Add photos if the repair is visible",
                    "Mention access issues, tenants, pets, or timing pressure",
                    "Bundle small jobs into one visit when possible",
                  ].map((item) => (
                    <div key={item} className="summit-card-motion motion-process flex gap-3 rounded-2xl border border-divider-strong bg-surface/60 p-3 text-sm text-fg-strong">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
