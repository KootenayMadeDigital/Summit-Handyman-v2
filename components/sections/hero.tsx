"use client";

import Image from "next/image";
import { ArrowRight, Mail, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { Parallax } from "@/components/ui/parallax";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="grainient-hero relative isolate overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28 min-h-[92vh] flex items-center">
      {/* Background photo with grade */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source srcSet="/images/hero-desktop.webp" media="(min-width: 768px)" />
          <Image
            src="/images/hero-mobile.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.32] [filter:saturate(0.85)_contrast(1.05)]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-summit-black/70 via-summit-black/85 to-summit-black" />
      </div>

      <div className="mx-auto max-w-[88rem] w-full px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-8 space-y-8 max-w-3xl">
          {/* Eyebrow trust strip */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-summit-gold/30 bg-summit-panel/50 backdrop-blur px-4 py-1.5 text-xs sm:text-sm"
          >
            <span className="flex items-center gap-0.5 text-summit-gold" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-summit-gold" strokeWidth={0} />
              ))}
            </span>
            <span className="font-semibold text-summit-mist">5.0 on Google</span>
            <span className="hidden sm:inline text-summit-stone">·</span>
            <span className="hidden sm:inline text-summit-mist/80">Licensed & Insured</span>
            <span className="hidden md:inline text-summit-stone">·</span>
            <span className="hidden md:inline text-summit-mist/80">Lower Mainland, BC</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-2xl font-extrabold tracking-tightest text-summit-mist text-balance leading-[0.95]"
          >
            Reliability
            <br />
            Reaching{" "}
            <span className="font-serif italic font-normal text-gradient-gold">
              New Heights.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-summit-mist/80 leading-relaxed text-pretty max-w-2xl"
          >
            Premium handyman repairs for property managers and families across{" "}
            <span className="text-summit-mist font-medium">
              Langley, Surrey, White Rock, Aldergrove, Abbotsford, and Cloverdale
            </span>
            . Done right the first time. Or I come back free.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            <MagneticCTA href="/quote" size="lg">
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </MagneticCTA>
            <Button
              href={`mailto:${site.contact.email}`}
              variant="secondary"
              size="lg"
            >
              <Mail className="h-5 w-5" />
              Email Brody Direct
            </Button>
          </motion.div>

          {/* Pricing transparency */}
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-sm text-summit-stone pt-4"
          >
            <span className="text-summit-gold font-semibold">$150 minimum per job</span> · No
            hourly games · Free estimates · 24-hr response
          </motion.p>
        </div>

        {/* Floating accent card (right) */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block lg:col-span-4"
        >
          <Parallax strength={0.06}>
          <div className="photo-grade relative aspect-[4/5] w-full max-w-sm ml-auto rounded-2xl overflow-hidden border border-summit-slate/60 shadow-panel-lg group">
            <Image
              src="/images/about-brody.webp"
              alt={`${site.owner}, owner of ${site.name}`}
              fill
              sizes="(max-width: 1024px) 0px, 384px"
              className="object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-summit-black via-summit-black/80 to-transparent">
              <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
                Owner-operated
              </p>
              <p className="mt-1 font-display text-xl font-bold text-summit-mist">
                {site.owner}
              </p>
              <p className="text-sm text-summit-mist/70 mt-0.5">
                Langley, BC · Founder
              </p>
            </div>
          </div>
          </Parallax>
        </motion.div>
      </div>
    </section>
  );
}
