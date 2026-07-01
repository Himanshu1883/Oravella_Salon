import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { MEDIA } from "@/lib/media";

const QUOTE =
  "Beauty is the illumination of your soul.";
const QUOTE_ACCENT = "illumination";
const SUPPORT =
  "In our salon, time slows. Every visit is a quiet ritual — consult, craft, reveal. You leave not only looking exquisite, but carrying a luminosity that is entirely your own.";
const LOCATION = "Lajpat Nagar II · New Delhi";

export function QuoteBreak() {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll<HTMLSpanElement>(".q-word");

      gsap.set(".quote-bg", { yPercent: -8 });
      gsap.set(words, { opacity: 0.08 });
      gsap.set(".quote-eyebrow", { opacity: 0, y: 24 });
      gsap.set(".quote-rule", { scaleX: 0 });
      gsap.set(".quote-support", { opacity: 0, y: 20 });
      gsap.set(".quote-attribution", { opacity: 0, y: 16 });
      gsap.set(".quote-mark", { opacity: 0, scale: 0.92 });

      gsap.to(".quote-bg", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0.6,
        },
      });

      gsap.to(".quote-eyebrow", {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          end: "top 52%",
          scrub: 0.5,
        },
      });

      gsap.to(".quote-rule", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 72%",
          end: "top 48%",
          scrub: 0.5,
        },
      });

      gsap.to(".quote-support", {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 58%",
          end: "bottom 42%",
          scrub: 0.55,
        },
      });

      gsap.to(".quote-attribution", {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom 35%",
          scrub: 0.5,
        },
      });

      gsap.to(".quote-mark", {
        opacity: 1,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "top 55%",
          scrub: 0.45,
        },
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    requestAnimationFrame(refresh);

    const video = videoRef.current;
    const onVideoReady = () => refresh();
    video?.addEventListener("loadeddata", onVideoReady, { once: true });
    if (video && video.readyState >= 2) onVideoReady();

    return () => {
      video?.removeEventListener("loadeddata", onVideoReady);
      ctx.revert();
    };
  }, []);

  const quoteWords = QUOTE.split(" ");

  return (
    <section
      ref={root}
      className="quote-break relative min-h-[100dvh] overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          ref={videoRef}
          src={MEDIA.ambientReel}
          className="quote-bg absolute left-0 w-full object-cover"
          style={{ top: "-12%", height: "124%" }}
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

      <div
        className="quote-mark pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 font-display text-white/[0.07] md:left-12 md:block"
        style={{ fontSize: "clamp(8rem, 18vw, 14rem)", lineHeight: 1 }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:max-w-5xl">
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
    </section>
  );
}
