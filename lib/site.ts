/**
 * Source of truth for Summit Handyman business data.
 * Pulled from summit-handyman.ca + V1 source. Edit here, not in components.
 */

export const site = {
  name: "Summit Handyman",
  legalName: "Summit Handyman Services",
  owner: "Brody Robertson",
  tagline: "Reliability Reaching New Heights",
  taglineAlt: "The view is always better from a home that works.",
  description:
    "Premium handyman repairs for property managers and families across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale.",
  url: "https://summit-handyman.ca",

  contact: {
    email: "brody@summit-handyman.ca",
    phone: "604-989-5032",
    phoneTel: "+16049895032",
    facebook: "https://facebook.com/brodythehandyman",
    instagram: "https://instagram.com/brodythehandyman",
    messenger: "https://m.me/brodythehandyman",
  },

  pricing: {
    minimum: 150,
    minimumDisplay: "$150 minimum per job",
    minimumLong: "$150 minimum per job. No hidden fees. No hourly games.",
  },

  hours: "By appointment — email or text for fastest response",

  serviceAreas: [
    { slug: "langley", name: "Langley", province: "BC" },
    { slug: "surrey", name: "Surrey", province: "BC" },
    { slug: "white-rock", name: "White Rock", province: "BC" },
    { slug: "aldergrove", name: "Aldergrove", province: "BC" },
    { slug: "abbotsford", name: "Abbotsford", province: "BC" },
    { slug: "cloverdale", name: "Cloverdale", province: "BC" },
  ],

  promise:
    "If it's not done right, I come back and fix it. No charge. No questions.",

  about:
    "I'm Brody Robertson. I started Summit Handyman to bridge the gap between the 'quick fix' and premium service. In an industry known for ghosting and cutting corners, I bring a property manager's mindset to every job: clear communication, cleanliness, and repairs that last.",

  trust: {
    licensed: true,
    insured: true,
    yearsActive: "Locally owned, Lower Mainland",
    rating: 5.0,
    reviewCount: null as number | null, // populated from Trustindex API at runtime
  },

  social: {
    facebook: { handle: "brodythehandyman", url: "https://facebook.com/brodythehandyman" },
    instagram: { handle: "brodythehandyman", url: "https://instagram.com/brodythehandyman" },
  },
} as const;

export type ServiceArea = (typeof site.serviceAreas)[number];
