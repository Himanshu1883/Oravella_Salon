import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TRANSFORMATIONS } from "@/lib/constants";
import type { Transformation } from "@/types";

function BeforeAfterSlider({
  before,
  after,
  label,
  index = 0,
}: Transformation & { index?: number }) {
  const container = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(50);
  const [showHint, setShowHint] = useState(true);
  const [isDemoing, setIsDemoing] = useState(false);
  const dragging = useRef(false);
  const userTouched = useRef(false);
  const demoTween = useRef<gsap.core.Tween | null>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = container.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.max(0, Math.min(100, pct)));
  }, []);

  const stopDemo = useCallback(() => {
    if (userTouched.current) return;
    userTouched.current = true;
    demoTween.current?.kill();
    setIsDemoing(false);
    setShowHint(false);
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

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setShowHint(false);
      return;
    }

    const obj = { v: 28 };
    const tween = gsap.to(obj, {
      v: 72,
      duration: 2.2,
      repeat: 2,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 0.22,
      paused: true,
      onStart: () => {
        setIsDemoing(true);
        setShowHint(false);
      },
      onUpdate: () => {
        if (!userTouched.current) setValue(obj.v);
      },
      onComplete: () => {
        if (userTouched.current) return;
        gsap.to(obj, {
          v: 50,
          duration: 0.55,
          ease: "power2.out",
          onUpdate: () => setValue(obj.v),
          onComplete: () => setIsDemoing(false),
        });
      },
    });

    demoTween.current = tween;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tween.play();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween.kill();
    };
  }, [index]);

  const beginDrag = (clientX: number) => {
    stopDemo();
    dragging.current = true;
    setFromClientX(clientX);
  };

  return (
    <div
      ref={container}
      className="ba-card group relative select-none overflow-hidden rounded-sm"
      style={{ aspectRatio: "3 / 4", cursor: "ew-resize" }}
      onMouseDown={(e) => beginDrag(e.clientX)}
      onTouchStart={(e) => {
        if (e.touches[0]) beginDrag(e.touches[0].clientX);
      }}
    >
      <img
        src={before}
        alt={`${label} — before`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <img
        src={after}
        alt={`${label} — after`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" />

      <span className="ba-pill ba-pill--before absolute top-4 left-4 z-10">Before</span>
      <span className="ba-pill ba-pill--after absolute top-4 right-4 z-10">After</span>

      <span className="absolute bottom-4 left-4 z-10 font-display text-lg italic text-white md:text-xl">
        {label}
      </span>

      <div
        className="pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 bg-gold"
        style={{ left: `${value}%` }}
      >
        <div
          className={`ba-handle absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-bg-primary/90 text-gold ${isDemoing || showHint ? "ba-handle--pulse" : ""}`}
        >
          <span className="text-[0.65rem] font-semibold tracking-wider">⟷</span>
        </div>
      </div>

      {showHint && (
        <div className="ba-hint pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/40">
          <div className="text-center px-6">
            <p className="eyebrow text-[0.62rem] text-white/85">Before &amp; After</p>
            <p className="mt-2 font-display text-xl italic text-white md:text-2xl">
              Slide to compare
            </p>
          </div>
        </div>
      )}
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
    <section ref={root} className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 text-center md:px-12">
        <div className="inline-flex flex-col items-center">
          <SectionEyebrow>Before &amp; After</SectionEyebrow>
        </div>
        <h2 className="heading-display mt-6 text-4xl text-text-primary md:text-6xl">
          See the <em className="font-accent italic text-gold">Difference</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-text-secondary">
          Each panel compares your look before and after treatment. Watch the reveal
          unfold — then drag to explore every result yourself.
        </p>
        <p className="ba-instruction mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-bg-surface/50 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-gold">
          <span aria-hidden="true">⟷</span>
          Slide to compare
        </p>
      </div>

      <div className="ba-grid mx-auto mt-14 grid max-w-[1500px] grid-cols-1 gap-6 px-6 md:mt-16 md:grid-cols-3 md:px-12">
        {TRANSFORMATIONS.map((t, i) => (
          <BeforeAfterSlider key={i} index={i} {...t} />
        ))}
      </div>
    </section>
  );
}
