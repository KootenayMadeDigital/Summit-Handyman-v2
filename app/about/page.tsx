import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  FileText,
  Instagram,
  Mail,
  MessageSquare,
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
  { label: "Owner-operated", value: "1", detail: "Brody handles the visit personally." },
  { label: "Google rating", value: "5.0", detail: "Verified local trust, not sales theatre." },
  { label: "Minimum", value: "$150", detail: "Predictable start. Written estimate first." },
];

const principles = [
  {
    Icon: Mail,
    title: "Clear communication",
    body: "Email confirmations, realistic timing, and plain-English scope. You know what is happening before tools come out.",
  },
  {
    Icon: Sparkles,
    title: "Clean work",
    body: "Drop cloths down. Dust controlled. Tools off the floor. The space should feel calmer when Brody leaves.",
  },
  {
    Icon: Wrench,
    title: "Repairs that last",
    body: "Three coats when three coats are needed. Anchored into studs. Fixed like someone may inspect it years from now.",
  },
  {
    Icon: FileText,
    title: "Documented like a pro",
    body: "Photos, itemized notes, and invoices property managers can actually file without chasing for missing details.",
  },
];

const experience = [
  {
    step: "01",
    title: "You send the details",
    body: "The quote form captures the job, timing, photos, and city so Brody can answer with context instead of guessing on the phone.",
  },
  {
    step: "02",
    title: "Brody reviews it himself",
    body: "No dispatcher, no rotating subcontractor. The person pricing the work is the person showing up to do it.",
  },
  {
    step: "03",
    title: "The work is done cleanly",
    body: "Protection first, repair second, cleanup before leaving. The standard is quiet competence, not chaos in work boots.",
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
            The handyman you call when it has to be{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              done right.
            </span>
          </>
        }
        description="Summit Handyman exists for homeowners and property managers who are tired of ghosting, guesswork, and repairs that need repairing. One owner. One standard. One direct line."
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

      <Section size="lg" className="bg-surface">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="photo-grade relative aspect-[4/5] rounded-2xl overflow-hidden border border-divider-strong shadow-panel-lg group">
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

                <div className="rounded-2xl bg-surface-panel border border-divider-strong p-6 shadow-panel">
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
              <div className="rounded-3xl border border-accent/35 bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_10%,var(--bg-panel))] p-6 sm:p-8 md:p-10 shadow-panel-lg">
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-5">
                  Why Summit exists
                </p>
                <p className="font-serif text-2xl md:text-4xl leading-snug text-fg-strong text-pretty text-balance">
                  “{site.about}”
                </p>
                <div className="mt-7 space-y-5 text-fg-strong/85 leading-relaxed text-base sm:text-lg">
                  <p>
                    Summit Handyman is owner-operated by design. When you email or text, you reach
                    Brody directly — not a dispatcher, not a call centre, and not a service manager
                    handing the work to whoever is available.
                  </p>
                  <p>
                    The business was built for the gap between the cheap quick fix and the full
                    contractor circus. Small and medium repairs still deserve clean communication,
                    protected floors, straight lines, and work that does not quietly fail six months
                    later.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {proofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-divider-strong bg-surface-panel p-5"
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

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-6">
                  Four principles. Every job.
                </p>
                <RevealStagger className="grid sm:grid-cols-2 gap-5">
                  {principles.map((p) => (
                    <RevealItem key={p.title}>
                      <div className="h-full p-5 sm:p-6 rounded-2xl bg-surface-panel border border-divider-strong hover:border-accent-soft transition-colors">
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
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
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
            className="mb-10 sm:mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {experience.map((item) => (
              <Reveal key={item.step}>
                <article className="h-full rounded-2xl border border-divider-strong bg-surface p-6 hover:border-accent-soft transition-colors">
                  <p className="font-display text-4xl font-extrabold text-accent/70 leading-none">
                    {item.step}
                  </p>
                  <h3 className="mt-5 font-display text-xl font-bold text-fg-strong leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-fg-muted leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container>
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-accent/35 bg-surface-panel/70 p-6 sm:p-8 md:p-10 shadow-panel-lg backdrop-blur">
              <div className="lg:col-span-8 space-y-5">
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  The Brody Promise
                </p>
                <h2 className="font-display text-display-lg font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                  If it is not done right, Brody comes back and fixes it.
                </h2>
                <p className="text-base sm:text-lg text-fg/85 max-w-2xl leading-relaxed">
                  No charge. No questions. That promise is simple because the standard is simple:
                  the job is not finished until it is something Brody is willing to put his name on.
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
