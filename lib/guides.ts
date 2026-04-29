/**
 * Cost guides / educational content.
 *
 * RULE: NEVER fabricate prices. The only confirmed price on this site is
 * the $150 minimum charge per job. Every other price is by quote.
 * Educational guides explain WHAT DRIVES cost (size, scope, prep, access,
 * texture, materials) without quoting fake dollar amounts. Direct readers
 * to the quote form for an actual written estimate.
 */

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  area?: string;
  service?: string;
  date: string;
  readingMinutes: number;
  hero: string;
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "callout"; title: string; text: string }
  >;
};

export const guides: Guide[] = [
  {
    slug: "what-drives-drywall-repair-cost-langley",
    title: "What Drives Drywall Repair Cost in Langley & the Lower Mainland",
    excerpt:
      "The variables that determine drywall repair pricing: size, texture matching, ceiling vs wall, prep, and number of coats. Plus how to get an accurate written estimate.",
    area: "Langley",
    service: "drywall-repair",
    date: "2026-02-01",
    readingMinutes: 5,
    hero: "/images/guide-drywall.webp",
    body: [
      {
        type: "p",
        text: "If you've Googled drywall repair cost in Langley you've seen wildly different answers. Pricing depends on a handful of specific variables, and the only honest way to get a real number is a written estimate after someone has seen photos. This guide explains what actually drives the cost so you can scope the conversation.",
      },
      { type: "h2", text: "What drives drywall repair cost" },
      {
        type: "ul",
        items: [
          "Size and number of patches (one small hole vs eight anchor holes)",
          "Whether the texture needs matching (knockdown is harder than smooth)",
          "Ceiling vs wall (ceilings are slower and harder)",
          "Access and prep (move furniture, dust control, paint after?)",
          "Number of coats (a fast one-coat patch will telegraph through paint, always)",
          "Whether paint matching is needed after the repair",
          "Time pressure (rush jobs versus a relaxed schedule)",
        ],
      },
      {
        type: "callout",
        title: "Summit Handyman: $150 minimum per job",
        text: "Every visit has a $150 minimum charge to cover tools, insurance, travel, and craftsmanship. Bundle multiple small repairs into one visit and the minimum covers them all. Final pricing for any job is always quoted in writing before work begins.",
      },
      { type: "h2", text: "Why one-coat patches always come back" },
      {
        type: "p",
        text: "A common shortcut, including by some handymen, is one coat of mud, sand, paint. The patch will look fine for a few weeks. Then humidity changes, the framing shifts slightly, and a halo appears around the patch. That halo is permanent until you redo it. Three coats, sanded between each, primed, then painted, is the only way the repair stays invisible.",
      },
      { type: "h2", text: "Texture matching: the make-or-break detail" },
      {
        type: "p",
        text: "Most older Langley homes have knockdown or stipple ceilings. Matching this texture is more art than science. Brody uses spray-on knockdown for ceilings and a sponge-stipple roller for walls. Done right, you can't see the patch. Done wrong, you'll always see it.",
      },
      { type: "h2", text: "How to get an accurate quote" },
      {
        type: "ul",
        items: [
          "Take a few photos with a ruler or phone for scale",
          "Submit through the quote form at summit-handyman.ca/quote",
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
      "Common home repairs and a clear-eyed take on which ones are worth tackling yourself, and which usually cost more in time and rework if you DIY.",
    date: "2026-02-08",
    readingMinutes: 6,
    hero: "/images/guide-diy-vs-handyman.webp",
    body: [
      {
        type: "p",
        text: "BC has plenty of DIYers. That's part of the culture. But there are jobs where 'I'll just do it myself' costs more in time, second trips to Home Depot, wrong fittings, and the touch-up the next weekend. Here's how to decide.",
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
          "Drywall patches that need texture matching, the look will give it away",
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
        text: "If a mistake will be visible from across the room, hire it out. If a mistake just costs a small amount of materials and an hour, DIY is fine.",
      },
      { type: "h2", text: "The hidden cost of DIY" },
      {
        type: "p",
        text: "The real cost of DIY isn't the materials, it's the time and the do-overs. A weekend spent painting one room, with fixing drips and roller marks, can become two weekends. A handyman who does it daily moves much faster and finishes cleaner. For one wall, DIY makes sense. For a whole room, usually not worth it.",
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
    hero: "/images/guide-gutters.webp",
    body: [
      {
        type: "p",
        text: "If you've been in Surrey or White Rock for a few winters, you know the drill. Atmospheric rivers, freezing rain weeks, and the cold snap that can crack a hose bib. This checklist hits the highest-leverage items.",
      },
      { type: "h2", text: "Outside the house" },
      {
        type: "ul",
        items: [
          "Clear gutters and check downspouts route water at least 1m from foundation",
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
        text: "If you're on the bluff or near the beach, salt air degrades exterior caulk and seals faster. Add an extra inspection in spring.",
      },
    ],
  },
  {
    slug: "strata-property-management-repairs",
    title: "Strata-Friendly Repairs: What Property Managers Need to Know",
    excerpt:
      "How Summit Handyman works with property managers across the Lower Mainland on turnovers, tenant requests, emergency repairs, and detailed invoicing.",
    date: "2026-02-22",
    readingMinutes: 5,
    hero: "/images/guide-strata-property-management.webp",
    body: [
      {
        type: "p",
        text: "Property managers don't have time to chase contractors who don't pick up the phone. This is the gap Summit Handyman was built to fill: owner-operated, email-first, and detailed enough that strata accounting doesn't have to chase you for a breakdown.",
      },
      { type: "h2", text: "What Brody handles for property managers" },
      {
        type: "ul",
        items: [
          "Tenant turnover punch-lists (paint, repairs, hardware swaps)",
          "Tenant-reported issues (faucets, doors, drywall, fixtures)",
          "Emergency mobilization for water damage drying-out and temporary repairs",
          "Common-area minor repairs",
          "Detailed itemized invoicing with photos before/after",
          "Dedicated email thread per property if preferred",
        ],
      },
      { type: "h2", text: "How invoicing works" },
      {
        type: "p",
        text: "Every job comes with a clear, itemized invoice with labor, materials, and GST broken out. If you need photo documentation for the strata council or owner, just say the word. Before/after shots are included on every job by default.",
      },
      {
        type: "callout",
        title: "Have a portfolio of properties?",
        text: "Email Brody at brody@summit-handyman.ca to set up a recurring relationship. Standing rates and a dispatch process are available for property managers with 5+ units.",
      },
    ],
  },
  {
    slug: "what-makes-a-paint-job-last-abbotsford",
    title: "What Makes a Paint Job Actually Last in Abbotsford",
    excerpt:
      "What separates a paint job that holds up for years from one that shows it within six months. Prep, paint quality, and the steps most quotes skip.",
    area: "Abbotsford",
    service: "painting",
    date: "2026-03-01",
    readingMinutes: 5,
    hero: "/images/guide-painting.webp",
    body: [
      {
        type: "p",
        text: "A 'cheap paint job' usually shows it within six months: drips, roller marks on the ceiling, ceilings cut sloppy, trim with brush marks. The difference between a paint job that lasts and one that doesn't is almost entirely in the prep. Here's what a real job involves.",
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
      { type: "h2", text: "What drives the cost" },
      {
        type: "ul",
        items: [
          "Square footage of walls, ceilings, and trim",
          "Whether ceilings are included (cutting in is slow work)",
          "Number of colors and accent walls",
          "Condition of existing surfaces (filling, sanding, priming time)",
          "Vaulted ceilings, stairwells, or cathedral spaces (ladder time)",
          "Whether you supply paint or Brody picks it up",
        ],
      },
      {
        type: "callout",
        title: "How to get an accurate paint quote",
        text: "Submit photos of every room you want painted, plus rough dimensions, through the quote form. Brody emails a written estimate within 24 hours. The $150 minimum applies to every visit.",
      },
      {
        type: "callout",
        title: "Why builder-grade paint costs more in the long run",
        text: "Builder-grade paint covers in two coats less reliably and yellows faster. Premium paint costs more per gallon up front but lasts much longer before needing a refresh, so the total cost over a decade is lower.",
      },
    ],
  },
  {
    slug: "small-repairs-that-save-thousands",
    title: "5 Small Repairs That Save You Thousands Later",
    excerpt:
      "The minor home repairs that, if ignored, turn into expensive damage. Here's the short list every Lower Mainland homeowner should know about.",
    date: "2026-03-08",
    readingMinutes: 5,
    hero: "/images/guide-small-repairs.webp",
    body: [
      {
        type: "p",
        text: "These are the repairs that look minor but become expensive if you wait. None of them require a major intervention. All of them get worse, sometimes dramatically, when ignored.",
      },
      { type: "h2", text: "1. Caulk around tubs, showers, and sinks" },
      {
        type: "p",
        text: "When the seal fails, water gets behind the tile. The visible problem is mold. The invisible problem is rotting subfloor and drywall, which is a vastly larger repair to undo. Recaulking is one of the easiest preventative jobs.",
      },
      { type: "h2", text: "2. Faucet drips" },
      {
        type: "p",
        text: "A constant drip is usually a worn cartridge, a quick fix. Left alone, the drip warps the vanity, mineral-stains the basin, and occasionally turns into an overnight flood when the supply line finally fails.",
      },
      { type: "h2", text: "3. Gutter blockages" },
      {
        type: "p",
        text: "Lower Mainland rain doesn't forgive blocked gutters. Water pools at the foundation, soaks into fascia, and freezes into ice dams in winter. An annual cleaning prevents foundation water damage that costs many multiples more.",
      },
      { type: "h2", text: "4. Loose toilet base" },
      {
        type: "p",
        text: "A wobbling toilet means the wax ring is shot. Water seeps out at the base every flush. The subfloor under the toilet rots, and the problem is usually only discovered when it caves through to the ceiling below.",
      },
      { type: "h2", text: "5. Cracked driveway sealing" },
      {
        type: "p",
        text: "Water freezes in cracks, expands, widens them every winter. After a few cycles, the driveway needs full repaving instead of crack-fill and seal. Sealing every few years is the difference between a maintenance job and a repaving job.",
      },
      {
        type: "callout",
        title: "Bundle the small stuff",
        text: "If you have two or three of these on the list, bundle them into one Summit Handyman visit. Same $150 minimum, multiple jobs handled. Submit photos through the quote form for a written estimate within 24 hours.",
      },
    ],
  },
  {
    slug: "smart-home-setup-bc",
    title: "Smart Home Setup for BC Homes: Detectors, Locks & Lighting",
    excerpt:
      "What's actually worth installing and what to skip. Practical recommendations from real installs across the Lower Mainland.",
    service: "electrical",
    date: "2026-03-15",
    readingMinutes: 6,
    hero: "/images/guide-smart-home.webp",
    body: [
      { type: "h2", text: "Worth installing" },
      {
        type: "ul",
        items: [
          "Hardwired smoke and CO detectors (interlinked, code-compliant)",
          "Smart thermostat (Ecobee or Nest, real energy savings)",
          "Smart deadbolt (Schlage Encode, Yale Assure), lets you give one-time codes",
          "Doorbell camera (Ring, Nest), for package and visitor monitoring",
          "Smart light switches at high-traffic locations (entry, hallway, kitchen)",
        ],
      },
      { type: "h2", text: "Skip or wait" },
      {
        type: "ul",
        items: [
          "Smart bulbs in every fixture, overcomplicated and expensive at scale",
          "Smart blinds, most still feel beta, wait another year",
          "Voice-controlled everything, battery-powered ones drain fast",
          "Cheap no-name brand smart switches, they break early",
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
      "How to bring a Lower Mainland deck back to life after a wet winter. What's involved, how to time the work for BC weather, and what drives the price.",
    service: "fence-deck",
    date: "2026-03-22",
    readingMinutes: 6,
    hero: "/images/guide-deck.webp",
    body: [
      {
        type: "p",
        text: "Spring is the only sane time to refinish a deck in BC. Late April to early June is the sweet spot: dry enough to stain, warm enough to cure, and far enough from summer that it'll be ready for the first BBQ.",
      },
      { type: "h2", text: "What deck refinishing involves" },
      {
        type: "ul",
        items: [
          "Pressure wash to strip mildew and old finish",
          "Sand rough boards (especially railings, splinters)",
          "Replace any rotten boards before staining (don't paint over them, it never lasts)",
          "Two coats of premium semi-transparent stain (Sansin, Behr Premium)",
          "Allow proper cure between coats and before furniture goes back",
        ],
      },
      { type: "h2", text: "What drives the price" },
      {
        type: "ul",
        items: [
          "Deck size (square footage of boards plus railings)",
          "Number of rotten boards needing replacement",
          "Condition of existing finish (full strip vs light prep)",
          "Stain choice (premium semi-transparent costs more, lasts much longer)",
          "Access (ground-level vs raised second-storey)",
        ],
      },
      {
        type: "callout",
        title: "How to get an accurate deck quote",
        text: "Send photos of every angle of the deck through the quote form, plus rough dimensions and any visible damage. Brody emails a written estimate within 24 hours. The $150 minimum applies to every visit.",
      },
      {
        type: "callout",
        title: "Pacific Northwest tip",
        text: "If your deck faces south or west, choose a UV-resistant stain. The summer sun on a Surrey or White Rock deck will fade a regular semi-transparent quickly.",
      },
    ],
  },

  // ===========================================================================
  // NEW GUIDES BELOW. Each one targets a specific buyer mindset and converts
  // by helping them make a confident decision.
  // ===========================================================================

  {
    slug: "red-flags-handyman-quote",
    title: "Red Flags to Watch For in a Handyman Quote",
    excerpt:
      "How to spot a quote that's about to go sideways. The five warning signs of overpriced, underprepared, or scammy handyman estimates. Trust your gut, but check these first.",
    date: "2026-04-05",
    readingMinutes: 6,
    hero: "/images/guide-red-flags-quote.webp",
    body: [
      {
        type: "p",
        text: "Most Lower Mainland handymen are honest. A few aren't. The difference is usually visible in the quote itself, before any work happens. This guide walks through the red flags that mean you should keep shopping.",
      },
      { type: "h2", text: "1. The quote is verbal only" },
      {
        type: "p",
        text: "If you can't get the price in writing, you don't have a price. A verbal quote turns into 'well, the job was bigger than I thought' the moment they show up. Every legitimate handyman puts the estimate in email or a written form before any work starts. No exceptions.",
      },
      { type: "h2", text: "2. Cash-only with a discount for paying upfront" },
      {
        type: "p",
        text: "A small cash discount is fine. A demand for cash upfront before any work is done is not. Real handymen carry liability insurance, run a real business, and accept e-transfer or cheque. If someone insists on cash and pressures for a deposit before the job, walk away.",
      },
      { type: "h2", text: "3. No license number, no insurance proof" },
      {
        type: "p",
        text: "Every legitimate Lower Mainland tradesperson has a business license number and carries comprehensive liability insurance. Both should be on the invoice. If you ask and they hesitate, that's the answer.",
      },
      { type: "h2", text: "4. The price is way under the others" },
      {
        type: "p",
        text: "If three handymen quote you in a similar range and one is half that, the cheap one is either skipping prep work, using cheap materials, or planning to charge change orders later. Drywall patches that don't get three coats. Paint that's a single coat over old. Tile that doesn't get sealed. These shortcuts show up in 6-12 months.",
      },
      { type: "h2", text: "5. They can't explain what they'd actually do" },
      {
        type: "p",
        text: "Ask any handyman to describe the steps. A real one will walk you through prep, materials, the actual work, cleanup. Someone who answers 'I'll take care of it' without specifics either doesn't know the work or doesn't want you to know what they're skipping.",
      },
      {
        type: "callout",
        title: "Green flags to look for instead",
        text: "Written estimate before work starts. Visible business license + insurance info. Itemized invoice on completion. Photos before/after. A clearly stated workmanship promise. Easy to find on Google with verified reviews.",
      },
      { type: "h2", text: "What Summit Handyman gives you upfront" },
      {
        type: "ul",
        items: [
          "Free written estimate by email after photos and details, within 24 hours",
          "Business # 79853 7957 and GST # 79853 7957 RT0001 on every invoice",
          "Comprehensive liability insurance, owner-operated by Brody",
          "$150 minimum per visit, no hourly meter games",
          "Itemized invoice with materials and labor broken out",
          "Come-back-free workmanship promise on every job",
        ],
      },
      {
        type: "callout",
        title: "Get a quote that won't surprise you",
        text: "Submit photos and a description through the quote form. Brody emails a written estimate within 24 hours. The price is the price.",
      },
    ],
  },

  {
    slug: "how-to-get-an-accurate-handyman-quote",
    title: "How to Get an Accurate Handyman Quote in 60 Seconds",
    excerpt:
      "What information actually helps a handyman quote your job accurately. Skip the back-and-forth and get a real number on the first reply.",
    date: "2026-04-12",
    readingMinutes: 4,
    hero: "/images/guide-accurate-quote.webp",
    body: [
      {
        type: "p",
        text: "The quotes that come back fast and accurate share something in common: the customer gave the handyman everything needed to think the job through. Here's the short version of what helps.",
      },
      { type: "h2", text: "1. A few photos beats a thousand words" },
      {
        type: "p",
        text: "Three to five photos showing the area from different angles tells a handyman more than a paragraph of description ever could. Step back for the wide shot, get close for the detail. Show the surroundings (floor type, baseboards, ceiling) because those affect prep time.",
      },
      { type: "h2", text: "2. Rough measurements are gold" },
      {
        type: "p",
        text: "You don't need precision. 'About 12 by 14 feet' is plenty for a paint quote. 'Hole is roughly the size of a tennis ball' is plenty for a drywall patch. A tape measure on top of the work gives instant scale in a photo.",
      },
      { type: "h2", text: "3. Mention what you've already tried" },
      {
        type: "p",
        text: "Did you already buy paint? Try to fix it yourself? Have a contractor look at it? All of this is useful context. It saves the handyman time and helps them quote a real number instead of a wide range.",
      },
      { type: "h2", text: "4. Be honest about timing" },
      {
        type: "p",
        text: "Telling a handyman 'no rush' when you actually need it Tuesday creates problems. Telling them you need it Tuesday lets them either say yes confidently or recommend someone else. Saves everyone time.",
      },
      { type: "h2", text: "5. Mention any access constraints" },
      {
        type: "p",
        text: "Strata building? Stairs only? Pet-friendly? Working remotely so quiet hours matter? These details affect scheduling and pricing. Mention them upfront so the quote reflects your real situation.",
      },
      {
        type: "callout",
        title: "The quote form is built around all five",
        text: "The Summit Handyman quote form walks you through service type, area, timing, photos, and details in about 90 seconds. Brody reviews everything before reaching out, so the first reply already has answers.",
      },
    ],
  },

  {
    slug: "tenant-turnover-punch-list",
    title: "What's Included in a Tenant Turnover Punch List",
    excerpt:
      "A property manager's guide to the standard turnover punch list. What gets fixed, what gets photographed, what gets billed. Save the back-and-forth.",
    date: "2026-04-19",
    readingMinutes: 6,
    hero: "/images/guide-tenant-turnover.webp",
    body: [
      {
        type: "p",
        text: "Tenant turnovers move fast. The unit needs to be ready to re-list in days, not weeks. The punch list is the difference between a smooth turnover and a delayed re-rental. Here's what a thorough one looks like, and how Brody handles them across Surrey, Langley, Cloverdale, and Abbotsford.",
      },
      { type: "h2", text: "Standard turnover scope" },
      {
        type: "ul",
        items: [
          "Wall patches: anchor holes, dings, dents, scuffs (drywall + paint touch-up)",
          "Door alignment and hardware: hinges, latches, bumpers, handles",
          "Cabinet hinges and drawer slides: tightened or replaced",
          "Caulk re-seal: tubs, showers, sinks, baseboards if compromised",
          "Faucet check: cartridges, aerators, drain stoppers",
          "Toilet check: tank parts, seal at base, supply line",
          "Smoke and CO detector test + battery replacement (BC code compliance)",
          "Light fixtures: bulbs, covers, switches, outlets",
          "Window blinds and locks: replace damaged, secure loose",
          "Fence and gate hardware (for ground-floor units): hinges, latches",
        ],
      },
      { type: "h2", text: "What gets photographed" },
      {
        type: "p",
        text: "Before-and-after photos of every repair, plus walk-through photos of the finished unit. This protects the property manager from disputes and gives the strata or owner a clear record. Brody's standard is two photos per repair (before, after) plus a 30-shot final walkthrough.",
      },
      { type: "h2", text: "What gets billed" },
      {
        type: "ul",
        items: [
          "Itemized labor by category (wall patches, doors, plumbing, etc.)",
          "Materials at cost, no markup beyond a small handling fee",
          "GST broken out separately",
          "Photos referenced by line item if requested",
        ],
      },
      {
        type: "callout",
        title: "Standing rates for portfolios",
        text: "Property managers with five or more units get standing turnover rates and a streamlined dispatch process. Brody emails turnaround within hours during normal business days. Email brody@summit-handyman.ca to set up portfolio terms.",
      },
      { type: "h2", text: "Common turnover surprises (and how to avoid them)" },
      {
        type: "ul",
        items: [
          "Drywall texture mismatches: ask up front whether the unit has knockdown or stipple ceilings",
          "Paint color drift: keep manufacturer + sheen on file per unit so touch-ups blend",
          "Rotten subfloor under a wobbly toilet: budget extra for older units",
          "Electrical surprises behind a wall: factor a small contingency on heritage builds",
        ],
      },
      {
        type: "callout",
        title: "Need a turnover handled this week?",
        text: "Submit a quote request with the unit address and as many photos as you can. Brody confirms scope and timing within 24 hours, often the same day for active turnovers.",
      },
    ],
  },

  {
    slug: "tv-mounting-done-right",
    title: "TV Mounting Done Right: 7 Things Most Handymen Skip",
    excerpt:
      "Hidden cables, level mount, anchored into studs, no warping over time. The details that separate a clean TV install from a wobbly disaster.",
    service: "assembly-mounting",
    date: "2026-04-26",
    readingMinutes: 5,
    hero: "/images/guide-tv-mounting.webp",
    body: [
      {
        type: "p",
        text: "TV mounting looks easy. Drill, screw, mount, done. The reality is the difference between a TV that sits perfectly level for a decade and one that lists slightly to the right because someone hit one stud and toggle-bolted the other. Here's what separates a real install.",
      },
      { type: "h2", text: "1. Two studs, every time" },
      {
        type: "p",
        text: "A TV mount needs to anchor into two studs minimum. Single-stud mounts work for small TVs but fail on anything 55 inches or larger when someone leans on the screen. Toggle bolts are not a substitute for studs. They will eventually loosen.",
      },
      { type: "h2", text: "2. Stud finder verified, not assumed" },
      {
        type: "p",
        text: "Stud finders give a rough location. The real test is a small pilot hole. If the bit hits wood, you're good. If it hits drywall, you adjust. Skipping the pilot hole is how you end up with the mount three quarters of an inch off-stud.",
      },
      { type: "h2", text: "3. Level matters more than you think" },
      {
        type: "p",
        text: "A TV that's three degrees off looks fine until the news scroll runs along the bottom. Then it looks broken. Brody uses a 4-foot bubble level on the mount before any screws go in, then a digital level on the TV after.",
      },
      { type: "h2", text: "4. In-wall cable hide" },
      {
        type: "p",
        text: "Cables snaking down the wall ruin the install. An in-wall cable kit costs about thirty dollars, takes 20 extra minutes, and makes the TV look factory-installed. HDMI runs in a behind-the-wall conduit, power runs in a code-compliant kit (the cheap version pulls power directly through drywall, which violates code in most jurisdictions).",
      },
      { type: "h2", text: "5. Mount choice matters" },
      {
        type: "p",
        text: "Fixed mounts are cheapest but you can't tilt the screen for glare. Tilting mounts are the workhorse. Articulating mounts pull out from the wall for corner installs or rooms where the seating angles change. Brody confirms which one fits your room before recommending.",
      },
      { type: "h2", text: "6. Anti-loosening lock washers" },
      {
        type: "p",
        text: "Stud-anchored mounts can still loosen over time from the weight + vibration cycle. Lock washers cost pennies and prevent this. Most installs skip them. Real ones include them.",
      },
      { type: "h2", text: "7. Above-fireplace heat consideration" },
      {
        type: "p",
        text: "Mounting a TV above a wood-burning fireplace is risky. Above a gas fireplace with a heat shield is fine. Above an electric fireplace is fine. Brody confirms the install location before drilling and won't mount somewhere unsafe even if asked.",
      },
      {
        type: "callout",
        title: "Send Brody a photo of the wall + room",
        text: "Submit through the quote form with the TV size, the wall type (drywall, brick, plaster), and any cable management preferences. Brody confirms mount choice and timing in the written estimate.",
      },
    ],
  },

  {
    slug: "pre-listing-repair-checklist-lower-mainland",
    title: "The Pre-Listing Repair Checklist for Lower Mainland Sellers",
    excerpt:
      "The repairs that move the needle on listing photos and inspection reports. What to fix, what to skip, and how to maximize your sale price without overspending.",
    date: "2026-05-03",
    readingMinutes: 7,
    hero: "/images/guide-pre-listing-repairs.webp",
    body: [
      {
        type: "p",
        text: "Pre-listing repairs are about return on investment. Spend on the things that show up in listing photos or inspection reports. Skip the things buyers will redo anyway. Here's how to think about each category, with specific recommendations for Lower Mainland homes.",
      },
      { type: "h2", text: "High-ROI: do these" },
      {
        type: "ul",
        items: [
          "Fresh interior paint in neutral colors (every room shows in photos)",
          "Drywall patches and texture matching (every dent and anchor hole in the listing photo screams 'previous tenants')",
          "Caulking refresh in bathrooms and kitchens (yellowed caulk reads 'old' in photos)",
          "Door alignment and hardware (sticky doors and loose handles annoy buyers in walkthroughs)",
          "Pressure wash exterior, deck, and driveway (curb appeal in front-page MLS photo)",
          "Replace burned-out bulbs and broken fixtures (dim rooms photograph badly)",
          "Tighten and clean every hinge, knob, and pull (small stuff but feels loved)",
        ],
      },
      { type: "h2", text: "Medium-ROI: do if budget allows" },
      {
        type: "ul",
        items: [
          "Cabinet refinishing or hardware swap (cheap kitchen refresh)",
          "Refinish or restain the deck (huge for backyard photos in spring/summer)",
          "Gutter clean + repair (matters for inspection reports)",
          "Smart thermostat install (small detail, signals 'modern home')",
          "Touch up exterior paint on trim and front door",
        ],
      },
      { type: "h2", text: "Skip these. The new owner will redo them" },
      {
        type: "ul",
        items: [
          "Major kitchen or bathroom remodels (you won't recoup the cost)",
          "Custom paint colors (buyers will repaint anyway)",
          "High-end flooring upgrades (taste varies too much)",
          "Removing old fixtures everyone hates (let the buyer choose)",
        ],
      },
      {
        type: "callout",
        title: "The 'inspection report' filter",
        text: "Ask: would this show up in a home inspection report? If yes, fix it. If no, ask whether it shows in listing photos. If yes, fix it. If no, skip.",
      },
      { type: "h2", text: "How long does this take?" },
      {
        type: "p",
        text: "A typical pre-listing punch list across a 3-bedroom home is 2 to 5 days of handyman work. Bundling all the small jobs into one engagement saves significantly versus booking each separately, and lets a single person own the consistency of finish.",
      },
      {
        type: "callout",
        title: "Selling soon? Send the list to Brody",
        text: "The quote form lets you describe the scope and attach photos of every room. Brody returns a written estimate within 24 hours so you can budget the work into your listing timeline.",
      },
    ],
  },

  {
    slug: "aging-in-place-bathroom-safety",
    title: "Aging in Place: Bathroom Safety Upgrades That Actually Help",
    excerpt:
      "The five bathroom upgrades that prevent the falls that send Lower Mainland seniors to the hospital. Quick, affordable, and life-changing.",
    service: "home-safety",
    date: "2026-05-10",
    readingMinutes: 5,
    hero: "/images/guide-aging-bathroom-safety.webp",
    body: [
      {
        type: "p",
        text: "More than 80 percent of senior falls happen in the bathroom. Wet floor, slippery tub, no grab bars to catch a stumble. Most of these are preventable with a handful of inexpensive upgrades. This guide is for adult children helping parents stay independent, or for homeowners thinking ahead about their own home.",
      },
      { type: "h2", text: "1. Grab bars in the right places" },
      {
        type: "p",
        text: "Two grab bars matter most: one inside the shower or tub at hip height (for steadying while showering) and one beside the toilet (for sitting and standing). Both must be anchored into studs or with proper toggle anchors rated for the load. The decorative ones from the hardware store that screw into drywall alone will pull out exactly when they're needed most.",
      },
      { type: "h2", text: "2. Non-slip surface in the tub or shower" },
      {
        type: "p",
        text: "A non-slip mat with suction cups or a peel-and-stick textured strip on the tub floor takes 10 minutes to install and dramatically reduces fall risk. The slip resistance of a wet enamel tub is roughly that of an ice rink.",
      },
      { type: "h2", text: "3. Higher toilet seat" },
      {
        type: "p",
        text: "Standard toilets sit about 15 inches high. Comfort-height toilets sit 17 to 19 inches, much easier on knees and hips. The replacement is straightforward. Or for a no-replacement option, a raised toilet seat clamps onto the existing bowl.",
      },
      { type: "h2", text: "4. Better lighting" },
      {
        type: "p",
        text: "Many bathrooms are lit by a single overhead fixture that casts shadows in the worst places. Add a second light source above the vanity mirror and a small night light at floor level for middle-of-the-night trips. Dimmer-equipped LED bulbs let the user adjust intensity.",
      },
      { type: "h2", text: "5. Lever-style faucet handles" },
      {
        type: "p",
        text: "Round knob faucets are surprisingly hard for arthritic hands. Lever handles are easier to operate without grip strength. Most modern faucets are already levers, but older bathrooms may have round knobs that are worth swapping.",
      },
      {
        type: "callout",
        title: "All five together",
        text: "Done together as one Summit Handyman visit, all five upgrades typically take half a day to a full day depending on access. The $150 minimum applies to the visit, not per item, so bundling makes sense.",
      },
      {
        type: "callout",
        title: "Want a written estimate for a specific bathroom?",
        text: "Submit photos of the bathroom through the quote form, plus any specific concerns. Brody emails an estimate that includes any subfloor or anchoring considerations specific to your space.",
      },
    ],
  },

  {
    slug: "premium-paint-cheaper-long-term",
    title: "Why Premium Paint Is Actually Cheaper in the Long Run",
    excerpt:
      "Builder-grade paint costs less per gallon. Premium paint costs less per decade. Here's the math, plus what to look for in a quality interior paint.",
    service: "painting",
    date: "2026-05-17",
    readingMinutes: 5,
    hero: "/images/guide-premium-paint.webp",
    body: [
      {
        type: "p",
        text: "The cheapest paint at the hardware store and the premium tier from Benjamin Moore look nearly identical when freshly rolled. Three years later they look completely different. Here's why premium paint is the better deal even though the gallon costs more.",
      },
      { type: "h2", text: "Coverage" },
      {
        type: "p",
        text: "Premium paint covers reliably in two coats over most existing paint colors. Builder-grade often needs three coats to look even, especially when going light over dark. Three coats means more time, more material, and more cost overall, even though each gallon was cheaper.",
      },
      { type: "h2", text: "Longevity" },
      {
        type: "p",
        text: "Premium interior paints are formulated to resist yellowing, fading, and scuff marks for many years. Builder-grade paint can start showing wear within 18 months in high-traffic areas. The repaint timeline is the biggest hidden cost.",
      },
      { type: "h2", text: "Washability" },
      {
        type: "p",
        text: "Premium paint can be wiped clean without removing the finish. Cheap paint either can't be wiped (the dirt sets in) or wipes off the paint along with the dirt. For kitchens, bathrooms, and homes with kids or pets, this matters every day.",
      },
      { type: "h2", text: "What to look for" },
      {
        type: "ul",
        items: [
          "Acrylic latex base for interior walls (durable, low VOC, fast cure)",
          "Eggshell or satin sheen for living areas (forgiving on imperfections)",
          "Semi-gloss or gloss for trim and doors (durable, washable)",
          "Matte for ceilings (hides imperfections, reduces glare)",
          "Brand recommendations: Benjamin Moore Regal Select, Sherwin-Williams Emerald, Behr Ultra (mid-tier)",
        ],
      },
      {
        type: "callout",
        title: "What about color matching?",
        text: "Any of the premium brands can match any color from any other brand. Bring a chip, a paint can lid, or even a scuff from your wall. Color is not a reason to switch brands.",
      },
      {
        type: "callout",
        title: "Brody supplies premium by default",
        text: "Summit Handyman uses Benjamin Moore Regal or Sherwin-Williams Emerald on every paint job unless you specifically request something else. Either bring your own paint or Brody picks it up at cost plus a small handling fee.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
