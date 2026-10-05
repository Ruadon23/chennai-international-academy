import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Crest } from "@/components/Crest";
import { footerColumns } from "@/data/footer";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy pb-24 text-cream/80 lg:pb-0">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Crest tone="light" />
          <p className="max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <p className="text-sm">
            Est. {site.founded} · {site.location}
          </p>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              {col.title}
            </h2>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-cream/10">
        <Container className="grid gap-8 py-10 md:grid-cols-2">
          <address className="text-sm not-italic leading-relaxed">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Contact (demo)
            </p>
            {site.contact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={site.contact.phoneHref} className="mt-2 block hover:text-cream">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="block hover:text-cream">
              {site.contact.email}
            </a>
          </address>
          <p className="text-xs leading-relaxed text-cream/60 md:text-right">
            {site.disclaimer}
          </p>
        </Container>
        <Container className="border-t border-cream/10 py-5 text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name}. Demonstration website.
        </Container>
      </div>
    </footer>
  );
}
