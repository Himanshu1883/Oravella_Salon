import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MEDIA } from "@/lib/media";

const salonChandelier = { url: MEDIA.salonChandelier };
const salonLounge = { url: MEDIA.salonLounge };
const salonLounge2 = { url: MEDIA.salonLounge2 };
const salonNails = { url: MEDIA.salonNails };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Orvella Salon" },
      { name: "description", content: "Hair, colour, keratin, skincare, makeup, and nail services at Orvella Salon, Lajpat Nagar II." },
      { property: "og:title", content: "Services — Orvella Salon" },
      { property: "og:description", content: "Every service, an experience. Explore the complete Orvella menu." },
    ],
  }),
  component: ServicesPage,
});

type ServiceItem = { name: string; price: string };
type ServiceCategory = {
  id: string;
  title: string;
  tagline: string;
  copy: string;
  image: string;
  items: ServiceItem[];
};

const CATEGORIES: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair",
    tagline: "Precision cuts. Editorial styling.",
    copy: "Every cut begins with a quiet conversation. We listen, study the way your hair falls, and craft a shape that grows out beautifully.",
    image: salonChandelier.url,
    items: [
      { name: "Signature Haircut", price: "₹1,800" },
      { name: "Creative Director Cut", price: "₹3,200" },
      { name: "Blow Dry & Styling", price: "₹1,200" },
      { name: "Hair Spa Ritual", price: "₹2,400" },
      { name: "Scalp Detox Treatment", price: "₹1,800" },
    ],
  },
  {
    id: "colour",
    title: "Colour",
    tagline: "Light, dimension, intention.",
    copy: "From whisper-soft balayage to high-impact fashion tones, every formula is hand-mixed for your skin, your eyes, your story.",
    image: salonLounge2.url,
    items: [
      { name: "Global Colour", price: "₹3,800" },
      { name: "Root Touch-Up", price: "₹2,200" },
      { name: "Balayage / Ombré", price: "₹6,500" },
      { name: "Highlights — Full Head", price: "₹7,200" },
      { name: "Toner & Gloss", price: "₹2,000" },
    ],
  },
  {
    id: "keratin",
    title: "Keratin & Botox",
    tagline: "Restorative smoothing rituals.",
    copy: "Editorial-grade smoothing treatments that respect the integrity of your hair while delivering glass-like shine and effortless movement.",
    image: salonLounge.url,
    items: [
      { name: "Brazilian Keratin", price: "₹8,500" },
      { name: "Hair Botox", price: "₹6,500" },
      { name: "Cysteine Smoothing", price: "₹7,200" },
      { name: "Olaplex Stand-Alone", price: "₹2,500" },
    ],
  },
  {
    id: "skin",
    title: "Advanced Skincare",
    tagline: "Facials engineered for your skin.",
    copy: "Clinical-grade facials, hydrafacial protocols, and bespoke peels — every treatment begins with a consultation and a skin reading.",
    image: salonNails.url,
    items: [
      { name: "Signature Facial", price: "₹3,200" },
      { name: "HydraFacial Pro", price: "₹5,500" },
      { name: "Brightening Peel", price: "₹4,800" },
      { name: "Eye Lift Ritual", price: "₹1,800" },
    ],
  },
  {
    id: "makeup",
    title: "Makeup Artistry",
    tagline: "From soft glow to high editorial.",
    copy: "Whether it's a quiet dinner or the cover of your story, our artists translate your mood into a finish that photographs flawlessly.",
    image: salonChandelier.url,
    items: [
      { name: "Day / Soft Glam", price: "₹3,500" },
      { name: "Evening / Party", price: "₹5,500" },
      { name: "HD Airbrush", price: "₹7,500" },
      { name: "Editorial Makeup", price: "₹9,500" },
    ],
  },
  {
    id: "nails",
    title: "Nails & Hands",
    tagline: "Detailed. Considered. Lasting.",
    copy: "From a clean classic manicure to architectural nail-art, every set is finished with hand massage and warm towel ceremony.",
    image: salonNails.url,
    items: [
      { name: "Classic Manicure", price: "₹800" },
      { name: "Gel Manicure", price: "₹1,400" },
      { name: "Spa Pedicure", price: "₹1,200" },
      { name: "Nail Art — Per Nail", price: "₹150" },
    ],
  },
];

function ServicesPage() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".sv-hero-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(".sv-hero-sub", { opacity: 0, y: 20, duration: 0.9, delay: 0.9, ease: "power3.out" });

      // Category reveals
      gsap.utils.toArray<HTMLElement>(".sv-row").forEach((row) => {
        gsap.from(row.querySelectorAll(".sv-row-anim"), {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%" },
        });
        const img = row.querySelector(".sv-row-img");
        if (img) {
          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });

      // Pricing reveal
      gsap.utils.toArray<HTMLElement>(".sv-price-row").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          x: -20,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%" },
        });
      });

      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="bg-bg-primary">
      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 overflow-hidden">
        <img
          src={salonLounge2.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-bg-primary/85 to-bg-primary" />
        <div className="relative z-10 max-w-[1500px] mx-auto">
          <SectionEyebrow>The Atelier Menu</SectionEyebrow>
          <h1 className="heading-display mt-8 text-text-primary" style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}>
            <span className="block overflow-hidden"><span className="sv-hero-line inline-block">Every service,</span></span>
            <span className="block overflow-hidden"><span className="sv-hero-line inline-block italic font-accent text-gold">an experience.</span></span>
          </h1>
          <p className="sv-hero-sub mt-10 max-w-xl text-text-secondary text-lg leading-relaxed">
            A complete edit of hair, colour, skin, makeup, and nail services — each delivered
            with the same quiet precision and unhurried care.
          </p>
        </div>
      </section>

      <MarqueeStrip text="Hair · Colour · Keratin · Skincare · Makeup · Nails · Bridal · " />

      {/* CATEGORY ROWS */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-32 md:gap-48">
          {CATEGORIES.map((cat, i) => (
            <article
              key={cat.id}
              id={cat.id}
              className={`sv-row grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:col-span-6 [direction:ltr]">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="sv-row-img sv-row-anim absolute inset-0 w-full h-[115%] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 font-display text-6xl text-white/30 leading-none">
                    0{i + 1}
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 [direction:ltr]">
                <p className="sv-row-anim eyebrow">0{i + 1} · {cat.tagline}</p>
                <h2 className="sv-row-anim heading-display mt-5 text-text-primary text-4xl md:text-6xl">
                  {cat.title}
                </h2>
                <p className="sv-row-anim mt-6 text-text-secondary leading-relaxed max-w-lg">{cat.copy}</p>

                <ul className="sv-row-anim mt-10 divide-y divide-border-subtle border-t border-border-subtle">
                  {cat.items.map((it) => (
                    <li
                      key={it.name}
                      className="sv-price-row flex items-baseline justify-between gap-6 py-4"
                    >
                      <span className="text-text-primary text-base md:text-lg font-display">{it.name}</span>
                      <span className="flex-1 mx-4 border-b border-dotted border-border-subtle translate-y-[-4px]" />
                      <span className="text-gold tracking-widest text-sm">{it.price}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="sv-row-anim mt-10 inline-flex items-center px-7 py-3.5 border border-gold text-gold text-[0.7rem] tracking-[0.3em] uppercase hover:bg-gold hover:text-bg-primary transition"
                >
                  Book this service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
