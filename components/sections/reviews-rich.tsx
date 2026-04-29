"use client";

import * as React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  FileText,
  HandCoins,
  Home,
  Mail,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { placeholderReviews, aggregateRating, type Review } from "@/lib/reviews";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type ApiPayload = {
  reviews: Review[];
  aggregate: { rating: number; reviewCount: number };
  source: string;
};

const trustSignals = [
  {
    Icon: ShieldCheck,
    label: "Licensed and insured",
    sub: "A real business with real coverage, not a mystery number from a marketplace.",
  },
  {
    Icon: HandCoins,
    label: "$150 minimum",
    sub: "A clear starting point before anyone starts inventing line items.",
  },
  {
    Icon: Mail,
    label: "Email-first quotes",
    sub: "Written details, saved scope, fewer phone-tag games.",
  },
  {
    Icon: Sparkles,
    label: "Owner-operated",
    sub: "Brody handles the job personally. No rotating crew surprise.",
  },
];

const decisionLenses = [
  {
    key: "response",
    Icon: Clock,
    label: "Response",
    question: "Will he actually get back to me?",
    answer: "Reviews repeatedly mention fast replies, punctuality, and clear communication before the work starts.",
  },
  {
    key: "finish",
    Icon: Sparkles,
    label: "Finish quality",
    question: "Will the repair look clean when it is done?",
    answer: "Customers call out clean work, better-than-expected finishes, and repairs that blend into the home.",
  },
  {
    key: "trust",
    Icon: ShieldCheck,
    label: "Trust",
    question: "Can I trust him inside my home?",
    answer: "The pattern is professional, polite, documented, and owner-operated. That lowers the risk fast.",
  },
  {
    key: "property",
    Icon: FileText,
    label: "Documentation",
    question: "Will this be easy to manage or invoice?",
    answer: "The property-manager fit is the paperwork layer: photos, written scope, and clear next steps.",
  },
];

const proofPattern = [
  {
    Icon: Wrench,
    title: "The work matches the ask",
    body: "No upsell fog. The finished job lines up with what the homeowner actually requested.",
  },
  {
    Icon: Clock,
    title: "The timing is respected",
    body: "People remember punctuality because most small-job contractors make it painful.",
  },
  {
    Icon: Sparkles,
    title: "The finish is clean",
    body: "Drywall, fixtures, trim, and installs need to disappear into the home, not announce themselves.",
  },
  {
    Icon: FileText,
    title: "The process is documented",
    body: "Especially useful for property managers, turnovers, and anyone who needs proof the work was handled.",
  },
];

