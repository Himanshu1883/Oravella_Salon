import { MEDIA } from "@/lib/media";
import type {
  Service,
  TestimonialType,
  BridalPackage,
  TeamMember,
  InstagramPost,
  IgProfile,
  Stat,
  ValueItem,
  Transformation,
} from "@/types";

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
  hours: "Mon – Sun — 10:00 AM – 9:00 PM",
};

export const SOCIAL_LINKS = {
  instagram: SITE.instagram,
  whatsapp: `https://wa.me/${SITE.whatsappRaw}`,
  phone: `tel:${SITE.phoneRaw}`,
  email: `mailto:${SITE.email}`,
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;

export const WHATSAPP_URL = waLink(
  "Hello Orvella Salon, I would like to book an appointment."
);

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES: Service[] = [
  {
    id: "hair",
    slug: "hair",
    title: "Hair Services",
    short: "Precision cuts. Editorial styling.",
    longDescription:
      "From precision cuts to creative styling, our hair artists shape looks around your face, your hair, and your life — never a template. Every appointment begins with a consultation and ends with a finish you can recreate at home.",
    image: MEDIA.salonChandelier,
    whatsappMessage: "Hello Orvella, I would like to book a Hair Service.",
  },
  {
    id: "color",
    slug: "color",
    title: "Hair Coloring & Highlights",
    short: "Balayage, highlights, dimensional colour.",
    longDescription:
      "Balayage, highlights, global colour, and corrections — done with premium, hair-kind formulas. We design tones that grow out beautifully and suit your skin, so your colour always looks intentional.",
    image: MEDIA.salonLounge,
    whatsappMessage: "Hello Orvella, I would like to book Hair Coloring & Highlights.",
  },
  {
    id: "keratin",
    slug: "keratin",
    title: "Keratin & Botox Treatments",
    short: "Restorative smoothing treatments.",
    longDescription:
      "Smooth frizz, restore shine, and bring damaged hair back to life with our keratin and hair-botox treatments. Results that last for months and make every morning effortless.",
    image: MEDIA.salonLounge2,
    whatsappMessage: "Hello Orvella, I would like to book a Keratin / Botox Treatment.",
  },
  {
    id: "skin",
    slug: "skin",
    title: "Advanced Skincare",
    short: "Facials engineered for your skin.",
    longDescription:
      "Targeted facials and skin therapies built around your skin's real needs. Clinical-grade products, gentle technique, and a deeply relaxing ritual that leaves you glowing.",
    image: MEDIA.salonNails,
    whatsappMessage: "Hello Orvella, I would like to book an Advanced Skincare facial.",
  },
  {
    id: "makeup",
    slug: "makeup",
    title: "Makeup Artistry",
    short: "From soft glow to high editorial.",
    longDescription:
      "Soft glam, no-makeup makeup, or full editorial — our artists build a look that photographs beautifully and lasts all day. Perfect for events, shoots, and celebrations.",
    image: MEDIA.salonExtra1,
    whatsappMessage: "Hello Orvella, I would like to book Makeup Artistry.",
  },
  {
    id: "nails",
    slug: "nails",
    title: "Nail Services",
    short: "Manicures, gels, and nail art.",
    longDescription:
      "Manicures, pedicures, gel extensions, and nail art finished with care and precision. A polished detail that completes every look.",
    image: MEDIA.salonExtra2,
    whatsappMessage: "Hello Orvella, I would like to book a Nail Service.",
  },
  {
    id: "bridal",
    slug: "bridal",
    title: "Bridal Packages",
    short: "Curated packages for your day.",
    longDescription:
      "Full bridal experiences — makeup, hair, draping, and pre-bridal care — designed around your story and your day. Explore our dedicated Bridal Studio.",
    image: MEDIA.salonLounge2,
    whatsappMessage: "Hello Orvella, I would like to know about Bridal Packages.",
    href: "/bridal",
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    quote:
      "The keratin treatment at Orvella completely transformed my hair — I had no idea it could look this smooth and healthy. The entire experience was incredibly relaxing and the results lasted months.",
    author: "Priya S.",
    service: "Keratin Treatment",
  },
  {
    quote:
      "I cannot say enough about the bridal team at Orvella. They understood my vision perfectly and the day-of experience was flawless.",
    author: "Mehak R.",
    service: "Bridal Package",
  },
  {
    quote:
      "Easily the most considered salon I've been to in Delhi. The space, the products, the people — every detail is intentional.",
    author: "Aanya K.",
    service: "Advanced Skincare",
  },
  {
    quote:
      "My colourist actually listened. The balayage looks expensive and grew out beautifully. Worth every visit.",
    author: "Ishita M.",
    service: "Hair Coloring",
  },
  {
    quote:
      "From the moment I walked in, I felt taken care of. The makeup for my engagement was exactly the soft glam I wanted.",
    author: "Sanya T.",
    service: "Makeup Artistry",
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { image: MEDIA.salonLounge, span: "col-span-2 row-span-2" },
  { image: MEDIA.salonChandelier, span: "" },
  { image: MEDIA.salonNails, span: "" },
  { image: MEDIA.salonLounge2, span: "" },
  { image: MEDIA.salonExtra1, span: "col-span-2" },
  { image: MEDIA.salonExtra2, span: "" },
  { image: MEDIA.salonLounge, span: "" },
  { image: MEDIA.salonChandelier, span: "" },
];

export const HERO_IMAGES = {
  about: MEDIA.bannerAbout,
  bridal: MEDIA.bannerBridal,
  services: MEDIA.bannerServices,
  contact: MEDIA.bannerContact,
};

const IG_REELS = [
  { type: "video" as const, src: MEDIA.bridalReel, poster: MEDIA.salonExtra1, caption: "Bridal transformation in motion ✨ #orvellabride" },
  { type: "video" as const, src: MEDIA.ambientReel, poster: MEDIA.salonChandelier, caption: "Step inside the Orvella experience 💛" },
  { type: "video" as const, src: MEDIA.heroVideo, poster: MEDIA.salonLounge, caption: "Where every detail is intentional." },
];

export const IG_PROFILE: IgProfile = {
  handle: "orvellasalon",
  verified: true,
  name: "Orvella Salon | Luxury Hair & Beauty Salon",
  bio: [
    "Find Your Radiance @orvellasalon ✨",
    "Hair | Skin | Nails | Bridal & Makeup Experts",
    "📞 9582180189, 9217270189",
    "📍 Lajpat Nagar II, New Delhi",
  ],
  link: "linktr.ee/orvellasalon",
  linkUrl: SITE.instagram,
  stats: { posts: "9", followers: "211", following: "0" },
  highlights: [
    { label: "Colour", cover: MEDIA.salonChandelier },
    { label: "Men's", cover: MEDIA.salonNails },
    { label: "Offers", cover: MEDIA.salonExtra1 },
    { label: "What We Have", cover: MEDIA.logoMark },
  ],
  posts: [
    { type: "image", src: MEDIA.salonLounge, caption: "Quiet luxury, every visit." },
    { type: "video", src: MEDIA.bridalReel, poster: MEDIA.salonExtra1, caption: "Bridal transformation in motion ✨" },
    { type: "image", src: MEDIA.salonChandelier, caption: "Gilded glow." },
    { type: "image", src: MEDIA.salonNails, caption: "Polished to perfection." },
    { type: "video", src: MEDIA.ambientReel, poster: MEDIA.salonChandelier, caption: "Step inside the Orvella experience 💛" },
    { type: "image", src: MEDIA.salonLounge2, caption: "Quiet corners." },
    { type: "image", src: MEDIA.salonExtra1, caption: "The bridal suite." },
    { type: "video", src: MEDIA.heroVideo, poster: MEDIA.salonLounge, caption: "Where every detail is intentional." },
    { type: "image", src: MEDIA.salonExtra2, caption: "The finish." },
  ],
  reels: IG_REELS,
};

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "ivory",
    name: "The Ivory Package",
    tagline: "Timeless elegance for the modern bride",
    image: MEDIA.salonExtra1,
    features: [
      "Bridal makeup",
      "Hair styling",
      "Draping assistance",
      "Pre-bridal consultation",
      "One trial session",
      "Premium products",
      "Touch-up kit",
    ],
  },
  {
    id: "rosegold",
    name: "The Rose Gold Package",
    tagline: "Complete bridal luxury, start to finish",
    image: MEDIA.salonExtra2,
    features: [
      "Everything in Ivory",
      "Pre-bridal facial",
      "Mehendi-day makeup",
      "Personal stylist",
      "Hair accessories session",
    ],
  },
  {
    id: "bespoke",
    name: "The Bespoke Package",
    tagline: "For the bride who deserves only the extraordinary",
    image: MEDIA.salonChandelier,
    features: [
      "Fully customised",
      "Multi-day coverage",
      "Full skincare regime — 3 sessions",
      "Trial included",
      "Family makeup add-on",
      "Dedicated coordinator",
    ],
  },
];

