import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/media";

type Feature = {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  detail: string;
  img: string;
  alt: string;
  pos: string;
};

const FEATURES: Feature[] = [
  {
    eyebrow: "01 — Product Philosophy",
    title: "Salon-grade care,",
    accent: "every wash.",
    copy: "We stock only professional lines trusted by working stylists — nourishing shampoos, bond-repair masks and colour-safe formulas chosen for how they perform, not how they photograph.",
    detail:
      "Every product on our shelves is selected by the team that uses it daily: Olaplex for repair, Kérastase for nourishment, and colour-protect ranges for clients who refresh their tone often. We patch-test, we explain the routine, and we send you home with exactly what your hair needs — nothing more.",
    img: MEDIA.salonHairProducts,
    alt: "Shelves of premium professional hair care products",
    pos: "object-[50%_30%]",
  },
  {
    eyebrow: "02 — The Wash Bar",
    title: "A pause,",
    accent: "before the work begins.",
    copy: "Reclining backwash chairs and a warm-lit product wall turn the first step of any service into a moment of quiet — the ritual that sets the tone for everything after.",
    detail:
      "The wash bar is where your appointment actually starts. Heated basins, scalp massage, and a product consultation happen before scissors or colour touch your hair. It is deliberate — we believe great results begin with how you are cared for in the first ten minutes.",
    img: MEDIA.salonRelaxationLounge,
    alt: "Relaxation lounge with backwash chairs",
    pos: "object-[50%_25%]",
  },
  {
    eyebrow: "03 — Ambience",
    title: "Light that",
    accent: "flatters, not flattens.",
    copy: "Crystal fixtures and warm wood panelling were chosen deliberately — true-to-life colour under the lights that matter most, and a room that photographs as good as it feels.",
    detail:
      "Lighting at Orvella is calibrated for colour work: warm enough to feel inviting, bright enough to read tone accurately at the mirror. Wood accents, burgundy seating, and soft reflections off crystal fixtures create a space that feels intimate without feeling cramped.",
    img: MEDIA.salonChandelier,
    alt: "Crystal chandelier detail",
    pos: "object-[50%_35%]",
  },
  {
    eyebrow: "04 — The Lounge",
    title: "Minimal by design,",
    accent: "generous by nature.",
    copy: "A calm waiting room with tufted seating and soft daylight — for the ten minutes before your name is called, or the coffee you didn't expect to be offered.",
    detail:
      "We kept the lounge uncluttered on purpose: comfortable seating, natural light, and a quiet corner to take a call or flip through a lookbook. Whether you are in for a quick trim or a three-hour bridal trial, the wait should feel like part of the experience — not an afterthought.",
    img: MEDIA.salonMinimalLuxury,
    alt: "Minimal luxury waiting lounge",
    pos: "object-[50%_30%]",
  },
];

const ARCH_FEATURE = "999px 999px 14px 14px / 72px 72px 14px 14px";

