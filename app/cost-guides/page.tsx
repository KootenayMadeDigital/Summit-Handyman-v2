import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Hammer,
  MapPinned,
  Mountain,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { guides, type Guide } from "@/lib/guides";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cost Guides & Resources",
  description:
    "Educational guides for Lower Mainland homeowners and property managers. What drives handyman costs, how to spot a bad quote, when to DIY versus hire, and which repairs save thousands later.",
  alternates: { canonical: "/cost-guides" },
};

type Track = {
  label: string;
  kicker: string;
  description: string;
  slugs: string[];
  Icon: typeof Compass;
  accent: string;
};

const tracks: Track[] = [
  {
    label: "Hiring smarter",
    kicker: "Before the first email",
    description:
      "Know what drives cost, what a trustworthy quote looks like, and when a professional saves more than he costs.",
    Icon: Compass,
    accent: "from-amber-500/20 via-amber-500/5 to-transparent",
    slugs: [
      "red-flags-handyman-quote",
      "how-to-get-an-accurate-handyman-quote",
      "diy-vs-handyman-lower-mainland",
      "what-drives-drywall-repair-cost-langley",
      "what-makes-a-paint-job-last-abbotsford",
      "premium-paint-cheaper-long-term",
    ],
  },
  {
    label: "Homeowner field notes",
    kicker: "Protect the house",
    description:
      "Seasonal maintenance, safety upgrades, smart installs, and the quiet repairs that prevent expensive damage later.",
    Icon: ShieldCheck,
    accent: "from-emerald-500/15 via-amber-500/5 to-transparent",
    slugs: [
      "small-repairs-that-save-thousands",
      "pre-winter-checklist-surrey-white-rock",
      "spring-deck-refinishing-pacific-northwest",
      "aging-in-place-bathroom-safety",
      "smart-home-setup-bc",
    ],
  },
  {
    label: "Property manager playbook",
    kicker: "Turnovers without chaos",
    description:
      "The repair stack for portfolios, tenant requests, documentation, punch lists, and clean handoffs.",
    Icon: FileText,
    accent: "from-slate-400/15 via-amber-500/5 to-transparent",
    slugs: ["strata-property-management-repairs", "tenant-turnover-punch-list"],
  },
  {
    label: "Sale ready and specialty installs",
    kicker: "Finish strong",
    description:
      "Pre-listing polish and high-visibility installs where straight, clean, and documented matters.",
    Icon: Hammer,
    accent: "from-orange-500/20 via-amber-500/5 to-transparent",
    slugs: ["pre-listing-repair-checklist-lower-mainland", "tv-mounting-done-right"],
  },
];

const guideMap = new Map(guides.map((guide) => [guide.slug, guide]));
const totalMinutes = guides.reduce((sum, guide) => sum + guide.readingMinutes, 0);
const latestGuide = [...guides].sort((a, b) => b.date.localeCompare(a.date))[0];
const latestThree = [...guides].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

function GuideMeta({ guide }: { guide: Guide }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        {guide.readingMinutes} min read
      </span>
      {guide.area && (
        <span className="inline-flex items-center gap-1.5 text-fg-muted">
          <MapPinned className="h-3.5 w-3.5 text-accent" />
          {guide.area}
        </span>
      )}
    </div>
  );
}

