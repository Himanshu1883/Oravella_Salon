import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  const wrapper = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const wrapperEl = wrapper.current!;
      const trackEl = track.current!;

      const getScrollAmount = () => {
        // distance the track needs to translate horizontally
        return Math.max(0, trackEl.scrollWidth - wrapperEl.clientWidth);
      };

      const tween = gsap.to(trackEl, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperEl,
          start: "top top",
          end: () => "+=" + getScrollAmount(),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Refresh once everything (images/fonts) has settled
      const refresh = () => ScrollTrigger.refresh();
      const t = window.setTimeout(refresh, 300);
      window.addEventListener("load", refresh);

      return () => {
        window.clearTimeout(t);
        window.removeEventListener("load", refresh);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  // Make sure ScrollTrigger refreshes after every image inside the track loads
  useEffect(() => {
    if (!track.current) return;
    const imgs = track.current.querySelectorAll("img");
    let pending = imgs.length;
    if (!pending) return;
    const done = () => {
      pending -= 1;
      if (pending <= 0) ScrollTrigger.refresh();
    };
    imgs.forEach((img) => {
      if (img.complete) done();
      else {
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      }
    });
  }, []);

  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 flex items-end justify-between gap-8 mb-16">
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

      <div ref={wrapper} className="overflow-hidden w-full">
        <div
          ref={track}
          className="flex gap-6 lg:gap-8 pl-6 md:pl-12 lg:pl-[6vw] pr-[6vw] w-max"
        >
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className="relative shrink-0 overflow-hidden group"
              style={{ width: "min(85vw, 540px)", height: "min(80vh, 680px)" }}
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
              <div className="absolute top-6 left-6 font-display text-7xl text-white/20 leading-none">
                0{i + 1}
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="heading-display text-white text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 text-white/70 text-sm max-w-xs">{s.short}</p>
                <Link to="/services" className="mt-6 inline-flex eyebrow text-gold gold-underline">
                  Explore →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
