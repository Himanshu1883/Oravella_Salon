import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  const section = useRef<HTMLElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Pointer drag-to-scroll (desktop + touch)
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      dragging.current = true;
      dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - dragStart.current.x;
      el.scrollLeft = dragStart.current.scrollLeft - dx;
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragging.current) return;
      dragging.current = false;
      el.releasePointerCapture(e.pointerId);
      el.style.cursor = "grab";
    };

    el.style.cursor = "grab";
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  // Entrance animation (no pin — works on all viewports)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: scroller.current,
          start: "top 85%",
        },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 flex items-end justify-between gap-8 mb-10 md:mb-16">
        <div>
          <SectionEyebrow>Our Craft</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl lg:text-7xl max-w-2xl">
            A complete <em className="font-accent text-gold italic">edit</em> of luxury services.
          </h2>
        </div>
        <Link to="/services" className="hidden md:inline-flex eyebrow gold-underline text-gold whitespace-nowrap">
          View All →
        </Link>
      </div>

      <p className="px-6 md:px-12 lg:pl-[6vw] mb-4 eyebrow text-text-muted text-[0.6rem] md:hidden">
        Swipe to explore →
      </p>

      <div
        ref={scroller}
        className="services-scroller flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-6 md:px-12 lg:pl-[6vw] lg:pr-[6vw] pb-2 touch-pan-x"
      >
        {SERVICES.map((s, i) => (
          <article
            key={s.id}
            className="service-card relative shrink-0 snap-center overflow-hidden group"
            style={{
              width: "min(88vw, 540px)",
              height: "min(70vh, 620px)",
            }}
          >
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 pointer-events-none"
              loading={i < 2 ? "eager" : "lazy"}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />
            <div className="absolute top-6 left-6 font-display text-6xl md:text-7xl text-white/20 leading-none pointer-events-none">
              0{i + 1}
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="heading-display text-white text-2xl sm:text-3xl md:text-4xl">{s.title}</h3>
              <p className="mt-3 text-white/70 text-sm max-w-xs">{s.short}</p>
              <Link to="/services" className="mt-6 inline-flex eyebrow text-gold gold-underline">
                Explore →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .services-scroller {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .services-scroller::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
