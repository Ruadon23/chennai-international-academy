import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pathways } from "@/data/academics";
import { cn } from "@/lib/cn";

export function AcademicPathways() {
  return (
    <section
      id="academics"
      aria-labelledby="pathways-heading"
      className="bg-surface py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Academic Pathways"
            title={<span id="pathways-heading">Three stages, one continuous education.</span>}
            intro="From the first day of Early Years to the final Senior examinations, each stage builds deliberately on the last."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {pathways.map((p, i) => (
            <Reveal key={p.id}>
              <article
                id={p.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={cn(
                    "lg:col-span-6",
                    i % 2 === 1 && "lg:order-2",
                  )}
                >
                  <ImageFrame
                    name={p.image}
                    framed={false}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="font-display text-6xl font-medium leading-none text-brass md:text-7xl"
                    >
                      {p.numeral}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {p.range}
                    </p>
                  </div>
                  <h3 className="mt-4 text-title">{p.title}</h3>
                  <p className="mt-4 text-base text-ink/90 md:text-[17px]">
                    {p.philosophy}
                  </p>

                  <Card className="mt-6 p-5!">
                    <dl className="grid gap-4 sm:grid-cols-3">
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
                  </Card>

                  <div className="mt-6">
                    <Button variant="editorial" href={`/academics#${p.id}`}>
                      Explore {p.title}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
