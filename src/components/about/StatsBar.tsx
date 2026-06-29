import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STATS } from "@/lib/constants";

export function StatsBar() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      const nums = root.current!.querySelectorAll<HTMLSpanElement>(".stat-num");
      nums.forEach((el) => {
        const target = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          snap: { v: 1 },
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-bg-secondary py-20 md:py-28 px-6 md:px-12">
      <div className="mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-y-12">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`text-center ${i !== 0 ? "md:border-l md:border-border-subtle" : ""}`}
          >
            <div className="font-display text-5xl md:text-6xl text-gold">
              <span className="stat-num" data-value={s.value}>
                0
              </span>
              {s.suffix}
            </div>
            <div className="eyebrow mt-4 text-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
