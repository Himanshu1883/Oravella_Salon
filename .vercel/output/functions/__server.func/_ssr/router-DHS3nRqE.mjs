import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { d as orvella_logo_png_default, n as MEDIA, r as NAV_LINKS, u as WHATSAPP_URL } from "./constants-CuQpxFf8.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { n as FaWhatsapp } from "../_libs/react-icons.mjs";
import { l as Menu, n as Sun, s as Moon, t as X } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./Footer-B2SvbQZF.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DHS3nRqE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DIrWq3AE.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var ThemeCtx = (0, import_react.createContext)({
	theme: "dark",
	toggle: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" && localStorage.getItem("orvella-theme");
		const initial = stored === "light" || stored === "dark" ? stored : "dark";
		setTheme(initial);
		document.documentElement.setAttribute("data-theme", initial);
	}, []);
	const toggle = () => {
		setTheme((t) => {
			const next = t === "dark" ? "light" : "dark";
			document.documentElement.setAttribute("data-theme", next);
			try {
				localStorage.setItem("orvella-theme", next);
			} catch {}
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeCtx);
function useLenisScroll() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: .85,
			touchMultiplier: 1.5
		});
		const scroller = document.documentElement;
		ScrollTrigger.scrollerProxy(scroller, {
			scrollTop(value) {
				if (arguments.length) lenis.scrollTo(value, { immediate: true });
				return lenis.scroll;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight
				};
			},
			pinType: scroller.style.transform ? "transform" : "fixed"
		});
		lenis.on("scroll", ScrollTrigger.update);
		const onRefresh = () => lenis.resize();
		ScrollTrigger.addEventListener("refresh", onRefresh);
		const ticker = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(ticker);
		gsapWithCSS.ticker.lagSmoothing(0);
		ScrollTrigger.refresh();
		requestAnimationFrame(() => ScrollTrigger.refresh());
		window.__lenis = lenis;
		return () => {
			ScrollTrigger.removeEventListener("refresh", onRefresh);
			ScrollTrigger.scrollerProxy(scroller, {});
			gsapWithCSS.ticker.remove(ticker);
			lenis.destroy();
			delete window.__lenis;
		};
	}, []);
}
function SmoothScroll() {
	useLenisScroll();
	return null;
}
/** Routes with a full-bleed dark image/video hero under the fixed navbar */
var DARK_HERO_ROUTES = [
	"/",
	"/about",
	"/services",
	"/contact",
	"/bridal"
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { theme, toggle } = useTheme();
	const overDarkHero = !scrolled && DARK_HERO_ROUTES.includes(pathname);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed top-0 left-0 right-0 z-[1000] transition-all duration-500", scrolled ? "py-3 backdrop-blur-xl bg-bg-primary/85 border-b border-border-subtle" : overDarkHero ? "py-5 bg-gradient-to-b from-black/65 via-black/35 to-transparent" : "py-5 bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] flex items-center justify-between px-6 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 md:gap-4 group shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: MEDIA.logo,
						alt: "Orvella Salon",
						className: "h-14 md:h-[4.25rem] w-auto object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-display text-lg sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.25em]", overDarkHero ? "text-white" : "text-text-primary"),
						children: "ORVELLA"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-10",
					children: NAV_LINKS.map((l) => {
						const active = pathname === l.href;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.href,
							className: cn("gold-underline text-[0.72rem] tracking-[0.25em] uppercase transition-colors", overDarkHero ? "text-white/75 hover:text-white" : "text-text-secondary hover:text-text-primary", active && (overDarkHero ? "text-white link-active" : "text-text-primary link-active")),
							children: l.label
						}, l.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggle,
							"aria-label": "Toggle theme",
							className: cn("w-9 h-9 grid place-items-center rounded-full border transition", overDarkHero ? "border-white/45 text-white/85 hover:text-white hover:border-white" : "border-border-subtle text-text-secondary hover:text-gold hover:border-gold"),
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 15 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 15 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
							to: "/contact",
							variant: "ghost",
							compact: true,
							onDark: overDarkHero,
							className: "hidden md:inline-flex",
							children: "Book Now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(true),
							className: cn("md:hidden", overDarkHero ? "text-white" : "text-text-primary"),
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-[1100] bg-bg-primary transition-[clip-path] duration-700", open ? "[clip-path:circle(150%_at_top_right)]" : "[clip-path:circle(0%_at_top_right)] pointer-events-none"),
		style: { transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl tracking-[0.3em] text-gold",
				children: "ORVELLA"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpen(false),
				"aria-label": "Close menu",
				className: "text-text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 26 })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-col items-center justify-center gap-8 h-[80vh]",
			children: NAV_LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.href,
				className: "font-display text-5xl text-text-primary hover:text-gold transition-colors",
				style: {
					opacity: open ? 1 : 0,
					transform: open ? "translateY(0)" : "translateY(30px)",
					transition: `opacity .6s ease ${.2 + i * .08}s, transform .6s ease ${.2 + i * .08}s`
				},
				children: l.label
			}, l.href))
		})]
	})] });
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "group fixed bottom-6 right-6 z-[998] w-14 h-14 grid place-items-center rounded-full text-white shadow-xl transition-transform hover:scale-110",
		style: {
			background: "#25D366",
			boxShadow: "0 10px 30px -10px rgba(37,211,102,0.6)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute inset-0 rounded-full",
				style: {
					background: "#25D366",
					animation: "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {
				size: 26,
				className: "relative z-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-16 whitespace-nowrap rounded-full bg-bg-secondary px-3 py-1.5 text-xs text-text-primary border border-border-subtle opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition pointer-events-none",
				children: "Chat with us"
			})
		]
	});
}
function ScrollProgress() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
			if (ref.current) ref.current.style.transform = `scaleX(${pct})`;
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left pointer-events-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "h-full w-full origin-left",
			style: {
				background: "linear-gradient(90deg, var(--accent-gold-muted), var(--accent-gold))",
				transform: "scaleX(0)"
			}
		})
	});
}
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 14
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -8
			},
			transition: {
				duration: .5,
				ease: [
					.76,
					0,
					.24,
					1
				]
			},
			children
		}, pathname)
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-bg-primary px-4 pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "heading-display mt-6 text-text-primary text-5xl",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-text-secondary",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex mt-8 eyebrow gold-underline text-gold",
					children: "← Back home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-bg-primary px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "heading-display text-text-primary text-3xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-text-secondary",
					children: "Something went wrong on our end."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
						onClick: () => {
							router.invalidate();
							reset();
						},
						compact: true,
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
						href: "/",
						variant: "ghost",
						compact: true,
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar" },
			{
				name: "description",
				content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II."
			},
			{
				name: "author",
				content: "Orvella Salon"
			},
			{
				property: "og:title",
				content: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar"
			},
			{
				property: "og:description",
				content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar"
			},
			{
				name: "twitter:description",
				content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fb2ff43b-252d-4bd9-b0aa-97f9d8999861/id-preview-31f90b67--d1b2f3a5-a7d0-43a9-97ed-5d90348e9393.lovable.app-1782715819852.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fb2ff43b-252d-4bd9-b0aa-97f9d8999861/id-preview-31f90b67--d1b2f3a5-a7d0-43a9-97ed-5d90348e9393.lovable.app-1782715819852.png"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: orvella_logo_png_default
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: orvella_logo_png_default
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: orvella_logo_png_default
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const isGallery = useRouterState({ select: (s) => s.location.pathname }) === "/gallery";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			!isGallery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		] })
	});
}
var $$splitComponentImporter$5 = () => import("./services-DejZMrEp.mjs");
var Route$5 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Orvella Salon" },
		{
			name: "description",
			content: "Hair, colour, keratin, skincare, makeup, and nail services at Orvella Salon, Lajpat Nagar II."
		},
		{
			property: "og:title",
			content: "Services — Orvella Salon"
		},
		{
			property: "og:description",
			content: "Every service, an experience. Explore the complete Orvella menu."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./gallery-Cb6_8WRf.mjs");
var Route$4 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Orvella Salon" },
		{
			name: "description",
			content: "An alternate column-scroll gallery of the Orvella atelier. Click any image to step inside."
		},
		{
			property: "og:title",
			content: "Gallery — Orvella Salon"
		},
		{
			property: "og:description",
			content: "Explore the Orvella atelier in motion."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-kPEKw0Rn.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Orvella Salon" },
		{
			name: "description",
			content: "Book your appointment at Orvella Salon, Lajpat Nagar II, New Delhi."
		},
		{
			property: "og:title",
			content: "Contact — Orvella Salon"
		},
		{
			property: "og:description",
			content: "Let's create something beautiful. Reach Orvella by phone, WhatsApp, or email."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./bridal-SNl7RmZd.mjs");
var Route$2 = createFileRoute("/bridal")({
	head: () => ({ meta: [
		{ title: "Bridal Studio — Orvella Salon" },
		{
			name: "description",
			content: "Curated bridal packages, hair, makeup, and skincare rituals for your most beautiful chapter."
		},
		{
			property: "og:title",
			content: "Bridal Studio — Orvella Salon"
		},
		{
			property: "og:description",
			content: "Hand-crafted bridal services in Lajpat Nagar II, New Delhi."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CAfBMv1O.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Orvella Salon" },
		{
			name: "description",
			content: "Our story, philosophy, and the team behind Orvella Salon in Lajpat Nagar II, New Delhi."
		},
		{
			property: "og:title",
			content: "About — Orvella Salon"
		},
		{
			property: "og:description",
			content: "Crafted with passion. The story behind Orvella."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-0lqC_bA9.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar" },
		{
			name: "description",
			content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II."
		},
		{
			property: "og:title",
			content: "Orvella Salon — Luxury Hair, Skin & Beauty"
		},
		{
			property: "og:description",
			content: "Precision. Creativity. Luxury. Every visit, an experience."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$5.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$6
});
var GalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var BridalRoute = Route$2.update({
	id: "/bridal",
	path: "/bridal",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute,
	BridalRoute,
	ContactRoute,
	GalleryRoute,
	ServicesRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
