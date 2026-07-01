import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { i as PAGE_BANNERS, n as MEDIA } from "./constants-DQnu0zFC.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { t as MarqueeStrip } from "./MarqueeStrip-BUhUmcXv.mjs";
import { t as FinalCTA } from "./FinalCTA-BOrW8x6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BGA_RJwE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var salonChandelier = { url: MEDIA.salonChandelier };
var salonLounge = { url: MEDIA.salonLounge };
var salonLounge2 = { url: MEDIA.salonLounge2 };
var salonNails = { url: MEDIA.salonNails };
var CATEGORIES = [
	{
		id: "hair",
		title: "Hair",
		tagline: "Precision cuts. Editorial styling.",
		copy: "Every cut begins with a quiet conversation. We listen, study the way your hair falls, and craft a shape that grows out beautifully.",
		image: salonChandelier.url,
		items: [
			{
				name: "Signature Haircut",
				price: "₹1,800"
			},
			{
				name: "Creative Director Cut",
				price: "₹3,200"
			},
			{
				name: "Blow Dry & Styling",
				price: "₹1,200"
			},
			{
				name: "Hair Spa Ritual",
				price: "₹2,400"
			},
			{
				name: "Scalp Detox Treatment",
				price: "₹1,800"
			}
		]
	},
	{
		id: "colour",
		title: "Colour",
		tagline: "Light, dimension, intention.",
		copy: "From whisper-soft balayage to high-impact fashion tones, every formula is hand-mixed for your skin, your eyes, your story.",
		image: salonLounge2.url,
		items: [
			{
				name: "Global Colour",
				price: "₹3,800"
			},
			{
				name: "Root Touch-Up",
				price: "₹2,200"
			},
			{
				name: "Balayage / Ombré",
				price: "₹6,500"
			},
			{
				name: "Highlights — Full Head",
				price: "₹7,200"
			},
			{
				name: "Toner & Gloss",
				price: "₹2,000"
			}
		]
	},
	{
		id: "keratin",
		title: "Keratin & Botox",
		tagline: "Restorative smoothing rituals.",
		copy: "Editorial-grade smoothing treatments that respect the integrity of your hair while delivering glass-like shine and effortless movement.",
		image: salonLounge.url,
		items: [
			{
				name: "Brazilian Keratin",
				price: "₹8,500"
			},
			{
				name: "Hair Botox",
				price: "₹6,500"
			},
			{
				name: "Cysteine Smoothing",
				price: "₹7,200"
			},
			{
				name: "Olaplex Stand-Alone",
				price: "₹2,500"
			}
		]
	},
	{
		id: "skin",
		title: "Advanced Skincare",
		tagline: "Facials engineered for your skin.",
		copy: "Clinical-grade facials, hydrafacial protocols, and bespoke peels — every treatment begins with a consultation and a skin reading.",
		image: salonNails.url,
		items: [
			{
				name: "Signature Facial",
				price: "₹3,200"
			},
			{
				name: "HydraFacial Pro",
				price: "₹5,500"
			},
			{
				name: "Brightening Peel",
				price: "₹4,800"
			},
			{
				name: "Eye Lift Ritual",
				price: "₹1,800"
			}
		]
	},
	{
		id: "makeup",
		title: "Makeup Artistry",
		tagline: "From soft glow to high editorial.",
		copy: "Whether it's a quiet dinner or the cover of your story, our artists translate your mood into a finish that photographs flawlessly.",
		image: salonChandelier.url,
		items: [
			{
				name: "Day / Soft Glam",
				price: "₹3,500"
			},
			{
				name: "Evening / Party",
				price: "₹5,500"
			},
			{
				name: "HD Airbrush",
				price: "₹7,500"
			},
			{
				name: "Editorial Makeup",
				price: "₹9,500"
			}
		]
	},
	{
		id: "nails",
		title: "Nails & Hands",
		tagline: "Detailed. Considered. Lasting.",
		copy: "From a clean classic manicure to architectural nail-art, every set is finished with hand massage and warm towel ceremony.",
		image: salonNails.url,
		items: [
			{
				name: "Classic Manicure",
				price: "₹800"
			},
			{
				name: "Gel Manicure",
				price: "₹1,400"
			},
			{
				name: "Spa Pedicure",
				price: "₹1,200"
			},
			{
				name: "Nail Art — Per Nail",
				price: "₹150"
			}
		]
	}
];
function ServicesPage() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".sv-hero-banner", {
				scale: 1.12,
				duration: 1.8,
				ease: "power3.out",
				delay: .1
			});
			gsapWithCSS.from(".sv-hero-line", {
				yPercent: 110,
				opacity: 0,
				stagger: .12,
				duration: 1.2,
				ease: "power4.out",
				delay: .2
			});
			gsapWithCSS.from(".sv-hero-sub", {
				opacity: 0,
				y: 20,
				duration: .9,
				delay: .9,
				ease: "power3.out"
			});
			gsapWithCSS.utils.toArray(".sv-row").forEach((row) => {
				gsapWithCSS.from(row.querySelectorAll(".sv-row-anim"), {
					y: 60,
					opacity: 0,
					duration: 1,
					stagger: .1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: row,
						start: "top 75%"
					}
				});
				const img = row.querySelector(".sv-row-img");
				if (img) gsapWithCSS.to(img, {
					yPercent: -10,
					ease: "none",
					scrollTrigger: {
						trigger: row,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});
			gsapWithCSS.utils.toArray(".sv-price-row").forEach((row) => {
				gsapWithCSS.from(row, {
					opacity: 0,
					x: -20,
					duration: .6,
					ease: "power3.out",
					scrollTrigger: {
						trigger: row,
						start: "top 90%"
					}
				});
			});
			ScrollTrigger.refresh();
		}, root);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "bg-bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 overflow-hidden min-h-[min(72vh,820px)] flex items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PAGE_BANNERS.services,
						alt: "",
						className: "sv-hero-banner absolute inset-0 w-full h-full object-cover",
						loading: "eager"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-[1500px] mx-auto w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "[&_.eyebrow]:text-white/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "The Atelier Menu" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "heading-display mt-8 text-white",
								style: {
									fontSize: "clamp(3rem, 9vw, 9rem)",
									lineHeight: .95
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sv-hero-line inline-block",
										children: "Every service,"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sv-hero-line inline-block italic font-accent text-gold",
										children: "an experience."
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "sv-hero-sub mt-10 max-w-xl text-white/75 text-lg leading-relaxed",
								children: "A complete edit of hair, colour, skin, makeup, and nail services — each delivered with the same quiet precision and unhurried care."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, { text: "Hair · Colour · Keratin · Skincare · Makeup · Nails · Bridal · " }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 md:py-32 px-6 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] flex flex-col gap-32 md:gap-48",
					children: CATEGORIES.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: cat.id,
						className: `sv-row grid md:grid-cols-12 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-6 [direction:ltr]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden",
								style: { aspectRatio: "4 / 5" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cat.image,
									alt: cat.title,
									className: "sv-row-img sv-row-anim absolute inset-0 w-full h-[115%] object-cover",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 font-display text-6xl text-white/30 leading-none",
									children: ["0", i + 1]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6 [direction:ltr]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "sv-row-anim eyebrow",
									children: [
										"0",
										i + 1,
										" · ",
										cat.tagline
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "sv-row-anim heading-display mt-5 text-text-primary text-4xl md:text-6xl",
									children: cat.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "sv-row-anim mt-6 text-text-secondary leading-relaxed max-w-lg",
									children: cat.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "sv-row-anim mt-10 divide-y divide-border-subtle border-t border-border-subtle",
									children: cat.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "sv-price-row flex items-baseline justify-between gap-6 py-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-text-primary text-base md:text-lg font-display",
												children: it.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 mx-4 border-b border-dotted border-border-subtle translate-y-[-4px]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold tracking-widest text-sm",
												children: it.price
											})
										]
									}, it.name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									to: "/contact",
									variant: "ghost",
									className: "sv-row-anim mt-10",
									children: "Book this service"
								})
							]
						})]
					}, cat.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
		]
	});
}
//#endregion
export { ServicesPage as component };
