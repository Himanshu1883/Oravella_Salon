import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { BRIDAL_GALLERY } from "@/lib/constants";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export function BridalGallery() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 text-center mb-16">
        <div className="inline-flex flex-col items-center">
          <SectionEyebrow>The Gallery</SectionEyebrow>
        </div>
        <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
          Real brides, <em className="font-accent italic text-gold">real moments</em>
        </h2>
      </div>

      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        spaceBetween={16}
        slidesPerView={1.2}
        navigation
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 1.5, slideShadows: false }}
        breakpoints={{ 768: { slidesPerView: 2.5 } }}
        className="orvella-bridal-swiper px-6"
      >
        {BRIDAL_GALLERY.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
              <img src={src} alt={`Bridal look ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .orvella-bridal-swiper .swiper-button-next,
        .orvella-bridal-swiper .swiper-button-prev {
          color: var(--accent-gold);
        }
        .orvella-bridal-swiper .swiper-button-next:after,
        .orvella-bridal-swiper .swiper-button-prev:after {
          font-size: 22px;
        }
      `}</style>
    </section>
  );
}
