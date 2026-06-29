import { createFileRoute } from "@tanstack/react-router";
import { InnerPagePlaceholder } from "@/components/InnerPagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Orvella Salon" },
      { name: "description", content: "Our story, our philosophy, and the team behind Orvella Salon." },
    ],
  }),
  component: () => <InnerPagePlaceholder eyebrow="Our Story" title="Crafted with Passion" />,
});
