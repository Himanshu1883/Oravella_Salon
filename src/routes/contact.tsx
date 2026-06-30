import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState, FormEvent } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, WHATSAPP_URL, waLink } from "@/lib/constants";
import { CtaButton } from "@/components/ui/CtaButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Orvella Salon" },
      { name: "description", content: "Book your appointment at Orvella Salon, Lajpat Nagar II, New Delhi." },
      { property: "og:title", content: "Contact — Orvella Salon" },
      { property: "og:description", content: "Let's create something beautiful. Reach Orvella by phone, WhatsApp, or email." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const root = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ct-hero-line", {
        yPercent: 110, opacity: 0, stagger: 0.12, duration: 1.2, ease: "power4.out", delay: 0.3,
      });
      gsap.from(".ct-hero-sub", { opacity: 0, y: 18, duration: 0.9, delay: 0.9, ease: "power3.out" });

      gsap.from(".ct-form > *", {
        y: 30, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-form", start: "top 80%" },
      });

      gsap.from(".ct-info-block", {
        x: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-info", start: "top 80%" },
      });

      gsap.from(".ct-map", {
        scale: 1.08, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-map", start: "top 80%" },
      });

      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "";
    const phone = fd.get("phone") || "";
    const service = fd.get("service") || "";
    const date = fd.get("date") || "";
    const message = fd.get("message") || "";
    const text = `Hello Orvella, I'd like to book an appointment.%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0APreferred date: ${date}%0AMessage: ${message}`;
    window.open(`https://wa.me/${SITE.whatsappRaw}?text=${text}`, "_blank");
    setSent(true);
  }

  const HOURS = [
    { day: "Monday — Friday", time: "10:00 — 20:00" },
    { day: "Saturday", time: "10:00 — 21:00" },
    { day: "Sunday", time: "11:00 — 19:00" },
  ];

  return (
    <div ref={root} className="bg-bg-primary">
      {/* HERO */}
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionEyebrow>Get In Touch</SectionEyebrow>
          <h1 className="heading-display mt-8 text-text-primary" style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}>
            <span className="block overflow-hidden"><span className="ct-hero-line inline-block">Let's create</span></span>
            <span className="block overflow-hidden"><span className="ct-hero-line inline-block">something</span></span>
            <span className="block overflow-hidden"><span className="ct-hero-line inline-block italic font-accent text-gold">beautiful.</span></span>
          </h1>
          <p className="ct-hero-sub mt-8 max-w-lg text-text-secondary text-lg leading-relaxed">
            Reach us by phone, WhatsApp, or the form below — and our team will personally
            confirm your appointment.
          </p>
        </div>
      </section>

      <MarqueeStrip text="Book Now · WhatsApp Us · Visit Lajpat Nagar · " />

      {/* FORM + INFO */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* FORM */}
          <div className="lg:col-span-7">
            <SectionEyebrow>Send a Note</SectionEyebrow>
            <h2 className="heading-display mt-6 text-text-primary text-3xl md:text-5xl">
              Book your <em className="font-accent italic text-gold">appointment</em>.
            </h2>

            <form onSubmit={handleSubmit} className="ct-form mt-10 grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Your name" required />
              <Field name="phone" label="Phone" type="tel" required />
              <Field name="service" label="Service of interest" placeholder="Hair, colour, bridal…" wide />
              <Field name="date" label="Preferred date" type="date" />
              <div className="sm:col-span-2">
                <label className="eyebrow block mb-3">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border border-border-subtle px-4 py-3 text-text-primary focus:border-gold outline-none transition-colors resize-none"
                />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                <CtaButton type="submit" variant="whatsapp">
                  Send via WhatsApp <FaWhatsapp size={16} />
                </CtaButton>
                {sent && (
                  <span className="eyebrow text-gold">Opening WhatsApp…</span>
                )}
              </div>
            </form>
          </div>

          {/* INFO */}
          <aside className="ct-info lg:col-span-5 lg:border-l lg:border-border-subtle lg:pl-12">
            <SectionEyebrow>Visit · Call · Write</SectionEyebrow>

            <div className="mt-10 space-y-8">
              <InfoBlock icon={<MapPin size={18} />} label="Atelier">
                <p>{SITE.address}</p>
              </InfoBlock>
              <InfoBlock icon={<Phone size={18} />} label="Phone">
                <a href={`tel:${SITE.phoneRaw}`} className="gold-underline hover:text-gold transition">{SITE.phone}</a>
              </InfoBlock>
              <InfoBlock icon={<FaWhatsapp size={18} />} label="WhatsApp">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="gold-underline hover:text-gold transition">{SITE.whatsapp}</a>
              </InfoBlock>
              <InfoBlock icon={<Mail size={18} />} label="Email">
                <a href={`mailto:${SITE.email}`} className="gold-underline hover:text-gold transition break-all">{SITE.email}</a>
              </InfoBlock>
              <InfoBlock icon={<FaInstagram size={18} />} label="Instagram">
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="gold-underline hover:text-gold transition">{SITE.instagramHandle}</a>
              </InfoBlock>
              <InfoBlock icon={<Clock size={18} />} label="Opening hours">
                <ul className="space-y-1.5">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 text-text-secondary">
                      <span>{h.day}</span>
                      <span className="text-text-primary">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoBlock>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton
                href={waLink("Hi Orvella, I'd like to book an appointment.")}
                variant="whatsapp"
                compact
              >
                <FaWhatsapp size={14} /> WhatsApp Now
              </CtaButton>
              <CtaButton href={`tel:${SITE.phoneRaw}`} variant="ghost" compact>
                <Phone size={14} /> Call
              </CtaButton>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="ct-map relative overflow-hidden border border-border-subtle" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              title="Orvella Salon location"
              src="https://www.google.com/maps?q=Lajpat+Nagar+II,+New+Delhi&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[60%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  name, label, type = "text", placeholder, required, wide,
}: {
  name: string; label: string; type?: string; placeholder?: string; required?: boolean; wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label className="eyebrow block mb-3">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border border-border-subtle px-4 py-3 text-text-primary focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}

function InfoBlock({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="ct-info-block flex gap-5">
      <span className="w-10 h-10 shrink-0 grid place-items-center border border-gold/50 text-gold rounded-full">
        {icon}
      </span>
      <div className="flex-1">
        <p className="eyebrow mb-2">{label}</p>
        <div className="text-text-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
