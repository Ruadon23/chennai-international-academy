import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  badge,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: ReactNode;
  badge?: string;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-hairline bg-cream py-14 md:py-20", className)}>
      <Container>
        <Reveal>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-navy">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((b, i) => (
                  <li key={b.label} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-hairline">/</span>
                    {b.href && i < breadcrumbs.length - 1 ? (
                      <Link href={b.href} className="transition-colors hover:text-navy">
                        {b.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-navy">{b.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="flex flex-col items-start gap-4">
            {badge && (
              <span className="inline-block rounded-button border border-brass/40 bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brass-hover">
                {badge}
              </span>
            )}
            {eyebrow && <Eyebrow className="tracking-[0.2em]">{eyebrow}</Eyebrow>}
          </div>

          <h1 className="text-display mt-3 max-w-4xl text-navy">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">
            {description}
          </p>

          {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
