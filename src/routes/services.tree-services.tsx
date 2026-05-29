import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import treePhoto from "@/assets/yelp/yelp4.jpg";

export default function TreeServices() {
  useSeo({
    title: "Tree Services | Young Man Land Service — Rixeyville VA",
    description:
      "Tree care, removal, and disease & insect management for trees and shrubs serving the Rixeyville, VA area.",
    meta: [
      { property: "og:title", content: "Tree Services | Young Man Land Service" },
      { property: "og:description", content: "Specialized tree and shrub services in the Rixeyville area." },
      { property: "og:image", content: treePhoto },
    ],
  });
  return (
    <ServicePage
      title="Tree Services — Rixeyville, VA"
      subtitle="Specialized tree and shrub care, plus disease and insect management."
      heroImage={treePhoto}
      imageAlt="Storm damaged oak tree snagged between two trees — Young Man Land Service"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        "Tree care & maintenance",
        "Disease management — trees",
        "Disease management — shrubs",
        "Insect management — shrubs",
        "Tree assessment & consultation",
      ]}
      note="Pricing varies by job. Contact for a quote — examples below are placeholders for layout only. [FILLER PRICING]"
    />
  );
}