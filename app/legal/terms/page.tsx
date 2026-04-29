import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${site.name} terms of service.`,
  alternates: { canonical: "/legal/terms" },
};

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
        description="Last updated April 2026."
      />
      <Section size="md">
        <Container size="narrow">
          <div className="prose max-w-none space-y-6 text-fg/90 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-fg-strong">Quotes & estimates</h2>
            <p>
              Estimates are free and non-binding until both parties confirm scope and pricing in
              writing (email is fine). Final invoiced amounts may differ from initial estimates if
              scope changes during the work — any changes will be communicated and approved before
              continuing.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Minimum charge</h2>
            <p>
              {site.pricing.minimumLong} The minimum applies regardless of job size and covers
              tools, insurance, travel, and craftsmanship.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Workmanship</h2>
            <p>
              All work performed by {site.name} is backed by Brody's promise:{" "}
              <em className="font-serif text-accent">"{site.promise}"</em> Workmanship warranty
              applies to repairs that fail due to installation defects, not damage from misuse,
              accidents, or natural wear.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Materials</h2>
            <p>
              Materials supplied by {site.name} are billed at cost plus a small handling fee. You
              may also supply your own materials — quality and suitability of homeowner-supplied
              materials is the homeowner's responsibility.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Cancellations</h2>
            <p>
              Please give 24 hours notice for cancellations or rescheduling. Same-day cancellations
              may incur a small fee to cover travel and lost time.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Liability</h2>
            <p>
              {site.name} carries comprehensive liability insurance. For work that requires
              permitted electrical, plumbing, or structural changes, we refer to appropriately
              licensed trades — that work is governed by their separate contracts.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Governing law</h2>
            <p>These terms are governed by the laws of the Province of British Columbia.</p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Business identifiers</h2>
            <p>
              {site.legalName} · Business # {site.business.number} · GST # {site.business.gst}.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
