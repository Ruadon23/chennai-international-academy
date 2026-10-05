import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryDrawer } from "./EnquiryDrawer";
import { admissionsSteps } from "@/data/admissions";

export function AdmissionsJourney() {
  return (
    <section
      id="admissions"
      aria-labelledby="admissions-heading"
      className="py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Admissions"
            title={<span id="admissions-heading">Four steps to joining our community.</span>}
            intro="A clear, personal process, designed so that families always know what happens next."
          />
        </Reveal>

        <Reveal className="mt-14">
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-hairline lg:block"
            />
            {admissionsSteps.map((step) => (
              <li
                key={step.number}
                className="relative border-l-2 border-brass pl-6 lg:border-l-0 lg:pl-0"
              >
                <span className="relative inline-block bg-cream pr-4 font-display text-5xl font-medium leading-none text-brass lg:pr-5">
                  {step.number}
                </span>
                <h3 className="mt-4 text-card-title">{step.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-14 flex flex-col gap-5 border-t border-hairline pt-10 sm:flex-row sm:items-center">
          <EnquiryDrawer label="Begin Online Enquiry" variant="accent" />
          <Button variant="editorial" href="/admissions#fees">
            Fees & scholarships
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
