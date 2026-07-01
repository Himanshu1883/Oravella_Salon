import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/media";

const COLLAGE = [
  {
    src: MEDIA.salonReception,
    alt: "Orvella Salon reception and styling wall",
    pos: "object-[50%_20%]",
    offset: "md:-translate-y-10",
  },
  {
    src: MEDIA.salonRelaxationLounge,
    alt: "Backwash and relaxation lounge",
    pos: "object-[50%_10%]",
    offset: "md:translate-y-8",
  },
  {
    src: MEDIA.salonMinimalLuxury,
    alt: "Waiting lounge seating",
    pos: "object-[50%_15%]",
    offset: "md:-translate-y-4",
  },
] as const;

const SLIDES = [
  { src: MEDIA.salonHairProducts, alt: "Premium professional hair care shelf" },
  { src: MEDIA.salonChandelier, alt: "Crystal chandelier detail" },
  { src: MEDIA.salonNailStudio, alt: "Nail extension studio corner" },
] as const;

const AUTOPLAY_MS = 4800;

const ARCH_COLLAGE = "999px 999px 14px 14px / 140px 140px 14px 14px";
const ARCH_SLIDER = "180px 180px 16px 16px / 90px 90px 16px 16px";

export function AboutIntro() {
  const root = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = root.current!.querySelectorAll<HTMLSpanElement>(".reveal-word");
      gsap.fromTo(
        words,
        { opacity: 0.08, y: 14 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        },
      );

      if (!reduceMotion.current) {
        gsap.utils.toArray<HTMLElement>(".collage-frame").forEach((frame, i) => {
          gsap.fromTo(
            frame,
            { clipPath: "inset(0 0 100% 0)" },
            {
              clipPath: "inset(0 0 0% 0)",
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: frame, start: "top 90%" },
              delay: i * 0.12,
            },
          );
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion.current) return;
    const t = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [index, isPaused, goTo]);

  useEffect(() => {
    const slides = trackRef.current?.querySelectorAll<HTMLElement>(".slide");
    if (!slides) return;
    slides.forEach((s, i) => {
      gsap.to(s, {
        opacity: i === index ? 1 : 0,
        scale: i === index ? 1 : 1.04,
        duration: reduceMotion.current ? 0.01 : 0.9,
        ease: "power2.out",
        pointerEvents: i === index ? "auto" : "none",
      });
    });
  }, [index]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1));
    dragStartX.current = null;
  };

  return (
    <section ref={root} className="relative overflow-hidden bg-bg-primary px-6 pt-28 pb-10 md:px-12 md:pt-40 md:pb-12">
      <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
        <SectionEyebrow>About Orvella</SectionEyebrow>
        <h2 className="about-heading reveal-heading heading-display mt-6 text-3xl leading-tight text-text-primary md:text-5xl lg:text-6xl">
          {"A unisex hair studio built for every kind of confidence."
            .split(" ")
            .map((w, i) => (
              <span key={i} className="reveal-word mr-[0.25em] inline-block">
                {w === "confidence." ? (
                  <em className="font-accent italic text-gold">{w}</em>
                ) : (
                  w
                )}
              </span>
            ))}
        </h2>
        <p className="mt-6 leading-relaxed text-text-secondary">
          Orvella Salon is a premium unisex hair destination in the heart of Lajpat Nagar II —
          one chair for her, one for him, the same uncompromising standard for both. From precision
          cuts to colour correction and keratin therapy, every service is led by stylists trained
          on the same craft, in a space designed to feel as considered as the work itself.
        </p>
      </div>

      <div className="mx-auto mb-16 max-w-[1500px] md:mb-24">
        <div className="about-collage-scroll -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {COLLAGE.map((item, i) => (
            <div
              key={i}
              className={`collage-frame relative w-[78vw] shrink-0 snap-center overflow-hidden md:w-auto ${item.offset}`}
              style={{ aspectRatio: "3 / 4", borderRadius: ARCH_COLLAGE }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                draggable={false}
                className={`collage-img absolute inset-0 h-full w-full object-cover ${item.pos}`}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: "inset 0 0 0 2px var(--accent-gold-muted)" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative mx-auto max-w-5xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16 / 9", borderRadius: ARCH_SLIDER }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {SLIDES.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
              className="slide absolute inset-0 h-full w-full object-cover object-[50%_15%]"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-bg-primary/80 text-gold backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-bg-primary md:-left-6 md:h-12 md:w-12"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-bg-primary/80 text-gold backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-bg-primary md:-right-6 md:h-12 md:w-12"
        >
          ›
        </button>

        <div className="mt-6 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold" : "w-1.5 bg-gold-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/about" className="inline-flex items-center gap-3 eyebrow gold-underline text-gold">
          Explore The Salon →
        </Link>
      </div>

      <style>{`
        .about-collage-scroll {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .about-collage-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