export const BRIDAL_GALLERY = [
  MEDIA.salonLounge,
  MEDIA.salonChandelier,
  MEDIA.salonNails,
  MEDIA.salonLounge2,
  MEDIA.salonExtra1,
  MEDIA.salonExtra2,
  MEDIA.salonLounge,
  MEDIA.salonChandelier,
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Aarohi Mehra",
    role: "Creative Director · Hair",
    image: MEDIA.salonExtra1,
    experience: "12+ years",
  },
  {
    id: "2",
    name: "Kabir Anand",
    role: "Master Colourist",
    image: MEDIA.salonExtra2,
    experience: "9+ years",
  },
  {
    id: "3",
    name: "Naina Kapoor",
    role: "Lead Makeup Artist",
    image: MEDIA.salonNails,
    experience: "8+ years",
  },
  {
    id: "4",
    name: "Riya Sharma",
    role: "Skin & Bridal Specialist",
    image: MEDIA.salonLounge,
    experience: "7+ years",
  },
  {
    id: "5",
    name: "Devansh Rao",
    role: "Senior Stylist",
    image: MEDIA.salonChandelier,
    experience: "6+ years",
  },
  {
    id: "6",
    name: "Tara Suri",
    role: "Nail Artist",
    image: MEDIA.salonLounge2,
    experience: "5+ years",
  },
];

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years of Excellence" },
  { value: 20, suffix: "+", label: "Expert Services" },
  { value: 3, suffix: "", label: "Bridal Packages" },
];

