import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MessageSquare,
  Facebook,
  Instagram,
  FileText,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

/**
 * Premium footer.
 *
 * Three-zone composition:
 *   1. Hero strip: brand + final CTA panel side-by-side. The CTA carries the
 *      whole footer's conversion weight; everything below is reference.
 *   2. Information columns: Services, Areas served (links), Resources (cost
 *      guides, reviews, about). Four equal columns at desktop, collapsing
 *      cleanly down to two on tablet and one on phone.
 *   3. Legal strip: business numbers + license + copyright + legal links +
 *      designer credit. Compressed and quiet.
 *
 * Visual rhythm: each zone gets a hairline divider in the brand-aware accent
 * gradient, so the footer reads as three intentional sections rather than a
 * dump of links.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const interiorServices = services.filter((s) => s.category === "interior");
  const exteriorServices = services.filter(
    (s) => s.category === "exterior" || s.category === "safety",
  );

  return (
    <footer className="relative mt-section bg-surface border-t border-divider-strong">
      <div className="mx-auto max-w-[88rem] px-6 sm:px-8 lg:px-12">
        {/* === ZONE 1: brand + CTA hero strip === */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 py-14 sm:py-16 lg:py-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
              aria-label="Summit Handyman home"
            >
              <Image
                src="/images/logo.webp"
                alt=""
                width={56}
                height={56}
                className="rounded-md flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14"
              />
              <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-fg-strong">
                Summit Handyman
                <span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm sm:text-base text-fg/85 leading-relaxed max-w-md">
              {site.description}
            </p>
            <p className="font-serif italic text-sm sm:text-base text-fg-muted">
              "{site.taglineAlt}"
            </p>

            {/* Trust micro-row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-fg-muted">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Licensed & insured
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Lower Mainland, BC
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-accent">★ 5.0</span>
                <span>on Google</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_14%,var(--bg-panel))] border border-accent p-6 sm:p-7 md:p-8 shadow-gold">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
                The recommended way to reach Brody
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-fg-strong leading-tight text-balance">
                Get a written estimate within 24 hours.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-fg/85 leading-relaxed">
                The quote form takes about 90 seconds and lets Brody review the scope and photos before reaching out.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote"
                  data-quote-cta="true"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-white font-display font-bold text-sm hover:bg-accent-hot transition-colors shadow-gold"
                >
                  <FileText className="h-4 w-4" />
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-divider-strong text-fg-strong font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Brody
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-divider grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-fg/85 hover:text-accent transition-colors break-all"
                >
                  {site.contact.email}
                </a>
                <a
                  href={`sms:${site.contact.phoneTel}`}
                  className="text-fg/85 hover:text-accent transition-colors"
                >
                  {site.contact.phone}
                </a>
                <span className="text-accent font-semibold">{site.pricing.minimumDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden className="summit-divider-strong" />

        {/* === ZONE 2: information columns === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 py-12 sm:py-14">
          {/* Interior services */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Interior Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {interiorServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-fg/80 hover:text-accent transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exterior + Safety services */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Exterior & Safety
            </h3>
            <ul className="space-y-2.5 text-sm">
              {exteriorServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-fg/80 hover:text-accent transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent-hot font-semibold transition-colors"
                >
                  All services
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas served */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Areas Served
            </h3>
            <ul className="space-y-2.5 text-sm">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-fg/80 hover:text-accent transition-colors"
                  >
                    Handyman in {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-fg/80 hover:text-accent transition-colors">
                  About Brody
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-fg/80 hover:text-accent transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/cost-guides" className="text-fg/80 hover:text-accent transition-colors">
                  Cost Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-fg/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-fg/80 hover:text-accent transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={site.social.facebook.url}
                target="_blank"
                rel="noopener"
                aria-label="Summit Handyman on Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-divider-strong text-fg/85 hover:border-accent hover:text-accent transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener"
                aria-label="Summit Handyman on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-divider-strong text-fg/85 hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.contact.messenger}
                target="_blank"
                rel="noopener"
                aria-label="Message Brody on Facebook Messenger"
                className="grid h-9 w-9 place-items-center rounded-full border border-divider-strong text-fg/85 hover:border-accent hover:text-accent transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden className="summit-divider-strong" />

        {/* === ZONE 3: legal strip === */}
        <div className="py-6 sm:py-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-fg-faint">
            <span>{site.business.numberDisplay}</span>
            <span aria-hidden className="text-fg-faint/40">·</span>
            <span>{site.business.gstDisplay}</span>
            <span aria-hidden className="text-fg-faint/40">·</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-fg-muted">
            <span className="text-fg-muted/80">© {year} {site.legalName}</span>
            <Link href="/legal/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
          <div className="text-xs text-fg-muted/80">
            Designed by{" "}
            <a
              href="https://kootenaymade.ca"
              target="_blank"
              rel="noopener"
              className="text-accent hover:text-accent-hot font-semibold transition-colors"
            >
              Kootenay Made Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
