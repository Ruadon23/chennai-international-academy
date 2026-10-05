"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Button } from "@/components/ui/Button";
import type { Pathway } from "@/data/academics";
import { cn } from "@/lib/cn";

/**
 * Academic Pathways — interactive journey. A progress rail with three stages;
 * selecting one transitions the panel below. Implements the WAI-ARIA tabs
 * pattern (roving tabindex, arrow/Home/End keys). All panels are rendered in
 * the HTML (inactive ones `hidden`), so content remains available without JS.
 */
export function PathwaysJourney({ pathways }: { pathways: Pathway[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (index: number, focus = false) => {
    setActive(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = pathways.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      select(next, true);
    }
  };

  return (
    <div>
      {/* Journey rail */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[22px] h-px bg-hairline md:top-[26px]"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 top-[22px] h-px origin-left bg-brass transition-transform duration-500 ease-cia md:top-[26px]"
          style={{
            width: "100%",
            transform: `scaleX(${active / (pathways.length - 1)})`,
          }}
        />
        <div
          role="tablist"
          aria-label="Academic stages"
          className="relative grid grid-cols-3"
        >
          {pathways.map((p, i) => {
            const selected = i === active;
            const reached = i <= active;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${p.id}`}
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${p.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "group flex min-h-11 flex-col items-start gap-3 text-left",
                  i === 1 && "items-center text-center",
                  i === 2 && "items-end text-right",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-11 w-11 items-center justify-center border bg-cream font-display text-xl font-semibold transition-colors duration-300 ease-cia md:h-[52px] md:w-[52px] md:text-2xl",
                    selected
                      ? "border-brass bg-navy text-brass"
                      : reached
                        ? "border-brass text-navy"
                        : "border-hairline text-muted group-hover:border-brass",
                  )}
                >
                  {p.numeral}
                </span>
                <span className="flex flex-col">
                  <span
                    className={cn(
                      "font-display text-lg font-semibold leading-tight transition-colors duration-300 md:text-2xl",
                      selected ? "text-navy" : "text-muted group-hover:text-navy",
                    )}
                  >
                    {p.title.replace(" School", "")}
                    <span className="hidden md:inline"> School</span>
                  </span>
                  <span className="mt-0.5 hidden text-xs text-muted md:block">
                    {p.range}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panels */}
      <div className="mt-10 md:mt-14">
        {pathways.map((p, i) => (
          <div
            key={p.id}
            role="tabpanel"
            id={`panel-${p.id}`}
            aria-labelledby={`tab-${p.id}`}
            hidden={i !== active}
            tabIndex={0}
            className="animate-fade-up grid items-start gap-8 lg:grid-cols-12 lg:gap-14"
          >
            <div className="lg:col-span-5">
              <ImageFrame
                name={p.image}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
                {p.range} · {p.ages}
              </p>
              <h3 className="mt-3 text-title">{p.title}</h3>
              <p className="mt-4 max-w-2xl text-base text-ink/90 md:text-[17px]">
                {p.philosophy}
              </p>

              <dl className="mt-8 grid gap-6 border-t border-hairline pt-6 sm:grid-cols-3">
                {[
                  ["Academic focus", p.focus],
                  ["Enrichment", p.enrichment],
                  ["Student development", p.development],
                ].map(([term, text]) => (
                  <div key={term}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brass-hover">
                      {term}
                    </dt>
                    <dd className="mt-1.5 text-[13px] leading-relaxed text-ink/90 md:text-sm">
                      {text}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 bg-sand p-5">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                  A glimpse of learning
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {p.experiences.map((x) => (
                    <li key={x} className="flex gap-3 text-sm text-ink/90">
                      <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 bg-brass" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Button variant="editorial" href={`/academics#${p.id}`}>
                  Explore {p.title}
                </Button>
                {i < pathways.length - 1 && (
                  <button
                    type="button"
                    onClick={() => select(i + 1)}
                    className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-navy"
                  >
                    Continue to {pathways[i + 1].title}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 ease-cia group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
