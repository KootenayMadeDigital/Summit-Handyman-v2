import Image from "next/image";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Static project card. Single photo with bottom gradient + caption overlay.
 * No top-right area/sample pills — captions stay generic and honest.
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
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-summit-gold font-semibold mb-1">
            Recent Summit
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
