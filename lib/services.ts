/**
 * Service catalog. Source of truth for all handyman offerings.
 *
 * RULE: NEVER fabricate prices. The only confirmed price is the
 * $150 minimum charge per job (site.pricing.minimumDisplay). Every
 * other price is by quote. Do not add "starting at" or estimated
 * ranges to this file. Pricing is communicated via the quote form,
 * not the website.
 */

export type ServiceCategory = "interior" | "exterior" | "safety";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  /** Short SEO keywords associated with this service. Used for combo page metadata. */
  keywords: string[];
  tagline: string;
  shortDescription: string;
  longDescription: string;
  includes: string[];
  /** 3-5 FAQ items per service for rich-results FAQPage schema. */
  faqs: Array<{ q: string; a: string }>;
  icon: string;
  hero: string;
};

export const serviceCategories: Record<ServiceCategory, { name: string; description: string }> = {
  interior: {
    name: "Interior Enhancements",
    description: "Repairs, finishes, and installations that make the inside of your home work better.",
  },
  exterior: {
    name: "Exterior Upgrades",
    description: "Curb appeal, weather-proofing, and seasonal maintenance for Lower Mainland homes.",
  },
  safety: {
    name: "Safety & Emergency",
    description: "Detectors, childproofing, and peace-of-mind installs to BC code.",
  },
};

