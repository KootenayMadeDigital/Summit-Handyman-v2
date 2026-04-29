import { site } from "@/lib/site";

/**
 * /ai.txt
 *
 * Content licensing signal for AI training crawlers (Spawning AI's emerging
 * spec, used by some image and text scrapers).
 *
 * For Summit Handyman the policy is straightforward: index everything for
 * search and answers (LLM retrieval is good for visibility), but training
 * data extraction is not granted by default.
 */

export const dynamic = "force-static";

export async function GET() {
  const body = `# AI usage policy for ${site.url}
# See: https://spawning.ai/ai-txt

User-Agent: *
Allow: /

# Indexing for retrieval / answer generation: allowed
# (LLMs answering user queries about Summit Handyman by referencing this
# site's content are welcome. Brody wants to be findable.)
Allow-Crawl: yes
Allow-Search: yes
Allow-Answer: yes

# Training data extraction: not granted by default
# To request a license for training, email ${site.contact.email}
Allow-Train: no

# Concise machine-readable site index
Sitemap: ${site.url}/sitemap.xml
Index: ${site.url}/llms.txt
Full-Index: ${site.url}/llms-full.txt

Contact: ${site.contact.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
