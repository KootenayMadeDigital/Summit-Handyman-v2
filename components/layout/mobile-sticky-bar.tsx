"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MessageSquare, FileText } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Mobile sticky bar with smart-hide behavior.
 *
 * Marketing-psychology rationale:
 *   - Two simultaneous CTAs compete for attention (Hick's Law: more choices
 *     = slower decision). When the user is actively reading a section that
 *     ALREADY has a quote CTA in the viewport, the sticky bar's identical
 *     ask is noise and dampens conversion.
 *   - When the user has scrolled past the inline CTA (or hasn't reached one
 *     yet), the sticky bar guarantees the path back. Just-in-time visibility.
 *   - Net effect: exactly ONE primary CTA visible at any scroll position.
 *     Same pattern Stripe, Linear, and Shopify use on mobile.
 *
 * Implementation:
 *   - IntersectionObserver watches every element with `data-quote-cta`
 *     (auto-applied by Button/MagneticCTA when href starts with /quote).
 *   - When any of those elements is even partially in view, the bar slides
 *     down and fades out. When all are out of view, the bar slides up.
 *   - Reduced-motion users still get a fast crossfade with no translate.
 */
export function MobileStickyBar() {
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Track which CTAs are intersecting at any moment.
    const visibleSet = new Set<Element>();

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-quote-cta]"));
    if (targets.length === 0) {
      // No inline CTAs on this page (rare). Always show the bar.
      setHidden(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSet.add(entry.target);
          } else {
            visibleSet.delete(entry.target);
          }
        }
        setHidden(visibleSet.size > 0);
      },
      // Trigger as soon as any pixel enters viewport, treating bar height
      // as a buffer so a CTA at the very bottom still counts as "visible".
      { rootMargin: "0px 0px -88px 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t));

    // Observe DOM mutations so dynamically-mounted CTAs (e.g. quote-form
    // success state) are picked up.
    const mutationObserver = new MutationObserver(() => {
      const fresh = Array.from(document.querySelectorAll<HTMLElement>("[data-quote-cta]"));
      fresh.forEach((el) => {
        if (!targets.includes(el)) {
          observer.observe(el);
          targets.push(el);
        }
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-divider mobile-bar pb-[env(safe-area-inset-bottom)]",
        "transition-transform duration-300 ease-editorial",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
      role="navigation"
      aria-label="Quick contact"
      aria-hidden={hidden}
    >
      <div className="grid grid-cols-5 gap-1 p-2">
        <Link
          href="/quote"
          className="col-span-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent text-white font-display font-bold text-sm transition-colors active:bg-accent-hot shadow-gold"
          aria-label="Get a quote"
        >
          <FileText className="h-4 w-4" />
          Get a Quote
        </Link>
        <a
          href={`mailto:${site.contact.email}`}
          className="col-span-1 flex flex-col items-center gap-0.5 py-2 rounded-xl text-fg active:bg-surface-elevated transition-colors"
          aria-label="Email Brody"
        >
          <Mail className="h-4 w-4 text-accent" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Email</span>
        </a>
        <a
          href={`sms:${site.contact.phoneTel}`}
          className="col-span-1 flex flex-col items-center gap-0.5 py-2 rounded-xl text-fg active:bg-surface-elevated transition-colors"
          aria-label="Text Brody"
        >
          <MessageSquare className="h-4 w-4 text-accent" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Text</span>
        </a>
      </div>
    </div>
  );
}
