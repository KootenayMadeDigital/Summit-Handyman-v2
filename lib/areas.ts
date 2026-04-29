export type Area = {
  slug: string;
  name: string;
  province: "BC";
  postalCodePrefixes: string[];
  description: string;
  longDescription: string;
  neighborhoods: string[];
  /** Common home types in this area, used to add local color and SEO keywords. */
  homeTypes: string[];
  /** Local landmarks for SEO and copy reference. */
  landmarks: string[];
  responseTime: string;
  geo: { lat: number; lng: number };
};

export const areas: Area[] = [
  {
    slug: "langley",
    name: "Langley",
    province: "BC",
    postalCodePrefixes: ["V1M", "V2Y", "V2Z", "V3A", "V4W"],
    description:
      "Home base. Same-day response possible for most jobs in Langley City and Langley Township.",
    longDescription:
      "Langley is Brody's home base, which means same-day or next-day response is standard for most repairs. Summit Handyman serves both Langley City and Langley Township, from older Walnut Grove single-family homes to newer Willoughby townhouse complexes, established Murrayville bungalows, and the rural acreages around Fort Langley and Brookswood. Whether you're a homeowner with a list of small fixes or a property manager needing tenant turnover work, the response is fast, the work is documented, and the same Brody Robertson handles every job.",
    neighborhoods: [
      "Walnut Grove",
      "Willoughby",
      "Murrayville",
      "Brookswood",
      "Fort Langley",
      "Aldergrove",
      "Langley City",
    ],
    homeTypes: [
      "Single-family detached",
      "Townhouse complexes",
      "Acreages and rural properties",
      "Strata-managed condos",
    ],
    landmarks: [
      "Fort Langley Historic Site",
      "Willowbrook Shopping Centre",
      "Langley Events Centre",
      "Trinity Western University",
    ],
    responseTime: "Same day or next day",
    geo: { lat: 49.1044, lng: -122.6603 },
  },
  {
    slug: "surrey",
    name: "Surrey",
    province: "BC",
    postalCodePrefixes: ["V3R", "V3S", "V3T", "V3V", "V3W", "V3X", "V4N", "V4P"],
    description:
      "Full service across Surrey, from South Surrey townhomes to Cloverdale family homes and Guildford strata properties.",
    longDescription:
      "Surrey is Brody's biggest service area outside of Langley. Summit Handyman covers all of Surrey, including South Surrey townhomes near Crescent Beach, Cloverdale family homes, Fleetwood older builds, Guildford strata towers, Newton, North Surrey, and the growing Panorama Ridge neighborhood. Property managers across Surrey use Summit Handyman regularly for tenant turnovers, common-area repairs, and emergency mobilization. Response time is within 24 to 48 hours for most jobs, with same-day possible for urgent issues.",
    neighborhoods: [
      "South Surrey",
      "Cloverdale",
      "Fleetwood",
      "Guildford",
      "Newton",
      "Whalley",
      "North Surrey",
      "Panorama Ridge",
    ],
    homeTypes: [
      "Townhouse complexes",
      "Single-family detached",
      "Strata high-rise condos",
      "Older character homes",
    ],
    landmarks: [
      "Guildford Town Centre",
      "Crescent Beach",
      "Surrey Memorial Hospital",
      "SFU Surrey Campus",
    ],
    responseTime: "Within 24 to 48 hours",
    geo: { lat: 49.1913, lng: -122.849 },
  },
  {
    slug: "white-rock",
    name: "White Rock",
    province: "BC",
    postalCodePrefixes: ["V4A", "V4B"],
    description:
      "Bluff-side homes, ocean-air weathering, and the maintenance needs of White Rock and South Surrey waterfront properties.",
    longDescription:
      "White Rock homes face a unique combination of ocean air, salt spray, and steep bluff geography that accelerates exterior wear. Summit Handyman serves White Rock from East Beach through West Beach, Hillside, Five Corners, Centennial Park, and along Marine Drive. Pressure washing, gutter maintenance, fence and deck refinishing, and exterior caulking are some of the most common bookings, since White Rock properties typically need exterior maintenance 30 to 50 percent more often than inland Lower Mainland homes.",
    neighborhoods: [
      "East Beach",
      "West Beach",
      "Hillside",
      "Five Corners",
      "Centennial Park",
      "Marine Drive",
    ],
    homeTypes: [
      "Bluff-side single-family",
      "Beach-area condos",
      "Hillside detached",
      "Older character homes",
    ],
    landmarks: [
      "White Rock Pier",
      "Semiahmoo Bay",
      "White Rock Promenade",
      "Peace Arch Park",
    ],
    responseTime: "Within 24 to 48 hours",
    geo: { lat: 49.0254, lng: -122.8027 },
  },
  {
    slug: "aldergrove",
    name: "Aldergrove",
    province: "BC",
    postalCodePrefixes: ["V4W"],
    description:
      "Acreage, country properties, and family homes across Aldergrove and the Township of Langley's east side.",
    longDescription:
      "Aldergrove sits on the east side of Langley Township and includes everything from suburban family homes around the town centre to working acreages and country properties stretching toward the County Line. Summit Handyman covers Aldergrove with same-day or next-day response, since it neighbors Brody's Langley home base. Acreage owners commonly book gutter maintenance, fence and deck staining, and pressure washing, while family homes near Aldergrove Town Centre lean toward interior repairs and painting.",
    neighborhoods: ["Aldergrove Town Centre", "Otter District", "County Line"],
    homeTypes: [
      "Working acreages",
      "Country properties",
      "Single-family detached",
      "Mobile and modular homes",
    ],
    landmarks: [
      "Aldergrove Lake Regional Park",
      "Greater Vancouver Zoo",
      "Aldergrove Athletic Park",
    ],
    responseTime: "Same day or next day",
    geo: { lat: 49.0563, lng: -122.4711 },
  },
  {
    slug: "abbotsford",
    name: "Abbotsford",
    province: "BC",
    postalCodePrefixes: ["V2S", "V2T", "V3G", "V4X"],
    description:
      "Serving Abbotsford homeowners and property managers from East Hill to Clearbrook to Auguston.",
    longDescription:
      "Abbotsford is the eastern edge of Summit Handyman's service area and includes a mix of established neighborhoods (Clearbrook, Abbotsford East / East Hill), newer master-planned communities (Auguston), rural acreages on Sumas Mountain and in Matsqui, and the agricultural Bradner area. Response time is typically within 48 hours, with bundled jobs preferred since the drive is longer than the closer cities. Property managers across Abbotsford regularly book Summit Handyman for tenant turnovers, painting, drywall, and seasonal exterior work.",
    neighborhoods: [
      "Clearbrook",
      "Abbotsford East / East Hill",
      "Mount Lehman",
      "Auguston",
      "Sumas Mountain",
      "Matsqui",
      "Bradner",
    ],
    homeTypes: [
      "Master-planned community homes",
      "Established detached",
      "Working acreages",
      "Strata-managed townhomes",
    ],
    landmarks: [
      "Sevenoaks Shopping Centre",
      "Mill Lake Park",
      "Abbotsford Centre",
      "University of the Fraser Valley",
    ],
    responseTime: "Within 48 hours",
    geo: { lat: 49.0504, lng: -122.3045 },
  },
  {
    slug: "cloverdale",
    name: "Cloverdale",
    province: "BC",
    postalCodePrefixes: ["V3S"],
    description:
      "Cloverdale family homes, townhomes, and rural properties from the historic core to Clayton Heights.",
    longDescription:
      "Cloverdale blends a historic small-town core with rapidly growing newer neighborhoods like Clayton Heights. Summit Handyman serves all of Cloverdale, including the older detached homes near Cloverdale Town Centre, the dense townhouse complexes through Clayton Heights, West Cloverdale family homes, and the rural Hazelwood properties on the south side. Response time is within 24 to 48 hours, and most Cloverdale bookings are interior repair lists, painting, and seasonal exterior maintenance.",
    neighborhoods: [
      "Cloverdale Town Centre",
      "Clayton Heights",
      "West Cloverdale",
      "Hazelwood",
    ],
    homeTypes: [
      "Townhouse complexes",
      "Older single-family detached",
      "Newer master-planned",
      "Rural acreages",
    ],
    landmarks: [
      "Cloverdale Rodeo grounds",
      "Cloverdale Athletic Park",
      "Surrey Museum",
      "Clayton Heights Athletic Park",
    ],
    responseTime: "Within 24 to 48 hours",
    geo: { lat: 49.105, lng: -122.7227 },
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
