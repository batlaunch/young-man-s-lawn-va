import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/small-construction")({
  head: () => ({
    meta: [
      { title: "Small Construction Services Chester VA | Young Man's Lawn Care" },
      { name: "description", content: "Small construction and yard improvement projects in Chester, VA. Fencing, retaining walls, raised beds, and more. Call Young Man's Lawn Care for a free estimate." },
      { property: "og:title", content: "Small Construction Services Chester VA" },
      { property: "og:description", content: "From yard projects to property improvements." },
    ],
  }),
  component: () => (
    <ServicePage
      title="Small Construction Services — Chester, VA"
      subtitle="From yard projects to property improvements, we handle the small jobs that make a big difference."
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
  ),
});
