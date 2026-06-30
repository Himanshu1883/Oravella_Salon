import { FaWhatsapp } from "react-icons/fa";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CtaButton } from "@/components/ui/CtaButton";
import { WHATSAPP_URL } from "@/lib/constants";
import { MEDIA } from "@/lib/media";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <img src={MEDIA.salonExtra2} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
        <SectionEyebrow>Begin Your Journey</SectionEyebrow>
        <h2 className="heading-display mt-6 text-white text-4xl md:text-6xl lg:text-7xl">
          Book your <em className="font-accent italic text-gold">appointment</em> today.
        </h2>
        <p className="mt-8 text-white/70 max-w-xl mx-auto">
          Reserve your seat in our atelier. Our team will confirm your booking personally.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton to="/contact" onDark>
            Book Now
          </CtaButton>
          <CtaButton href={WHATSAPP_URL} variant="whatsapp" onDark>
            <FaWhatsapp size={16} /> WhatsApp Us
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
