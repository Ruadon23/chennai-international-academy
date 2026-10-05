import Image from "next/image";
import { images, type ImageKey } from "@/data/images";
import { cn } from "@/lib/cn";

/**
 * Renders an image from the central registry (data/images.ts) inside a fixed
 * aspect-ratio frame so there is no layout shift. When `src` is null a clean
 * placeholder is shown.
 */
export function ImageFrame({
  name,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className,
}: {
  name: ImageKey;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const image = images[name];
  return (
    <figure className={cn("relative", className)}>
      {/* Architectural offset frame */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 -right-3 top-3 left-3 border border-brass/60"
      />
      <div
        className="relative overflow-hidden rounded-card bg-sand"
        style={{ aspectRatio: image.aspect }}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={image.alt}
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,var(--color-sand),var(--color-hairline))] p-6 text-center"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              className="h-10 w-10 text-oxford/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="6" y="10" width="36" height="28" rx="1" />
              <circle cx="17" cy="20" r="3" />
              <path d="m6 34 11-9 9 7 6-5 10 8" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {image.label}
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}
