import { createFileRoute } from "@tanstack/react-router";
import { ColumnScrollGallery } from "@/components/gallery/ColumnScrollGallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Orvella Salon" },
      {
        name: "description",
        content:
          "An alternate column-scroll gallery of the Orvella atelier. Click any image to step inside.",
      },
      { property: "og:title", content: "Gallery — Orvella Salon" },
      { property: "og:description", content: "Explore the Orvella atelier in motion." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return <ColumnScrollGallery />;
}
