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
        { title: "12. Landscape design & installation", description: "Planning and planting new garden beds, pathways, and features." },
        { title: "13. Hardscaping", description: "Building patios, retaining walls, walkways, and fire pits." },
        { title: "14. Drainage solutions", description: "Installing French drains or grading to manage water runoff." },
        { title: "15. Erosion control", description: "Using ground cover, matting, or grading to prevent soil loss on slopes." },
      ]}
      note="Pricing varies by project. Contact for a quote. [FILLER PRICING]"
    />
  );
}