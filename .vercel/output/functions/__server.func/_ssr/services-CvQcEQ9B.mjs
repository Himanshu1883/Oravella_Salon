import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { r as SERVICES_HERO_BANNERS, t as MEDIA } from "./media-VvPOLAU-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { t as MarqueeStrip } from "./MarqueeStrip-BUhUmcXv.mjs";
import { T as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as Swiper, n as Autoplay, o as SwiperSlide, r as Pagination, t as EffectFade } from "../_libs/swiper.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CvQcEQ9B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServicesHeroSlider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sv-hero-slider absolute inset-0 z-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
			modules: [
				Autoplay,
				EffectFade,
				Pagination
			],
			effect: "fade",
			fadeEffect: { crossFade: true },
			loop: true,
			speed: 1600,
			autoplay: {
				delay: 4800,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			},
			pagination: {
				clickable: true,
				el: ".sv-hero-pagination",
				bulletClass: "sv-hero-pagination__bullet",
				bulletActiveClass: "sv-hero-pagination__bullet--active"
			},
			className: "sv-hero-swiper h-full w-full",
			children: SERVICES_HERO_BANNERS.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "sv-hero-banner h-full w-full object-cover",
				loading: i === 0 ? "eager" : "lazy",
				decoding: "async"
			}) }, src))
		})
	});
}
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
				price: "₹1,800",
				detail: "Consultation, precision cut, and a tailored finish with professional styling products suited to your hair type."
			},
			{
				name: "Creative Director Cut",
				price: "₹3,200",
				detail: "A senior stylist shapes your look with advanced technique — ideal for transformative cuts and editorial silhouettes."
			},
			{
				name: "Blow Dry & Styling",
				price: "₹1,200",
				detail: "Wash, blow-dry, and finish with heat styling — smooth, voluminous, or softly waved to your preference."
			},
			{
				name: "Hair Spa Ritual",
				price: "₹2,400",
				detail: "Deep-conditioning mask, scalp massage, and steam infusion to restore shine, softness, and manageability."
			},
			{
				name: "Scalp Detox Treatment",
				price: "₹1,800",
				detail: "Clarifying cleanse and scalp therapy to remove buildup, rebalance oil, and refresh the roots."
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
				price: "₹3,800",
				detail: "Full-head permanent or demi colour with bond-protecting care and a gloss finish."
			},
			{
				name: "Root Touch-Up",
				price: "₹2,200",
				detail: "Targeted regrowth coverage blended seamlessly into your existing tone."
			},
			{
				name: "Balayage / Ombré",
				price: "₹6,500",
				detail: "Hand-painted lightening for natural dimension — customised placement and tone."
			},
			{
				name: "Highlights — Full Head",
				price: "₹7,200",
				detail: "Foil or babylight technique for brightness and depth across the full head."
			},
			{
				name: "Toner & Gloss",
				price: "₹2,000",
				detail: "Refreshes tone, adds mirror shine, and extends the life of your colour between visits."
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
				price: "₹8,500",
				detail: "Long-lasting frizz control and smoothness with formaldehyde-free formulas where possible."
			},
			{
				name: "Hair Botox",
				price: "₹6,500",
				detail: "Intensive repair treatment that fills porosity and restores supple, reflective hair."
			},
			{
				name: "Cysteine Smoothing",
				price: "₹7,200",
				detail: "Gentle amino-acid smoothing for softer texture without heavy flatness."
			},
			{
				name: "Olaplex Stand-Alone",
				price: "₹2,500",
				detail: "Bond-rebuilding treatment to strengthen hair before or after chemical services."
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
				price: "₹3,200",
				detail: "Cleanse, exfoliate, extractions if needed, mask, and massage tailored to your skin type."
			},
			{
				name: "HydraFacial Pro",
				price: "₹5,500",
				detail: "Multi-step hydradermabrasion for deep cleanse, peel, extraction, and serum infusion."
			},
			{
				name: "Brightening Peel",
				price: "₹4,800",
				detail: "Professional peel to even tone, soften pigmentation, and refine texture."
			},
			{
				name: "Eye Lift Ritual",
				price: "₹1,800",
				detail: "Targeted treatment for the delicate eye area — de-puff, brighten, and smooth fine lines."
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
				price: "₹3,500",
				detail: "Natural, polished makeup for everyday events — skin-first with soft definition."
			},
			{
				name: "Evening / Party",
				price: "₹5,500",
				detail: "Elevated glam with richer colour, contour, and long-wear products for events."
			},
			{
				name: "HD Airbrush",
				price: "₹7,500",
				detail: "Flawless airbrush base for photography, film, and occasions that demand perfection."
			},
			{
				name: "Editorial Makeup",
				price: "₹9,500",
				detail: "High-fashion creative looks for shoots, runway, and statement occasions."
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
				price: "₹800",
				detail: "Nail shaping, cuticle care, hand massage, and polish of your choice."
			},
			{
				name: "Gel Manicure",
				price: "₹1,400",
				detail: "Long-wear gel colour with prep, cure, and a high-shine chip-resistant finish."
			},
			{
				name: "Spa Pedicure",
				price: "₹1,200",
				detail: "Soak, exfoliation, callus care, massage, and polish — finished with warm towels."
			},
			{
				name: "Nail Art — Per Nail",
				price: "₹150",
				detail: "Custom art, accents, or French details added to any manicure or gel service."
			}
		]
	}
];
function ServicePriceList({ items }) {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "sv-price-list mt-10 border-t border-border-subtle",
		children: items.map((it, idx) => {
			const isOpen = open === it.name;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "sv-price-row border-b border-border-subtle",
				"data-from": idx % 2 === 0 ? "left" : "right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "group flex w-full items-center gap-3 py-4 text-left transition-colors hover:bg-bg-surface/30 md:gap-4 md:py-5",
					onClick: () => setOpen(isOpen ? null : it.name),
					"aria-expanded": isOpen,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 font-display text-base text-text-primary md:text-lg",
							children: it.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden min-w-[2rem] flex-1 border-b border-dotted border-border-subtle sm:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 font-body text-sm tracking-widest text-gold",
							children: it.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-gold/60 bg-gold/10 text-gold" : "border-border-subtle text-text-muted group-hover:border-gold/40 group-hover:text-gold"}`,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `sv-price-panel grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl pb-5 pr-12 text-sm leading-relaxed text-text-secondary md:pb-6 md:text-[0.95rem]",
							children: it.detail
						})
					})
				})]
			}, it.name);
		})
	});
}
function ServicesPage() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".sv-hero-slider", {
				scale: 1.08,
				duration: 2,
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
			gsapWithCSS.utils.toArray(".sv-row").forEach((row, rowIdx) => {
				const imgCol = row.querySelector(".sv-row-img-col");
				const textCol = row.querySelector(".sv-row-text-col");
				const fromImgX = rowIdx % 2 === 0 ? -72 : 72;
				const fromTextX = rowIdx % 2 === 0 ? 72 : -72;
				if (imgCol) gsapWithCSS.from(imgCol, {
					x: fromImgX,
					opacity: 0,
					duration: 1.05,
					ease: "power3.out",
					scrollTrigger: {
						trigger: row,
						start: "top 78%"
					}
				});
				if (textCol) gsapWithCSS.from(textCol, {
					x: fromTextX,
					opacity: 0,
					duration: 1.05,
					ease: "power3.out",
					delay: .08,
					scrollTrigger: {
						trigger: row,
						start: "top 78%"
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
				const fromLeft = row.dataset.from === "left";
				gsapWithCSS.from(row, {
					opacity: 0,
					x: fromLeft ? -56 : 56,
					duration: .85,
					ease: "power3.out",
					scrollTrigger: {
						trigger: row,
						start: "top 92%"
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
				className: "sv-hero relative flex min-h-[min(72vh,820px)] items-end overflow-hidden px-6 pt-40 pb-24 md:px-12 md:pt-56 md:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesHeroSlider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/45 to-black/75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sv-hero-pagination absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2 md:bottom-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto w-full max-w-[1500px]",
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
										className: "sv-hero-line inline-block font-accent italic text-gold",
										children: "an experience."
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "sv-hero-sub mt-10 max-w-xl text-lg leading-relaxed text-white/75",
								children: "A complete edit of hair, colour, skin, makeup, and nail services — each delivered with the same quiet precision and unhurried care."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, { text: "Hair · Colour · Keratin · Skincare · Makeup · Nails · Bridal · " }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-24 md:px-12 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-[1400px] flex-col gap-32 md:gap-48",
					children: CATEGORIES.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: cat.id,
						className: `sv-row grid items-center gap-10 md:grid-cols-12 md:gap-16 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sv-row-img-col md:col-span-6 [direction:ltr]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden",
								style: { aspectRatio: "4 / 5" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cat.image,
									alt: cat.title,
									className: "sv-row-img absolute inset-0 h-[115%] w-full object-cover",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-4 top-4 font-display text-6xl leading-none text-white/30",
									children: ["0", i + 1]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sv-row-text-col md:col-span-6 [direction:ltr]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow",
									children: [
										"0",
										i + 1,
										" · ",
										cat.tagline
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "heading-display mt-5 text-4xl text-text-primary md:text-6xl",
									children: cat.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-lg leading-relaxed text-text-secondary",
									children: cat.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePriceList, { items: cat.items }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									to: "/contact",
									variant: "ghost",
									className: "mt-10",
									children: "Book this service"
								})
							]
						})]
					}, cat.id))
				})
			})
		]
	});
}
//#endregion
export { ServicesPage as component };
