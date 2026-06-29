import { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { INSTAGRAM_POSTS, SITE } from "@/lib/constants";

export function InstagramSection() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ig-cell", {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "power3.out",
        stagger: { amount: 0.6, from: "start" },
        scrollTrigger: { trigger: ".ig-grid", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 md:py-32 bg-bg-primary">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 text-center">
        <FaInstagram className="mx-auto text-gold mb-6" size={28} />
        <SectionEyebrow>Follow Our Story</SectionEyebrow>
        <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
          <em className="font-accent italic text-gold">@orvellasalon</em>
        </h2>
        <p className="mt-6 text-text-secondary max-w-xl mx-auto">
          Step inside our world — real clients, real results, real artistry.
        </p>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-7 py-3 border border-gold text-gold text-[0.7rem] tracking-[0.3em] uppercase hover:bg-gold hover:text-bg-primary transition"
        >
          Follow on Instagram
        </a>
      </div>

      <div className="ig-grid mt-16 mx-auto max-w-[1500px] px-6 md:px-12 grid grid-cols-3 md:grid-cols-4 auto-rows-[18vw] md:auto-rows-[12vw] gap-1.5">
        {INSTAGRAM_POSTS.map((p, i) => (
          <a
            key={i}
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className={`ig-cell relative overflow-hidden group ${p.span}`}
          >
            <img src={p.image} alt="Instagram" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors grid place-items-center">
              <FaInstagram className="text-white opacity-0 group-hover:opacity-100 transition" size={24} />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20">
        <MarqueeStrip text="✦ Follow Us ✦ @orvellasalon ✦ New Delhi ✦ Luxury Salon ✦ Book Now" />
      </div>
    </section>
  );
}
