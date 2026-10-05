import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { CampusMapPlaceholder } from "@/components/contact/CampusMapPlaceholder";
import { EnquiryDrawer } from "@/components/home/EnquiryDrawer";
import { contactData } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact & Campus Directions",
  description:
    "Reach the admissions office, general administrative directorates, career opportunities, and transport logistics at Chennai International Academy.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactData.hero.eyebrow}
        title={contactData.hero.title}
        description={contactData.hero.description}
        badge="Visitor Reception Open"
        breadcrumbs={[{ label: "Contact" }]}
        actions={
          <>
            <EnquiryDrawer label="Book a Guided Campus Tour" variant="accent" />
            <Button variant="secondary" href="#careers">
              Faculty Careers
            </Button>
          </>
        }
      />

      {/* Main Contact Grid: Details + Form */}
      <section aria-labelledby="contact-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
                  Academy Campus Address
                </p>
                <h2 id="contact-heading" className="font-display text-2xl font-semibold text-navy mt-1">
                  {contactData.address.campusName}
                </h2>
                <address className="not-italic text-sm text-ink/85 mt-2 leading-relaxed">
                  {contactData.address.street}
                  <br />
                  {contactData.address.city}
                  <br />
                  {contactData.address.country}
                </address>
              </div>

              <div className="border-t border-hairline pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
                  Administrative Reception Hours
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-ink/80">
                  {contactData.hours.map((h) => (
                    <li key={h.days} className="flex justify-between text-xs sm:text-sm">
                      <span className="font-medium text-navy">{h.days}:</span>
                      <span className="text-muted">{h.times}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-hairline pt-6">
                <CampusMapPlaceholder />
              </div>

              <div className="rounded-card border-l-2 border-brass bg-sand p-4 text-xs text-muted leading-relaxed">
                <strong className="text-navy font-semibold">Demonstration School Notice:</strong> All postal addresses, phone numbers, and staff names represent illustrative demo content for agency evaluation.
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Department Directory */}
      <section aria-labelledby="depts-heading" className="bg-sand border-y border-hairline py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Direct Extensions"
              title={<span id="depts-heading">Directory of Administrative Directorates.</span>}
              intro="Connect directly with specific campus teams for prompt assistance with admissions, logistics, and student records."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactData.departments.map((dept) => (
              <Reveal key={dept.name}>
                <Card className="h-full border border-hairline bg-surface p-6 shadow-card flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brass-hover">
                      {dept.lead}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                      {dept.name}
                    </h3>
                    <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                      {dept.desc}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-hairline pt-4 space-y-1 text-xs">
                    <p className="text-navy font-medium">{dept.phone}</p>
                    <p className="text-muted truncate">{dept.email}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Careers Section */}
      <section id="careers" aria-labelledby="careers-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Join Our Faculty"
                title={<span id="careers-heading">{contactData.careersInfo.title}</span>}
                intro={contactData.careersInfo.intro}
              />
              <div className="mt-6">
                <Button variant="editorial" href="mailto:careers@cia-demo.example">
                  Submit Curriculum Vitae
                </Button>
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <div className="space-y-4">
                {contactData.careersInfo.openings.map((op) => (
                  <div key={op.title} className="rounded-card border border-hairline bg-cream p-6 shadow-card">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-lg font-semibold text-navy">
                        {op.title}
                      </h4>
                      <span className="rounded-button bg-sand px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brass-hover">
                        {op.type}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-ink/80 leading-relaxed md:text-sm">
                      {op.req}
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
              Visit the Campus in Chennai
            </h2>
            <p className="mt-4 text-base text-cream/80">
              We look forward to welcoming you and your family for a personal walkthrough of our academic and residential community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <EnquiryDrawer label="Book a Campus Tour" variant="accent" />
              <Button variant="inverse" href="/admissions">
                Admissions Information
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
