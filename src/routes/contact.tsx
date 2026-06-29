import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { BookingForm } from "@/components/contact/BookingForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/media";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Orvella Salon" },
      { name: "description", content: "Book your appointment at Orvella Salon, Lajpat Nagar II, New Delhi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let's Create{" "}
            <em className="font-accent italic text-gold">Something Beautiful</em>
          </>
        }
        backgroundImage={MEDIA.salonNails}
        height="80svh"
      />

      <section className="bg-bg-primary py-24 md:py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1500px] grid lg:grid-cols-2 gap-16">
          <div>
            <SectionEyebrow>Book an Appointment</SectionEyebrow>
            <h2 className="heading-display mt-6 mb-10 text-text-primary text-3xl md:text-5xl">
              Reserve your <em className="font-accent italic text-gold">seat</em>.
            </h2>
            <BookingForm />
          </div>
          <div>
            <SectionEyebrow>Visit Us</SectionEyebrow>
            <h2 className="heading-display mt-6 mb-10 text-text-primary text-3xl md:text-5xl">
              The <em className="font-accent italic text-gold">atelier</em>.
            </h2>
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
