import logo from "@/assets/logo_orvellasalon.PNG";
import heroVideo from "@/assets/new_video.mp4";
import ambientReel from "@/assets/WhatsApp Video 2026-06-29 at 11.33.31 AM (1).mp4";
import bridalReel from "@/assets/WhatsApp Video 2026-06-29 at 11.33.31 AM.mp4";
import salonLounge from "@/assets/7.png";
import salonChandelier from "@/assets/8.png";
import salonNails from "@/assets/9.png";
import salonLounge2 from "@/assets/10.png";
import salonExtra1 from "@/assets/11.png";
import salonExtra2 from "@/assets/12.png";
import bannerAbout from "@/assets/High-end_website_hero_banner_in_202606301543.jpeg";
import bannerBridal from "@/assets/High-end_website_hero_banner_in_202606301543 (3).jpeg";
import bannerServices from "@/assets/A_modern,_asymmetric_collage_banner_202606301545.jpeg";
import bannerContact from "@/assets/A_clean_and_minimalist_16_9_202606301546.jpeg";

export const MEDIA = {
  logo,
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
} as const;

/** Full-width hero banners for inner pages (not homepage) */
export const PAGE_BANNERS = {
  about: bannerAbout,
  bridal: bannerBridal,
  services: bannerServices,
  contact: bannerContact,
} as const;
