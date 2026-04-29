export type Project = {
  slug: string;
  title: string;
  category: "interior" | "exterior" | "drywall" | "tile" | "painting" | "exterior-deck" | "safety";
  serviceSlug: string;
  area: string;
  shortStory: string;
  longStory: string;
  beforeImage: string;
  afterImage: string;
  galleryImages?: string[];
  duration: string;
  date: string;
  /** True when the photo + caption pair is a curated representative sample, not a job-specific case study. */
  isSample?: boolean;
};

/**
 * Recent Summits — sample project cards.
 *
 * Until Brody supplies job-specific photo + caption pairs, these tiles are
 * intentionally generic: a photo from his V1 portfolio, paired with the
 * service category and city, with no fabricated job-specific story.
 *
 * The detail page surfaces an honest "sample" disclosure so visitors aren't
 * misled about specifics that haven't been verified.
 */
export const projects: Project[] = [
  {
    slug: "langley-interior-sample",
    title: "Interior Repair · Langley",
    category: "interior",
    serviceSlug: "general-repairs",
    area: "Langley",
    shortStory: "Interior repair work — sample from Brody's portfolio.",
    longStory:
      "A representative interior repair completed in Langley. Real captions and full project details will be added as Brody documents new jobs.",
    beforeImage: "/images/project-1.webp",
    afterImage: "/images/project-1.webp",
    duration: "Same day",
    date: "2026-01",
    isSample: true,
  },
  {
    slug: "surrey-fixture-sample",
    title: "Fixture & Hardware · Surrey",
    category: "interior",
    serviceSlug: "general-repairs",
    area: "Surrey",
    shortStory: "Fixture and hardware update — sample from Brody's portfolio.",
    longStory:
      "Sample fixture and hardware work completed in Surrey. Real job-specific details will be added as Brody documents new visits.",
    beforeImage: "/images/project-2.webp",
    afterImage: "/images/project-2.webp",
    duration: "Half day",
    date: "2026-01",
    isSample: true,
  },
  {
    slug: "white-rock-tile-sample",
    title: "Tile Work · White Rock",
    category: "tile",
    serviceSlug: "tile-flooring",
    area: "White Rock",
    shortStory: "Tile installation — sample from Brody's portfolio.",
    longStory:
      "A representative tile job completed in White Rock. Real captions and full project details will be added as Brody documents new work.",
    beforeImage: "/images/project-3.webp",
    afterImage: "/images/project-3.webp",
    duration: "1–2 days",
    date: "2026-01",
    isSample: true,
  },
  {
    slug: "abbotsford-exterior-sample",
    title: "Exterior Work · Abbotsford",
    category: "exterior-deck",
    serviceSlug: "fence-deck",
    area: "Abbotsford",
    shortStory: "Exterior maintenance — sample from Brody's portfolio.",
    longStory:
      "Representative exterior maintenance completed in Abbotsford. Real captions and full project details will be added as Brody documents new jobs.",
    beforeImage: "/images/project-4.webp",
    afterImage: "/images/project-4.webp",
    duration: "1 day",
    date: "2026-01",
    isSample: true,
  },
  {
    slug: "cloverdale-paint-sample",
    title: "Painting · Cloverdale",
    category: "painting",
    serviceSlug: "painting",
    area: "Cloverdale",
    shortStory: "Painting work — sample from Brody's portfolio.",
    longStory:
      "A representative painting job completed in Cloverdale. Real captions and full project details will be added as Brody documents new work.",
    beforeImage: "/images/project-5.webp",
    afterImage: "/images/project-5.webp",
    duration: "1–2 days",
    date: "2026-01",
    isSample: true,
  },
  {
    slug: "langley-mounting-sample",
    title: "Mounting & Assembly · Langley",
    category: "interior",
    serviceSlug: "assembly-mounting",
    area: "Langley",
    shortStory: "Mounting and assembly — sample from Brody's portfolio.",
    longStory:
      "Representative mounting and assembly work completed in Langley. Real captions and full project details will be added as Brody documents new jobs.",
    beforeImage: "/images/project-6.webp",
    afterImage: "/images/project-6.webp",
    duration: "Half day",
    date: "2026-01",
    isSample: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
