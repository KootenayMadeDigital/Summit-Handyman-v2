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
    description: "Repairs, finishes, and installs that make daily living easier.",
  },
  exterior: {
    name: "Exterior Upgrades",
    description: "Weather-facing repairs and maintenance before BC rain finds the weak spot.",
  },
  safety: {
    name: "Safety & Prevention",
    description: "Detectors, childproofing, grab bars, and prevention-focused installs done properly.",
  },
};

export const services: Service[] = [
  {
    slug: "general-repairs",
    name: "General Repairs",
    category: "interior",
    keywords: ["handyman repairs", "home repairs", "small jobs", "fix-it list", "punch list"],
    tagline: "The small fixes stop piling up.",
    shortDescription: "Bundle the faucet, door, cabinet, and punch-list fixes into one clean visit.",
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
        a: "Every job gets a free written estimate after Brody reviews your quote submission. The $150 minimum applies to cover tools, insurance, travel, and craftsmanship. Final pricing is quoted in writing before any work starts.",
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
    tagline: "Prep-first painting that looks clean later.",
    shortDescription: "Clean lines, protected floors, solid prep, and finishes that hold up.",
    longDescription:
      "Clean lines, no drips on the trim, no roller marks on the ceiling. Brody uses quality paints such as Benjamin Moore Regal or Sherwin-Williams Emerald when the scope calls for them, plus the prep work that makes the finish hold up: caulking, sanding, priming, and protected floors.",
    includes: [
      "Interior wall and ceiling painting",
      "Trim, baseboards, and doors",
      "Cabinet refinishing",
      "Accent walls and feature finishes",
      "Touch-ups and color matching",
      "Quality paint selection",
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
        a: "Submit your quote request with photos of the space and Brody will email a written estimate within 24 hours. The $150 minimum applies to the job.",
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
    tagline: "Patches that do not announce themselves later.",
    shortDescription: "Holes, cracks, texture, sanding, and paint-ready wall repairs.",
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
        a: "One-coat patches telegraph through paint. Layered compound, proper sanding, primer, and matched texture are what keep the repair from flashing later.",
      },
      {
        q: "Can you match my ceiling texture?",
        a: "Yes. Many older Lower Mainland homes have knockdown or stipple ceilings. Brody uses spray-on knockdown and sponge-stipple rolling to get the patch as close as the existing texture allows.",
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
    tagline: "Clean fixture swaps and smart installs.",
    shortDescription: "Lights, fans, dimmers, doorbells, and smart devices installed cleanly.",
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
        a: "Brody handles homeowner-allowed scope (fixture swaps, smart switches with neutral wires, ceiling fan installs into existing boxes). Anything that requires a permit or new wiring is referred to a licensed electrician.",
      },
      {
        q: "Do smart switches work with my existing wiring?",
        a: "Many modern smart switches need a neutral wire. Brody confirms your wiring before quoting. Older Lower Mainland homes sometimes need a small workaround, like a battery switch or hub.",
      },
      {
        q: "How is pricing handled?",
        a: "Every install gets a free written estimate after the quote review. The $150 minimum applies to the job.",
      },
    ],
    icon: "Zap",
    hero: "/images/service-electrical.webp",
  },
  {
    slug: "cabinets",
    name: "Cabinets",
    category: "interior",
    keywords: [
      "cabinet install",
      "cabinet repair",
      "cabinet refinishing",
      "cabinet hardware",
      "kitchen cabinets",
      "vanity install",
      "soft close hinges",
    ],
    tagline: "Doors aligned, hardware tight, drawers gliding.",
    shortDescription: "Hang, repair, realign, refinish. Cabinet doors, drawers, hinges, and pulls done right.",
    longDescription:
      "Hang new cabinets level and plumb. Realign sagging doors. Replace tired hinges with soft-close upgrades. Swap dated pulls and knobs across an entire kitchen in a single visit. Cabinet work for kitchens, bathrooms, mudrooms, and laundry across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Custom cabinet fabrication is referred out, but everything from supplied flat-pack kitchens to one-off door repairs is in scope.",
    includes: [
      "New cabinet hanging (supplied flat-pack or pre-built boxes)",
      "Door alignment and hinge replacement",
      "Drawer slide repair and upgrade",
      "Soft-close hinge and slide retrofits",
      "Hardware swaps (pulls, knobs, edge pulls)",
      "Toe-kick and filler-strip installation",
      "Vanity install for bathrooms and powder rooms",
      "Crown moulding and light-rail trim",
    ],
    faqs: [
      {
        q: "Do you build custom cabinets from scratch?",
        a: "No. Custom cabinet fabrication goes to a dedicated cabinet shop. Brody installs supplied cabinets (flat-pack or pre-built boxes from IKEA, Home Depot, local cabinet shops, etc.) and handles all repair, hardware, and refinish work on existing cabinets.",
      },
      {
        q: "Can you fix cabinet doors that won't close evenly?",
        a: "Yes. Door alignment is one of the most common cabinet calls. Brody adjusts the hinges, replaces failed ones, and shims where needed so every door sits flush and closes cleanly.",
      },
      {
        q: "Will soft-close hinges work on my older cabinets?",
        a: "In most cases yes. Brody confirms the hinge cup size and overlay style first, then swaps in matching soft-close hinges. Older European cabinets sometimes need an adapter plate, which Brody supplies.",
      },
    ],
    icon: "Package",
    hero: "/images/service-assembly-mounting.webp",
  },
  {
    slug: "countertops",
    name: "Countertops",
    category: "interior",
    keywords: [
      "countertop install",
      "butcher block install",
      "laminate countertop",
      "prefab quartz install",
      "kitchen countertop",
      "bathroom vanity top",
    ],
    tagline: "Surfaces that sit flat, seal clean, and stay put.",
    shortDescription: "Install supplied countertops, seal seams, secure properly. Laminate, butcher block, prefab quartz.",
    longDescription:
      "Install supplied countertop slabs, level them, secure them to cabinet boxes, and finish the seams clean. Laminate, butcher block, prefab quartz, and IKEA tops are the regular menu. Custom stone slab fabrication and template work goes to a dedicated counter shop, but if your countertop is on the truck, Brody can usually get it installed. Countertop service across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale.",
    includes: [
      "Laminate countertop install",
      "Butcher block install, oil, and seal",
      "Prefab quartz and IKEA countertop install",
      "Bathroom vanity top install",
      "Sink and faucet hole drilling (where allowed)",
      "Edge banding and end-cap finishing",
      "Caulking and seam treatment at backsplash and walls",
      "Removal and disposal of old countertop",
    ],
    faqs: [
      {
        q: "Do you fabricate stone or quartz countertops?",
        a: "No. Custom stone fabrication, templating, and edge profiling goes to a dedicated counter shop with the right CNC and polishing tools. Brody installs prefab quartz, butcher block, laminate, and supplied slabs ready for drop-in.",
      },
      {
        q: "Can you cut a hole for an undermount sink?",
        a: "On laminate, butcher block, or prefab quartz that allows field cutting, yes. For solid stone slabs, the cut-out is done at the fabrication shop before delivery. Brody confirms the slab type before quoting.",
      },
      {
        q: "Will you remove and dispose of the old countertop?",
        a: "Yes. Removal, disconnect of plumbing fixtures, and disposal can all be included in the quote. Mention the old material in the form so the right disposal route is priced in.",
      },
    ],
    icon: "Hammer",
    hero: "/images/service-general-repairs.webp",
  },
  {
    slug: "backsplashes",
    name: "Backsplashes",
    category: "interior",
    keywords: [
      "backsplash install",
      "kitchen backsplash",
      "subway tile backsplash",
      "mosaic backsplash",
      "tile specialist",
      "bathroom backsplash",
      "stone backsplash",
    ],
    tagline: "Brody's specialty. Lines so tight they look poured.",
    shortDescription: "Brody's specialty. Subway, mosaic, large-format, herringbone, stone. Crisp grout and tight cuts.",
    longDescription:
      "Backsplashes are where Brody does his best work. The cuts around outlets stay crisp. The grout lines stay consistent. The miters at inside corners actually meet. Subway, mosaic, picket, herringbone, hexagon, large-format, marble, stone, and pencil-tile accents are all in regular rotation. Kitchen and bathroom backsplash installation across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale, with the kind of finish quality that only happens when the same set of hands prepares the wall, lays out the pattern, and finishes the grout.",
    includes: [
      "Kitchen backsplash installation (full wall and partial)",
      "Bathroom vanity backsplash and accent walls",
      "Subway, mosaic, herringbone, picket, and large-format tile",
      "Marble, travertine, and natural stone backsplashes",
      "Outlet and switch cut-outs kept crisp",
      "Inside-corner miters and edge-profile finishing",
      "Schluter trim, bullnose, or pencil-tile edging",
      "Grout colour matching, sealing, and final detail caulk",
    ],
    faqs: [
      {
        q: "Why is the backsplash a separate service from tile and flooring?",
        a: "Because Brody treats it as his craft. Backsplashes live at eye level, in the most photographed room in the house, and small mistakes show forever. Pulling backsplashes into their own service signals that they get the prep time, layout time, and finishing detail they deserve.",
      },
      {
        q: "Do you supply the tile or do I buy it?",
        a: "Either works. Most homeowners pick out the tile they want at Tileland, Bedrosians, Home Depot, or a specialty shop, then Brody installs. If you want help choosing tile that will install cleanly given the wall layout, send photos through the quote form and Brody can suggest options before you order.",
      },
      {
        q: "How long does a typical kitchen backsplash take?",
        a: "Most kitchen backsplashes take a couple of working days: one to lay the tile, one for grout and detail caulking once the thinset has set. More complex patterns like herringbone, large-format stone, or full-height accent walls take longer. Every quote includes a working timeline before booking.",
      },
      {
        q: "Will you handle outlet covers and electrical work?",
        a: "Brody removes outlet covers, sets boxes flush, installs spacer rings if the tile changes the depth, and reinstalls covers. Anything beyond that (relocating outlets, adding new circuits) is referred to a licensed electrician.",
      },
    ],
    icon: "Square",
    hero: "/images/service-tile-flooring.webp",
  },
  {
    slug: "tile-flooring",
    name: "Tile & Flooring",
    category: "interior",
    keywords: ["tile install", "bathroom tile", "shower tile", "laminate flooring", "vinyl plank", "hardwood install"],
    tagline: "Square lines, tight transitions, clean finish.",
    shortDescription: "Bathroom tile, plank flooring, grout, transitions, and finishing trim.",
    longDescription:
      "Bathroom floors, shower tile, laminate planks, and engineered hardwood. Subfloor checked, underlayment laid right, lines kept square, grout finished clean. Tile and flooring installations across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale, from full bathroom tile jobs to luxury vinyl plank flooring throughout entire homes. (Kitchen backsplashes have their own dedicated service.)",
    includes: [
      "Bathroom floor and shower tile",
      "Laminate and vinyl plank flooring",
      "Engineered hardwood install",
      "Tile and grout repair",
      "Transition strips and trim",
      "Subfloor inspection and prep",
      "Grout sealing",
      "Edge profiles and Schluter trim",
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
        a: "Major brands like Mohawk, Shaw, Pergo, and Vidaplank are usually workable. Bring your own materials or Brody can pick them up at cost plus handling.",
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
    tagline: "Mounted level. Anchored properly.",
    shortDescription: "TVs, shelves, mirrors, closet systems, and flat-pack furniture secured right.",
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
    tagline: "Moss and grime removed without wrecking the surface.",
    shortDescription: "Driveways, decks, siding, fences, patios, and soft-wash work.",
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
        a: "With the right approach, no. Brody uses a soft-wash technique on vinyl, fiber-cement, and stucco at the correct PSI and distance. Aggressive direct-blast washing is the wrong approach for many home exteriors.",
      },
      {
        q: "How often should I pressure wash my driveway?",
        a: "Lower Mainland driveways often benefit from an annual wash, typically before sealing in spring or after fall leaf drop. Moss-heavy properties may need more frequent attention.",
      },
      {
        q: "How is pricing handled?",
        a: "Submit a few photos and the rough scope through the quote form. Brody emails a written estimate within 24 hours. The $150 minimum applies to the job.",
      },
    ],
    icon: "Droplets",
    hero: "/images/service-pressure-washing.webp",
  },
  {
    slug: "fence-deck",
    name: "Fence & Deck",
    category: "exterior",
    keywords: ["deck staining", "fence repair", "deck refinish", "fence staining", "deck board replace"],
    tagline: "Outdoor wood ready for another season.",
    shortDescription: "Deck boards, fence panels, gates, stain, sealant, and hardware repairs.",
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
        a: "Premium semi-transparent stain usually lasts a few years on Lower Mainland decks. South or west-facing decks can fade faster due to UV exposure.",
      },
    ],
    icon: "Fence",
    hero: "/images/service-fence-deck.webp",
  },
  {
    slug: "home-safety",
    name: "Home Safety Solutions",
    category: "safety",
    keywords: ["smoke detector install", "CO detector install", "childproofing", "home safety", "anti-tip anchor"],
    tagline: "Safety installs that actually hold.",
    shortDescription: "Detectors, grab bars, gates, anti-tip anchors, locks, and home-safety details.",
    longDescription:
      "Smoke and carbon monoxide detectors installed and tested to BC code. Childproofing including cabinet locks, outlet covers, and gates installed properly so they actually hold. Furniture anti-tip anchors for dressers, bookshelves, and other tall pieces that need to stay put. Home safety installs across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale.",
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
        a: "Yes, especially for tall furniture in a home with children. Anti-tip anchoring is a small install that can prevent a serious hazard.",
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
