import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CtaButton } from "@/components/ui/CtaButton";
import { BRIDAL_PACKAGES, waLink } from "@/lib/constants";

export function BridalPackages() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    imgRefs.current.forEach((img, i) => {
      if (!img) return;
      gsap.to(img, {
        opacity: i === active ? 1 : 0,
        scale: i === active ? 1 : 1.08,
        duration: 0.9,
        ease: "power2.out",
      });
    });
  }, [active]);

  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 mb-16 text-center">
        <div className="inline-flex flex-col items-center">
          <SectionEyebrow>The Collections</SectionEyebrow>
        </div>
        <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
          Bridal <em className="font-accent italic text-gold">packages</em>
        </h2>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Sticky image — desktop only */}
        <div className="hidden md:block">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
              {BRIDAL_PACKAGES.map((p, i) => (
                <img
                  key={p.id}
                  ref={(el) => { imgRefs.current[i] = el; }}
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling package list */}
        <div className="flex flex-col gap-16 md:gap-32 md:py-[20vh]">
          {BRIDAL_PACKAGES.map((p, i) => (
            <div
              key={p.id}
              data-index={i}
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="md:hidden mb-8 w-full object-cover"
                style={{ aspectRatio: "3 / 4" }}
                loading="lazy"
              />
              <p className="eyebrow">{`0${i + 1}`}</p>
              <h3 className="heading-display mt-4 text-text-primary text-3xl md:text-4xl">
                {p.name}
              </h3>
              <p className="mt-3 font-accent italic text-gold text-lg">{p.tagline}</p>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-text-secondary">
                    <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <CtaButton
                  href={waLink(`Hello Orvella, I would like to enquire about ${p.name}.`)}
                  variant="ghost"
                >
                  Enquire About This Package
                </CtaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
