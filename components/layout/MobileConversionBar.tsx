import { navCtas } from "@/data/navigation";

/** Sticky bottom conversion bar, mobile/tablet only. */
export function MobileConversionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-hairline bg-hairline pb-[env(safe-area-inset-bottom)] lg:hidden">
      <a
        href={navCtas.call.href}
        className="flex min-h-14 items-center justify-center bg-cream text-sm font-semibold text-navy"
      >
        {navCtas.call.label}
      </a>
      <a
        href={navCtas.tour.href}
        className="flex min-h-14 items-center justify-center bg-brass text-sm font-semibold text-navy"
      >
        Book Tour
      </a>
    </div>
  );
}
