import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import photo from "@/assets/yelp/yelp4.jpg";

export default function TreesShrubsBeds() {
  useSeo({
    title: "Trees, Shrubs & Beds | Young Man Land Service — Rixeyville VA",
    description: "Hedge & shrub trimming, tree pruning, stump grinding, flower bed maintenance, and mulching in the Rixeyville, VA area.",
    meta: [{ property: "og:image", content: photo }],
  });
  return (
    <ServicePage
      title="Trees, Shrubs & Beds"
      subtitle="Pruning, trimming, removals, and bed care for a tidy, healthy landscape."
      heroImage={photo}
      imageAlt="Tree and shrub services"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        "7. Hedge & shrub trimming",
        "8. Tree trimming & pruning",
        "9. Stump grinding & removal",
        "10. Flower bed maintenance",
        "11. Mulching",
      ]}
      note="Pricing varies by job. Contact for a quote. [FILLER PRICING]"
    />
  );
}