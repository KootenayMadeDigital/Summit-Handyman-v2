"use client";

import Image, { getImageProps } from "next/image";
import { ArrowRight, Mail, Star, ShieldCheck } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { Parallax } from "@/components/ui/parallax";
import { site } from "@/lib/site";

/**
 * HERO. answers the buyer's first question: "Can I trust this person to do it right?"
 * Anchors:
 *  - Brody photo (face = trust)
 *  - Specific tagline (no generic "we do everything")
 *  - 3 trust signals immediately under headline
 *  - Single primary CTA + low-commitment alternate
 */
export function Hero() {
  const reduce = useReducedMotion();

  /*
    Hero background uses an art-directed <picture> (different desktop vs
    mobile crop, since the source images have completely different aspect
    ratios: desktop 1920x822 vs mobile 1200x1500). Routing through
    `getImageProps` keeps the picture-element art direction intact, but
    upgrades both sources to AVIF when supported, generates a srcSet for
    HiDPI displays, and runs them through Next's image optimization
    pipeline. Visual output is byte-for-byte equivalent at the rendered
    sizes; the wins are smaller transfer + cached optimized variants.
  */
  const common = {
    alt: "",
    sizes: "100vw",
    fetchPriority: "high" as const,
    decoding: "async" as const,
    quality: 80,
  };
  const { props: desktopImg } = getImageProps({
    ...common,
    src: "/images/hero-desktop.webp",
    width: 1920,
    height: 822,
  });
  const { props: mobileImg } = getImageProps({
    ...common,
    src: "/images/hero-mobile.webp",
    width: 1200,
    height: 1500,
  });

  return (
    <section className="grainient-hero relative isolate overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28 min-h-[92vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <picture className="absolute inset-0 block">
          <source media="(min-width: 768px)" srcSet={desktopImg.srcSet} sizes={desktopImg.sizes} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...mobileImg}
            aria-hidden="true"
            className="h-full w-full object-cover opacity-[0.32] [filter:saturate(0.9)_contrast(1.05)] dark-only-photo"
          />
        </picture>
        <div className="absolute inset-0 hero-veil" />
      </div>

      <div className="mx-auto max-w-[88rem] w-full px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 max-w-3xl min-w-0">
          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="summit-soft-pulse inline-flex flex-wrap items-center gap-2.5 rounded-full border border-accent-soft bg-surface-panel/60 backdrop-blur px-4 py-1.5 text-xs sm:text-sm"
          >
            <span className="flex items-center gap-0.5 text-accent" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </span>
            <span className="font-semibold text-fg whitespace-nowrap">5.0 on Google</span>
            <span className="hidden sm:inline text-fg-faint">·</span>
            <ShieldCheck className="hidden sm:inline h-3.5 w-3.5 text-accent" aria-hidden />
            <span className="hidden sm:inline text-fg whitespace-nowrap">Licensed & Insured</span>
            <span className="hidden md:inline text-fg-faint">·</span>
            <span className="hidden md:inline text-fg whitespace-nowrap">Lower Mainland, BC</span>
          </m.div>

          <m.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-2xl font-extrabold tracking-tightest text-fg-strong text-balance leading-[0.95] hyphens-none"
          >
            Handyman repairs
            <br className="hidden sm:inline" />{" "}
            without the{" "}
            <span className="font-serif italic font-normal text-gradient-gold whitespace-nowrap">
              chase.
            </span>
          </m.h1>

          <m.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-fg/85 leading-relaxed text-pretty max-w-2xl"
          >
            One handyman, on every job, for families and property managers across{" "}
            <span className="text-fg-strong font-semibold">
              Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale
            </span>
            . Send the list, get the scope in writing, and know Brody is the one doing the work.
          </m.p>

          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-2"
          >
            <MagneticCTA href="/quote" size="lg">
              Start My Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </MagneticCTA>
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 -mx-2 text-sm text-fg-muted hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              or email Brody directly
            </a>
          </m.div>

          <m.p
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-sm text-fg-muted pt-3 sm:pt-4 leading-relaxed max-w-xl"
          >
            <span className="text-fg/90">Start with the repair list</span>, add photos if you have them, and Brody replies within 24 hours with next steps in writing.
          </m.p>
          <m.p
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-xs text-fg-muted flex flex-wrap items-center gap-x-3 gap-y-1"
          >
            <span className="text-accent font-semibold">$150 minimum per job</span>
            <span className="text-fg-faint">·</span>
            <span>Free written estimate</span>
            <span className="text-fg-faint">·</span>
            <span>Licensed and insured</span>
          </m.p>
        </div>

        <m.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block lg:col-span-4 lg:self-start lg:pt-16 xl:pt-[4.5rem]"
        >
          <Parallax strength={0.04}>
            <div className="summit-photo-motion photo-grade relative aspect-[4/5] w-full lg:max-w-[22rem] xl:max-w-[25rem] 2xl:max-w-[27rem] ml-auto summit-scan-accent rounded-2xl overflow-hidden border border-divider-strong shadow-panel-lg group">
              <Image
                src="/images/about-brody.webp"
                alt={`${site.owner}, the handyman behind ${site.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 0px, (max-width: 1280px) 352px, (max-width: 1536px) 400px, 432px"
                className="object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-summit-black via-summit-black/85 to-transparent">
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  Brody on every job
                </p>
                <p className="mt-1 font-display text-xl font-bold text-summit-mist">
                  {site.owner}
                </p>
                <p className="text-sm text-summit-mist/70 mt-0.5">Langley, BC · Hands on the tools</p>
              </div>
            </div>
          </Parallax>
        </m.div>
      </div>
    </section>
  );
}