export const services: Service[] = [
  {
    slug: "general-repairs",
    name: "General Repairs",
    category: "interior",
    keywords: ["handyman repairs", "home repairs", "small jobs", "fix-it list", "punch list"],
    tagline: "Leaky faucets to squeaky doors.",
    shortDescription: "Leaky faucets to squeaky doors.",
    longDescription:
      "The small things that quietly drive you crazy. From a faucet that won't stop dripping to a door that catches on the frame, Brody handles the everyday repairs that homeowners and property managers across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale don't have time to chase. Bundle a list and get it all done in a single visit.",
    includes: [
      "Faucet repair and replacement",
      "Door alignment, hinges, and hardware",
      "Cabinet hinges and drawer slides",
      "Toilet running, tank, and seal repairs",
      "Drain clearing (minor)",
      "Window track and lock fixes",
      "Caulking around tubs, sinks, and showers",
      "Squeaky floor and stair repair",
    ],
    faqs: [
      {
        q: "What counts as a small repair?",
        a: "Anything that takes under an hour of focused work, like a single faucet swap, a door realignment, or a few cabinet hinges. Bundle several small repairs into one visit and the $150 minimum covers the whole list.",
      },
      {
        q: "How is pricing handled?",
        a: "Every job gets a free written estimate after Brody reviews your quote submission. The $150 minimum applies to all visits to cover tools, insurance, travel, and craftsmanship. Final pricing is always quoted in writing before any work starts.",
      },
      {
        q: "Can you handle a tenant turnover punch list?",
        a: "Yes. Brody works with property managers across Surrey, Langley, and Abbotsford on tenant turnovers, including detailed itemized invoicing and before/after photo documentation.",
      },
    ],
    icon: "Wrench",
    hero: "/images/service-general-repairs.webp",
  },
  {
    slug: "painting",
    name: "Painting Services",
    category: "interior",
    keywords: ["interior painting", "house painter", "trim painting", "ceiling painting", "cabinet refinishing"],
    tagline: "High-quality paints for a durable finish.",
    shortDescription: "High-quality paints for a durable finish.",
    longDescription:
      "Clean lines, no drips on the trim, no roller marks on the ceiling. Brody uses premium paints (Benjamin Moore Regal, Sherwin-Williams Emerald) and the right prep work, including caulking, sanding, and priming, so the finish lasts. Painting service available across the Lower Mainland for single rooms, full home interiors, trim refreshes, and cabinet refinishes.",
    includes: [
      "Interior wall and ceiling painting",
      "Trim, baseboards, and doors",
      "Cabinet refinishing",
      "Accent walls and feature finishes",
      "Touch-ups and color matching",
      "Premium paint (Benjamin Moore / Sherwin-Williams)",
      "Caulking, sanding, priming included",
      "Furniture moved or covered, floors fully protected",
    ],
    faqs: [
      {
        q: "How long does a single room take?",
        a: "A standard 12 by 12 bedroom usually takes about a day with prep, two coats, and dry time. Larger rooms or vaulted ceilings take longer. Brody confirms timing in your written estimate.",
      },
      {
        q: "Do you supply the paint?",
        a: "Brody can pick up paint at cost plus a small handling fee, or you can supply your own. Either way the prep and finish quality is the same.",
      },
      {
        q: "How is the price determined?",
        a: "Submit your quote request with photos of the space and Brody will email a written estimate within 24 hours. The $150 minimum applies to every visit.",
      },
    ],
    icon: "Paintbrush",
    hero: "/images/service-painting.webp",
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    category: "interior",
    keywords: ["drywall patch", "drywall hole", "ceiling repair", "skim coat", "texture matching"],
    tagline: "Seamless repairs preparing walls for paint.",
    shortDescription: "Seamless repairs preparing walls for paint.",
    longDescription:
      "Patch a hole. Fix the crack that keeps coming back. Skim a textured ceiling smooth. Brody does drywall the way it should be done: three coats minimum, sanded right, ready for paint with no telltale halo around the patch. Drywall repair across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale, with texture matching for knockdown, orange peel, and smooth finishes.",
    includes: [
      "Hole and dent patching (any size)",
      "Cracked seam and corner repair",
      "Texture matching (knockdown, orange peel, smooth)",
      "Ceiling repair and skim coating",
      "Water-damage drywall replacement",
      "Trim-to-drywall transitions",
      "Anchor hole repair (full set)",
      "Pre-paint sanding and prep",
    ],
    faqs: [
      {
        q: "Why do some patches always show through paint?",
        a: "One-coat patches telegraph through paint within weeks. Three coats, sanded between each, primed, and re-textured to match is the only way to make it disappear permanently.",
      },
      {
        q: "Can you match my ceiling texture?",
        a: "Yes. Most older Lower Mainland homes have knockdown or stipple ceilings. Brody uses spray-on knockdown and sponge-stipple rolling to match. Done right, you can't see the patch.",
      },
      {
        q: "How is pricing handled?",
        a: "Submit photos and a quick description through the quote form. Brody reviews and emails a written estimate within 24 hours. The $150 minimum covers a single visit.",
      },
    ],
    icon: "Hammer",
    hero: "/images/service-drywall-repair.webp",
  },
  {
    slug: "electrical",
    name: "Electrical Work",
    category: "interior",
    keywords: ["light fixture install", "ceiling fan install", "smart switch", "dimmer install", "smart home"],
    tagline: "Lighting installations to smart home devices.",
    shortDescription: "Lighting installations to smart home devices.",
    longDescription:
      "Light fixtures, dimmers, smart switches, and ceiling fans. Permitted electrical or anything beyond the homeowner-allowed scope is referred to a licensed electrician, but for swap-and-install work in Lower Mainland homes, Brody gets it done clean. Smart locks, doorbell cameras, smart thermostats, and under-cabinet lighting all part of the regular install menu.",
    includes: [
      "Light fixture replacement",
      "Dimmer and smart switch install",
      "Ceiling fan installation",
      "Smart home device setup (locks, doorbells, thermostats)",
      "Under-cabinet lighting",
      "Exterior light replacement",
      "Outlet and switch plate replacement",
      "Hardwired smoke and CO detector swap",
    ],
    faqs: [
      {
        q: "Are you a licensed electrician?",
        a: "Brody handles homeowner-allowed scope (fixture swaps, smart switches with neutral wires, ceiling fan installs into existing boxes). Anything that requires a permit or new wiring is referred to a fully licensed electrician.",
      },
      {
        q: "Do smart switches work with my existing wiring?",
        a: "Most modern smart switches need a neutral wire. Brody confirms your wiring before quoting. Older Lower Mainland homes sometimes need a small workaround (battery switch or hub).",
      },
      {
        q: "How is pricing handled?",
        a: "Every install gets a free written estimate after the quote review. The $150 minimum applies to every visit.",
      },
    ],
    icon: "Zap",
    hero: "/images/service-electrical.webp",
  },
  {
    slug: "tile-flooring",
    name: "Tile & Flooring",
    category: "interior",
    keywords: ["tile install", "backsplash", "bathroom tile", "laminate flooring", "vinyl plank", "hardwood install"],
    tagline: "Kitchens, bathrooms, hardwood, and laminate.",
    shortDescription: "Kitchens, bathrooms, hardwood, and laminate.",
    longDescription:
      "Backsplashes, bathroom tile, laminate planks, and engineered hardwood. Subfloor checked, underlayment laid right, lines kept square, grout finished clean. Tile and flooring installations across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale, from kitchen backsplashes to full bathroom tile jobs and luxury vinyl plank flooring throughout entire homes.",
    includes: [
      "Kitchen backsplash installation",
      "Bathroom floor and shower tile",
      "Laminate and vinyl plank flooring",
      "Engineered hardwood install",
      "Tile and grout repair",
      "Transition strips and trim",
      "Subfloor inspection and prep",
      "Grout sealing",
    ],
    faqs: [
      {
        q: "How is the price determined?",
        a: "Submit photos of the space and a description through the quote form. Brody reviews scope, materials, and access before sending a written estimate, within 24 hours.",
      },
      {
        q: "Do you handle bathroom tile from scratch?",
        a: "Brody handles tile installation, grouting, and sealing. Full bathroom remodels involving plumbing relocation are typically referred or partnered.",
      },
      {
        q: "What flooring brands do you install?",
        a: "Most major brands are fine: Mohawk, Shaw, Pergo, Vidaplank. Bring your own materials or Brody picks them up at cost plus handling.",
      },
    ],
    icon: "Square",
    hero: "/images/service-tile-flooring.webp",
  },
  {
    slug: "assembly-mounting",
    name: "Assembly & Mounting",
    category: "interior",
    keywords: ["TV mount install", "furniture assembly", "IKEA assembly", "shelf install", "art hanging"],
    tagline: "Furniture assembly, art, and mirror hanging.",
    shortDescription: "Furniture assembly, art, and mirror hanging.",
    longDescription:
      "TV mounted level. Heavy mirror anchored into studs. Closet system squared and plumb. The last 10 percent of every move-in or renovation, handled. TV mounting, IKEA and flat-pack furniture assembly, heavy art hanging, curtain rods, blinds, and floating shelves across the Lower Mainland.",
    includes: [
      "TV wall mounting (with cable management)",
      "Heavy art and mirror hanging",
      "IKEA and flat-pack furniture assembly",
      "Closet systems and shelving",
      "Curtain rods and blinds",
      "Wall-mounted shelves and floating shelves",
      "Anti-tip furniture anchoring",
      "Stud finding and proper anchoring",
    ],
    faqs: [
      {
        q: "Can you hide TV cables in the wall?",
        a: "Yes. Brody runs an in-wall cable kit so HDMI and power are hidden behind the drywall, no visible cords or surface raceway.",
      },
      {
        q: "Will my IKEA wardrobe sit level on uneven floors?",
        a: "Yes. Brody shims and anchors flat-pack wardrobes to studs so they don't lean or wobble. Anti-tip anchors included on tall pieces.",
      },
      {
        q: "Do you mount TVs over a fireplace?",
        a: "Yes, with the right mount and a heat shield consideration. Brody confirms the install location is safe before drilling.",
      },
    ],
    icon: "Package",
    hero: "/images/service-assembly-mounting.webp",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    category: "exterior",
    keywords: ["pressure washing", "driveway cleaning", "deck cleaning", "siding wash", "moss removal"],
    tagline: "Restore your home's exterior surfaces.",
    shortDescription: "Restore your home's exterior surfaces.",
    longDescription:
      "Driveways, decks, siding, fences. Years of Pacific Northwest moss and grime washed off the right way, no etched concrete, no gouged wood. Pressure washing across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Spring and fall are peak season, but moss-prone Lower Mainland properties benefit from a wash anytime the rain lets up.",
    includes: [
      "Driveways and walkways",
      "Decks and patios",
      "Vinyl, fiber-cement, and stucco siding",
      "Fences and gates",
      "Patio furniture and BBQs",
      "Garage doors",
      "Concrete walkways and stairs",
      "Soft-wash for delicate surfaces",
    ],
    faqs: [
      {
        q: "Will pressure washing damage my siding?",
        a: "Done right, no. Brody uses a soft-wash technique on vinyl, fiber-cement, and stucco at the correct PSI and distance. The aggressive direct-blast that strips paint is the wrong approach for most home exteriors.",
      },
      {
        q: "How often should I pressure wash my driveway?",
        a: "Most Lower Mainland driveways benefit from an annual wash, typically before sealing in spring or after fall leaf drop. Moss-heavy properties may need it twice a year.",
      },
      {
        q: "How is pricing handled?",
        a: "Submit a few photos and the rough scope through the quote form. Brody emails a written estimate within 24 hours. The $150 minimum applies to every visit.",
      },
    ],
    icon: "Droplets",
    hero: "/images/service-pressure-washing.webp",
  },
  {
    slug: "gutter-maintenance",
    name: "Gutter Maintenance",
    category: "exterior",
    keywords: ["gutter cleaning", "gutter repair", "downspout flush", "gutter guards"],
    tagline: "Cleaning and repair.",
    shortDescription: "Cleaning and repair.",
    longDescription:
      "Lower Mainland rain doesn't forgive blocked gutters. Brody clears debris, flushes downspouts, checks for sealant failures, and re-secures loose brackets so water goes where it should: 1 metre away from the foundation, not pooling against the house. Gutter cleaning and repair across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale, with annual fall service the most common booking.",
    includes: [
      "Full gutter cleanout",
      "Downspout flushing",
      "Bracket and hanger re-securing",
      "Sealant repair on seams",
      "Gutter guard install",
      "Minor gutter section replacement",
      "Roof valley debris check",
      "Splash block placement",
    ],
    faqs: [
      {
        q: "How often should I clean my gutters in BC?",
        a: "Twice a year for most Lower Mainland homes, once after fall leaf drop and once in spring. Properties with overhanging trees may need three or four cleanings.",
      },
      {
        q: "Can you install gutter guards?",
        a: "Yes. Mesh-style gutter guards work well in BC and significantly reduce cleaning frequency. Brody recommends and installs them after the first cleaning.",
      },
      {
        q: "What if my gutters are sagging?",
        a: "Brody checks every bracket and re-secures or replaces failed ones. Sagging gutters dump water against the foundation, which causes far more expensive damage than the repair.",
      },
    ],
    icon: "CloudRain",
    hero: "/images/service-gutter-maintenance.webp",
  },
  {
    slug: "fence-deck",
    name: "Fence & Deck",
    category: "exterior",
    keywords: ["deck staining", "fence repair", "deck refinish", "fence staining", "deck board replace"],
    tagline: "Staining, sealing, and structural repairs.",
    shortDescription: "Staining, sealing, and structural repairs.",
    longDescription:
      "Refinish a tired deck. Replace rotted boards. Re-stain a fence. Tighten gates that sag. The work that gets your outdoor space ready for another BC summer. Deck and fence service across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Spring is peak season for refinish work; fall is best for repairs ahead of winter.",
    includes: [
      "Deck staining and sealing",
      "Board replacement",
      "Railing repair",
      "Fence post and panel repair",
      "Gate alignment and hardware",
      "Fence staining",
      "Pressure wash before stain",
      "Premium semi-transparent stain (Sansin, Behr Premium)",
    ],
    faqs: [
      {
        q: "When is the best time to refinish a deck in BC?",
        a: "Late April to early June. Dry enough to stain, warm enough to cure, far enough from summer that it'll be ready for first BBQ. Late August through September works too.",
      },
      {
        q: "Will you replace rotten deck boards before staining?",
        a: "Always. Staining over rotten boards just wastes the stain. Brody scopes board replacement up front and includes it in the written estimate.",
      },
      {
        q: "How long does deck stain last?",
        a: "Premium semi-transparent stain typically lasts a few years on most Lower Mainland decks. South or west-facing decks fade faster due to UV exposure.",
      },
    ],
    icon: "Fence",
    hero: "/images/service-fence-deck.webp",
  },
  {
    slug: "roof-driveway",
    name: "Roof & Driveway",
    category: "exterior",
    keywords: ["roof repair", "shingle replace", "driveway sealing", "asphalt repair", "flashing repair"],
    tagline: "Minor roof repairs and driveway sealing.",
    shortDescription: "Minor roof repairs and driveway sealing.",
    longDescription:
      "Replace cracked shingles. Re-seal a flashing. Crack-fill and seal a driveway. Smaller-scope work that doesn't need a full roofing or paving crew. Roof and driveway service for accessible homes in Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Anything beyond minor scope is referred to a specialist.",
    includes: [
      "Shingle replacement",
      "Flashing re-sealing",
      "Vent boot repair",
      "Driveway crack filling",
      "Asphalt sealing",
      "Skylight seal touch-up",
      "Gutter-roof junction inspection",
      "Concrete walkway crack repair",
    ],
    faqs: [
      {
        q: "Do you do full roof replacements?",
        a: "No. Brody handles minor roof repairs (a handful of shingles, a flashing seal, a vent boot). Full re-roofs go to a dedicated roofing crew.",
      },
      {
        q: "When should I seal my driveway?",
        a: "Asphalt driveways benefit from sealing every few years in BC, depending on sun exposure. Crack-fill any time you see them widening; freeze cycles double crack size each winter.",
      },
      {
        q: "Can you do this work in winter?",
        a: "Driveway sealing requires above 10C and dry conditions, so it's a spring through fall job. Roof shingle work can be done year-round if the roof is safely accessible.",
      },
    ],
    icon: "Home",
    hero: "/images/service-roof-driveway.webp",
  },
  {
    slug: "home-safety",
    name: "Home Safety Solutions",
    category: "safety",
    keywords: ["smoke detector install", "CO detector install", "childproofing", "home safety", "anti-tip anchor"],
    tagline: "Detectors, childproofing, and peace-of-mind installs.",
    shortDescription: "Detectors, childproofing, and peace-of-mind installs.",
    longDescription:
      "Smoke and carbon monoxide detectors installed and tested to BC code. Childproofing including cabinet locks, outlet covers, and gates installed properly so they actually hold. Furniture anti-tip anchors so a curious toddler doesn't pull a dresser onto themselves. Home safety installs across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale.",
    includes: [
      "Smoke detector install (hardwired or battery)",
      "Carbon monoxide detector install",
      "Childproof cabinet locks",
      "Stair gates and pet gates",
      "Outlet covers and cord management",
      "Furniture anti-tip anchors",
      "Window stops and locks",
      "Bathroom safety (grab bars, non-slip)",
    ],
    faqs: [
      {
        q: "How many smoke detectors does my home need?",
        a: "BC code requires one inside every bedroom, one outside each sleeping area, and one on every level including the basement. A typical 3-bedroom home needs 5 to 6 detectors.",
      },
      {
        q: "Can you install grab bars in the shower?",
        a: "Yes. Brody anchors grab bars properly into studs or with toggle anchors rated for the load. Bathroom safety is one of the highest-impact installs for aging-in-place clients.",
      },
      {
        q: "Are anti-tip anchors really necessary?",
        a: "Yes, especially for any furniture over 30 inches with a child in the home. Several preventable child deaths every year in Canada come from tipped furniture. Five-minute install, life-changing protection.",
      },
    ],
    icon: "Shield",
    hero: "/images/service-home-safety.webp",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}
