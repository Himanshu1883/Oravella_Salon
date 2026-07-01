import { useEffect, useRef, useState, useCallback } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TRANSFORMATIONS } from "@/lib/constants";
import type { Transformation } from "@/types";

const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);

function animateValue(
  from: number,
  to: number,
  durationMs: number,
  ease: (t: number) => number,
  onUpdate: (v: number) => void,
  isCancelled: () => boolean,
): Promise<void> {
  return new Promise((resolve) => {
    const start = performance.now();

    const tick = (now: number) => {
      if (isCancelled()) {
        resolve();
        return;
      }
      const t = Math.min(1, (now - start) / durationMs);
      onUpdate(from + (to - from) * ease(t));
      if (t < 1) requestAnimationFrame(tick);
      else resolve();
    };

    requestAnimationFrame(tick);
  });
}

function delay(ms: number, isCancelled: () => boolean): Promise<void> {
  return new Promise((resolve) => {
    const id = window.setTimeout(() => {
      if (!isCancelled()) resolve();
    }, ms);
    if (isCancelled()) {
      clearTimeout(id);
      resolve();
    }
  });
}

function BeforeAfterSlider({
  before,
  after,
  label,
  index = 0,
  inView = false,
}: Transformation & { index?: number; inView?: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const valueRef = useRef(50);
  const [showHint, setShowHint] = useState(true);
  const [isDemoing, setIsDemoing] = useState(false);
  const dragging = useRef(false);
  const userTouched = useRef(false);

  const applySplit = useCallback((pct: number) => {
    const clamped = Math.max(0, Math.min(100, pct));
    valueRef.current = clamped;
    const el = container.current;
    if (!el) return;
    el.style.setProperty("--split", String(clamped));
  }, []);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const el = container.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      applySplit(((clientX - rect.left) / rect.width) * 100);
    },
    [applySplit],
  );

  const stopDemo = useCallback(() => {
    if (userTouched.current) return;
    userTouched.current = true;
    container.current?.classList.remove("is-active");
    setIsDemoing(false);
    setShowHint(false);
  }, []);

  useEffect(() => {
    applySplit(50);
  }, [applySplit]);

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

    let cancelled = false;
    const isCancelled = () => cancelled || userTouched.current;

    const runDemo = async () => {
      await delay(index * 220, isCancelled);
      if (isCancelled() || userTouched.current) return;

      el.classList.add("is-active");
      setIsDemoing(true);
      setShowHint(false);

      for (let rep = 0; rep < 2; rep++) {
        await animateValue(28, 72, 2200, easeInOut, applySplit, isCancelled);
        if (isCancelled() || userTouched.current) return;
        await animateValue(72, 28, 2200, easeInOut, applySplit, isCancelled);
        if (isCancelled() || userTouched.current) return;
      }

      await animateValue(valueRef.current, 50, 550, easeOut, applySplit, isCancelled);
      if (isCancelled() || userTouched.current) return;

      el.classList.remove("is-active");
      setIsDemoing(false);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void runDemo();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      el.classList.remove("is-active");
    };
  }, [index, applySplit]);

  const beginDrag = (clientX: number) => {
    stopDemo();
    container.current?.classList.add("is-active");
    dragging.current = true;
    setFromClientX(clientX);
  };

  const endDrag = () => {
    dragging.current = false;
    if (!isDemoing) container.current?.classList.remove("is-active");
  };

  const eager = index === 0;

  return (
    <div
      ref={container}
      className={`ba-card group relative select-none overflow-hidden rounded-sm${inView ? " ba-card--in-view" : ""}`}
      style={{
        aspectRatio: "3 / 4",
        cursor: "ew-resize",
        transitionDelay: inView ? `${index * 0.12}s` : undefined,
      }}
      onMouseDown={(e) => beginDrag(e.clientX)}
      onMouseUp={endDrag}
      onTouchStart={(e) => {
        if (e.touches[0]) beginDrag(e.touches[0].clientX);
      }}
      onTouchEnd={endDrag}
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
      <img
        src={after}
        alt={`${label} — after`}
        className="ba-after-layer absolute inset-0 h-full w-full object-cover"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={index <= 1 ? "high" : "auto"}
        decoding="async"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" />

      <span className="ba-pill ba-pill--before absolute top-4 left-4 z-10">Before</span>
      <span className="ba-pill ba-pill--after absolute top-4 right-4 z-10">After</span>

      <span className="absolute bottom-4 left-4 z-10 font-display text-lg italic text-white md:text-xl">
        {label}
      </span>

      <div className="ba-handle-track pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 bg-gold">
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

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
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
          <BeforeAfterSlider key={i} index={i} inView={gridInView} {...t} />
        ))}
      </div>
    </section>
  );
}
