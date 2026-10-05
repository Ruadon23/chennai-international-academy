import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryViewer } from "@/components/gallery/GalleryViewer";
import { EnquiryDrawer } from "@/components/home/EnquiryDrawer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Campus Photographic Gallery",
  description:
    "Explore our 24-acre green campus, architectural colonnades, specialist laboratories, sports complexes, and creative studios in visual detail.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Chronicle"
        title="See the places where learning comes alive."
        description="A photographic window into daily life at Chennai International Academy: from early morning swim squads and quiet library corners to seminar debate and greenhouse harvests."
        badge="Curated Campus Views"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* Gallery Showcase */}
      <section aria-labelledby="gallery-heading" className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="gallery-heading" className="sr-only">
                Academy Photographic Gallery
              </h2>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-hover">
                Documentary Perspectives
              </p>
              <p className="mt-2 text-sm text-muted">
                Select a category to filter or select an image to expand its architectural focus.
              </p>
            </div>
          </Reveal>

          <GalleryViewer />
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy py-16 md:py-20 text-cream">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display text-cream">
              Experience the Academy in Real Life
            </h2>
            <p className="mt-4 text-base text-cream/80">
              Photographs convey space, but only a campus visit reveals the warmth of our student culture and the energy of our classrooms.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <EnquiryDrawer label="Book a Campus Tour" variant="accent" />
              <Button variant="inverse" href="/campus">
                Explore Facilities Overview
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
