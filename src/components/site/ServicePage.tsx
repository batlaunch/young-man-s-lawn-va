import { Link } from "react-router-dom";
import { SiteShell } from "./SiteShell";
import { ServicesSubNav } from "./ServicesSubNav";

export type PriceRow = { service: string; price: string };

export function ServicePage(props: {
  title: string;
  subtitle: string;
  prices?: PriceRow[];
  bullets?: string[];
  note?: string;
  ctaLabel: string;
  heroImage?: string;
  imageAlt?: string;
}) {
  const { title, subtitle, prices, bullets, note, ctaLabel, heroImage, imageAlt } = props;
  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg italic text-muted-foreground">{subtitle}</p>
        </div>
      </section>

      <ServicesSubNav />

      {heroImage && (
        <section className="mx-auto max-w-7xl px-4 pt-10 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={heroImage} alt={imageAlt ?? title} className="h-72 w-full object-cover sm:h-96" loading="lazy" />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {prices && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {prices.map((row) => (
              <div key={row.service} className="rounded-2xl border border-border border-l-4 border-l-accent bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-glow">
                <h3 className="font-display text-lg font-semibold text-brand-white">{row.service}</h3>
                <p className="mt-2 text-sm text-accent">{row.price}</p>
              </div>
            ))}
          </div>
        )}
        {bullets && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-brand-white/90">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {note && <p className="mt-8 text-center text-sm italic text-muted-foreground">{note}</p>}

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-bold text-accent-foreground transition-all hover:bg-accent-light hover:shadow-glow">
            {ctaLabel}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
