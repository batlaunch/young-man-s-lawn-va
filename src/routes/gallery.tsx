import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SamplePhotoBadge } from "@/components/site/SamplePhotoBadge";
import { Instagram } from "lucide-react";
import home1 from "@/assets/photos/home1.png";
import home2 from "@/assets/photos/home2.png";
import home3 from "@/assets/photos/home3.png";
import repair from "@/assets/photos/repair.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Young Man's Lawn Care Chester VA" },
      { name: "description", content: "Browse before and after photos of lawn care, yard cleanups, and property maintenance work by Young Man's Lawn Care in Chester and Chesterfield County, VA." },
      { property: "og:title", content: "Gallery | Young Man's Lawn Care" },
      { property: "og:description", content: "Before & afters, cleanups, and lawn transformations across Chester and Chesterfield County." },
      { property: "og:image", content: home1 },
    ],
  }),
  component: Gallery,
});

const FEATURED = [
  { src: home1, alt: "James on his riding mower in a Chester VA neighborhood" },
  { src: home3, alt: "Fall leaf cleanup with a backpack blower" },
  { src: home2, alt: "Newly installed picket fence" },
  { src: repair, alt: "Small engine repair on a push mower" },
];

const GRID = [
  "https://images.unsplash.com/photo-1599629954294-14df9ec8bc03?w=600",
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600",
  "https://images.unsplash.com/photo-1551410224-699683e15636?w=600",
  "https://images.unsplash.com/photo-1572150619437-d18bef0a4b51?w=600",
  "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600",
  "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600",
];

function Gallery() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">Our Work</h1>
          <p className="mt-4 text-lg text-muted-foreground">Before & afters, cleanups, and lawn transformations across Chester and Chesterfield County.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-brand-white">Featured Projects</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((p) => (
            <div key={p.src} className="overflow-hidden rounded-xl border border-border">
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/5] h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-white">More Samples</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {GRID.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl border border-border">
                <img src={src} alt={`Lawn care work sample ${i + 1} — Chester VA`} loading="lazy" className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <SamplePhotoBadge />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs italic text-muted-foreground">(Stock samples — follow us on Instagram @young_mans_lawn_care for more real photos)</p>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8">
          <Instagram className="mx-auto h-10 w-10 text-accent-light" />
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-white sm:text-4xl">See more of our work on Instagram</h2>
          <a href="https://www.instagram.com/young_mans_lawn_care/" target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground transition-all hover:bg-accent-light hover:shadow-glow">
            <Instagram className="h-5 w-5" /> @young_mans_lawn_care
          </a>
        </div>
      </section>
    </SiteShell>
  );
}

