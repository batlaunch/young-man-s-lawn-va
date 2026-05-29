import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CheckCircle2, Hammer, Sparkles, Star, Wrench, Leaf } from "lucide-react";
import heroPhoto from "@/assets/photos/home1.png";
import fencePhoto from "@/assets/photos/home2.png";
import leafPhoto from "@/assets/photos/home3.png";
import repairPhoto from "@/assets/photos/repair.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Young Man's Lawn Care | Chester VA Lawn Care, Pressure Washing & Engine Repair" },
      { name: "description", content: "Chester VA's trusted lawn care, pressure washing, and engine repair company. Serving Chesterfield County since 2021. Free estimates." },
      { property: "og:title", content: "Young Man's Lawn Care | Chester VA" },
      { property: "og:description", content: "Chester VA's trusted lawn care, pressure washing, and engine repair company since 2021." },
      { property: "og:image", content: heroPhoto },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Leaf, title: "Lawn Care", desc: "Mowing, edging, aeration, fertilization & more", to: "/services/lawn-care" },
  { icon: Sparkles, title: "Pressure Washing", desc: "Driveways, siding, decks, and patios", to: "/services/pressure-washing" },
  { icon: Wrench, title: "Engine Repair", desc: "Tune-ups, blade sharpening, carburetor work", to: "/services/engine-repair" },
  { icon: Hammer, title: "Small Construction", desc: "Yard projects and property improvements", to: "/services/small-construction" },
];

const TRUST = [
  "Established 2021",
  "Serving Chester & Chesterfield County",
  "Free Estimates",
  "Credit Card · Venmo · Zelle Accepted",
];

const REVIEWS = [
  { name: "Sarah M.", text: "James and his crew transformed our overgrown backyard in a single afternoon. Worth every penny." },
  { name: "David R.", text: "Honest pricing, on time, and the lawn has never looked better. Highly recommend." },
  { name: "Karen W.", text: "Super responsive and respectful. They treat your yard like it's their own." },
];

function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cream">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroPhoto}
            alt="James of Young Man's Lawn Care on his riding mower in a Chester VA neighborhood"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/55 to-cream" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl fade-in-up">
            <p className="mb-4 font-display text-lg italic text-primary">We cut grass, not corners.</p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Chester's Trusted <span className="text-gradient-grass">Lawn Care</span> Professionals
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Serving Chester, VA and surrounding Chesterfield County areas since 2021.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-primary px-7 py-3 text-base font-bold text-brand-white transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-glow">
                Get a Free Quote
              </Link>
              <Link to="/gallery" className="rounded-full border-2 border-primary/40 px-7 py-3 text-base font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-brand-white">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-primary/15 bg-cream-soft">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {TRUST.map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-ink">
              <CheckCircle2 className="h-5 w-5 text-primary" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Everything Your Property Needs</h2>
            <p className="mt-3 text-ink-soft">One trusted team for lawn, exterior, and equipment work.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={title}
                to={to}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 border-l-4 border-l-primary bg-cream-soft p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <Icon className="h-9 w-9 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="border-y border-primary/15 bg-cream-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <h2 className="text-center font-display text-4xl font-bold text-ink sm:text-5xl">Recent Work</h2>
          <p className="mt-3 text-center text-ink-soft">A look at real projects across Chester and Chesterfield County.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: heroPhoto, alt: "Riding mower job in a Chester VA neighborhood" },
              { src: leafPhoto, alt: "Fall leaf cleanup in a Chesterfield County yard" },
              { src: fencePhoto, alt: "New picket fence installation" },
              { src: repairPhoto, alt: "Small engine repair on a push mower" },
            ].map((p) => (
              <div key={p.src} className="overflow-hidden rounded-xl border border-primary/15 bg-cream-soft shadow-sm">
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline banner */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <p className="font-display text-4xl italic text-brand-white sm:text-5xl">"We cut grass, not corners."</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-accent-light">Young Man's Lawn Care · Chester, VA</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <h2 className="text-center font-display text-4xl font-bold text-ink sm:text-5xl">What Our Customers Are Saying</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl border border-primary/15 bg-cream-soft p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="mt-4 text-sm text-ink">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold text-primary">— {r.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs italic text-ink-soft">(Customer reviews will be featured here)</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-primary/20 bg-cream-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Ready for a lawn you're proud of?</h2>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 text-base font-bold text-brand-white transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-glow">
            Request Your Free Quote
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

