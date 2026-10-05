"use client";

import { useState } from "react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Card } from "@/components/ui/Card";
import { newsArticles } from "@/data/news";
import { cn } from "@/lib/cn";

const categories = ["All", "Academics", "Sport", "Arts", "Student Life", "Community"] as const;

export function NewsListing() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = selectedCategory === "All"
    ? newsArticles
    : newsArticles.filter((a) => a.category === selectedCategory);

  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const regularStories = filtered.filter((a) => a.id !== featured.id || selectedCategory !== "All");

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-hairline pb-6">
        <span className="mr-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Filter Dispatches:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "rounded-button px-4 py-1.5 text-xs font-semibold transition-all duration-200",
              selectedCategory === cat
                ? "bg-navy text-cream shadow-card"
                : "border border-hairline bg-surface text-ink/80 hover:bg-sand"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Lead Story (shown when All is active) */}
      {selectedCategory === "All" && (
        <article id={featured.id} className="mt-10 grid gap-8 rounded-card border border-hairline bg-surface p-8 shadow-card lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <ImageFrame name={featured.image} framed sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="rounded-button bg-brass/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brass-hover">
                Featured Dispatch
              </span>
              <span className="text-xs text-muted">{featured.date}</span>
            </div>
            <h2 className="mt-3 text-title text-navy font-display">
              {featured.title}
            </h2>
            <p className="mt-3 text-sm text-ink/85 leading-relaxed">
              {featured.summary}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs text-muted">
              <span>By {featured.author}</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </article>
      )}

      {/* Story Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {regularStories.map((story) => (
          <Card key={story.id} className="h-full border border-hairline bg-surface p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div>
              <div className="aspect-[16/10] overflow-hidden rounded-card mb-5">
                <ImageFrame name={story.image} framed={false} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-brass-hover">
                  {story.category}
                </span>
                <span className="text-muted">{story.date}</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy leading-snug">
                {story.title}
              </h3>
              <p className="mt-2 text-xs text-ink/80 leading-relaxed md:text-sm">
                {story.summary}
              </p>
            </div>
            <div className="mt-6 border-t border-hairline pt-4 flex items-center justify-between text-xs text-muted">
              <span>{story.author}</span>
              <span>{story.readTime}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
