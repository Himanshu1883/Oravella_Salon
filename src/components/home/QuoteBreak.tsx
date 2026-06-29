import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import bg from "@/assets/salon-chandelier.jpg.asset.json";

export function QuoteBreak() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".quote-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      const words = root.current!.querySelectorAll<HTMLSpanElement>(".q-word");
      gsap.fromTo(words, { opacity: 0.08 }, {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 50%", scrub: 0.6 },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const q = "Beauty is the illumination of your soul.";
  return (
    <section ref={root} className="relative overflow-hidden" style={{ height: "85vh" }}>
      <img src={bg.url} alt="" className="quote-bg absolute inset-0 w-full h-[120%] object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 h-full grid place-items-center px-6">
        <div className="max-w-5xl text-center">
          <blockquote className="font-display italic text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 5.5rem)", lineHeight: 1.15 }}>
            {q.split(" ").map((w, i) => (
              <span key={i} className="q-word inline-block mr-[0.25em]">{w}</span>
            ))}
          </blockquote>
          <p className="eyebrow mt-10 text-white/60">— Orvella Salon</p>
        </div>
      </div>
    </section>
  );
}
