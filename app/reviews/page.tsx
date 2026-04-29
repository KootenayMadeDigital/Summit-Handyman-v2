import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ReviewsRichPage } from "@/components/sections/reviews-rich";
import { aggregateRating, placeholderReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read Summit Handyman reviews from homeowners, tenants, and property managers across the Lower Mainland. 5.0 rating, public review wall, and trust signals.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const reviewsPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/reviews#webpage`,
    url: `${site.url}/reviews`,
    name: "Summit Handyman reviews",
    description: metadata.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#business` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: placeholderReviews.map((review, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${review.author} review`,
        item: {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
          author: { "@type": "Person", name: review.author },
          datePublished: review.date,
          reviewBody: review.body,
          itemReviewed: { "@id": `${site.url}/#business` },
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Reviews", item: `${site.url}/reviews` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
            className="inline-flex min-h-11 items-center gap-2 px-4 py-2 rounded-full border border-divider-strong bg-surface-panel/80 text-fg-strong hover:border-accent hover:text-accent transition-colors text-sm"
          >
            View on Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://www.trustindex.io/reviews/summit-handyman.ca"
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center gap-2 px-4 py-2 rounded-full border border-divider-strong bg-surface-panel/80 text-fg-strong hover:border-accent hover:text-accent transition-colors text-sm"
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
