"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Crest } from "@/components/Crest";
import { mainNav, navCtas, utilityLinks } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Mobile navigation: native <dialog> (focus trap, Escape, inert background),
 * body scroll lock, accordion sections and a prominent admissions CTA.
 */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    // Close if the viewport grows into the desktop layout while open.
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) dialogRef.current?.close();
    };
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="flex h-11 w-11 items-center justify-center rounded-button border border-hairline text-navy transition-colors duration-200 hover:bg-sand"
      >
        <span className="sr-only">Open menu</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClose={() => {
          document.body.style.overflow = "";
          setExpanded(null);
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-sm bg-cream p-0 text-ink shadow-card-hover backdrop:bg-navy/60 open:animate-slide-in"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
            <Crest />
            <button
              type="button"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center rounded-button border border-hairline text-navy transition-colors duration-200 hover:bg-sand"
            >
              <span className="sr-only">Close menu</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-2">
            <ul className="divide-y divide-hairline">
              {mainNav.map((item) => {
                const isOpen = expanded === item.label;
                const panelId = `mobile-${item.label}`;
                return (
                  <li key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          className="flex min-h-14 w-full items-center justify-between font-display text-2xl font-semibold text-navy"
                        >
                          {item.label}
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 12 12"
                            className={cn(
                              "h-3 w-3 text-brass transition-transform duration-300 ease-cia",
                              isOpen && "rotate-180",
                            )}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="m2 4 4 4 4-4" />
                          </svg>
                        </button>
                        <div
                          id={panelId}
                          inert={!isOpen}
                          className={cn(
                            "grid transition-[grid-template-rows] duration-300 ease-cia",
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                          )}
                        >
                          <ul className="overflow-hidden">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={close}
                                  className="flex min-h-11 items-center border-l-2 border-brass/40 pl-4 text-[15px] text-ink transition-colors hover:border-brass hover:text-navy"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                            <li aria-hidden="true" className="h-3" />
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex min-h-14 items-center font-display text-2xl font-semibold text-navy"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 pb-4">
              {utilityLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="flex min-h-11 items-center text-[13px] text-muted hover:text-navy"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-hairline bg-sand px-6 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <Button variant="accent" href={navCtas.tour.href} onClick={close} className="w-full">
              {navCtas.tour.label}
            </Button>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button variant="secondary" href={navCtas.inquire.href} onClick={close}>
                {navCtas.inquire.label}
              </Button>
              <Button variant="secondary" href={site.contact.phoneHref}>
                Call
              </Button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
