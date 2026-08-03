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
  SiStreamlit,
  SiNumpy,
  SiNodered,
  SiEspressif,
  SiArduino,
  SiPlatformio,
  SiFastapi,
  SiPandas,
  SiSelenium,
} from "react-icons/si";
import { IconType } from "react-icons";
import SiPlaywright from "@/components/icons/SiPlaywright";

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
    streamlit: { label: "Streamlit", icon: SiStreamlit, accent: "cyan" },
    nodered: { label: "Node-RED", icon: SiNodered, accent: "green" },
    esp32: { label: "ESP32", icon: SiEspressif, accent: "blue" },
    arduino: { label: "Arduino", icon: SiArduino, accent: "purple" },
    platformio: { label: "PlatformIO", icon: SiPlatformio, accent: "cyan" },
    numpy: { label: "NumPy", icon: SiNumpy, accent: "green" },
    fastapi: { label: "FastAPI", icon: SiFastapi, accent: "green" },
    pandas: { label: "pandas", icon: SiPandas, accent: "purple" },
    selenium: { label: "Selenium", icon: SiSelenium, accent: "blue" },
    playwright: { label: "Playwright", icon: SiPlaywright, accent: "cyan" }
};
export { techStack }; {/*Exporting the techStack object for use in project cards*/}
export type TechKey = keyof typeof techStack; {/*Exporting the type of keys in techStack for use in projects helper files*/}
