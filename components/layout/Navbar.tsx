import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Crest } from "@/components/Crest";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "./MobileMenu";
import { UtilityBar } from "./UtilityBar";
import { mainNav, navCtas } from "@/data/navigation";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <UtilityBar />
      <div className="border-b border-hairline bg-cream/95 backdrop-blur-sm">
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <Crest />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex min-h-11 items-center px-3 text-sm font-medium text-navy transition-colors duration-200 hover:text-brass-hover"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="editorial" href={navCtas.inquire.href} className="text-sm">
              {navCtas.inquire.label}
            </Button>
            <Button variant="accent" href={navCtas.tour.href} className="px-5 py-2.5 text-sm">
              {navCtas.tour.label}
            </Button>
          </div>
          <MobileMenu />
        </Container>
      </div>
    </header>
  );
}
