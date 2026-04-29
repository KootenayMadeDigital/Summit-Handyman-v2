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
    service: "smart-home",
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

  // ===========================================================================
  // EXPANSION ROUND. Each guide is built around a specific buyer mindset and
  // pairs reciprocity (give value first) with conversion (clear next step).
  // No fabricated prices. The $150 minimum is the only number that ever
  // appears as a real figure; everything else explains what drives cost.
  // ===========================================================================

  {
    slug: "how-much-does-a-handyman-cost-in-bc",
    title: "How Much Does a Handyman Cost in BC? An Honest Breakdown",
    excerpt:
      "A clear-eyed answer to the most-Googled handyman question in BC. What actually drives the number, why hourly rates can be misleading, and how to scope the conversation so the quote is real.",
    date: "2026-05-24",
    readingMinutes: 7,
    hero: "/images/guide-accurate-quote.webp",
    body: [
      {
        type: "p",
        text: "There is no single right answer to 'how much does a handyman cost in BC,' which is why every search result you have ever clicked feels evasive. The reason is not that handymen are hiding the number. It is that the number genuinely depends on the scope, and any quote that ignores scope is either inflated to protect against surprises or set up to grow once the work starts.",
      },
      {
        type: "p",
        text: "This guide is the opposite of evasive. Below is exactly what drives handyman pricing across the Lower Mainland, why hourly rates can quietly cost more than a flat scope, and the one number Summit Handyman publishes openly: a $150 minimum per job, every time, no exceptions.",
      },
      { type: "h2", text: "Why an honest handyman cannot quote a flat rate over text" },
      {
        type: "p",
        text: "Two homes can ask for the same repair and need wildly different visits. A drywall patch in a 2002 Walnut Grove home with smooth-finish walls is a 90-minute job. The same patch in a 1978 White Rock home with original stipple ceilings is half a day, because matching that texture is its own craft. When a handyman quotes you a flat number before seeing the work, they are either guessing high to be safe or guessing low to win the job.",
      },
      { type: "h2", text: "What actually drives the price" },
      {
        type: "ul",
        items: [
          "Scope size. One small repair vs a list of eight is the largest single factor.",
          "Surface complexity. Smooth drywall is cheaper to repair than knockdown or stipple ceilings.",
          "Materials. Better paint, premium tile, soft-close hinges, and brand-matched hardware all cost more but typically last longer.",
          "Access. Strata buildings with elevator bookings, second-storey decks, and pets at home all add coordination time.",
          "Timing pressure. A tenant turnover with a Saturday deadline costs more to schedule than a project Brody can fit in next month.",
          "Prep and protection. Drop cloths, dust control, furniture moving, and cleanup are part of a real quote, not extras tacked on later.",
          "Documentation. Property managers needing photo evidence and itemized billing per unit add a small but real layer.",
        ],
      },
      { type: "h2", text: "Why hourly rates can quietly cost you more" },
      {
        type: "p",
        text: "An hourly rate sounds transparent, but the meter starts the moment the truck rolls and stops only when it leaves your property. A handyman charging $85 per hour who takes a slow lunch on your driveway is making more from your job than one charging $110 per hour who works straight through. The number you actually pay is the rate multiplied by the time, and you only know the time after the job is done.",
      },
      {
        type: "p",
        text: "Summit Handyman quotes flat scopes in writing wherever possible. The number you see in the email is the number on the invoice, unless you ask for additional work mid-job and Brody confirms the change in writing first. No meter. No surprise lines. No 'we ran into something' add-ons after the fact.",
      },
      {
        type: "callout",
        title: "The $150 minimum, explained",
        text: "Every Summit Handyman job starts at $150. That covers tools, insurance, vehicle, and the part of the work no hourly rate captures: showing up prepared, scoping carefully, and leaving the space cleaner than you found it. The smartest move on a small repair list is to bundle several items into one visit so the minimum covers more of the work.",
      },
      { type: "h2", text: "How to get a real number for your job" },
      {
        type: "ul",
        items: [
          "Start with the quote form. It captures scope, photos, city, timing, and any access details Brody needs.",
          "Add a few clear photos. A wide shot, a close-up, and one with a tape measure for scale tells Brody more than three paragraphs of description.",
          "Mention any timing pressure honestly. If you need it before a tenant moves in, say so up front.",
          "Bundle related repairs. The minimum covers more value when the visit handles four jobs instead of one.",
        ],
      },
      {
        type: "callout",
        title: "Get a written estimate within 24 hours",
        text: "Submit the quote form at summit-handyman.ca/quote. Brody reviews the scope and replies in writing, with a real number, within 24 hours. No back-and-forth, no 'I'll have to come look first.' The photos and details you sent are usually enough to commit to a price.",
      },
    ],
  },

  {
    slug: "kitchen-backsplash-installation-guide-lower-mainland",
    title: "Kitchen Backsplash Installation: A Lower Mainland Homeowner's Guide",
    excerpt:
      "Everything that goes into a backsplash that still looks intentional five years later. Tile choice, layout, outlet cuts, grout, and the small details that separate good from great.",
    service: "backsplashes",
    date: "2026-05-31",
    readingMinutes: 8,
    hero: "/images/service-tile-flooring.webp",
    body: [
      {
        type: "p",
        text: "Backsplashes are the most photographed surface in the most photographed room of the house. They sit at eye level, behind the sink, framed by cabinets, and they catch every light in the kitchen at some point in the day. A backsplash done well makes a builder-grade kitchen feel custom. A backsplash done quickly announces itself forever, and there is no easy way to fix a wavy grout line or a tile cut that misses an outlet by a quarter inch.",
      },
      {
        type: "p",
        text: "This is the part of Brody's work where he slows down on purpose. Backsplashes are a Summit Handyman specialty, and this guide is what he wishes every Lower Mainland homeowner knew before walking into the tile shop.",
      },
      { type: "h2", text: "1. Choose tile that matches your wall, not just your kitchen" },
      {
        type: "p",
        text: "The most common installation mistake starts at the tile shop. Large-format tiles look elegant in a showroom but are unforgiving on a wall that is not perfectly flat, which is most walls in BC homes built before 2005. Small-format mosaics hide imperfections beautifully but eat hours in cutting and grouting. Subway tile is the safe-and-clean default for a reason. Brody confirms which tile types are smart for your specific wall after seeing photos, before you commit at Bedrosians or Tileland.",
      },
      { type: "h2", text: "2. Layout decisions that change everything" },
      {
        type: "p",
        text: "Where the first tile sits determines whether the backsplash looks intentional or accidental. Centered on the range. Centered on the sink. Aligned with cabinet edges. Started full-tile at the eye-level run rather than at the counter where awkward cuts will land in plain view. These are calls Brody makes by dry-laying the tile before any thinset goes up, and they are the difference between a backsplash that flows and one that distracts.",
      },
      { type: "h2", text: "3. The outlet cuts make or break the wall" },
      {
        type: "p",
        text: "Outlets sit roughly 4 inches above the counter, right in the middle of the backsplash. Cutting tile around an outlet is where rushed installs fall apart: jagged edges, gaps wider than a grout line, or tile chipping at the corner. Brody scribes each cut, scores with a wet saw, and finishes the curves with a tile nipper or a Dremel. The covers go back on flush, with the box raised on spacer rings so the outlet sits at the new tile depth instead of recessed in a hole.",
      },
      { type: "h2", text: "4. Inside corners need miters or a Schluter strip" },
      {
        type: "p",
        text: "Where a backsplash wraps around an inside corner, two cut edges have to meet. Most installs run one tile into the corner and butt the other tile against it, which leaves a visible seam and a corner that catches grime. Better installs miter the two tiles at 45 degrees so they meet in a clean line. Cleaner still is a Schluter strip or a pencil-tile transition that gives the eye a deliberate stop. Brody confirms the corner approach with you before any tile is cut.",
      },
      { type: "h2", text: "5. Grout choice and grout colour" },
      {
        type: "ul",
        items: [
          "Sanded grout for joints over 1/8 inch (most subway and large-format installs).",
          "Unsanded grout for narrow joints (most mosaics).",
          "Epoxy grout for high-stain areas behind a stove (premium, harder to apply, much more durable).",
          "Colour matters more than people expect. White grout brightens a small kitchen but stains over time. A grey or warm-tan grout hides daily wear and frames the tile pattern.",
          "Sealing matters. Cement-based grout should be sealed about a week after install, then resealed every few years.",
        ],
      },
      {
        type: "callout",
        title: "Brody's default for a kitchen backsplash",
        text: "If a homeowner has no strong opinion: subway tile in a running bond pattern, a warm-grey grout, mitered inside corners, and a Schluter pencil edge where the backsplash ends below the upper cabinets. It will not date, hides daily life, and shows the eye for proportion that turns a basic kitchen into a finished one.",
      },
      { type: "h2", text: "6. The detail caulk no one talks about" },
      {
        type: "p",
        text: "Where the backsplash meets the countertop, where it meets the side cabinets, and where it meets the upper cabinets, the right material is colour-matched silicone caulk, not grout. Grout in those joints will crack as the house moves and the wood breathes. A clean caulk line in a matching colour reads as part of the tile until you actually look closely.",
      },
      { type: "h2", text: "How long does a kitchen backsplash take?" },
      {
        type: "p",
        text: "Most kitchen backsplashes are a two-day job. Day one is layout, cuts, thinset, and tile. Day two is grout, sealing, and the detail caulk after the thinset has set overnight. Larger walls, herringbone or marble layouts, or full-height accent walls add a day. Brody includes a working timeline in every written estimate so there are no surprises.",
      },
      {
        type: "callout",
        title: "Get a written backsplash estimate",
        text: "Send a few photos of your kitchen, the existing backsplash area or wall behind the sink, and a link or photo of the tile you are considering through the quote form at summit-handyman.ca/quote. Brody replies within 24 hours with a written estimate, a working timeline, and any layout suggestions for the specific wall.",
      },
    ],
  },

  {
    slug: "cabinet-door-alignment-and-soft-close-retrofit-bc",
    title: "Cabinet Doors Out of Alignment? A Realignment & Soft-Close Guide",
    excerpt:
      "When cabinet doors stop closing flush, the fix is rarely new cabinets. Hinge adjustment, soft-close retrofits, and the small repairs that make a kitchen feel new again.",
    service: "cabinets",
    date: "2026-06-07",
    readingMinutes: 6,
    hero: "/images/service-assembly-mounting.webp",
    body: [
      {
        type: "p",
        text: "There is a moment in most BC kitchens, usually around year five or six, when cabinet doors stop closing flush. One door sits a little proud. Another slams instead of settling. A drawer scrapes when it slides home. The instinct is to assume the cabinets are failing and start pricing a refresh. The truth is most of those symptoms are 30 minutes of hinge adjustment away from being fixed.",
      },
      { type: "h2", text: "What actually causes cabinet doors to drift" },
      {
        type: "p",
        text: "Cabinet doors hang on European-style cup hinges in 90% of homes built since the 1990s. Those hinges have three small adjustment screws, one each for height, depth, and side-to-side alignment. Over years of use, doors sag a millimetre at a time as wood breathes through BC's wet winters and dry summers, the cabinet boxes shift slightly with the house, and hinge screws loosen under repeated open-and-close cycles. Each by itself is invisible. Together, they add up to misaligned doors.",
      },
      { type: "h2", text: "1. The three-screw alignment routine" },
      {
        type: "ul",
        items: [
          "Height adjustment: the screw closest to the cabinet moves the door up or down a few millimetres in either direction.",
          "Depth adjustment: the middle screw pulls the door toward or away from the cabinet face. This is what fixes a door sitting proud.",
          "Side-to-side adjustment: the screw farthest from the cabinet moves the door left or right. This is what aligns adjacent doors so the gap between them is even.",
        ],
      },
      {
        type: "p",
        text: "Brody adjusts all three on every door of a misaligned bank in roughly 20 minutes. The result is a kitchen where every gap is consistent, every door closes flush, and the cabinetry suddenly looks intentional again.",
      },
      { type: "h2", text: "2. When to retrofit soft-close hinges" },
      {
        type: "p",
        text: "If your cabinets are 10 to 20 years old and the doors slam, you almost certainly do not have soft-close hinges. They became standard around 2010. Retrofitting is straightforward: most European cup hinges accept a soft-close clip-on adapter that drops into the existing hinge cup. Higher-end retrofits replace the hinge entirely with a Blum or Salice soft-close hinge that gives the door a controlled close every time.",
      },
      {
        type: "p",
        text: "Soft-close drawers work the same way. Most older drawer slides accept a soft-close adapter that snaps onto the back of the slide. Better still is replacing the slides with full-extension soft-close runners, which gives both quieter operation and easier access to whatever lives in the back of the drawer.",
      },
      {
        type: "callout",
        title: "What a soft-close retrofit feels like",
        text: "Pulled-open drawers and doors that close themselves the last inch instead of slamming, with a controlled glide that sounds expensive. Most homeowners describe it as 'the kitchen suddenly feeling like a new house' for a fraction of what cabinet replacement would cost.",
      },
      { type: "h2", text: "3. When alignment is not the answer" },
      {
        type: "p",
        text: "There are limits to what hinge adjustment can fix. If the cabinet box itself is racked because of a settled floor or a leak that swelled the side panel, no amount of hinge work will land doors true. If the hinge holes themselves are stripped from years of slamming, the door may need a hinge plate replacement or a small wood repair before the screws will hold. Brody confirms which category your cabinets fall into during the visit, so the work matches the actual problem.",
      },
      { type: "h2", text: "4. Hardware swaps that lift the whole kitchen" },
      {
        type: "p",
        text: "If the cabinets themselves are sound but the hardware feels dated, swapping every pull and knob in the kitchen is the cheapest visible upgrade in home renovation. Twenty pulls and ten knobs takes Brody about two hours, and the change is the difference between a 2008-finish kitchen and one that reads current.",
      },
      {
        type: "callout",
        title: "Bundle the cabinet visit",
        text: "Most cabinet alignment calls turn into a small list once Brody is on site: a couple of misaligned doors, a soft-close retrofit on the loudest drawer, and a hardware swap that was on your mind anyway. The $150 minimum applies to the visit, so combining the work makes each item cheaper. Submit photos through the quote form and Brody scopes the full list before booking.",
      },
    ],
  },

  {
    slug: "smart-lock-installation-guide-bc-homes",
    title: "Smart Lock Installation in BC Homes: Which One, and What to Expect",
    excerpt:
      "A practical guide to choosing and installing a smart lock on your front door. What works on older BC doors, what doesn't, and the install details that decide whether it lasts.",
    service: "smart-home",
    date: "2026-06-14",
    readingMinutes: 6,
    hero: "/images/guide-smart-home.webp",
    body: [
      {
        type: "p",
        text: "Smart locks are the smart-home upgrade with the highest hit rate. Unlike smart bulbs that need apps for things you used to do with a wall switch, a smart lock genuinely changes how you live in the house. One-time codes for cleaners, contractors, and dog walkers. Auto-unlock as you walk up the path with groceries. Remote unlock when a kid forgets their key. Removed the daily 'did I lock the door' loop entirely.",
      },
      {
        type: "p",
        text: "But smart lock installs go wrong in BC homes for a few specific reasons, almost all of them avoidable if you know what to check before you order.",
      },
      { type: "h2", text: "1. Will it fit your door?" },
      {
        type: "p",
        text: "Most modern smart deadbolts are designed for a standard prep door: a 2 1/8 inch face bore for the deadbolt, a 1 inch edge bore for the latch, and a 2 3/8 or 2 3/4 inch backset (the distance from the door edge to the centre of the bore). 95% of BC homes built since 1990 have standard prep. Older heritage homes, custom doors, and some Vancouver Special builds use non-standard backsets that need a hole modification or a specific lock model. Brody confirms fit from a single photo of your door before booking.",
      },
      { type: "h2", text: "2. Which smart lock is right for you" },
      {
        type: "ul",
        items: [
          "Schlage Encode: Wi-Fi built-in, no hub needed, works with the Schlage app or Apple Home / Google. Brody's most-recommended for everyday households.",
          "Yale Assure: similar feature set, slightly slimmer profile, integrates well with August Home for video doorbell pairing.",
          "August Smart Lock (4th gen): retrofits over your existing deadbolt thumb-turn instead of replacing the whole lock. Useful for renters or strata units where you cannot modify the door hardware.",
          "Lockly Vision: includes a built-in camera. More expensive, more to break, only worth it if you do not already have a doorbell camera.",
          "Skip: cheap no-name brands from marketplace listings. Battery management and firmware support are usually poor.",
        ],
      },
      { type: "h2", text: "3. The install steps" },
      {
        type: "p",
        text: "A smart lock install on a standard prep door is roughly a 45-minute job: remove the existing deadbolt, install the new latch and thumb-turn, mount the keypad, align the strike plate so the bolt throws cleanly, install the batteries, and pair to the app. The pairing is where most DIY installs stall: connecting to home Wi-Fi, naming the lock, setting the auto-lock timing, programming the first few user codes, and confirming notifications work on your phone. Brody walks through all of that on the visit and leaves you with a working lock, not a project to figure out later.",
      },
      { type: "h2", text: "4. Strike plate alignment is the silent failure" },
      {
        type: "p",
        text: "The most common smart-lock complaint a year after install is 'it stopped auto-locking' or 'the bolt sticks sometimes.' Nine times out of ten, the issue is strike plate alignment. The bolt drags against the strike plate edge, the motor strains, and the lock either gives up or slowly destroys its own gear teeth. A correctly aligned strike plate lets the bolt drop in cleanly with no resistance. Brody adjusts the strike plate during the install and confirms the bolt throws smoothly with the door closed at three different positions before leaving.",
      },
      {
        type: "callout",
        title: "Battery life in BC weather",
        text: "Smart locks on north-facing front doors in cold snaps eat batteries faster than the manufacturer's claim. Plan on swapping AA batteries every 8 to 10 months on average, and budget a backup power method (most locks have 9V emergency contacts on the bottom of the keypad) so a dead battery never locks you out.",
      },
      { type: "h2", text: "5. Pairing with the rest of your smart home" },
      {
        type: "p",
        text: "If you already run a Nest, Ring, or Apple Home setup, the smart lock should slot into it. Brody confirms compatibility before quoting, sets up the integration during the install, and tests one-time codes, auto-unlock proximity (where supported), and notifications across whichever app ecosystem you live in. The end state is a lock that works with everything else you already use, not a fourth app to remember.",
      },
      {
        type: "callout",
        title: "Get a smart-lock install quoted",
        text: "Send a photo of your front door (showing the existing deadbolt and the door edge), the lock model you are considering or want a recommendation for, and any specific use cases through the quote form. Brody replies in writing within 24 hours with the install price, app pairing time, and any compatibility notes specific to your door.",
      },
    ],
  },

  {
    slug: "first-home-repair-priorities-lower-mainland-buyers",
    title: "First Home in the Lower Mainland? The Repairs to Tackle First",
    excerpt:
      "A new homeowner's guide to the repair priorities that protect your first BC home, save money long term, and make the place feel like yours faster.",
    date: "2026-06-21",
    readingMinutes: 7,
    hero: "/images/guide-pre-listing-repairs.webp",
    body: [
      {
        type: "p",
        text: "Buying your first home in the Lower Mainland is one of the most expensive decisions of your life. The day you get the keys, there is a quiet panic that comes with realizing every problem the inspector flagged, and several they did not, are now yours to deal with. The instinct is to fix everything at once. The smarter move is to do the work in the right order, because some repairs protect the house from damage that compounds, and others are cosmetic and can wait.",
      },
      {
        type: "p",
        text: "This is the order Brody recommends to first-time buyers across Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. It assumes you took possession of a typical Lower Mainland home built between 1980 and 2010, in livable condition, with the standard mix of small issues every previous-owner home accumulates.",
      },
      { type: "h2", text: "Phase 1: protect the structure (first 30 days)" },
      {
        type: "p",
        text: "The repairs in this phase prevent damage that gets exponentially more expensive if you ignore it. None are glamorous. All are non-negotiable.",
      },
      {
        type: "ul",
        items: [
          "Re-caulk every tub, shower, sink, and exterior trim joint where the existing caulk is yellowed or cracked. A failed seal lets water behind the surface, and water damage in BC humidity compounds fast.",
          "Test every smoke detector and CO detector. Replace batteries, or replace the unit if it is more than 10 years old. BC code requires both, and they save lives.",
          "Tighten loose deck and railing fasteners. Anything you can flex by hand is a fall waiting to happen.",
          "Confirm exterior taps shut off from inside before the first cold snap. A burst hose bib in February floods a basement.",
          "Walk the roof line from the ground with binoculars. Look for missing shingles, lifted flashing, or cracked vent boots. Anything visible from the ground is worth flagging to a roofing specialist before winter.",
        ],
      },
      { type: "h2", text: "Phase 2: make the safety baseline real (next 60 days)" },
      {
        type: "p",
        text: "These repairs eliminate the everyday hazards that previous owners learned to live with. They are quick, inexpensive, and they are the difference between a house that feels safe and one that has small daily anxieties.",
      },
      {
        type: "ul",
        items: [
          "Replace the deadbolt on every exterior door (or rekey, but replacement is often cheaper than a locksmith). You have no idea how many keys are floating around.",
          "Install a smart lock on the front door if it fits the workflow of your household.",
          "Add anti-tip anchors to every dresser, bookshelf, and tall furniture piece, especially if there are kids.",
          "Test every GFCI outlet in kitchens and bathrooms. They wear out and stop tripping after 10 years.",
          "Confirm the main water shut-off works and is accessible. If the previous owner buried it behind storage, fix that.",
        ],
      },
      { type: "h2", text: "Phase 3: the cosmetic round (months 3 to 6)" },
      {
        type: "p",
        text: "Now you can make the place feel like yours. None of these affect the integrity of the house, so you can move at your own pace and your own budget.",
      },
      {
        type: "ul",
        items: [
          "Patch every anchor hole and dent the previous owner left, with proper layered drywall mud and texture matching where needed.",
          "Repaint at least the main living areas in the colours you actually want (most builder-grade paint is cheap and shows wear).",
          "Swap dated cabinet hardware. The cheapest visible upgrade in any home.",
          "Replace burned-out bulbs and broken light fixtures. Dim rooms drag the whole house down.",
          "Refresh exterior paint on the front door, trim, and any wood that looks tired. Curb appeal is mostly the front door.",
        ],
      },
      {
        type: "callout",
        title: "Bundling saves more than you think",
        text: "First-home repair lists pile up. Bundling Phase 1 and Phase 2 into a single Summit Handyman visit is dramatically cheaper than booking three separate trade visits across six weeks. The $150 minimum covers the visit, not each item, so adding a fifth or sixth small repair to a scoped job often costs only the materials and a few extra minutes of labor.",
      },
      { type: "h2", text: "What to skip on a first home" },
      {
        type: "p",
        text: "There is real wisdom in not fixing what does not need fixing. The kitchen layout you find awkward might feel normal in three months. The paint colour in the spare bedroom can wait until you know what the room is going to be. Trade cosmetic upgrades for one well-executed safety pass and a watertight house, and the home will feel cared-for without the renovation budget anxiety.",
      },
      {
        type: "callout",
        title: "Get the first-home list quoted",
        text: "Submit photos and a description of your repair list through the quote form at summit-handyman.ca/quote. Brody reviews the scope, suggests the order to handle them in, and replies in writing within 24 hours with a single estimate that covers the bundled work.",
      },
    ],
  },

  {
    slug: "handyman-vs-general-contractor-when-to-call-which",
    title: "Handyman vs General Contractor: When to Call Which",
    excerpt:
      "A clear-eyed take on which trade fits which job. The boundary between handyman work and contractor work, and how knowing the difference saves you money and time.",
    date: "2026-06-28",
    readingMinutes: 5,
    hero: "/images/guide-diy-vs-handyman.webp",
    body: [
      {
        type: "p",
        text: "The wrong call costs you twice. Hiring a general contractor for a list of small repairs means paying contractor overhead, contractor minimums, and contractor scheduling lag for work that would have taken a handyman a single afternoon. Hiring a handyman for a project that actually needs structural work, plumbing rough-in, or electrical permits means redoing the work later, often paying for the same job twice. Knowing which trade fits which job is one of the most useful skills a homeowner can develop.",
      },
      { type: "h2", text: "When you need a handyman" },
      {
        type: "p",
        text: "Handyman work is the broad middle of home repair: anything that does not require a permit, a licensed sub-trade, or major structural change. Most BC homes generate a steady flow of this work over the years, and bundling it into single visits is far more cost-effective than calling specialists for each item.",
      },
      {
        type: "ul",
        items: [
          "Drywall patches, paint, and texture matching",
          "Door alignment, hardware, and weather stripping",
          "Cabinet realignment, soft-close retrofits, and hardware swaps",
          "Tile repair and backsplash installs",
          "TV mounting, shelving, and IKEA assembly",
          "Light fixture and ceiling fan swaps (within homeowner-allowed electrical scope)",
          "Faucet and toilet replacements",
          "Fence repair, gate alignment, and deck maintenance",
          "Tenant turnover punch lists",
        ],
      },
      { type: "h2", text: "When you need a general contractor" },
      {
        type: "p",
        text: "General contractors coordinate multiple sub-trades across a larger project. They run permits, schedule electricians and plumbers and framers, and take responsibility for the project end-to-end. Their cost structure assumes weeks or months of work, not a half-day visit.",
      },
      {
        type: "ul",
        items: [
          "Full kitchen or bathroom remodels",
          "Basement suite legalization or in-law suite builds",
          "Adding or removing walls, opening up a floor plan",
          "New rooflines, roof replacement, additions, dormers",
          "Whole-home rewires or plumbing rough-ins",
          "Major foundation or structural repair",
        ],
      },
      { type: "h2", text: "When you need a specialist sub-trade" },
      {
        type: "p",
        text: "Some jobs go directly to a specialist, not a generalist of either kind. Licensed electricians for new circuits, panel changes, or anything that requires a permit. Licensed plumbers for gas line work, sewer line repair, or hot water tank changes. Roofers for full re-roofs and complex flashing repair. HVAC technicians for furnace and AC service. Brody refers out to trusted Lower Mainland specialists whenever a job crosses that boundary, rather than stretching the work into something the homeowner pays to redo later.",
      },
      {
        type: "callout",
        title: "The fastest test",
        text: "If the job needs a permit, requires more than one trade, or takes more than three days, it is contractor work. If it is a list of small repairs that fit into one or two visits, it is handyman work. If it is a single specialized task in a single trade, it is sub-trade work.",
      },
      { type: "h2", text: "Why bundling matters more for handyman work" },
      {
        type: "p",
        text: "A general contractor's cost structure includes overhead per project, regardless of size. A handyman's cost structure has a per-visit minimum that is meant to be spread across multiple small jobs in a single trip. The same five repairs handled by a contractor would be five separate small projects, each with its own coordination overhead. The same five repairs handled by a handyman are one bundled visit, often for a fraction of the contractor cost. The savings are largest when the homeowner has been quietly accumulating a repair list for months.",
      },
      {
        type: "callout",
        title: "Send Brody the bundled list",
        text: "Submit the quote form with photos and a description of every item on your list. Brody reviews whether each is in handyman scope, flags anything that needs a sub-trade or a contractor, and replies with a written estimate for the bundled work plus referrals for anything outside scope.",
      },
    ],
  },

  {
    slug: "caulking-tubs-and-showers-bc-guide",
    title: "Caulking Tubs and Showers in BC: When to DIY and When to Call",
    excerpt:
      "Failed caulk is the most common cause of hidden water damage in BC bathrooms. A practical guide to recaulking right, plus when DIY is fine and when it is not.",
    date: "2026-07-05",
    readingMinutes: 5,
    hero: "/images/guide-small-repairs.webp",
    body: [
      {
        type: "p",
        text: "Caulk failure is the silent disaster of BC bathrooms. The visible problem is yellow or cracked caulk around the tub, and most homeowners assume it is cosmetic. The hidden problem is water sneaking past the failed seal, soaking the drywall, swelling the subfloor, and growing mold inside the wall cavity for months before any damage shows from the outside. By the time the bathroom looks bad, the wall behind it might be a tear-out repair instead of a caulk job.",
      },
      {
        type: "p",
        text: "The good news: recaulking is one of the highest-leverage prevention jobs in any home. The bad news: it is one of the easiest DIY tasks to do badly. This guide covers both.",
      },
      { type: "h2", text: "When DIY caulk replacement is fine" },
      {
        type: "p",
        text: "If the existing caulk is just yellowed or stained but the substrate underneath is solid, recaulking is a perfectly DIY-able job for an afternoon. The skill is in the prep, not the application. Cut the old caulk out completely with a utility knife and a caulk-removal tool. Vacuum and wipe the joint with isopropyl alcohol. Let it dry fully. Lay painter's tape along both sides of the joint to define a clean line. Apply a kitchen-and-bath silicone (not latex, not 'silicone-blend') in a smooth bead. Tool the bead with a wet finger or a caulk-finishing tool. Pull the tape immediately while the silicone is still wet. Let it cure 24 hours before water hits it.",
      },
      { type: "h2", text: "When you should call instead" },
      {
        type: "p",
        text: "Recaulking is a band-aid on a problem that has already happened, not a fix for ongoing damage. There are specific conditions where the caulk is the symptom and the real repair is bigger.",
      },
      {
        type: "ul",
        items: [
          "The drywall behind the tile feels soft when pressed. Water has already gotten through.",
          "The grout between tiles is cracked or missing in the wet zone, not just the caulk joint.",
          "The tub or shower base flexes underfoot. The subfloor may already be compromised.",
          "There is a musty smell when the bathroom is closed up. Mold is likely already growing somewhere.",
          "You see staining on the ceiling of the room directly below.",
          "The caulk has been replaced before and failed again within a year.",
        ],
      },
      { type: "h2", text: "Why the wrong caulk causes the same problem twice" },
      {
        type: "p",
        text: "Latex caulk is cheaper and easier to apply but breaks down in the constant wet-dry cycle of a tub or shower. It works for trim and baseboards, not for the bath. 'Silicone-blend' caulk is a marketing label that often means mostly latex. The right material is 100% silicone, sold specifically as kitchen-and-bath caulk. It is harder to tool clean, but it lasts five times longer in a wet environment. Brody uses GE Sanitary or DAP Kwik Seal Ultra by default.",
      },
      {
        type: "callout",
        title: "The 'press the wall' test",
        text: "Before you recaulk, press firmly on the drywall just outside the tub or shower at three different heights. If it gives or feels softer than the wall a metre away, water has already gotten behind the surface. New caulk over hidden damage seals the moisture in and accelerates the rot. That is a call-Brody situation, not a DIY situation.",
      },
      { type: "h2", text: "How long does a proper recaulk take?" },
      {
        type: "p",
        text: "Brody allocates about 90 minutes per tub or shower for a thorough recaulk: removal of old caulk, full prep, tape, silicone application, tooling, tape pull, and cleanup. That includes the caulk for the tub-to-floor joint, the tub-to-tile joints on three sides, and around any fixtures or trim plates. The 24-hour cure window means the bathroom is usable for everything except a shower until the next morning.",
      },
      {
        type: "callout",
        title: "Bundle the bathroom checks",
        text: "Most caulk calls turn into a small bathroom audit: check the toilet base seal, tighten loose hardware, swap a leaky aerator, and confirm grout integrity. The $150 minimum applies to the visit, so a bundled bathroom refresh is far better value than booking individual fixes. Submit photos through the quote form and Brody scopes the full set in writing.",
      },
    ],
  },

  {
    slug: "popcorn-ceiling-removal-bc-considerations",
    title: "Popcorn Ceiling Removal in BC: What to Know Before You Start",
    excerpt:
      "Popcorn ceilings make BC homes feel dated, but removing them requires understanding the asbestos era, prep complexity, and which approach actually delivers a clean result.",
    date: "2026-07-12",
    readingMinutes: 7,
    hero: "/images/guide-drywall.webp",
    body: [
      {
        type: "p",
        text: "Popcorn ceilings, also called acoustic or stipple ceilings, were the standard in BC homes built between roughly 1960 and 1990. They hide imperfections in the drywall finish, dampen sound between floors, and were extremely fast for builders to spray on. They also collect dust, yellow with age, and read as instantly outdated to anyone walking through your home. Removing them is one of the highest-impact aesthetic upgrades in any older Lower Mainland house, but the project has more nuance than HGTV shows let on.",
      },
      { type: "h2", text: "1. Test for asbestos before you start" },
      {
        type: "p",
        text: "This is the non-negotiable first step in any BC home built before 1990. Popcorn texture from that era often contained chrysotile asbestos as a binder. Disturbing the texture without proper containment releases asbestos fibres into the air, where they can settle anywhere in the house. The test is simple: a small sample, sent to a certified lab, results back in 3 to 5 business days for around $40 to $80. If the test comes back positive, the removal must be done by a certified asbestos abatement contractor under WorkSafeBC rules. There is no DIY path on a positive test.",
      },
      {
        type: "callout",
        title: "BC homes built 1990 or later are usually safe to remove",
        text: "Asbestos in residential popcorn texture was effectively phased out by 1990 in Canada. Newer homes can be tested for peace of mind, but the test usually comes back clean. Older homes (and any home where you do not know the build year) must be tested before any disturbance.",
      },
      { type: "h2", text: "2. The two real removal methods" },
      {
        type: "p",
        text: "Once a clean asbestos test is in hand, the actual removal has two viable approaches. Each has a place, and the choice depends on your tolerance for mess versus cost.",
      },
      { type: "h3", text: "Wet scrape" },
      {
        type: "p",
        text: "The texture is misted with water (sometimes mixed with a little dish soap) until it softens, then scraped off the drywall with a wide putty knife. This is the messiest method, with wet popcorn material falling onto plastic sheeting throughout the room, but it is the most cost-effective. The cleanup is the largest part of the job. Best for empty rooms and bare floors, not occupied homes mid-renovation.",
      },
      { type: "h3", text: "Skim coat over" },
      {
        type: "p",
        text: "Instead of removing the texture, the entire ceiling is skim-coated with two or three thin layers of joint compound, sanded smooth between coats, and finished flat. This is faster, much less messy, and avoids the scraping step entirely. It also raises the ceiling surface by about 1/8 inch, which sometimes affects crown moulding or light fixture trim. Best for occupied homes, accessible ceilings, and homeowners who want a smooth finish without the demolition phase.",
      },
      { type: "h2", text: "3. The drywall underneath might need attention" },
      {
        type: "p",
        text: "Popcorn texture was often used to hide rough drywall finishing on the ceiling, because no one would ever see it under the texture. Once the texture is removed, the underlying ceiling can show seam lines, screw pops, and the original drywall finishing quality. Skim-coat-over avoids this entirely. Wet-scrape almost always reveals some level of remediation work to take the bare drywall to a paint-ready finish. Brody flags this in the quote so the cost includes the finish work, not just the removal.",
      },
      { type: "h2", text: "4. Painting the ceiling after" },
      {
        type: "p",
        text: "A smooth ceiling shows imperfections that texture used to hide, so the paint choice matters more after a popcorn removal than before. A flat ceiling paint, in a true white, sprayed in two coats, is the cleanest finished look. Roller marks on a smooth ceiling are visible for the life of the room. Brody sprays new ceiling finishes by default unless the room is small enough that the masking time outweighs the spray benefit.",
      },
      { type: "h2", text: "5. Cost drivers" },
      {
        type: "ul",
        items: [
          "Square footage of ceiling, both rooms and total levels.",
          "Wet-scrape vs skim-coat-over (wet scrape is messier but often faster on simple ceilings).",
          "Condition of the underlying drywall after removal.",
          "Whether the ceiling has stains, water spots, or repairs that need to be addressed before finish.",
          "Whether the room is occupied or empty (occupied rooms need more containment).",
          "Sprayed vs rolled paint finish.",
        ],
      },
      {
        type: "callout",
        title: "Always test first",
        text: "If your home was built before 1990 and you are even thinking about popcorn removal, get the asbestos test before any other planning. The test is inexpensive, takes a week, and the result determines the entire approach. Do not let any contractor remove popcorn texture from a pre-1990 BC home without showing you the negative test report.",
      },
      {
        type: "callout",
        title: "Get a popcorn-removal estimate",
        text: "Send photos of the ceilings, the build year of the house, and any test results you have through the quote form at summit-handyman.ca/quote. Brody replies within 24 hours with a written estimate, the recommended method for your specific ceiling, and a clear timeline including any drywall finish work after removal.",
      },
    ],
  },

  {
    slug: "fall-home-maintenance-checklist-lower-mainland",
    title: "Fall Home Maintenance Checklist: Lower Mainland Edition",
    excerpt:
      "The Pacific Northwest fall is short and the rain comes hard. This is the September-to-October checklist that catches the small problems before BC winter turns them into emergencies.",
    date: "2026-07-19",
    readingMinutes: 6,
    hero: "/images/guide-small-repairs.webp",
    body: [
      {
        type: "p",
        text: "Lower Mainland weather has two seasons that matter for home maintenance: dry and wet. The dry season runs roughly May through August, the wet season is September through April, and the transition lands in mid-September with very little warning. Once the rain settles in, every problem in your house gets harder to diagnose, more expensive to fix, and more dangerous to ignore. The two-week window between Labour Day and the first atmospheric river is the most useful maintenance window in BC, and most homeowners miss it.",
      },
      {
        type: "p",
        text: "This checklist is built around what actually fails on Lower Mainland homes when fall rain hits. It is in priority order: do the structural-protection items first, then the comfort items.",
      },
      { type: "h2", text: "Phase 1: keep water on the outside (early September)" },
      {
        type: "ul",
        items: [
          "Inspect all exterior caulk on trim, windows, and door frames. Re-caulk any joint that is cracked or pulling away. Failed caulk is the most common entry point for water in BC homes.",
          "Check weather stripping on every exterior door. If it is compressed, torn, or missing, replace it now while glue and caulk still cure quickly in dry weather.",
          "Walk the deck. Tighten any loose lag bolts or fasteners. Replace any board that is soft or rotted before winter freeze-thaw cycles widen the cracks.",
          "Walk the fence line. Reset any post that is leaning, replace any panel showing water damage, and re-stain or re-paint exposed wood before the rain settles in.",
          "Confirm the exterior tap shut-off valves work from inside. Drain the lines after the first close. A burst hose bib in February is one of the worst BC home problems.",
          "Trim back overhanging branches that touch the roof, the siding, or the gutters. Every leaf they drop ends up where it does not belong.",
        ],
      },
      { type: "h2", text: "Phase 2: prep the interior for sealed-up months (mid September)" },
      {
        type: "p",
        text: "Once the rain forces you to close up the house, indoor air quality and comfort matter more. These are the small upgrades that change how the home feels through October to April.",
      },
      {
        type: "ul",
        items: [
          "Replace the furnace filter. Then add 'replace furnace filter' to a calendar reminder for every three months.",
          "Reverse ceiling fan direction to clockwise. This pushes warm air down the walls instead of swirling it at the ceiling.",
          "Test every smoke detector and CO detector. Replace batteries on any unit older than a year. Replace the unit entirely on any over 10 years old.",
          "Check window locks and weather stripping from inside. A drafty window costs visible heating dollars over a BC winter.",
          "Caulk any baseboard or trim gap where you can see daylight or feel a draft.",
          "Check the attic insulation depth (R-50 minimum for BC code, more is better). If the previous owner cut corners, fall is when you would notice.",
        ],
      },
      { type: "h2", text: "Phase 3: comfort and aesthetics (late September)" },
      {
        type: "p",
        text: "Once the structural and comfort work is done, the cosmetic round is what makes the house feel intentional through the dark months. None of these are urgent, but they all reward the homeowner who has the rest of the list under control.",
      },
      {
        type: "ul",
        items: [
          "Touch up exterior paint on the front door and trim before the wet season makes it harder to cure.",
          "Pressure wash the deck, patio, and driveway one last time before fall debris arrives.",
          "Drain and store outdoor furniture cushions in a dry indoor space.",
          "Stage indoor lighting for the early-dark season. Add lamps in corners that go gloomy after 4pm in November.",
          "Tighten and clean every cabinet hinge and pull while you are doing the rest of the audit.",
        ],
      },
      {
        type: "callout",
        title: "Why timing matters more than the list",
        text: "The list is not the unique part. Every home maintenance article has a similar list. The unique part is doing it BEFORE the rain settles in. Caulk, weather stripping, paint touch-ups, and exterior repairs all need at least 24 hours of dry weather to cure. Once October hits, those windows shrink and the work gets harder and more expensive.",
      },
      {
        type: "callout",
        title: "Bundle the fall checklist",
        text: "Most homeowners can handle a few items on this list themselves. The rest, especially the exterior caulking, weather stripping, and small carpentry items, are most efficiently bundled into a single Summit Handyman visit before the rain arrives. Submit the list through the quote form and Brody replies in writing within 24 hours.",
      },
    ],
  },

  {
    slug: "home-inspection-repair-requests-bc-sellers",
    title: "Home Inspection Repair Requests in BC: A Seller's Decision Guide",
    excerpt:
      "When the buyer's inspection comes back with a list, the next 48 hours decide whether the deal closes smoothly. A practical guide to which repairs to handle, push back on, or credit out.",
    date: "2026-07-26",
    readingMinutes: 6,
    hero: "/images/guide-pre-listing-repairs.webp",
    body: [
      {
        type: "p",
        text: "Home inspection reports in BC tend to land at the worst possible moment. The accepted offer is days old, the moving plans are already in motion, and a 35-page document arrives with a section called 'Items Requiring Attention' that lists 14 things you did not know about your own house. The first instinct is to either fix everything to avoid losing the deal, or to refuse everything to avoid losing money. The right answer is almost always between those two extremes, and the difference between handling the request well and badly is usually the speed and clarity of the response.",
      },
      { type: "h2", text: "1. Triage the list into three categories" },
      {
        type: "p",
        text: "Not every item on an inspection report deserves the same response. Most reports lump cosmetic notes, recommended improvements, and actual safety items into one section, which is why they look intimidating. Sort the list before responding to anyone.",
      },
      { type: "h3", text: "Category A: must address" },
      {
        type: "p",
        text: "Anything safety-related, anything that affects the structural or operating systems of the house, and anything the inspector flagged as 'requires immediate attention.' Examples: failed GFCI outlets, missing handrails on basement stairs, a roof leak, a broken smoke detector, a furnace that does not light. These are non-negotiable in any reasonable buyer-seller relationship and refusing them risks the deal.",
      },
      { type: "h3", text: "Category B: reasonable to negotiate" },
      {
        type: "p",
        text: "Items that are real but not urgent: a slow-draining sink, dated electrical (knob-and-tube in a section), older windows, a furnace that is functional but old. The right move here is usually a credit at closing rather than a repair, because the buyer can choose their own contractor and timeline after possession.",
      },
      { type: "h3", text: "Category C: cosmetic or wrongly flagged" },
      {
        type: "p",
        text: "Anything cosmetic, items the inspector got wrong, or items that were disclosed in the listing. Examples: 'wall has a small crack' (almost every BC home has settling cracks), 'paint is dated' (subjective), 'bathroom fan is older' (still works). These are the items to politely decline, with a written explanation and any supporting documentation.",
      },
      { type: "h2", text: "2. Speed matters more than perfection" },
      {
        type: "p",
        text: "The longer the inspection request sits without a response, the more room there is for the buyer's anxiety to grow into a re-negotiation. A clear, written response within 48 hours signals that the seller is reasonable and confident. The response should address each item by category, propose a solution (repair, credit, or decline with reason), and offer documentation where it helps.",
      },
      { type: "h2", text: "3. Repair vs credit: when each makes sense" },
      {
        type: "p",
        text: "Repairs are usually better when the work is small, fast, and visible at the final walk-through (a fresh GFCI outlet, a tightened handrail, a smoke detector swap). They show the buyer the house is being cared for and remove the item from their post-possession checklist.",
      },
      {
        type: "p",
        text: "Credits are usually better when the work is larger, the buyer might have specific preferences, or the timing is tight. A $1,500 credit at closing for a furnace replacement avoids the seller scheduling a contractor under deadline pressure and lets the buyer pick their own timing and unit.",
      },
      {
        type: "callout",
        title: "The repair list usually fits one Summit Handyman visit",
        text: "The Category A items on most BC inspection reports add up to a single bundled handyman visit: GFCI outlets, smoke detectors, loose handrails, weather stripping, a few faucet repairs, anchor patches. Brody specializes in turning inspection request lists around fast, with photo documentation that the seller can share with the buyer's agent.",
      },
      { type: "h2", text: "4. Document everything you fix" },
      {
        type: "p",
        text: "Photo documentation matters here in a way it does not in regular handyman work. The buyer is being asked to trust that the work was actually done, by a real tradesperson, to a reasonable standard. A before-and-after photo of each repaired item, attached to a clear itemized invoice, eliminates the awkward 'show me' moment at the final walk-through and accelerates the close.",
      },
      {
        type: "callout",
        title: "Get the inspection list quoted fast",
        text: "Forward the inspection report items (or a list with photos) through the quote form at summit-handyman.ca/quote. Brody triages the list, flags anything outside handyman scope, and replies in writing within 24 hours with a single estimate for the bundled work plus a documentation plan that satisfies the buyer's agent.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
