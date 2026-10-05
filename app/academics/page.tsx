import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryDrawer } from "@/components/home/EnquiryDrawer";
import { academicsPageData, pathways } from "@/data/academics";

export const metadata: Metadata = {
  title: "Academics & Curriculum",
  description:
    "Explore the Cambridge and CBSE academic pathways, inquiry-based curriculum, and scholastic support at Chennai International Academy.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow={academicsPageData.hero.eyebrow}
        title={academicsPageData.hero.title}
        description={academicsPageData.hero.description}
        breadcrumbs={[{ label: "Academics" }]}
        badge="Dual Curriculum Framework"
        actions={
          <>
            <Button variant="primary" href="#curriculum">
              Compare Pathways
            </Button>
            <EnquiryDrawer label="Inquire for Admissions" variant="secondary" />
          </>
        }
      />

      {/* Academic Philosophy */}
      <section aria-labelledby="philosophy-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pedagogical Pillars"
              title={<span id="philosophy-heading">How we teach students to think through ambiguity.</span>}
              intro="Our curriculum emphasizes deep conceptual mastery over surface recall. We train students to question premise, synthesize conflicting data, and defend reasoned arguments."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {academicsPageData.philosophyPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 60}>
                <div className="h-full border-t-2 border-brass bg-sand p-6 rounded-card border-x border-b border-hairline flex flex-col justify-between">
                  <div>
                    <span className="font-display text-2xl font-semibold text-brass-hover">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Academic Pathways: Detailed Deep Dive */}
      <section aria-labelledby="pathways-heading" className="border-t border-hairline bg-cream py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Three Progressive Stages"
              title={<span id="pathways-heading">The Academic Pathway: Early Years to Senior Capstone.</span>}
              intro="Each phase is developmentally tailored to transition children from spontaneous sensory discovery into disciplined, original scholastic research."
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {pathways.map((p, idx) => (
              <Reveal key={p.id}>
                <article
                  id={p.id}
                  className="grid items-start gap-10 rounded-card border border-hairline bg-surface p-8 shadow-card lg:grid-cols-12 lg:gap-14"
                >
                  <div className="lg:col-span-5">
                    <span className="font-display text-6xl font-medium text-brass leading-none">
                      {p.numeral}
                    </span>
                    <h3 className="mt-2 text-title text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                      {p.range} · {p.ages}
                    </p>
                    <p className="mt-4 text-base text-ink/90 leading-relaxed">
                      {p.philosophy}
                    </p>

                    <div className="mt-6">
                      <ImageFrame name={p.image} framed={false} sizes="(min-width: 1024px) 38vw, 100vw" />
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <dl className="grid gap-6 sm:grid-cols-2 border-b border-hairline pb-8">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                          Academic Core
                        </dt>
                        <dd className="mt-2 text-sm text-ink/85 leading-relaxed">
                          {p.focus}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                          Enrichment & Arts
                        </dt>
                        <dd className="mt-2 text-sm text-ink/85 leading-relaxed">
                          {p.enrichment}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                          Student Formation
                        </dt>
                        <dd className="mt-2 text-sm text-ink/85 leading-relaxed">
                          {p.development}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-8 bg-sand p-6 rounded-card">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-navy">
                        Key Learning Experiences in {p.title}
                      </h4>
                      <ul className="mt-4 space-y-2.5">
                        {p.experiences.map((exp) => (
                          <li key={exp} className="flex items-start gap-3 text-sm text-ink/90">
                            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <EnquiryDrawer label={`Inquire for ${p.title}`} variant="accent" />
                      <span className="text-xs text-muted">
                        Stage {idx + 1} of 3
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Curriculum Dual-Track Comparison */}
      <section id="curriculum" aria-labelledby="curriculum-heading" className="border-t border-hairline bg-sand py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Curriculum Options"
              title={<span id="curriculum-heading">Cambridge & CBSE: Two rigorous pathways, one academy.</span>}
              intro="At Grade 9, students choose the curricular track best aligned with their higher education aspirations. Both pathways enjoy equal access to our faculty, laboratories, and arts studios."
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {academicsPageData.curriculumTracks.map((track) => (
              <Reveal key={track.id}>
                <Card className="h-full border border-hairline bg-surface p-8 shadow-card flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-button bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brass-hover">
                      {track.badge}
                    </span>
                    <h3 className="mt-3 text-title text-navy">
                      {track.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      {track.code}
                    </p>
                    <p className="mt-4 text-sm text-ink/85 leading-relaxed">
                      {track.description}
                    </p>

                    <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-brass-hover">
                      Pathway Hallmarks
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {track.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-ink/90 md:text-sm">
                          <span aria-hidden="true" className="text-brass">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-brass-hover">
                      Core Disciplines Offered
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {track.subjects.map((sub) => (
                        <span key={sub} className="rounded-button border border-hairline bg-cream px-3 py-1 text-xs text-navy font-medium">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-hairline pt-6">
                    <p className="text-xs text-muted italic">
                      Fictional curriculum representation for demonstration purposes.
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Assessment Framework */}
      <section aria-labelledby="assessment-heading" className="bg-surface py-16 md:py-24 border-t border-hairline">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Evaluation & Growth"
                title={<span id="assessment-heading">{academicsPageData.assessmentFramework.title}</span>}
                intro={academicsPageData.assessmentFramework.intro}
              />
              <div className="mt-8">
                <ImageFrame name="curriculumCambridge" framed sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <div className="space-y-6">
                {academicsPageData.assessmentFramework.points.map((pt) => (
                  <div key={pt.title} className="border-l-2 border-brass bg-cream p-6 rounded-r-card border-y border-r border-hairline">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {pt.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                      {pt.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Beyond the Classroom & Academic Support */}
      <section aria-labelledby="enrichment-heading" className="bg-cream py-16 md:py-24 border-t border-hairline">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Intellectual Extension"
              title={<span id="enrichment-heading">Scholarship beyond textbook boundaries.</span>}
              intro="True intellectual vitality extends far past the classroom door into laboratories, debating chambers, and creative ensembles."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academicsPageData.beyondClassroom.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <Card className="h-full border border-hairline bg-surface p-6 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                    {item.summary}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 border-t border-hairline pt-14">
            <h3 className="text-center font-display text-2xl font-semibold text-navy">
              Dedicated Academic Support Centers
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {academicsPageData.supportSystem.map((sup) => (
                <div key={sup.title} className="rounded-card border border-hairline bg-sand p-6">
                  <h4 className="font-display text-lg font-semibold text-navy">
                    {sup.title}
                  </h4>
                  <p className="mt-2 text-xs text-ink/80 leading-relaxed md:text-sm">
                    {sup.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy py-16 md:py-20 text-cream">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display text-cream">
              Find Your Child&apos;s Academic Pathway
            </h2>
            <p className="mt-4 text-base text-cream/80">
              Speak with our Academic Director to discuss your child&apos;s learning profile and subject selections.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <EnquiryDrawer label="Start Academic Dialogue" variant="accent" />
              <Button variant="inverse" href="/admissions">
                Admissions Timeline
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
