import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CreditCard, Heart, MapPin, Wallet } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Young Man's Lawn Care | Chester VA" },
      { name: "description", content: "Started at age 14 in Chester, VA, Young Man's Lawn Care has grown into a trusted local lawn care and property maintenance company serving Chesterfield County." },
      { property: "og:title", content: "About Young Man's Lawn Care | Chester VA" },
      { property: "og:description", content: "The story of Justin and Young Man's Lawn Care — Chester, VA since 2021." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1589923188651-268a9765e432?w=1200" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">
            The Story Behind <span className="text-gradient-grass">Young Man's Lawn Care</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-brand-white/90">
            <p>At 14 years old, Justin had a simple goal — he wanted to work, earn his own money, and build something for himself. The problem? Nobody would hire him. Too young, they said.</p>
            <p>Rather than give up, he picked up a mower and started Young Man's Lawn Care in 2021. What began as a teenager doing yard work in his neighborhood has grown into a trusted local business serving Chester, Virginia and the surrounding Chesterfield County area.</p>
            <p>Today, Young Man's Lawn Care offers a full range of services — from weekly lawn maintenance and seasonal cleanups to pressure washing, small engine repair, and minor construction projects. Justin has built the business on one simple belief: treat every customer's property like your own.</p>
            <p className="font-display text-2xl italic text-accent">"We cut grass, not corners."</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img src="https://images.unsplash.com/photo-1589923188651-268a9765e432?w=800" alt="Young lawn care professional working on a Chester VA lawn" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/60">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-brand-white sm:text-4xl">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, title: "Personalized Service", desc: "Every client is treated with respect. You're not a number." },
              { icon: Wallet, title: "Affordable Pricing", desc: "Fair rates with free estimates on every job." },
              { icon: MapPin, title: "Local & Trusted", desc: "Chester-based, community-focused, since 2021." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <Icon className="mx-auto h-9 w-9 text-accent" />
                <h3 className="mt-4 font-display text-xl font-semibold text-brand-white">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-brand-white">Payments Accepted</h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {["Credit Card", "Venmo", "Zelle"].map((p) => (
            <span key={p} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-brand-white">
              <CreditCard className="h-4 w-4 text-accent" /> {p}
            </span>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
