import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt
 *
 * Standard search engine rules + explicit allow rules for major AI assistant
 * crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). Brody
 * wants Summit Handyman to be both Google-rankable AND surfaced when people
 * ask ChatGPT / Claude / Perplexity for a handyman in the Lower Mainland.
 *
 * The /api endpoints stay disallowed (no need to crawl review JSON or quote
 * form internals). The /llms.txt and /llms-full.txt files are surfaced via
 * Sitemap directive so AI crawlers can find them.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default catch-all for traditional search engines.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // OpenAI ChatGPT browsing + GPT crawler
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Anthropic Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/"],
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Perplexity-User",
        allow: "/",
        disallow: ["/api/"],
      },
      // Google AI Overviews / Gemini
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      // Apple Intelligence
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      // Common Crawl (training data for many open-source LLMs)
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // You.com / Bing AI
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Brave Search AI
      {
        userAgent: "BraveSearch",
        allow: "/",
        disallow: ["/api/"],
      },
      // Mistral / DuckDuckGo / others
      {
        userAgent: "MistralAI-User",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "DuckAssistBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Cohere
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/"],
      },
      // Meta Llama / Facebook external hit
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/api/"],
      },
      // Bytedance / TikTok search (used by Doubao AI)
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      `${site.url}/sitemap.xml`,
      // Surface our LLM-friendly indexes so AI crawlers find them.
      `${site.url}/llms.txt`,
      `${site.url}/llms-full.txt`,
    ],
    host: site.url,
  };
}
