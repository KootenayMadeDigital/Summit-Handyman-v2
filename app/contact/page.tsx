import type { Metadata } from "next";
import {
  Mail,
  MessageSquare,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
  FileText,
  Camera,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Contact Brody",
  description:
    "The fastest way to reach Brody is to submit the quote form so he has the photos and details on hand before reaching out. Email, text, and Facebook Messenger also available.",
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
    note: "Best for urgent or same-day work after the form has been sent.",
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
            The fastest way to{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              reach Brody.
            </span>
          </>
        }
        description="Submit the quote form. It takes about 90 seconds, includes photos, and lets Brody come back to you with answers, not more questions."
      />

      {/* PRIMARY: quote form CTA panel */}
      <Section size="lg" className="bg-surface">
        <Container size="narrow">
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_14%,var(--bg-panel))] border border-accent p-8 md:p-12 text-center shadow-gold-lg">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Recommended
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-fg-strong mb-4 text-balance leading-[1.05]">
                Submit a quote request
              </h2>
              <p className="text-base sm:text-lg text-fg/85 max-w-xl mx-auto mb-8 leading-relaxed">
                Brody can give you a much better answer when he has the project details and photos in hand. The form takes about 90 seconds.
              </p>

              <ul className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-2xl mx-auto text-left">
                <li className="flex items-start gap-3 p-3 rounded-xl bg-surface/60 border border-divider">
                  <FileText className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.6} />
                  <div>
                    <p className="font-display font-bold text-sm text-fg-strong leading-tight">Documented</p>
                    <p className="text-xs text-fg-muted mt-0.5">Details on file before the call.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-surface/60 border border-divider">
                  <Camera className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.6} />
                  <div>
                    <p className="font-display font-bold text-sm text-fg-strong leading-tight">Photos help</p>
                    <p className="text-xs text-fg-muted mt-0.5">Up to 5 attachments.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-surface/60 border border-divider">
                  <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.6} />
                  <div>
                    <p className="font-display font-bold text-sm text-fg-strong leading-tight">24-hour reply</p>
                    <p className="text-xs text-fg-muted mt-0.5">Same-day on most days.</p>
                  </div>
                </li>
              </ul>

              <MagneticCTA href="/quote" size="lg">
                Start your quote
                <ArrowRight className="h-5 w-5" />
              </MagneticCTA>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* SECONDARY: direct contact channels */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-fg-muted font-semibold mb-2">
              Other ways to reach Brody
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-fg-strong text-balance">
              Already have what Brody needs?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-fg-muted">
              These work too, especially for follow-ups, urgent jobs, or quick questions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {channels.map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener" : undefined}
                  className="group block h-full p-5 sm:p-6 rounded-2xl bg-surface border border-divider-strong hover:border-accent-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5 min-w-0"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center mb-4 group-hover:bg-accent-soft transition-colors">
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
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-panel border border-divider-strong">
              <Clock className="h-6 w-6 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold text-fg-strong mb-2">Hours</h3>
              <p className="text-fg/85 leading-relaxed text-sm">{site.hours}</p>
              <p className="mt-2 text-xs text-fg-muted">
                Email is checked throughout the day. Most quote requests get a reply within 24 hours.
              </p>
            </div>
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-panel border border-divider-strong">
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
