import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WHATSAPP_URL } from "@/lib/constants";
import bg from "@/assets/salon-lounge2.jpg.asset.json";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <img src={bg.url} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
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
          <Link
            to="/contact"
            className="px-8 py-4 bg-gold text-bg-primary text-[0.72rem] tracking-[0.3em] uppercase hover:bg-gold-muted transition"
          >
            Book Now
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-white text-[0.72rem] tracking-[0.3em] uppercase transition hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <FaWhatsapp size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
