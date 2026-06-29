import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { QuoteBreak } from "@/components/home/QuoteBreak";
import { Transformations } from "@/components/home/Transformations";
import { InstagramSection } from "@/components/home/InstagramSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar" },
      { name: "description", content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II." },
      { property: "og:title", content: "Orvella Salon — Luxury Hair, Skin & Beauty" },
      { property: "og:description", content: "Precision. Creativity. Luxury. Every visit, an experience." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <ServicesPreview />
      <QuoteBreak />
      <Transformations />
      <InstagramSection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
