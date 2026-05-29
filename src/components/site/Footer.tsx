import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import { LogoPlaceholder } from "./Logo";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <LogoPlaceholder small />
          <p className="mt-4 font-display italic text-accent">Specialized outdoor land &amp; tree services.</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Young Man Land Service — landscaping and tree services in the Rixeyville, VA area.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/services/lawn-turf" className="hover:text-accent">Lawn Care & Turf Management</Link></li>
            <li><Link to="/services/trees-shrubs-beds" className="hover:text-accent">Trees, Shrubs & Beds</Link></li>
            <li><Link to="/services/landscape-hardscaping" className="hover:text-accent">Landscape Design & Hardscaping</Link></li>
            <li><Link to="/services/irrigation" className="hover:text-accent">Irrigation & Systems</Link></li>
            <li><Link to="/services/pest-control" className="hover:text-accent">Pest & Environmental Control</Link></li>
            <li><Link to="/services/seasonal" className="hover:text-accent">Seasonal Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-white">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Serving Rixeyville, VA</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Open 24 hours · 7 days</li>
          </ul>
          <div className="mt-4"><SocialIcons /></div>
          <p className="mt-5 text-xs text-muted-foreground">Payments: <span className="text-brand-white">Cash · Zelle · Cash App · Crypto</span></p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row lg:px-8">
          <p>© 2025 Young Man Land Service · Rixeyville, VA</p>
          <p className="italic">Website built for demo purposes</p>
        </div>
      </div>
    </footer>
  );
}
