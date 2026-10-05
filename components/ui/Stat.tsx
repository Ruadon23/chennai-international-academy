import { cn } from "@/lib/cn";

export function Stat({
  value,
  label,
  tone = "dark",
  className,
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <dd
        className={cn(
          "font-display text-5xl font-semibold leading-none",
          tone === "light" ? "text-cream" : "text-navy",
        )}
      >
        {value}
      </dd>
      <dt
        className={cn(
          "text-[13px] md:text-sm",
          tone === "light" ? "text-cream/70" : "text-muted",
        )}
      >
        {label}
      </dt>
    </div>
  );
}
