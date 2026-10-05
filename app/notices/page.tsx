import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Emergency & Administrative Notices",
  description: "Official notifications regarding weather updates, term dates, and health protocols at Chennai International Academy.",
};

export default function NoticesPage() {
  const notices = [
    {
      date: "05 October 2026",
      status: "Active Advisory",
      title: "Monsoon Preparedness & Bus Route Normalcy",
      content: "All Chennai bus routes are operating on normal scheduled hours. Drainage systems on campus have completed quarterly engineering audit.",
    },
    {
      date: "28 September 2026",
      status: "Administrative Bulletin",
      title: "Term II Diagnostic Examination Timetable Published",
      content: "Middle and Senior school diagnostic schedules have been dispatched to registered parent portals. Please review student examination carrel allocations.",
    },
    {
      date: "14 September 2026",
      status: "Community Protocol",
      title: "Annual Health & Medical Screening Verification",
      content: "Resident medical staff will conduct routine auditory and visual health checks for Early Years through Grade 5 students starting next Monday.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Campus Communications"
        title="Official Notices & Bulletins"
        description="Real-time institutional advisories, term calendar notices, and campus safety protocols for families, students, and staff."
        badge="Notice Board Demo"
        breadcrumbs={[{ label: "Emergency Notices" }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {notices.map((n) => (
              <div key={n.title} className="rounded-card border-l-4 border-brass bg-cream p-6 border-y border-r border-hairline shadow-card">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-brass-hover">{n.status}</span>
                  <span className="text-muted">{n.date}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">{n.title}</h3>
                <p className="mt-2 text-sm text-ink/80 leading-relaxed">{n.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" href="/contact">
              Contact Campus Safety Directorate
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
