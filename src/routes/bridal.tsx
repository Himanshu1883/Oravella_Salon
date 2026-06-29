import { createFileRoute } from "@tanstack/react-router";
import { BridalHero } from "@/components/bridal/BridalHero";
import { BridalPackages } from "@/components/bridal/BridalPackages";
import { PreBridalSection } from "@/components/bridal/PreBridalSection";
import { BridalGallery } from "@/components/bridal/BridalGallery";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Studio — Orvella Salon" },
      { name: "description", content: "Curated bridal packages, hair, makeup, and draping by Orvella Salon." },
    ],
  }),
  component: BridalPage,
});

function BridalPage() {
  return (
    <>
      <BridalHero />
      <BridalPackages />
      <PreBridalSection />
      <BridalGallery />
      <FinalCTA />
    </>
  );
}
