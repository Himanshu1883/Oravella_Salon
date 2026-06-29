import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import salonImg from "@/assets/salon-lounge.jpg.asset.json";

export function AboutTeaser() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      const words = root.current!.querySelectorAll<HTMLSpanElement>(".reveal-word");
      gsap.fromTo(
        words,
        { opacity: 0.1, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: { trigger: ".reveal-heading", start: "top 80%", end: "bottom 60%", scrub: 0.5 },
        }
      );
      // Counter
      const counter = root.current!.querySelector<HTMLSpanElement>(".counter");
      if (counter) {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: 500,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: counter, start: "top 85%" },
          onUpdate: () => { counter.textContent = Math.round(obj.v).toString(); },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const heading = "Beauty is not about perfection — it's about intention.";
  const words = heading.split(" ");

  return (
    <section ref={root} className="relative py-32 md:py-48 px-6 md:px-12 bg-bg-primary">
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
          <img
            src={salonImg.url}
            alt="Inside Orvella Salon"
            className="about-img absolute inset-0 w-full h-[115%] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none" style={{
            boxShadow: "inset 0 0 0 8px var(--bg-primary), inset 0 0 0 9px var(--accent-gold-muted)"
          }} />
          <div className="absolute bottom-6 right-6 bg-bg-primary/90 backdrop-blur border border-gold/40 px-6 py-4 text-right">
            <div className="font-display text-4xl text-gold leading-none"><span className="counter">0</span>+</div>
            <div className="eyebrow mt-2">Happy Clients</div>
          </div>
        </div>

        <div>
          <SectionEyebrow>Our Philosophy</SectionEyebrow>
          <h2 className="reveal-heading heading-display mt-6 text-text-primary text-3xl md:text-5xl lg:text-6xl leading-tight">
            {words.map((w, i) => (
              <span key={i} className="reveal-word inline-block mr-[0.25em]">
                {w === "intention." ? <em className="font-accent text-gold not-italic-keep italic">{w}</em> : w}
              </span>
            ))}
          </h2>
          <p className="mt-8 text-text-secondary leading-relaxed max-w-lg">
            At Orvella, beauty is never accidental. Every cut, every colour, every treatment is the
            result of careful listening and confident craft.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">
            We built this space — in the heart of Lajpat Nagar II — for those who notice the
            details. The light. The textures. The quiet.
          </p>
          <Link to="/about" className="inline-flex items-center gap-3 mt-10 eyebrow gold-underline text-gold">
            Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
