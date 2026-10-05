import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryDrawer } from "@/components/home/EnquiryDrawer";
import { admissionsPageData, admissionsSteps } from "@/data/admissions";

export const metadata: Metadata = {
  title: "Admissions & Entry Process",
  description:
    "Learn about admissions criteria, entry points, the 4-step enrolment journey, fees, scholarships, and FAQs at Chennai International Academy.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow={admissionsPageData.hero.eyebrow}
        title={admissionsPageData.hero.title}
        description={admissionsPageData.hero.description}
        badge="Enrolment 2026–2027 Open"
        breadcrumbs={[{ label: "Admissions" }]}
        actions={
          <>
            <EnquiryDrawer label="Begin Online Enquiry" variant="accent" />
            <Button variant="secondary" href="#process">
              View 4-Stage Journey
            </Button>
            <Button variant="editorial" href="#fees">
              Fees & Scholarships
            </Button>
          </>
        }
      />

      {/* Why Choose CIA: 6 Pillars */}
      <section aria-labelledby="why-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="The CIA Distinctive"
              title={<span id="why-heading">Why discerning families choose Chennai International Academy.</span>}
              intro="We are committed to delivering an education of genuine depth: where high academic ambition and ethical character form thoughtful global citizens."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {admissionsPageData.whyCia.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 60}>
                <Card className="h-full border border-hairline bg-cream p-7 shadow-card hover:shadow-card-hover transition-all">
                  <span className="font-display text-2xl font-semibold text-brass">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                    {reason.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Four-Stage Admission Journey */}
      <section id="process" aria-labelledby="journey-heading" className="bg-sand border-y border-hairline py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Four Steps"
              title={<span id="journey-heading">Our transparent, personal admissions process.</span>}
              intro="We design our admissions journey to be an unhurried mutual conversation, ensuring our academic environment is an ideal fit for your child."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-4">
            {admissionsSteps.map((step) => (
              <Reveal key={step.number}>
                <div className="h-full rounded-card border-t-4 border-brass bg-surface p-6 border-x border-b border-hairline shadow-card flex flex-col justify-between">
                  <div>
                    <span className="font-display text-5xl font-semibold text-brass">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-card-title text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" id="tour">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-card border border-brass/50 bg-cream p-6">
              <span className="text-sm font-medium text-navy">
                Ready to take the first step?
              </span>
              <EnquiryDrawer label="Submit Admissions Enquiry" variant="accent" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Grade Entry Stages & Criteria */}
      <section aria-labelledby="entry-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Entry Points"
                title={<span id="entry-heading">Key stages of entry & assessment criteria.</span>}
                intro="While students may join at intermediate grades subject to seat availability, our primary intake points occur at Early Years, Grade 1, Grade 6, Grade 9, and Grade 11."
              />
              <div className="mt-8">
                <ImageFrame name="admissionsTour" framed sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <div className="divide-y divide-hairline border-y border-hairline">
                {admissionsPageData.gradeEntry.map((stage) => (
                  <div key={stage.stage} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-xl font-semibold text-navy">
                        {stage.stage}
                      </h3>
                      <span className="text-xs text-brass-hover font-semibold uppercase tracking-wider">
                        {stage.grades}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                      {stage.focus}
                    </p>
                    <div className="mt-3 rounded-card bg-sand p-3 text-xs text-muted">
                      <strong className="text-navy font-semibold">Assessment focus:</strong> {stage.entryNotes}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What Families Should Prepare & Prospectus Download */}
      <section id="prospectus" aria-labelledby="prepare-heading" className="bg-cream border-t border-hairline py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow="Documentation Checklist"
                title={<span id="prepare-heading">What families should prepare for application.</span>}
                intro="To ensure a smooth assessment and interview, please have these records ready when submitting your formal admissions packet."
              />
              <ul className="mt-8 space-y-4">
                {admissionsPageData.preparationChecklist.map((item) => (
                  <li key={item.item} className="rounded-card border border-hairline bg-surface p-4 flex gap-4 items-start shadow-card">
                    <span aria-hidden="true" className="mt-0.5 font-semibold text-brass">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-navy">{item.item}</h4>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-6">
              <div className="rounded-card border border-brass/50 bg-sand p-8 text-center shadow-card">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
                  Official Publication
                </span>
                <h3 className="mt-2 font-display text-3xl font-semibold text-navy">
                  Download the Academy Prospectus
                </h3>
                <p className="mt-3 text-sm text-ink/80 leading-relaxed max-w-md mx-auto">
                  A comprehensive 36-page guide detailing our curriculum syllabi, faculty credentials, campus masterplan, boarding routines, and fee schedules.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <EnquiryDrawer label="Download Digital Prospectus" variant="accent" title="Request Official Prospectus" />
                  <Button variant="secondary" href="#fees">
                    View Fee Schedules
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted italic">
                  Fictional demo school prospectus download placeholder.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Fees & Scholarships */}
      <section id="fees" aria-labelledby="fees-heading" className="bg-surface border-t border-hairline py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Transparent Investment"
              title={<span id="fees-heading">Fee Schedules & Scholarship Opportunities.</span>}
              intro={admissionsPageData.feesAndScholarships.overview}
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admissionsPageData.feesAndScholarships.tiers.map((tier) => (
              <Reveal key={tier.gradeRange}>
                <div className="h-full rounded-card border border-hairline bg-cream p-6 shadow-card flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {tier.gradeRange}
                    </h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brass-hover">
                      {tier.tuition}
                    </p>
                    <p className="mt-3 text-xs text-ink/80 leading-relaxed">
                      {tier.includes}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-hairline pt-4">
                    <span className="text-[11px] text-muted">
                      Full breakdown available in prospectus
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="rounded-card border-l-4 border-brass bg-sand p-6 border-y border-r border-hairline">
              <h3 className="font-display text-xl font-semibold text-navy">
                Merit & Need-Based Financial Aid
              </h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                {admissionsPageData.feesAndScholarships.scholarshipInfo}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section aria-labelledby="faq-heading" className="bg-cream border-t border-hairline py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Common Inquiries"
              title={<span id="faq-heading">Frequently Asked Admissions Questions.</span>}
              intro="Answers to key queries regarding curriculum selection, assessment days, boarding options, and daily logistics."
            />
          </Reveal>

          <div className="mt-14 max-w-4xl mx-auto space-y-4">
            {admissionsPageData.faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 40}>
                <div className="rounded-card border border-hairline bg-surface p-6 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                    {faq.a}
                  </p>
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
              Take the Next Step Today
            </h2>
            <p className="mt-4 text-base text-cream/80">
              Our Admissions Directorate is available to guide you through application timelines and arrange your campus tour.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <EnquiryDrawer label="Submit Admissions Enquiry" variant="accent" />
              <Button variant="inverse" href="/contact">
                Contact Admissions Directly
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