export function SalonShowcase() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".feature-row").forEach((row, i) => {
        const img = row.querySelector(".feature-frame");
        const text = row.querySelectorAll(".feature-text > *");

        if (img) {
          gsap.fromTo(
            img,
            { clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 78%" },
            },
          );
        }

        gsap.fromTo(
          text,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 72%" },
          },
        );
      });

      gsap.fromTo(
        ".reel-copy > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: { trigger: ".reel-wrap", start: "top 78%" },
        },
      );

      gsap.fromTo(
        ".reel-card",
        { opacity: 0, scale: 1.03 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".reel-wrap", start: "top 75%" },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="bg-bg-primary">
      <section className="relative px-6 pt-8 pb-4 md:px-12 md:pt-10 md:pb-6">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <SectionEyebrow>Inside The Salon</SectionEyebrow>
          <h2 className="heading-display mt-6 text-3xl leading-tight text-text-primary md:text-5xl">
            Every detail, considered{" "}
            <em className="font-accent italic text-gold">twice.</em>
          </h2>
        </div>

        <div className="mx-auto flex max-w-[1400px] flex-col gap-14 md:gap-20 relative z-10">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`feature-row grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`feature-frame relative mx-auto w-full max-w-[min(100%,480px)] overflow-hidden ${
                  i % 2 === 1 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                }`}
                style={{ aspectRatio: "4 / 3", borderRadius: ARCH_FEATURE }}
              >
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  draggable={false}
                  className={`absolute inset-0 h-full w-full object-cover ${f.pos}`}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ boxShadow: "inset 0 0 0 2px var(--accent-gold-muted)" }}
                />
              </div>

              <div className="feature-text md:py-2">
                <p className="eyebrow text-gold">{f.eyebrow}</p>
                <h3 className="heading-display mt-4 text-2xl leading-tight text-text-primary md:text-4xl">
                  {f.title}{" "}
                  <em className="font-accent italic text-gold">{f.accent}</em>
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-text-secondary">{f.copy}</p>
                <p className="mt-4 max-w-lg leading-relaxed text-text-secondary/90">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Hair — sticky full-bleed image, copy + reels scroll over */}
      <BeyondHairStickyBand>
        <div className="reel-wrap relative z-20 w-full bg-bg-secondary">
          <div className="reel-copy mx-auto max-w-3xl px-8 py-14 text-center md:py-20">
            <div className="flex justify-center">
              <SectionEyebrow>Watch The Space</SectionEyebrow>
            </div>
            <h3 className="heading-display mt-6 text-3xl leading-tight text-text-primary md:text-5xl lg:text-[3.25rem]">
              Two minutes inside{" "}
              <em className="font-accent italic text-gold">Orvella.</em>
            </h3>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-text-secondary md:text-lg">
              Walk through the wash bar, the styling floor, and the light we calibrate for colour
              work — the same rooms you will sit in on your first visit.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
              Tap unmute on either reel. Videos play automatically as you scroll.
            </p>
          </div>

          <div className="px-6 pb-14 md:px-12 md:pb-20 lg:px-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch sm:gap-6">
              <ReelCard src={MEDIA.salonReel1} poster={MEDIA.salonChandelier} fullBleed />
              <ReelCard src={MEDIA.salonReel2} poster={MEDIA.salonLounge} fullBleed />
            </div>
          </div>
        </div>
      </BeyondHairStickyBand>
    </div>
  );
}

function BeyondHairStickyBand({ children }: { children: React.ReactNode }) {
  const zone = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const trackEl = track.current;
      if (!trackEl) return;

      if (reduce) {
        gsap.set(copy.current, { yPercent: 0 });
        return;
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: trackEl,
            start: "top 78%",
            end: "bottom 22%",
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          copy.current,
          { yPercent: 32 },
          { yPercent: 0, ease: "power2.out", duration: 0.25 },
        )
        .to(copy.current, { yPercent: 0, duration: 0.5 })
        .to(copy.current, { yPercent: -32, ease: "power2.in", duration: 0.25 });
    }, zone);

    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 300);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={zone}
      className="nail-strip-zone relative z-0 mt-12 w-full bg-black md:mt-16"
      aria-label="Beyond Hair"
    >
      <div
        className="nail-strip__bg sticky top-0 z-0 h-screen w-full overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={MEDIA.salonNailStudio}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center max-md:object-[center_30%]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-black/25" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 38%, transparent 62%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 -mt-[100vh]">
        <div
          ref={track}
          className="nail-strip__track relative flex min-h-[480px] h-[85vh] w-full items-center md:min-h-[520px] md:h-[90vh]"
        >
          <div
            ref={copy}
            className="nail-strip__copy w-full px-8 py-16 md:px-16 md:py-20 lg:px-[max(2rem,calc((100vw-1400px)/2+4rem))]"
          >
            <p className="nail-strip__eyebrow eyebrow text-[#c9a87c]">Beyond Hair</p>
            <h3 className="heading-display mt-4 max-w-2xl text-3xl leading-tight text-white md:text-5xl lg:text-[3.25rem]">
              A dedicated nail extension studio, for the days you want the full reset.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Gel extensions, structured manicures, and nail art in a quiet corner of the salon —
              finished with the same care and hygiene standards as everything else we do.
            </p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

function ReelCard({
  src,
  poster,
  fullBleed = false,
}: {
  src: string;
  poster: string;
  fullBleed?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play()
            .then(() => setPlaying(true))
            .catch(() => {});
        } else {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.6 },
    );
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`reel-card relative overflow-hidden bg-black ${
        fullBleed ? "h-[100vh] min-h-[520px] w-full rounded-2xl" : ""
      }`}
      style={fullBleed ? undefined : { aspectRatio: "9 / 16", borderRadius: "28px" }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 0 2px var(--accent-gold-muted)" }}
      />
      <button
        type="button"
        aria-label={muted ? "Unmute video" : "Mute video"}
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-bg-primary/80 text-xs text-gold backdrop-blur"
      >
        {muted ? "🔇" : "🔊"}
      </button>
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold">
            ▶
          </span>
        </div>
      )}
    </div>
  );
}