function GuideCard({ guide, featured = false }: { guide: Guide; featured?: boolean }) {
  return (
    <Link
      href={`/cost-guides/${guide.slug}`}
      className={cn(
        "group relative block h-full overflow-hidden rounded-3xl border border-divider-strong bg-surface-panel transition-all duration-500 ease-editorial",
        "hover:-translate-y-1 hover:border-accent-soft hover:shadow-gold-lg focus-visible:ring-accent",
        featured && "lg:grid lg:grid-cols-[1.08fr_0.92fr]",
      )}
    >
      <div className={cn("photo-grade relative overflow-hidden", featured ? "min-h-[22rem] lg:min-h-full" : "aspect-[16/10]") }>
        <Image
          src={guide.hero}
          alt=""
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
          className="object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-summit-black via-summit-black/35 to-transparent" />
      </div>

      <div className={cn("relative p-5 sm:p-6", featured && "sm:p-8 lg:p-10 flex flex-col justify-center") }>
        <div className="absolute right-5 top-5 h-10 w-10 rounded-full border border-divider-strong bg-surface-elevated/80 flex items-center justify-center text-fg-muted transition-all duration-300 group-hover:border-accent-soft group-hover:text-accent group-hover:rotate-6">
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <GuideMeta guide={guide} />
        <h2 className={cn(
          "mt-4 max-w-[34rem] font-display font-extrabold leading-tight text-fg-strong text-balance transition-colors group-hover:text-accent",
          featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl",
        )}>
          {guide.title}
        </h2>
        <p className={cn("mt-3 text-fg-muted leading-relaxed text-pretty", featured ? "text-base sm:text-lg" : "text-sm line-clamp-3")}>
          {guide.excerpt}
        </p>
        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent-soft bg-accent-soft px-4 py-2 text-sm font-semibold text-accent transition-colors group-hover:bg-accent group-hover:text-summit-black">
          Read the guide
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function TrackSection({ track, index }: { track: Track; index: number }) {
  const trackGuides = track.slugs
    .map((slug) => guideMap.get(slug))
    .filter((guide): guide is Guide => Boolean(guide));

  return (
    <Reveal>
      <section className="relative overflow-hidden rounded-[2rem] border border-divider-strong bg-surface-panel shadow-panel-lg">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-100", track.accent)} />
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-[0.42fr_1fr]">
          <aside className="border-b border-divider-strong p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-accent/40 bg-accent-soft flex items-center justify-center">
                <track.Icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
                  Route {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-fg-strong leading-tight">
                  {track.label}
                </h3>
              </div>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-fg-muted font-semibold">
              {track.kicker}
            </p>
            <p className="mt-3 text-base text-fg/85 leading-relaxed text-pretty">
              {track.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-xs text-fg-muted">
              <span className="rounded-full border border-divider-strong bg-surface/60 px-3 py-1.5">
                {trackGuides.length} guides
              </span>
              <span className="rounded-full border border-divider-strong bg-surface/60 px-3 py-1.5">
                {trackGuides.reduce((sum, guide) => sum + guide.readingMinutes, 0)} min total
              </span>
            </div>
          </aside>

          <div className="p-4 sm:p-6 lg:p-8">
            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5" staggerDelay={0.05}>
              {trackGuides.map((guide) => (
                <RevealItem key={`${track.label}-${guide.slug}`}>
                  <GuideCard guide={guide} />
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default function CostGuidesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cost Guides" }]}
        eyebrow="Resources"
        title={
          <>
            Field notes for the home repairs that{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              actually matter.
            </span>
          </>
        }
        description="No fake price tables. No vague contractor talk. Just clear, local guidance from an owner-operated handyman who knows what fails, what lasts, and what is worth hiring out."
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-3">
          <MagneticCTA href="/quote" size="lg">
            Get a written estimate
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <span className="text-sm text-fg-muted">
            $150 minimum per job · free written estimates · 24-hour reply
          </span>
        </div>
      </PageHero>

      <Section size="lg" className="relative overflow-hidden bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.36fr] lg:items-stretch">
            <Reveal>
              <GuideCard guide={latestGuide} featured />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-[2rem] border border-divider-strong bg-surface-panel p-6 sm:p-7 shadow-panel-lg">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
                  Guide command deck
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-divider-strong bg-surface p-4">
                    <BookOpenText className="h-5 w-5 text-accent" />
                    <p className="mt-4 font-display text-4xl font-extrabold text-fg-strong leading-none">
                      {guides.length}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-fg-muted">Guides</p>
                  </div>
                  <div className="rounded-2xl border border-divider-strong bg-surface p-4">
                    <Clock className="h-5 w-5 text-accent" />
                    <p className="mt-4 font-display text-4xl font-extrabold text-fg-strong leading-none">
                      {totalMinutes}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-fg-muted">Minutes</p>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-accent/35 bg-accent-soft p-5">
                  <Mountain className="h-5 w-5 text-accent" />
                  <p className="mt-4 font-display text-xl font-bold text-fg-strong">
                    The Summit rule
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    If a guide cannot help a real homeowner make a better decision, it does not belong here.
                  </p>
                </div>
                <div className="mt-5 space-y-3">
                  {latestThree.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/cost-guides/${guide.slug}`}
                      className="group flex items-center gap-3 rounded-2xl border border-divider-strong bg-surface/70 p-3 transition-colors hover:border-accent-soft"
                    >
                      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
                        <Image src={guide.hero} alt="" fill sizes="56px" className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="line-clamp-2 text-sm font-semibold leading-snug text-fg-strong group-hover:text-accent">
                          {guide.title}
                        </p>
                        <p className="mt-1 text-xs text-fg-muted">Latest note</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="relative overflow-hidden bg-surface-panel border-y border-divider">
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:64px_64px]" />
        <Container className="relative">
          <SectionTitle
            eyebrow="Pick your route"
            title={
              <>
                Every guide has a job. Every route has a{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  purpose.
                </span>
              </>
            }
            description="The library is organized around the decision you are trying to make, not a lazy pile of articles. Start with the route that matches your situation."
            className="mb-10 sm:mb-12"
          />

          <div className="space-y-7 sm:space-y-8">
            {tracks.map((track, index) => (
              <TrackSection key={track.label} track={track} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container>
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] border border-accent/35 bg-surface-panel/75 p-6 shadow-panel-lg backdrop-blur sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 lg:items-center">
              <div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-divider-strong photo-grade">
                <Image
                  src="/images/page-hero-fallback.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-summit-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-summit-black/65 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                    Fastest path
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-summit-mist">
                    Photos plus scope equals a better quote.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  <Route className="h-4 w-4" />
                  Ready to act
                </div>
                <h2 className="font-display text-display-lg font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                  Reading is useful. A written estimate is better.
                </h2>
                <p className="text-base sm:text-lg text-fg/85 max-w-2xl leading-relaxed text-pretty">
                  Send the photos, the city, and the timing. Brody reviews the scope before replying, so the first answer is practical instead of vague.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Photos help",
                    "24-hour reply",
                    "No hourly games",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-divider-strong bg-surface/60 p-3 text-sm text-fg-strong">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {item}
                    </div>
                  ))}
                </div>
                <MagneticCTA href="/quote" size="lg">
                  Start the quote
                  <ArrowRight className="h-5 w-5" />
                </MagneticCTA>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
