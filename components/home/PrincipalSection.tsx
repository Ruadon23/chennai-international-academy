import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { principal } from "@/data/home";

export function PrincipalSection() {
  return (
    <section
      id="head-of-school"
      aria-labelledby="principal-heading"
      data-demo-content={principal.isDemo}
      className="py-16 md:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <Reveal className="mx-auto w-full max-w-md lg:mx-0">
          <ImageFrame name="principal" sizes="(min-width: 1024px) 32vw, 90vw" />
        </Reveal>

        <Reveal delay={80}>
          <Eyebrow className="mb-6">{principal.eyebrow}</Eyebrow>
          <h2 id="principal-heading" className="sr-only">
            A message from the Head of School
          </h2>
          <blockquote>
            <p className="font-display text-3xl font-medium leading-[1.15] text-navy md:text-5xl">
              <span aria-hidden="true" className="mr-1 text-brass">“</span>
              {principal.quote}
              <span aria-hidden="true" className="ml-1 text-brass">”</span>
            </p>
          </blockquote>

          <div className="mt-8 grid gap-4 border-t border-hairline pt-8 md:max-w-2xl">
            {principal.philosophy.map((p) => (
              <p key={p} className="text-base text-ink/90 md:text-[17px]">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-forest">
            {principal.pillars.map((pillar) => (
              <li key={pillar} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-brass" />
                {pillar}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="font-display text-3xl italic text-navy">{principal.name}</p>
            <p className="mt-1 text-sm text-muted">
              {principal.role} · {principal.qualification}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
