import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PathwaysJourney } from "./PathwaysJourney";
import { pathways } from "@/data/academics";

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
            intro="From the first day of Early Years to the final Senior examinations, each stage builds deliberately on the last. Follow the journey."
          />
        </Reveal>

        <Reveal className="mt-12 md:mt-14">
          <PathwaysJourney pathways={pathways} />
        </Reveal>
      </Container>
    </section>
  );
}
