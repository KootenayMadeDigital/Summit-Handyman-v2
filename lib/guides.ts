export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  area?: string;
  service?: string;
  date: string; // YYYY-MM-DD
  readingMinutes: number;
  hero: string;
  /**
   * Body sections. each block becomes a page section. Keeps content portable
   * and avoids MDX setup. Move to MDX in a future iteration if needed.
   */
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "callout"; title: string; text: string }
    | { type: "pricing"; rows: Array<{ label: string; value: string }> }
  >;
};

export const guides: Guide[] = [
  {
    slug: "drywall-repair-cost-langley-2026",
    title: "How Much Does Drywall Repair Cost in Langley? (2026 Guide)",
    excerpt:
      "What you should expect to pay for drywall patches, holes, ceiling repair, and full skim coats in Langley and the Lower Mainland. with real 2026 numbers.",
    area: "Langley",
    service: "drywall-repair",
    date: "2026-02-01",
    readingMinutes: 6,
    hero: "/images/project-1.webp",
    body: [
      {
        type: "p",
        text: "If you've Googled 'drywall repair cost in Langley' you've probably seen wildly different numbers. The truth is the cost depends on a few specific things. and most homeowners overpay because they don't know what to ask. Here's the straightforward breakdown.",
      },
      { type: "h2", text: "What drives drywall repair cost in 2026" },
      {
        type: "ul",
        items: [
          "The size and number of holes (1 small patch vs 8 anchor holes)",
          "Whether the texture needs matching (knockdown is harder than smooth)",
          "Ceiling vs wall (ceilings are slower and harder)",
          "Access and prep (move furniture, dust control, paint after?)",
          "Number of coats (a fast 1-coat patch will telegraph through paint. always)",
        ],
      },
      { type: "h2", text: "Typical 2026 prices in the Lower Mainland" },
      {
        type: "pricing",
        rows: [
          { label: "Small patch (under 4\")", value: "$150–$220" },
          { label: "Medium patch (4–12\")", value: "$220–$380" },
          { label: "Large hole (12\"+)", value: "$380–$650" },
          { label: "Ceiling crack repair (per 6 ft)", value: "$220–$420" },
          { label: "Skim-coat textured ceiling (10×12 room)", value: "$650–$1,200" },
          { label: "Full water-damage replacement", value: "Quote required" },
        ],
      },
      {
        type: "callout",
        title: "Summit Handyman: $150 minimum per job",
        text: "If you only need a single small patch, expect the $150 minimum to apply. If you have a list of small things, bundle them. same trip, same minimum, more value.",
      },
      { type: "h2", text: "Why one-coat patches always come back" },
      {
        type: "p",
        text: "A common mistake. including some handymen. is using one coat of mud, sanding, and painting. The patch will look fine for 2–4 weeks. Then humidity changes, the wood frame moves slightly, and a halo appears around the patch. That halo is permanent until you re-do it. Three coats, sanded between each, is the only way.",
      },
      { type: "h2", text: "Texture matching: the make-or-break detail" },
      {
        type: "p",
        text: "Most older Langley homes have knockdown or stipple ceilings. Matching this texture is more art than science. Brody uses spray-on knockdown for ceilings and a sponge-stipple roller for walls. done right, you can't see the patch. Done wrong, you'll always see it.",
      },
      { type: "h2", text: "How to get an accurate quote" },
      {
        type: "ul",
        items: [
          "Take 2–3 photos with a ruler or phone for scale",
          "Email them to brody@summit-handyman.ca with a brief description",
          "Mention if paint matching is needed",
          "Mention any time pressure (selling, tenant turnover, etc.)",
        ],
      },
    ],
  },
  {
    slug: "diy-vs-handyman-lower-mainland",
    title: "When to DIY vs Hire a Handyman: A Lower Mainland Homeowner's Guide",
    excerpt:
      "Eight common home repairs and a clear-eyed take on which ones are worth tackling yourself, and which usually cost more if you DIY.",
    date: "2026-02-08",
    readingMinutes: 7,
    hero: "/images/project-2.webp",
    body: [
      {
        type: "p",
        text: "BC has plenty of DIYers. That's part of the culture. But there are jobs where 'I'll just do it myself' costs more than hiring a pro. once you count the second trip to Home Depot, the wrong size of fittings, and the paint touch-up the next weekend.",
      },
      { type: "h2", text: "Worth DIYing" },
      {
        type: "ul",
        items: [
          "Hanging picture frames into drywall (with proper anchors)",
          "Replacing standard outlet covers and switch plates",
          "Caulking around tubs and showers",
          "Cleaning gutters from a stable ladder (one storey)",
          "Replacing weather stripping on doors",
        ],
      },
      { type: "h2", text: "Hire it out" },
      {
        type: "ul",
        items: [
          "Drywall patches that need texture matching. the look will give it away",
          "TV mounting (heavy, awkward, easy to drop or miss the studs)",
          "Tile repair where matching grout matters",
          "Anything involving subfloor repair",
          "Electrical beyond simple swap-outs (smart switches with neutral wires, etc.)",
          "Anything on a ladder above 8 feet",
        ],
      },
      {
        type: "callout",
        title: "Rule of thumb",
        text: "If a mistake will be visible from across the room, hire it out. If a mistake just costs you another $20 and an hour, DIY is fine.",
      },
      { type: "h2", text: "The hidden cost of DIY" },
      {
        type: "p",
        text: "The real cost of DIY isn't the materials. it's the time and the do-overs. A weekend spent painting one room (with fixing drips and roller marks) can become two weekends. A handyman who does it daily moves ~3x faster and finishes cleaner. For one wall, DIY makes sense. For a whole room? Usually not worth it.",
      },
    ],
  },
  {
    slug: "pre-winter-checklist-surrey-white-rock",
    title: "Pre-Winter Home Checklist for Surrey & White Rock Homes",
    excerpt:
      "The Pacific Northwest fall arrives fast. Run through this checklist in October to avoid the most common winter damage in Surrey, White Rock, and South Surrey homes.",
    area: "Surrey",
    date: "2026-02-15",
    readingMinutes: 5,
    hero: "/images/project-4.webp",
    body: [
      {
        type: "p",
        text: "If you've been in Surrey or White Rock for a few winters, you know the drill. Atmospheric rivers, freezing rain weeks, and that one cold snap that can crack a hose bib. This checklist hits the highest-leverage items.",
      },
      { type: "h2", text: "Outside the house" },
      {
        type: "ul",
        items: [
          "Clear gutters and check downspouts route water 1m+ from foundation",
          "Disconnect garden hoses and shut off exterior taps from inside",
          "Check window and door weather stripping (replace if compressed)",
          "Trim branches that overhang the roof",
          "Drain and store outdoor furniture cushions",
          "Re-seal driveway cracks before they freeze and widen",
        ],
      },
      { type: "h2", text: "Inside the house" },
      {
        type: "ul",
        items: [
          "Test smoke and CO detectors (replace batteries)",
          "Reverse ceiling fan direction (clockwise pushes warm air down)",
          "Check attic insulation depth (R-50 minimum for BC code)",
          "Inspect window caulking from inside (look for daylight gaps)",
          "Replace furnace filter",
        ],
      },
      {
        type: "callout",
        title: "White Rock specific",
        text: "If you're on the bluff or near the beach, salt air degrades exterior caulk and seals 2–3x faster. Add an extra inspection in spring.",
      },
    ],
  },
  {
    slug: "strata-property-management-repairs",
    title: "Strata-Friendly Repairs: What Property Managers Need to Know",
    excerpt:
      "How Summit Handyman works with property managers across the Lower Mainland. turnovers, tenant requests, emergency repairs, and detailed invoicing.",
    date: "2026-02-22",
    readingMinutes: 5,
    hero: "/images/project-5.webp",
    body: [
      {
        type: "p",
        text: "Property managers don't have time to chase contractors who don't pick up the phone. This is the gap Summit Handyman was built to fill. owner-operated, email-first, and detailed enough that strata accounting doesn't have to chase you for a breakdown.",
      },
      { type: "h2", text: "What I handle for property managers" },
      {
        type: "ul",
        items: [
          "Tenant turnover punch-lists (paint, repairs, hardware swaps)",
          "Tenant-reported issues (faucets, doors, drywall, fixtures)",
          "Emergency mobilization for water damage drying-out & temporary repairs",
          "Common-area minor repairs",
          "Detailed itemized invoicing with photos before/after",
          "Dedicated email thread per property if preferred",
        ],
      },
      { type: "h2", text: "How invoicing works" },
      {
        type: "p",
        text: "Every job comes with a clear, itemized invoice. labor, materials, GST broken out. If you need photo documentation for the strata council or owner, just say the word. I include before/after shots on every job by default.",
      },
      {
        type: "callout",
        title: "Have a portfolio of properties?",
        text: "Email Brody at brody@summit-handyman.ca to set up a recurring relationship. Standing rates and dispatch process available for property managers with 5+ units.",
      },
    ],
  },
  {
    slug: "painting-room-cost-abbotsford",
    title: "Painting a Room in Abbotsford: Costs, Timing & What to Expect",
    excerpt:
      "What it actually costs to paint a room properly in Abbotsford in 2026, including ceilings, trim, and the prep work most quotes skip.",
    area: "Abbotsford",
    service: "painting",
    date: "2026-03-01",
    readingMinutes: 6,
    hero: "/images/project-2.webp",
    body: [
      {
        type: "p",
        text: "A 'cheap paint job' usually shows it within six months. drips, rolls, ceilings cut sloppy, trim with brush marks. The difference is almost entirely in the prep. Here's what a real job looks like in 2026, and what it costs.",
      },
      { type: "h2", text: "What a proper paint job includes" },
      {
        type: "ul",
        items: [
          "Furniture moved or covered, floors fully protected",
          "Caulk gaps in baseboards, trim, and corners",
          "Fill nail holes, sand smooth",
          "Prime over patches and stains",
          "Cut in trim, ceilings, and corners by hand",
          "Two coats of premium paint (Benjamin Moore Regal or Sherwin-Williams Emerald)",
          "Light cleanup and touch-ups before leaving",
        ],
      },
      { type: "h2", text: "Typical 2026 prices, Abbotsford" },
      {
        type: "pricing",
        rows: [
          { label: "Small bedroom (10×10)", value: "$420–$680" },
          { label: "Medium room (12×14)", value: "$650–$950" },
          { label: "Living room with vaulted ceiling", value: "$1,100–$2,200" },
          { label: "Trim only (per 100 ft)", value: "$280–$420" },
          { label: "Ceiling only (per 100 sq ft)", value: "$220–$340" },
        ],
      },
      {
        type: "callout",
        title: "What 'cheap paint' really costs",
        text: "Builder-grade paint covers in 2 coats less reliably and yellows faster. Premium paint costs ~$30 more per gallon and lasts 2–3x longer before needing a refresh.",
      },
    ],
  },
  {
    slug: "small-repairs-that-save-thousands",
    title: "5 Small Repairs That Save You Thousands Later",
    excerpt:
      "The minor home repairs that, if ignored, turn into expensive damage. Here's the short list every homeowner should know about.",
    date: "2026-03-08",
    readingMinutes: 5,
    hero: "/images/project-3.webp",
    body: [
      { type: "h2", text: "1. Caulk around tubs, showers, and sinks" },
      {
        type: "p",
        text: "Cost to fix: ~$150. Cost if ignored: $5,000+ in subfloor and drywall replacement when the seal fails and water gets behind the tile.",
      },
      { type: "h2", text: "2. Faucet drips" },
      {
        type: "p",
        text: "Cost to fix: ~$150–$220 (cartridge replacement). Cost if ignored: warped vanity, mineral staining, occasionally a leak that floods overnight.",
      },
      { type: "h2", text: "3. Gutter blockages" },
      {
        type: "p",
        text: "Cost to fix: ~$220–$380 for a typical Lower Mainland home. Cost if ignored: foundation water damage, rotten fascia boards, ice dams in winter.",
      },
      { type: "h2", text: "4. Loose toilet base" },
      {
        type: "p",
        text: "Cost to fix: ~$180–$250 (new wax ring, re-seat). Cost if ignored: rotted subfloor under the toilet, often only discovered when it caves through to the ceiling below.",
      },
      { type: "h2", text: "5. Cracked driveway sealing" },
      {
        type: "p",
        text: "Cost to fix: ~$280–$450 for a small driveway. Cost if ignored: water freezes in cracks, expands them every winter, eventually requires repaving ($4,000–$8,000+).",
      },
      {
        type: "callout",
        title: "Bundle the small stuff",
        text: "If you have 2–3 of these on the list, bundle them into one Summit Handyman visit. Same minimum, multiple jobs handled.",
      },
    ],
  },
  {
    slug: "smart-home-setup-bc",
    title: "Smart Home Setup for BC Homes: Detectors, Locks & Lighting",
    excerpt:
      "What's actually worth installing in 2026. and what to skip. Practical recommendations from real installs across the Lower Mainland.",
    service: "electrical",
    date: "2026-03-15",
    readingMinutes: 6,
    hero: "/images/project-4.webp",
    body: [
      { type: "h2", text: "Worth installing" },
      {
        type: "ul",
        items: [
          "Hardwired smoke + CO detectors (interlinked, code-compliant)",
          "Smart thermostat (Ecobee or Nest. 10–15% energy savings)",
          "Smart deadbolt (Schlage Encode, Yale Assure). lets you give one-time codes",
          "Doorbell camera (Ring, Nest). for package + visitor monitoring",
          "Smart light switches at high-traffic locations (entry, hallway, kitchen)",
        ],
      },
      { type: "h2", text: "Skip or wait" },
      {
        type: "ul",
        items: [
          "Smart bulbs in every fixture. overcomplicated, expensive at scale",
          "Smart blinds. most still feel beta; wait another year",
          "Voice-controlled everything. battery-powered ones drain fast",
          "Cheap no-name brand smart switches. they break in 18 months",
        ],
      },
      {
        type: "callout",
        title: "Permitting note",
        text: "Most smart device swaps stay within homeowner-allowed scope (replacing existing fixtures with same-power fixtures). Anything new beyond that goes to a licensed electrician. Brody refers out when needed.",
      },
    ],
  },
  {
    slug: "spring-deck-refinishing-pacific-northwest",
    title: "Spring Deck Refinishing: Pacific Northwest Edition",
    excerpt:
      "How to bring a Lower Mainland deck back to life after a wet winter. what to expect, what it costs, and how to time the work for BC weather.",
    service: "fence-deck",
    date: "2026-03-22",
    readingMinutes: 6,
    hero: "/images/project-3.webp",
    body: [
      {
        type: "p",
        text: "Spring is the only sane time to refinish a deck in BC. Late April to early June is the sweet spot. dry enough to stain, warm enough to cure, and far enough from summer that it'll be ready for the first BBQ.",
      },
      { type: "h2", text: "What deck refinishing involves" },
      {
        type: "ul",
        items: [
          "Pressure wash to strip mildew and old finish",
          "Sand rough boards (especially railings. splinters)",
          "Replace any rotten boards before staining (don't paint over them. it never lasts)",
          "Two coats of premium semi-transparent stain (Sansin, Behr Premium)",
          "Allow 24hr cure between coats and 48hr before furniture",
        ],
      },
      { type: "h2", text: "Typical 2026 cost" },
      {
        type: "pricing",
        rows: [
          { label: "Small deck (8×12, refinish only)", value: "$650–$950" },
          { label: "Medium deck (12×16, refinish + minor board replace)", value: "$950–$1,800" },
          { label: "Full deck rebuild", value: "Quote required (varies by size)" },
        ],
      },
      {
        type: "callout",
        title: "Pacific Northwest tip",
        text: "If your deck faces south or west, choose a UV-resistant stain. The summer sun on a Surrey or White Rock deck will fade a regular semi-transparent in 18 months.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
