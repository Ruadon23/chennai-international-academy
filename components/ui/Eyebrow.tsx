import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "brass",
  className,
}: {
  children: ReactNode;
  tone?: "brass" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.18em] md:text-xs",
        tone === "brass" ? "text-brass-hover" : "text-brass",
        className,
      )}
    >
      {children}
    </p>
  );
}
