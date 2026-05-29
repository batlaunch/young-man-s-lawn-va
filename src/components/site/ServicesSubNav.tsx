import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/services/lawn-turf", label: "Lawn Care & Turf" },
  { to: "/services/trees-shrubs-beds", label: "Trees, Shrubs & Beds" },
  { to: "/services/landscape-hardscaping", label: "Landscape & Hardscaping" },
  { to: "/services/irrigation", label: "Irrigation & Systems" },
  { to: "/services/pest-control", label: "Pest & Environmental" },
  { to: "/services/seasonal", label: "Seasonal Services" },
] as const;

export function ServicesSubNav() {
  const { pathname } = useLocation();
  return (
    <nav className="border-b border-border bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
          {LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`inline-block rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-brand-white/80 hover:bg-primary/40 hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
