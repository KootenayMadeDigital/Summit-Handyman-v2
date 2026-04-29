import Image from "next/image";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Static project card. Photo only. no caption, no chip, no overlay text.
 * The "Recent Summits" section title above the grid provides all the context
 * needed; per-tile labels would just repeat themselves.
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
      </div>
    </article>
  );
}
