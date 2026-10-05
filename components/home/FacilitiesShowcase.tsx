import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { facilityCategories, type FacilityCategory } from "@/data/facilities";
import { cn } from "@/lib/cn";

function CategoryFeature({
  category,
  large = false,
}: {
  category: FacilityCategory;
  large?: boolean;
}) {
  return (
    <article className="flex flex-col">
      <ImageFrame
        name={category.image}
        framed={false}
        sizes={large ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
      />
      <h3 className={cn("mt-5", large ? "text-title" : "text-card-title")}>
        {category.title}
      </h3>
      <p className="mt-2 max-w-xl text-[15px] text-ink/90">{category.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-hairline pt-4 text-[13px] font-medium text-forest">
        {category.facilities.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1 w-1 bg-brass" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function FacilitiesShowcase() {
  const [research, athletics, arts] = facilityCategories;
  return (
    <section
      id="campus"
      aria-labelledby="campus-heading"
      className="border-y border-hairline bg-sand py-16 md:py-24"
    >
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Campus & Facilities"
            title={<span id="campus-heading">A campus designed for serious curiosity.</span>}
            intro="Twenty-four acres of laboratories, courts, studios and gardens, each planned to support the way young people actually learn."
          />
          <Button variant="editorial" href="/campus" className="self-start md:self-auto">
            Tour the campus
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <CategoryFeature category={research} large />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5">
            <CategoryFeature category={athletics} />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <CategoryFeature category={arts} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
