"use client";

import { useState, useEffect } from "react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { galleryItems, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/cn";

const categories: GalleryCategory[] = ["All", "Campus", "Learning", "Sport", "Arts", "Student Life"];

export function GalleryViewer() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
      if (e.key === "ArrowRight") {
        const curIdx = filtered.findIndex((i) => i.id === activeItem.id);
        if (curIdx >= 0 && curIdx < filtered.length - 1) setActiveItem(filtered[curIdx + 1]);
      }
      if (e.key === "ArrowLeft") {
        const curIdx = filtered.findIndex((i) => i.id === activeItem.id);
        if (curIdx > 0) setActiveItem(filtered[curIdx - 1]);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeItem, filtered]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-hairline pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-button px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
              activeCategory === cat
                ? "bg-navy text-cream shadow-card"
                : "border border-hairline bg-surface text-ink/80 hover:bg-sand"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group cursor-pointer rounded-card border border-hairline bg-surface p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-card">
              <ImageFrame name={item.image} framed={false} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="rounded-button bg-cream px-3 py-1.5 text-xs font-semibold text-navy shadow-card">
                  View Focus
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-brass-hover">
                  {item.category}
                </span>
                <span className="text-muted">{item.location}</span>
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-ink/75 leading-relaxed line-clamp-2">
                {item.caption}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveItem(null)}
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-card border border-hairline bg-cream p-6 shadow-card-hover">
            <div className="flex items-start justify-between gap-4 border-b border-hairline pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brass-hover">
                  {activeItem.category} · {activeItem.location}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-navy">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-button border border-hairline text-navy hover:bg-sand"
              >
                <span className="sr-only">Close preview</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <ImageFrame name={activeItem.image} framed={false} sizes="80vw" />
            </div>

            <p className="mt-6 text-sm text-ink/90 leading-relaxed">
              {activeItem.caption}
            </p>

            <div className="mt-6 border-t border-hairline pt-4 flex items-center justify-between text-xs text-muted">
              <span>Press Escape to close</span>
              <span>Use arrow keys to navigate</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
