import { createFileRoute } from "@tanstack/react-router";
import { InnerPagePlaceholder } from "@/components/InnerPagePlaceholder";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Orvella Salon" },
      { name: "description", content: "Book your appointment at Orvella Salon, Lajpat Nagar II, New Delhi." },
    ],
  }),
  component: () => <InnerPagePlaceholder eyebrow="Get In Touch" title="Let's Create Something Beautiful" />,
});
