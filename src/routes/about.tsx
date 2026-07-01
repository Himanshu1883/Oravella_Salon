import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { CtaButton } from "@/components/ui/CtaButton";
import { MEDIA, PAGE_BANNERS } from "@/lib/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Orvella Salon" },
      { name: "description", content: "Our story, philosophy, and the team behind Orvella Salon in Lajpat Nagar II, New Delhi." },
      { property: "og:title", content: "About — Orvella Salon" },
      { property: "og:description", content: "Crafted with passion. The story behind Orvella." },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "2018", title: "A quiet beginning", copy: "Orvella was born in a small studio in Lajpat Nagar with one chair, one mirror, and one belief — beauty should never feel rushed." },
  { year: "2020", title: "Our atelier", copy: "We moved into our current home: a softly lit, hand-finished space designed around the way light moves through the room." },
  { year: "2022", title: "The Bridal Studio", copy: "We launched a dedicated bridal wing — a private suite for brides who wanted their morning unhurried and entirely their own." },
  { year: "2024", title: "Beyond the chair", copy: "Skincare, advanced facials, and a fully extended menu of treatments — all delivered with the same quiet care." },
];

const VALUES = [
  { num: "01", title: "Quiet luxury", copy: "Nothing loud. Nothing rushed. A space that lets you exhale." },
  { num: "02", title: "Considered craft", copy: "Every cut, colour, and finish is the product of careful listening and confident hands." },
  { num: "03", title: "Honest counsel", copy: "We will tell you what works for you — not what is fashionable this season." },
];

