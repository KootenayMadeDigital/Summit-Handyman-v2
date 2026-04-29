export type Project = {
  slug: string;
  title: string;
  category: "interior" | "exterior" | "drywall" | "tile" | "painting" | "exterior-deck" | "safety";
  serviceSlug: string;
  /** Optional. left empty until Brody confirms per-job locations. */
  area: string;
  shortStory: string;
  longStory: string;
  beforeImage: string;
  afterImage: string;
  galleryImages?: string[];
  duration: string;
  date: string;
};

/**
 * Recent Summits. generic portfolio cards.
 *
 * Captions are intentionally non-specific: no fabricated city, no
 * fabricated job-specific story. Titles match the photo's general nature
 * only. When Brody supplies real before/after photos with stories +
 * locations, replace these entries.
 */
export const projects: Project[] = [
  {
    slug: "summit-1",
    title: "Recent project",
    category: "interior",
    serviceSlug: "general-repairs",
    area: "",
    shortStory: "From Brody's portfolio.",
    longStory: "A representative project from Brody's portfolio.",
    beforeImage: "/images/project-1.webp",
    afterImage: "/images/project-1.webp",
    duration: "",
    date: "2026",
  },
  {
    slug: "summit-2",
    title: "Recent project",
    category: "interior",
    serviceSlug: "general-repairs",
    area: "",
    shortStory: "From Brody's portfolio.",
    longStory: "A representative project from Brody's portfolio.",
    beforeImage: "/images/project-2.webp",
    afterImage: "/images/project-2.webp",
    duration: "",
    date: "2026",
  },
  {
    slug: "summit-3",
    title: "Recent project",
    category: "tile",
    serviceSlug: "tile-flooring",
    area: "",
    shortStory: "From Brody's portfolio.",
    longStory: "A representative project from Brody's portfolio.",
    beforeImage: "/images/project-3.webp",
    afterImage: "/images/project-3.webp",
    duration: "",
    date: "2026",
  },
  {
    slug: "summit-4",
    title: "Recent project",
    category: "exterior-deck",
    serviceSlug: "fence-deck",
    area: "",
    shortStory: "From Brody's portfolio.",
    longStory: "A representative project from Brody's portfolio.",
    beforeImage: "/images/project-4.webp",
    afterImage: "/images/project-4.webp",
    duration: "",
    date: "2026",
  },
  {
    slug: "summit-5",
    title: "Recent project",
    category: "painting",
    serviceSlug: "painting",
    area: "",
    shortStory: "From Brody's portfolio.",
    longStory: "A representative project from Brody's portfolio.",
    beforeImage: "/images/project-5.webp",
    afterImage: "/images/project-5.webp",
    duration: "",
    date: "2026",
  },
  {
    slug: "summit-6",
    title: "Recent project",
    category: "interior",
    serviceSlug: "assembly-mounting",
    area: "",
    shortStory: "From Brody's portfolio.",
    longStory: "A representative project from Brody's portfolio.",
    beforeImage: "/images/project-6.webp",
    afterImage: "/images/project-6.webp",
    duration: "",
    date: "2026",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
