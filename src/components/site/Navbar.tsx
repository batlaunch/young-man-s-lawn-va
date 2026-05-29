import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone } from "lucide-react";
import { LogoPlaceholder } from "./Logo";

const SERVICES = [
  { to: "/services/lawn-care", label: "Lawn Care" },
  { to: "/services/pressure-washing", label: "Pressure Washing" },
  { to: "/services/engine-repair", label: "Engine Repair" },
  { to: "/services/small-construction", label: "Small Construction" },
] as const;

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-6 sm:px-4 sm:py-3 lg:px-8">
        <Link to="/" aria-label="Young Man's Lawn Care home" className="shrink-0">
          <LogoPlaceholder small />
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-1.5 overflow-x-auto sm:gap-4 lg:gap-8">
          <Link to="/" className="whitespace-nowrap text-xs font-medium text-brand-white/90 hover:text-accent sm:text-sm" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>
            Home
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 whitespace-nowrap text-xs font-medium text-brand-white/90 hover:text-accent sm:text-sm">
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 sm:h-4 sm:w-4" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="rounded-xl border border-border bg-surface p-2 shadow-xl">
                {SERVICES.map((s) => (
                  <Link key={s.to} to={s.to} className="block rounded-lg px-3 py-2 text-sm text-brand-white/90 hover:bg-primary/40 hover:text-accent">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="whitespace-nowrap text-xs font-medium text-brand-white/90 hover:text-accent sm:text-sm" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a href="tel:+18083826129" aria-label="Call" className="text-brand-white/90 hover:text-accent sm:hidden">
            <Phone className="h-5 w-5" />
          </a>
          <Link to="/contact" className="hidden whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-all hover:bg-accent-light hover:shadow-glow sm:inline-block">
            Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
