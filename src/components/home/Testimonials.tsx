import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { gsap } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TESTIMONIALS } from "@/lib/constants";
import "swiper/css";
import "swiper/css/effect-fade";

const AUTOPLAY_MS = 5500;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const barRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const quoteRef = useRef<HTMLDivElement>(null);

  const restartBar = useCallback((i: number) => {
    barRefs.current.forEach((el, idx) => {
      if (!el) return;
      el.style.animation = "none";
      el.style.width = idx < i ? "100%" : "0%";
    });
    const el = barRefs.current[i];
    if (el) {
      // force reflow so the animation restarts
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetWidth;
      el.style.animation = `orvella-bar-fill ${AUTOPLAY_MS}ms linear forwards`;
    }
  }, []);

  const revealQuote = useCallback(() => {
    if (!quoteRef.current) return;
    const els = quoteRef.current.querySelectorAll(".t-anim");
    gsap.fromTo(
      els,
      { opacity: 0, y: 18, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.08, ease: "power3.out" }
    );
  }, []);

  const onSlideChange = useCallback(
    (s: SwiperType) => {
      setActive(s.realIndex);
      restartBar(s.realIndex);
      revealQuote();
    },
    [restartBar, revealQuote]
  );

  return (
    <section className="relative py-28 md:py-40 bg-bg-secondary overflow-hidden">
      {/* oversized watermark quote mark — decorative, non-interactive */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 font-display text-[220px] md:text-[420px] leading-none text-gold/[0.06]"
      >
        "
      </span>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <SectionEyebrow>Client Stories</SectionEyebrow>
        <h2 className="heading-display mt-6 text-text-primary text-3xl md:text-5xl">
          What our clients <em className="font-accent italic text-gold">say</em>.
        </h2>
      </div>

      {/* full-width stage */}
      <div className="relative mt-16 md:mt-24 w-full">
        <button
          ref={prevRef}
          aria-label="Previous testimonial"
          className="hidden md:flex absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-bg-secondary transition-colors duration-300"
        >
          ‹
        </button>
        <button
          ref={nextRef}
          aria-label="Next testimonial"
          className="hidden md:flex absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-bg-secondary transition-colors duration-300"
        >
          ›
        </button>

        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(s) => {
            // @ts-expect-error swiper nav ref wiring
            s.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error swiper nav ref wiring
            s.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={() => restartBar(0)}
          onSlideChange={onSlideChange}
          loop
          className="orvella-swiper"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div ref={active === i ? quoteRef : undefined} className="mx-auto max-w-4xl px-6 md:px-16 text-center">
                <div className="t-anim mb-8 flex justify-center">
                  <span
                    className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center text-gold font-display text-lg md:text-xl border border-gold/50"
                    style={{ borderRadius: "999px 999px 10px 10px / 60px 60px 10px 10px" }}
                  >
                    {initials(t.author)}
                  </span>
                </div>
                <div className="t-anim text-gold mb-6 tracking-[0.4em]">★★★★★</div>
                <blockquote className="t-anim font-display italic text-text-primary text-2xl md:text-4xl lg:text-5xl leading-snug">
                  "{t.quote}"
                </blockquote>
                <p className="t-anim eyebrow mt-8 text-text-secondary">— {t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* story-bar progress navigation, replaces dots */}
        <div className="mx-auto mt-14 flex max-w-md md:max-w-lg items-center gap-2 px-6">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className="relative h-[2px] flex-1 overflow-hidden bg-text-muted/40 cursor-pointer"
              onClick={() => {
                document.querySelectorAll<HTMLElement>(".orvella-swiper .swiper-slide-active");
                (document.querySelector(".orvella-swiper") as any)?.swiper?.slideToLoop(i);
              }}
            >
              <span
                ref={(el) => {
                  if (el) {
                    barRefs.current[i] = el;
                  }
                }}
                className="absolute inset-y-0 left-0 block bg-gold"
                style={{ width: i < active ? "100%" : "0%" }}
              />
            </span>
          ))}
        </div>

        {/* mobile arrows, centered under the story-bar */}
        <div className="mt-8 flex md:hidden justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => (document.querySelector(".orvella-swiper") as any)?.swiper?.slidePrev()}
            className="h-11 w-11 flex items-center justify-center rounded-full border border-gold/40 text-gold"
          >
            ‹
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => (document.querySelector(".orvella-swiper") as any)?.swiper?.slideNext()}
            className="h-11 w-11 flex items-center justify-center rounded-full border border-gold/40 text-gold"
          >
            ›
          </button>
        </div>
      </div>

      <style>{`
        .orvella-swiper { width: 100%; padding: 0; }
        .orvella-swiper .swiper-slide { transition: opacity .6s ease; }

        @keyframes orvella-bar-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}