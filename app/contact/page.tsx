import type { Metadata } from "next";
import { Mail, MessageSquare, MessageCircle, Clock, MapPin, Facebook, Instagram } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Contact Brody",
  description:
    "Email, text, or message Brody at Summit Handyman. Email is the fastest way to reach him — most quotes back within 24 hours.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Email — preferred",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    Icon: Mail,
    note: "Best for detailed jobs, photos, and quotes. Brody reads everything personally.",
    badge: "Fastest reply · 24hr",
  },
  {
    label: "Text",
    value: site.contact.phone,
    href: `sms:${site.contact.phoneTel}`,
    Icon: MessageSquare,
    note: "Best for urgent or same-day work. Quick back-and-forth on small jobs.",
    badge: "Same-day for urgent",
  },
  {
    label: "Facebook Messenger",
    value: `m.me/${site.social.facebook.handle}`,
    href: site.contact.messenger,
    Icon: MessageCircle,
    note: "Best if you already follow Summit Handyman on Facebook.",
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
            Three ways to{" "}
            <span className="font-serif italic font-normal text-gradient-gold">reach Brody.</span>
          </>
        }
        description="Email is fastest and preferred. Text works great for urgent jobs. Messenger if that's where you live online."
      />

      <Section size="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {channels.map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener" : undefined}
                  className="group block h-full p-5 sm:p-6 md:p-7 rounded-2xl bg-surface-panel border border-divider-strong hover:border-accent-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5 min-w-0"
                >
                  <div className="h-12 w-12 rounded-xl bg-summit-gold/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-summit-gold/20 transition-colors">
                    <c.Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                    {c.label}
                  </p>
                  <p className="mt-2 font-display text-base sm:text-lg font-bold text-fg-strong break-all leading-snug">
                    {c.value}
                  </p>
                  <p className="mt-3 text-sm text-fg-muted leading-relaxed text-pretty">{c.note}</p>
                  {c.badge && (
                    <p className="mt-4 inline-block text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-summit-gold/15 text-accent font-semibold">
                      {c.badge}
                    </p>
                  )}
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="rounded-2xl bg-gradient-to-br from-summit-panel via-summit-panel to-summit-gold/5 border border-accent/40 p-8 md:p-10 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Need a written quote?
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-strong mb-3 text-balance">
                Use the multi-step quote form for the fastest turnaround.
              </h2>
              <p className="text-fg-strong/80 max-w-xl mx-auto mb-6">
                Add a few photos, describe the job, and Brody will email an estimate within 24
                hours.
              </p>
              <MagneticCTA href="/quote" size="lg">
                Start your quote
              </MagneticCTA>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Hours + areas */}
      <Section size="md" className="bg-surface-panel border-y border-divider">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-surface-panel border border-divider-strong">
              <Clock className="h-7 w-7 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold text-fg-strong mb-3">Hours</h3>
              <p className="text-fg-strong/80 leading-relaxed">{site.hours}</p>
              <p className="mt-2 text-sm text-fg-muted">
                Email checked throughout the day. Most quotes returned within 24 hours.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-surface-panel border border-divider-strong">
              <MapPin className="h-7 w-7 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold text-fg-strong mb-3">
                Service areas
              </h3>
              <p className="text-fg-strong/80 leading-relaxed">
                {areas.map((a) => a.name).join(" · ")}
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                If your area isn't listed but is nearby, just ask.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
