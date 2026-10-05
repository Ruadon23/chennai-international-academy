import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryDrawer } from "@/components/home/EnquiryDrawer";
import { achievementsPageData, outcomes } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Student Achievements & Outcomes",
  description:
    "Explore academic outcomes, independent research capstones, competitive honors, and student profiles at Chennai International Academy.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow={achievementsPageData.hero.eyebrow}
        title={achievementsPageData.hero.title}
        description={achievementsPageData.hero.description}
        badge="Illustrative Outcomes Portfolio"
        breadcrumbs={[{ label: "Achievements" }]}
        actions={
          <>
            <EnquiryDrawer label="Inquire for Admissions" variant="accent" />
            <Button variant="secondary" href="#stories">
              Read Student Stories
            </Button>
          </>
        }
      />

      {/* Aggregate Outcomes Statistics */}
      <section aria-labelledby="outcomes-stat-heading" className="bg-sand border-b border-hairline py-12 md:py-16">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-hairline">
              {outcomes.stats.map((stat, i) => (
                <div key={stat.label} className={i !== 0 ? "md:pl-8" : ""}>
                  <p className="font-display text-4xl font-semibold text-navy md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-brass pl-4 text-xs text-muted">
              Note: Chennai International Academy is a demonstration school. All statistics and metrics represent illustrative portfolio content.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Detailed Student Profiles: Challenge -> Project -> Learning -> Outcome */}
      <section id="stories" aria-labelledby="profiles-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Student Profiles"
              title={<span id="profiles-heading">Three journeys: rigor, character, and reflection.</span>}
              intro="We believe individual growth is richer than standardized test percentiles. These illustrative profiles demonstrate how scholars navigate challenge into purpose."
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {achievementsPageData.detailedProfiles.map((profile, idx) => (
              <Reveal key={profile.name}>
                <article className="grid items-start gap-10 rounded-card border border-hairline bg-cream p-8 shadow-card lg:grid-cols-12 lg:gap-14">
                  <div className="lg:col-span-4">
                    <ImageFrame name={profile.image} framed sizes="(min-width: 1024px) 30vw, 100vw" />
                    <div className="mt-6">
                      <h3 className="font-display text-2xl font-semibold text-navy">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brass-hover">
                        {profile.grade}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Focus: {profile.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Case Study 0{idx + 1}
                    </span>
                    <h4 className="mt-1 text-title text-navy">
                      {profile.headline}
                    </h4>

                    <div className="mt-6 space-y-5 border-t border-hairline pt-6">
                      <div>
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-brass-hover">
                          The Challenge
                        </h5>
                        <p className="mt-1 text-sm text-ink/85 leading-relaxed">
                          {profile.challenge}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-brass-hover">
                          The Student Project
                        </h5>
                        <p className="mt-1 text-sm text-ink/85 leading-relaxed">
                          {profile.project}
                        </p>
                      </div>

                      <div className="rounded-card border-l-2 border-brass bg-surface p-4">
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-navy">
                          Key Personal Insight
                        </h5>
                        <p className="mt-1 text-sm text-ink/90 italic leading-relaxed">
                          “{profile.learning}”
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-forest">
                          The Outcome
                        </h5>
                        <p className="mt-1 text-sm font-medium text-navy leading-relaxed">
                          {profile.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Competitive Honors: STEM, Athletics, Arts */}
      <section aria-labelledby="honors-heading" className="bg-sand border-t border-hairline py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Competitive Distinction"
              title={<span id="honors-heading">Excellence tested in state and national arenas.</span>}
              intro="Our scholars regularly test their capabilities beyond the school gates in scientific research, athletic meets, and creative colloquia."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Reveal delay={0}>
              <Card className="h-full border border-hairline bg-surface p-6 shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                    STEM & Research
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                    Scientific Inquiries
                  </h3>
                  <div className="mt-6 space-y-6">
                    {achievementsPageData.competitions.stem.map((c) => (
                      <div key={c.title} className="border-l border-hairline pl-4">
                        <h4 className="text-sm font-semibold text-navy">{c.title}</h4>
                        <p className="mt-0.5 text-xs font-medium text-brass-hover">{c.award}</p>
                        <p className="mt-1 text-xs text-ink/80">{c.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={80}>
              <Card className="h-full border border-hairline bg-surface p-6 shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                    Sport & Athletics
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                    Athletic Honors
                  </h3>
                  <div className="mt-6 space-y-6">
                    {achievementsPageData.competitions.athletics.map((c) => (
                      <div key={c.title} className="border-l border-hairline pl-4">
                        <h4 className="text-sm font-semibold text-navy">{c.title}</h4>
                        <p className="mt-0.5 text-xs font-medium text-brass-hover">{c.award}</p>
                        <p className="mt-1 text-xs text-ink/80">{c.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="h-full border border-hairline bg-surface p-6 shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                    Arts & Rhetoric
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                    Creative Distinction
                  </h3>
                  <div className="mt-6 space-y-6">
                    {achievementsPageData.competitions.arts.map((c) => (
                      <div key={c.title} className="border-l border-hairline pl-4">
                        <h4 className="text-sm font-semibold text-navy">{c.title}</h4>
                        <p className="mt-0.5 text-xs font-medium text-brass-hover">{c.award}</p>
                        <p className="mt-1 text-xs text-ink/80">{c.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Community Impact & Stewardship */}
      <section aria-labelledby="impact-heading" className="bg-surface py-16 md:py-24 border-t border-hairline">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Civic Stewardship"
                title={<span id="impact-heading">Education that serves the wider community.</span>}
                intro="Our students are taught that scholastic opportunity carries reciprocal civic responsibility. Every secondary student participates in hands-on community projects."
              />
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <div className="space-y-6">
                {achievementsPageData.communityImpact.map((item) => (
                  <div key={item.title} className="rounded-card border border-hairline bg-cream p-6">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-display text-xl font-semibold text-navy">{item.title}</h4>
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest bg-sand px-2.5 py-1 rounded-button">
                        {item.impact}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy py-16 md:py-20 text-cream">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display text-cream">
              Inspire Your Child&apos;s Full Potential
            </h2>
            <p className="mt-4 text-base text-cream/80">
              Discover how our mentoring environment and dual curriculum help young people achieve balance, purpose, and distinction.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <EnquiryDrawer label="Speak with Admissions" variant="accent" />
              <Button variant="inverse" href="/academics">
                Explore Curriculum
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
