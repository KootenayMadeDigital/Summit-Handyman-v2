import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Submit a Quote Request",
  description:
    "The fastest way to get a written estimate from Brody. Tell him what's going on, attach photos, and he'll review the job before reaching out within 24 hours.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]}
        eyebrow="Recommended way to reach Brody"
        title={
          <>
            Submit a quote request{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              in 90 seconds.
            </span>
          </>
        }
        description="Tell Brody what's going on, attach a few photos, and he'll review the job before reaching out. Most replies go out the same day, with a written estimate within 24 hours."
      />

      <Section size="lg" className="-mt-10">
        <Container size="narrow">
          <QuoteForm />
        </Container>
      </Section>
    </>
  );
}
