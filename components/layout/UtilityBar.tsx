import { site } from "@/data/site";
import { utilityLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function UtilityBar() {
  return (
    <div className="hidden bg-navy text-cream/80 lg:block">
      <Container className="flex h-9 items-center justify-between text-xs">
        <p className="tracking-wide">{site.affiliationNote}</p>
        <nav aria-label="Utility">
          <ul className="flex items-center gap-6">
            {utilityLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-brass"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
