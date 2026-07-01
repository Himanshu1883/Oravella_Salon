import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { i as PAGE_BANNERS, n as MEDIA } from "./constants-CuQpxFf8.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { t as MarqueeStrip } from "./MarqueeStrip-BUhUmcXv.mjs";
import { t as FinalCTA } from "./FinalCTA-DjoHaFtR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CAfBMv1O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TIMELINE = [
	{
		year: "2018",
		title: "A quiet beginning",
		copy: "Orvella was born in a small studio in Lajpat Nagar with one chair, one mirror, and one belief — beauty should never feel rushed."
	},
	{
		year: "2020",
		title: "Our atelier",
		copy: "We moved into our current home: a softly lit, hand-finished space designed around the way light moves through the room."
	},
	{
		year: "2022",
		title: "The Bridal Studio",
		copy: "We launched a dedicated bridal wing — a private suite for brides who wanted their morning unhurried and entirely their own."
	},
	{
		year: "2024",
		title: "Beyond the chair",
		copy: "Skincare, advanced facials, and a fully extended menu of treatments — all delivered with the same quiet care."
	}
];
var VALUES = [
	{
		num: "01",
		title: "Quiet luxury",
		copy: "Nothing loud. Nothing rushed. A space that lets you exhale."
	},
	{
		num: "02",
		title: "Considered craft",
		copy: "Every cut, colour, and finish is the product of careful listening and confident hands."
	},
	{
		num: "03",
		title: "Honest counsel",
		copy: "We will tell you what works for you — not what is fashionable this season."
	}
];
var TEAM = [
	{
		name: "Aanya Mehra",
		role: "Founder & Creative Director",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop"
	},
	{
		name: "Ishaan Kapoor",
		role: "Senior Stylist · Colour",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop"
	},
	{
		name: "Riya Sharma",
		role: "Lead Bridal Artist",
		image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop"
	},
	{
		name: "Vikram Singh",
		role: "Skin Therapist",
		image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop"
	}
];
function AboutPage() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".ab-hero-line", {
				yPercent: 110,
				opacity: 0,
				stagger: .12,
				duration: 1.2,
				ease: "power4.out",
				delay: .3
			});
			gsapWithCSS.from(".ab-hero-banner", {
				scale: 1.12,
				duration: 1.8,
				ease: "power3.out",
				delay: .2
			});
			gsapWithCSS.from(".ab-hero-sub", {
				opacity: 0,
				y: 20,
				duration: .9,
				delay: 1,
				ease: "power3.out"
			});
			const words = root.current.querySelectorAll(".ab-reveal-word");
			gsapWithCSS.fromTo(words, {
				opacity: .15,
				y: 8
			}, {
				opacity: 1,
				y: 0,
				stagger: .04,
				ease: "none",
				scrollTrigger: {
					trigger: ".ab-story",
					start: "top 80%",
					end: "bottom 60%",
					scrub: .6
				}
			});
			root.current.querySelectorAll(".ab-counter").forEach((el) => {
				const target = Number(el.dataset.target || "0");
				const obj = { v: 0 };
				gsapWithCSS.to(obj, {
					v: target,
					duration: 2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: el,
						start: "top 85%"
					},
					onUpdate: () => {
						el.textContent = Math.round(obj.v).toString();
					}
				});
			});
			gsapWithCSS.utils.toArray(".ab-tl-item").forEach((item) => {
				gsapWithCSS.from(item, {
					x: -40,
					opacity: 0,
					duration: .9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: item,
						start: "top 82%"
					}
				});
			});
			gsapWithCSS.from(".ab-value", {
				y: 60,
				opacity: 0,
				stagger: .15,
				duration: .9,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".ab-values",
					start: "top 75%"
				}
			});
			gsapWithCSS.from(".ab-team-card", {
				y: 60,
				opacity: 0,
				stagger: .1,
				duration: .8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".ab-team",
					start: "top 75%"
				}
			});
			gsapWithCSS.to(".ab-parallax", {
				yPercent: -15,
				ease: "none",
				scrollTrigger: {
					trigger: ".ab-parallax-section",
					start: "top bottom",
					end: "bottom top",
					scrub: true
				}
			});
			ScrollTrigger.refresh();
		}, root);
		return () => ctx.revert();
	}, []);
	const storyWords = "We built Orvella for people who notice the details. The light. The textures. The quiet. We do not believe beauty has to shout to be felt.".split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "bg-bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 overflow-hidden min-h-[min(72vh,820px)] flex items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PAGE_BANNERS.about,
						alt: "",
						className: "ab-hero-banner absolute inset-0 w-full h-full object-cover",
						loading: "eager"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-[1500px] mx-auto w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "[&_.eyebrow]:text-white/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Our Story" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "heading-display mt-8 text-white",
								style: {
									fontSize: "clamp(3rem, 8vw, 8rem)",
									lineHeight: .95
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ab-hero-line inline-block",
											children: "Crafted"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ab-hero-line inline-block",
											children: "with"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ab-hero-line inline-block italic font-accent text-gold",
											children: "passion."
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ab-hero-sub mt-8 max-w-lg text-white/75 text-lg leading-relaxed",
								children: "Orvella is a love letter to slow beauty — a salon designed around how it feels to be unhurried, listened to, and quietly transformed."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, { text: "Quiet · Considered · Crafted · Considered · Quiet · " }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "ab-story py-32 md:py-48 px-6 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-5xl mx-auto font-display text-text-primary text-3xl md:text-5xl lg:text-6xl leading-tight text-center",
					children: storyWords.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ab-reveal-word inline-block mr-[0.2em]",
						children: w === "quiet." ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "font-accent italic text-gold",
							children: w
						}) : w
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 md:px-12 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1300px] grid grid-cols-2 md:grid-cols-4 border-y border-border-subtle divide-x divide-border-subtle",
					children: [
						{
							n: 7,
							label: "Years of craft"
						},
						{
							n: 500,
							label: "Happy clients"
						},
						{
							n: 120,
							label: "Bridal stories"
						},
						{
							n: 24,
							label: "Expert artists"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 px-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-5xl md:text-6xl text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ab-counter",
								"data-target": s.n,
								children: "0"
							}), "+"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-4 text-text-secondary",
							children: s.label
						})]
					}, s.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 md:py-32 px-6 md:px-12 bg-bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1100px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "The Journey" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-display mt-6 text-text-primary text-4xl md:text-6xl",
							children: [
								"From one chair, to an ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "font-accent italic text-gold",
									children: "atelier"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-16 relative border-l border-border-subtle pl-10 md:pl-16 space-y-16",
							children: TIMELINE.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "ab-tl-item relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -left-[58px] md:-left-[82px] top-1 px-2.5 py-1 text-[0.65rem] tracking-[0.25em] text-gold bg-bg-secondary border border-gold",
										children: t.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "heading-display text-text-primary text-2xl md:text-4xl",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-text-secondary leading-relaxed max-w-xl",
										children: t.copy
									})
								]
							}, t.year))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "ab-values py-24 md:py-32 px-6 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "What We Believe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid md:grid-cols-3 gap-10 md:gap-16",
						children: VALUES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ab-value",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-6xl text-gold/30",
									children: v.num
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "heading-display mt-4 text-text-primary text-3xl",
									children: v.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-text-secondary leading-relaxed",
									children: v.copy
								})
							]
						}, v.num))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "ab-parallax-section relative h-[60vh] min-h-[420px] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: MEDIA.salonChandelier,
						alt: "",
						className: "ab-parallax absolute inset-0 w-full h-[120%] object-cover",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-3xl text-center font-display italic text-white text-3xl md:text-5xl",
							children: "\"The space, the products, the people — every detail is intentional.\""
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "ab-team py-24 md:py-32 px-6 md:px-12 bg-bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "The Atelier" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-display mt-6 text-text-primary text-4xl md:text-6xl",
							children: [
								"Meet our ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "font-accent italic text-gold",
									children: "team"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
							children: TEAM.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "ab-team-card group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden",
										style: { aspectRatio: "3 / 4" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: m.image,
											alt: m.name,
											loading: "lazy",
											className: "w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "heading-display mt-5 text-text-primary text-2xl",
										children: m.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow mt-2",
										children: m.role
									})
								]
							}, m.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
								to: "/contact",
								variant: "ghost",
								children: "Meet us in person"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
		]
	});
}
//#endregion
export { AboutPage as component };
