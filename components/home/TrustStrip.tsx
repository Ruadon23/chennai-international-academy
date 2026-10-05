import { Container } from "@/components/ui/Container";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/ui/Reveal";
import { trustMetrics } from "@/data/home";

export function TrustStrip() {
  return (
    <section
      aria-label="Institutional highlights"
      data-demo-content={trustMetrics.isDemo}
      className="border-y border-hairline bg-sand"
    >
      <Container className="py-12 md:py-14">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-0">
            {trustMetrics.items.map((item) => (
              <Stat
                key={item.label}
                value={item.value}
                label={item.label}
                className="lg:border-l lg:border-brass/50 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
              />
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
