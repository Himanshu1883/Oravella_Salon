import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesList } from "@/components/services/ServicesList";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MEDIA } from "@/lib/media";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Orvella Salon" },
      { name: "description", content: "Hair, colour, keratin, skincare, makeup, and nail services at Orvella Salon, Lajpat Nagar." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Every Service, An{" "}
            <em className="font-accent italic text-gold">Experience</em>
          </>
        }
        subtitle="Luxury beauty & grooming by expert professionals."
        backgroundImage={MEDIA.salonChandelier}
      />
      <ServicesList />
      <FinalCTA />
    </>
  );
}
