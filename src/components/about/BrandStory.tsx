import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/media";

export function BrandStory() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.to(".story-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".story-text > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".story-text", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-bg-primary py-24 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
          <img
            src={MEDIA.salonLounge}
            alt="Inside Orvella Salon"
            className="story-img absolute inset-0 h-[115%] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="story-text">
          <SectionEyebrow>Our Story</SectionEyebrow>
          <h2 className="heading-display mt-6 text-text-primary text-3xl md:text-5xl">
            Born in the heart of <em className="font-accent italic text-gold">Lajpat Nagar</em>.
          </h2>
          <p className="mt-8 text-text-secondary leading-relaxed max-w-lg">
            Orvella began with a simple vision — to create a space in Lajpat Nagar II where luxury
            isn't loud, but felt. Where technical mastery meets genuine listening, and where every
            client is treated as the only one in the room.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">
            We obsess over the details others overlook: the products we choose, the light we work in,
            the calm of the room. Premium formulations, expert hands, and an atmosphere designed to
            slow the world down.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">
            Because we believe every person — on every visit — deserves to walk out feeling
            extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}
