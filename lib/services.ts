/**
 * Service catalog — source of truth for all handyman offerings.
 * Pulled verbatim from summit-handyman.ca V1 with V2 enhancements.
 */

export type ServiceCategory = "interior" | "exterior" | "safety";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  includes: string[];
  icon: string; // lucide icon name
  hero: string; // image path in /images
};

export const serviceCategories: Record<ServiceCategory, { name: string; description: string }> = {
  interior: {
    name: "Interior Enhancements",
    description: "Repairs, finishes, and installations that make the inside of your home work better.",
  },
  exterior: {
    name: "Exterior Upgrades",
    description: "Curb appeal, weather-proofing, and seasonal maintenance.",
  },
  safety: {
    name: "Safety & Emergency",
    description: "Detectors, childproofing, and peace-of-mind installs.",
  },
};

export const services: Service[] = [
  {
    slug: "general-repairs",
    name: "General Repairs",
    category: "interior",
    tagline: "Leaky faucets to squeaky doors.",
    shortDescription: "Leaky faucets to squeaky doors.",
    longDescription:
      "The small things that quietly drive you crazy. From a faucet that won't stop dripping to a door that catches on the frame, I handle the everyday repairs that homeowners and property managers don't have time to chase.",
    includes: [
      "Faucet repair and replacement",
      "Door alignment, hinges, and hardware",
      "Cabinet hinges and drawer slides",
      "Toilet running, tank, and seal repairs",
      "Drain clearing (minor)",
      "Window track and lock fixes",
    ],
    icon: "Wrench",
    hero: "/images/project-1.webp",
  },
  {
    slug: "painting",
    name: "Painting Services",
    category: "interior",
    tagline: "High-quality paints for a durable finish.",
    shortDescription: "High-quality paints for a durable finish.",
    longDescription:
      "Clean lines, no drips on the trim, no roller marks on the ceiling. I use premium paint and the right prep — caulk, sand, prime — so the finish lasts.",
    includes: [
      "Interior wall and ceiling painting",
      "Trim, baseboards, and doors",
      "Cabinet refinishing",
      "Accent walls and feature finishes",
      "Touch-ups and color matching",
      "Premium paint (Benjamin Moore / Sherwin-Williams)",
    ],
    icon: "Paintbrush",
    hero: "/images/project-2.webp",
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    category: "interior",
    tagline: "Seamless repairs preparing walls for paint.",
    shortDescription: "Seamless repairs preparing walls for paint.",
    longDescription:
      "Patch a hole. Fix the crack that keeps coming back. Skim a textured ceiling smooth. I do drywall the way it should be done — three coats minimum, sanded right, ready for paint with no telltale halo.",
    includes: [
      "Hole and dent patching (any size)",
      "Cracked seam and corner repair",
      "Texture matching (knockdown, orange peel, smooth)",
      "Ceiling repair and skim coating",
      "Water-damage drywall replacement",
      "Trim-to-drywall transitions",
    ],
    icon: "Hammer",
    hero: "/images/project-3.webp",
  },
  {
    slug: "electrical",
    name: "Electrical Work",
    category: "interior",
    tagline: "Lighting installations to smart home devices.",
    shortDescription: "Lighting installations to smart home devices.",
    longDescription:
      "Light fixtures, dimmers, smart switches, and ceiling fans. Permitted electrical or anything beyond the homeowner-allowed scope is referred to a licensed electrician — but for swap-and-install work, I'll get it done clean.",
    includes: [
      "Light fixture replacement",
      "Dimmer and smart switch install",
      "Ceiling fan installation",
      "Smart home device setup (locks, doorbells, thermostats)",
      "Under-cabinet lighting",
      "Exterior light replacement",
    ],
    icon: "Zap",
    hero: "/images/project-4.webp",
  },
  {
    slug: "tile-flooring",
    name: "Tile & Flooring",
    category: "interior",
    tagline: "Kitchens, bathrooms, hardwood, and laminate.",
    shortDescription: "Kitchens, bathrooms, hardwood, and laminate.",
    longDescription:
      "Backsplashes, bathroom tile, laminate planks, and engineered hardwood. Subfloor checked, underlayment right, lines square, grout finished clean.",
    includes: [
      "Kitchen backsplash installation",
      "Bathroom floor and shower tile",
      "Laminate and vinyl plank flooring",
      "Engineered hardwood install",
      "Tile and grout repair",
      "Transition strips and trim",
    ],
    icon: "Square",
    hero: "/images/project-5.webp",
  },
  {
    slug: "assembly-mounting",
    name: "Assembly & Mounting",
    category: "interior",
    tagline: "Furniture assembly, art, and mirror hanging.",
    shortDescription: "Furniture assembly, art, and mirror hanging.",
    longDescription:
      "TV mounted level. Heavy mirror anchored into studs. Closet system squared and plumb. The 'last 10%' of every move-in or renovation, handled.",
    includes: [
      "TV wall mounting (with cable management)",
      "Heavy art and mirror hanging",
      "IKEA and flat-pack furniture assembly",
      "Closet systems and shelving",
      "Curtain rods and blinds",
      "Wall-mounted shelves and floating shelves",
    ],
    icon: "Package",
    hero: "/images/project-6.webp",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    category: "exterior",
    tagline: "Restore your home's exterior surfaces.",
    shortDescription: "Restore your home's exterior surfaces.",
    longDescription:
      "Driveways, decks, siding, fences. Years of Pacific Northwest moss and grime washed off the right way — no etched concrete, no gouged wood.",
    includes: [
      "Driveways and walkways",
      "Decks and patios",
      "Vinyl, fiber-cement, and stucco siding",
      "Fences and gates",
      "Patio furniture and BBQs",
      "Garage doors",
    ],
    icon: "Droplets",
    hero: "/images/project-1.webp",
  },
  {
    slug: "gutter-maintenance",
    name: "Gutter Maintenance",
    category: "exterior",
    tagline: "Cleaning and repair.",
    shortDescription: "Cleaning and repair.",
    longDescription:
      "Lower Mainland rain doesn't forgive blocked gutters. I clear, flush, check downspouts, re-seal seams, and re-secure brackets so water goes where it should.",
    includes: [
      "Full gutter cleanout",
      "Downspout flushing",
      "Bracket and hanger re-securing",
      "Sealant repair on seams",
      "Gutter guard install",
      "Minor gutter section replacement",
    ],
    icon: "CloudRain",
    hero: "/images/project-2.webp",
  },
  {
    slug: "fence-deck",
    name: "Fence & Deck",
    category: "exterior",
    tagline: "Staining, sealing, and structural repairs.",
    shortDescription: "Staining, sealing, and structural repairs.",
    longDescription:
      "Refinish a tired deck. Replace rotted boards. Re-stain a fence. Tighten gates that sag. The work that gets your outdoor space ready for another BC summer.",
    includes: [
      "Deck staining and sealing",
      "Board replacement",
      "Railing repair",
      "Fence post and panel repair",
      "Gate alignment and hardware",
      "Fence staining",
    ],
    icon: "Fence",
    hero: "/images/project-3.webp",
  },
  {
    slug: "roof-driveway",
    name: "Roof & Driveway",
    category: "exterior",
    tagline: "Minor roof repairs and driveway sealing.",
    shortDescription: "Minor roof repairs and driveway sealing.",
    longDescription:
      "Replace cracked shingles. Re-seal a flashing. Crack-fill and seal a driveway. Smaller-scope work that doesn't need a full roofing or paving crew.",
    includes: [
      "Shingle replacement",
      "Flashing re-sealing",
      "Vent boot repair",
      "Driveway crack filling",
      "Asphalt sealing",
      "Skylight seal touch-up",
    ],
    icon: "Home",
    hero: "/images/project-4.webp",
  },
  {
    slug: "home-safety",
    name: "Home Safety Solutions",
    category: "safety",
    tagline: "Smoke and CO detector installs, childproofing, and peace-of-mind installs.",
    shortDescription: "Detectors, childproofing, and peace-of-mind installs.",
    longDescription:
      "Smoke and carbon monoxide detectors installed and tested to BC code. Childproofing — cabinet locks, outlet covers, gates — installed properly so they actually hold.",
    includes: [
      "Smoke detector install (hardwired or battery)",
      "Carbon monoxide detector install",
      "Childproof cabinet locks",
      "Stair gates and pet gates",
      "Outlet covers and cord management",
      "Furniture anti-tip anchors",
    ],
    icon: "Shield",
    hero: "/images/project-5.webp",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}
