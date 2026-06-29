import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function MissionStatement() {
  const root = useRef<HTMLDivElement>(null);
  const quote =
    "Orvella was born from a single belief — that every person deserves to feel extraordinary.";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      const words = root.current!.querySelectorAll<HTMLSpanElement>(".mission-word");
      gsap.fromTo(
        words,
        { opacity: 0.08 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-bg-primary py-32 md:py-48 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <p
          className="heading-display text-text-primary"
          style={{ fontSize: "clamp(2rem, 4vw, 5rem)", lineHeight: 1.2, fontWeight: 300 }}
        >
          {quote.split(" ").map((w, i) => (
            <span key={i} className="mission-word inline-block mr-[0.25em]">
              {w === "extraordinary." ? (
                <em className="font-accent italic text-gold">{w}</em>
              ) : (
                w
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