function Stars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const cls = size === "lg" ? "h-8 w-8" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <div className="flex items-center gap-1 text-accent" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={i < rating ? `${cls} fill-current` : `${cls} opacity-20`}
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function ReviewsRichPage() {
  const [data, setData] = React.useState<ApiPayload>({
    reviews: placeholderReviews,
    aggregate: aggregateRating,
    source: "initial",
  });
  const [activeLens, setActiveLens] = React.useState(decisionLenses[0].key);

  React.useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d: ApiPayload) => {
        if (!cancelled && d?.reviews?.length) setData(d);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const isLive = data.source === "trustindex";
  const reviews = data.reviews.length ? data.reviews : placeholderReviews;
  const selectedLens = decisionLenses.find((lens) => lens.key === activeLens) ?? decisionLenses[0];

  return (
    <>
      <Section size="lg" className="relative overflow-hidden bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-stretch">
            <Reveal>
              <div className="summit-card-motion relative h-full overflow-hidden rounded-[2rem] border border-accent/40 bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_13%,var(--bg-panel))] p-6 sm:p-8 md:p-10 shadow-panel-lg">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Stars rating={Math.round(data.aggregate.rating)} size="lg" />
                    {isLive && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        Live feed
                      </span>
                    )}
                  </div>
                  <p className="mt-6 font-display text-7xl sm:text-8xl font-extrabold text-fg-strong leading-none tracking-tight">
                    {data.aggregate.rating.toFixed(1)}
                    <span className="ml-2 text-3xl sm:text-4xl text-fg-muted">/5</span>
                  </p>
                  <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-fg-strong text-balance">
                    The fastest way to trust a handyman is to hear what happened after he left.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-fg/85 text-pretty">
                    Reviews answer the doubts ads cannot: did he reply, did he show up, did he protect the home, and would people call him again?
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="summit-card-motion h-full rounded-[2rem] border border-divider-strong bg-surface-panel p-5 sm:p-6 shadow-panel-lg">
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  Trust checklist
                </p>
                <div className="mt-5 grid gap-3">
                  {trustSignals.map((signal) => (
                    <div key={signal.label} className="summit-card-motion flex gap-3 rounded-2xl border border-divider-strong bg-surface/70 p-4">
                      <div className="summit-icon-box h-11 w-11 rounded-xl bg-accent-soft border border-accent/35 flex items-center justify-center flex-shrink-0">
                        <signal.Icon className="h-5 w-5 text-accent" strokeWidth={1.6} />
                      </div>
                      <div>
                        <p className="font-display text-base font-bold text-fg-strong leading-tight">
                          {signal.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-fg-muted">{signal.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow="Review wall"
            title={
              <>
                Every review should be easy to skim, compare, and
                <span className="font-serif italic font-normal text-gradient-gold"> believe.</span>
              </>
            }
            description={`${reviews.length} public reviews loaded into the page, with the newest proof first. No tiny testimonial strip pretending to be a credibility page.`}
            align="center"
            className="mb-12 sm:mb-14"
          />

          <RevealStagger className="columns-1 md:columns-2 xl:columns-3 gap-5 [column-fill:_balance]" staggerDelay={0.035}>
            {reviews.map((review, index) => (
              <RevealItem key={`${review.author}-${review.date}-wall`} className="mb-5 break-inside-avoid">
                <ReviewCard review={review} index={index} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section size="lg" className="relative overflow-hidden bg-surface-panel border-y border-divider">
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:64px_64px]" />
        <Container className="relative">
          <SectionTitle
            eyebrow="Decision radar"
            title={
              <>
                Reviews should answer the question behind the{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  question.
                </span>
              </>
            }
            description="Most visitors are not just checking stars. They are checking risk. These are the doubts the reviews need to settle."
            className="mb-10 sm:mb-12"
          />

          <div className="grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
            <Reveal>
              <div className="grid gap-3">
                {decisionLenses.map((lens) => (
                  <button
                    key={lens.key}
                    type="button"
                    onClick={() => setActiveLens(lens.key)}
                    className={cn(
                      "summit-card-motion flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300",
                      activeLens === lens.key
                        ? "border-accent bg-accent-soft text-fg-strong shadow-gold"
                        : "border-divider-strong bg-surface hover:border-accent-soft text-fg-muted",
                    )}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/35 bg-surface-panel">
                      <lens.Icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-base font-bold">{lens.label}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="summit-card-motion h-full rounded-[2rem] border border-accent/35 bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_10%,var(--bg-panel))] p-6 sm:p-8 md:p-10 shadow-panel-lg">
                <selectedLens.Icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  Buyer doubt
                </p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight text-fg-strong text-balance">
                  {selectedLens.question}
                </h3>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-fg/85 text-pretty">
                  {selectedLens.answer}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface">
        <Container>
          <SectionTitle
            eyebrow="The pattern"
            title={
              <>
                What the best reviews have in{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  common.
                </span>
              </>
            }
            description="A single nice review is useful. A repeated pattern is a buying signal."
            align="center"
            className="mb-12 sm:mb-14"
          />
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" staggerDelay={0.05}>
            {proofPattern.map((item) => (
              <RevealItem key={item.title}>
                <div className="summit-card-motion h-full p-6 rounded-[1.5rem] bg-surface-panel border border-divider-strong hover:border-accent-soft transition-all duration-300">
                  <div className="h-11 w-11 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center mb-5">
                    <item.Icon className="h-5 w-5 text-accent" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-fg-strong mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow="Who hires Brody"
            title={
              <>
                Different clients. Same reason to{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  trust him.
                </span>
              </>
            }
            align="center"
            className="mb-12 sm:mb-14"
          />
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <Reveal>
              <AudienceCard
                Icon={Home}
                title="Homeowners"
                body="Families who want the list finally handled without turning the house into a job site disaster."
                points={[
                  "One trusted pro for the entire to-do list",
                  "Clean work inside the home",
                  "Written estimate before work starts",
                  "Repairs that look finished, not patched",
                ]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <AudienceCard
                Icon={Building2}
                title="Property managers"
                body="Managers who need fast response, tenant-ready work, and documentation that keeps the owner thread clean."
                points={[
                  "Tenant turnovers and punch lists",
                  "Itemized invoicing with photo support",
                  "Direct communication with Brody",
                  "A repair standard that reduces callbacks",
                ]}
                accent
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="md" className="bg-surface">
        <Container size="narrow">
          <Reveal>
            <div className="summit-card-motion text-center space-y-5 rounded-[2rem] border border-divider-strong bg-surface-panel p-7 sm:p-9 shadow-panel-lg">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                Worked with Brody?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fg-strong text-balance leading-tight">
                Help the next family find a handyman they can trust.
              </h2>
              <p className="text-base sm:text-lg text-fg/80 max-w-xl mx-auto leading-relaxed">
                A few honest sentences on Google or Trustindex do more than any ad ever could.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="https://www.google.com/search?q=summit+handyman+reviews" target="_blank" rel="noopener" size="lg">
                  <Star className="h-4 w-4 fill-current" strokeWidth={0} />
                  Review on Google
                </Button>
                <Button href="https://www.trustindex.io/reviews/summit-handyman.ca" target="_blank" rel="noopener" variant="secondary" size="lg">
                  <ArrowUpRight className="h-4 w-4" />
                  Trustindex
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container>
          <Reveal>
            <div className="summit-card-motion grid gap-8 rounded-[2rem] border border-accent/35 bg-surface-panel/75 p-6 sm:p-8 md:p-10 shadow-panel-lg backdrop-blur lg:grid-cols-[1fr_0.42fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  Ready to be next?
                </p>
                <h2 className="font-display text-display-lg font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                  Become the next homeowner who says it was done right.
                </h2>
                <p className="text-base sm:text-lg text-fg/80 max-w-2xl leading-relaxed">
                  Send Brody a few details. He reviews the scope, replies with a clear written estimate, and handles the work personally.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <MagneticCTA href="/quote" size="lg">
                  Start your quote
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
                <Button href={`mailto:${site.contact.email}`} variant="secondary" size="lg">
                  <Mail className="h-5 w-5" />
                  Email Brody
                </Button>
                <p className="pt-2 text-sm text-fg-muted">
                  <span className="text-accent font-semibold">{site.pricing.minimumDisplay}</span>
                  {" · "}
                  <span>Free written estimate</span>
                  {" · "}
                  <span>Reply within 24 hours</span>
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  return (
    <article className="summit-card-motion group w-full rounded-[1.5rem] border border-divider-strong bg-surface-panel p-5 text-left shadow-panel transition-all duration-300 hover:border-accent-soft hover:shadow-panel-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display text-lg font-bold text-fg-strong leading-tight">
            {review.author}
          </p>
          <p className="mt-1 text-xs text-fg-muted">
            {review.city}{review.service ? ` · ${review.service}` : ""}
          </p>
        </div>
        <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
          #{index + 1}
        </span>
      </div>
      <div className="mt-4">
        <Stars rating={review.rating} size="sm" />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-fg/85 text-pretty">
        “{review.body}”
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-divider pt-4 text-xs text-fg-muted">
        <span>{new Date(`${review.date}T00:00:00`).toLocaleDateString("en-CA", { month: "short", year: "numeric" })}</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
          via {review.source}
        </span>
      </div>
    </article>
  );
}

function AudienceCard({
  Icon,
  title,
  body,
  points,
  accent = false,
}: {
  Icon: typeof Home;
  title: string;
  body: string;
  points: string[];
  accent?: boolean;
}) {
  return (
    <article className={cn(
      "h-full p-7 sm:p-8 md:p-10 rounded-[2rem] bg-surface border border-divider-strong transition-colors hover:border-accent-soft",
      accent && "border-accent/40",
    )}>
      <Icon className="h-8 w-8 text-accent mb-5" strokeWidth={1.5} />
      <h3 className="font-display text-2xl font-bold text-fg-strong mb-3">{title}</h3>
      <p className="text-fg/85 leading-relaxed mb-5">{body}</p>
      <ul className="space-y-2.5 text-sm text-fg-muted">
        {points.map((point) => (
          <ListCheck key={point}>{point}</ListCheck>
        ))}
      </ul>
    </article>
  );
}

function ListCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
      <span className="text-fg/85">{children}</span>
    </li>
  );
}
