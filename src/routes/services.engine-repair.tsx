import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import repairPhoto from "@/assets/photos/repair.png";

export const Route = createFileRoute("/services/engine-repair")({
  head: () => ({
    meta: [
      { title: "Small Engine Repair Chester VA | Young Man's Lawn Care" },
      { name: "description", content: "Lawn mower tune-ups, carburetor repair, blade sharpening, and small engine maintenance in Chester, VA. Affordable rates. Call (808) 382-6129." },
      { property: "og:title", content: "Small Engine Repair Chester VA" },
      { property: "og:description", content: "Keep your lawn equipment running like new." },
      { property: "og:image", content: repairPhoto },
    ],
  }),
  component: () => (
    <ServicePage
      title="Small Engine Repair & Maintenance — Chester, VA"
      subtitle="Keep your lawn equipment running like new. We service push mowers, riding mowers, chainsaws, weed eaters, blowers, and more."
      heroImage={repairPhoto}
      imageAlt="James of Young Man's Lawn Care repairing a small mower engine"
      ctaLabel="Schedule a Repair"
      prices={[
        { service: "Lawn Mower Tune-Up (Push & Self-Propelled)", price: "$50 – $80" },
        { service: "Riding Mower Tune-Up", price: "$100 – $150" },
        { service: "Chainsaw / Weed Eater / Blower Tune-Up", price: "$40 – $60" },
        { service: "Carburetor Cleaning / Adjust / Rebuild / Replace", price: "$50 – $80" },
        { service: "Fuel Line Replacement", price: "$25 – $50" },
        { service: "Fuel Filter Replacement", price: "$15 – $30" },
        { service: "Gas Tank Cleaning", price: "$20 – $80" },
        { service: "Oil Change (Push Mower / Small Engines)", price: "$20 – $30" },
        { service: "Oil Change (Riding Mower / Large Engines)", price: "$40 – $60" },
        { service: "Air Filter Replacement", price: "$10 – $25" },
        { service: "Spark Plug Replacement", price: "$10 – $20" },
        { service: "Battery Testing & Replacement", price: "$25 – $125" },
        { service: "Starter Motor Repair", price: "$50 – $120" },
        { service: "Recoil Starter Repair/Replacement", price: "$40 – $80" },
        { service: "Blade Sharpening & Balancing", price: "$10 – $25 per blade" },
        { service: "Blade Replacement", price: "$20 – $50 per blade" },
        { service: "Belt & Pulley Replacement", price: "$40 – $100" },
        { service: "Compression Testing", price: "$15 – $20" },
      ]}
    />
  ),
});
