import { useSeo } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import photo from "@/assets/yelp/yelp3.jpg";

export default function PestControl() {
  useSeo({
    title: "Pest & Environmental Control | Young Man Land Service — Rixeyville VA",
    description: "Pest and grub control for lawns and landscapes in the Rixeyville, VA area.",
    meta: [{ property: "og:image", content: photo }],
  });
  return (
    <ServicePage
      title="Pest & Environmental Control"
      subtitle="Protect your lawn and landscape from pests."
      heroImage={photo}
      imageAlt="Pest and grub control"
      ctaLabel="Request Pricing & Availability"
      bullets={[
        { title: "17. Pest & grub control", description: "Treating soil and turf for damaging insects." },
      ]}
      note="Pricing varies by treatment. Contact for a quote. [FILLER PRICING]"
    />
  );
}