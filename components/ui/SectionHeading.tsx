import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2" | "h3";
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={light ? "light" : "brass"} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <Tag className={cn("text-title", light && "text-cream")}>{title}</Tag>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg",
            light ? "text-cream/80" : "text-muted",
          )}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
