import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function GoldDivider({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "power3.out",
        duration: 1.1,
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className={`mx-auto max-w-[1500px] px-6 md:px-12 ${className ?? ""}`}>
      <div
        ref={ref}
        className="h-px w-full origin-left"
        style={{ background: "linear-gradient(90deg, var(--accent-gold-muted), transparent)" }}
      />
    </div>
  );
}
