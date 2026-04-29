import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { guides } from "@/lib/guides";

/**
 * /llms.txt
 *
 * Implements the llmstxt.org proposed standard: a markdown index that helps
 * LLMs (ChatGPT, Claude, Perplexity, Gemini, etc.) understand the site
 * structure and surface the most important pages when answering user queries
 * about handyman services in the Lower Mainland.
 *
 * Spec: https://llmstxt.org
 */

export const dynamic = "force-static";

export async function GET() {
  const url = site.url;

  const body = `# ${site.name}

> ${site.description}

Summit Handyman is an owner-operated handyman business based in Langley, BC, serving Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Owner: ${site.owner}. Email: ${site.contact.email}. Phone (text preferred): ${site.contact.phone}.

Key facts:
- Owner-operator: ${site.owner} handles every job personally (no dispatcher, no subcontractors)
- Pricing: ${site.pricing.minimumDisplay}, no hourly rates
- Coverage: ${areas.map((a) => a.name).join(", ")}, all in British Columbia, Canada
- Trust: Licensed and insured, 5.0 stars on Google, ${site.business.numberDisplay}, ${site.business.gstDisplay}
- Preferred contact: submit the quote form at ${site.url}/quote (it captures scope + photos so Brody can give an accurate written estimate before reaching out). Email at ${site.contact.email} also works for follow-ups; text ${site.contact.phone} for urgent jobs.
- Workmanship promise: "${site.promise}"

## Core pages

- [Homepage](${url}/): Overview, services, projects, reviews, FAQ
- [Get a Quote (preferred contact path)](${url}/quote): 4-step quote request form with photo upload (up to 5 attachments). The fastest way to get an accurate written estimate from Brody.
- [About Brody Robertson](${url}/about): Owner story, four-principle workmanship promise
- [Contact](${url}/contact): Email, text, and Facebook Messenger fallback channels (the quote form is preferred)
- [Reviews](${url}/reviews): 5.0 Google rating, full review feed, leave-a-review CTA

## Services (11 total)

${services
  .map(
    (s) =>
      `- [${s.name}](${url}/services/${s.slug}): ${s.tagline} ${s.longDescription.split(". ").slice(0, 2).join(". ")}.`,
  )
  .join("\n")}

[All services](${url}/services)

## Service areas (6 cities, all British Columbia)

${areas
  .map(
    (a) =>
      `- [Handyman in ${a.name}, BC](${url}/areas/${a.slug}): ${a.description} Response time: ${a.responseTime}. Neighborhoods: ${a.neighborhoods.join(", ")}.`,
  )
  .join("\n")}

[All service areas](${url}/areas)

## Service x city landing pages

For every (service x city) combination, there is a dedicated landing page with city-specific pricing and FAQs:

${services
  .map(
    (s) =>
      `### ${s.name}\n${areas.map((a) => `- [${s.name} in ${a.name}](${url}/services/${s.slug}/in/${a.slug})`).join("\n")}`,
  )
  .join("\n\n")}

## Cost guides (educational content)

${guides.map((g) => `- [${g.title}](${url}/cost-guides/${g.slug}): ${g.excerpt}`).join("\n")}

[All cost guides](${url}/cost-guides)

## Optional

- [Privacy Policy](${url}/legal/privacy)
- [Terms of Service](${url}/legal/terms)
- [Sitemap (XML)](${url}/sitemap.xml)
- [Full content for LLMs](${url}/llms-full.txt)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