const TEAM = [
  { name: "Aanya Mehra", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop" },
  { name: "Ishaan Kapoor", role: "Senior Stylist · Colour", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" },
  { name: "Riya Sharma", role: "Lead Bridal Artist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop" },
  { name: "Vikram Singh", role: "Skin Therapist", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop" },
];

function AboutPage() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ab-hero-line", {
        yPercent: 110, opacity: 0, stagger: 0.12, duration: 1.2, ease: "power4.out", delay: 0.3,
      });
      gsap.from(".ab-hero-banner", { scale: 1.12, duration: 1.8, ease: "power3.out", delay: 0.2 });
      gsap.from(".ab-hero-sub", { opacity: 0, y: 20, duration: 0.9, delay: 1.0, ease: "power3.out" });

      // Reveal-on-scroll for story paragraphs
      const words = root.current!.querySelectorAll<HTMLSpanElement>(".ab-reveal-word");
      gsap.fromTo(words, { opacity: 0.15, y: 8 }, {
        opacity: 1, y: 0, stagger: 0.04, ease: "none",
        scrollTrigger: { trigger: ".ab-story", start: "top 80%", end: "bottom 60%", scrub: 0.6 },
      });

      // Counters
      root.current!.querySelectorAll<HTMLSpanElement>(".ab-counter").forEach((el) => {
        const target = Number(el.dataset.target || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
        });
      });

      // Timeline
      gsap.utils.toArray<HTMLElement>(".ab-tl-item").forEach((item) => {
        gsap.from(item, {
          x: -40, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 82%" },
        });
      });

      // Values
      gsap.from(".ab-value", {
        y: 60, opacity: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-values", start: "top 75%" },
      });

      // Team
      gsap.from(".ab-team-card", {
        y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-team", start: "top 75%" },
      });

      // Parallax bg image
      gsap.to(".ab-parallax", {
        yPercent: -15, ease: "none",
        scrollTrigger: { trigger: ".ab-parallax-section", start: "top bottom", end: "bottom top", scrub: true },
      });

      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  const story = "We built Orvella for people who notice the details. The light. The textures. The quiet. We do not believe beauty has to shout to be felt.";
  const storyWords = story.split(" ");

  return (
    <div ref={root} className="bg-bg-primary">
      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 overflow-hidden min-h-[min(72vh,820px)] flex items-end">
        <img
          src={PAGE_BANNERS.about}
          alt=""
          className="ab-hero-banner absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/75" />
        <div className="relative z-10 max-w-[1500px] mx-auto w-full">
          <div className="[&_.eyebrow]:text-white/80">
            <SectionEyebrow>Our Story</SectionEyebrow>
          </div>
          <h1 className="heading-display mt-8 text-white" style={{ fontSize: "clamp(3rem, 8vw, 8rem)", lineHeight: 0.95 }}>
            <span className="block overflow-hidden"><span className="ab-hero-line inline-block">Crafted</span></span>
            <span className="block overflow-hidden"><span className="ab-hero-line inline-block">with</span></span>
            <span className="block overflow-hidden"><span className="ab-hero-line inline-block italic font-accent text-gold">passion.</span></span>
          </h1>
          <p className="ab-hero-sub mt-8 max-w-lg text-white/75 text-lg leading-relaxed">
            Orvella is a love letter to slow beauty — a salon designed around how it
            feels to be unhurried, listened to, and quietly transformed.
          </p>
        </div>
      </section>

      <MarqueeStrip text="Quiet · Considered · Crafted · Considered · Quiet · " />

      {/* STORY */}
      <section className="ab-story py-32 md:py-48 px-6 md:px-12">
        <p className="max-w-5xl mx-auto font-display text-text-primary text-3xl md:text-5xl lg:text-6xl leading-tight text-center">
          {storyWords.map((w, i) => (
            <span key={i} className="ab-reveal-word inline-block mr-[0.2em]">
              {w === "quiet." ? <em className="font-accent italic text-gold">{w}</em> : w}
            </span>
          ))}
        </p>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-[1300px] grid grid-cols-2 md:grid-cols-4 border-y border-border-subtle divide-x divide-border-subtle">
          {[
            { n: 7, label: "Years of craft" },
            { n: 500, label: "Happy clients" },
            { n: 120, label: "Bridal stories" },
            { n: 24, label: "Expert artists" },
          ].map((s) => (
            <div key={s.label} className="py-12 px-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-gold">
                <span className="ab-counter" data-target={s.n}>0</span>+
              </div>
              <p className="eyebrow mt-4 text-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-bg-secondary">
        <div className="mx-auto max-w-[1100px]">
          <SectionEyebrow>The Journey</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
            From one chair, to an <em className="font-accent italic text-gold">atelier</em>.
          </h2>
          <ol className="mt-16 relative border-l border-border-subtle pl-10 md:pl-16 space-y-16">
            {TIMELINE.map((t) => (
              <li key={t.year} className="ab-tl-item relative">
                <span className="absolute -left-[58px] md:-left-[82px] top-1 px-2.5 py-1 text-[0.65rem] tracking-[0.25em] text-gold bg-bg-secondary border border-gold">
                  {t.year}
                </span>
                <h3 className="heading-display text-text-primary text-2xl md:text-4xl">{t.title}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed max-w-xl">{t.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className="ab-values py-24 md:py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <SectionEyebrow>What We Believe</SectionEyebrow>
          <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-16">
            {VALUES.map((v) => (
              <div key={v.num} className="ab-value">
                <div className="font-display text-6xl text-gold/30">{v.num}</div>
                <h3 className="heading-display mt-4 text-text-primary text-3xl">{v.title}</h3>
                <p className="mt-4 text-text-secondary leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX INTERLUDE */}
      <section className="ab-parallax-section relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={MEDIA.salonChandelier} alt="" className="ab-parallax absolute inset-0 w-full h-[120%] object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grid place-items-center px-6">
          <p className="max-w-3xl text-center font-display italic text-white text-3xl md:text-5xl">
            "The space, the products, the people — every detail is intentional."
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="ab-team py-24 md:py-32 px-6 md:px-12 bg-bg-secondary">
        <div className="mx-auto max-w-[1500px]">
          <SectionEyebrow>The Atelier</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
            Meet our <em className="font-accent italic text-gold">team</em>.
          </h2>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {TEAM.map((m) => (
              <article key={m.name} className="ab-team-card group">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                  <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <h3 className="heading-display mt-5 text-text-primary text-2xl">{m.name}</h3>
                <p className="eyebrow mt-2">{m.role}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <CtaButton to="/contact" variant="ghost">
              Meet us in person
            </CtaButton>
          </div>
        </div>
      </section>

    </div>
  );
}