export const VALUES: ValueItem[] = [
  {
    number: "01",
    title: "Precision",
    description:
      "Every cut, color, and treatment is performed with meticulous attention to detail. We never rush what matters.",
  },
  {
    number: "02",
    title: "Personalization",
    description:
      "No two clients are the same — neither are their services. We listen before we create.",
  },
  {
    number: "03",
    title: "Luxury",
    description:
      "From our products to our ambience, we refuse to compromise on the experience we deliver.",
  },
];

export const TRANSFORMATIONS: Transformation[] = [
  { before: MEDIA.transformBefore1, after: MEDIA.transformAfter1, label: "Colour & Cut" },
  { before: MEDIA.transformBefore2, after: MEDIA.transformAfter2, label: "Bridal Glam" },
  { before: MEDIA.transformBefore3, after: MEDIA.transformAfter3, label: "Keratin Smooth" },
];

export interface GalleryItem {
  image: string;
  title: string;
  year: string;
  text: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: MEDIA.salonLounge,
    title: "The Lounge",
    year: "01 — Space",
    text: "A softly lit room designed around the way light moves across the day.",
  },
  {
    image: MEDIA.salonChandelier,
    title: "Gilded Glow",
    year: "02 — Detail",
    text: "Hand-finished brass and warm light — every fixture chosen on purpose.",
  },
  {
    image: MEDIA.salonNails,
    title: "Polished",
    year: "03 — Nails",
    text: "Precise, considered nail artistry that completes the whole look.",
  },
  {
    image: MEDIA.salonLounge2,
    title: "Quiet Corners",
    year: "04 — Space",
    text: "Private nooks for the unhurried moments between transformations.",
  },
  {
    image: MEDIA.salonExtra1,
    title: "Bridal Suite",
    year: "05 — Bridal",
    text: "A dedicated wing where a bride's morning belongs entirely to her.",
  },
  {
    image: MEDIA.salonExtra2,
    title: "The Finish",
    year: "06 — Craft",
    text: "The last considered touch — colour, texture, and shine in balance.",
  },
  {
    image: MEDIA.salonChandelier,
    title: "Warm Light",
    year: "07 — Detail",
    text: "Ambient layers of light tuned for calm and for camera alike.",
  },
  {
    image: MEDIA.salonLounge,
    title: "Stillness",
    year: "08 — Space",
    text: "Nothing loud, nothing rushed — a space that lets you exhale.",
  },
  {
    image: MEDIA.salonNails,
    title: "Handwork",
    year: "09 — Craft",
    text: "Confident hands and careful listening, in every appointment.",
  },
];
