import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    const featured = projects.slice(0, 4); // Display only the first 4 projects as featured
    return (
        <>  
            <h1 className="text-center text-4xl font-semibold tracking-tight text-accent-blue mt-10 sm:text-5xl">
                Projects
            </h1>

             <div className="flex flex-wrap w-full flex-col items-center gap-8 px-6 py-12"> 
                {featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}