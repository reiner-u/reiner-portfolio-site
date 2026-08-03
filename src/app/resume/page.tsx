import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import SkillBadge from "@/components/SkillBadge";
import { techStack, type TechKey } from "@/data/techStack";

type SkillCategory = {
  label: string;
  skills: TechKey[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["python", "cpp", "javascript", "typescript", "html", "css"],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      "react",
      "nextjs",
      "tailwindcss",
      "fastapi",
      "pandas",
      "numpy",
      "streamlit",
      "git",
    ],
  },
  {
    label: "Testing & QA",
    skills: ["selenium", "playwright"],
  },
  {
    label: "Hardware & IoT",
    skills: ["esp32", "arduino", "platformio", "nodered"],
  },
];

export default function Resume() {
  const filePath = path.join(process.cwd(), "src/data/resume.md");
  const resumeContent = fs.readFileSync(filePath, "utf8");

  return (
    <div className="flex w-full flex-col items-center gap-12 px-6 py-24">
      <h1 className="text-center text-4xl font-semibold tracking-tight text-accent-blue sm:text-5xl">
        Resume
      </h1>

      <a
        href="/resume.pdf"
        download
        className="rounded-md border-2 border-accent-blue px-4 py-2 text-sm font-semibold text-accent-blue transition-colors hover:bg-accent-blue hover:text-background"
      >
        Download PDF
      </a>

      <div className="prose prose-invert w-full max-w-3xl">
        <ReactMarkdown>{resumeContent}</ReactMarkdown>
      </div>

      <div className="flex w-full max-w-3xl flex-col gap-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-purple">
          Additional Skills
        </h2>
        {skillCategories.map((category) => (
          <div key={category.label} className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((key) => {
                const entry = techStack[key];
                const Icon = entry.icon;
                return (
                  <SkillBadge
                    key={key}
                    icon={<Icon />}
                    label={entry.label}
                    accent={entry.accent}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
