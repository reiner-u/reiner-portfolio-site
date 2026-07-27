import Image from "next/image";
import type { Project } from "@/data/projects";
import SkillBadge from "./SkillBadge"
import {techStack} from "@/data/techStack";
type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-3 rounded-lg border-2 border-foreground/20 px-6 py-4 text-foreground">
            {project.image && (
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={340}
                    className="h-auto w-full rounded-md object-cover"
                />
            )}

        <h3 className="text-lg font-semibold tracking-wide">{project.title}</h3>
        <p className="text-sm text-foreground/80">{project.description}</p>
        <p className="text-sm text-foreground/70">{project.motivation}</p>

        
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

        <div className="flex gap-4">
            {project.githubLink && (
            <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-blue hover:underline"
            >
                GitHub
            </a>
            )}
            {project.liveLink && (
            <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-blue hover:underline"
            >
                Live Demo
            </a>
            )}
        </div>
        </div>
  );
}
