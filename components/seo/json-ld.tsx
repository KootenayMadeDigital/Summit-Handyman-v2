import { site } from "@/lib/site";
import { faqs } from "@/lib/faq";
import { areas } from "@/lib/areas";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        legalName: site.legalName,
        image: `${site.url}/images/logo.webp`,
        logo: `${site.url}/images/logo.webp`,
        url: site.url,
        telephone: site.contact.phone,
        email: site.contact.email,
        priceRange: "$$",
        founder: { "@type": "Person", name: site.owner },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Langley",
          addressRegion: "BC",
          addressCountry: "CA",
        },
        areaServed: areas.map((a) => ({
          "@type": "City",
          name: a.name,
          containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" },
        })),
        sameAs: [site.social.facebook.url, site.social.instagram.url],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "5",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#business` },
        inLanguage: "en-CA",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
