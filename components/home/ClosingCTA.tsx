import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryDrawer } from "./EnquiryDrawer";

export function ClosingCTA() {
  return (
    <section
      id="visit"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-navy py-20 md:py-28"
    >
      {/* Architectural hairline frame */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 border border-brass/30 md:inset-8"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" className="mb-6">
            Admissions are open
          </Eyebrow>
          <h2 id="cta-heading" className="text-display text-cream">
            Begin your child&rsquo;s educational journey at Chennai International Academy.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-cream/80 md:text-lg">
            Walk the campus, meet our teachers and see for yourself how a CIA education
            shapes thoughtful, confident young people.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <EnquiryDrawer
              label="Book Campus Tour"
              variant="accent"
              title="Book a campus tour"
            />
            <Button variant="inverse" href="/admissions#prospectus">
              Download Prospectus
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
