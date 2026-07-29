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
export const projects: Project[] = [ //Add all projects here, each project should have a unique id, title, description, motivation, techStack (array of TechKey), optional image path, githubLink, and optional liveLink
  {
    id: "weather-app",
    title: "Weather Project",
    description: "A full-stack weather app. It detects your location on load and fetches live weather data immediately. You can also search any city by name. Either way, you get current conditions and a 24-hour hourly forecast pulled from the Open-Meteo API, no API key required.",
    motivation: "I built this to learn what it actually takes to connect a frontend to a backend, handle real API data end-to-end, and understand the React component lifecycle well enough to explain it in an interview.",
    techStack: ["python", "javascript", "css", "html"],
    image: "/test_image.jpg",
    githubLink: "https://github.com/reiner-u/Weather_Project",
  }
];