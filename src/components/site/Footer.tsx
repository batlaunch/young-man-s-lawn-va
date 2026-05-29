import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { LogoPlaceholder } from "./Logo";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <LogoPlaceholder small />
          <p className="mt-4 font-display italic text-accent">"We cut grass, not corners."</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Chester, VA's trusted lawn care, pressure washing, and engine repair company. Serving Chesterfield County since 2021.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/services/lawn-care" className="hover:text-accent">Lawn Care Services</Link></li>
            <li><Link to="/services/engine-repair" className="hover:text-accent">Engine Repair</Link></li>
            <li><Link to="/services/pressure-washing" className="hover:text-accent">Pressure Washing</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-white">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="tel:+18045550123" className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> (804) 555-0123</a></li>
            <li><a href="mailto:info@youngmanslawnva.com" className="flex items-center gap-2 hover:text-accent"><Mail className="h-4 w-4" /> info@youngmanslawnva.com</a></li>
          </ul>
          <div className="mt-4"><SocialIcons /></div>
          <p className="mt-5 text-xs text-muted-foreground">Payments: <span className="text-brand-white">Credit Card · Venmo · Zelle</span></p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row lg:px-8">
          <p>© 2025 Young Man's Lawn Care · Chester, VA · YoungMansLawnVA.com</p>
          <p className="italic">Website built for demo purposes</p>
        </div>
      </div>
    </footer>
  );
}
