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
      "Serving Langley City and Langley Township with owner-operated repairs, clear estimates, and documented work.",
    longDescription:
      "Summit Handyman serves both Langley City and Langley Township, from older Walnut Grove single-family homes to newer Willoughby townhouse complexes, established Murrayville bungalows, and the rural acreages around Fort Langley and Brookswood. Whether you are a homeowner with a list of small fixes or a property manager needing tenant turnover work, the quote process is clear, the work is documented, and the same Brody Robertson handles every job.",
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
    responseTime: "Within 24 hours",
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
      "Surrey is one of Summit Handyman's core service areas. Summit covers South Surrey townhomes near Crescent Beach, Cloverdale family homes, Fleetwood older builds, Guildford strata towers, Newton, North Surrey, and the growing Panorama Ridge neighborhood. Property managers across Surrey can use Summit Handyman for tenant turnovers, common-area repairs, and documented unit work, with the same quote process and owner-operated standard as every other city served.",
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
    responseTime: "Within 24 hours",
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
      "Summit Handyman serves White Rock from East Beach through West Beach, Hillside, Five Corners, Centennial Park, and along Marine Drive. White Rock homes often bring exterior maintenance, gutter work, fence and deck upkeep, pressure washing, and small repair lists shaped by coastal weather and older hillside properties.",
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
    responseTime: "Within 24 hours",
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
      "Aldergrove sits on the east side of Langley Township and includes everything from suburban family homes around the town centre to working acreages and country properties stretching toward the County Line. Acreage owners commonly book gutter maintenance, fence and deck staining, and pressure washing, while family homes near Aldergrove Town Centre lean toward interior repairs and painting.",
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
    responseTime: "Within 24 hours",
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
      "Abbotsford is part of Summit Handyman's service area and includes a mix of established neighborhoods like Clearbrook and Abbotsford East, newer master-planned communities like Auguston, rural acreages on Sumas Mountain and in Matsqui, and the agricultural Bradner area. Homeowners and property managers can book Summit for tenant turnovers, painting, drywall, repair lists, and seasonal exterior work.",
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
    responseTime: "Within 24 hours",
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
      "Cloverdale blends a historic small-town core with rapidly growing newer neighborhoods like Clayton Heights. Summit Handyman serves all of Cloverdale, including the older detached homes near Cloverdale Town Centre, the dense townhouse complexes through Clayton Heights, West Cloverdale family homes, and the rural Hazelwood properties on the south side. Common Cloverdale bookings include interior repair lists, painting, mounting, doors, trim, and seasonal exterior maintenance.",
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
    responseTime: "Within 24 hours",
    geo: { lat: 49.105, lng: -122.7227 },
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
