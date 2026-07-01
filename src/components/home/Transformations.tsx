import { useCallback, useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TRANSFORMATIONS } from "@/lib/constants";
import type { Transformation } from "@/types";

function freezeSplit(el: HTMLElement) {
  const split = getComputedStyle(el).getPropertyValue("--split").trim() || "50";
  el.style.setProperty("--split", split);
  el.classList.remove("ba-card--demo");
}

async function decodeCardImages(el: HTMLElement) {
  const imgs = el.querySelectorAll<HTMLImageElement>("img");
  await Promise.all(
    [...imgs].map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) resolve();
          else {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          }
        }),
    ),
  );
  await Promise.all([...imgs].map((img) => img.decode?.().catch(() => undefined) ?? Promise.resolve()));
}

function BeforeAfterSlider({
  before,
  after,
  label,
  index = 0,
  inView = false,
  shouldDemo = false,
  onDemoEnd,
}: Transformation & {
  index?: number;
  inView?: boolean;
  shouldDemo?: boolean;
  onDemoEnd?: () => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const valueRef = useRef(50);
  const [showHint, setShowHint] = useState(true);
  const [isDemoing, setIsDemoing] = useState(false);
  const dragging = useRef(false);
  const userTouched = useRef(false);
  const dragRaf = useRef(0);
  const pendingX = useRef(0);

  const applySplit = useCallback((pct: number) => {
    const clamped = Math.max(0, Math.min(100, pct));
    valueRef.current = clamped;
    container.current?.style.setProperty("--split", String(clamped));
  }, []);

  const flushDrag = useCallback(() => {
    dragRaf.current = 0;
    const el = container.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    applySplit(((pendingX.current - rect.left) / rect.width) * 100);
  }, [applySplit]);

  const queueDrag = useCallback(
    (clientX: number) => {
      pendingX.current = clientX;
      if (!dragRaf.current) dragRaf.current = requestAnimationFrame(flushDrag);
    },
    [flushDrag],
  );

  const stopDemo = useCallback(() => {
    if (userTouched.current) return;
    userTouched.current = true;
    const el = container.current;
    if (el) freezeSplit(el);
    setIsDemoing(false);
    setShowHint(false);
  }, []);

  useEffect(() => {
    applySplit(50);
  }, [applySplit]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => dragging.current && queueDrag(e.clientX);
    const onTouch = (e: TouchEvent) =>
      dragging.current && e.touches[0] && queueDrag(e.touches[0].clientX);
    const stop = () => {
      dragging.current = false;
      container.current?.classList.remove("is-dragging");
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", stop);
      if (dragRaf.current) cancelAnimationFrame(dragRaf.current);
    };
  }, [queueDrag]);

  useEffect(() => {
    if (!shouldDemo) return;
    const el = container.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setShowHint(false);
      onDemoEnd?.();
      return;
    }

    let cancelled = false;

    const onEnd = (e: AnimationEvent) => {
      if (e.animationName !== "ba-auto-reveal") return;
      el.classList.remove("ba-card--demo", "is-active");
      setIsDemoing(false);
      onDemoEnd?.();
    };

    const start = async () => {
      await decodeCardImages(el);
      if (cancelled || userTouched.current) {
        onDemoEnd?.();
        return;
      }

      el.classList.add("is-active");
      el.classList.add("ba-card--demo");
      setIsDemoing(true);
      setShowHint(false);
    };

    el.addEventListener("animationend", onEnd);
    void start();

    return () => {
      cancelled = true;
      el.removeEventListener("animationend", onEnd);
      el.classList.remove("ba-card--demo", "is-active");
    };
  }, [shouldDemo, onDemoEnd]);

  const beginDrag = (clientX: number) => {
    stopDemo();
    container.current?.classList.add("is-dragging", "is-active");
    dragging.current = true;
    queueDrag(clientX);
  };

  const eager = index === 0;

  return (
    <div
      ref={container}
      className={`ba-card group relative select-none overflow-hidden rounded-sm${inView ? " ba-card--in-view" : ""}`}
      style={{
        aspectRatio: "3 / 4",
        cursor: "ew-resize",
        transitionDelay: inView ? `${index * 0.1}s` : undefined,
        ["--ba-index" as string]: index,
      }}
      onMouseDown={(e) => beginDrag(e.clientX)}
      onTouchStart={(e) => {
        if (e.touches[0]) beginDrag(e.touches[0].clientX);
      }}
    >
      <img
        src={before}
        alt={`${label} — before`}
        className="absolute inset-0 h-full w-full object-cover"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        draggable={false}
      />

      <div className="ba-reveal absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="ba-reveal-scaler h-full w-full">
          <img
            src={after}
            alt={`${label} — after`}
            className="ba-after-layer block h-full w-full object-cover"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={index <= 1 ? "high" : "auto"}
            decoding="async"
            draggable={false}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" />

      <span className="ba-pill ba-pill--before absolute top-4 left-4 z-10">Before</span>
      <span className="ba-pill ba-pill--after absolute top-4 right-4 z-10">After</span>

      <span className="absolute bottom-4 left-4 z-10 font-display text-lg italic text-white md:text-xl">
        {label}
      </span>

      <div className="ba-handle-track pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 -translate-x-1/2 bg-gold">
        <div
          className={`ba-handle absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-bg-primary/90 text-gold ${isDemoing || showHint ? "ba-handle--pulse" : ""}`}
        >
          <span className="text-[0.65rem] font-semibold tracking-wider">⟷</span>
        </div>
      </div>

      {showHint && (
        <div className="ba-hint pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/40">
          <div className="px-6 text-center">
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
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridInView, setGridInView] = useState(false);
  const [demoIndex, setDemoIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridInView(true);
          setDemoIndex(0);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleDemoEnd = useCallback(() => {
    setDemoIndex((current) => {
      if (current === null || current < 0) return current;
      const next = current + 1;
      return next < TRANSFORMATIONS.length ? next : -1;
    });
  }, []);

  return (
    <section className="bg-bg-primary py-24 md:py-32">
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

      <div
        ref={gridRef}
        className="ba-grid mx-auto mt-14 grid max-w-[1500px] grid-cols-1 gap-6 px-6 md:mt-16 md:grid-cols-3 md:px-12"
      >
        {TRANSFORMATIONS.map((t, i) => (
          <BeforeAfterSlider
            key={i}
            index={i}
            inView={gridInView}
            shouldDemo={demoIndex === i}
            onDemoEnd={handleDemoEnd}
            {...t}
          />
        ))}
      </div>
    </section>
  );
}
