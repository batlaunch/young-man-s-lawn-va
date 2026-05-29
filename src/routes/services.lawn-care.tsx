import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/lawn-care")({
  head: () => ({
    meta: [
      { title: "Lawn Care Services in Chester VA | Young Man's Lawn Care" },
      { name: "description", content: "Affordable lawn mowing, edging, aeration, fertilization, and yard cleanup in Chester and Chesterfield County, VA. Free estimates. Call (804) 555-0123." },
      { property: "og:title", content: "Lawn Care Services in Chester VA" },
      { property: "og:description", content: "Professional lawn maintenance for residential properties in Chesterfield County." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200" },
    ],
  }),
  component: () => (
    <ServicePage
      title="Lawn Care Services — Chester, VA"
      subtitle="Affordable, professional lawn maintenance for residential properties in Chester and Chesterfield County."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
      imageAlt="Freshly mowed residential lawn in Chester VA"
      ctaLabel="Get a Free Quote"
      prices={[
        { service: "Lawn Mowing", price: "$40 – $100 per service (varies by lawn size)" },
        { service: "Edging & Trimming", price: "$20 – $50 per service" },
        { service: "Leaf Blowing & Cleanup", price: "$50 – $150 per service" },
        { service: "Lawn Aeration", price: "$50 – $200 per service" },
        { service: "Overseeding", price: "$100 – $300 per service" },
        { service: "Fertilization", price: "$50 – $150 per application" },
        { service: "Weed Control & Treatment", price: "$50 – $200 per application" },
        { service: "Mulching", price: "$0.50 – $1.50 per sq ft" },
        { service: "Hedge & Shrub Trimming/Removal", price: "$50 – $200 per service" },
        { service: "Yard Cleanup (Spring/Fall)", price: "$100 – $500 per service" },
        { service: "Gutter Cleaning", price: "$75 – $250 per service" },
        { service: "Storm Cleanup & Debris Removal", price: "$100 – $500 per service" },
        { service: "Tree & Stump Removal", price: "$20 – $120" },
      ]}
    />
  ),
});
