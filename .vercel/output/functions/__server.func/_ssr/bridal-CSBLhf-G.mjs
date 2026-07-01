import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { i as PAGE_BANNERS, n as MEDIA } from "./constants-DQnu0zFC.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { t as MarqueeStrip } from "./MarqueeStrip-BUhUmcXv.mjs";
import { t as FinalCTA } from "./FinalCTA-BOrW8x6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bridal-CSBLhf-G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lounge2 = { url: MEDIA.salonLounge2 };
var chandelier = { url: MEDIA.salonChandelier };
var nails = { url: MEDIA.salonNails };
var PACKAGES = [
	{
		name: "The Engagement",
		price: "₹28,000",
		description: "A soft, luminous introduction. Hair, makeup, and a pre-event skin ritual.",
		includes: [
			"Skin prep facial (1 session)",
			"HD airbrush makeup",
			"Hair styling",
			"Draping assistance"
		]
	},
	{
		name: "The Wedding",
		price: "₹65,000",
		accent: true,
		description: "Our signature bridal experience. Two events, full skin prep, and a dedicated artist.",
		includes: [
			"3-session skin prep ritual",
			"Full bridal HD makeup",
			"Hair styling + accessories",
			"Saree / lehenga draping",
			"Trial session included"
		]
	},
	{
		name: "The Heritage",
		price: "₹1,20,000",
		description: "Three to four events. Multi-day care across pre-bridal, mehendi, sangeet, and wedding.",
		includes: [
			"5-session skin & hair prep",
			"Dedicated lead artist + assistant",
			"On-location service",
			"All event looks designed in advance",
			"Family touch-ups included"
		]
	}
];
var GALLERY = [
	{
		image: lounge2.url,
		span: "col-span-2 row-span-2"
	},
	{
		image: chandelier.url,
		span: ""
	},
	{
		image: nails.url,
		span: ""
	},
	{
		image: lounge2.url,
		span: "col-span-2"
	},
	{
		image: chandelier.url,
		span: ""
	},
	{
		image: nails.url,
		span: ""
	}
];
var PROCESS = [
	{
		step: "01",
		title: "Consultation",
		copy: "We meet, we listen. Mood boards, dates, expectations — and a skin and hair reading."
	},
	{
		step: "02",
		title: "Prep Rituals",
		copy: "Skin and hair are prepared across multiple sessions in the weeks leading up to your day."
	},
	{
		step: "03",
		title: "Trial Session",
		copy: "A full trial of your bridal look, photographed in natural and warm light."
	},
	{
		step: "04",
		title: "The Day",
		copy: "An unhurried morning. Your dedicated artist. Quiet music. And a flawless finish."
	}
];
function BridalPage() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".br-hero-line", {
				yPercent: 110,
				opacity: 0,
				stagger: .14,
				duration: 1.3,
				ease: "power4.out",
				delay: .3
			});
			gsapWithCSS.from(".br-hero-sub, .br-hero-cta", {
				opacity: 0,
				y: 18,
				duration: .9,
				delay: 1.1,
				stagger: .1,
				ease: "power3.out"
			});
			gsapWithCSS.from(".br-hero-banner", {
				scale: 1.15,
				duration: 2.4,
				ease: "power2.out"
			});
			const q = root.current.querySelectorAll(".br-quote-word");
			gsapWithCSS.fromTo(q, { opacity: .12 }, {
				opacity: 1,
				stagger: .05,
				ease: "none",
				scrollTrigger: {
					trigger: ".br-quote",
					start: "top 80%",
					end: "bottom 60%",
					scrub: .6
				}
			});
			gsapWithCSS.from(".br-package", {
				y: 80,
				opacity: 0,
				stagger: .15,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".br-packages",
					start: "top 75%"
				}
			});
			gsapWithCSS.from(".br-gallery-item", {
				opacity: 0,
				y: 60,
				stagger: .08,
				duration: .9,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".br-gallery",
					start: "top 75%"
				}
			});
			gsapWithCSS.utils.toArray(".br-step").forEach((step) => {
				gsapWithCSS.from(step, {
					x: -40,
					opacity: 0,
					duration: .9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: step,
						start: "top 80%"
					}
				});
			});
			ScrollTrigger.refresh();
		}, root);
		return () => ctx.revert();
	}, []);
	const qWords = "She did not need to be perfect. She needed to feel like herself, only luminous.".split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "bg-bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-screen min-h-[680px] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PAGE_BANNERS.bridal,
						alt: "",
						className: "br-hero-banner absolute inset-0 w-full h-full object-cover",
						loading: "eager"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/95" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-28 max-w-[1500px] mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-white/80 mb-6",
								children: "Bridal Studio · By Orvella"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "heading-display text-white",
								style: {
									fontSize: "clamp(3rem, 9vw, 10rem)",
									lineHeight: .92
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "br-hero-line inline-block",
											children: "For your"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "br-hero-line inline-block",
											children: "most"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "br-hero-line inline-block italic font-accent text-gold",
											children: "beautiful chapter."
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "br-hero-sub mt-8 max-w-lg text-white/70 text-lg leading-relaxed",
								children: "A bridal studio inside Orvella — for the woman who wants to feel recognisably herself on the most photographed day of her life."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "br-hero-cta mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									to: "/contact",
									onDark: true,
									children: "Book Consultation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									href: "#packages",
									variant: "outline",
									onDark: true,
									children: "View Packages"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, { text: "Bridal · Engagement · Mehendi · Sangeet · Wedding · Reception · " }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "br-quote py-32 md:py-48 px-6 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-4xl mx-auto font-display italic text-text-primary text-3xl md:text-5xl lg:text-6xl leading-tight text-center",
					children: qWords.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "br-quote-word inline-block mr-[0.25em]",
						children: w
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-center mt-10 text-text-secondary",
					children: "— Orvella Bridal Studio"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "packages",
				className: "br-packages py-24 md:py-32 px-6 md:px-12 bg-bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Curated Packages" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-display mt-6 text-text-primary text-4xl md:text-6xl max-w-2xl",
							children: [
								"A package for every ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "font-accent italic text-gold",
									children: "chapter"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-3 gap-6 lg:gap-8 mt-16",
							children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `br-package relative p-8 md:p-10 border ${p.accent ? "border-gold bg-bg-surface" : "border-border-subtle bg-bg-primary"} flex flex-col`,
								children: [
									p.accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-0 right-0 -translate-y-1/2 bg-gold text-bg-primary text-[0.6rem] tracking-[0.3em] uppercase px-4 py-1.5",
										children: "Most chosen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 font-display text-5xl text-text-primary",
										children: p.price
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-text-secondary leading-relaxed",
										children: p.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 space-y-3 flex-1",
										children: p.includes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-sm text-text-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold mt-1",
												children: "◆"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i })]
										}, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
										to: "/contact",
										variant: p.accent ? "gold" : "ghost",
										className: "mt-10 w-full",
										children: "Enquire"
									})
								]
							}, p.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "br-gallery py-24 md:py-32 px-6 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Bridal Gallery" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-display mt-6 text-text-primary text-4xl md:text-6xl max-w-2xl",
							children: [
								"Brides we have ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "font-accent italic text-gold",
									children: "dressed"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4",
							children: GALLERY.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `br-gallery-item relative overflow-hidden group ${g.span}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: g.image,
									alt: "",
									loading: "lazy",
									className: "w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
								})
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 md:py-32 px-6 md:px-12 bg-bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1100px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "The Process" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-display mt-6 text-text-primary text-4xl md:text-6xl",
							children: [
								"How we work with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "font-accent italic text-gold",
									children: "you"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-16 relative border-l border-border-subtle pl-10 md:pl-16 space-y-16",
							children: PROCESS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "br-step relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -left-[52px] md:-left-[78px] top-1 w-9 h-9 grid place-items-center rounded-full border border-gold text-gold text-xs tracking-widest bg-bg-secondary",
										children: s.step
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "heading-display text-text-primary text-3xl md:text-4xl",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-text-secondary leading-relaxed max-w-xl",
										children: s.copy
									})
								]
							}, s.step))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
		]
	});
}
//#endregion
export { BridalPage as component };
