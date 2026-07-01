import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { n as PAGE_BANNERS, t as MEDIA } from "./media-VvPOLAU-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as PRE_FOOTER_DEFAULT, n as NAV_LINKS, o as SITE, r as PRE_FOOTER_BY_ROUTE, s as SOCIAL_LINKS } from "./constants-B_E4oYm6.mjs";
import { g as Mail, h as MapPin, l as Phone } from "../_libs/lucide-react.mjs";
import { n as FaWhatsapp, t as FaInstagram } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PreFooterBanner-BnXZi_TG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FOOTER_HOURS = "Mon – Sun — 10:00 AM – 9:00 PM";
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-[1600px] px-8 md:px-16 pt-20 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex items-center gap-3 md:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: MEDIA.logo,
									alt: "Orvella Salon",
									className: "h-20 md:h-24 w-auto shrink-0 object-contain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl md:text-3xl tracking-[0.2em] md:tracking-[0.25em] text-text-primary",
									children: "ORVELLA"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.65rem] tracking-[0.28em] uppercase text-text-muted",
								children: "Est. Lajpat Nagar, New Delhi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-display italic text-text-secondary text-base md:text-lg leading-relaxed max-w-xs",
								children: SITE.tagline
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mb-6",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.href,
							className: "font-display text-lg text-text-primary hover:text-gold transition-colors duration-300",
							children: l.label
						}) }, l.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mb-6",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-text-primary leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 14,
									className: "mt-1 shrink-0 text-text-muted",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.address })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 14,
									className: "shrink-0 text-text-muted",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SOCIAL_LINKS.phone,
									className: "hover:text-gold transition-colors",
									children: "+91 95821 80189"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {
									size: 14,
									className: "shrink-0 text-text-muted"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SOCIAL_LINKS.whatsapp,
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-gold transition-colors",
									children: "+91 92170 02598"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 14,
									className: "shrink-0 text-text-muted",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SOCIAL_LINKS.email,
									className: "hover:text-gold transition-colors break-all",
									children: SITE.email
								})]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mb-6",
							children: "Follow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.instagram,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2.5 text-sm text-text-primary hover:text-gold transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaInstagram, {
								size: 14,
								className: "text-text-muted"
							}), SITE.instagramHandle]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mt-10 mb-4",
							children: "Hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-text-primary",
							children: FOOTER_HOURS
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "relative pointer-events-none select-none overflow-hidden px-3 py-4 md:px-6 md:py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-display font-normal whitespace-nowrap text-text-primary text-[clamp(5.75rem,18vw,16rem)] md:text-[clamp(7rem,22vw,16rem)]",
					style: {
						lineHeight: .9,
						letterSpacing: "0.03em",
						opacity: .055
					},
					children: "ORVELLA"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 border-t border-border-subtle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "py-7 text-center text-[0.62rem] tracking-[0.35em] uppercase text-text-muted",
					children: [
						"© ",
						year,
						" ORVELLA SALON — CRAFTED WITH INTENTION"
					]
				})
			})
		]
	});
}
var HOME_IMAGE = PAGE_BANNERS.about;
function resolveImage(key) {
	return key === "home" ? HOME_IMAGE : PAGE_BANNERS[key];
}
/**
* Sticky full-viewport photograph with quote + footer scrolling over it.
*/
function PreFooterZone() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const zone = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const copy = (0, import_react.useRef)(null);
	const content = (0, import_react.useMemo)(() => {
		const override = PRE_FOOTER_BY_ROUTE[pathname];
		return {
			eyebrow: override?.eyebrow ?? PRE_FOOTER_DEFAULT.eyebrow,
			quote: override?.quote ?? PRE_FOOTER_DEFAULT.quote,
			image: resolveImage(override?.imageKey ?? PRE_FOOTER_DEFAULT.imageKey)
		};
	}, [pathname]);
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
				start: "top 75%",
				end: "bottom 25%",
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
		}, zone);
		const refresh = () => ScrollTrigger.refresh();
		const t = window.setTimeout(refresh, 300);
		window.addEventListener("load", refresh);
		return () => {
			window.clearTimeout(t);
			window.removeEventListener("load", refresh);
			ctx.revert();
		};
	}, [content.image, pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: zone,
		className: "pre-footer-zone relative bg-black",
		"aria-label": "Brand statement",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pre-footer__bg-layer sticky top-0 z-0 h-screen w-full overflow-hidden",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: content.image,
					alt: "",
					className: "pre-footer__bg absolute inset-0 h-full w-full object-cover object-center max-md:object-[center_35%]",
					loading: "eager",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 42%, transparent 58%, rgba(0,0,0,0.38) 100%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, rgba(0,0,0,0.22) 100%)" }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pre-footer__scroll relative z-10 -mt-[100vh]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: track,
				className: "pre-footer__track relative flex h-[90vh] min-h-[520px] items-center justify-center px-6 md:h-[100vh] md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: copy,
					className: "pre-footer__copy mx-auto max-w-4xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pre-footer__eyebrow eyebrow text-gold/90",
						children: content.eyebrow
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "pre-footer__quote heading-display mt-5 font-accent italic text-white md:mt-7",
						style: {
							fontSize: "clamp(1.85rem, 5.5vw, 4.25rem)",
							lineHeight: 1.08,
							letterSpacing: "-0.01em"
						},
						children: [
							"“",
							content.quote,
							"”"
						]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pre-footer__footer relative z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			})]
		})]
	});
}
//#endregion
export { PreFooterZone as t };
