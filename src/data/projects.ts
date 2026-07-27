import type { TechKey } from "./techStack";
export type Project = { /*helper file for use in the project cards*/
    id: string;
    title: string;
    description: string;
    motivation: string;
    techStack: TechKey[];
    image?: string; /*Place image in the public directory, that's where this will point to*/
    githubLink: string;
    liveLink?: string;
};
