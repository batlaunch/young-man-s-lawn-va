import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import fencePhoto from "@/assets/photos/home2.png";

export default function SmallConstruction() {
  useSeo({
    title: "Small Construction Services Chester VA | Young Man's Lawn Care",
    description: "Small construction and yard improvement projects in Chester, VA. Fencing, retaining walls, raised beds, and more. Call Young Man's Lawn Care for a free estimate.",
    meta: [
      { property: "og:title", content: "Small Construction Services Chester VA" },
      { property: "og:description", content: "From yard projects to property improvements." },
      { property: "og:image", content: fencePhoto },
    ],
  });
  return (
    <ServicePage
      title="Small Construction Services — Chester, VA"
      subtitle="From yard projects to property improvements, we handle the small jobs that make a big difference."
      heroImage={fencePhoto}
      imageAlt="Recent picket fence installation by Young Man's Lawn Care"
      ctaLabel="Request a Project Quote"
      bullets={[
        "Raised garden beds",
        "Fence installation & repair",
        "Retaining walls",
        "Patio edging & borders",
        "General yard improvement projects",
      ]}
      note="Pricing varies by project. Contact us for a free estimate."
    />
  );
}
