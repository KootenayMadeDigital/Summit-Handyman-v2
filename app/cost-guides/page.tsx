import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight, ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { guides, type Guide } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Cost Guides & Resources",
  description:
    "Educational guides for Lower Mainland homeowners and property managers. What drives handyman costs, how to spot a bad quote, when to DIY versus hire, and which repairs save thousands later.",
  alternates: { canonical: "/cost-guides" },
};

/**
 * Curated audience tracks. Each guide can appear in multiple tracks (some do)
 * so visitors who self-identify can find what's most relevant to them.
 */
const tracks: Array<{ label: string; description: string; slugs: string[] }> = [
  {
    label: "Before you hire",
    description:
      "How handyman pricing actually works, what to look for in a quote, and how to set the engagement up for success.",
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
    label: "For homeowners",
    description:
      "Practical guides for keeping your Lower Mainland home in good shape, season after season.",
    slugs: [
      "small-repairs-that-save-thousands",
      "pre-winter-checklist-surrey-white-rock",
      "spring-deck-refinishing-pacific-northwest",
      "aging-in-place-bathroom-safety",
      "smart-home-setup-bc",
    ],
  },
  {
    label: "For property managers",
    description:
      "What property managers across Surrey, Langley, and Abbotsford should know about working with Summit Handyman.",
    slugs: ["strata-property-management-repairs", "tenant-turnover-punch-list"],
  },
  {
    label: "For sellers",
    description: "Pre-listing repairs that actually move the needle on your sale price.",
    slugs: ["pre-listing-repair-checklist-lower-mainland"],
  },
  {
    label: "Specific services",
    description: "Deep dives on common service categories.",
    slugs: ["tv-mounting-done-right", "what-drives-drywall-repair-cost-langley"],
  },
];

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/cost-guides/${guide.slug}`}
      className="group block h-full rounded-2xl bg-surface-panel border border-divider-strong hover:border-accent-soft hover:bg-surface-elevated transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={guide.hero}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-summit-black via-summit-black/40 to-transparent" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-accent font-semibold">
          <Clock className="h-3.5 w-3.5" />
          {guide.readingMinutes} min read
          {guide.area && (
            <>
              <span className="text-fg-faint/50">·</span>
              <span>{guide.area}</span>
            </>
          )}
        </div>
        <h2 className="mt-3 font-display text-lg sm:text-xl font-bold text-fg-strong group-hover:text-accent transition-colors text-balance leading-snug">
          {guide.title}
        </h2>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed line-clamp-3">
          {guide.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          Read guide
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function CostGuidesPage() {
  // Featured = most-recently-published 3 guides
  const featured = [...guides]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cost Guides" }]}
        eyebrow="Resources"
        title={
          <>
            Real costs, real homes,{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              Lower Mainland honest.
            </span>
          </>
        }
        description="Educational guides for Lower Mainland homeowners, property managers, and sellers. What drives handyman costs, how to spot a bad quote, when to DIY versus hire, and which repairs save thousands later. Written by a working pro, not an SEO farm."
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-3">
          <MagneticCTA href="/quote" size="lg">
            Get a Quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <span className="text-sm text-fg-muted">
            $150 minimum per job · Free written estimates · 24-hour reply
          </span>
        </div>
      </PageHero>

      {/* === FEATURED (latest 3) === */}
      <Section size="lg" className="bg-surface">
        <Container>
          <SectionTitle
            eyebrow="Most recent"
            title={
              <>
                The latest from{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  Brody's notebook.
                </span>
              </>
            }
            className="mb-10 sm:mb-12"
          />
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {featured.map((g) => (
              <RevealItem key={g.slug}>
                <GuideCard guide={g} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* === AUDIENCE TRACKS === */}
      <Section size="lg" className="bg-surface-panel border-y border-divider">
        <Container>
          <SectionTitle
            eyebrow="Pick your track"
            title={
              <>
                Find the guide{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  for your situation.
                </span>
              </>
            }
            description="Whether you're hiring for the first time, managing a portfolio, or selling your home, there's a focused stack of reads here for you."
            className="mb-10 sm:mb-12"
          />

          <div className="space-y-12 sm:space-y-14">
            {tracks.map((track) => {
              const trackGuides = track.slugs
                .map((s) => guides.find((g) => g.slug === s))
                .filter((g): g is Guide => Boolean(g));
              if (trackGuides.length === 0) return null;
              return (
                <div key={track.label}>
                  <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6 mb-6 sm:mb-8 pb-4 border-b border-divider-strong">
                      <div className="min-w-0">
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-1.5">
                          Track
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-fg-strong leading-tight">
                          {track.label}
                        </h3>
                      </div>
                      <p className="text-sm text-fg-muted max-w-md md:text-right">
                        {track.description}
                      </p>
                    </div>
                  </Reveal>
                  <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {trackGuides.map((g) => (
                      <RevealItem key={`${track.label}-${g.slug}`}>
                        <GuideCard guide={g} />
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>


      {/* === FINAL CTA === */}
      <Section size="lg" className="grainient-promise relative overflow-hidden">
        <Container size="narrow">
          <Reveal>
            <div className="text-center space-y-6 sm:space-y-7">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                Ready to act on what you read?
              </p>
              <h2 className="font-display text-display-xl font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
                Submit your quote.{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  Brody handles the rest.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-fg/85 max-w-xl mx-auto leading-relaxed">
                Tell Brody what's going on, attach a few photos, and a written estimate lands in your inbox within 24 hours. $150 minimum per visit, no surprises after.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <MagneticCTA href="/quote" size="lg">
                  <FileText className="h-5 w-5" />
                  Get a Quote
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
