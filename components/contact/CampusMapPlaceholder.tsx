export function CampusMapPlaceholder() {
  return (
    <div className="relative overflow-hidden rounded-card border border-hairline bg-sand p-6 shadow-card">
      <div className="flex items-center justify-between border-b border-hairline pb-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brass-hover">
            Campus Schematic Location
          </span>
          <h4 className="font-display text-lg font-semibold text-navy">
            OMR Educational Belt, Chennai
          </h4>
        </div>
        <span className="rounded-button bg-cream px-2.5 py-1 text-xs text-muted border border-hairline">
          Static Map Plot
        </span>
      </div>

      <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-card border border-navy/10 bg-[#e8e4d9]">
        {/* Architectural grid styling */}
        <svg aria-hidden="true" className="h-full w-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#d4cebe" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
          {/* Fictional roads */}
          <path d="M -10 120 Q 150 140 400 90 T 800 60" fill="none" stroke="#ffffff" strokeWidth="12" />
          <path d="M -10 120 Q 150 140 400 90 T 800 60" fill="none" stroke="#c59b27" strokeWidth="2" strokeDasharray="6 4" />
          <path d="M 280 -20 L 320 300" fill="none" stroke="#ffffff" strokeWidth="8" />
          {/* Fictional campus boundary */}
          <polygon points="180,60 380,40 420,180 220,200" fill="#1e4634" fillOpacity="0.12" stroke="#1e4634" strokeWidth="1.5" strokeDasharray="4 2" />
        </svg>

        {/* Pin marker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-brass shadow-card border-2 border-brass">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
          </div>
          <span className="mt-1 block rounded-button bg-navy/90 px-2 py-0.5 text-[10px] font-semibold text-cream shadow-sm">
            Chennai International Academy
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-muted">
        <span>GPS: 12.8712° N, 80.2209° E (Illustrative)</span>
        <span>25 mins from Adyar · 35 mins from Chennai Airport</span>
      </div>
    </div>
  );
}
