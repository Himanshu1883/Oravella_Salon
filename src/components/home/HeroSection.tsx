import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "@/lib/gsap";
import heroVideo from "@/assets/hero-reel.mp4.asset.json";
import poster from "@/assets/salon-chandelier.jpg.asset.json";

export function HeroSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power4.out" } });
      tl.from(".hero-video", { scale: 1.2, duration: 2.2, ease: "power2.out" }, 0)
        .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 }, 0.4)
        .from(".hero-line", { yPercent: 110, opacity: 0, stagger: 0.12, duration: 1.2 }, 0.5)
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, 1.1)
        .from(".hero-cta > *", { y: 20, opacity: 0, stagger: 0.1, duration: 0.7 }, 1.3)
        .from(".hero-scroll", { opacity: 0, duration: 0.8 }, 1.6);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen min-h-[640px] w-full overflow-hidden bg-bg-primary">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover scale-105"
        autoPlay muted loop playsInline preload="metadata"
        poster={poster.url}
        src={heroVideo.url}
      />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.25) 35%, rgba(8,8,8,0.75) 75%, rgba(8,8,8,0.95) 100%)"
      }} />

      {/* Side text */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[0.65rem] tracking-[0.4em] uppercase text-white/40">
        Luxury · Hair · Skin · Beauty · Bridal
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-28 max-w-[1500px] mx-auto">
        <p className="hero-eyebrow eyebrow text-white/80 mb-6">Est. Lajpat Nagar, New Delhi</p>
        <h1 className="heading-display text-white" style={{ fontSize: "clamp(3.2rem, 10vw, 11rem)", lineHeight: 0.92 }}>
          <span className="block overflow-hidden"><span className="hero-line inline-block">Where</span></span>
          <span className="block overflow-hidden"><span className="hero-line inline-block italic text-gold font-accent">Beauty</span></span>
          <span className="block overflow-hidden"><span className="hero-line inline-block">Becomes Art</span></span>
        </h1>
        <p className="hero-sub mt-8 max-w-md text-white/70 text-base md:text-lg leading-relaxed">
          Precision. Creativity. Luxury. Every visit, an experience.
        </p>
        <div className="hero-cta mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-bg-primary text-[0.72rem] tracking-[0.3em] uppercase hover:bg-gold-muted transition"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 border border-white/40 text-white text-[0.72rem] tracking-[0.3em] uppercase hover:bg-white hover:text-bg-primary transition"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 text-white/50 text-[0.65rem] tracking-[0.3em] uppercase">
        <span>Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
