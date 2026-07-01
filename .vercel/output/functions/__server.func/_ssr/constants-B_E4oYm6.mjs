import { t as MEDIA } from "./media-VvPOLAU-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/constants-B_E4oYm6.js
var SITE = {
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
	hours: "Mon – Sun — 10:00 AM – 9:00 PM"
};
var SOCIAL_LINKS = {
	instagram: SITE.instagram,
	whatsapp: `https://wa.me/${SITE.whatsappRaw}`,
	phone: `tel:${SITE.phoneRaw}`,
	email: `mailto:${SITE.email}`
};
var waLink = (msg) => `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;
var WHATSAPP_URL = waLink("Hello Orvella Salon, I would like to book an appointment.");
var NAV_LINKS = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Services",
		href: "/services"
	},
	{
		label: "Bridal",
		href: "/bridal"
	},
	{
		label: "Gallery",
		href: "/gallery"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
var SERVICES = [
	{
		id: "hair",
		slug: "hair",
		title: "Hair Services",
		short: "Precision cuts. Editorial styling.",
		longDescription: "From precision cuts to creative styling, our hair artists shape looks around your face, your hair, and your life — never a template. Every appointment begins with a consultation and ends with a finish you can recreate at home.",
		image: MEDIA.salonChandelier,
		whatsappMessage: "Hello Orvella, I would like to book a Hair Service."
	},
	{
		id: "color",
		slug: "color",
		title: "Hair Coloring & Highlights",
		short: "Balayage, highlights, dimensional colour.",
		longDescription: "Balayage, highlights, global colour, and corrections — done with premium, hair-kind formulas. We design tones that grow out beautifully and suit your skin, so your colour always looks intentional.",
		image: MEDIA.salonLounge,
		whatsappMessage: "Hello Orvella, I would like to book Hair Coloring & Highlights."
	},
	{
		id: "keratin",
		slug: "keratin",
		title: "Keratin & Botox Treatments",
		short: "Restorative smoothing treatments.",
		longDescription: "Smooth frizz, restore shine, and bring damaged hair back to life with our keratin and hair-botox treatments. Results that last for months and make every morning effortless.",
		image: MEDIA.salonLounge2,
		whatsappMessage: "Hello Orvella, I would like to book a Keratin / Botox Treatment."
	},
	{
		id: "skin",
		slug: "skin",
		title: "Advanced Skincare",
		short: "Facials engineered for your skin.",
		longDescription: "Targeted facials and skin therapies built around your skin's real needs. Clinical-grade products, gentle technique, and a deeply relaxing ritual that leaves you glowing.",
		image: MEDIA.salonNails,
		whatsappMessage: "Hello Orvella, I would like to book an Advanced Skincare facial."
	},
	{
		id: "makeup",
		slug: "makeup",
		title: "Makeup Artistry",
		short: "From soft glow to high editorial.",
		longDescription: "Soft glam, no-makeup makeup, or full editorial — our artists build a look that photographs beautifully and lasts all day. Perfect for events, shoots, and celebrations.",
		image: MEDIA.salonExtra1,
		whatsappMessage: "Hello Orvella, I would like to book Makeup Artistry."
	},
	{
		id: "nails",
		slug: "nails",
		title: "Nail Services",
		short: "Manicures, gels, and nail art.",
		longDescription: "Manicures, pedicures, gel extensions, and nail art finished with care and precision. A polished detail that completes every look.",
		image: MEDIA.salonExtra2,
		whatsappMessage: "Hello Orvella, I would like to book a Nail Service."
	},
	{
		id: "bridal",
		slug: "bridal",
		title: "Bridal Packages",
		short: "Curated packages for your day.",
		longDescription: "Full bridal experiences — makeup, hair, draping, and pre-bridal care — designed around your story and your day. Explore our dedicated Bridal Studio.",
		image: MEDIA.salonLounge2,
		whatsappMessage: "Hello Orvella, I would like to know about Bridal Packages.",
		href: "/bridal"
	}
];
var TESTIMONIALS = [
	{
		quote: "The keratin treatment at Orvella completely transformed my hair — I had no idea it could look this smooth and healthy. The entire experience was incredibly relaxing and the results lasted months.",
		author: "Priya S.",
		service: "Keratin Treatment"
	},
	{
		quote: "I cannot say enough about the bridal team at Orvella. They understood my vision perfectly and the day-of experience was flawless.",
		author: "Mehak R.",
		service: "Bridal Package"
	},
	{
		quote: "Easily the most considered salon I've been to in Delhi. The space, the products, the people — every detail is intentional.",
		author: "Aanya K.",
		service: "Advanced Skincare"
	},
	{
		quote: "My colourist actually listened. The balayage looks expensive and grew out beautifully. Worth every visit.",
		author: "Ishita M.",
		service: "Hair Coloring"
	},
	{
		quote: "From the moment I walked in, I felt taken care of. The makeup for my engagement was exactly the soft glam I wanted.",
		author: "Sanya T.",
		service: "Makeup Artistry"
	}
];
MEDIA.salonLounge, MEDIA.salonChandelier, MEDIA.salonNails, MEDIA.salonLounge2, MEDIA.salonExtra1, MEDIA.salonExtra2, MEDIA.salonLounge, MEDIA.salonChandelier;
MEDIA.bannerAbout, MEDIA.bannerBridal, MEDIA.bannerServices, MEDIA.bannerContact;
var IG_REELS = [
	{
		type: "video",
		src: MEDIA.bridalReel,
		poster: MEDIA.salonExtra1,
		caption: "Bridal transformation in motion ✨ #orvellabride"
	},
	{
		type: "video",
		src: MEDIA.ambientReel,
		poster: MEDIA.salonChandelier,
		caption: "Step inside the Orvella experience 💛"
	},
	{
		type: "video",
		src: MEDIA.heroVideo,
		poster: MEDIA.salonLounge,
		caption: "Where every detail is intentional."
	}
];
var IG_PROFILE = {
	handle: "orvellasalon",
	verified: true,
	name: "Orvella Salon | Luxury Hair & Beauty Salon",
	bio: [
		"Find Your Radiance @orvellasalon ✨",
		"Hair | Skin | Nails | Bridal & Makeup Experts",
		"📞 9582180189, 9217270189",
		"📍 Lajpat Nagar II, New Delhi"
	],
	link: "linktr.ee/orvellasalon",
	linkUrl: SITE.instagram,
	stats: {
		posts: "9",
		followers: "211",
		following: "0"
	},
	highlights: [
		{
			label: "Colour",
			cover: MEDIA.salonChandelier
		},
		{
			label: "Men's",
			cover: MEDIA.salonNails
		},
		{
			label: "Offers",
			cover: MEDIA.salonExtra1
		},
		{
			label: "What We Have",
			cover: MEDIA.logoMark
		}
	],
	posts: [
		{
			type: "image",
			src: MEDIA.salonLounge,
			caption: "Quiet luxury, every visit."
		},
		{
			type: "video",
			src: MEDIA.bridalReel,
			poster: MEDIA.salonExtra1,
			caption: "Bridal transformation in motion ✨"
		},
		{
			type: "image",
			src: MEDIA.salonChandelier,
			caption: "Gilded glow."
		},
		{
			type: "image",
			src: MEDIA.salonNails,
			caption: "Polished to perfection."
		},
		{
			type: "video",
			src: MEDIA.ambientReel,
			poster: MEDIA.salonChandelier,
			caption: "Step inside the Orvella experience 💛"
		},
		{
			type: "image",
			src: MEDIA.salonLounge2,
			caption: "Quiet corners."
		},
		{
			type: "image",
			src: MEDIA.salonExtra1,
			caption: "The bridal suite."
		},
		{
			type: "video",
			src: MEDIA.heroVideo,
			poster: MEDIA.salonLounge,
			caption: "Where every detail is intentional."
		},
		{
			type: "image",
			src: MEDIA.salonExtra2,
			caption: "The finish."
		}
	],
	reels: IG_REELS
};
MEDIA.salonExtra1, MEDIA.salonExtra2, MEDIA.salonChandelier;
MEDIA.salonLounge, MEDIA.salonChandelier, MEDIA.salonNails, MEDIA.salonLounge2, MEDIA.salonExtra1, MEDIA.salonExtra2, MEDIA.salonLounge, MEDIA.salonChandelier;
MEDIA.salonExtra1, MEDIA.salonExtra2, MEDIA.salonNails, MEDIA.salonLounge, MEDIA.salonChandelier, MEDIA.salonLounge2;
var TRANSFORMATIONS = [
	{
		before: MEDIA.transformBefore1,
		after: MEDIA.transformAfter1,
		label: "Colour & Cut"
	},
	{
		before: MEDIA.transformBefore2,
		after: MEDIA.transformAfter2,
		label: "Bridal Glam"
	},
	{
		before: MEDIA.transformBefore3,
		after: MEDIA.transformAfter3,
		label: "Keratin Smooth"
	}
];
MEDIA.salonLounge, MEDIA.salonChandelier, MEDIA.salonNails, MEDIA.salonLounge2, MEDIA.salonExtra1, MEDIA.salonExtra2, MEDIA.salonChandelier, MEDIA.salonLounge, MEDIA.salonNails;
var PRE_FOOTER_DEFAULT = {
	eyebrow: "Orvella Salon · New Delhi",
	quote: "Where craft meets quiet luxury.",
	imageKey: "home"
};
var PRE_FOOTER_BY_ROUTE = {
	"/about": {
		eyebrow: "The Orvella Story",
		quote: "Beauty, held with intention.",
		imageKey: "about"
	},
	"/bridal": {
		eyebrow: "Bridal Atelier",
		quote: "Every bride deserves her quiet morning.",
		imageKey: "bridal"
	},
	"/services": {
		eyebrow: "Our Craft",
		quote: "Precision is a form of devotion.",
		imageKey: "services"
	},
	"/contact": {
		eyebrow: "Visit Us",
		quote: "Your chair is waiting.",
		imageKey: "contact"
	}
};
//#endregion
export { SERVICES as a, TESTIMONIALS as c, waLink as d, PRE_FOOTER_DEFAULT as i, TRANSFORMATIONS as l, NAV_LINKS as n, SITE as o, PRE_FOOTER_BY_ROUTE as r, SOCIAL_LINKS as s, IG_PROFILE as t, WHATSAPP_URL as u };
