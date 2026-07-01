import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SERVICES_HERO_BANNERS } from "@/lib/media";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function ServicesHeroSlider() {
  return (
    <div className="sv-hero-slider absolute inset-0 z-0">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1600}
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: ".sv-hero-pagination",
          bulletClass: "sv-hero-pagination__bullet",
          bulletActiveClass: "sv-hero-pagination__bullet--active",
        }}
        className="sv-hero-swiper h-full w-full"
      >
        {SERVICES_HERO_BANNERS.map((src, i) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt=""
              className="sv-hero-banner h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
