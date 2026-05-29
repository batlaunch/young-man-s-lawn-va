import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import photo from "@/assets/yelp/yelp3.jpg";

export default function LawnTurf() {
  useSeo({
    title: "Lawn Care & Turf Management | Young Man Land Service — Rixeyville VA",
    description: "Lawn mowing, fertilization, weed control, aeration, overseeding, and sod installation in the Rixeyville, VA area.",
    meta: [{ property: "og:image", content: photo }],
  });
  return (
    <ServicePage
      title="Lawn Care & Turf Management"
      subtitle="Full-service lawn and turf care to keep your yard healthy year-round."
      heroImage={photo}
      imageAlt="Lawn care and turf management"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        { title: "1. Lawn mowing & edging", description: "Regular cutting and clean edge lines along borders." },
        { title: "2. Fertilization", description: "Seasonal nutrient treatments to keep grass healthy and green." },
        { title: "3. Weed control", description: "Pre- and post-emergent herbicide applications." },
        { title: "4. Aeration", description: "Core or spike aeration to reduce soil compaction." },
        { title: "5. Overseeding", description: "Reseeding thin or bare patches to thicken turf." },
        { title: "6. Sod installation", description: "Laying new turf for instant lawn coverage." },
      ]}
      note="Pricing varies by property size and scope. Contact for a quote. [FILLER PRICING]"
    />
  );
}