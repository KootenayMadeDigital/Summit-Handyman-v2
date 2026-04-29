import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Tell Brody about your project. Most quotes back within 24 hours via email. Photo upload supported.",
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
        description="Tell Brody what you need. Photos help. He'll email you back with a clear, written estimate — usually same-day."
      />

      <Section size="lg" className="-mt-10">
        <Container size="narrow">
          <QuoteForm />
        </Container>
      </Section>
    </>
  );
}
