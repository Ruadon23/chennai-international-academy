import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

/** Placeholder crest + wordmark. Replace the SVG with the real school crest. */
export function Crest({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("inline-flex items-center gap-3", className)}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 40 46"
        className="h-10 w-9 shrink-0"
        fill="none"
      >
        <path
          d="M20 1.5 37.5 7v18c0 10-7.500 16.500-17.500 19.500C10 41.500 2.500 35 2.500 25V7L20 1.500Z"
          className={light ? "fill-cream" : "fill-navy"}
          stroke="#C59B27"
          strokeWidth="1.500"
        />
        <path
          d="M12 15h16M20 15v18M13 33h14"
          stroke="#C59B27"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.3rem] font-semibold tracking-tight",
            light ? "text-cream" : "text-navy",
          )}
        >
          Chennai International
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-brass">
          Academy
        </span>
      </span>
    </Link>
  );
}
