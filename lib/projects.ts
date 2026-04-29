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
};

/**
 * Recent Summits — projects pulled from V1 photo set.
 * Each entry pairs the same image as before/after for now since V1 only shipped single
 * images per project; replace beforeImage with a real "before" shot when Brody supplies one.
 */
export const projects: Project[] = [
  {
    slug: "langley-drywall-skim",
    title: "Smooth-Finish Skim Coat",
    category: "drywall",
    serviceSlug: "drywall-repair",
    area: "Langley",
    shortStory: "Textured ceiling skimmed flat, taped, sanded, and ready for paint.",
    longStory:
      "Stipple ceiling that the homeowner had hated for a decade. Three skim coats, sanded between each, primed, and finished. The room reads taller and the light bounces clean.",
    beforeImage: "/images/project-1.webp",
    afterImage: "/images/project-1.webp",
    duration: "2 days",
    date: "2026-01",
  },
  {
    slug: "surrey-faucet-vanity-swap",
    title: "Vanity & Faucet Refresh",
    category: "interior",
    serviceSlug: "general-repairs",
    area: "Surrey",
    shortStory: "New vanity dropped in, faucet swapped, drain reseated.",
    longStory:
      "Tenant turnover for a Surrey property manager. Old vanity out, new one set level, faucet cartridge install, drain reseated and tested. Quick turnaround so the unit could re-list.",
    beforeImage: "/images/project-2.webp",
    afterImage: "/images/project-2.webp",
    duration: "Half day",
    date: "2026-01",
  },
  {
    slug: "white-rock-tile-backsplash",
    title: "Kitchen Backsplash Tile",
    category: "tile",
    serviceSlug: "tile-flooring",
    area: "White Rock",
    shortStory: "Subway tile install, grout and seal finish.",
    longStory:
      "Subway tile backsplash, full kitchen run with outlet cuts and a window return. Grouted, sealed, caulked at the counter line. Clean lines, no buildup.",
    beforeImage: "/images/project-3.webp",
    afterImage: "/images/project-3.webp",
    duration: "1.5 days",
    date: "2026-01",
  },
  {
    slug: "abbotsford-deck-refinish",
    title: "Deck Refinish",
    category: "exterior-deck",
    serviceSlug: "fence-deck",
    area: "Abbotsford",
    shortStory: "Deck washed, sanded, sealed, and re-stained.",
    longStory:
      "Pressure washed, sanded the worst boards, two coats of premium semi-transparent stain. Ready for another five years of BC weather.",
    beforeImage: "/images/project-4.webp",
    afterImage: "/images/project-4.webp",
    duration: "1 day",
    date: "2026-01",
  },
  {
    slug: "cloverdale-interior-paint",
    title: "Living Room Repaint",
    category: "painting",
    serviceSlug: "painting",
    area: "Cloverdale",
    shortStory: "Walls, trim, and ceiling — full repaint with premium paint.",
    longStory:
      "Full living room repaint. Caulked baseboards, filled nail holes, primed where needed, two coats of Benjamin Moore Regal. Trim cut clean, no roller halo on the ceiling.",
    beforeImage: "/images/project-5.webp",
    afterImage: "/images/project-5.webp",
    duration: "2 days",
    date: "2026-01",
  },
  {
    slug: "langley-tv-mount",
    title: "Heavy TV Mount + Cable Hide",
    category: "interior",
    serviceSlug: "assembly-mounting",
    area: "Langley",
    shortStory: "75\" TV mounted, in-wall cable run, no visible cords.",
    longStory:
      "75-inch TV anchored into studs, articulating mount, in-wall cable kit so HDMI and power run behind the drywall. No exposed cords, no surface raceway.",
    beforeImage: "/images/project-6.webp",
    afterImage: "/images/project-6.webp",
    duration: "Half day",
    date: "2026-01",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
