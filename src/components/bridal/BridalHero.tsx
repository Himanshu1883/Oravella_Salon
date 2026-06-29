import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { CtaButton } from "@/components/ui/CtaButton";
import { MEDIA } from "@/lib/media";

export function BridalHero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power2.out" } });
      tl.from(".bh-video", { scale: 1.2, duration: 2.4 }, 0)
        .from(".bh-eyebrow", { y: 20, opacity: 0, duration: 1 }, 0.4)
        .from(".bh-line", { yPercent: 110, opacity: 0, stagger: 0.15, duration: 1.5 }, 0.5)
        .from(".bh-sub", { y: 20, opacity: 0, duration: 1 }, 1.4)
        .from(".bh-cta", { y: 20, opacity: 0, duration: 0.9 }, 1.7);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen min-h-[640px] w-full overflow-hidden bg-bg-primary">
      <video
        className="bh-video absolute inset-0 h-full w-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={MEDIA.salonExtra1}
        src={MEDIA.bridalReel}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-28 max-w-[1500px] mx-auto">
        <p className="bh-eyebrow eyebrow text-white/80 mb-6">Bridal Studio</p>
        <h1 className="heading-display text-white" style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}>
          <span className="block overflow-hidden"><span className="bh-line inline-block">For Your</span></span>
          <span className="block overflow-hidden"><span className="bh-line inline-block italic text-gold font-accent">Most Beautiful</span></span>
          <span className="block overflow-hidden"><span className="bh-line inline-block">Chapter</span></span>
        </h1>
        <p className="bh-sub mt-8 max-w-md text-white/70 text-base md:text-lg">
          Every detail. Every moment. Perfectly yours.
        </p>
        <div className="bh-cta mt-10">
          <CtaButton to="/contact" variant="gold">
            Plan Your Bridal Look
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
