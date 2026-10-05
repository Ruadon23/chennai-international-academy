import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryDrawer } from "@/components/home/EnquiryDrawer";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: "About Our Academy",
  description:
    "Discover the founding vision, collegiate heritage, leadership, and educational philosophy of Chennai International Academy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutData.hero.eyebrow}
        title={aboutData.hero.title}
        description={aboutData.hero.description}
        badge="Demonstration Institution"
        breadcrumbs={[{ label: "About" }]}
        actions={
          <>
            <EnquiryDrawer label="Schedule a Campus Visit" variant="accent" />
            <Button variant="secondary" href="#governance">
              Meet School Leadership
            </Button>
          </>
        }
      />

      {/* Our Story & Heritage */}
      <section id="story" aria-labelledby="story-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Institutional Heritage"
                title={<span id="story-heading">Twelve years of cultivating thoughtful leadership.</span>}
                intro="Since 2012, our campus has stood as a quiet sanctuary for serious intellectual exploration, combining collegiate traditions with the dynamic momentum of modern India."
              />
              <div className="mt-8">
                <ImageFrame name="aboutFounders" framed sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
              <p className="mt-4 border-l-2 border-brass pl-4 text-xs text-muted">
                Fictional institutional demonstration. All founding records and milestones represent illustrative demo content.
              </p>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <h3 className="text-card-title mb-8 font-sans font-semibold tracking-wide text-navy">
                Milestones in Our Journey
              </h3>
              <ol className="relative space-y-8 border-l border-hairline pl-6">
                {aboutData.story.timeline.map((item) => (
                  <li key={item.year} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-brass bg-cream"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                    </span>
                    <span className="font-display text-2xl font-semibold text-brass-hover">
                      {item.year}
                    </span>
                    <h4 className="mt-1 text-lg font-semibold text-navy">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Statement */}
      <section aria-labelledby="vision-heading" className="border-y border-hairline bg-sand py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <Reveal className="border-t-2 border-brass pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-hover">
                {aboutData.missionVision.vision.label}
              </p>
              <h3 id="vision-heading" className="mt-3 font-display text-3xl font-medium leading-snug text-navy md:text-4xl">
                “{aboutData.missionVision.vision.text}”
              </h3>
            </Reveal>
            <Reveal delay={80} className="border-t-2 border-oxford pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
                {aboutData.missionVision.mission.label}
              </p>
              <p className="mt-3 text-base text-ink/90 leading-relaxed md:text-lg">
                {aboutData.missionVision.mission.text}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Campus Core Values */}
      <section aria-labelledby="values-heading" className="bg-cream py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Moral Compass"
              title={<span id="values-heading">Five values that govern our community.</span>}
              intro="We believe scholarship without character is empty. These principles inform every lesson, house competition, and disciplinary standard."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutData.values.map((v, i) => (
              <Reveal key={v.name} delay={i * 60}>
                <Card className="h-full border border-hairline bg-surface p-7 shadow-card hover:shadow-card-hover transition-all">
                  <span className="font-display text-3xl font-medium text-brass">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brass-hover">
                    {v.tagline}
                  </p>
                  <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                    {v.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership & Governance */}
      <section id="governance" aria-labelledby="leadership-heading" className="border-y border-hairline bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Academic Governance"
              title={<span id="leadership-heading">Leadership dedicated to scholastic depth.</span>}
              intro="Our leadership team pairs administrative rigor with decades of classroom teaching and pastoral care. Fictional profiles for demonstration."
            />
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {aboutData.leadership.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 80}>
                <article className="flex flex-col">
                  <ImageFrame name={leader.image} framed={false} sizes="(min-width: 1024px) 28vw, 100vw" />
                  <div className="mt-5">
                    <h3 className="text-xl font-display font-semibold text-navy">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-brass-hover">
                      {leader.role}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {leader.credentials}
                    </p>
                    <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Faculty Philosophy */}
      <section id="faculty" aria-labelledby="faculty-heading" className="bg-sand py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Faculty & Pedagogy"
                title={<span id="faculty-heading">Teachers who mentor rather than merely lecture.</span>}
                intro="We hire educators who are passionate subject specialists. With an overall 1:8 student-faculty ratio, teachers have the time to know each student's mind."
              />
              <div className="mt-8">
                <Button variant="editorial" href="/contact#careers">
                  Faculty career opportunities
                </Button>
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {aboutData.facultyPhilosophy.map((item) => (
                  <div key={item.title} className="rounded-card border border-hairline bg-surface p-6 shadow-card">
                    <h4 className="font-display text-xl font-semibold text-navy">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Institutional Policies */}
      <section id="policies" aria-labelledby="policies-heading" className="bg-cream py-16 md:py-20 border-b border-hairline">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
                Trust & Safeguarding
              </p>
              <h2 id="policies-heading" className="text-title mt-2">
                Our Institutional Policies
              </h2>
              <p className="mt-4 text-sm text-muted">
                Transparent protocols ensuring student safety, intellectual honesty, and mutual respect.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutData.policies.map((p) => (
              <Reveal key={p.title}>
                <div className="border-t-2 border-brass bg-surface p-6 rounded-card border-x border-b border-hairline">
                  <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/80 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy py-16 md:py-24 text-cream">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display text-cream">
              Experience the Academy in Person
            </h2>
            <p className="mt-4 text-base text-cream/80">
              Walk our colonnades, explore our laboratories, and speak with our Head of School. Tours are hosted every Tuesday and Thursday morning.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <EnquiryDrawer label="Book a Campus Tour" variant="accent" title="Book a Campus Tour" />
              <Button variant="inverse" href="/admissions">
                Admissions Process
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
