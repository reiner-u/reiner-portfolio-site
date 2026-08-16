type SkillBadgeProps = {
  icon: React.ReactNode;
  label: string;
  accent?: "purple" | "blue" | "green" | "cyan" | "gold" | "red";
};

const accentBorderClasses: Record<
  NonNullable<SkillBadgeProps["accent"]>,
  string
> = {
  purple: "border-accent-purple",
  blue: "border-accent-blue",
  green: "border-accent-green",
  cyan: "border-accent-cyan",
  gold: "border-accent-gold",
  red: "border-accent-red",
};

export default function SkillBadge({
  icon,
  label,
  accent = "blue",
}: SkillBadgeProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg border-2 px-6 py-4 text-foreground ${accentBorderClasses[accent]}`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold tracking-wide">{label}</span>
    </div>
  );
}
