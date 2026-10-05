"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Crest } from "@/components/Crest";
import { mainNav, navCtas } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-button border border-hairline text-navy"
      >
        <span className="sr-only">Open menu</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60]"
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={close}
            className="absolute inset-0 animate-fade-in bg-navy/60"
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm animate-fade-up flex-col bg-cream shadow-card-hover">
            <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
              <Crest />
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="flex h-11 w-11 items-center justify-center rounded-button border border-hairline text-navy"
              >
                <span className="sr-only">Close menu</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-hairline">
                {mainNav.map((item) => {
                  const isOpen = expanded === item.label;
                  return (
                    <li key={item.label}>
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => setExpanded(isOpen ? null : item.label)}
                            className="flex min-h-14 w-full items-center justify-between font-display text-2xl font-semibold text-navy"
                          >
                            {item.label}
                            <span aria-hidden="true" className="text-brass">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <ul className="pb-3">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={close}
                                    className="flex min-h-11 items-center text-[15px] text-ink"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
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
            </nav>

            <div className="flex flex-col gap-3 border-t border-hairline px-6 py-5">
              <Button variant="accent" href={navCtas.tour.href} onClick={close}>
                {navCtas.tour.label}
              </Button>
              <Button variant="secondary" href={navCtas.inquire.href} onClick={close}>
                {navCtas.inquire.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
