import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hammer, Leaf, Sparkles, Wrench } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Young Man's Lawn Care Chester VA" },
      { name: "description", content: "Lawn care, pressure washing, engine repair, and small construction services in Chester and Chesterfield County, VA." },
      { property: "og:title", content: "Services | Young Man's Lawn Care" },
      { property: "og:description", content: "Everything your property needs — lawn, exterior, equipment, and yard projects." },
    ],
  }),
  component: ServicesIndex,
});

const ITEMS = [
  { to: "/services/lawn-care", icon: Leaf, title: "Lawn Care", desc: "Mowing, edging, aeration, fertilization & more" },
  { to: "/services/pressure-washing", icon: Sparkles, title: "Pressure Washing", desc: "Driveways, siding, decks, and patios" },
  { to: "/services/engine-repair", icon: Wrench, title: "Engine Repair", desc: "Tune-ups, blade sharpening, carburetor work" },
  { to: "/services/small-construction", icon: Hammer, title: "Small Construction", desc: "Yard projects and property improvements" },
];

function ServicesIndex() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground">One trusted team for your lawn, exterior, equipment, and small construction needs.</p>
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
