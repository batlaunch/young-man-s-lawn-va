import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SamplePhotoBadge } from "@/components/site/SamplePhotoBadge";
import { CheckCircle2, Hammer, Sparkles, Star, Wrench, Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Young Man's Lawn Care | Chester VA Lawn Care, Pressure Washing & Engine Repair" },
      { name: "description", content: "Chester VA's trusted lawn care, pressure washing, and engine repair company. Serving Chesterfield County since 2021. Free estimates." },
      { property: "og:title", content: "Young Man's Lawn Care | Chester VA" },
      { property: "og:description", content: "Chester VA's trusted lawn care, pressure washing, and engine repair company since 2021." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600" },
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
  { name: "Sarah M.", text: "Justin and his crew transformed our overgrown backyard in a single afternoon. Worth every penny." },
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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
            alt="Freshly mowed green lawn — Chester VA lawn care"
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
          <h2 className="text-center font-display text-4xl font-bold text-ink sm:text-5xl">The Young Man's Difference</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              { before: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" },
              { before: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800", after: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800" },
            ].map((pair, i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <BAImage src={pair.before} label="Before" alt="Before lawn care in Chester VA" />
                <BAImage src={pair.after} label="After" alt="After lawn care in Chester VA" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs italic text-ink-soft">(Sample photos — real project photos will be featured here)</p>
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

function BAImage({ src, label, alt }: { src: string; label: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border">
      <img src={src} alt={alt} className="aspect-[4/3] h-full w-full object-cover" loading="lazy" />
      <span className="absolute left-2 top-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{label}</span>
      <SamplePhotoBadge />
    </div>
  );
}
