import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import lawnPhoto from "@/assets/yelp/yelp3.jpg";

export default function LawnCare() {
  useSeo({
    title: "Lawn Care | Young Man Land Service — Rixeyville VA",
    description:
      "Lawn care serving the Rixeyville, VA area by Young Man Land Service.",
    meta: [
      { property: "og:title", content: "Lawn Care | Young Man Land Service" },
      { property: "og:description", content: "Lawn care in the Rixeyville, VA area." },
      { property: "og:image", content: lawnPhoto },
    ],
  });
  return (
    <ServicePage
      title="Lawn Care — Rixeyville, VA"
      subtitle="Lawn maintenance for residential properties in the Rixeyville area."
      heroImage={lawnPhoto}
      imageAlt="Lawn care work by Young Man Land Service in the Rixeyville, VA area"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        "Lawn mowing",
        "Edging & trimming",
        "Seasonal yard upkeep",
        "Leaf removal",
      ]}
      note="Pricing is not published on the Yelp profile. Contact for a quote — [FILLER] price ranges are not shown so quotes are job-by-job."
    />
  );
}