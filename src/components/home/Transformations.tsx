import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TRANSFORMATIONS } from "@/lib/constants";
import type { Transformation } from "@/types";

function BeforeAfterSlider({ before, after, label }: Transformation) {
  const container = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = container.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => dragging.current && setFromClientX(e.clientX);
    const onTouch = (e: TouchEvent) =>
      dragging.current && e.touches[0] && setFromClientX(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", stop);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={container}
      className="ba-card relative select-none overflow-hidden"
      style={{ aspectRatio: "3 / 4", cursor: "ew-resize" }}
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        if (e.touches[0]) setFromClientX(e.touches[0].clientX);
      }}
    >
      <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <img
        src={after}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      />
      <span className="absolute top-4 left-4 eyebrow text-white/80 text-[0.6rem]">Before</span>
      <span className="absolute top-4 right-4 eyebrow text-gold text-[0.6rem]">After</span>
      <span className="absolute bottom-4 left-4 font-display italic text-white text-lg">{label}</span>
      <div
        className="absolute top-0 bottom-0 w-px bg-gold pointer-events-none"
        style={{ left: `${value}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-gold bg-bg-primary/80 text-gold text-xs">
          ⟷
        </div>
      </div>
    </div>
  );
}

export function Transformations() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.from(".ba-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".ba-grid", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 md:py-32 bg-bg-primary">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 text-center">
        <div className="inline-flex flex-col items-center">
          <SectionEyebrow>Real Results</SectionEyebrow>
        </div>
        <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
          The <em className="font-accent italic text-gold">Orvella</em> Transformation
        </h2>
        <p className="mt-6 text-text-secondary max-w-xl mx-auto">
          Drag to reveal — real before &amp; after moments from our chairs.
        </p>
      </div>

      <div className="ba-grid mt-16 mx-auto max-w-[1500px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRANSFORMATIONS.map((t, i) => (
          <BeforeAfterSlider key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
