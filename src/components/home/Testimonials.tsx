import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TESTIMONIALS } from "@/lib/constants";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-bg-secondary">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionEyebrow>Client Stories</SectionEyebrow>
        <h2 className="heading-display mt-6 text-text-primary text-3xl md:text-5xl mb-16">
          What our clients <em className="font-accent italic text-gold">say</em>.
        </h2>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="orvella-swiper"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="px-2">
                <div className="text-gold mb-6 tracking-[0.4em]">★★★★★</div>
                <blockquote className="font-display italic text-text-primary text-2xl md:text-4xl leading-snug">
                  "{t.quote}"
                </blockquote>
                <p className="eyebrow mt-8 text-text-secondary">— {t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .orvella-swiper { padding-bottom: 60px; }
        .orvella-swiper .swiper-pagination-bullet {
          width: 6px; height: 6px; background: var(--text-muted); opacity: 1;
        }
        .orvella-swiper .swiper-pagination-bullet-active {
          background: var(--accent-gold); width: 28px; border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
