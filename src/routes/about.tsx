import { useSeo } from "@/lib/seo";
import { SiteShell } from "@/components/site/SiteShell";
import { CreditCard, Heart, MapPin, Wallet } from "lucide-react";
import aboutPhoto from "@/assets/yelp/yelp1.jpg";

export default function About() {
  useSeo({
    title: "About | Young Man Land Service — Rixeyville VA",
    description:
      "Young Man Land Service offers specialized outdoor land and tree services in the Rixeyville, VA area.",
    meta: [
      { property: "og:title", content: "About | Young Man Land Service" },
      { property: "og:description", content: "Specialized outdoor land and tree services — Rixeyville, VA." },
      { property: "og:image", content: aboutPhoto },
    ],
  });

  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">
            About <span className="text-gradient-grass">Young Man Land Service</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-brand-white/90">
            {/* Source: Yelp business description */}
            <p>
              I offer assistance with outdoor tasks that require specialized outdoor land and tree services.
            </p>
            <p>
              My aim is to maintain a profitable business while being mindful of your budget. I am dedicated
              to delivering exceptional service to ensure your complete satisfaction.
            </p>
            <p className="text-sm italic text-muted-foreground">
              [FILLER — additional history, team details, and founding year are not published on the Yelp profile. Add real
              background here when ready.]
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img src={aboutPhoto} alt="Young Man Land Service in the Rixeyville, VA area" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/60">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-brand-white sm:text-4xl">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, title: "Specialized Service", desc: "Outdoor land and tree work, done with care." },
              { icon: Wallet, title: "Budget-Mindful", desc: "Fair pricing that respects your project budget." },
              { icon: MapPin, title: "Local to Rixeyville", desc: "Serving the Rixeyville, VA area." },
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
          {["Cash", "Zelle", "Cash App", "Cryptocurrency"].map((p) => (
            <span key={p} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-brand-white">
              <CreditCard className="h-4 w-4 text-accent" /> {p}
            </span>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}