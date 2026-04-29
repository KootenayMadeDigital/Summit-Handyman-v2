import type { Metadata } from "next";
import { Star, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { FinalCTA } from "@/components/sections/final-cta";
import { placeholderReviews, aggregateRating } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What Lower Mainland homeowners and property managers say about Summit Handyman. Live Google + Trustindex reviews — no cherry-picking.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        eyebrow="What Locals Say"
        title={
          <>
            Real reviews.{" "}
            <span className="font-serif italic font-normal text-gradient-gold">Real homes.</span>
          </>
        }
        description={`${aggregateRating.rating.toFixed(1)} stars on Google. Read every review on Google or Trustindex — links below.`}
      >
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <a
            href="https://www.google.com/search?q=summit+handyman+reviews"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-summit-slate/60 bg-summit-panel/60 text-summit-mist hover:border-summit-gold hover:text-summit-gold transition-colors text-sm"
          >
            View on Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://www.trustindex.io/reviews/summit-handyman.ca"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-summit-slate/60 bg-summit-panel/60 text-summit-mist hover:border-summit-gold hover:text-summit-gold transition-colors text-sm"
          >
            View on Trustindex
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <Section size="lg">
        <Container>
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-br from-summit-panel via-summit-panel to-summit-gold/10 border border-summit-gold/30 p-6 sm:p-8 md:p-10 mb-12 flex flex-col md:flex-row items-start gap-6 md:gap-10 justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-summit-gold mb-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-summit-gold" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-summit-mist leading-none">
                  {aggregateRating.rating.toFixed(1)} / 5.0
                </p>
                <p className="mt-2 text-sm sm:text-base text-summit-stone">
                  Verified reviews · Google + Trustindex
                </p>
              </div>
              <p className="text-summit-mist/80 max-w-md font-serif text-base sm:text-lg italic text-balance text-pretty">
                "I aim for every review to read the same: clear communication, work that lasts,
                and a clean space at the end. Reputation is built one job at a time."
              </p>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {placeholderReviews.map((r) => (
              <RevealItem key={r.author + r.date}>
                <article className="h-full p-5 sm:p-6 md:p-7 rounded-2xl bg-summit-panel border border-summit-slate/60 flex flex-col min-w-0">
                  <div className="flex items-center gap-1 text-summit-gold mb-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className={i < r.rating ? "h-4 w-4 fill-summit-gold" : "h-4 w-4 opacity-20"}
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="text-summit-mist leading-relaxed font-serif text-base sm:text-lg flex-1 text-pretty">
                    "{r.body}"
                  </p>
                  <div className="mt-6 pt-5 border-t border-summit-slate/40 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-summit-mist text-sm truncate">{r.author}</p>
                      <p className="text-xs text-summit-stone truncate">
                        {r.city}
                        {r.service ? ` · ${r.service}` : ""} · {r.date}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-summit-stone/60 flex-shrink-0">
                      {r.source}
                    </span>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
