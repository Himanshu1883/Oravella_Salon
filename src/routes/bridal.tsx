import { createFileRoute } from "@tanstack/react-router";
import { InnerPagePlaceholder } from "@/components/InnerPagePlaceholder";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Studio — Orvella Salon" },
      { name: "description", content: "Curated bridal packages, hair, makeup, and draping by Orvella Salon." },
    ],
  }),
  component: () => <InnerPagePlaceholder eyebrow="Bridal Studio" title="For Your Most Beautiful Chapter" />,
});
