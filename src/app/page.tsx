import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiCplusplus,
  SiFastapi,
  SiSelenium,
} from "react-icons/si";
import SkillBadge from "@/components/SkillBadge";

export default function Home() {
  return (
    <>
      <section className="relative z-20 flex h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center overscroll-y-none"> {/*Greetings/blurb section*/}
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hi! I’m{" "}
            <span className="bg-linear-to-r from-accent-blue to-accent-red bg-clip-text text-transparent">
              Reiner Umila.
            </span>
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            I’m an aspiring software developer and software engineering student at McMaster University.
          </p>
        </div>

        <a
          href="#homepage"
          aria-label="Scroll to homepage content"
          className="mt-8 animate-bounce text-3xl text-accent-blue"
        >
          ↓
        </a>
      </section>

      <section
        id="homepage"
        className="flex min-h-screen flex-1 flex-col items-center justify-center gap-12 px-6 py-24"
      > {/*BIO SECTION*/}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h2>

        <div className="flex w-full max-w-5xl flex-col gap-10 md:flex-row-reverse md:items-center">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
            I’m a student at McMaster University’s Software Engineering Program, currently in my co-op term with 
            the Ontario Public Service working in a Software QA role. I have a passion for building full-stack applications and 
            exploring and leveraging new concepts and technologies. Right now, I’m working on a personal Notion-clone project 
            using React and Next.js to create a dynamic and interactive user experience. I enjoy and relish the 
            opportunity to continuously learn and improve my skills in software development.
          </p>

          {/* TODO: add stuff here as I continuosly improve my skillset*/}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <SkillBadge icon={<SiReact />} label="React" accent="purple" />
            <SkillBadge icon={<SiNextdotjs />} label="Next.js" accent="blue" />
            <SkillBadge icon={<SiTypescript />} label="TypeScript" accent="green" />
            <SkillBadge icon={<SiTailwindcss />} label="Tailwind CSS" accent="cyan" />
            <SkillBadge icon={<SiPython />} label="Python" accent="gold" />
            <SkillBadge icon={<SiGit />} label="Git" accent="purple" />
            <SkillBadge icon={<SiCplusplus />} label="C++" accent="blue" />
            <SkillBadge icon={<SiFastapi />} label="FastAPI" accent="green" />
            <SkillBadge icon={<SiSelenium />} label="Selenium" accent="cyan" />
          </div>
          
        </div>
      </section>
    </>
  );
}
