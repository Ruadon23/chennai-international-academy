"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { NavItem } from "@/data/navigation";
import { navLinkClass } from "@/lib/nav-styles";
import { cn } from "@/lib/cn";

export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  const links = () =>
    Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);

  const onButtonKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      // Wait a frame so the menu becomes focusable (visibility) before focusing.
      requestAnimationFrame(() => links()[0]?.focus());
    }
  };

  const onMenuKey = (e: KeyboardEvent) => {
    const items = links();
    const i = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(i + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (i <= 0) buttonRef.current?.focus();
      else items[i - 1]?.focus();
    }
  };

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`menu-${item.label}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKey}
        className={navLinkClass}
      >
        {item.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={cn(
            "h-2.5 w-2.5 transition-transform duration-200 ease-cia",
            open && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="m2 4 4 4 4-4" />
        </svg>
      </button>

      {/* Always mounted: opacity/transform only, so opening never shifts layout. */}
      <ul
        ref={menuRef}
        id={`menu-${item.label}`}
        onKeyDown={onMenuKey}
        className={cn(
          "absolute left-0 top-full z-50 min-w-64 rounded-card border border-hairline border-t-2 border-t-brass bg-surface py-2 shadow-card-hover transition-[opacity,transform,visibility] duration-200 ease-cia",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={() => setOpen(false)}
              className="group block border-l-2 border-transparent px-5 py-2.5 transition-[background-color,border-color] duration-200 ease-cia hover:border-brass hover:bg-sand focus-visible:border-brass focus-visible:bg-sand"
            >
              <span className="block text-sm font-medium text-navy">
                {child.label}
              </span>
              {child.description && (
                <span className="block text-xs text-muted">
                  {child.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
