import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { site } from "@/lib/site";
import { ogImage, staticOg } from "@/lib/og";

const pageOgDescription = `How ${site.name} collects, uses, stores, and protects customer information for quote requests, photos, analytics, reviews, and website services.`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: pageOgDescription,
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Summit Handyman privacy policy",
    description: pageOgDescription,
    type: "website",
    images: ogImage(staticOg("privacy"), "Summit Handyman privacy policy"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Handyman privacy policy",
    description: pageOgDescription,
    images: [staticOg("privacy")],
  },
};

const sections = [
  {
    title: "Who this policy covers",
    body: [
      `${site.legalName} is an owner-operated handyman business based in British Columbia and operated by ${site.owner}. This policy explains how information is handled when you visit ${site.url}, submit a quote request, contact Brody, review the business, or use the website.`,
      "This policy is written for customers, homeowners, tenants, property managers, strata representatives, and visitors using the site from Canada or elsewhere.",
    ],
  },
  {
    title: "Information you choose to send",
    body: [
      "When you submit the quote form or contact Brody, the site may collect your name, email address, phone number, preferred contact method, city or service area, postal code if provided, service type, timing preference, project description, and photos or files you upload.",
      "Please do not submit sensitive personal information that is not needed for the repair request. If a photo shows private documents, faces, licence plates, security codes, valuables, or anything unrelated to the job, crop or remove it before uploading when possible.",
    ],
  },
  {
    title: "Information collected automatically",
    body: [
      "The website may collect basic technical information such as pages visited, device type, browser, approximate location derived from IP address, referring page, interaction events, and performance data. This helps keep the website fast, useful, secure, and findable in search.",
      "The site uses Google Analytics 4 to understand aggregate website usage. Google may set analytics cookies or similar identifiers depending on your browser and privacy settings. Summit Handyman does not use third-party advertising pixels for remarketing or behavioural ad targeting.",
    ],
  },
  {
    title: "How your information is used",
    body: [
      "Information is used to review your request, prepare or clarify an estimate, schedule work, communicate about the job, document agreed scope, send invoices or records, respond to questions, prevent spam or abuse, improve the website, and meet legal, insurance, tax, and business-record obligations.",
      "Photos and project details are used to understand the work before Brody replies. They may also be kept with the job record so the agreed scope, condition, or completed work can be verified later.",
    ],
  },
  {
    title: "Quote form delivery and service providers",
    body: [
      `Quote form submissions are sent to ${site.contact.email}. The website may use service providers such as Vercel for hosting, Resend or another email delivery provider for form delivery, Google Analytics for aggregate analytics, Trustindex or Google for public reviews, and spam or security tooling needed to keep the site working.`,
      "These providers may process information only as needed to provide their services. Some providers may store or process data outside British Columbia or Canada, which means it may be subject to the laws of that jurisdiction.",
    ],
  },
  {
    title: "Sharing and selling",
    body: [
      "Summit Handyman does not sell, rent, or trade customer contact information. Information may be shared only when needed to provide the service you requested, with your direction, with payment, accounting, legal, insurance, hosting, email, analytics, or security providers, or when required by law.",
      "If a job is outside Summit Handyman's scope and you ask for a referral, Brody may suggest an appropriate trade. Your details are not sent to that trade unless you ask for that handoff.",
    ],
  },
  {
    title: "Reviews and public content",
    body: [
      "If you leave a public review on Google, Trustindex, Facebook, or another third-party platform, that review may be displayed or linked on the website. Public reviews are controlled by the platform where you posted them. Contact that platform to edit or remove your review at the source.",
      "Summit Handyman may quote short portions of public reviews for credibility and customer education, while avoiding private contact details.",
    ],
  },
  {
    title: "Job photos and portfolio use",
    body: [
      "Summit Handyman may take before, during, or after photos to document work quality, scope, damage, access, or completion. Photos may be used internally for estimates, records, invoices, insurance, or quality control.",
      "Photos will not intentionally show private personal information, security-sensitive details, or identifiable people without permission. If a photo from your property is ever requested for marketing use, Brody will use reasonable care to keep it focused on the work, not your private life.",
    ],
  },
  {
    title: "Retention",
    body: [
      "Quote requests, emails, project records, invoices, photos, and related correspondence may be kept as long as needed for service delivery, warranty questions, insurance, taxes, accounting, dispute prevention, and ordinary business records.",
      "Information that is no longer needed is deleted, anonymized, or allowed to expire through normal provider retention cycles where practical.",
    ],
  },
  {
    title: "Security",
    body: [
      "Summit Handyman uses reasonable technical and organizational safeguards for a small service business, including encrypted website connections, limited access to submitted information, and reputable hosting and email providers.",
      "No website, email system, or internet transmission can be guaranteed perfectly secure. Do not send passwords, gate codes, alarm codes, banking details, or other highly sensitive information through the quote form.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      "You may request access to your personal information, ask for corrections, withdraw optional consent where applicable, or ask for deletion of information that is no longer needed for business, legal, insurance, tax, or dispute-related purposes.",
      `To make a privacy request, email ${site.contact.email}. Brody may need to verify your identity before making changes to customer records.`,
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "The website and services are intended for adults arranging home repairs or property work. Summit Handyman does not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "This policy may be updated as the business, website, tools, or legal requirements change. The updated version will be posted on this page with the latest update date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
        eyebrow="Legal"
        title="Privacy Policy"
        description="Plain-language privacy terms for quote requests, photos, analytics, reviews, and customer records. Last updated April 2026."
      />
      <Section size="md" atmosphere="paper">
        <Container size="narrow">
          <div className="rounded-[2rem] border border-divider-strong bg-surface-panel/80 p-6 shadow-panel sm:p-8 md:p-10">
            <p className="text-sm leading-relaxed text-fg-muted">
              This page is general business information, not legal advice. It is meant to explain how Summit Handyman handles customer information in practical terms.
            </p>
            <div className="mt-8 space-y-9 text-fg/90 leading-relaxed">
              {sections.map((section) => (
                <section key={section.title} className="space-y-3">
                  <h2 className="font-display text-2xl font-bold text-fg-strong">
                    {section.title}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <section className="space-y-3 rounded-2xl border border-accent-soft bg-accent-soft/10 p-5">
                <h2 className="font-display text-2xl font-bold text-fg-strong">Privacy contact</h2>
                <p>
                  Questions or privacy requests can be sent to{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-accent underline-offset-4 hover:text-accent-hot hover:underline"
                  >
                    {site.contact.email}
                  </a>
                  . You can also call{" "}
                  <a
                    href={`tel:${site.contact.phoneTel}`}
                    className="text-accent underline-offset-4 hover:text-accent-hot hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
