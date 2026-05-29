import { useSeo } from "@/lib/seo";
import { SiteShell } from "@/components/site/SiteShell";
import { SamplePhotoBadge } from "@/components/site/SamplePhotoBadge";
import yelp1 from "@/assets/yelp/yelp1.jpg";
import yelp2 from "@/assets/yelp/yelp2.jpg";
import yelp3 from "@/assets/yelp/yelp3.jpg";
import yelp4 from "@/assets/yelp/yelp4.jpg";

export default function Gallery() {
  useSeo({
    title: "Gallery | Young Man Land Service — Rixeyville VA",
    description:
      "Photos of land service and tree work by Young Man Land Service in the Rixeyville, VA area.",
    meta: [
      { property: "og:title", content: "Gallery | Young Man Land Service" },
      { property: "og:description", content: "Photos from real jobs in the Rixeyville, VA area." },
      { property: "og:image", content: yelp1 },
    ],
  });

  const FEATURED = [
    { src: yelp1, alt: "Young Man Land Service job site, Rixeyville VA" },
    { src: yelp2, alt: "Storm damage cleanup, Rixeyville VA" },
    { src: yelp3, alt: "Land service work, Rixeyville VA" },
    { src: yelp4, alt: "Oak tree snagged between two trees from storm damage, Rixeyville VA" },
  ];

  // Filler placeholders — there are only 4 real photos on the Yelp profile.
  const SAMPLES = [yelp1, yelp2, yelp3, yelp4, yelp2, yelp3];

  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">Our Work</h1>
          <p className="mt-4 text-lg text-muted-foreground">Photos from real jobs across the Rixeyville, VA area.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-brand-white">Featured Photos</h2>
        <p className="mt-2 text-sm text-muted-foreground">Source: Yelp business profile.</p>
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
          <p className="mt-2 text-sm italic text-muted-foreground">
            [FILLER — these are repeats of the four Yelp photos used as placeholders. Swap in additional real job photos when available.]
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {SAMPLES.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl border border-border">
                <img src={src} alt={`Sample photo ${i + 1} — Rixeyville VA`} loading="lazy" className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <SamplePhotoBadge />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}