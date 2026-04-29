/**
 * Reviews — placeholders matching the live summit-handyman.ca V1 site verbatim.
 * These are kept until a real Google / Trustindex feed is wired in.
 */

export type Review = {
  author: string;
  city: string;
  rating: number;
  date: string;
  body: string;
  service?: string;
  source: "google" | "trustindex" | "facebook";
};

export const placeholderReviews: Review[] = [
  {
    author: "Sarah Jenkins",
    city: "Vancouver, BC",
    rating: 5,
    date: "2026-01",
    body: "Brody was incredibly professional. He fixed our drywall and installed new fixtures. The work was clean, on time, and exactly what we asked for. Will absolutely call him again.",
    source: "google",
  },
  {
    author: "Mike T.",
    city: "North Vancouver",
    rating: 5,
    date: "2026-01",
    body: "Summit Handyman is now my go-to. Fast response, excellent documentation, and the work always comes back better than I expected.",
    source: "google",
  },
  {
    author: "David L.",
    city: "Burnaby",
    rating: 5,
    date: "2025-12",
    body: "Punctual, polite, and did exactly what was promised. The quality of the finish was better than the original builder's work.",
    source: "google",
  },
];

/**
 * Aggregate rating shown on home + reviews page. Soft until live Trustindex feed
 * provides a real number — keep the rating qualitative (5.0 is from V1) and avoid
 * fabricating a count.
 */
export const aggregateRating = {
  rating: 5.0,
  reviewCount: placeholderReviews.length,
};
