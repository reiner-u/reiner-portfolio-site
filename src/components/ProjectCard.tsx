import Image from "next/image";
import type { Project } from "@/data/projects";
import SkillBadge from "./SkillBadge";
import { techStack } from "@/data/techStack";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const links = (
    <div className="flex flex-wrap gap-4 pt-2">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md border-2 border-accent-blue px-4 py-2 text-sm font-semibold text-accent-blue transition-colors hover:bg-accent-blue hover:text-background"
      >
        GitHub
      </a>
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border-2 border-accent-green px-4 py-2 text-sm font-semibold text-accent-green transition-colors hover:bg-accent-green hover:text-background"
        >
          Live Demo
        </a>
      )}
    </div>
  );

  return (
    <div className="flex w-full max-w-4xl flex-col gap-6 rounded-lg border-2 border-foreground/20 px-8 py-8 text-foreground md:flex-row">
      {project.image && (
        <div className="flex flex-col gap-4 md:w-2/5 md:flex-shrink-0">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={500}
            height={350}
            className="h-auto w-full rounded-md object-cover"
          />
          {links}
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {project.title}
        </h2>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Description
          </h3>
          <p className="mt-1 text-foreground/80">{project.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-purple">
            Motivation
          </h3>
          <p className="mt-1 text-foreground/70">{project.motivation}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => {
            const entry = techStack[tech];
            const Icon = entry.icon;
            return (
              <SkillBadge
                key={tech}
                icon={<Icon />}
                label={entry.label}
                accent={entry.accent}
              />
            );
          })}
        </div>

        {!project.image && links}
      </div>
    </div>
  );
}
