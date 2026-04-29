import { NextResponse } from "next/server";
import { placeholderReviews, aggregateRating, type Review } from "@/lib/reviews";

export const runtime = "nodejs";
// Revalidate the live feed once per hour
export const revalidate = 3600;

type TrustindexReview = {
  name?: string;
  reviewer?: { name?: string };
  rating?: number;
  stars?: number;
  text?: string;
  comment?: string;
  date?: string;
  created_at?: string;
  source?: string;
  city?: string;
  location?: string;
};

type TrustindexResponse = {
  reviews?: TrustindexReview[];
  aggregateRating?: number;
  totalReviews?: number;
  rating?: number;
  count?: number;
};

/**
 * Pull live reviews from Trustindex if a feed key/URL is configured.
 * Falls back to placeholder set when env is missing or fetch fails.
 *
 * Env vars (all optional):
 *  - TRUSTINDEX_FEED_URL: full JSON endpoint URL provided by Trustindex
 *  - TRUSTINDEX_API_KEY: bearer token if your endpoint requires it
 */
export async function GET() {
  const feedUrl = process.env.TRUSTINDEX_FEED_URL;
  const apiKey = process.env.TRUSTINDEX_API_KEY;

  if (!feedUrl) {
    return NextResponse.json(
      {
        reviews: placeholderReviews,
        aggregate: aggregateRating,
        source: "placeholder",
      },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
    );
  }

  try {
    const headers: Record<string, string> = { Accept: "application/json" };
    if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

    const resp = await fetch(feedUrl, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!resp.ok) throw new Error(`Trustindex returned ${resp.status}`);

    const data = (await resp.json()) as TrustindexResponse;
    const rawList = data.reviews ?? [];

    const reviews: Review[] = rawList.map((r) => ({
      author: r.reviewer?.name ?? r.name ?? "Anonymous",
      city: r.city ?? r.location ?? "Lower Mainland",
      rating: typeof r.rating === "number" ? r.rating : (r.stars ?? 5),
      date: (r.date ?? r.created_at ?? new Date().toISOString()).slice(0, 10),
      body: r.text ?? r.comment ?? "",
      source: (r.source as Review["source"]) ?? "trustindex",
    }));

    const aggregate = {
      rating: data.aggregateRating ?? data.rating ?? 5.0,
      reviewCount: data.totalReviews ?? data.count ?? reviews.length,
    };

    return NextResponse.json(
      { reviews, aggregate, source: "trustindex" },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
    );
  } catch (e) {
    console.error("Trustindex fetch failed", e);
    return NextResponse.json({
      reviews: placeholderReviews,
      aggregate: aggregateRating,
      source: "placeholder-fallback",
    });
  }
}
