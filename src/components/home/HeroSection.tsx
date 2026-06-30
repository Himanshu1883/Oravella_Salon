import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "@/lib/gsap";
import { MEDIA } from "@/lib/media";

export function HeroSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power4.out" } });
      tl.from(".hero-video", { scale: 1.2, duration: 2.2, ease: "power2.out" }, 0)
        .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 }, 0.4)
        .from(".hero-line", { yPercent: 110, opacity: 0, stagger: 0.12, duration: 1.2 }, 0.5)
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, 1.1)
        .fromTo(
          ".hero-actions .hero-btn",
          { y: 24 },
          {
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            clearProps: "transform",
          },
          1.3,
        )
        .from(".hero-scroll", { opacity: 0, duration: 0.8 }, 1.6);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[100dvh] min-h-[640px] w-full overflow-hidden bg-bg-primary">
      <video
        className="hero-video absolute inset-0 h-full w-full scale-105 object-cover object-[62%_center] md:object-[58%_center]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={MEDIA.salonChandelier}
        src={MEDIA.heroVideo}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.78) 38%, rgba(6,6,6,0.35) 58%, rgba(6,6,6,0.12) 72%, rgba(6,6,6,0.4) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,6,6,0.35) 0%, transparent 40%, rgba(6,6,6,0.55) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[100dvh] w-full items-end pb-10 pt-24 sm:items-center sm:pb-0 sm:pt-20">
        <div className="mx-auto flex w-full max-w-[1500px] px-6 md:px-12 lg:px-16">
          <div className="hero-content pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <p className="hero-eyebrow hero-eyebrow-label mb-5 md:mb-7">
              Where luxury meets beauty
            </p>

            <h1 className="hero-title">
              <span className="block overflow-hidden">
                <span className="hero-line hero-title-line1">The art of</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line hero-title-line2">
                  <em className="text-white">Timeless</em>{" "}
                  <em className="hero-title-script">Beauty</em>
                </span>
              </span>
            </h1>

            <p className="hero-sub hero-body">
              Bespoke hair, skin, makeup and aesthetic experiences crafted by
              award-winning artists in an atmosphere of elegance.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="hero-btn hero-btn--solid">
                Book your experience
              </Link>
              <Link to="/services" className="hero-btn hero-btn--outline">
                Luxury consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 md:right-10 md:flex">
        <span
          className="text-[0.58rem] uppercase tracking-[0.38em] text-white/40"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll to explore
        </span>
        <span className="h-20 w-px bg-gradient-to-b from-white/45 to-transparent" />
      </div>
    </section>
  );
}
