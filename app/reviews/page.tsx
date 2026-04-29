import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ReviewsRichPage } from "@/components/sections/reviews-rich";
import { aggregateRating } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read Summit Handyman reviews from homeowners and property managers. See the trust signals, service patterns, and proof points that help customers choose Brody.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        eyebrow="Real customer proof"
        title={
          <>
            <span className="font-serif italic font-normal text-gradient-gold">
              5.0 stars
            </span>{" "}
            from homes that needed the job done right.
          </>
        }
        description={`${aggregateRating.rating.toFixed(1)} on Google, verified through Trustindex. Browse the patterns, pressure-test the trust signals, and see why homeowners and property managers choose Brody.`}
      >
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <a
            href="https://www.google.com/search?q=summit+handyman+reviews"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-divider-strong bg-surface-panel/80 text-fg-strong hover:border-accent hover:text-accent transition-colors text-sm"
          >
            View on Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://www.trustindex.io/reviews/summit-handyman.ca"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-divider-strong bg-surface-panel/80 text-fg-strong hover:border-accent hover:text-accent transition-colors text-sm"
          >
            View on Trustindex
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <ReviewsRichPage />
    </>
  );
}
