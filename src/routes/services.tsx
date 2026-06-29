import { createFileRoute } from "@tanstack/react-router";
import { InnerPagePlaceholder } from "@/components/InnerPagePlaceholder";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Orvella Salon" },
      { name: "description", content: "Hair, colour, keratin, skincare, makeup, and nail services at Orvella Salon, Lajpat Nagar." },
    ],
  }),
  component: () => <InnerPagePlaceholder eyebrow="Services" title="Every Service, An Experience" />,
});
