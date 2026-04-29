import Image from "next/image";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Static project card. Single photo, area chip, sample badge if applicable,
 * area + duration eyebrow, title, short story. NOT a link — projects don't
 * have dedicated detail pages; the landing-page Recent Summits + Instagram
 * link cover the discovery surface.
 */
export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-divider-strong bg-surface-panel",
        "transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-accent-soft hover:shadow-gold-lg",
        className,
      )}
    >
      <div className="photo-grade relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.afterImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-summit-black/95 via-summit-black/30 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="rounded-full bg-summit-black/70 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-summit-gold border border-summit-gold/30">
            {project.area}
          </span>
          {project.isSample && (
            <span className="rounded-full bg-summit-black/70 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-summit-mist/80 border border-summit-mist/20">
              Sample
            </span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-summit-gold font-semibold mb-1">
            {project.duration}
          </p>
          <h3 className="font-display text-lg sm:text-xl font-bold text-summit-mist text-balance leading-snug">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-summit-mist/75 leading-snug text-pretty line-clamp-2">
            {project.shortStory}
          </p>
        </div>
      </div>
    </article>
  );
}
