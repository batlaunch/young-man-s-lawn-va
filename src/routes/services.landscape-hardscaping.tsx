import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import photo from "@/assets/yelp/yelp2.jpg";

export default function LandscapeHardscaping() {
  useSeo({
    title: "Landscape Design & Hardscaping | Young Man Land Service — Rixeyville VA",
    description: "Landscape design, patios, walls, walkways, drainage, and erosion control in the Rixeyville, VA area.",
    meta: [{ property: "og:image", content: photo }],
  });
  return (
    <ServicePage
      title="Landscape Design & Hardscaping"
      subtitle="Design, build, and protect your outdoor space."
      heroImage={photo}
      imageAlt="Landscape design and hardscaping"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        "12. Landscape design & installation",
        "13. Hardscaping (patios, walls, walkways)",
        "14. Drainage solutions",
        "15. Erosion control",
      ]}
      note="Pricing varies by project. Contact for a quote. [FILLER PRICING]"
    />
  );
}