import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Alumni Network & Fellowship",
  description: "Connecting past graduates of Chennai International Academy across global universities, research labs, and creative industries.",
};

export default function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Fellowship"
        title="The CIA Alumni Society"
        description="Our graduates carry the Academy's spirit of intellectual courage and civic stewardship into universities, research laboratories, and civic enterprises across the world."
        badge="Alumni Network Demo"
        breadcrumbs={[{ label: "Alumni" }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="p-6 border border-hairline bg-cream shadow-card">
              <span className="text-xs font-semibold uppercase tracking-wider text-brass-hover">
                Global Network
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                Worldwide Chapters
              </h3>
              <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                Active informal cohorts in London, Boston, Toronto, Singapore, Bengaluru, and Chennai supporting graduating seniors with collegiate transitions.
              </p>
            </Card>

            <Card className="p-6 border border-hairline bg-cream shadow-card">
              <span className="text-xs font-semibold uppercase tracking-wider text-brass-hover">
                Mentorship
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                Senior Mentoring Circle
              </h3>
              <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                Alumni return to campus annually to conduct career seminars, review research capstone proposals, and share undergraduate insights.
              </p>
            </Card>

            <Card className="p-6 border border-hairline bg-cream shadow-card">
              <span className="text-xs font-semibold uppercase tracking-wider text-brass-hover">
                Endowment
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                The Heritage Bursary
              </h3>
              <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                An alumni-sponsored need-based scholarship fund supporting deserving scholars from Tamil Nadu to attend the Academy.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" href="/contact">
              Connect with the Alumni Secretary
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
