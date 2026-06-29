import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { MissionStatement } from "@/components/about/MissionStatement";
import { BrandStory } from "@/components/about/BrandStory";
import { ValuesSection } from "@/components/about/ValuesSection";
import { TeamSection } from "@/components/about/TeamSection";
import { StatsBar } from "@/components/about/StatsBar";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MEDIA } from "@/lib/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Orvella Salon" },
      { name: "description", content: "Our story, our philosophy, and the team behind Orvella Salon." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Crafted with{" "}
            <em className="font-accent italic text-gold">Passion</em>
          </>
        }
        backgroundImage={MEDIA.salonLounge2}
      />
      <MissionStatement />
      <BrandStory />
      <ValuesSection />
      <TeamSection />
      <StatsBar />
      <FinalCTA />
    </>
  );
}
