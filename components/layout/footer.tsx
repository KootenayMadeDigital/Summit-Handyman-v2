import Link from "next/link";
import Image from "next/image";
import { Mail, MessageSquare, Facebook, Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-section bg-surface border-t border-divider-strong">
      <div className="mx-auto max-w-[88rem] px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Summit Handyman home">
              <Image src="/images/logo.webp" alt="" width={48} height={48} className="rounded-md" />
              <span className="font-display text-xl font-bold tracking-tight">
                Summit Handyman<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-fg-muted leading-relaxed max-w-xs">
              {site.description}
            </p>
            <p className="text-xs text-fg-faint italic font-serif">
              "{site.taglineAlt}"
            </p>
          </div>

          {/* Services column */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 8).map((s) => (
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
                  className="text-accent hover:text-accent-hot font-semibold transition-colors"
                >
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Areas Served
            </h3>
            <ul className="space-y-2 text-sm">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-fg/80 hover:text-accent transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-2 text-fg/80 hover:text-accent transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{site.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`sms:${site.contact.phoneTel}`}
                  className="flex items-center gap-2 text-fg/80 hover:text-accent transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-accent" />
                  Text {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook.url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 text-fg/80 hover:text-accent transition-colors"
                >
                  <Facebook className="h-4 w-4 text-accent" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram.url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 text-fg/80 hover:text-accent transition-colors"
                >
                  <Instagram className="h-4 w-4 text-accent" />
                  Instagram
                </a>
              </li>
            </ul>
            <div className="pt-2 text-xs text-fg-faint">
              <p className="text-fg-strong font-semibold">{site.pricing.minimumDisplay}</p>
              <p className="mt-1">Licensed & insured · Lower Mainland, BC</p>
            </div>
          </div>
        </div>

        {/* Business numbers strip */}
        <div className="mt-12 pt-6 border-t border-divider flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider text-fg-faint">
          <span>{site.business.numberDisplay}</span>
          <span aria-hidden className="text-fg-faint/50">·</span>
          <span>{site.business.gstDisplay}</span>
          <span aria-hidden className="text-fg-faint/50">·</span>
          <span>Licensed & Insured</span>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-divider flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="text-xs text-fg-muted">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-fg-muted">
            <Link href="/legal/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-accent transition-colors">
              Sitemap
            </Link>
            <span className="text-fg-muted/60">
              Designed by{" "}
              <a
                href="https://kootenaymade.ca"
                target="_blank"
                rel="noopener"
                className="text-accent hover:text-accent-hot font-semibold transition-colors"
              >
                Kootenay Made Digital
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
