import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as MEDIA } from "./media-VvPOLAU-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { a as SERVICES, c as TESTIMONIALS, l as TRANSFORMATIONS, o as SITE, t as IG_PROFILE } from "./constants-B_E4oYm6.mjs";
import { D as Camera, N as Grid3x3, S as Clapperboard, _ as Heart, a as Settings, c as Play, j as SquareUser, p as MessageCircle, s as Plus } from "../_libs/lucide-react.mjs";
import { a as Swiper, i as Navigation, n as Autoplay, o as SwiperSlide, t as EffectFade } from "../_libs/swiper.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsGRzJsn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroSection() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({
				delay: .3,
				defaults: { ease: "power4.out" }
			}).from(".hero-video", {
				scale: 1.2,
				duration: 2.2,
				ease: "power2.out"
			}, 0).from(".hero-eyebrow", {
				y: 20,
				opacity: 0,
				duration: .8
			}, .4).from(".hero-line", {
				yPercent: 110,
				opacity: 0,
				stagger: .12,
				duration: 1.2
			}, .5).from(".hero-sub", {
				y: 20,
				opacity: 0,
				duration: .8
			}, 1.1).fromTo(".hero-actions .hero-btn", { y: 24 }, {
				y: 0,
				stagger: .1,
				duration: .7,
				clearProps: "transform"
			}, 1.3).from(".hero-scroll", {
				opacity: 0,
				duration: .8
			}, 1.6);
		}, root);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		className: "relative min-h-[100dvh] min-h-[640px] w-full overflow-hidden bg-bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "hero-video absolute inset-0 h-full w-full scale-105 object-cover object-[62%_center] md:object-[58%_center]",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "metadata",
				poster: MEDIA.salonChandelier,
				src: MEDIA.heroVideo
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(90deg, rgba(6,6,6,0.72) 0%, rgba(6,6,6,0.55) 38%, rgba(6,6,6,0.22) 58%, rgba(6,6,6,0.06) 72%, rgba(6,6,6,0.22) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(6,6,6,0.22) 0%, transparent 40%, rgba(6,6,6,0.38) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-[100dvh] w-full items-end pb-10 pt-24 sm:items-center sm:pb-0 sm:pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex w-full max-w-[1500px] px-6 md:px-12 lg:px-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-content pb-[max(0.5rem,env(safe-area-inset-bottom))]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-eyebrow hero-eyebrow-label mb-5 md:mb-7",
								children: "Where luxury meets beauty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-title",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hero-line hero-title-line1",
										children: "The art of"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "hero-line hero-title-line2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
												className: "text-white",
												children: "Timeless"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
												className: "hero-title-script",
												children: "Beauty"
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-sub hero-body",
								children: "Bespoke hair, skin, makeup and aesthetic experiences crafted by award-winning artists in an atmosphere of elegance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hero-btn hero-btn--solid",
									children: "Book your experience"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "hero-btn hero-btn--outline",
									children: "Luxury consultation"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-scroll absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 md:right-10 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.58rem] uppercase tracking-[0.38em] text-white/40",
					style: { writingMode: "vertical-rl" },
					children: "Scroll to explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-20 w-px bg-gradient-to-b from-white/45 to-transparent" })]
			})
		]
	});
}
var COLLAGE = [
	{
		src: MEDIA.salonReception,
		alt: "Orvella Salon reception and styling wall",
		pos: "object-[50%_20%]",
		offset: "md:-translate-y-10"
	},
	{
		src: MEDIA.salonRelaxationLounge,
		alt: "Backwash and relaxation lounge",
		pos: "object-[50%_10%]",
		offset: "md:translate-y-8"
	},
	{
		src: MEDIA.salonMinimalLuxury,
		alt: "Waiting lounge seating",
		pos: "object-[50%_15%]",
		offset: "md:-translate-y-4"
	}
];
var SLIDES = [
	{
		src: MEDIA.salonHairProducts,
		alt: "Premium professional hair care shelf"
	},
	{
		src: MEDIA.salonChandelier,
		alt: "Crystal chandelier detail"
	},
	{
		src: MEDIA.salonNailStudio,
		alt: "Nail extension studio corner"
	}
];
var AUTOPLAY_MS$1 = 4800;
var ARCH_COLLAGE = "999px 999px 14px 14px / 140px 140px 14px 14px";
var ARCH_SLIDER = "180px 180px 16px 16px / 90px 90px 16px 16px";
function AboutIntro() {
	const root = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const dragStartX = (0, import_react.useRef)(null);
	const reduceMotion = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}, []);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			const words = root.current.querySelectorAll(".reveal-word");
			gsapWithCSS.fromTo(words, {
				opacity: .08,
				y: 14
			}, {
				opacity: 1,
				y: 0,
				stagger: .04,
				ease: "none",
				scrollTrigger: {
					trigger: ".about-heading",
					start: "top 85%",
					end: "bottom 55%",
					scrub: .5
				}
			});
			if (!reduceMotion.current) gsapWithCSS.utils.toArray(".collage-frame").forEach((frame, i) => {
				gsapWithCSS.fromTo(frame, { clipPath: "inset(0 0 100% 0)" }, {
					clipPath: "inset(0 0 0% 0)",
					duration: 1.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: frame,
						start: "top 90%"
					},
					delay: i * .12
				});
			});
		}, root);
		return () => ctx.revert();
	}, []);
	const goTo = (0, import_react.useCallback)((next) => {
		setIndex((next + SLIDES.length) % SLIDES.length);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isPaused || reduceMotion.current) return;
		const t = setInterval(() => goTo(index + 1), AUTOPLAY_MS$1);
		return () => clearInterval(t);
	}, [
		index,
		isPaused,
		goTo
	]);
	(0, import_react.useEffect)(() => {
		const slides = trackRef.current?.querySelectorAll(".slide");
		if (!slides) return;
		slides.forEach((s, i) => {
			gsapWithCSS.to(s, {
				opacity: i === index ? 1 : 0,
				scale: i === index ? 1 : 1.04,
				duration: reduceMotion.current ? .01 : .9,
				ease: "power2.out",
				pointerEvents: i === index ? "auto" : "none"
			});
		});
	}, [index]);
	const onPointerDown = (e) => {
		dragStartX.current = e.clientX;
	};
	const onPointerUp = (e) => {
		if (dragStartX.current === null) return;
		const delta = e.clientX - dragStartX.current;
		if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1));
		dragStartX.current = null;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		className: "relative overflow-hidden bg-bg-primary px-6 pt-28 pb-10 md:px-12 md:pt-40 md:pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-16 max-w-3xl text-center md:mb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "About Orvella" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "about-heading reveal-heading heading-display mt-6 text-3xl leading-tight text-text-primary md:text-5xl lg:text-6xl",
						children: "A unisex hair studio built for every kind of confidence.".split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "reveal-word mr-[0.25em] inline-block",
							children: w === "confidence." ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-accent italic text-gold",
								children: w
							}) : w
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-text-secondary",
						children: "Orvella Salon is a premium unisex hair destination in the heart of Lajpat Nagar II — one chair for her, one for him, the same uncompromising standard for both. From precision cuts to colour correction and keratin therapy, every service is led by stylists trained on the same craft, in a space designed to feel as considered as the work itself."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-16 max-w-[1500px] md:mb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "about-collage-scroll -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0",
					children: COLLAGE.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `collage-frame relative w-[78vw] shrink-0 snap-center overflow-hidden md:w-auto ${item.offset}`,
						style: {
							aspectRatio: "3 / 4",
							borderRadius: ARCH_COLLAGE
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							loading: "lazy",
							draggable: false,
							className: `collage-img absolute inset-0 h-full w-full object-cover ${item.pos}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0",
							style: { boxShadow: "inset 0 0 0 2px var(--accent-gold-muted)" }
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl",
				onMouseEnter: () => setIsPaused(true),
				onMouseLeave: () => setIsPaused(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: trackRef,
						className: "relative w-full overflow-hidden",
						style: {
							aspectRatio: "16 / 9",
							borderRadius: ARCH_SLIDER
						},
						onPointerDown,
						onPointerUp,
						children: [SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.src,
							alt: s.alt,
							loading: i === 0 ? "eager" : "lazy",
							draggable: false,
							className: "slide absolute inset-0 h-full w-full object-cover object-[50%_15%]",
							style: { opacity: i === index ? 1 : 0 }
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Previous slide",
						onClick: () => goTo(index - 1),
						className: "absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-bg-primary/80 text-gold backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-bg-primary md:-left-6 md:h-12 md:w-12",
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Next slide",
						onClick: () => goTo(index + 1),
						className: "absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-bg-primary/80 text-gold backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-bg-primary md:-right-6 md:h-12 md:w-12",
						children: "›"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex justify-center gap-2",
						children: SLIDES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Go to slide ${i + 1}`,
							onClick: () => goTo(i),
							className: `h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-gold" : "w-1.5 bg-gold-muted"}`
						}, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "inline-flex items-center gap-3 eyebrow gold-underline text-gold",
					children: "Explore The Salon →"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .about-collage-scroll {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .about-collage-scroll::-webkit-scrollbar {
          display: none;
        }
      ` })
		]
	});
}
var FEATURES = [
	{
		eyebrow: "01 — Product Philosophy",
		title: "Salon-grade care,",
		accent: "every wash.",
		copy: "We stock only professional lines trusted by working stylists — nourishing shampoos, bond-repair masks and colour-safe formulas chosen for how they perform, not how they photograph.",
		detail: "Every product on our shelves is selected by the team that uses it daily: Olaplex for repair, Kérastase for nourishment, and colour-protect ranges for clients who refresh their tone often. We patch-test, we explain the routine, and we send you home with exactly what your hair needs — nothing more.",
		img: MEDIA.salonHairProducts,
		alt: "Shelves of premium professional hair care products",
		pos: "object-[50%_30%]"
	},
	{
		eyebrow: "02 — The Wash Bar",
		title: "A pause,",
		accent: "before the work begins.",
		copy: "Reclining backwash chairs and a warm-lit product wall turn the first step of any service into a moment of quiet — the ritual that sets the tone for everything after.",
		detail: "The wash bar is where your appointment actually starts. Heated basins, scalp massage, and a product consultation happen before scissors or colour touch your hair. It is deliberate — we believe great results begin with how you are cared for in the first ten minutes.",
		img: MEDIA.salonRelaxationLounge,
		alt: "Relaxation lounge with backwash chairs",
		pos: "object-[50%_25%]"
	},
	{
		eyebrow: "03 — Ambience",
		title: "Light that",
		accent: "flatters, not flattens.",
		copy: "Crystal fixtures and warm wood panelling were chosen deliberately — true-to-life colour under the lights that matter most, and a room that photographs as good as it feels.",
		detail: "Lighting at Orvella is calibrated for colour work: warm enough to feel inviting, bright enough to read tone accurately at the mirror. Wood accents, burgundy seating, and soft reflections off crystal fixtures create a space that feels intimate without feeling cramped.",
		img: MEDIA.salonChandelier,
		alt: "Crystal chandelier detail",
		pos: "object-[50%_35%]"
	},
	{
		eyebrow: "04 — The Lounge",
		title: "Minimal by design,",
		accent: "generous by nature.",
		copy: "A calm waiting room with tufted seating and soft daylight — for the ten minutes before your name is called, or the coffee you didn't expect to be offered.",
		detail: "We kept the lounge uncluttered on purpose: comfortable seating, natural light, and a quiet corner to take a call or flip through a lookbook. Whether you are in for a quick trim or a three-hour bridal trial, the wait should feel like part of the experience — not an afterthought.",
		img: MEDIA.salonMinimalLuxury,
		alt: "Minimal luxury waiting lounge",
		pos: "object-[50%_30%]"
	}
];
var ARCH_FEATURE = "999px 999px 14px 14px / 72px 72px 14px 14px";
function SalonShowcase() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.utils.toArray(".feature-row").forEach((row, i) => {
				const img = row.querySelector(".feature-frame");
				const text = row.querySelectorAll(".feature-text > *");
				if (img) gsapWithCSS.fromTo(img, { clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }, {
					clipPath: "inset(0 0% 0 0)",
					duration: 1.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: row,
						start: "top 78%"
					}
				});
				gsapWithCSS.fromTo(text, {
					opacity: 0,
					y: 24
				}, {
					opacity: 1,
					y: 0,
					stagger: .08,
					duration: .8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: row,
						start: "top 72%"
					}
				});
			});
			gsapWithCSS.fromTo(".reel-copy > *", {
				opacity: 0,
				y: 28
			}, {
				opacity: 1,
				y: 0,
				stagger: .1,
				duration: .85,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".reel-wrap",
					start: "top 78%"
				}
			});
			gsapWithCSS.fromTo(".reel-card", {
				opacity: 0,
				scale: 1.03
			}, {
				opacity: 1,
				scale: 1,
				stagger: .12,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".reel-wrap",
					start: "top 75%"
				}
			});
		}, root);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "bg-bg-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative px-6 pt-8 pb-4 md:px-12 md:pt-10 md:pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-14 max-w-3xl text-center md:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Inside The Salon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display mt-6 text-3xl leading-tight text-text-primary md:text-5xl",
					children: [
						"Every detail, considered",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "font-accent italic text-gold",
							children: "twice."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-[1400px] flex-col gap-14 md:gap-20 relative z-10",
				children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `feature-row grid items-center gap-8 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `feature-frame relative mx-auto w-full max-w-[min(100%,480px)] overflow-hidden ${i % 2 === 1 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"}`,
						style: {
							aspectRatio: "4 / 3",
							borderRadius: ARCH_FEATURE
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: f.img,
							alt: f.alt,
							loading: "lazy",
							draggable: false,
							className: `absolute inset-0 h-full w-full object-cover ${f.pos}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0",
							style: { boxShadow: "inset 0 0 0 2px var(--accent-gold-muted)" }
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "feature-text md:py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-gold",
								children: f.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "heading-display mt-4 text-2xl leading-tight text-text-primary md:text-4xl",
								children: [
									f.title,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "font-accent italic text-gold",
										children: f.accent
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-lg leading-relaxed text-text-secondary",
								children: f.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg leading-relaxed text-text-secondary/90",
								children: f.detail
							})
						]
					})]
				}, f.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeyondHairStickyBand, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reel-wrap relative z-20 w-full bg-bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reel-copy mx-auto max-w-3xl px-8 py-14 text-center md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Watch The Space" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "heading-display mt-6 text-3xl leading-tight text-text-primary md:text-5xl lg:text-[3.25rem]",
						children: [
							"Two minutes inside",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-accent italic text-gold",
								children: "Orvella."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl leading-relaxed text-text-secondary md:text-lg",
						children: "Walk through the wash bar, the styling floor, and the light we calibrate for colour work — the same rooms you will sit in on your first visit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted md:text-base",
						children: "Tap unmute on either reel. Videos play automatically as you scroll."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 pb-14 md:px-12 md:pb-20 lg:px-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelCard, {
						src: MEDIA.salonReel1,
						poster: MEDIA.salonChandelier,
						fullBleed: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelCard, {
						src: MEDIA.salonReel2,
						poster: MEDIA.salonLounge,
						fullBleed: true
					})]
				})
			})]
		}) })]
	});
}
function BeyondHairStickyBand({ children }) {
	const zone = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const copy = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const ctx = gsapWithCSS.context(() => {
			const trackEl = track.current;
			if (!trackEl) return;
			if (reduce) {
				gsapWithCSS.set(copy.current, {
					opacity: 1,
					yPercent: 0
				});
				return;
			}
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: trackEl,
				start: "top 78%",
				end: "bottom 22%",
				scrub: .55,
				invalidateOnRefresh: true
			} }).fromTo(copy.current, {
				yPercent: 42,
				opacity: 0
			}, {
				yPercent: 0,
				opacity: 1,
				ease: "power2.out",
				duration: .35
			}).to(copy.current, {
				yPercent: 0,
				opacity: 1,
				duration: .32
			}).to(copy.current, {
				yPercent: -42,
				opacity: 0,
				ease: "power2.in",
				duration: .33
			});
		}, zone);
		const refresh = () => ScrollTrigger.refresh();
		const t = window.setTimeout(refresh, 300);
		return () => {
			window.clearTimeout(t);
			ctx.revert();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: zone,
		className: "nail-strip-zone relative z-0 mt-12 w-full bg-black md:mt-16",
		"aria-label": "Beyond Hair",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nail-strip__bg sticky top-0 z-0 h-screen w-full overflow-hidden",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: MEDIA.salonNailStudio,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover object-center max-md:object-[center_30%]",
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/35" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-black/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 38%, transparent 62%, rgba(0,0,0,0.4) 100%)" }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 -mt-[100vh]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: track,
				className: "nail-strip__track relative flex min-h-[480px] h-[85vh] w-full items-center md:min-h-[520px] md:h-[90vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: copy,
					className: "nail-strip__copy w-full px-8 py-16 md:px-16 md:py-20 lg:px-[max(2rem,calc((100vw-1400px)/2+4rem))]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nail-strip__eyebrow eyebrow text-[#c9a87c]",
							children: "Beyond Hair"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "heading-display mt-4 max-w-2xl text-3xl leading-tight text-white md:text-5xl lg:text-[3.25rem]",
							children: "A dedicated nail extension studio, for the days you want the full reset."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg",
							children: "Gel extensions, structured manicures, and nail art in a quiet corner of the salon — finished with the same care and hygiene standards as everything else we do."
						})
					]
				})
			}), children]
		})]
	});
}
function ReelCard({ src, poster, fullBleed = false }) {
	const videoRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = videoRef.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) el.play().then(() => setPlaying(true)).catch(() => {});
			else {
				el.pause();
				setPlaying(false);
			}
		}, { threshold: .6 });
		if (wrapRef.current) observer.observe(wrapRef.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: `reel-card relative overflow-hidden bg-black ${fullBleed ? "h-[100vh] min-h-[520px] w-full rounded-2xl" : ""}`,
		style: fullBleed ? void 0 : {
			aspectRatio: "9 / 16",
			borderRadius: "28px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src,
				poster,
				muted,
				loop: true,
				playsInline: true,
				preload: "metadata",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { boxShadow: "inset 0 0 0 2px var(--accent-gold-muted)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": muted ? "Unmute video" : "Mute video",
				onClick: () => setMuted((m) => !m),
				className: "absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-bg-primary/80 text-xs text-gold backdrop-blur",
				children: muted ? "🔇" : "🔊"
			}),
			!playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center bg-black/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold",
					children: "▶"
				})
			})
		]
	});
}
var SLIDE_MS = 520;
var PAUSE_MS = 3e3;
function snapCenterForCard(scroller, card) {
	const max = scroller.scrollWidth - scroller.clientWidth;
	const target = card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2;
	return Math.max(0, Math.min(max, target));
}
function nearestCardIndex(scroller, cards) {
	const current = scroller.scrollLeft;
	let closest = 0;
	let minDist = Infinity;
	cards.forEach((card, i) => {
		const dist = Math.abs(snapCenterForCard(scroller, card) - current);
		if (dist < minDist) {
			minDist = dist;
			closest = i;
		}
	});
	return closest;
}
function animateScrollTo(el, target, rafRef) {
	return new Promise((resolve) => {
		cancelAnimationFrame(rafRef.current);
		const from = el.scrollLeft;
		const delta = target - from;
		if (Math.abs(delta) < 1) {
			resolve();
			return;
		}
		const t0 = performance.now();
		const easeOut = (t) => 1 - (1 - t) ** 3;
		el.classList.add("services-scroller--animating");
		const step = (now) => {
			const p = Math.min(1, (now - t0) / SLIDE_MS);
			el.scrollLeft = from + delta * easeOut(p);
			if (p < 1) rafRef.current = requestAnimationFrame(step);
			else {
				el.classList.remove("services-scroller--animating");
				resolve();
			}
		};
		rafRef.current = requestAnimationFrame(step);
	});
}
function ServicesPreview() {
	const section = (0, import_react.useRef)(null);
	const scroller = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const dragStart = (0, import_react.useRef)({
		x: 0,
		scrollLeft: 0
	});
	const autoPaused = (0, import_react.useRef)(false);
	const animating = (0, import_react.useRef)(false);
	const slideRaf = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		const onPointerDown = (e) => {
			dragging.current = true;
			autoPaused.current = true;
			cancelAnimationFrame(slideRaf.current);
			animating.current = false;
			el.classList.remove("services-scroller--animating");
			dragStart.current = {
				x: e.clientX,
				scrollLeft: el.scrollLeft
			};
			el.setPointerCapture(e.pointerId);
			el.style.cursor = "grabbing";
		};
		const onPointerMove = (e) => {
			if (!dragging.current) return;
			const dx = e.clientX - dragStart.current.x;
			el.scrollLeft = dragStart.current.scrollLeft - dx;
		};
		const endDrag = (e) => {
			if (!dragging.current) return;
			dragging.current = false;
			el.releasePointerCapture(e.pointerId);
			el.style.cursor = "grab";
			window.setTimeout(() => {
				autoPaused.current = false;
			}, 2e3);
		};
		el.style.cursor = "grab";
		el.addEventListener("pointerdown", onPointerDown);
		el.addEventListener("pointermove", onPointerMove);
		el.addEventListener("pointerup", endDrag);
		el.addEventListener("pointercancel", endDrag);
		return () => {
			el.removeEventListener("pointerdown", onPointerDown);
			el.removeEventListener("pointermove", onPointerMove);
			el.removeEventListener("pointerup", endDrag);
			el.removeEventListener("pointercancel", endDrag);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let inView = false;
		let timer = 0;
		let cancelled = false;
		let loopActive = false;
		const cards = () => [...el.querySelectorAll(".service-card")];
		const advance = async () => {
			if (cancelled || !inView || dragging.current || autoPaused.current || animating.current) return;
			const list = cards();
			if (list.length < 2) return;
			animating.current = true;
			await animateScrollTo(el, snapCenterForCard(el, list[(nearestCardIndex(el, list) + 1) % list.length]), slideRaf);
			animating.current = false;
		};
		const schedule = () => {
			if (loopActive || cancelled) return;
			loopActive = true;
			const tick = async () => {
				if (cancelled) {
					loopActive = false;
					return;
				}
				if (inView) await advance();
				timer = window.setTimeout(tick, PAUSE_MS);
			};
			timer = window.setTimeout(tick, PAUSE_MS);
		};
		const observer = new IntersectionObserver(([entry]) => {
			inView = entry.isIntersecting;
			if (inView) schedule();
		}, { threshold: .35 });
		observer.observe(el);
		const pause = () => {
			autoPaused.current = true;
		};
		const resume = () => {
			autoPaused.current = false;
		};
		el.addEventListener("mouseenter", pause);
		el.addEventListener("mouseleave", resume);
		el.addEventListener("focusin", pause);
		el.addEventListener("focusout", resume);
		return () => {
			cancelled = true;
			window.clearTimeout(timer);
			cancelAnimationFrame(slideRaf.current);
			observer.disconnect();
			el.removeEventListener("mouseenter", pause);
			el.removeEventListener("mouseleave", resume);
			el.removeEventListener("focusin", pause);
			el.removeEventListener("focusout", resume);
			el.classList.remove("services-scroller--animating");
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".service-card", {
				y: 40,
				opacity: 0,
				duration: .8,
				ease: "power3.out",
				stagger: .1,
				scrollTrigger: {
					trigger: scroller.current,
					start: "top 85%"
				}
			});
		}, section);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: section,
		className: "bg-bg-secondary py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1500px] px-6 md:px-12 flex items-end justify-between gap-8 mb-10 md:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Our Craft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display mt-6 text-text-primary text-4xl md:text-6xl lg:text-7xl max-w-2xl",
					children: [
						"A complete ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "font-accent text-gold italic",
							children: "edit"
						}),
						" of luxury services."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: "hidden md:inline-flex eyebrow gold-underline text-gold whitespace-nowrap",
					children: "View All →"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-6 md:px-12 lg:pl-[6vw] mb-4 eyebrow text-text-muted text-[0.6rem] md:hidden",
				children: "Swipe to explore →"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scroller,
				className: "services-scroller flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-6 md:px-12 lg:pl-[6vw] lg:pr-[6vw] pb-2 touch-pan-x",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "service-card relative shrink-0 snap-center overflow-hidden group",
					style: {
						width: "min(88vw, 540px)",
						height: "min(70vh, 620px)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: s.title,
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 pointer-events-none",
							loading: i < 2 ? "eager" : "lazy",
							decoding: "async",
							draggable: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-6 left-6 font-display text-6xl md:text-7xl text-white/20 leading-none pointer-events-none",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-8 left-8 right-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "heading-display text-white text-2xl sm:text-3xl md:text-4xl",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-white/70 text-sm max-w-xs",
									children: s.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "mt-6 inline-flex eyebrow text-gold gold-underline",
									children: "Explore →"
								})
							]
						})
					]
				}, s.id))
			})
		]
	});
}
var QUOTE = "Beauty is the illumination of your soul.";
var QUOTE_ACCENT = "illumination";
var SUPPORT = "In our salon, time slows. Every visit is a quiet ritual — consult, craft, reveal. You leave not only looking exquisite, but carrying a luminosity that is entirely your own.";
var LOCATION = "Lajpat Nagar II · New Delhi";
function QuoteBreak({ children }) {
	const zone = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const copy = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		const zoneEl = zone.current;
		if (!video || !zoneEl) return;
		const tryPlay = () => video.play().catch(() => void 0);
		tryPlay();
		video.addEventListener("loadeddata", tryPlay, { once: true });
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) tryPlay();
			else video.pause();
		}, { threshold: .12 });
		observer.observe(zoneEl);
		return () => {
			observer.disconnect();
			video.removeEventListener("loadeddata", tryPlay);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const ctx = gsapWithCSS.context(() => {
			const zoneEl = zone.current;
			const trackEl = track.current;
			if (!zoneEl || !trackEl) return;
			if (reduce) {
				gsapWithCSS.set(".q-word, .quote-eyebrow, .quote-rule, .quote-support, .quote-attribution, .quote-mark", {
					opacity: 1,
					y: 0,
					scale: 1,
					scaleX: 1
				});
				gsapWithCSS.set(copy.current, {
					opacity: 1,
					yPercent: 0
				});
				return;
			}
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: trackEl,
				start: "top 80%",
				end: "bottom 18%",
				scrub: .55,
				invalidateOnRefresh: true
			} }).fromTo(copy.current, {
				yPercent: 48,
				opacity: 0
			}, {
				yPercent: 0,
				opacity: 1,
				ease: "power2.out",
				duration: .35
			}).to(copy.current, {
				yPercent: 0,
				opacity: 1,
				duration: .3
			}).to(copy.current, {
				yPercent: -48,
				opacity: 0,
				ease: "power2.in",
				duration: .35
			});
			const words = zoneEl.querySelectorAll(".q-word");
			gsapWithCSS.fromTo(words, { opacity: .08 }, {
				opacity: 1,
				stagger: .08,
				ease: "none",
				scrollTrigger: {
					trigger: trackEl,
					start: "top 68%",
					end: "bottom 42%",
					scrub: .6,
					invalidateOnRefresh: true
				}
			});
			gsapWithCSS.fromTo(".quote-eyebrow", {
				opacity: 0,
				y: 24
			}, {
				opacity: 1,
				y: 0,
				ease: "none",
				scrollTrigger: {
					trigger: trackEl,
					start: "top 76%",
					end: "top 48%",
					scrub: .5,
					invalidateOnRefresh: true
				}
			});
			gsapWithCSS.fromTo(".quote-rule", { scaleX: 0 }, {
				scaleX: 1,
				ease: "none",
				scrollTrigger: {
					trigger: trackEl,
					start: "top 70%",
					end: "top 44%",
					scrub: .5,
					invalidateOnRefresh: true
				}
			});
			gsapWithCSS.fromTo(".quote-support", {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				ease: "none",
				scrollTrigger: {
					trigger: trackEl,
					start: "top 56%",
					end: "bottom 38%",
					scrub: .55,
					invalidateOnRefresh: true
				}
			});
			gsapWithCSS.fromTo(".quote-attribution", {
				opacity: 0,
				y: 16
			}, {
				opacity: 1,
				y: 0,
				ease: "none",
				scrollTrigger: {
					trigger: trackEl,
					start: "top 48%",
					end: "bottom 30%",
					scrub: .5,
					invalidateOnRefresh: true
				}
			});
			gsapWithCSS.fromTo(".quote-mark", {
				opacity: 0,
				scale: .92
			}, {
				opacity: 1,
				scale: 1,
				ease: "none",
				scrollTrigger: {
					trigger: trackEl,
					start: "top 72%",
					end: "top 50%",
					scrub: .45,
					invalidateOnRefresh: true
				}
			});
		}, zone);
		const refresh = () => ScrollTrigger.refresh();
		const t = window.setTimeout(refresh, 300);
		const t2 = window.setTimeout(refresh, 900);
		window.addEventListener("load", refresh);
		return () => {
			window.clearTimeout(t);
			window.clearTimeout(t2);
			window.removeEventListener("load", refresh);
			ctx.revert();
		};
	}, []);
	const quoteWords = QUOTE.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: zone,
		className: "quote-break-zone relative bg-black",
		"aria-label": "Philosophy",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "quote-break__bg-layer sticky top-0 z-0 h-screen w-full overflow-hidden",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					src: MEDIA.ambientReel,
					className: "absolute inset-0 h-full w-full object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "auto",
					poster: MEDIA.salonChandelier
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/72" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(0,0,0,0.45) 100%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.55) 100%)" }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "quote-break__scroll relative z-10 -mt-[100vh]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: track,
				className: "quote-break__track relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 md:px-12 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "quote-mark pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 font-display text-white/[0.07] md:left-12 md:block",
					style: {
						fontSize: "clamp(8rem, 18vw, 14rem)",
						lineHeight: 1
					},
					"aria-hidden": "true",
					children: "“"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: copy,
					className: "mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:max-w-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "quote-eyebrow eyebrow mb-8 text-white/55 md:mb-10",
							children: "The Orvella Philosophy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "quote-rule mb-10 h-px w-16 origin-center bg-gradient-to-r from-transparent via-gold/70 to-transparent md:mb-12 md:w-24",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "font-display italic text-white",
							style: {
								fontSize: "clamp(2rem, 4.8vw, 5.25rem)",
								lineHeight: 1.12,
								letterSpacing: "-0.01em"
							},
							children: quoteWords.map((word, i) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "q-word mr-[0.22em] inline-block",
									children: word.replace(/[.,!?]/g, "").toLowerCase() === QUOTE_ACCENT ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "font-accent not-italic text-gold-muted",
										children: word
									}) : word
								}, i);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "quote-support mt-10 max-w-2xl font-body font-light leading-relaxed text-white/62 md:mt-14 md:max-w-xl md:text-[1.05rem]",
							style: { fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" },
							children: SUPPORT
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "quote-attribution mt-12 flex flex-col items-center gap-3 md:mt-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-px w-10 bg-white/25",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-white/55",
									children: "— Orvella Salon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.62rem] uppercase tracking-[0.32em] text-white/38",
									children: LOCATION
								})
							]
						})
					]
				})]
			}), children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "quote-break__tail relative z-20",
				children
			}) : null]
		})]
	});
}
function freezeSplit(el) {
	const split = getComputedStyle(el).getPropertyValue("--split").trim() || "50";
	el.style.setProperty("--split", split);
	el.classList.remove("ba-card--demo");
}
async function decodeCardImages(el) {
	const imgs = el.querySelectorAll("img");
	await Promise.all([...imgs].map((img) => new Promise((resolve) => {
		if (img.complete) resolve();
		else {
			img.addEventListener("load", () => resolve(), { once: true });
			img.addEventListener("error", () => resolve(), { once: true });
		}
	})));
	await Promise.all([...imgs].map((img) => img.decode?.().catch(() => void 0) ?? Promise.resolve()));
}
function BeforeAfterSlider({ before, after, label, index = 0, inView = false, shouldDemo = false, onDemoEnd }) {
	const container = (0, import_react.useRef)(null);
	const valueRef = (0, import_react.useRef)(50);
	const [showHint, setShowHint] = (0, import_react.useState)(true);
	const [isDemoing, setIsDemoing] = (0, import_react.useState)(false);
	const dragging = (0, import_react.useRef)(false);
	const userTouched = (0, import_react.useRef)(false);
	const dragRaf = (0, import_react.useRef)(0);
	const pendingX = (0, import_react.useRef)(0);
	const applySplit = (0, import_react.useCallback)((pct) => {
		const clamped = Math.max(0, Math.min(100, pct));
		valueRef.current = clamped;
		container.current?.style.setProperty("--split", String(clamped));
	}, []);
	const flushDrag = (0, import_react.useCallback)(() => {
		dragRaf.current = 0;
		const el = container.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		applySplit((pendingX.current - rect.left) / rect.width * 100);
	}, [applySplit]);
	const queueDrag = (0, import_react.useCallback)((clientX) => {
		pendingX.current = clientX;
		if (!dragRaf.current) dragRaf.current = requestAnimationFrame(flushDrag);
	}, [flushDrag]);
	const stopDemo = (0, import_react.useCallback)(() => {
		if (userTouched.current) return;
		userTouched.current = true;
		const el = container.current;
		if (el) freezeSplit(el);
		setIsDemoing(false);
		setShowHint(false);
	}, []);
	(0, import_react.useEffect)(() => {
		applySplit(50);
	}, [applySplit]);
	(0, import_react.useEffect)(() => {
		const onMove = (e) => dragging.current && queueDrag(e.clientX);
		const onTouch = (e) => dragging.current && e.touches[0] && queueDrag(e.touches[0].clientX);
		const stop = () => {
			dragging.current = false;
			container.current?.classList.remove("is-dragging");
		};
		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseup", stop);
		window.addEventListener("touchmove", onTouch, { passive: true });
		window.addEventListener("touchend", stop);
		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseup", stop);
			window.removeEventListener("touchmove", onTouch);
			window.removeEventListener("touchend", stop);
			if (dragRaf.current) cancelAnimationFrame(dragRaf.current);
		};
	}, [queueDrag]);
	(0, import_react.useEffect)(() => {
		if (!shouldDemo) return;
		const el = container.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShowHint(false);
			onDemoEnd?.();
			return;
		}
		let cancelled = false;
		const onEnd = (e) => {
			if (e.animationName !== "ba-auto-reveal") return;
			el.classList.remove("ba-card--demo", "is-active");
			setIsDemoing(false);
			onDemoEnd?.();
		};
		const start = async () => {
			await decodeCardImages(el);
			if (cancelled || userTouched.current) {
				onDemoEnd?.();
				return;
			}
			el.classList.add("is-active");
			el.classList.add("ba-card--demo");
			setIsDemoing(true);
			setShowHint(false);
		};
		el.addEventListener("animationend", onEnd);
		start();
		return () => {
			cancelled = true;
			el.removeEventListener("animationend", onEnd);
			el.classList.remove("ba-card--demo", "is-active");
		};
	}, [shouldDemo, onDemoEnd]);
	const beginDrag = (clientX) => {
		stopDemo();
		container.current?.classList.add("is-dragging", "is-active");
		dragging.current = true;
		queueDrag(clientX);
	};
	const eager = index === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: container,
		className: `ba-card group relative select-none overflow-hidden rounded-sm${inView ? " ba-card--in-view" : ""}`,
		style: {
			aspectRatio: "3 / 4",
			cursor: "ew-resize",
			transitionDelay: inView ? `${index * .1}s` : void 0,
			["--ba-index"]: index
		},
		onMouseDown: (e) => beginDrag(e.clientX),
		onTouchStart: (e) => {
			if (e.touches[0]) beginDrag(e.touches[0].clientX);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: before,
				alt: `${label} — before`,
				className: "absolute inset-0 h-full w-full object-cover",
				loading: eager ? "eager" : "lazy",
				fetchPriority: eager ? "high" : "auto",
				decoding: "async",
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ba-reveal absolute inset-0 overflow-hidden",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ba-reveal-scaler h-full w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: after,
						alt: `${label} — after`,
						className: "ba-after-layer block h-full w-full object-cover",
						loading: eager ? "eager" : "lazy",
						fetchPriority: index <= 1 ? "high" : "auto",
						decoding: "async",
						draggable: false
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ba-pill ba-pill--before absolute top-4 left-4 z-10",
				children: "Before"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ba-pill ba-pill--after absolute top-4 right-4 z-10",
				children: "After"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-4 left-4 z-10 font-display text-lg italic text-white md:text-xl",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ba-handle-track pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 -translate-x-1/2 bg-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `ba-handle absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-bg-primary/90 text-gold ${isDemoing || showHint ? "ba-handle--pulse" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.65rem] font-semibold tracking-wider",
						children: "⟷"
					})
				})
			}),
			showHint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ba-hint pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-[0.62rem] text-white/85",
						children: "Before & After"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl italic text-white md:text-2xl",
						children: "Slide to compare"
					})]
				})
			})
		]
	});
}
function Transformations() {
	const gridRef = (0, import_react.useRef)(null);
	const [gridInView, setGridInView] = (0, import_react.useState)(false);
	const [demoIndex, setDemoIndex] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const el = gridRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setGridInView(true);
				setDemoIndex(0);
				observer.disconnect();
			}
		}, {
			threshold: .08,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const handleDemoEnd = (0, import_react.useCallback)(() => {
		setDemoIndex((current) => {
			if (current === null || current < 0) return current;
			const next = current + 1;
			return next < TRANSFORMATIONS.length ? next : -1;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-bg-primary py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-6 text-center md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex flex-col items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Before & After" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display mt-6 text-4xl text-text-primary md:text-6xl",
					children: ["See the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "font-accent italic text-gold",
						children: "Difference"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-xl text-text-secondary",
					children: "Each panel compares your look before and after treatment. Watch the reveal unfold — then drag to explore every result yourself."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "ba-instruction mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-bg-surface/50 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "⟷"
					}), "Slide to compare"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: gridRef,
			className: "ba-grid mx-auto mt-14 grid max-w-[1500px] grid-cols-1 gap-6 px-6 md:mt-16 md:grid-cols-3 md:px-12",
			children: TRANSFORMATIONS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterSlider, {
				index: i,
				inView: gridInView,
				shouldDemo: demoIndex === i,
				onDemoEnd: handleDemoEnd,
				...t
			}, i))
		})]
	});
}
var IG_URL = SITE.instagram;
function VerifiedBadge({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		"aria-label": "Verified",
		className,
		fill: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#3897f0",
			d: "M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.292h6.234L14.638 40l5.36-3.094L25.358 40l3.232-5.609h6.058v-6.292l5.736-3.137L37.39 20l2.994-5.36-5.736-3.135V5.15h-6.058L25.358 0l-5.36 3.094Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "m18.343 27.852-7.07-7.07 2.121-2.122 4.949 4.95 8.485-8.486 2.121 2.122-10.606 10.606Z"
		})]
	});
}
/** Muted inline autoplay — IntersectionObserver + programmatic play for iOS Safari */
function AutoplayVideo({ src, poster, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = ref.current;
		if (!video) return;
		video.setAttribute("playsinline", "");
		video.setAttribute("webkit-playsinline", "");
		video.muted = true;
		const tryPlay = () => {
			const p = video.play();
			if (p !== void 0) p.catch(() => {});
		};
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) tryPlay();
			else video.pause();
		}, { threshold: .25 });
		observer.observe(video);
		tryPlay();
		return () => observer.disconnect();
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		ref,
		src,
		poster,
		muted: true,
		playsInline: true,
		autoPlay: true,
		loop: true,
		preload: "auto",
		disablePictureInPicture: true,
		controlsList: "nodownload nofullscreen noremoteplayback",
		className
	});
}
function MediaTile({ post, index }) {
	const isVideo = post.type === "video";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: IG_URL,
		target: "_blank",
		rel: "noreferrer",
		className: "ig-cell group relative block aspect-square overflow-hidden bg-bg-secondary",
		"aria-label": post.caption,
		children: [
			isVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoplayVideo, {
				src: post.src,
				poster: post.poster,
				className: "absolute inset-0 h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.src,
				alt: post.caption,
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			isVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-2 top-2 text-white drop-shadow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
					size: 18,
					fill: "currentColor"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 hidden items-center justify-center gap-6 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 font-semibold text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						size: 20,
						fill: "white"
					}), (index + 1) * 37]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 font-semibold text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						size: 20,
						fill: "white"
					}), index + 3]
				})]
			})
		]
	});
}
function InstagramSection() {
	const root = (0, import_react.useRef)(null);
	const [tab, setTab] = (0, import_react.useState)("posts");
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".ig-section-header > *", {
				opacity: 0,
				y: 28,
				duration: .8,
				ease: "power3.out",
				stagger: .12,
				scrollTrigger: {
					trigger: ".ig-section-header",
					start: "top 85%"
				}
			});
			gsapWithCSS.from(".ig-card", {
				opacity: 0,
				y: 40,
				duration: .8,
				ease: "power3.out",
				delay: .2,
				scrollTrigger: {
					trigger: ".ig-card",
					start: "top 85%"
				}
			});
		}, root);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(".ig-cell", {
				opacity: 0,
				scale: .96
			}, {
				opacity: 1,
				scale: 1,
				duration: .5,
				ease: "power3.out",
				stagger: {
					amount: .4,
					from: "start"
				}
			});
		}, root);
		return () => ctx.revert();
	}, [tab]);
	const p = IG_PROFILE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		className: "relative bg-bg-primary px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ig-section-header mx-auto mb-12 max-w-3xl text-center md:mb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Follow Our Story" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display mt-6 text-text-primary text-4xl md:text-6xl",
					children: [
						"Life at ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "font-accent italic text-gold",
							children: "Orvella"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-text-secondary text-base md:text-lg leading-relaxed",
					children: "Step inside our world on Instagram — real clients, real results, and the quiet craft behind every visit."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ig-card mx-auto w-full max-w-[1280px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-border-subtle bg-bg-primary md:rounded-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "px-4 pt-6 md:px-8 md:pt-8 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-6 md:gap-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: IG_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "shrink-0",
									"aria-label": `@${p.handle} on Instagram`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] p-[3px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-full bg-bg-primary p-[3px]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: MEDIA.logoMark,
												alt: p.handle,
												className: "h-20 w-20 rounded-full object-contain bg-black md:h-36 md:w-36"
											})
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-x-4 gap-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-xl font-normal text-text-primary md:text-2xl",
												children: p.handle
											}), p.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifiedBadge, { className: "h-[18px] w-[18px]" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: IG_URL,
													target: "_blank",
													rel: "noreferrer",
													className: "rounded-lg bg-[#0095f6] px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-[#1aa1f7]",
													children: "Follow"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: IG_URL,
													target: "_blank",
													rel: "noreferrer",
													className: "rounded-lg bg-bg-secondary px-5 py-1.5 text-sm font-semibold text-text-primary transition hover:opacity-80",
													children: "Message"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "Options",
													className: "hidden text-text-primary md:inline-flex",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 22 })
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 hidden md:block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-text-primary",
												children: p.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 space-y-0.5 text-sm text-text-primary",
												children: p.bio.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: p.linkUrl,
												target: "_blank",
												rel: "noreferrer",
												className: "mt-1 inline-block text-sm font-semibold text-[#4a7ba6] hover:underline",
												children: ["🔗 ", p.link]
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 md:hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-text-primary",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 space-y-0.5 text-sm text-text-primary",
										children: p.bio.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.linkUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "mt-1 inline-block text-sm font-semibold text-[#4a7ba6] hover:underline",
										children: ["🔗 ", p.link]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2 md:hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: IG_URL,
										target: "_blank",
										rel: "noreferrer",
										className: "flex-1 rounded-lg bg-[#0095f6] py-1.5 text-center text-sm font-semibold text-white",
										children: "Follow"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: IG_URL,
										target: "_blank",
										rel: "noreferrer",
										className: "flex-1 rounded-lg bg-bg-secondary py-1.5 text-center text-sm font-semibold text-text-primary",
										children: "Message"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: IG_URL,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Add",
										className: "grid w-9 place-items-center rounded-lg bg-bg-secondary text-text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-5 overflow-x-auto pb-2 md:mt-8 md:gap-8",
								children: p.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: IG_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "flex shrink-0 flex-col items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-full border border-border-subtle p-[3px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: h.cover,
											alt: h.label,
											className: "h-14 w-14 rounded-full object-cover md:h-20 md:w-20"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "max-w-[72px] truncate text-xs text-text-primary",
										children: h.label
									})]
								}, h.label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-around border-y border-border-subtle py-3 text-center text-sm md:hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-text-primary",
								children: p.stats.posts
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-text-secondary",
								children: "posts"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-text-primary",
								children: p.stats.followers
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-text-secondary",
								children: "followers"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-text-primary",
								children: p.stats.following
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-text-secondary",
								children: "following"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-2 flex items-center justify-center gap-12 border-t border-border-subtle md:gap-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
								active: tab === "posts",
								onClick: () => setTab("posts"),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { size: 14 }),
								label: "Posts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
								active: tab === "reels",
								onClick: () => setTab("reels"),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clapperboard, { size: 14 }),
								label: "Reels"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
								active: tab === "tagged",
								onClick: () => setTab("tagged"),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareUser, { size: 14 }),
								label: "Tagged"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2 pb-2 md:px-3 md:pb-3",
						children: [
							tab === "posts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-[3px] md:gap-1",
								children: p.posts.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaTile, {
									post,
									index: i
								}, `post-${i}`))
							}),
							tab === "reels" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-[3px] md:gap-1",
								children: p.reels.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: IG_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "ig-cell group relative block aspect-[9/16] overflow-hidden bg-bg-secondary",
									"aria-label": post.caption,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoplayVideo, {
											src: post.src,
											poster: post.poster,
											className: "absolute inset-0 h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-2 top-2 text-white drop-shadow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clapperboard, { size: 18 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-2 left-2 flex items-center gap-1.5 font-semibold text-white drop-shadow",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
												size: 16,
												fill: "currentColor"
											}), (i + 2) * 413]
										})
									]
								}, `reel-${i}`))
							}),
							tab === "tagged" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center gap-4 py-20 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-16 w-16 place-items-center rounded-full border-2 border-text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
											size: 30,
											className: "text-text-primary"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-extrabold text-text-primary",
										children: "No Photos"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "max-w-xs text-sm text-text-secondary",
										children: [
											"When people tag ",
											p.handle,
											" in photos, they'll appear here."
										]
									})
								]
							})
						]
					})
				]
			})
		})]
	});
}
function TabButton({ active, onClick, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `-mt-px flex items-center gap-1.5 border-t py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${active ? "border-text-primary text-text-primary" : "border-transparent text-text-secondary hover:text-text-primary"}`,
		children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
var AUTOPLAY_MS = 5500;
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase()).join("");
}
function Testimonials() {
	const [active, setActive] = (0, import_react.useState)(0);
	const prevRef = (0, import_react.useRef)(null);
	const nextRef = (0, import_react.useRef)(null);
	const barRefs = (0, import_react.useRef)([]);
	const quoteRef = (0, import_react.useRef)(null);
	const restartBar = (0, import_react.useCallback)((i) => {
		barRefs.current.forEach((el, idx) => {
			if (!el) return;
			el.style.animation = "none";
			el.style.width = idx < i ? "100%" : "0%";
		});
		const el = barRefs.current[i];
		if (el) {
			el.offsetWidth;
			el.style.animation = `orvella-bar-fill ${AUTOPLAY_MS}ms linear forwards`;
		}
	}, []);
	const revealQuote = (0, import_react.useCallback)(() => {
		if (!quoteRef.current) return;
		const els = quoteRef.current.querySelectorAll(".t-anim");
		gsapWithCSS.fromTo(els, {
			opacity: 0,
			y: 18,
			filter: "blur(6px)"
		}, {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			duration: .8,
			stagger: .08,
			ease: "power3.out"
		});
	}, []);
	const onSlideChange = (0, import_react.useCallback)((s) => {
		setActive(s.realIndex);
		restartBar(s.realIndex);
		revealQuote();
	}, [restartBar, revealQuote]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 md:py-40 bg-bg-secondary overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none select-none absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 font-display text-[220px] md:text-[420px] leading-none text-gold/[0.06]",
				children: "\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Client Stories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display mt-6 text-text-primary text-3xl md:text-5xl",
					children: [
						"What our clients ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "font-accent italic text-gold",
							children: "say"
						}),
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 md:mt-24 w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: prevRef,
						"aria-label": "Previous testimonial",
						className: "hidden md:flex absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-bg-secondary transition-colors duration-300",
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: nextRef,
						"aria-label": "Next testimonial",
						className: "hidden md:flex absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-bg-secondary transition-colors duration-300",
						children: "›"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
						modules: [
							Autoplay,
							EffectFade,
							Navigation
						],
						effect: "fade",
						fadeEffect: { crossFade: true },
						autoplay: {
							delay: AUTOPLAY_MS,
							disableOnInteraction: false
						},
						navigation: {
							prevEl: prevRef.current,
							nextEl: nextRef.current
						},
						onBeforeInit: (s) => {
							s.params.navigation.prevEl = prevRef.current;
							s.params.navigation.nextEl = nextRef.current;
						},
						onSwiper: () => restartBar(0),
						onSlideChange,
						loop: true,
						className: "orvella-swiper",
						children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: active === i ? quoteRef : void 0,
							className: "mx-auto max-w-4xl px-6 md:px-16 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "t-anim mb-8 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-16 w-16 md:h-20 md:w-20 items-center justify-center text-gold font-display text-lg md:text-xl border border-gold/50",
										style: { borderRadius: "999px 999px 10px 10px / 60px 60px 10px 10px" },
										children: initials(t.author)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "t-anim text-gold mb-6 tracking-[0.4em]",
									children: "★★★★★"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "t-anim font-display italic text-text-primary text-2xl md:text-4xl lg:text-5xl leading-snug",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "t-anim eyebrow mt-8 text-text-secondary",
									children: ["— ", t.author]
								})
							]
						}) }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-14 flex max-w-md md:max-w-lg items-center gap-2 px-6",
						children: TESTIMONIALS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative h-[2px] flex-1 overflow-hidden bg-text-muted/40 cursor-pointer",
							onClick: () => {
								document.querySelectorAll(".orvella-swiper .swiper-slide-active");
								document.querySelector(".orvella-swiper")?.swiper?.slideToLoop(i);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								ref: (el) => {
									if (el) barRefs.current[i] = el;
								},
								className: "absolute inset-y-0 left-0 block bg-gold",
								style: { width: i < active ? "100%" : "0%" }
							})
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex md:hidden justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Previous testimonial",
							onClick: () => document.querySelector(".orvella-swiper")?.swiper?.slidePrev(),
							className: "h-11 w-11 flex items-center justify-center rounded-full border border-gold/40 text-gold",
							children: "‹"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Next testimonial",
							onClick: () => document.querySelector(".orvella-swiper")?.swiper?.slideNext(),
							className: "h-11 w-11 flex items-center justify-center rounded-full border border-gold/40 text-gold",
							children: "›"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .orvella-swiper { width: 100%; padding: 0; }
        .orvella-swiper .swiper-slide { transition: opacity .6s ease; }

        @keyframes orvella-bar-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      ` })
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutIntro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalonShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteBreak, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformations, {}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
	] });
}
//#endregion
export { Home as component };
