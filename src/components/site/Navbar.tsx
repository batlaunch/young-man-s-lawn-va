import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { LogoPlaceholder } from "./Logo";
import { SocialIcons } from "./SocialIcons";

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
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <Link to="/" aria-label="Young Man's Lawn Care home">
          <LogoPlaceholder small />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="text-sm font-medium text-brand-white/90 hover:text-accent" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>
            Home
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-brand-white/90 hover:text-accent">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-60 -translate-x-1/2 rounded-xl border border-border bg-surface p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {SERVICES.map((s) => (
                <Link key={s.to} to={s.to} className="block rounded-lg px-3 py-2 text-sm text-brand-white/90 hover:bg-primary/40 hover:text-accent">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          {NAV.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-brand-white/90 hover:text-accent" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <SocialIcons />
          <a href="tel:+18045550123" className="flex items-center gap-1.5 text-sm text-brand-white/90 hover:text-accent">
            <Phone className="h-4 w-4" /> (804) 555-0123
          </a>
          <a href="mailto:info@youngmanslawnva.com" className="flex items-center gap-1.5 text-sm text-brand-white/90 hover:text-accent">
            <Mail className="h-4 w-4" />
          </a>
          <Link to="/contact" className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground transition-all hover:bg-accent-light hover:shadow-glow">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile right cluster */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href="tel:+18045550123" aria-label="Call" className="text-brand-white/90 hover:text-accent">
            <Phone className="h-5 w-5" />
          </a>
          <SocialIcons size={16} />
          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="text-brand-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="rounded px-2 py-2 text-brand-white hover:bg-primary/40">Home</Link>
            <button onClick={() => setMobileServices((v) => !v)} className="flex items-center justify-between rounded px-2 py-2 text-left text-brand-white hover:bg-primary/40">
              Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="ml-4 flex flex-col gap-1">
                {SERVICES.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="rounded px-2 py-1.5 text-sm text-muted-foreground hover:text-accent">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            {NAV.slice(1).map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded px-2 py-2 text-brand-white hover:bg-primary/40">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-bold text-accent-foreground">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
