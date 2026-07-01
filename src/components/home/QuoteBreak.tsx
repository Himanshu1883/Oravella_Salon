import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { MEDIA } from "@/lib/media";

const QUOTE = "Beauty is the illumination of your soul.";
const QUOTE_ACCENT = "illumination";
const SUPPORT =
  "In our salon, time slows. Every visit is a quiet ritual — consult, craft, reveal. You leave not only looking exquisite, but carrying a luminosity that is entirely your own.";
const LOCATION = "Lajpat Nagar II · New Delhi";

export function QuoteBreak({ children }: { children?: ReactNode }) {
  const zone = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const zoneEl = zone.current;
    if (!video || !zoneEl) return;

    const tryPlay = () => video.play().catch(() => undefined);
    tryPlay();
    video.addEventListener("loadeddata", tryPlay, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.12 },
    );
    observer.observe(zoneEl);

    return () => {
      observer.disconnect();
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const zoneEl = zone.current;
      const trackEl = track.current;
      if (!zoneEl || !trackEl) return;

      if (reduce) {
        gsap.set(".q-word, .quote-eyebrow, .quote-rule, .quote-support, .quote-attribution, .quote-mark", {
          opacity: 1,
          y: 0,
          scale: 1,
          scaleX: 1,
        });
        gsap.set(copy.current, { opacity: 1, yPercent: 0 });
        return;
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: trackEl,
            start: "top 80%",
            end: "bottom 18%",
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          copy.current,
          { yPercent: 48, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: "power2.out", duration: 0.35 },
        )
        .to(copy.current, { yPercent: 0, opacity: 1, duration: 0.3 })
        .to(copy.current, { yPercent: -48, opacity: 0, ease: "power2.in", duration: 0.35 });

      const words = zoneEl.querySelectorAll<HTMLSpanElement>(".q-word");
      gsap.fromTo(
        words,
        { opacity: 0.08 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: trackEl,
            start: "top 68%",
            end: "bottom 42%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        ".quote-eyebrow",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: trackEl,
            start: "top 76%",
            end: "top 48%",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        ".quote-rule",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackEl,
            start: "top 70%",
            end: "top 44%",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        ".quote-support",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: trackEl,
            start: "top 56%",
            end: "bottom 38%",
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        ".quote-attribution",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: trackEl,
            start: "top 48%",
            end: "bottom 30%",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        ".quote-mark",
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackEl,
            start: "top 72%",
            end: "top 50%",
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        },
      );
    }, zone);

    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 300);
    const t2 = window.setTimeout(refresh, 900);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  const quoteWords = QUOTE.split(" ");

  return (
    <section ref={zone} className="quote-break-zone relative bg-black" aria-label="Philosophy">
      {/* Sticky video — quote + tail scroll over it (same pattern as pre-footer) */}
      <div
        className="quote-break__bg-layer sticky top-0 z-0 h-screen w-full overflow-hidden"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          src={MEDIA.ambientReel}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={MEDIA.salonChandelier}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      <div className="quote-break__scroll relative z-10 -mt-[100vh]">
        <div
          ref={track}
          className="quote-break__track relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 md:px-12 md:py-20"
        >
          <div
            className="quote-mark pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 font-display text-white/[0.07] md:left-12 md:block"
            style={{ fontSize: "clamp(8rem, 18vw, 14rem)", lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <div
            ref={copy}
            className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:max-w-5xl"
          >
            <p className="quote-eyebrow eyebrow mb-8 text-white/55 md:mb-10">
              The Orvella Philosophy
            </p>

            <div
              className="quote-rule mb-10 h-px w-16 origin-center bg-gradient-to-r from-transparent via-gold/70 to-transparent md:mb-12 md:w-24"
              aria-hidden="true"
            />

            <blockquote
              className="font-display italic text-white"
              style={{
                fontSize: "clamp(2rem, 4.8vw, 5.25rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
              }}
            >
              {quoteWords.map((word, i) => {
                const clean = word.replace(/[.,!?]/g, "");
                const isAccent = clean.toLowerCase() === QUOTE_ACCENT;

                return (
                  <span key={i} className="q-word mr-[0.22em] inline-block">
                    {isAccent ? (
                      <em className="font-accent not-italic text-gold-muted">{word}</em>
                    ) : (
                      word
                    )}
                  </span>
                );
              })}
            </blockquote>

            <p
              className="quote-support mt-10 max-w-2xl font-body font-light leading-relaxed text-white/62 md:mt-14 md:max-w-xl md:text-[1.05rem]"
              style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
            >
              {SUPPORT}
            </p>

            <div className="quote-attribution mt-12 flex flex-col items-center gap-3 md:mt-16">
              <div className="h-px w-10 bg-white/25" aria-hidden="true" />
              <p className="eyebrow text-white/55">— Orvella Salon</p>
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-white/38">
                {LOCATION}
              </p>
            </div>
          </div>
        </div>

        {children ? (
          <div className="quote-break__tail relative z-20">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
