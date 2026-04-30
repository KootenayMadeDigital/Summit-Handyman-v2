import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { site } from "@/lib/site";
import { ogImage, staticOg } from "@/lib/og";

const pageOgDescription = `Read ${site.name} terms for estimates, scope, payment, materials, scheduling, customer responsibilities, workmanship coverage, liability, reviews, and BC governing law.`;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: pageOgDescription,
  alternates: { canonical: "/legal/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Summit Handyman terms of service",
    description: pageOgDescription,
    type: "website",
    images: ogImage(staticOg("terms"), "Summit Handyman terms of service"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Handyman terms of service",
    description: pageOgDescription,
    images: [staticOg("terms")],
  },
};

const terms = [
  {
    title: "Who you are hiring",
    body: [
      `${site.legalName} is the business name for ${site.name}, an owner-operated handyman service run by ${site.owner} in British Columbia. When you request a quote, schedule work, approve an estimate, or use this website, you agree to these terms.`,
      "These terms apply to website use, quote requests, estimates, scheduled work, repair services, documentation, invoices, and customer communications unless a written agreement says otherwise.",
    ],
  },
  {
    title: "Website information",
    body: [
      "Website content is general information for homeowners, tenants, strata representatives, and property managers. It is not a guarantee that a specific repair is suitable for your property, code-compliant in your situation, or within handyman scope.",
      "Photos, project examples, guides, service descriptions, and reviews are provided for education and trust-building. Every home, material, access condition, and repair is different.",
    ],
  },
  {
    title: "Quotes and estimates",
    body: [
      "Quote requests are reviewed after you submit enough detail for Brody to understand the scope. Photos help, but they do not replace an on-site inspection where one is needed.",
      "Estimates are not binding until the scope, price, materials, timing, and access details are confirmed in writing. Email, text, or another written message may be used for confirmation.",
      "If the actual work differs from the request, hidden damage is found, unsafe conditions exist, access is limited, materials change, or you add work, the price and schedule may change. Brody will communicate changes before continuing whenever practical.",
    ],
  },
  {
    title: "Minimum charge",
    body: [
      `${site.pricing.minimumLong} The minimum applies to scheduled work regardless of job size and helps cover travel, tools, insurance, preparation, administration, and skilled workmanship.`,
      "Bundling several small repairs into one visit is often the best way to make the minimum charge work harder for you.",
    ],
  },
  {
    title: "Payment",
    body: [
      "Payment terms will be stated on the estimate or invoice. Unless otherwise agreed in writing, payment is due when work is completed or when the invoice is issued.",
      "Deposits or material prepayment may be required for larger work, special-order materials, or jobs with meaningful upfront cost. Late, failed, reversed, or disputed payments may pause future work until resolved.",
    ],
  },
  {
    title: "Materials and supplies",
    body: [
      "Materials supplied by Summit Handyman may be billed at cost plus reasonable handling, pickup, delivery, or administration time where applicable. Material costs can change based on supplier availability and customer choices.",
      "You may supply your own materials if Brody agrees they are suitable. Customer-supplied materials remain your responsibility, including quality, completeness, fit, defects, missing parts, incorrect sizing, warranty eligibility, and delays caused by replacement or exchange.",
    ],
  },
  {
    title: "Scheduling, access, and cancellations",
    body: [
      "Scheduling depends on scope, materials, access, weather, travel, existing bookings, and whether the work remains within handyman scope. Quote review timing is not the same as guaranteed job completion timing.",
      "Customers are responsible for providing safe access, parking where needed, elevator or strata access, gate or entry instructions, pets secured away from the work area, and a reasonably clear workspace.",
      "Please give at least 24 hours notice for cancellation or rescheduling. Same-day cancellations, missed appointments, blocked access, or jobs that cannot proceed because the site was not ready may result in a reasonable fee for travel, time, and unrecoverable costs.",
    ],
  },
  {
    title: "Customer responsibilities",
    body: [
      "You are responsible for providing accurate information, disclosing known hazards, identifying concealed utilities or sensitive areas where known, confirming ownership or authorization to approve work, and securing valuables, fragile items, pets, children, and personal belongings away from the work area.",
      "For rental, strata, or managed properties, you are responsible for obtaining any required owner, tenant, strata, building, or property-manager permission before work begins.",
    ],
  },
  {
    title: "Permits, regulated trades, and work outside scope",
    body: [
      "Summit Handyman handles handyman-level repair and improvement work. Work requiring a licensed electrical contractor, licensed plumber, gas fitter, structural engineer, asbestos professional, roofer, hazardous-material specialist, permit holder, or other regulated trade may be declined or referred out.",
      "Unless specifically agreed in writing, customers are responsible for permits, strata approvals, engineering, inspections, utility locates, and other third-party approvals. Brody may pause or decline work that appears unsafe, illegal, beyond handyman scope, or not in the customer's best interest.",
    ],
  },
  {
    title: "Workmanship promise",
    body: [
      `Work performed by ${site.name} is backed by Brody's promise: "${site.promise}"`,
      "This workmanship coverage applies to defects caused by Summit Handyman's labour. It does not cover normal wear, misuse, impact, water intrusion, movement of the building, customer-supplied material failure, manufacturer defects, hidden pre-existing damage, work changed by others, lack of maintenance, weather damage, pest damage, mold, rot, or conditions outside Brody's control.",
      "To request a workmanship review, contact Brody promptly with photos, the invoice or job date, and a description of the issue. Do not attempt further repair or hire someone else before Brody has a reasonable chance to inspect the concern, unless immediate action is needed to prevent damage or safety risk.",
    ],
  },
  {
    title: "Photos, documentation, and communication",
    body: [
      "Brody may take before, during, and after photos to document scope, site condition, completion, access limits, concealed damage, or workmanship. These records help protect both the customer and the business.",
      "Customers agree that email, text messages, quote form submissions, photos, estimates, invoices, and other written records may be used to confirm scope, approvals, changes, and job history.",
    ],
  },
  {
    title: "Reviews and marketing",
    body: [
      "If you leave a public review, Summit Handyman may link to it, display it, quote it, or reference it on the website or in marketing. Public reviews remain subject to the terms of the platform where they were posted.",
      "Project photos used for marketing will be selected with reasonable care to avoid private personal information, security-sensitive details, or identifiable people unless permission is given.",
    ],
  },
  {
    title: "Limitations of liability",
    body: [
      "To the fullest extent allowed by law, Summit Handyman is not responsible for indirect, incidental, special, punitive, or consequential losses, including lost rent, lost profit, loss of use, inconvenience, delay, or third-party charges, except where the law does not allow that limitation.",
      "Summit Handyman's responsibility for a service issue is limited to the amount paid for the specific work giving rise to the claim, repair of the affected workmanship, or another reasonable remedy chosen by Summit Handyman, subject to applicable law.",
      "Nothing in these terms limits rights that cannot legally be limited under British Columbia or Canadian consumer protection law.",
    ],
  },
  {
    title: "Website availability and third-party links",
    body: [
      "The website may change, go offline, redirect, or contain links to third-party services such as Google, Trustindex, Facebook, analytics providers, hosting providers, or email services. Summit Handyman is not responsible for third-party websites, platforms, outages, policies, or content.",
    ],
  },
  {
    title: "Governing law and disputes",
    body: [
      "These terms are governed by the laws of British Columbia and the applicable laws of Canada. If a dispute arises, both sides agree to first try to resolve it in good faith through direct communication before escalating further.",
      "If a court or tribunal finds part of these terms unenforceable, the rest of the terms continue to apply.",
    ],
  },
  {
    title: "Business identifiers",
    body: [
      `${site.legalName}. ${site.business.numberDisplay}. ${site.business.gstDisplay}. Licensed and insured in British Columbia.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
        eyebrow="Legal"
        title="Terms of Service"
        description="Plain-language terms for quotes, scope, payment, scheduling, workmanship, materials, liability, and website use. Last updated April 2026."
      />
      <Section size="md" atmosphere="paper">
        <Container size="narrow">
          <div className="rounded-[2rem] border border-divider-strong bg-surface-panel/80 p-6 shadow-panel sm:p-8 md:p-10">
            <p className="text-sm leading-relaxed text-fg-muted">
              These terms are written to keep expectations clear before anyone starts cutting, patching, mounting, painting, or opening walls. They are general business terms, not legal advice.
            </p>
            <div className="mt-8 space-y-9 text-fg/90 leading-relaxed">
              {terms.map((section) => (
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
                <h2 className="font-display text-2xl font-bold text-fg-strong">Questions about these terms</h2>
                <p>
                  Email{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-accent underline-offset-4 hover:text-accent-hot hover:underline"
                  >
                    {site.contact.email}
                  </a>{" "}
                  or call{" "}
                  <a
                    href={`tel:${site.contact.phoneTel}`}
                    className="text-accent underline-offset-4 hover:text-accent-hot hover:underline"
                  >
                    {site.contact.phone}
                  </a>{" "}
                  before approving work if anything is unclear.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
