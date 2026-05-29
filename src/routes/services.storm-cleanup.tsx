import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import stormPhoto from "@/assets/yelp/yelp2.jpg";

export default function StormCleanup() {
  useSeo({
    title: "Storm Damage Cleanup | Young Man Land Service — Rixeyville VA",
    description:
      "Storm damage cleanup and debris removal serving the Rixeyville, VA area. Available 24/7.",
    meta: [
      { property: "og:title", content: "Storm Damage Cleanup | Young Man Land Service" },
      { property: "og:description", content: "After-storm cleanup and debris removal in the Rixeyville area." },
      { property: "og:image", content: stormPhoto },
    ],
  });
  return (
    <ServicePage
      title="Storm Damage Cleanup — Rixeyville, VA"
      subtitle="After-storm debris removal and yard recovery. Available 24 hours."
      heroImage={stormPhoto}
      imageAlt="Storm damage cleanup job by Young Man Land Service in Rixeyville VA"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        "Downed limb & tree removal",
        "Debris hauling",
        "Yard cleanup after severe weather",
        "Emergency response — open 24 hours",
      ]}
      note="Pricing varies by job scope. Contact for a free assessment."
    />
  );
}