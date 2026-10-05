import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-cream">
      <Container className="grid gap-x-16 gap-y-10 py-12 md:py-16 lg:grid-cols-[3fr_2fr] lg:items-center lg:py-24">
        <div className="animate-fade-up lg:col-start-1 lg:row-start-1 lg:self-end">
          <Eyebrow className="mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brass" />
            {hero.eyebrow}
          </Eyebrow>
          <h1 id="hero-heading" className="text-hero max-w-3xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            {hero.supporting}
          </p>
        </div>

        <div
          className="relative animate-fade-up lg:col-start-2 lg:row-span-2 lg:row-start-1"
          style={{ animationDelay: "80ms" }}
        >
          <ImageFrame name="hero" priority sizes="(min-width: 1024px) 40vw, 100vw" />
          <p className="absolute bottom-4 left-4 z-10 rounded-button bg-navy/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream">
            {hero.badge}
          </p>
        </div>

        <div
          className="animate-fade-up flex flex-col gap-4 sm:flex-row sm:items-center lg:col-start-1 lg:row-start-2 lg:self-start"
          style={{ animationDelay: "120ms" }}
        >
          <Button variant="primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </Button>
          <Button variant="secondary" href={hero.secondaryCta.href}>
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M4 2.5v11l9-5.500-9-5.500Z" />
            </svg>
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
