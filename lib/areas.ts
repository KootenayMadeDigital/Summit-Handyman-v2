export type Area = {
  slug: string;
  name: string;
  province: "BC";
  postalCodePrefixes: string[];
  description: string;
  neighborhoods: string[];
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
    neighborhoods: [
      "Walnut Grove",
      "Willoughby",
      "Murrayville",
      "Brookswood",
      "Fort Langley",
      "Aldergrove",
      "Langley City",
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
      "Full service across Surrey — from South Surrey townhomes to Cloverdale family homes and Guildford strata properties.",
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
    responseTime: "Within 24-48 hours",
    geo: { lat: 49.1913, lng: -122.849 },
  },
  {
    slug: "white-rock",
    name: "White Rock",
    province: "BC",
    postalCodePrefixes: ["V4A", "V4B"],
    description:
      "Bluff-side homes, ocean-air weathering, and the unique maintenance needs of White Rock and South Surrey waterfront properties.",
    neighborhoods: [
      "East Beach",
      "West Beach",
      "Hillside",
      "Five Corners",
      "Centennial Park",
      "Marine Drive",
    ],
    responseTime: "Within 24-48 hours",
    geo: { lat: 49.0254, lng: -122.8027 },
  },
  {
    slug: "aldergrove",
    name: "Aldergrove",
    province: "BC",
    postalCodePrefixes: ["V4W"],
    description:
      "Acreage, country properties, and family homes across Aldergrove and the Township of Langley's east side.",
    neighborhoods: ["Aldergrove Town Centre", "Otter District", "County Line"],
    responseTime: "Same day or next day",
    geo: { lat: 49.0563, lng: -122.4711 },
  },
  {
    slug: "abbotsford",
    name: "Abbotsford",
    province: "BC",
    postalCodePrefixes: ["V2S", "V2T", "V3G", "V4X"],
    description:
      "Serving Abbotsford homeowners and property managers from the East Hill to Clearbrook to Auguston.",
    neighborhoods: [
      "Clearbrook",
      "Abbotsford East / East Hill",
      "Mount Lehman",
      "Auguston",
      "Sumas Mountain",
      "Matsqui",
      "Bradner",
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
      "Cloverdale family homes, townhomes, and rural properties — from the historic core to Clayton Heights.",
    neighborhoods: [
      "Cloverdale Town Centre",
      "Clayton Heights",
      "West Cloverdale",
      "Hazelwood",
    ],
    responseTime: "Within 24-48 hours",
    geo: { lat: 49.105, lng: -122.7227 },
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
