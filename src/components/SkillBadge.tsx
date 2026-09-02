type SkillBadgeProps = {
  icon: React.ReactNode;
  label: string;
  accent?: "purple" | "blue" | "green" | "cyan" | "gold" | "red";
};

const accentTopBorderClasses: Record<
  NonNullable<SkillBadgeProps["accent"]>,
  string
> = {
  purple: "border-t-accent-purple",
  blue: "border-t-accent-blue",
  green: "border-t-accent-green",
  cyan: "border-t-accent-cyan",
  gold: "border-t-accent-gold",
  red: "border-t-accent-red",
};

export default function SkillBadge({
  icon,
  label,
  accent = "blue",
}: SkillBadgeProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg border-x-2 border-b-2 border-t-4 border-x-foreground/20 border-b-foreground/20 px-6 py-4 text-foreground ${accentTopBorderClasses[accent]}`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold tracking-wide">{label}</span>
    </div>
  );
}
