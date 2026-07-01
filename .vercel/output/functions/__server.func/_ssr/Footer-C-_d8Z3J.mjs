import { n as MEDIA, o as SITE, r as NAV_LINKS, s as SOCIAL_LINKS } from "./constants-DQnu0zFC.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as FaWhatsapp, t as FaInstagram } from "../_libs/react-icons.mjs";
import { d as Mail, o as Phone, u as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-C-_d8Z3J.js
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
//#endregion
export { Footer as t };
