import { Link } from "react-router-dom";
import { useSeo } from "@/lib/seo";
import { SiteShell } from "@/components/site/SiteShell";
import { DemoBanner } from "@/components/site/DemoBanner";
import { CheckCircle2, Leaf, Star, TreePine, Hammer, Droplets, Bug, Snowflake } from "lucide-react";
import heroPhoto from "@/assets/yelp/yelp1.jpg";
import stormPhoto from "@/assets/yelp/yelp2.jpg";
import workPhoto from "@/assets/yelp/yelp3.jpg";
import treePhoto from "@/assets/yelp/yelp4.jpg";

const SERVICES = [
  { icon: Leaf, title: "Lawn Care & Turf Management", desc: "Mowing, fertilization, weed control, aeration, overseeding, sod", to: "/services/lawn-turf" },
  { icon: TreePine, title: "Trees, Shrubs & Beds", desc: "Trimming, pruning, stump grinding, beds, mulching", to: "/services/trees-shrubs-beds" },
  { icon: Hammer, title: "Landscape Design & Hardscaping", desc: "Patios, walls, walkways, drainage, erosion control", to: "/services/landscape-hardscaping" },
  { icon: Droplets, title: "Irrigation & Systems", desc: "Irrigation installation & maintenance", to: "/services/irrigation" },
  { icon: Bug, title: "Pest & Environmental Control", desc: "Pest & grub control", to: "/services/pest-control" },
  { icon: Snowflake, title: "Seasonal Services", desc: "Leaf removal, cleanups, snow & ice management", to: "/services/seasonal" },
];

const TRUST = [
  "Serving the Rixeyville, VA area",
  "Open 24 hours, 7 days a week",
  "5.0 stars on Yelp",
  "Cash · Zelle · Cash App · Crypto",
];

// [FILLER] — Yelp shows only 1 review with no review text published. These are placeholders.
const REVIEWS = [
  { name: "[Customer name — filler]", text: "[Sample testimonial — replace with a real customer quote once available.]" },
  { name: "[Customer name — filler]", text: "[Sample testimonial — replace with a real customer quote once available.]" },
  { name: "[Customer name — filler]", text: "[Sample testimonial — replace with a real customer quote once available.]" },
];

export default function Home() {
  useSeo({
    title: "Young Man Land Service | Landscaping & Tree Services — Rixeyville, VA",
    description:
      "Young Man Land Service offers lawn care, tree services, storm damage cleanup, and greenscape construction serving the Rixeyville, VA area. Open 24 hours.",
    meta: [
      { property: "og:title", content: "Young Man Land Service | Rixeyville, VA" },
      { property: "og:description", content: "Landscaping and tree services in the Rixeyville, VA area. Open 24 hours." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cream">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroPhoto}
            alt="Young Man Land Service crew on a job site near Rixeyville, VA"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cream to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl fade-in-up rounded-2xl bg-cream/80 p-6 backdrop-blur-sm sm:p-8">
            <DemoBanner className="mb-6" />
            <p className="mb-4 font-display text-lg italic text-primary">Specialized outdoor land &amp; tree services.</p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              <span className="text-gradient-grass">Young Man Land Service</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Serving the Rixeyville, VA area. Landscaping, tree services, and storm cleanup — open 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-primary px-7 py-3 text-base font-bold text-brand-white transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-glow">
                Get Pricing &amp; Availability
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
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Services Offered</h2>
            <p className="mt-3 text-ink-soft">Specialized outdoor land and tree services, mindful of your budget.</p>
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

      {/* Recent Work */}
      <section className="border-y border-primary/15 bg-cream-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <h2 className="text-center font-display text-4xl font-bold text-ink sm:text-5xl">Recent Work</h2>
          <p className="mt-3 text-center text-ink-soft">Photos from real jobs around the Rixeyville area.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: heroPhoto, alt: "Young Man Land Service job site, Rixeyville VA" },
              { src: stormPhoto, alt: "Storm damage cleanup, Rixeyville VA" },
              { src: workPhoto, alt: "Land service work, Rixeyville VA" },
              { src: treePhoto, alt: "Oak tree snagged between two trees from storm damage, Rixeyville VA" },
            ].map((p) => (
              <div key={p.src} className="overflow-hidden rounded-xl border border-primary/15 bg-cream-soft shadow-sm">
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews — clearly marked filler */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <h2 className="text-center font-display text-4xl font-bold text-ink sm:text-5xl">What Customers Say</h2>
          <p className="mt-3 text-center text-sm italic text-ink-soft">
            [FILLER content — Yelp shows a 5.0 rating but the single review's text isn't published. Replace with real quotes when available.]
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-2xl border border-primary/15 bg-cream-soft p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="mt-4 text-sm text-ink">{r.text}</p>
                <p className="mt-4 text-sm font-semibold text-primary">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-primary/20 bg-cream-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Need outdoor work done?</h2>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 text-base font-bold text-brand-white transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-glow">
            Get Pricing &amp; Availability
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}