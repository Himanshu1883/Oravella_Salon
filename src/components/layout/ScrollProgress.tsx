import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.transform = `scaleX(${pct})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left pointer-events-none">
      <div
        ref={ref}
        className="h-full w-full origin-left"
        style={{
          background: "linear-gradient(90deg, var(--accent-gold-muted), var(--accent-gold))",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}
