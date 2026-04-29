"use client";

import * as React from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { placeholderReviews, aggregateRating, type Review } from "@/lib/reviews";

type ApiPayload = {
  reviews: Review[];
  aggregate: { rating: number; reviewCount: number };
  source: string;
};

export function ReviewsSection() {
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
      .catch(() => {
        // Silently fall back to placeholder
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const featured = data.reviews.slice(0, 3);
  const isLive = data.source === "trustindex";

  return (
    <Section id="reviews" size="lg" className="relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="What Locals Say"
            title={
              <>
                Real reviews from{" "}
                <span className="font-serif italic font-normal text-gradient-gold">
                  real homes
                </span>{" "}
                in the Lower Mainland.
              </>
            }
            description={`${data.aggregate.rating.toFixed(1)} stars on Google. ${isLive ? "Pulled live from Trustindex" : "Read more on Google or Trustindex"} — no cherry-picking.`}
          />
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-0.5 text-summit-gold" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-summit-gold" strokeWidth={0} />
                  ))}
                </span>
                <span className="font-display text-2xl font-bold text-summit-mist">
                  {data.aggregate.rating.toFixed(1)}
                </span>
                <span className="text-sm text-summit-stone">/ 5.0</span>
                {isLive && (
                  <span className="ml-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-summit-gold/15 text-[10px] font-semibold uppercase tracking-wider text-summit-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-summit-gold animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              <Button href="/reviews" variant="secondary" size="sm" withArrow>
                Read all reviews
              </Button>
            </div>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((r) => (
            <RevealItem key={r.author + r.date}>
              <article className="h-full p-5 sm:p-6 md:p-7 rounded-2xl bg-summit-panel border border-summit-slate/60 hover:border-summit-gold/60 transition-colors duration-300 flex flex-col min-w-0">
                <div
                  className="flex items-center gap-1 text-summit-gold mb-4"
                  aria-label={`${r.rating} out of 5 stars`}
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className={i < r.rating ? "h-4 w-4 fill-summit-gold" : "h-4 w-4 opacity-20"}
                      strokeWidth={0}
                      aria-hidden
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
                      {r.service ? ` · ${r.service}` : ""}
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

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-summit-stone">
            <a
              href="https://www.google.com/search?q=summit+handyman+reviews"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 hover:text-summit-gold transition-colors"
            >
              Google Reviews
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span className="text-summit-stone/40">·</span>
            <a
              href="https://www.trustindex.io/reviews/summit-handyman.ca"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 hover:text-summit-gold transition-colors"
            >
              Trustindex Reviews
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
