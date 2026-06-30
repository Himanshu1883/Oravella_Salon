import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CtaButton } from "@/components/ui/CtaButton";
import { MEDIA, PAGE_BANNERS } from "@/lib/media";

const lounge2 = { url: MEDIA.salonLounge2 };
const chandelier = { url: MEDIA.salonChandelier };
const nails = { url: MEDIA.salonNails };

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Studio — Orvella Salon" },
      { name: "description", content: "Curated bridal packages, hair, makeup, and skincare rituals for your most beautiful chapter." },
      { property: "og:title", content: "Bridal Studio — Orvella Salon" },
      { property: "og:description", content: "Hand-crafted bridal services in Lajpat Nagar II, New Delhi." },
    ],
  }),
  component: BridalPage,
});

const PACKAGES = [
  {
    name: "The Engagement",
    price: "₹28,000",
    description: "A soft, luminous introduction. Hair, makeup, and a pre-event skin ritual.",
    includes: ["Skin prep facial (1 session)", "HD airbrush makeup", "Hair styling", "Draping assistance"],
  },
  {
    name: "The Wedding",
    price: "₹65,000",
    accent: true,
    description: "Our signature bridal experience. Two events, full skin prep, and a dedicated artist.",
    includes: [
      "3-session skin prep ritual",
      "Full bridal HD makeup",
      "Hair styling + accessories",
      "Saree / lehenga draping",
      "Trial session included",
    ],
  },
  {
    name: "The Heritage",
    price: "₹1,20,000",
    description: "Three to four events. Multi-day care across pre-bridal, mehendi, sangeet, and wedding.",
    includes: [
      "5-session skin & hair prep",
      "Dedicated lead artist + assistant",
      "On-location service",
      "All event looks designed in advance",
      "Family touch-ups included",
    ],
  },
];

const GALLERY = [
  { image: lounge2.url, span: "col-span-2 row-span-2" },
  { image: chandelier.url, span: "" },
  { image: nails.url, span: "" },
  { image: lounge2.url, span: "col-span-2" },
  { image: chandelier.url, span: "" },
  { image: nails.url, span: "" },
];

const PROCESS = [
  { step: "01", title: "Consultation", copy: "We meet, we listen. Mood boards, dates, expectations — and a skin and hair reading." },
  { step: "02", title: "Prep Rituals", copy: "Skin and hair are prepared across multiple sessions in the weeks leading up to your day." },
  { step: "03", title: "Trial Session", copy: "A full trial of your bridal look, photographed in natural and warm light." },
  { step: "04", title: "The Day", copy: "An unhurried morning. Your dedicated artist. Quiet music. And a flawless finish." },
];

