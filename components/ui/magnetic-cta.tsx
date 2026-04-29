"use client";

import * as React from "react";
import { Button, type ButtonProps } from "./button";

/**
 * Magnetic CTA — primary button that subtly attracts the cursor on desktop.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function MagneticCTA(props: ButtonProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let raf = 0;
    const strength = 0.25;
    const radius = 80;

    function onMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius * 1.6) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          if (el) el.style.transform = `translate(0px, 0px)`;
        });
        return;
      }
      const tx = dx * strength;
      const ty = dy * strength;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (el) el.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    }

    function onLeave() {
      if (!el) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (el) el.style.transform = `translate(0px, 0px)`;
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el?.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="inline-block transition-transform duration-200 ease-editorial will-change-transform"
    >
      <Button {...props} />
    </div>
  );
}
