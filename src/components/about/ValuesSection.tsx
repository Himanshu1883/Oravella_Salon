import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { VALUES } from "@/lib/constants";

export function ValuesSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.from(".value-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".values-grid", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-bg-secondary py-24 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <SectionEyebrow>What We Stand For</SectionEyebrow>
          </div>
        </div>
        <div className="values-grid mt-16 grid md:grid-cols-3 gap-10">
          {VALUES.map((v) => (
            <div key={v.number} className="value-card relative overflow-hidden p-8 border border-border-subtle bg-bg-primary/40">
              <span
                className="absolute -top-6 right-2 font-display text-[8rem] leading-none text-gold/10 pointer-events-none select-none"
                aria-hidden
              >
                {v.number}
              </span>
              <div className="relative z-10">
                <h3 className="heading-display text-text-primary text-3xl">{v.title}</h3>
                <p className="mt-5 text-text-secondary leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
