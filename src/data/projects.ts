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
    },
    {
        id: "blockblast-solver",
        title: "BlockBlast Solver",
        description: "A solver for the mobile puzzle game Block Blast, built entirely from scratch in Python and presented through Streamlit. You feed it your current board and the three pieces you've been dealt. It figures out the best place to put all of them and how to place them.",
        motivation: "I built this to learn how to implement a backtracking algorithm and to explore the capabilities of Streamlit for building interactive web apps in Python. Also, because BlockBlast is a fun game I was obsessed with and I wanted to understand the mechanics of it better.",
        techStack: ["python", "streamlit", "numpy", "css"],
        image: "/test_image.jpg",
        githubLink: "https://github.com/reiner-u/BlockBlast_Solver",
    },
    {
        id:"humanbenchmark-gamedevice",
        title: "HumanBenchmark Game Device",
        description: "A bespoke game device designed to test human reaction times and cognitive abilities with a variety of interactive games. It features a 3D-designed and printed enclosure, custom PCB, and a Node-RED IoT dashboard alongside software built on C++ and the Arduino framework running on a microcontroller.",
        motivation: "Built within a 2.5-month timeline for a capstone project in my Computer Engineering program alongside a partner, this unique project was designed to test my skills in hardware design, embedded systems programming, project iteration and planning, and IoT dashboard development. It was a challenging but rewarding experience that allowed me to apply my knowledge in a real-world context.",
        techStack: ["cpp", "esp32", "arduino", "nodered", "platformio"],
        image: "/test_image.jpg",
        githubLink: "https://github.com/reiner-u/humanbenchmark_gamedevice",
    }
];