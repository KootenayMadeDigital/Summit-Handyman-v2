import type { Metadata } from "next";
import Image from "next/image";
import { Facebook, Instagram, Mail, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Brody",
  description:
    "Brody Robertson started Summit Handyman to bridge the gap between the 'quick fix' and premium service. A property manager's mindset, applied to every job.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Clear communication",
    body: "Email confirmations. Honest timelines. Photos when something changes. You're never wondering what's happening.",
  },
  {
    title: "Cleanliness",
    body: "Drop cloths down. Dust controlled. Tools off the floor. The space should be cleaner when I leave than when I arrived.",
  },
  {
    title: "Repairs that last",
    body: "Three coats of mud. Two coats of paint. Anchored into studs. The job is done when it would still be done in five years.",
  },
  {
    title: "Property-manager mindset",
    body: "I think about turnover, tenant satisfaction, and detailed invoicing. even on residential jobs. Documentation included.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="The Brody Story"
        title={
          <>
            Built on{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              integrity.
            </span>
          </>
        }
        description="The why behind Summit Handyman, in Brody's words."
      />

      <Section size="lg" className="bg-surface">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="photo-grade relative aspect-[4/5] rounded-2xl overflow-hidden border border-divider-strong shadow-panel-lg">
                  <Image
                    src="/images/page-hero-fallback.webp"
                    alt="Craftsmanship tools laid out on a wood workbench"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl bg-surface-panel border border-divider-strong p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                    Owner & Founder
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-fg-strong">
                    {site.owner}
                  </p>
                  <p className="text-sm text-fg-muted mt-1">Langley, BC</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                      {site.contact.email}
                    </a>
                    <a
                      href={`sms:${site.contact.phoneTel}`}
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <MessageSquare className="h-4 w-4 text-accent" />
                      Text {site.contact.phone}
                    </a>
                    <a
                      href={site.social.facebook.url}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-accent" />
                      facebook.com/{site.social.facebook.handle}
                    </a>
                    <a
                      href={site.social.instagram.url}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 text-sm text-fg-strong hover:text-accent transition-colors"
                    >
                      <Instagram className="h-4 w-4 text-accent" />
                      @{site.social.instagram.handle}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 space-y-8" delay={0.1}>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-fg-strong text-pretty text-balance">
                "{site.about}"
              </p>

              <div className="space-y-6 text-fg-strong/85 leading-relaxed text-lg">
                <p>
                  Summit Handyman is owner-operated. That means when you email or text, you're
                  reaching me directly. not a dispatcher, not a call center, not a "service
                  manager" who hands the work to whoever's available.
                </p>
                <p>
                  I started this business because I'd seen too many handymen treat repair work as a
                  shortcut: one coat of paint, a quick patch that would crack again next year, no
                  follow-up. The Lower Mainland deserves a handyman who treats every home like a
                  property he might one day be asked to inspect.
                </p>
                <p>
                  That's why every job comes with the same{" "}
                  <span className="text-accent font-semibold italic font-serif">
                    "{site.promise}"
                  </span>{" "}
                  promise. Because reputation in this industry is built one job at a time. and
                  I'd rather come back free than leave anyone wondering whether they should call me
                  again.
                </p>
              </div>

              <div className="pt-6 border-t border-divider">
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-6">
                  Four principles. Every job.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {principles.map((p) => (
                    <div
                      key={p.title}
                      className="p-5 rounded-xl bg-surface-panel border border-divider-strong"
                    >
                      <h3 className="font-display text-lg font-bold text-fg-strong mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-fg-muted leading-relaxed">{p.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

    </>
  );
}
