import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Handyman in Langley, Surrey & Lower Mainland BC`,
    template: `%s | ${site.name}`,
  },
  description:
    "One-handyman service from Brody Robertson for Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale. Licensed and insured. $150 minimum per job. Written estimates within 24 hours.",
  keywords: [
    "handyman Langley",
    "handyman Surrey",
    "handyman White Rock",
    "handyman Abbotsford",
    "handyman Aldergrove",
    "handyman Cloverdale",
    "handyman near me Langley",
    "handyman near me Surrey",
    "owner operated handyman Langley",
    "licensed handyman Langley",
    "insured handyman Surrey",
    "Lower Mainland handyman",
    "drywall repair Langley",
    "drywall repair Surrey",
    "painting Langley",
    "painting Surrey",
    "TV mounting Langley",
    "TV mounting Surrey",
    "deck refinishing BC",
    "fence repair BC",
    "tile install Langley",
    "kitchen backsplash install Surrey",
    "property management handyman BC",
    "tenant turnover repairs Surrey",
    "Brody Robertson handyman",
    "Summit Handyman BC",
    "Summit Handyman Brody",
  ],
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.legalName,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: `${site.name}. ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.webp",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c10" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Inline theme init. runs before paint to avoid flash. Default = dark.
 * Reads explicit user preference from localStorage; if absent, defaults to dark
 * (NOT system preference. Brody's brand identity is dark-first).
 */
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('summit-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        {/* LLM-friendly site indexes (llmstxt.org spec) */}
        <link
          rel="alternate"
          type="text/markdown"
          title="LLM site index"
          href="/llms.txt"
        />
        <link
          rel="alternate"
          type="text/markdown"
          title="LLM full content"
          href="/llms-full.txt"
        />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&f[]=switzer@300,400,500,600,700&f[]=sentient@400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&f[]=switzer@300,400,500,600,700&f[]=sentient@400,500,700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-summit-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-summit-black"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileStickyBar />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
