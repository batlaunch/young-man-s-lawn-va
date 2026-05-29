import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import greenscapePhoto from "@/assets/yelp/yelp3.jpg";

export default function Greenscape() {
  useSeo({
    title: "Greenscape Construction | Young Man Land Service — Rixeyville VA",
    description:
      "Greenscape construction and outdoor property projects serving the Rixeyville, VA area.",
    meta: [
      { property: "og:title", content: "Greenscape Construction | Young Man Land Service" },
      { property: "og:description", content: "Outdoor greenscape construction in the Rixeyville area." },
      { property: "og:image", content: greenscapePhoto },
    ],
  });
  return (
    <ServicePage
      title="Greenscape Construction — Rixeyville, VA"
      subtitle="Outdoor land projects that shape and improve your property."
      heroImage={greenscapePhoto}
      imageAlt="Greenscape construction work by Young Man Land Service"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        "Greenscape construction",
        "Property grading & shaping",
        "Yard improvement projects",
        "Custom outdoor builds",
      ]}
      note="Each project is scoped individually. Contact for pricing and availability."
    />
  );
}