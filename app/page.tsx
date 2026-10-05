import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";

/**
 * Phase 1 foundation preview. Replaced by the full homepage in Phase 2.
 */
export default function Home() {
  return (
    <Container className="py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Founded 2012 • Chennai, Tamil Nadu"
            title="Foundation preview"
            intro="Design tokens, typography, navigation, footer and primitives. The homepage is built in Phase 2."
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="editorial" href="/admissions">
              Editorial link
            </Button>
          </div>
        </div>
        <ImageFrame name="hero" priority />
      </div>
    </Container>
  );
}
