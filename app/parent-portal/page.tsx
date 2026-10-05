"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export default function ParentPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Family Services"
        title="Parent Portal Gateway"
        description="A centralized portal for enrolled families to review academic reports, monitor bus transport telemetry, settle term dues, and communicate with housemasters."
        badge="Institutional Portal Demo"
        breadcrumbs={[{ label: "Parent Portal" }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="max-w-xl mx-auto rounded-card border border-hairline bg-cream p-8 shadow-card text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
              Authorized Access Only
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
              Sign In to Parent Portal
            </h2>
            <p className="mt-2 text-xs text-muted">
              Please enter your registered family credentials provided by the Admissions Office.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                  Parent ID or Registered Email
                </label>
                <input
                  type="text"
                  placeholder="parent.ref@example.com"
                  defaultValue="demo.parent@cia.edu"
                  className="mt-1 block min-h-11 w-full rounded-button border border-hairline bg-surface px-3 py-2 text-sm text-ink placeholder:text-muted/70 focus-visible:border-brass"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                  Security Passphrase
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  defaultValue="demopassword"
                  className="mt-1 block min-h-11 w-full rounded-button border border-hairline bg-surface px-3 py-2 text-sm text-ink placeholder:text-muted/70 focus-visible:border-brass"
                />
              </div>

              <Button type="button" variant="primary" className="w-full">
                Authenticate Session (Demo)
              </Button>
            </form>

            <div className="mt-6 border-t border-hairline pt-4 text-xs text-muted">
              Demo portal gateway. For enrollment inquiries, please visit our <a href="/admissions" className="text-brass-hover underline">Admissions section</a>.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
