"use client";

import * as React from "react";

/**
 * Subtle scroll-tied parallax. Translates a child element vertically based on
 * its position in the viewport. Skipped automatically on touch devices and
 * when prefers-reduced-motion is set.
 */
export function Parallax({
  children,
  strength = 0.12,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let raf = 0;
    const tick = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * strength;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
