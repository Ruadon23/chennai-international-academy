import { cn } from "@/lib/cn";

/** Must be rendered inside a <dl>. */
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
    <div className={cn("flex flex-col-reverse justify-end gap-2", className)}>
      <dt
        className={cn(
          "text-[13px] md:text-sm",
          tone === "light" ? "text-cream/70" : "text-muted",
        )}
      >
        {label}
      </dt>
      <dd
        className={cn(
          "font-display text-4xl font-semibold leading-[1.05] md:text-5xl",
          tone === "light" ? "text-cream" : "text-navy",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
