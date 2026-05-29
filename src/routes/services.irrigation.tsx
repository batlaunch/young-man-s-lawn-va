import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import photo from "@/assets/yelp/yelp1.jpg";

export default function Irrigation() {
  useSeo({
    title: "Irrigation & Systems | Young Man Land Service — Rixeyville VA",
    description: "Irrigation installation and maintenance in the Rixeyville, VA area.",
    meta: [{ property: "og:image", content: photo }],
  });
  return (
    <ServicePage
      title="Irrigation & Systems"
      subtitle="Reliable watering systems installed and maintained."
      heroImage={photo}
      imageAlt="Irrigation systems"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        { title: "16. Irrigation installation & maintenance", description: "Sprinkler system setup, repairs, and seasonal startups/shutdowns." },
      ]}
      note="Pricing varies by system size. Contact for a quote. [FILLER PRICING]"
    />
  );
}