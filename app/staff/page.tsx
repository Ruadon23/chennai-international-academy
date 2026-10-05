import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Faculty & Staff Directory (Demo)",
  description: "Directory of faculty, department chairs, and administrative leadership at Chennai International Academy.",
};

export default function StaffPage() {
  const staff = [
    { name: "Dr. Meera Raghunathan", role: "Head of School", dept: "Executive Leadership", email: "head@cia-demo.example" },
    { name: "Marcus Vance, M.Sc.", role: "Academic Director", dept: "Curriculum Directorate", email: "academics@cia-demo.example" },
    { name: "Sangeetha Raman, M.A.", role: "Director of Student Life", dept: "Pastoral & Wellbeing", email: "pastoral@cia-demo.example" },
    { name: "Dr. K. Sundarajan", role: "Head of Pure Sciences", dept: "Physics & Astronomy", email: "sciences@cia-demo.example" },
    { name: "Eleanor Brooks, PGCE", role: "Head of Humanities", dept: "Literature & History", email: "humanities@cia-demo.example" },
    { name: "R. Natarajan, B.P.Ed.", role: "Director of Aquatics & PE", dept: "Athletic Directorate", email: "athletics@cia-demo.example" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Academy Directory"
        title="Faculty & Directorate Directory"
        description="Connect with academic heads, department chairs, and student life coordinators across the junior, middle, and senior schools."
        badge="Staff Registry Demo"
        breadcrumbs={[{ label: "Staff Directory" }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto divide-y divide-hairline border-y border-hairline">
            {staff.map((s) => (
              <div key={s.name} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">{s.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brass-hover mt-0.5">{s.role}</p>
                  <p className="text-xs text-muted mt-1">{s.dept}</p>
                </div>
                <div className="text-xs text-navy font-mono">
                  {s.email}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" href="/about#governance">
              Learn More About Academic Leadership
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
