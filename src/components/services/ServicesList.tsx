import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CtaButton } from "@/components/ui/CtaButton";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SERVICES, waLink } from "@/lib/constants";

export function ServicesList() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>(".service-block");
      blocks.forEach((block) => {
        const img = block.querySelector(".service-img");
        const text = block.querySelector(".service-text");
        const fromX = block.classList.contains("is-reversed") ? -60 : 60;
        gsap.fromTo(
          img,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 70%", once: true },
          }
        );
        gsap.fromTo(
          text,
          { x: fromX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 70%", once: true },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="bg-bg-primary">
      {SERVICES.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <div key={s.id}>
            <section
              id={s.slug}
              className={`service-block ${reversed ? "is-reversed" : ""} mx-auto max-w-[1500px] px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center`}
            >
              <div
                className={`service-img relative overflow-hidden ${reversed ? "md:order-2" : ""}`}
                style={{ aspectRatio: "4 / 3" }}
              >
                <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <span className="absolute top-6 left-6 font-display text-6xl text-white/25 leading-none">
                  0{i + 1}
                </span>
              </div>

              <div className={`service-text ${reversed ? "md:order-1" : ""}`}>
                <SectionEyebrow>{`Service 0${i + 1}`}</SectionEyebrow>
                <h2 className="heading-display mt-6 text-text-primary text-3xl md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-text-secondary leading-relaxed max-w-lg">
                  {s.longDescription}
                </p>
                <div className="mt-10 flex flex-wrap gap-4 items-center">
                  {s.href ? (
                    <CtaButton to={s.href} variant="ghost">
                      Explore Bridal
                    </CtaButton>
                  ) : (
                    <CtaButton href={waLink(s.whatsappMessage)} variant="ghost">
                      Book This Service
                    </CtaButton>
                  )}
                  <Link to="/contact" className="eyebrow gold-underline text-gold">
                    Enquire →
                  </Link>
                </div>
              </div>
            </section>
            {i < SERVICES.length - 1 ? <GoldDivider /> : null}
          </div>
        );
      })}
    </div>
  );
}
