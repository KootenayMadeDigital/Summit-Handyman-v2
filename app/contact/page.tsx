import type { Metadata } from "next";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { QuoteForm } from "@/components/forms/quote-form";
import { site } from "@/lib/site";
import { ogImage, staticOg } from "@/lib/og";

import { areas } from "@/lib/areas";

const pageOgDescription = "Start with the quote form so Brody has the repair list, photos, and location before he replies. The request goes straight to Brody's email.";

export const metadata: Metadata = {
  title: "Contact Brody",
  description:
    pageOgDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Summit Handyman",
    description: pageOgDescription,
    type: "website",
    images: ogImage(staticOg("contact"), "Contact Summit Handyman"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Summit Handyman",
    description: pageOgDescription,
    images: [staticOg("contact")],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in Touch"
        title={
          <>
            The least messy way to{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              reach Brody.
            </span>
          </>
        }
        description="Submit the quote form first when you can. It captures the details Brody needs before the reply."
      >
        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
          <MagneticCTA href="#contact-form" size="lg">
            Start My Quote
            <ArrowRight className="h-5 w-5" />
          </MagneticCTA>
          <p className="text-sm text-fg-muted">
            The form sends the request straight to Brody's email.
          </p>
        </div>
      </PageHero>

      {/* PRIMARY: contact and quote form */}
      <Section id="contact-form" size="sm" className="bg-surface scroll-mt-28 !pt-8 sm:!pt-10 md:!pt-12 !pb-10 sm:!pb-12 md:!pb-16">
        <Container size="narrow">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Recommended
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-fg-strong mb-4 text-balance leading-[1.05]">
                Send the details straight to Brody
              </h2>
              <p className="text-base sm:text-lg text-fg/85 max-w-xl mx-auto leading-relaxed">
                This contact form sends the scope, photos, city, and reply details directly to {site.contact.email}.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </Container>
      </Section>

      {/* SECONDARY: where the form goes */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-fg-muted font-semibold mb-2">
              Form-first contact
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-fg-strong text-balance">
              Every request starts with the quote form.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-fg-muted leading-relaxed">
              The form sends the repair list, photos, city, and reply details to {site.contact.email}. That keeps the scope organized before Brody replies.
            </p>
          </div>
        </Container>
      </Section>

      {/* Hours + areas */}
      <Section size="md" className="bg-surface">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="summit-card-motion motion-trust p-6 sm:p-7 rounded-2xl bg-surface-panel border border-divider-strong">
              <Clock className="h-6 w-6 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold text-fg-strong mb-2">Hours</h3>
              <p className="text-fg/85 leading-relaxed text-sm">{site.hours}</p>
              <p className="mt-2 text-xs text-fg-muted">
                Quote requests are reviewed within 24 hours. The form keeps the thread organized from the start.
              </p>
            </div>
            <div className="summit-card-motion motion-trust p-6 sm:p-7 rounded-2xl bg-surface-panel border border-divider-strong">
              <MapPin className="h-6 w-6 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold text-fg-strong mb-2">Service areas</h3>
              <p className="text-fg/85 leading-relaxed text-sm">
                {areas.map((a) => a.name).join(" · ")}
              </p>
              <p className="mt-2 text-xs text-fg-muted">
                If your area isn't listed but is nearby, just ask.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
