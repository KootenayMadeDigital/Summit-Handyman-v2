import Image from "next/image";
import {
  Mail,
  Star,
  ShieldCheck,
  Clock,
  MapPin,
  HandCoins,
} from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { RevealStagger, RevealItem } from "@/components/ui/reveal";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";

/**
 * BENTO. answers "Why pick THIS handyman over the next ad?"
 * One unifying answer (reliability) backed by 6 supporting tiles.
 * Asymmetric grid creates visual interest while tiles stay scannable.
 */
export function BentoSection() {
  return (
    <Section size="lg" className="grainient-promise relative overflow-hidden">
      <Container>
        <SectionTitle
          eyebrow="Why Summit"
          title={
            <>
              Lower Mainland homeowners{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                pick Brody
              </span>{" "}
              for one reason.
            </>
          }
          description="Reliability. Everything else. the pricing, the response time, the warranty. flows from that."
          align="center"
          className="mb-12 sm:mb-14"
        />

        <RevealStagger className="grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-4 md:gap-5 auto-rows-[minmax(11rem,auto)] md:auto-rows-[minmax(13rem,auto)]">
          {/* PROMISE. 2x2 */}
          <RevealItem className="summit-card-motion motion-trust col-span-2 row-span-2 relative overflow-hidden rounded-2xl border border-accent/40 bg-surface-panel group min-w-0 min-h-[22rem]">
            <Image
              src="/images/promise-bg.webp"
              alt="Craftsman's hands setting a level on a freshly-mudded drywall seam"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-55 group-hover:opacity-65 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-summit-black via-summit-black/75 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 md:p-8">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold mb-3">
                The Brody Promise
              </p>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-summit-mist leading-snug max-w-md text-balance text-pretty">
                "{site.promise}"
              </p>
              <p className="mt-3 sm:mt-4 text-sm text-summit-mist/70">
                {site.owner}, founder
              </p>
            </div>
          </RevealItem>

          {/* RATING */}
          <BentoTile>
            <div className="flex items-center gap-1.5 text-accent" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-fg-strong leading-none">
                5.0
              </p>
              <p className="mt-2 text-sm text-fg-muted">on Google</p>
            </div>
          </BentoTile>

          {/* PRICING */}
          <BentoTile>
            <HandCoins className="h-7 w-7 text-accent" strokeWidth={1.5} />
            <div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-fg-strong leading-none">
                $150
              </p>
              <p className="mt-2 text-xs sm:text-sm text-fg-muted leading-snug">
                Minimum per job. <br />
                <span className="text-fg/70">No hourly games.</span>
              </p>
            </div>
          </BentoTile>

          {/* LICENSED */}
          <BentoTile>
            <ShieldCheck className="h-7 w-7 text-accent" strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-fg-strong leading-tight">
                Licensed.
                <br />
                Insured.
              </p>
              <p className="mt-1 text-xs sm:text-sm text-fg-muted leading-snug">
                Full liability coverage.
              </p>
            </div>
          </BentoTile>

          {/* RESPONSE */}
          <BentoTile>
            <Clock className="h-7 w-7 text-accent" strokeWidth={1.5} />
            <div>
              <p className="font-display text-2xl md:text-3xl font-extrabold text-fg-strong leading-tight">
                Fast<br />response
              </p>
              <p className="mt-1 text-xs sm:text-sm text-fg-muted">
                Email or text. Written replies within 24 hours.
              </p>
            </div>
          </BentoTile>

          {/* AREAS. 2 cols */}
          <BentoTile className="col-span-2">
            <MapPin className="h-7 w-7 text-accent" strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-fg-strong mb-3 leading-tight">
                {areas.length} cities served
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs sm:text-sm text-fg/85">
                {areas.map((a) => (
                  <li key={a.slug} className="flex items-center gap-1.5 whitespace-nowrap">
                    <span className="h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                    {a.name}
                  </li>
                ))}
              </ul>
            </div>
          </BentoTile>

          {/* EMAIL. 2 cols, accent-bordered */}
          <RevealItem className="summit-card-motion motion-cta col-span-2 relative overflow-hidden rounded-2xl border border-accent bg-gradient-to-br from-[var(--bg-panel)] via-[var(--bg-panel)] to-[color-mix(in_srgb,var(--accent)_14%,var(--bg-panel))] p-5 sm:p-6 md:p-7 flex flex-col justify-between group hover:border-accent-hot transition-colors min-w-0">
            <Mail className="h-7 w-7 text-accent" strokeWidth={1.5} />
            <div className="min-w-0">
              <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-fg-strong mb-1 leading-tight">
                Email-first contact
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-xs sm:text-sm text-accent hover:text-accent-hot transition-colors font-semibold underline-offset-4 hover:underline break-all"
              >
                {site.contact.email}
              </a>
              <p className="mt-1 text-xs text-fg-muted">
                Or text {site.contact.phone} for urgent jobs.
              </p>
            </div>
          </RevealItem>
        </RevealStagger>
      </Container>
    </Section>
  );
}

function BentoTile({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RevealItem
      className={
        "summit-card-motion motion-trust relative overflow-hidden rounded-2xl border border-divider bg-surface-panel p-5 sm:p-6 md:p-7 flex flex-col justify-between group hover:border-accent-soft transition-colors min-w-0 " +
        (className ?? "")
      }
    >
      {children}
    </RevealItem>
  );
}
