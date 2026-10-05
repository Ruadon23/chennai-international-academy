import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NewsListing } from "@/components/news/NewsListing";
import { NewsletterForm } from "@/components/news/NewsletterForm";
import { upcomingCalendar } from "@/data/news";

export const metadata: Metadata = {
  title: "News, Dispatches & Events",
  description:
    "Read the latest dispatches, academic achievements, athletic results, and upcoming calendar fixtures from Chennai International Academy.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="The CIA Gazette & Dispatch"
        title="Life at CIA, in motion."
        description="A chronicle of intellectual discovery, student-directed arts, competitive athletic fixtures, and community action unfolding across our Chennai campus."
        badge="Vol. XIV · Michaelmas Term"
        breadcrumbs={[{ label: "News & Events" }]}
      />

      {/* Dispatches & Articles */}
      <section aria-labelledby="dispatches-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
                  Current Term Coverage
                </p>
                <h2 id="dispatches-heading" className="text-title font-display text-navy mt-1">
                  Recent Dispatches & Articles
                </h2>
              </div>
              <p className="text-xs text-muted">
                Published by the Student Editorial Board & Faculty Directorate
              </p>
            </div>
          </Reveal>

          <NewsListing />
        </Container>
      </section>

      {/* Upcoming Events Calendar */}
      <section id="calendar" aria-labelledby="calendar-heading" className="bg-sand border-y border-hairline py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Academic & Community Fixtures"
              title={<span id="calendar-heading">Upcoming Calendar Events.</span>}
              intro="Key term dates, public lectures, house sports championships, and theatrical productions. Visitors welcome where indicated."
            />
          </Reveal>

          <div className="mt-14 space-y-4">
            {upcomingCalendar.map((evt, i) => (
              <Reveal key={evt.title} delay={i * 40}>
                <div className="rounded-card border border-hairline bg-surface p-6 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-card-hover transition-all">
                  <div className="flex items-start gap-5">
                    <time className="flex h-16 w-14 shrink-0 flex-col items-center justify-center border border-navy bg-cream leading-none rounded-button">
                      <span className="font-display text-2xl font-semibold text-navy">
                        {evt.day}
                      </span>
                      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brass-hover">
                        {evt.month}
                      </span>
                    </time>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-button bg-sand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brass-hover">
                          {evt.category}
                        </span>
                        <span className="text-xs text-muted">
                          {evt.time} · {evt.venue}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-xl font-semibold text-navy">
                        {evt.title}
                      </h3>
                      <p className="mt-1 text-xs text-ink/80 leading-relaxed md:text-sm">
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Signup Form */}
      <section aria-labelledby="newsletter-heading" className="bg-cream py-16 md:py-24">
        <Container>
          <Reveal>
            <NewsletterForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
