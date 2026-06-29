import salonLounge from "@/assets/salon-lounge.jpg.asset.json";
import salonChandelier from "@/assets/salon-chandelier.jpg.asset.json";
import salonNails from "@/assets/salon-nails.jpg.asset.json";
import salonLounge2 from "@/assets/salon-lounge2.jpg.asset.json";

export const SITE = {
  name: "Orvella Salon",
  tagline: "Prepare to Experience Luxury Like Never Before",
  address: "First Floor, C-48, Block C, Lajpat Nagar II, New Delhi – 110024",
  phone: "+91 9582180189",
  phoneRaw: "919582180189",
  whatsapp: "+91 9217002598",
  whatsappRaw: "919217002598",
  email: "Orvellasalon@gmail.com",
  instagram: "https://www.instagram.com/orvellasalon/",
  instagramHandle: "@orvellasalon",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(
  "Hello Orvella Salon, I would like to book an appointment."
)}`;

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "hair",
    title: "Hair Services",
    short: "Precision cuts. Editorial styling.",
    image: salonChandelier.url,
  },
  {
    id: "keratin",
    title: "Keratin & Botox",
    short: "Restorative smoothing treatments.",
    image: salonLounge2.url,
  },
  {
    id: "skin",
    title: "Advanced Skincare",
    short: "Facials engineered for your skin.",
    image: salonLounge.url,
  },
  {
    id: "makeup",
    title: "Makeup Artistry",
    short: "From soft glow to high editorial.",
    image: salonNails.url,
  },
  {
    id: "bridal",
    title: "Bridal Studio",
    short: "Curated packages for your day.",
    image: salonLounge2.url,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The keratin treatment at Orvella completely transformed my hair — I had no idea it could look this smooth and healthy. The entire experience was incredibly relaxing.",
    author: "Priya S.",
  },
  {
    quote:
      "I cannot say enough about the bridal team at Orvella. They understood my vision perfectly and the day-of experience was flawless.",
    author: "Mehak R.",
  },
  {
    quote:
      "Easily the most considered salon I've been to in Delhi. The space, the products, the people — every detail is intentional.",
    author: "Aanya K.",
  },
  {
    quote:
      "My colourist actually listened. The balayage looks expensive and grew out beautifully. Worth every visit.",
    author: "Ishita M.",
  },
];

export const INSTAGRAM_POSTS = [
  { image: salonLounge.url, span: "col-span-2 row-span-2" },
  { image: salonChandelier.url, span: "" },
  { image: salonNails.url, span: "" },
  { image: salonLounge2.url, span: "" },
  { image: salonChandelier.url, span: "col-span-2" },
  { image: salonNails.url, span: "" },
  { image: salonLounge.url, span: "" },
  { image: salonLounge2.url, span: "" },
];

export const HERO_IMAGES = {
  lounge: salonLounge.url,
  chandelier: salonChandelier.url,
  nails: salonNails.url,
  lounge2: salonLounge2.url,
};
