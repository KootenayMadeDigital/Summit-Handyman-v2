"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Interactive project card. Photo first, with a larger preview on click.
 * Captions stay intentionally generic until Brody confirms real project details.
 */
export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const imageAlt = `${project.title} from Brody's portfolio`;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const preview =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/88 px-4 py-6 backdrop-blur-md sm:px-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative flex max-h-full w-full max-w-6xl flex-col gap-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-surface-panel/90 px-4 py-3 shadow-2xl backdrop-blur">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent">
                    Recent Summit Preview
                  </p>
                  <h3 id={titleId} className="text-sm font-semibold text-fg sm:text-base">
                    Brody portfolio photo
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-fg transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Close image preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative min-h-[55vh] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl sm:min-h-[72vh]">
                <Image
                  src={project.afterImage}
                  alt={imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <article
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-divider-strong bg-surface-panel",
        "transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-accent-soft hover:shadow-gold-lg",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        aria-label="Open larger preview of recent Summit project photo"
      >
        <div className="summit-photo-motion photo-grade relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.afterImage}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/62 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/90 group-hover:text-ink">
            <ZoomIn className="h-3.5 w-3.5" />
            Preview
          </span>
        </div>
      </button>
      {preview}
    </article>
  );
}
