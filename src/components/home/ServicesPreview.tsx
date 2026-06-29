import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  const wrapper = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;
    const ctx = gsap.context(() => {
      const total = () => track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -total(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top top",
          end: () => "+=" + total(),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 flex items-end justify-between gap-8 mb-16">
        <div>
          <SectionEyebrow>Our Craft</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl lg:text-7xl max-w-2xl">
            A complete <em className="font-accent text-gold not-italic-keep italic">edit</em> of luxury services.
          </h2>
        </div>
        <Link to="/services" className="hidden md:inline-flex eyebrow gold-underline text-gold whitespace-nowrap">
          View All →
        </Link>
      </div>

      <div ref={wrapper} className="overflow-hidden">
        <div
          ref={track}
          className="flex gap-6 lg:gap-8 px-6 md:px-12 lg:px-0 lg:pl-[6vw]"
        >
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className="relative shrink-0 overflow-hidden group"
              style={{ width: "min(85vw, 540px)", height: "min(80vh, 680px)" }}
            >
              <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
              <div className="absolute top-6 left-6 font-display text-7xl text-white/20 leading-none">
                0{i + 1}
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="heading-display text-white text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 text-white/70 text-sm max-w-xs">{s.short}</p>
                <Link to="/services" className="mt-6 inline-flex eyebrow text-gold gold-underline">
                  Explore →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
