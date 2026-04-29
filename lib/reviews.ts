/**
 * Reviews — placeholder static set used until live Trustindex/Google API is wired in.
 * Replace at runtime via /api/reviews route.
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
    author: "Sarah J.",
    city: "Langley",
    rating: 5,
    date: "2026-01-08",
    body: "Brody was incredibly professional. He fixed our drywall and installed new fixtures. The work was clean, on time, and exactly what we asked for. Will absolutely call him again.",
    service: "Drywall Repair",
    source: "google",
  },
  {
    author: "Mike T.",
    city: "Surrey",
    rating: 5,
    date: "2026-01-04",
    body: "Summit Handyman is now my go-to for our property management portfolio. Fast response, excellent documentation, and the units come back in better shape than we left them.",
    service: "Property Management",
    source: "google",
  },
  {
    author: "David L.",
    city: "White Rock",
    rating: 5,
    date: "2025-12-28",
    body: "Punctual, polite, and did exactly what was promised. The quality of the finish on the trim was better than the original builder's work.",
    service: "Painting",
    source: "google",
  },
  {
    author: "Jenna R.",
    city: "Abbotsford",
    rating: 5,
    date: "2025-12-20",
    body: "Replaced our kitchen faucet and fixed two doors that had been driving me crazy for months. Fair price and explained everything as he went.",
    service: "General Repairs",
    source: "google",
  },
  {
    author: "Tom & Lisa",
    city: "Cloverdale",
    rating: 5,
    date: "2025-12-12",
    body: "We had a long list. He worked through it methodically over two days and the place feels new again. Cleanup was perfect.",
    service: "Multiple",
    source: "google",
  },
];

export const aggregateRating = {
  rating: 5.0,
  reviewCount: placeholderReviews.length,
};
