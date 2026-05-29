import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { SocialIcons } from "@/components/site/SocialIcons";
import { CheckCircle2, CreditCard, Mail, MapPin, Phone } from "lucide-react";
import reviewQr from "@/assets/photos/contact.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Quote | Young Man's Lawn Care Chester VA" },
      { name: "description", content: "Request a free estimate for lawn care, pressure washing, engine repair, or yard services in Chester and Chesterfield County, VA. Call (808) 382-6129." },
      { property: "og:title", content: "Free Quote | Young Man's Lawn Care" },
      { property: "og:description", content: "Get a free estimate for lawn and property services in Chester, VA." },
    ],
  }),
  component: Contact,
});

const SERVICE_OPTIONS = [
  "Lawn Mowing", "Edging & Trimming", "Leaf Cleanup", "Aeration", "Overseeding",
  "Fertilization", "Weed Control", "Mulching", "Hedge Trimming", "Yard Cleanup",
  "Gutter Cleaning", "Storm Cleanup", "Tree/Stump Removal", "Pressure Washing",
  "Engine Repair", "Small Construction", "Other",
];

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteShell>
      <section className="border-b border-border bg-grass-radial">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">Get Your Free Quote</h1>
          <p className="mt-4 text-lg text-muted-foreground">Serving Chester, VA and all of Chesterfield County. We'll get back to you promptly.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-accent" />
                <h2 className="mt-4 font-display text-3xl font-bold text-brand-white">Thanks!</h2>
                <p className="mt-2 text-muted-foreground">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field label="Email Address" name="email" type="email" required className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-brand-white">Service Needed</label>
                  <select required defaultValue="" className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-brand-white outline-none focus:border-accent">
                    <option value="" disabled>Select a service…</option>
                    {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <Field label="Property Address / Area" name="address" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-brand-white">Message / Additional Details</label>
                  <textarea rows={4} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-brand-white outline-none focus:border-accent" />
                </div>
                <button type="submit" className="sm:col-span-2 w-full rounded-full bg-accent px-7 py-3 text-base font-bold text-accent-foreground transition-all hover:bg-accent-light hover:shadow-glow">
                  Send My Quote Request
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-surface p-6">
              <h2 className="font-display text-2xl font-semibold text-brand-white">Contact Info</h2>
              <ul className="mt-5 space-y-3 text-sm text-brand-white/90">
                <li><a href="tel:+18083826129" className="flex items-center gap-3 hover:text-accent"><Phone className="h-5 w-5 text-accent" /> (808) 382-6129</a></li>
                <li><a href="mailto:james.kissiar@gmail.com" className="flex items-center gap-3 hover:text-accent"><Mail className="h-5 w-5 text-accent" /> james.kissiar@gmail.com</a></li>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" /> Chester, VA 23831 — Serving Chesterfield County & surrounding areas</li>
              </ul>
              <div className="mt-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">Follow Us</p>
                <SocialIcons size={22} />
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Payments Accepted</p>
              <div className="flex flex-wrap gap-2">
                {["Credit Card", "Venmo", "Zelle"].map((p) => (
                  <span key={p} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-brand-white">
                    <CreditCard className="h-3.5 w-3.5 text-accent" /> {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 text-center">
              <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Leave Us a Google Review</p>
              <a href="https://g.page/r/Cc7WXdpUAGKsEBM/review" target="_blank" rel="noreferrer noopener" className="inline-block">
                <img src={reviewQr} alt="QR code to leave a Google review for Young Man's Lawn Care" className="mx-auto h-40 w-40 rounded-lg bg-white p-2" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">Scan or tap the code</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-white">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-brand-white outline-none focus:border-accent" />
    </div>
  );
}
