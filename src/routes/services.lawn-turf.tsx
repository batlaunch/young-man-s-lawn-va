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
        "1. Lawn mowing & edging",
        "2. Fertilization",
        "3. Weed control",
        "4. Aeration",
        "5. Overseeding",
        "6. Sod installation",
      ]}
      note="Pricing varies by property size and scope. Contact for a quote. [FILLER PRICING]"
    />
  );
}