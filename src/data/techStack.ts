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
  SiSupabase,
  SiNetlify,
  SiRender
} from "react-icons/si";
import { IconType } from "react-icons";
import SiPlaywright from "@/components/icons/SiPlaywright";

/*This is all designed to use similar structure as SkillBadges on the homepage, but icons are looked up on render time for use in each project card*/
type TechEntry = {
    label: string;
    icon: IconType;
    accent: "blue" | "purple" | "cyan" | "green" | "gold";
}
const techStack: Record<string, TechEntry> = { /*TODO: Add more tech entries here as needed*/
    react: { label: "React", icon: SiReact, accent: "purple" },
    nextjs: { label: "Next.js", icon: SiNextdotjs, accent: "blue" },
    typescript: { label: "TypeScript", icon: SiTypescript, accent: "green" },
    tailwindcss: { label: "Tailwind CSS", icon: SiTailwindcss, accent: "cyan" },
    python: { label: "Python", icon: SiPython, accent: "gold" },
    git: { label: "Git", icon: SiGit, accent: "purple" },
    cpp: { label: "C++", icon: SiCplusplus, accent: "blue" },
    javascript: { label: "JavaScript", icon: SiJavascript, accent: "green" }, 
    html: { label: "HTML", icon: SiHtml5, accent: "cyan" }, 
    css: { label: "CSS", icon: SiCss, accent: "gold" },
    streamlit: { label: "Streamlit", icon: SiStreamlit, accent: "purple" },
    nodered: { label: "Node-RED", icon: SiNodered, accent: "blue" },
    esp32: { label: "ESP32", icon: SiEspressif, accent: "green" },
    arduino: { label: "Arduino", icon: SiArduino, accent: "cyan" },
    platformio: { label: "PlatformIO", icon: SiPlatformio, accent: "gold" },
    numpy: { label: "NumPy", icon: SiNumpy, accent: "purple" },
    fastapi: { label: "FastAPI", icon: SiFastapi, accent: "blue" },
    pandas: { label: "pandas", icon: SiPandas, accent: "green" },
    selenium: { label: "Selenium", icon: SiSelenium, accent: "cyan" },
    playwright: { label: "Playwright", icon: SiPlaywright, accent: "gold" },
    supabase: { label: "Supabase", icon: SiSupabase, accent: "purple" },
    netlify: { label: "Netlify", icon: SiNetlify, accent: "blue" },
    render: { label: "Render", icon: SiRender, accent: "green" }
};
export { techStack }; {/*Exporting the techStack object for use in project cards*/}
export type TechKey = keyof typeof techStack; {/*Exporting the type of keys in techStack for use in projects helper files*/}
