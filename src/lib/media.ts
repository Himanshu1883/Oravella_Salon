import hairReelPrimary from "@/assets/MOV_4315.MOV";
import hairReelSecondary from "@/assets/MOV_4303.MOV";
import logo from "@/assets/orvella logo png.png";
import logoMark from "@/assets/logo_orvellasalon.PNG";
import heroVideo from "@/assets/gemini_generated_video_09873ed2.mp4";
import ambientReel from "@/assets/WhatsApp Video 2026-06-29 at 11.33.31 AM (1).mp4";
import bridalReel from "@/assets/WhatsApp Video 2026-06-29 at 11.33.31 AM.mp4";
import salonLounge from "@/assets/7.png";
import salonChandelier from "@/assets/8.png";
import salonNails from "@/assets/9.png";
import salonLounge2 from "@/assets/10.png";
import salonExtra1 from "@/assets/11.png";
import salonExtra2 from "@/assets/12.png";
import transform7 from "@/assets/transform/7.webp";
import transform8 from "@/assets/transform/8.webp";
import transform9 from "@/assets/transform/9.webp";
import transform10 from "@/assets/transform/10.webp";
import transform11 from "@/assets/transform/11.webp";
import transform12 from "@/assets/transform/12.webp";
import bannerAbout from "@/assets/High-end_website_hero_banner_in_202606301543.jpeg";
import bannerBridal from "@/assets/High-end_website_hero_banner_in_202606301543 (3).jpeg";
import bannerServices from "@/assets/A_modern,_asymmetric_collage_banner_202606301545.jpeg";
import bannerContact from "@/assets/A_clean_and_minimalist_16_9_202606301546.jpeg";

export const MEDIA = {
  logo,
  logoMark,
  heroVideo,
  ambientReel,
  bridalReel,
  salonLounge,
  salonChandelier,
  salonNails,
  salonLounge2,
  salonExtra1,
  salonExtra2,
  bannerAbout,
  bannerBridal,
  bannerServices,
  bannerContact,
  hairReelPrimary,
  hairReelSecondary,
  /** Salon showcase — swap imports when clean caption-free assets arrive */
  salonReception: bannerAbout,
  salonRelaxationLounge: salonLounge2,
  salonMinimalLuxury: salonLounge,
  salonHairProducts: bannerServices,
  salonNailStudio: salonNails,
  salonReel1: ambientReel,
  salonReel2: bridalReel,
  /** Lightweight WebP — before/after sliders only (~90KB vs ~17MB PNG) */
  transformBefore1: transform7,
  transformAfter1: transform8,
  transformBefore2: transform9,
  transformAfter2: transform10,
  transformBefore3: transform11,
  transformAfter3: transform12,
} as const;

/** Full-width hero banners for inner pages (not homepage) */
export const PAGE_BANNERS = {
  about: bannerAbout,
  bridal: bannerBridal,
  services: bannerServices,
  contact: bannerContact,
} as const;

/** Rotating hero slides on the services page */
export const SERVICES_HERO_BANNERS = [
  bannerServices,
  salonChandelier,
  salonLounge2,
  salonNails,
  salonLounge,
  salonExtra1,
  bannerAbout,
] as const;
