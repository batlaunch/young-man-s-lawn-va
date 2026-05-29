import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";

export default function PressureWashing() {
  useSeo({
    title: "Pressure Washing Chester VA | Young Man's Lawn Care",
    description: "Professional pressure washing services in Chester and Chesterfield County, VA. Driveways, decks, siding, and more. Free estimates available.",
    meta: [
      { property: "og:title", content: "Pressure Washing Chester VA" },
      { property: "og:description", content: "Restore your driveways, decks, siding, and patios." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200" },
    ],
  });
  return (
    <ServicePage
      title="Pressure Washing — Chester, VA"
      subtitle="Restore your driveways, sidewalks, decks, siding, and patios to like-new condition."
      heroImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600"
      imageAlt="Pressure washing a driveway in Chester VA"
      ctaLabel="Get a Free Quote"
      bullets={[
        "Driveways & sidewalks",
        "Decks & patios",
        "Home siding & brick",
        "Fences",
        "Gutters (exterior)",
      ]}
      note="Pricing varies by square footage and surface. Contact us for a free estimate."
    />
  );
}
