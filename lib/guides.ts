/**
 * Repair guides / educational content.
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
          "Number of coats, because rushed one-coat patches often show through paint later",
          "Whether paint matching is needed after the repair",
          "Timing pressure, especially selling, turnover, or access windows",
        ],
      },
      {
        type: "callout",
        title: "Summit Handyman: $150 minimum per job",
        text: "Every job has a $150 minimum charge to cover tools, insurance, travel, and craftsmanship. Bundle related small repairs into one scope and the minimum covers the job. Final pricing is quoted in writing before work begins.",
      },
      { type: "h2", text: "Why one-coat patches often show later" },
      {
        type: "p",
        text: "A common shortcut is one coat of mud, a quick sand, then paint. It can look fine at first, then humidity, light, and surface movement reveal a halo around the patch. Layered compound, proper sanding, primer, and paint are what keep the repair from announcing itself later.",
      },
      { type: "h2", text: "Texture matching: the make-or-break detail" },
      {
        type: "p",
        text: "Many older Langley homes have knockdown or stipple ceilings. Matching texture takes patience, testing, and the right method for the surface. Brody uses spray-on knockdown for ceilings and sponge-stipple techniques for walls so the patch blends as closely as the existing finish allows.",
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
          "Replacing weather stripping on doors",
          "Tightening loose cabinet handles and hinges",
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
      "The Pacific Northwest fall turns quickly. Run through this checklist in October to catch the common winter weak spots in Surrey, White Rock, and South Surrey homes.",
    area: "Surrey",
    date: "2026-02-15",
    readingMinutes: 5,
    hero: "/images/guide-small-repairs.webp",
    body: [
      {
        type: "p",
        text: "If you've been in Surrey or White Rock for a few winters, you know the drill. Atmospheric rivers, freezing rain weeks, and the cold snap that can crack a hose bib. This checklist hits the highest-leverage items.",
      },
      { type: "h2", text: "Outside the house" },
      {
        type: "ul",
        items: [
          "Disconnect garden hoses and shut off exterior taps from inside",
          "Check window and door weather stripping (replace if compressed)",
          "Inspect exterior caulking on trim, windows, and door frames",
          "Drain and store outdoor furniture cushions",
          "Tighten loose deck boards and railing fasteners before frost",
          "Confirm exterior light fixtures are sealed and functional",
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
      "How Summit Handyman works with property managers across the Lower Mainland on turnovers, tenant requests, access notes, and detailed invoicing.",
    date: "2026-02-22",
    readingMinutes: 5,
    hero: "/images/guide-strata-property-management.webp",
    body: [
      {
        type: "p",
        text: "Property managers don't have time to chase contractors who don't pick up the phone. This is the gap Summit Handyman was built to fill: one accountable handyman, email-first, and detailed enough that strata accounting doesn't have to chase you for a breakdown.",
      },
      { type: "h2", text: "What Brody handles for property managers" },
      {
        type: "ul",
        items: [
          "Tenant turnover punch-lists (paint, repairs, hardware swaps)",
          "Tenant-reported issues (faucets, doors, drywall, fixtures)",
          "Time-sensitive coordination for leaks, access issues, and temporary repairs",
          "Common-area minor repairs",
          "Detailed itemized invoicing with photos when useful",
          "Dedicated email thread per property if preferred",
        ],
      },
      { type: "h2", text: "How invoicing works" },
      {
        type: "p",
        text: "Every job comes with a clear, itemized invoice with labor, materials, and GST broken out. If you need photo documentation for the strata council or owner, say so up front and Brody can build it into the handoff.",
      },
      {
        type: "callout",
        title: "Have a portfolio of properties?",
        text: "Email Brody at brody@summit-handyman.ca to talk through recurring work. Include property type, access rules, invoicing needs, and the kinds of repairs you expect often.",
      },
    ],
  },
  {
    slug: "what-makes-a-paint-job-last-abbotsford",
    title: "What Makes a Paint Job Actually Last in Abbotsford",
    excerpt:
      "What separates a paint job that still looks intentional later from one that starts showing shortcuts. Prep, paint quality, and the steps thin quotes skip.",
    area: "Abbotsford",
    service: "painting",
    date: "2026-03-01",
    readingMinutes: 5,
    hero: "/images/guide-painting.webp",
    body: [
      {
        type: "p",
        text: "A cheap paint job usually reveals itself in the details: drips, roller marks near the ceiling, sloppy cut lines, and trim with brush marks. The difference between a finish that holds up and one that disappoints is mostly prep. Here is what a proper job involves.",
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
        text: "Submit photos of every room you want painted, plus rough dimensions, through the quote form. Brody emails a written estimate within 24 hours. The $150 minimum applies to the job.",
      },
      {
        type: "callout",
        title: "Why builder-grade paint costs more in the long run",
        text: "Builder-grade paint can need more coats and show wear sooner. Better paint costs more per gallon up front, but it can reduce repainting and touch-up work over the life of the room.",
      },
    ],
  },
  {
    slug: "small-repairs-that-save-thousands",
    title: "5 Small Repairs That Prevent Bigger Bills",
    excerpt:
      "Small repairs that protect the house before moisture, movement, or wear turns into a bigger invoice.",
    date: "2026-03-08",
    readingMinutes: 5,
    hero: "/images/guide-small-repairs.webp",
    body: [
      {
        type: "p",
        text: "These are the repairs that look minor until water, movement, or wear gets involved. Catching them early usually keeps the work smaller and cleaner.",
      },
      { type: "h2", text: "1. Caulk around tubs, showers, and sinks" },
      {
        type: "p",
        text: "When the seal fails, water can get behind the tile. The visible problem is mold. The hidden problem is softened drywall, swollen trim, or a subfloor issue that takes more work to undo. Recaulking is one of the simplest prevention jobs.",
      },
      { type: "h2", text: "2. Faucet drips" },
      {
        type: "p",
        text: "A constant drip is often a worn cartridge or seal. Left alone, it can stain the basin, damage a vanity, or hide a larger supply-line issue until it becomes harder to control.",
      },
      { type: "h2", text: "3. Loose deck or stair railings" },
      {
        type: "p",
        text: "A railing that flexes is a fall waiting to happen. Tightening lag bolts and replacing rotted ledger boards is a small job that prevents a much larger liability, especially on older Lower Mainland decks that have weathered through several wet winters.",
      },
      { type: "h2", text: "4. Loose toilet base" },
      {
        type: "p",
        text: "A wobbling toilet often means the seal or flange needs attention. If water escapes at the base, the subfloor can soften before the damage is obvious from above.",
      },
      { type: "h2", text: "5. Cracked driveway sealing" },
      {
        type: "p",
        text: "Water freezes in cracks, expands, and widens them through winter. Sealing cracks early keeps the driveway in maintenance territory instead of letting the surface break down faster.",
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
          "Smart blinds, still early for many homes, wait unless you have a specific use case",
          "Voice-controlled everything, battery-powered ones drain fast",
          "Cheap no-name brand smart switches, they break early",
        ],
      },
      {
        type: "callout",
        title: "Permitting note",
        text: "Many smart device swaps stay within homeowner-allowed scope, such as replacing an existing fixture with a same-power fixture. Anything new beyond that goes to a licensed electrician. Brody refers out when needed.",
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
        text: "Spring is often the best window to refinish a deck in BC. Late April to early June usually gives enough warmth and dry weather to prep, stain, cure, and enjoy the deck before summer gets busy.",
      },
      { type: "h2", text: "What deck refinishing involves" },
      {
        type: "ul",
        items: [
          "Pressure wash to strip mildew and old finish",
          "Sand rough boards (especially railings, splinters)",
          "Replace rotten boards before staining, because finish cannot save failed wood",
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
          "Stain choice, because better products cost more but usually hold up longer",
          "Access (ground-level vs raised second-storey)",
        ],
      },
      {
        type: "callout",
        title: "How to get an accurate deck quote",
        text: "Send photos of every angle of the deck through the quote form, plus rough dimensions and any visible damage. Brody emails a written estimate within 24 hours. The $150 minimum applies to the job.",
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
      "How to spot a handyman quote that is too loose, too rushed, or missing the details that protect your home.",
    date: "2026-04-05",
    readingMinutes: 6,
    hero: "/images/guide-red-flags-quote.webp",
    body: [
      {
        type: "p",
        text: "Many Lower Mainland handymen are honest. The risky ones usually reveal themselves in the quote before any work happens. This guide walks through the red flags that mean you should keep shopping.",
      },
      { type: "h2", text: "1. The quote is verbal only" },
      {
        type: "p",
        text: "If you cannot get the price in writing, you do not really have a price. A verbal quote can turn into “the job was bigger than I thought” once the work starts. A serious handyman should be willing to put the estimate in email or a written form before the job begins.",
      },
      { type: "h2", text: "2. Cash-only with a discount for paying upfront" },
      {
        type: "p",
        text: "A small cash discount is fine. A demand for cash upfront before any work is done is not. Real handymen carry liability insurance, run a real business, and accept e-transfer or cheque. If someone insists on cash and pressures for a deposit before the job, walk away.",
      },
      { type: "h2", text: "3. No license number, no insurance proof" },
      {
        type: "p",
        text: "A legitimate Lower Mainland tradesperson should be able to share a business license number and insurance details. If you ask and they hesitate, that tells you something.",
      },
      { type: "h2", text: "4. The price is way under the others" },
      {
        type: "p",
        text: "If three handymen quote in a similar range and one number is far below the rest, ask what is missing. It may be prep, materials, cleanup, or the part of the job that gets added later as a change order.",
      },
      { type: "h2", text: "5. They can't explain what they'd actually do" },
      {
        type: "p",
        text: "Ask the handyman to describe the steps. A prepared one can walk you through prep, materials, the actual work, and cleanup. “I will take care of it” is not enough detail for a repair you are paying for.",
      },
      {
        type: "callout",
        title: "Green flags to look for instead",
        text: "Written estimate before work starts. Business license and insurance information. Itemized invoice on completion. Photos when documentation matters. A clearly stated workmanship promise. Easy to find on Google with verified reviews.",
      },
      { type: "h2", text: "What Summit Handyman gives you upfront" },
      {
        type: "ul",
        items: [
          "Free written estimate by email after photos and details are reviewed",
          "Business # 79853 7957 and GST # 79853 7957 RT0001 on every invoice",
          "Liability insurance, every job handled by Brody",
          "$150 minimum per job, no hourly meter games",
          "Itemized invoice with materials and labor broken out",
          "Come-back-free workmanship promise attached to the repair",
        ],
      },
      {
        type: "callout",
        title: "Start with a quote that won't surprise you",
        text: "Submit photos and a description through the quote form. Brody reviews the scope and replies in writing within 24 hours.",
      },
    ],
  },

  {
    slug: "how-to-get-an-accurate-handyman-quote",
    title: "How to Get an Accurate Handyman Quote Without Back-and-Forth",
    excerpt:
      "What information actually helps a handyman quote your job accurately. Skip the back-and-forth and get a clearer first reply.",
    date: "2026-04-12",
    readingMinutes: 4,
    hero: "/images/guide-accurate-quote.webp",
    body: [
      {
        type: "p",
        text: "The clearest quotes share something in common: the customer gave the handyman enough context to think the job through before replying. Here's the short version of what helps.",
      },
      { type: "h2", text: "1. A few photos beats a thousand words" },
      {
        type: "p",
        text: "A few photos from different angles tell a handyman more than a paragraph of description ever could. Step back for the wide shot, get close for the detail, and show the surroundings because floors, baseboards, ceilings, and access affect prep time.",
      },
      { type: "h2", text: "2. Rough measurements are gold" },
      {
        type: "p",
        text: "You don't need precision. 'About 12 by 14 feet' is plenty for a paint quote. 'Hole is roughly the size of a tennis ball' is plenty for a drywall patch. A tape measure on top of the work gives instant scale in a photo.",
      },
      { type: "h2", text: "3. Mention what you've already tried" },
      {
        type: "p",
        text: "Did you already buy paint, try the repair yourself, or have someone else look at it? That context saves time and helps Brody quote from the real situation instead of a wide range.",
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
        text: "The Summit Handyman quote form walks you through service type, area, timing, photos, and details. Brody reviews everything before replying, so the first answer can be specific.",
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
        text: "Tenant turnovers move fast. The punch list is the difference between a smooth handoff and a delayed re-rental. Here is what a thorough one looks like, and how Brody handles them across Surrey, Langley, Cloverdale, and Abbotsford.",
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
        text: "Before and after photos can be added when the repair needs proof, plus walk-through photos of the finished unit when helpful. This gives the strata or owner a clear record without turning the repair into a paperwork project.",
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
        title: "Repeat work without messy handoffs",
        text: "Property managers can email Brody to discuss recurring turnover work, invoicing expectations, access rules, and documentation needs before the first job is booked.",
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
        title: "Need a turnover quoted?",
        text: "Start the quote with the unit address, access notes, and as many photos as you can. Brody reviews the scope and timing before replying in writing.",
      },
    ],
  },

  {
    slug: "tv-mounting-done-right",
    title: "TV Mounting Done Right: 7 Details That Separate Clean From Crooked",
    excerpt:
      "Hidden cables, level mount, anchored into studs, no warping over time. The details that separate a clean TV install from a wobbly disaster.",
    service: "assembly-mounting",
    date: "2026-04-26",
    readingMinutes: 5,
    hero: "/images/guide-tv-mounting.webp",
    body: [
      {
        type: "p",
        text: "TV mounting looks simple until the screen sits crooked, the cables hang loose, or the mount misses proper structure. Here is what separates a clean install from one you notice for the wrong reasons.",
      },
      { type: "h2", text: "1. Two studs, every time" },
      {
        type: "p",
        text: "A TV mount should anchor into proper structure, usually two studs for larger screens. Toggle bolts have their place, but they are not a casual substitute for structure on a heavy mount.",
      },
      { type: "h2", text: "2. Stud finder verified, not assumed" },
      {
        type: "p",
        text: "Stud finders give a rough location. A small pilot hole confirms the structure before the mount goes up. That extra check is what keeps the install from drifting off-stud.",
      },
      { type: "h2", text: "3. Level matters more than you think" },
      {
        type: "p",
        text: "A slightly crooked TV may not bother you on day one, but it becomes obvious every time a straight line appears on screen. Brody levels the mount before any screws go in, then checks the TV after it is seated.",
      },
      { type: "h2", text: "4. In-wall cable hide" },
      {
        type: "p",
        text: "Cables snaking down the wall ruin the install. An in-wall cable kit keeps HDMI and power paths organized, cleaner, and safer than improvised cord runs.",
      },
      { type: "h2", text: "5. Mount choice matters" },
      {
        type: "p",
        text: "Fixed mounts are cheapest but you can't tilt the screen for glare. Tilting mounts are the workhorse. Articulating mounts pull out from the wall for corner installs or rooms where the seating angles change. Brody confirms which one fits your room before recommending.",
      },
      { type: "h2", text: "6. Anti-loosening lock washers" },
      {
        type: "p",
        text: "Even a stud-anchored mount depends on the right washers and fasteners. Small hardware details help the mount stay tight over time.",
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
      "The repairs that matter before photos, showings, and inspection reports. What to fix, what to skip, and where a handyman makes the home feel cared for.",
    date: "2026-05-03",
    readingMinutes: 7,
    hero: "/images/guide-pre-listing-repairs.webp",
    body: [
      {
        type: "p",
        text: "Pre-listing repairs are about removing buyer doubt. Spend on the things that show up in listing photos, walkthroughs, or inspection reports. Skip the things buyers will likely redo anyway. Here is how to think about each category for Lower Mainland homes.",
      },
      { type: "h2", text: "High-impact: do these" },
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
      { type: "h2", text: "Worth considering if budget allows" },
      {
        type: "ul",
        items: [
          "Cabinet refinishing or hardware swap (cheap kitchen refresh)",
          "Refinish or restain the deck, especially before spring or summer photos",
          "Re-caulk exterior trim and re-seal weather stripping (matters for inspection reports)",
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
        text: "Pre-listing punch lists vary by home, but bundling the small jobs into one scope keeps the finish more consistent and avoids re-explaining the house to multiple trades.",
      },
      {
        type: "callout",
        title: "Selling soon? Send the list to Brody",
        text: "The quote form lets you describe the scope and attach photos of each room. Brody reviews the list and replies in writing within 24 hours so you can plan around the listing timeline.",
      },
    ],
  },

  {
    slug: "aging-in-place-bathroom-safety",
    title: "Aging in Place: Bathroom Safety Upgrades That Actually Help",
    excerpt:
      "Bathroom upgrades that make daily routines steadier for seniors and aging-in-place homeowners.",
    service: "home-safety",
    date: "2026-05-10",
    readingMinutes: 5,
    hero: "/images/guide-aging-bathroom-safety.webp",
    body: [
      {
        type: "p",
        text: "Bathrooms are one of the highest-risk rooms for aging homeowners: wet floors, slippery tubs, awkward thresholds, and nowhere solid to grab during a stumble. This guide is for adult children helping parents stay independent, or homeowners thinking ahead about their own home.",
      },
      { type: "h2", text: "1. Grab bars in the right places" },
      {
        type: "p",
        text: "Two grab bars matter most: one inside the shower or tub for steadying while showering, and one beside the toilet for sitting and standing. Both need proper anchoring. Decorative bars screwed into drywall alone are not safety equipment.",
      },
      { type: "h2", text: "2. Non-slip surface in the tub or shower" },
      {
        type: "p",
        text: "A non-slip mat with suction cups or a peel-and-stick textured strip gives the tub or shower floor more grip when wet. It is a small upgrade, but it removes one of the most common bathroom hazards.",
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
        text: "Round knob faucets are surprisingly hard for arthritic hands. Lever handles are easier to operate without grip strength, and older bathrooms often still have round knobs worth swapping.",
      },
      {
        type: "callout",
        title: "Bundle the safety list",
        text: "Handled together, these upgrades are easier to plan, quote, and document. The $150 minimum applies to the job, not each item, so bundling related repairs can make sense.",
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
      "Builder-grade paint costs less per gallon. Better paint often costs less over the life of the room. Here is what to look for in a quality interior finish.",
    service: "painting",
    date: "2026-05-17",
    readingMinutes: 5,
    hero: "/images/guide-premium-paint.webp",
    body: [
      {
        type: "p",
        text: "Cheap paint and better paint can look similar when freshly rolled. The difference shows up later in coverage, scuff resistance, washability, and how soon the room needs attention again.",
      },
      { type: "h2", text: "Coverage" },
      {
        type: "p",
        text: "Better paint usually covers more reliably in two coats over many existing colours. Builder-grade paint often needs extra coats to look even, especially when going light over dark. Extra coats mean more time, more material, and more total cost.",
      },
      { type: "h2", text: "Longevity" },
      {
        type: "p",
        text: "Better interior paints are formulated to resist yellowing, fading, and scuff marks longer than builder-grade paint. The repaint timeline is often the hidden cost.",
      },
      { type: "h2", text: "Washability" },
      {
        type: "p",
        text: "Better paint can usually be wiped clean without damaging the finish. Lower-grade paint can hold dirt or burnish when scrubbed, which matters in kitchens, bathrooms, and homes with kids or pets.",
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
        text: "Most major paint brands can match colours from another brand. Bring a chip, a paint can lid, or even a sample from your wall if you have one.",
      },
      {
        type: "callout",
        title: "Brody quotes better paint by default",
        text: "Summit Handyman often quotes Benjamin Moore Regal or Sherwin-Williams Emerald for interior painting unless the scope calls for something else. You can supply paint or Brody can pick it up at cost plus a small handling fee.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
