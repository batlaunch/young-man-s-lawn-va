import { Link } from "react-router-dom";
import { useSeo } from "@/lib/seo";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicesSubNav } from "@/components/site/ServicesSubNav";
import { Leaf, TreePine, Hammer, Droplets, Bug, Snowflake } from "lucide-react";

const ITEMS = [
  { to: "/services/lawn-turf", icon: Leaf, title: "Lawn Care & Turf Management", desc: "Mowing, fertilization, weed control, aeration, overseeding, sod installation" },
  { to: "/services/trees-shrubs-beds", icon: TreePine, title: "Trees, Shrubs & Beds", desc: "Trimming, pruning, stump grinding, bed maintenance, mulching" },
  { to: "/services/landscape-hardscaping", icon: Hammer, title: "Landscape Design & Hardscaping", desc: "Design & install, patios, walls, walkways, drainage, erosion control" },
  { to: "/services/irrigation", icon: Droplets, title: "Irrigation & Systems", desc: "Irrigation installation & maintenance" },
  { to: "/services/pest-control", icon: Bug, title: "Pest & Environmental Control", desc: "Pest & grub control" },
  { to: "/services/seasonal", icon: Snowflake, title: "Seasonal Services", desc: "Leaf removal, spring & fall cleanups, snow & ice management" },
];

export default function ServicesIndex() {
  useSeo({
    title: "Services | Young Man Land Service — Rixeyville VA",
    description:
      "Landscaping, tree services, storm damage cleanup, and greenscape construction in the Rixeyville, VA area.",
    meta: [
      { property: "og:title", content: "Services | Young Man Land Service" },
      { property: "og:description", content: "Specialized outdoor land and tree services in Rixeyville, VA." },
    ],
  });
  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">Services Offered</h1>
          <p className="mt-4 text-lg text-muted-foreground">Specialized outdoor land and tree services in the Rixeyville, VA area.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {ITEMS.map(({ to, icon: Icon, title, desc }) => (
            <Link key={to} to={to} className="group rounded-2xl border border-border border-l-4 border-l-accent bg-surface p-8 transition-all hover:-translate-y-1 hover:shadow-glow">
              <Icon className="h-10 w-10 text-accent" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-brand-white">{title}</h2>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-accent group-hover:text-accent-light">View details →</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}