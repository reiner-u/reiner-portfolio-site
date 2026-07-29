import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiCss,
} from "react-icons/si";
import { IconType } from "react-icons";

/*This is all designed to use similar structure as SkillBadges on the homepage, but icons are looked up on render time for use in each project card*/
type TechEntry = {
    label: string;
    icon: IconType;
    accent: "blue" | "purple" | "cyan" | "green";
}
const techStack: Record<string, TechEntry> = { /*TODO: Add more tech entries here as needed*/
    react: { label: "React", icon: SiReact, accent: "blue" },
    nextjs: { label: "Next.js", icon: SiNextdotjs, accent: "purple" },
    typescript: { label: "TypeScript", icon: SiTypescript, accent: "cyan" },
    tailwindcss: { label: "Tailwind CSS", icon: SiTailwindcss, accent: "green" },
    python: { label: "Python", icon: SiPython, accent: "blue" },
    git: { label: "Git", icon: SiGit, accent: "purple" },
    cpp: { label: "C++", icon: SiCplusplus, accent: "cyan" },
    javascript: { label: "JavaScript", icon: SiJavascript, accent: "green" }, 
    html: { label: "HTML", icon: SiHtml5, accent: "blue" }, 
    css: { label: "CSS", icon: SiCss, accent: "purple" },
};
export { techStack }; {/*Exporting the techStack object for use in project cards*/}
export type TechKey = keyof typeof techStack; {/*Exporting the type of keys in techStack for use in projects helper files*/}
