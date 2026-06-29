import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  height = "100vh",
}: PageHeroProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.to(".ph-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.2 });
      tl.from(".ph-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(".ph-title", { y: 60, opacity: 0, duration: 1.1 }, 0.2)
        .from(".ph-sub", { y: 20, opacity: 0, duration: 0.8 }, 0.6);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      <img
        src={backgroundImage}
        alt=""
        className="ph-bg absolute inset-0 h-[120%] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.35) 45%, rgba(8,8,8,0.85) 100%)",
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-28 max-w-[1500px] mx-auto">
        <p className="ph-eyebrow eyebrow text-white/80 mb-6">{eyebrow}</p>
        <h1
          className="ph-title heading-display text-white"
          style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)", lineHeight: 0.95 }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="ph-sub mt-8 max-w-md text-white/70 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
