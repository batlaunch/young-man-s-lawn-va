import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import photo from "@/assets/yelp/yelp2.jpg";

export default function Seasonal() {
  useSeo({
    title: "Seasonal Services | Young Man Land Service — Rixeyville VA",
    description: "Leaf removal, spring & fall cleanups, snow removal, and ice management in the Rixeyville, VA area.",
    meta: [{ property: "og:image", content: photo }],
  });
  return (
    <ServicePage
      title="Seasonal Services"
      subtitle="Year-round care for every season."
      heroImage={photo}
      imageAlt="Seasonal yard services"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        { title: "18. Leaf removal", description: "Seasonal cleanup of fallen leaves." },
        { title: "19. Seasonal cleanups (spring & fall)", description: "Spring and fall deep-clean services for beds, debris, and prep work." },
        { title: "20. Snow removal & ice management", description: "Plowing, shoveling, and salting in winter months." },
      ]}
      note="Pricing varies by job. Contact for a quote. [FILLER PRICING]"
    />
  );
}