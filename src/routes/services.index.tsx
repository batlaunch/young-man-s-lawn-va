import { Link } from "react-router-dom";
import { useSeo } from "@/lib/seo";
import { SiteShell } from "@/components/site/SiteShell";
import { Leaf, Sparkles, TreePine, Wrench } from "lucide-react";

const ITEMS = [
  { to: "/services/lawn-care", icon: Leaf, title: "Lawn Care", desc: "Mowing, maintenance, and yard upkeep" },
  { to: "/services/tree-services", icon: TreePine, title: "Tree Services", desc: "Tree care plus disease & insect management" },
  { to: "/services/storm-cleanup", icon: Sparkles, title: "Storm Damage Cleanup", desc: "After-storm debris removal — open 24 hours" },
  { to: "/services/greenscape", icon: Wrench, title: "Greenscape Construction", desc: "Outdoor land and property projects" },
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