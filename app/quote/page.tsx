import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Tell Brody about your project. Hit send to open a pre-filled email. most quotes returned within 24 hours.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quote" }]}
        eyebrow="Free, no-obligation"
        title={
          <>
            Get a quote in{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              under 24 hours.
            </span>
          </>
        }
        description="Tell Brody what you need. Hit send to open a pre-filled email. he'll reply with a written estimate within 24 hours."
      />

      <Section size="lg" className="-mt-10">
        <Container size="narrow">
          <QuoteForm />
        </Container>
      </Section>
    </>
  );
}
