import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  as: Tag = "div",
  interactive = false,
  className,
  children,
}: {
  as?: ElementType;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-hairline bg-surface p-6 shadow-card",
        interactive &&
          "transition-[box-shadow,transform] duration-200 ease-cia hover:-translate-y-0.5 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
