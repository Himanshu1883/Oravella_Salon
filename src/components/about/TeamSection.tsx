import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".team-grid", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-bg-primary py-24 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <SectionEyebrow>Our Artists</SectionEyebrow>
        <h2 className="heading-display mt-6 text-text-primary text-3xl md:text-5xl">
          The hands behind <em className="font-accent italic text-gold">your look</em>.
        </h2>

        <div className="team-grid mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((m) => (
            <motion.div
              key={m.id}
              className="team-card group relative overflow-hidden"
              style={{ aspectRatio: "3 / 4" }}
              whileHover="hover"
              initial="rest"
            >
              <motion.img
                src={m.image}
                alt={m.name}
                className="absolute inset-0 h-full w-full object-cover"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                transition={{ duration: 0.6 }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <motion.div
                className="absolute inset-x-0 bottom-0 p-6"
                variants={{ rest: { y: 8, opacity: 0.9 }, hover: { y: 0, opacity: 1 } }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="heading-display text-white text-2xl">{m.name}</h3>
                <p className="eyebrow mt-2 text-gold">{m.role}</p>
                <p className="mt-1 text-white/60 text-xs">{m.experience} experience</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
