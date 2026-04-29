import type { Metadata } from "next";
import {
  Mail,
  MessageSquare,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { QuoteForm } from "@/components/forms/quote-form";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Contact Brody",
  description:
    "Start with the quote form so Brody has the repair list, photos, and location before he replies. Email, text, and Facebook Messenger also available.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    Icon: Mail,
    note: "Best for follow-ups or skipping the form. Brody reads everything personally.",
  },
  {
    label: "Text",
    value: site.contact.phone,
    href: `sms:${site.contact.phoneTel}`,
    Icon: MessageSquare,
    note: "Best for time-sensitive follow-ups after the form has been sent.",
  },
  {
    label: "Facebook Messenger",
    value: `m.me/${site.social.facebook.handle}`,
    href: site.contact.messenger,
    Icon: MessageCircle,
    note: "If that's where you live online.",
  },
];

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
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 -mx-2 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            email Brody directly
          </a>
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

      {/* SECONDARY: direct contact channels */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-fg-muted font-semibold mb-2">
              Other ways to add context
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-fg-strong text-balance">
              Need to follow up or add detail?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-fg-muted">
              Email, text, or Messenger work well after the quote is started, or when one extra detail does not fit the form.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {channels.map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener" : undefined}
                  className="summit-card-motion motion-service group block h-full p-5 sm:p-6 rounded-2xl bg-surface border border-divider-strong hover:border-accent-soft hover:shadow-gold transition-all duration-300 min-w-0"
                >
                  <div className="summit-icon-box h-10 w-10 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center mb-4 group-hover:bg-accent-soft transition-colors">
                    <c.Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
                    {c.label}
                  </p>
                  <p className="mt-1.5 font-display text-base sm:text-lg font-bold text-fg-strong break-all leading-snug">
                    {c.value}
                  </p>
                  <p className="mt-2 text-sm text-fg-muted leading-relaxed text-pretty">
                    {c.note}
                  </p>
                </a>
              </Reveal>
            ))}
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
                Quote requests are reviewed within 24 hours. Email is the best place to keep the thread organized.
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
