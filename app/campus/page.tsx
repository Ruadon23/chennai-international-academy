import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryDrawer } from "@/components/home/EnquiryDrawer";
import { campusData } from "@/data/campus";

export const metadata: Metadata = {
  title: "Campus & Student Life",
  description:
    "Explore our 24-acre eco-sustainable campus, research suites, Olympic-dimension sports facilities, arts pavilions, and boarding community.",
};

export default function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow={campusData.hero.eyebrow}
        title={campusData.hero.title}
        description={campusData.hero.description}
        badge="24-Acre Eco-Campus"
        breadcrumbs={[{ label: "Campus & Life" }]}
        actions={
          <>
            <EnquiryDrawer label="Book a Campus Walk" variant="accent" />
            <Button variant="secondary" href="#film">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M4 2.5v11l9-5.500-9-5.500Z" />
              </svg>
              Watch Campus Tour
            </Button>
          </>
        }
      />

      {/* Campus Overview & Metrics */}
      <section aria-labelledby="overview-heading" className="bg-sand border-b border-hairline py-12 md:py-16">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-hairline">
              {campusData.overviewStats.map((stat, i) => (
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
          </Reveal>
        </Container>
      </section>

      {/* Film / Architectural Overview Showcase */}
      <section id="film" aria-labelledby="film-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-card border border-hairline bg-sand">
                <ImageFrame name="campusHero" framed={false} sizes="(min-width: 1024px) 58vw, 100vw" />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/20 backdrop-blur-[1px] transition-all hover:bg-navy/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brass text-navy shadow-card transition-transform hover:scale-105">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted text-center">
                Interactive campus documentary film placeholder. Final video integration available for client release.
              </p>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-5">
              <SectionHeading
                eyebrow="Architectural Vision"
                title={<span id="film-heading">Collegiate heritage meets tropical coastal ecology.</span>}
                intro="Designed by leading educational architects, the campus utilizes passive natural ventilation, terracotta shading louvers, and shaded cloisters that remain comfortable year-round in Chennai's tropical climate."
              />
              <ul className="mt-6 space-y-3 text-sm text-ink/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                  Over 1,200 indigenous shade trees across 24 acres
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                  100% rainwater harvesting recharging subterranean aquifers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                  Zero single-use plastics and on-site organic composting
                </li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Campus Pillars: Research, Athletics, Arts */}
      <section aria-labelledby="facilities-heading" className="bg-cream py-16 md:py-24 border-t border-hairline">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Specialist Facilities"
              title={<span id="facilities-heading">Purpose-built environments for every discipline.</span>}
              intro="We do not crowd specialized pursuits into generic multi-purpose rooms. Every arena is tailored to meet professional standards."
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {campusData.pillars.map((pillar, idx) => (
              <Reveal key={pillar.id}>
                <div
                  id={pillar.id}
                  className="grid items-center gap-10 rounded-card border border-hairline bg-surface p-8 shadow-card lg:grid-cols-12 lg:gap-14"
                >
                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <ImageFrame name={pillar.image} framed sizes="(min-width: 1024px) 45vw, 100vw" />
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hover">
                      {pillar.eyebrow}
                    </p>
                    <h3 className="mt-2 text-title text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/85 leading-relaxed md:text-base">
                      {pillar.summary}
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 border-t border-hairline pt-6">
                      {pillar.facilities.map((fac) => (
                        <div key={fac.name}>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-navy">
                            {fac.name}
                          </h4>
                          <p className="mt-1 text-xs text-ink/80 leading-relaxed">
                            {fac.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Boarding Life */}
      <section id="boarding" aria-labelledby="boarding-heading" className="border-t border-hairline bg-sand py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow={campusData.boarding.eyebrow}
                title={<span id="boarding-heading">{campusData.boarding.title}</span>}
                intro={campusData.boarding.description}
              />
              <div className="mt-8">
                <ImageFrame name="campusBoarding" framed sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
              <div className="mt-6 flex gap-4">
                <EnquiryDrawer label="Inquire for Boarding" variant="accent" />
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {campusData.boarding.features.map((feat) => (
                  <Card key={feat.title} className="border border-hairline bg-surface p-6 shadow-card">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                      {feat.desc}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-8 rounded-card border-l-2 border-brass bg-cream p-6 border-y border-r border-hairline">
                <h4 className="font-display text-lg font-semibold text-navy">
                  5-Day Weekly Boarding & Full Term Options
                </h4>
                <p className="mt-2 text-xs text-ink/80 leading-relaxed md:text-sm">
                  We offer flexible boarding arrangements for families living in Chennai and neighboring cities who wish for their children to enjoy structured weekdays on campus while returning home for family weekends.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* House System */}
      <section aria-labelledby="house-heading" className="bg-surface py-16 md:py-24 border-t border-hairline">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Community & Heritage"
              title={<span id="house-heading">{campusData.houseSystem.title}</span>}
              intro={campusData.houseSystem.intro}
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {campusData.houseSystem.houses.map((house, i) => (
              <Reveal key={house.name} delay={i * 60}>
                <div className="h-full rounded-card border-t-4 border-brass bg-cream p-6 border-x border-b border-hairline shadow-card flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Collegiate House
                    </span>
                    <h3 className="mt-1 font-display text-3xl font-semibold text-navy">
                      {house.name}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brass-hover">
                      {house.color}
                    </p>
                    <p className="mt-3 text-sm font-medium text-navy italic">
                      “{house.motto}”
                    </p>
                    <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                      {house.crestDesc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy py-16 md:py-20 text-cream">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display text-cream">
              See the Campus in Person
            </h2>
            <p className="mt-4 text-base text-cream/80">
              There is no substitute for walking our shaded quads and speaking with our resident scholars. Tours are hosted weekly by appointment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <EnquiryDrawer label="Book a Campus Tour" variant="accent" />
              <Button variant="inverse" href="/gallery">
                Browse Campus Gallery
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
