"use client";

import * as React from "react";
import {
  Star,
  ArrowUpRight,
  Quote,
  ShieldCheck,
  Clock,
  Sparkles,
  FileText,
  HandCoins,
  Mail,
  Building2,
  Home,
  ArrowRight,
} from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { placeholderReviews, aggregateRating, type Review } from "@/lib/reviews";
import { site } from "@/lib/site";

type ApiPayload = {
  reviews: Review[];
  aggregate: { rating: number; reviewCount: number };
  source: string;
};

const themes = [
  {
    Icon: ShieldCheck,
    title: "Professional & on time",
    body: "Showing up when promised, prepped, and ready. Reviewers say it more than anything else.",
  },
  {
    Icon: Sparkles,
    title: "Clean execution",
    body: "Drop cloths down. Tools off the floor. The space is cleaner when Brody leaves than when he arrived.",
  },
  {
    Icon: FileText,
    title: "Documented work",
    body: "Photos before and after. Clear written estimates. Property managers love the paper trail.",
  },
  {
    Icon: Clock,
    title: "Fast response",
    body: "Email replies inside 24 hours, often the same day. Urgent work texted and arranged within hours.",
  },
];

export function ReviewsRichPage() {
  const [data, setData] = React.useState<ApiPayload>({
    reviews: placeholderReviews,
    aggregate: aggregateRating,
    source: "initial",
  });

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
  const [spotlight, ...rest] = data.reviews;

  return (
    <>
      {/* === AGGREGATE TRUST BLOCK === */}
      <Section size="md" className="bg-surface relative">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_14%,var(--bg-panel))] p-8 sm:p-10 md:p-14">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-1.5 text-accent mb-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="h-7 w-7 sm:h-8 sm:w-8 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="font-display text-6xl sm:text-7xl font-extrabold text-fg-strong leading-none tracking-tight">
                    {data.aggregate.rating.toFixed(1)}
                    <span className="text-fg-muted text-3xl sm:text-4xl font-bold ml-2">
                      / 5.0
                    </span>
                  </p>
                  <p className="mt-4 text-base sm:text-lg text-fg-muted">
                    Verified across Google and Trustindex
                    {isLive && (
                      <span className="ml-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-soft text-[10px] font-semibold uppercase tracking-wider text-accent align-middle">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        Live
                      </span>
                    )}
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
                  <TrustBadge
                    Icon={ShieldCheck}
                    label="Licensed"
                    sub="& comprehensively insured"
                  />
                  <TrustBadge
                    Icon={HandCoins}
                    label="$150 minimum"
                    sub="No hourly games"
                  />
                  <TrustBadge
                    Icon={Mail}
                    label="24-hr replies"
                    sub="Email-first contact"
                  />
                  <TrustBadge
                    Icon={Sparkles}
                    label="Owner-operated"
                    sub="Brody on every job"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* === FEATURED SPOTLIGHT REVIEW === */}
      {spotlight && (
        <Section size="lg" className="grainient-promise relative overflow-hidden">
          <Container size="narrow">
            <Reveal>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-6 text-center">
                Featured review
              </p>
              <Quote
                className="h-12 w-12 text-accent/60 mx-auto mb-6"
                strokeWidth={1.4}
                aria-hidden
              />
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-fg-strong leading-snug text-center text-balance text-pretty">
                "{spotlight.body}"
              </blockquote>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex items-center gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className={
                        i < spotlight.rating
                          ? "h-5 w-5 fill-current"
                          : "h-5 w-5 opacity-20"
                      }
                      strokeWidth={0}
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="font-display text-lg font-bold text-fg-strong">
                  {spotlight.author}
                </p>
                <p className="text-sm text-fg-muted">
                  {spotlight.city}
                  {spotlight.service ? ` · ${spotlight.service}` : ""} · via{" "}
                  <span className="uppercase tracking-wider text-accent">
                    {spotlight.source}
                  </span>
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* === MORE REVIEWS GRID === */}
      {rest.length > 0 && (
        <Section size="lg" className="bg-surface">
          <Container>
            <SectionTitle
              eyebrow="More reviews"
              title={
                <>
                  What else locals are{" "}
                  <span className="font-serif italic font-normal text-gradient-gold">
                    saying.
                  </span>
                </>
              }
              className="mb-12"
            />
            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.map((r) => (
                <RevealItem key={r.author + r.date}>
                  <article className="h-full p-6 sm:p-7 md:p-8 rounded-2xl bg-surface-panel border border-divider-strong flex flex-col min-w-0">
                    <div className="flex items-center gap-1 text-accent mb-4">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star
                          key={i}
                          className={
                            i < r.rating
                              ? "h-4 w-4 fill-current"
                              : "h-4 w-4 opacity-20"
                          }
                          strokeWidth={0}
                          aria-hidden
                        />
                      ))}
                    </div>
                    <p className="text-fg/90 leading-relaxed font-serif text-lg flex-1 text-pretty">
                      "{r.body}"
                    </p>
                    <div className="mt-6 pt-5 border-t border-divider flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-fg-strong text-sm truncate">
                          {r.author}
                        </p>
                        <p className="text-xs text-fg-muted truncate">
                          {r.city}
                          {r.service ? ` · ${r.service}` : ""}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-fg-faint flex-shrink-0">
                        {r.source}
                      </span>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      )}

      {/* === THEMES. WHAT REVIEWERS CONSISTENTLY MENTION === */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow="The pattern"
            title={
              <>
                What reviewers{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  consistently mention.
                </span>
              </>
            }
            description="Across every review, the same words come up. This is the standard for every job."
            align="center"
            className="mb-12 sm:mb-14"
          />
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {themes.map((t) => (
              <RevealItem key={t.title}>
                <div className="h-full p-6 rounded-2xl bg-surface border border-divider-strong">
                  <div className="h-10 w-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center mb-4">
                    <t.Icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-fg-strong mb-2 leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* === AUDIENCE SPLIT === */}
      <Section size="lg" className="bg-surface">
        <Container>
          <SectionTitle
            eyebrow="Who hires Brody"
            title={
              <>
                Two kinds of clients,{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  same standard.
                </span>
              </>
            }
            align="center"
            className="mb-12 sm:mb-14"
          />
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <Reveal>
              <article className="h-full p-7 sm:p-8 md:p-10 rounded-2xl bg-surface-panel border border-divider-strong">
                <Home className="h-8 w-8 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-bold text-fg-strong mb-3">
                  Homeowners
                </h3>
                <p className="text-fg/85 leading-relaxed mb-5">
                  Families across the Lower Mainland who want their home repairs done
                  once, done right. From the small list of nagging fixes to a full
                  weekend overhaul.
                </p>
                <ul className="space-y-2.5 text-sm text-fg-muted">
                  <ListCheck>One trusted pro for the entire to-do list</ListCheck>
                  <ListCheck>Clean job sites, careful in your home</ListCheck>
                  <ListCheck>Honest pricing. $150 minimum, no hourly</ListCheck>
                  <ListCheck>Free written estimates before any work starts</ListCheck>
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="h-full p-7 sm:p-8 md:p-10 rounded-2xl bg-surface-panel border border-accent/40">
                <Building2
                  className="h-8 w-8 text-accent mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl font-bold text-fg-strong mb-3">
                  Property managers
                </h3>
                <p className="text-fg/85 leading-relaxed mb-5">
                  A property manager's mindset on every visit. clear documentation,
                  fast turnover, dedicated email threads per property.
                </p>
                <ul className="space-y-2.5 text-sm text-fg-muted">
                  <ListCheck>Tenant turnovers, punch-lists, emergencies</ListCheck>
                  <ListCheck>Itemized invoicing with before/after photos</ListCheck>
                  <ListCheck>Standing rates available for 5+ unit portfolios</ListCheck>
                  <ListCheck>Direct line to Brody. no dispatcher in between</ListCheck>
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* === LEAVE A REVIEW CTA === */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container size="narrow">
          <Reveal>
            <div className="text-center space-y-5">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                Worked with Brody?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fg-strong text-balance">
                Help the next family find a{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  handyman they can trust.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-fg/80 max-w-xl mx-auto leading-relaxed">
                Reviews matter more than ads ever could. If Brody did right by you,
                a few sentences on Google or Trustindex go a long way.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  href="https://search.google.com/local/writereview?placeid=summit-handyman"
                  size="lg"
                >
                  <Star className="h-4 w-4 fill-current" strokeWidth={0} />
                  Leave a Google review
                </Button>
                <Button
                  href={`https://www.trustindex.io/reviews/summit-handyman.ca`}
                  variant="secondary"
                  size="lg"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Or on Trustindex
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* === FINAL CONVERSION CTA === */}
      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container size="narrow">
          <Reveal>
            <div className="text-center space-y-6 sm:space-y-7">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                Ready to be next?
              </p>
              <h2 className="font-display text-display-xl font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                Become the next{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  5-star review.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-fg/80 max-w-xl mx-auto leading-relaxed">
                Send Brody a few details. He'll reply with a clear, written estimate
               . usually same-day. The fixes that have been on your list for months
                start with one email.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <MagneticCTA href="/quote" size="lg">
                  Start your quote
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
                <Button
                  href={`mailto:${site.contact.email}`}
                  variant="secondary"
                  size="lg"
                >
                  <Mail className="h-5 w-5" />
                  Email Brody
                </Button>
              </div>
              <p className="pt-4 text-sm text-fg-muted">
                <span className="text-accent font-semibold">{site.pricing.minimumDisplay}</span>
                {" · "}
                <span>Free written estimate</span>
                {" · "}
                <span>Reply within 24 hours</span>
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function TrustBadge({
  Icon,
  label,
  sub,
}: {
  Icon: typeof ShieldCheck;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3 min-w-0">
      <div className="h-10 w-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-accent" strokeWidth={1.6} aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="font-display text-base sm:text-lg font-bold text-fg-strong leading-tight">
          {label}
        </p>
        <p className="text-xs sm:text-sm text-fg-muted leading-snug">{sub}</p>
      </div>
    </div>
  );
}

function ListCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        aria-hidden
        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"
      />
      <span className="text-fg/85">{children}</span>
    </li>
  );
}
