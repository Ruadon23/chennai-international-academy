import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { outcomes, spotlights } from "@/data/achievements";

export function OutcomesSection() {
  return (
    <section
      id="achievements"
      aria-labelledby="outcomes-heading"
      data-demo-content={outcomes.isDemo}
      className="bg-surface py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Student Outcomes"
            title={<span id="outcomes-heading">Results that follow from character.</span>}
            intro="We measure success by where our graduates go, and by what they do when they arrive."
          />
        </Reveal>

        <Reveal className="mt-12">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-hairline py-10 lg:grid-cols-4">
            {outcomes.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h3 className="text-card-title">University destinations</h3>
            <p className="mt-1 text-[13px] text-muted">
              Illustrative pathways by region and field of study.
            </p>
            <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
              {outcomes.destinations.map((d) => (
                <li
                  key={d.region}
                  className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-baseline"
                >
                  <span className="font-display text-2xl font-semibold text-navy">
                    {d.region}
                  </span>
                  <span className="text-sm text-muted">{d.fields}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-card-title">Research & community projects</h3>
            <ul className="mt-5 space-y-5">
              {outcomes.projects.map((p) => (
                <li key={p.title} className="border-l-2 border-brass pl-4">
                  <p className="font-semibold text-navy">{p.title}</p>
                  <p className="mt-1 text-sm text-muted">{p.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            {spotlights.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <figure>
                  <ImageFrame name={s.image} framed={false} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw" />
                  <blockquote className="mt-5">
                    <p className="font-display text-2xl font-medium leading-snug text-navy">
                      “{s.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="block font-semibold text-navy">{s.name}</span>
                    <span className="text-muted">{s.tagline}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14">
          <Button variant="editorial" href="/achievements">
            See all achievements
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
