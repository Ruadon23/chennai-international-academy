import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { gazette } from "@/data/news";

export function Gazette() {
  return (
    <section
      id="gazette"
      aria-labelledby="gazette-heading"
      className="bg-surface py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <header className="border-y-4 border-double border-navy py-5 text-center">
            <h2
              id="gazette-heading"
              className="font-display text-5xl font-semibold tracking-tight md:text-7xl"
            >
              {gazette.title}
            </h2>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted md:text-xs">
              {gazette.edition}
            </p>
          </header>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-0">
          <Reveal className="lg:col-span-6 lg:pr-10">
            <article>
              <ImageFrame name="gazetteLead" framed={false} sizes="(min-width: 1024px) 45vw, 100vw" />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-hover">
                {gazette.lead.kicker}
              </p>
              <h3 className="mt-2 text-title">
                <Link href={gazette.lead.href} className="hover:underline decoration-brass underline-offset-4">
                  {gazette.lead.headline}
                </Link>
              </h3>
              <p className="mt-3 text-[15px] text-ink/90 md:text-base">
                {gazette.lead.excerpt}
              </p>
              <p className="mt-3 text-[13px] text-muted">{gazette.lead.meta}</p>
            </article>
          </Reveal>

          <Reveal
            delay={80}
            className="lg:col-span-3 lg:border-l lg:border-hairline lg:px-8"
          >
            <ul className="divide-y divide-hairline border-y border-hairline lg:border-y-0">
              {gazette.briefs.map((b) => (
                <li key={b.headline} className="py-6 first:pt-0 lg:py-7 lg:first:pt-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-hover">
                    {b.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-snug">
                    <Link href={b.href} className="hover:underline decoration-brass underline-offset-4">
                      {b.headline}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[13px] text-muted">{b.meta}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={120}
            className="lg:col-span-3 lg:border-l lg:border-hairline lg:pl-8"
          >
            <aside aria-labelledby="events-heading" className="bg-sand p-6">
              <h3 id="events-heading" className="text-card-title">
                Upcoming events
              </h3>
              <ul className="mt-5 divide-y divide-hairline">
                {gazette.events.map((e) => (
                  <li key={e.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <time className="flex h-14 w-12 shrink-0 flex-col items-center justify-center border border-navy bg-surface leading-none">
                      <span className="font-display text-2xl font-semibold text-navy">
                        {e.day}
                      </span>
                      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brass-hover">
                        {e.month}
                      </span>
                    </time>
                    <div>
                      <p className="font-semibold leading-snug text-navy">{e.title}</p>
                      <p className="mt-0.5 text-[13px] text-muted">{e.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button variant="editorial" href="/news#calendar" className="mt-6 text-sm">
                Full calendar
              </Button>
            </aside>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <Button variant="secondary" href="/news">
            Read more news
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