function BridalPage() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(".br-hero-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.14,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".br-hero-sub, .br-hero-cta", { opacity: 0, y: 18, duration: 0.9, delay: 1.1, stagger: 0.1, ease: "power3.out" });
      gsap.from(".br-hero-banner", { scale: 1.15, duration: 2.4, ease: "power2.out" });

      // Quote reveal
      const q = root.current!.querySelectorAll<HTMLSpanElement>(".br-quote-word");
      gsap.fromTo(q, { opacity: 0.12 }, {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: { trigger: ".br-quote", start: "top 80%", end: "bottom 60%", scrub: 0.6 },
      });

      // Package cards
      gsap.from(".br-package", {
        y: 80, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".br-packages", start: "top 75%" },
      });

      // Gallery
      gsap.from(".br-gallery-item", {
        opacity: 0, y: 60, stagger: 0.08, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".br-gallery", start: "top 75%" },
      });

      // Process steps
      gsap.utils.toArray<HTMLElement>(".br-step").forEach((step) => {
        gsap.from(step, {
          x: -40, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 80%" },
        });
      });

      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  const quote = "She did not need to be perfect. She needed to feel like herself, only luminous.";
  const qWords = quote.split(" ");

  return (
    <div ref={root} className="bg-bg-primary">
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        <img
          src={PAGE_BANNERS.bridal}
          alt=""
          className="br-hero-banner absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/95" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-28 max-w-[1500px] mx-auto">
          <p className="eyebrow text-white/80 mb-6">Bridal Studio · By Orvella</p>
          <h1 className="heading-display text-white" style={{ fontSize: "clamp(3rem, 9vw, 10rem)", lineHeight: 0.92 }}>
            <span className="block overflow-hidden"><span className="br-hero-line inline-block">For your</span></span>
            <span className="block overflow-hidden"><span className="br-hero-line inline-block">most</span></span>
            <span className="block overflow-hidden"><span className="br-hero-line inline-block italic font-accent text-gold">beautiful chapter.</span></span>
          </h1>
          <p className="br-hero-sub mt-8 max-w-lg text-white/70 text-lg leading-relaxed">
            A bridal studio inside Orvella — for the woman who wants to feel
            recognisably herself on the most photographed day of her life.
          </p>
          <div className="br-hero-cta mt-10 flex flex-wrap gap-4">
            <CtaButton to="/contact" onDark>
              Book Consultation
            </CtaButton>
            <CtaButton href="#packages" variant="outline" onDark>
              View Packages
            </CtaButton>
          </div>
        </div>
      </section>

      <MarqueeStrip text="Bridal · Engagement · Mehendi · Sangeet · Wedding · Reception · " />

      {/* QUOTE */}
      <section className="br-quote py-32 md:py-48 px-6 md:px-12">
        <p className="max-w-4xl mx-auto font-display italic text-text-primary text-3xl md:text-5xl lg:text-6xl leading-tight text-center">
          {qWords.map((w, i) => (
            <span key={i} className="br-quote-word inline-block mr-[0.25em]">{w}</span>
          ))}
        </p>
        <p className="eyebrow text-center mt-10 text-text-secondary">— Orvella Bridal Studio</p>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="br-packages py-24 md:py-32 px-6 md:px-12 bg-bg-secondary">
        <div className="mx-auto max-w-[1500px]">
          <SectionEyebrow>Curated Packages</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl max-w-2xl">
            A package for every <em className="font-accent italic text-gold">chapter</em>.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {PACKAGES.map((p) => (
              <article
                key={p.name}
                className={`br-package relative p-8 md:p-10 border ${
                  p.accent ? "border-gold bg-bg-surface" : "border-border-subtle bg-bg-primary"
                } flex flex-col`}
              >
                {p.accent && (
                  <span className="absolute top-0 right-0 -translate-y-1/2 bg-gold text-bg-primary text-[0.6rem] tracking-[0.3em] uppercase px-4 py-1.5">
                    Most chosen
                  </span>
                )}
                <p className="eyebrow">{p.name}</p>
                <div className="mt-6 font-display text-5xl text-text-primary">{p.price}</div>
                <p className="mt-4 text-text-secondary leading-relaxed">{p.description}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-gold mt-1">◆</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <CtaButton
                  to="/contact"
                  variant={p.accent ? "gold" : "ghost"}
                  className="mt-10 w-full"
                >
                  Enquire
                </CtaButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="br-gallery py-24 md:py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionEyebrow>Bridal Gallery</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl max-w-2xl">
            Brides we have <em className="font-accent italic text-gold">dressed</em>.
          </h2>
          <div className="mt-16 grid grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
            {GALLERY.map((g, i) => (
              <div key={i} className={`br-gallery-item relative overflow-hidden group ${g.span}`}>
                <img src={g.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-bg-secondary">
        <div className="mx-auto max-w-[1100px]">
          <SectionEyebrow>The Process</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
            How we work with <em className="font-accent italic text-gold">you</em>.
          </h2>
          <ol className="mt-16 relative border-l border-border-subtle pl-10 md:pl-16 space-y-16">
            {PROCESS.map((s) => (
              <li key={s.step} className="br-step relative">
                <span className="absolute -left-[52px] md:-left-[78px] top-1 w-9 h-9 grid place-items-center rounded-full border border-gold text-gold text-xs tracking-widest bg-bg-secondary">
                  {s.step}
                </span>
                <h3 className="heading-display text-text-primary text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed max-w-xl">{s.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
