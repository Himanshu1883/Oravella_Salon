import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { i as orvella_logo_png_default, n as PAGE_BANNERS, t as MEDIA } from "./media-VvPOLAU-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { N as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as Slot, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { d as waLink, n as NAV_LINKS, o as SITE, u as WHATSAPP_URL } from "./constants-B_E4oYm6.mjs";
import { A as ArrowLeft, C as ChevronRight, E as Check, M as Sparkles, O as Calendar, T as ChevronDown, _ as Heart, b as Crown, d as Paintbrush, f as Moon, g as Mail, h as MapPin, i as Star, k as ArrowRight, l as Phone, m as Menu, n as User, o as Scissors, r as Sun, t as X, u as Palette, v as Gem, w as ChevronLeft, x as Clock, y as Droplets } from "../_libs/lucide-react.mjs";
import { n as FaWhatsapp } from "../_libs/react-icons.mjs";
import { t as PreFooterZone } from "./PreFooterBanner-BnXZi_TG.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { F as addMinutes, I as addDays, a as setHours, d as isBefore, f as isAfter, h as format, i as setMinutes, j as startOfDay, u as isSameDay } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BxvVbUoz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-JxLwljim.css";
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
		lenis.on("scroll", ScrollTrigger.update);
		const ticker = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(ticker);
		gsapWithCSS.ticker.lagSmoothing(0);
		ScrollTrigger.refresh();
		requestAnimationFrame(() => ScrollTrigger.refresh());
		window.__lenis = lenis;
		return () => {
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
var BOOKING_SERVICES = [
	{
		id: "hair",
		label: "Hair Cut & Styling",
		tagline: "Shape, movement & a finish you'll love",
		duration: "60–90 min",
		icon: Scissors
	},
	{
		id: "color",
		label: "Hair Coloring",
		tagline: "Balayage, highlights & dimensional colour",
		duration: "2–3 hrs",
		icon: Palette
	},
	{
		id: "keratin",
		label: "Keratin Treatment",
		tagline: "Smoothing rituals with lasting shine",
		duration: "2–4 hrs",
		icon: Sparkles
	},
	{
		id: "botox",
		label: "Hair Botox",
		tagline: "Deep repair for soft, supple hair",
		duration: "90 min",
		icon: Droplets
	},
	{
		id: "skincare",
		label: "Advanced Skincare",
		tagline: "Facials tailored to your skin",
		duration: "60–90 min",
		icon: Heart
	},
	{
		id: "makeup",
		label: "Makeup Artistry",
		tagline: "From soft glam to editorial finish",
		duration: "60–120 min",
		icon: Paintbrush
	},
	{
		id: "nails",
		label: "Nail Services",
		tagline: "Manicure, gel & considered nail art",
		duration: "45–90 min",
		icon: Gem
	},
	{
		id: "bridal",
		label: "Bridal Package",
		tagline: "Your day, orchestrated with care",
		duration: "Half / full day",
		icon: Crown
	}
];
var BOOKING_STEPS = [
	{
		id: "service",
		label: "Service",
		description: "Choose your ritual"
	},
	{
		id: "schedule",
		label: "Schedule",
		description: "Pick date & time"
	},
	{
		id: "details",
		label: "Details",
		description: "Your information"
	},
	{
		id: "review",
		label: "Review",
		description: "Confirm booking"
	}
];
var DAY_HOURS = {
	0: {
		open: 11,
		openMin: 0,
		close: 19,
		closeMin: 0
	},
	1: {
		open: 10,
		openMin: 0,
		close: 20,
		closeMin: 0
	},
	2: {
		open: 10,
		openMin: 0,
		close: 20,
		closeMin: 0
	},
	3: {
		open: 10,
		openMin: 0,
		close: 20,
		closeMin: 0
	},
	4: {
		open: 10,
		openMin: 0,
		close: 20,
		closeMin: 0
	},
	5: {
		open: 10,
		openMin: 0,
		close: 20,
		closeMin: 0
	},
	6: {
		open: 10,
		openMin: 0,
		close: 21,
		closeMin: 0
	}
};
function hashSlot(dateKey, hour, minute) {
	const str = `${dateKey}-${hour}-${minute}`;
	let h = 0;
	for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
	return h % 100;
}
function isQuietHour(hour, minute) {
	const mins = hour * 60 + minute;
	return mins >= 600 && mins <= 690 || mins >= 1020 && mins <= 1140;
}
function isPeakHour(hour) {
	return hour >= 12 && hour < 15;
}
function resolveStatus(date, slotTime) {
	const dateKey = format(date, "yyyy-MM-dd");
	const hour = slotTime.getHours();
	const minute = slotTime.getMinutes();
	const h = hashSlot(dateKey, hour, minute);
	const day = date.getDay();
	const weekend = day === 0 || day === 6;
	let busyThreshold = 28;
	if (weekend) busyThreshold += 12;
	if (isPeakHour(hour)) busyThreshold += 18;
	if (h < busyThreshold) return "busy";
	if (h < busyThreshold + 14) return "limited";
	if (isQuietHour(hour, minute) && h < busyThreshold + 28) return "recommended";
	return "available";
}
function getDayHours(date) {
	return DAY_HOURS[date.getDay()] ?? null;
}
function isDateBookable(date, now = /* @__PURE__ */ new Date()) {
	const today = startOfDay(now);
	const target = startOfDay(date);
	if (isBefore(target, today)) return false;
	if (isAfter(target, addDays(today, 60))) return false;
	return getDayHours(date) !== null;
}
function getBookableDateRange(now = /* @__PURE__ */ new Date()) {
	return {
		from: startOfDay(now),
		to: addDays(startOfDay(now), 60)
	};
}
function formatSlotLabel(time) {
	return format(time, "h:mm a");
}
function formatBookingDate(date) {
	return format(date, "EEEE, d MMMM yyyy");
}
function getSlotsForDate(date, now = /* @__PURE__ */ new Date()) {
	const hours = getDayHours(date);
	if (!hours) return [];
	const open = setMinutes(setHours(startOfDay(date), hours.open), hours.openMin);
	const close = setMinutes(setHours(startOfDay(date), hours.close), hours.closeMin);
	const slots = [];
	let cursor = open;
	while (isBefore(cursor, close)) {
		const slotTime = cursor;
		const status = resolveStatus(date, slotTime);
		const isPast = isSameDay(date, now) && isBefore(slotTime, addMinutes(now, 30));
		const selectable = status !== "busy" && !isPast;
		slots.push({
			time: slotTime,
			label: formatSlotLabel(slotTime),
			status,
			selectable
		});
		cursor = addMinutes(cursor, 30);
	}
	return slots;
}
function getDaySummary(date, now = /* @__PURE__ */ new Date()) {
	const slots = getSlotsForDate(date, now);
	const available = slots.filter((s) => s.selectable && s.status === "available").length;
	const limited = slots.filter((s) => s.selectable && s.status === "limited").length;
	const recommended = slots.filter((s) => s.selectable && s.status === "recommended").length;
	const busy = slots.filter((s) => s.status === "busy").length;
	const parts = [];
	const openCount = available + limited + recommended;
	if (openCount > 0) parts.push(`${openCount} slot${openCount === 1 ? "" : "s"} available`);
	if (recommended > 0) parts.push(`${recommended} best time${recommended === 1 ? "" : "s"}`);
	return {
		available,
		limited,
		recommended,
		busy,
		label: parts.length ? parts.join(" · ") : "Fully booked today"
	};
}
function buildWhatsAppBookingMessage(data) {
	const lines = [
		"Hello Orvella, I'd like to book an appointment.",
		"",
		`Name: ${data.name}`,
		`Phone: ${data.phone}`
	];
	if (data.email) lines.push(`Email: ${data.email}`);
	lines.push(`Service: ${data.service}`, `Date: ${formatBookingDate(data.date)}`, `Time: ${formatSlotLabel(data.time)}`);
	if (data.notes?.trim()) lines.push(`Notes: ${data.notes.trim()}`);
	return lines.join("\n");
}
function Row({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 border-b border-border-subtle py-3 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			size: 16,
			className: "mt-0.5 shrink-0 text-gold",
			strokeWidth: 1.5
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.6rem] uppercase tracking-[0.28em] text-text-muted",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm text-text-primary",
				children: value
			})]
		})]
	});
}
function Section({ title, onEdit, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "booking-review-card mt-4 rounded-lg border bg-bg-surface/30 p-5 first:mt-0 md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.6rem] uppercase tracking-[0.28em] text-text-muted",
				children: title
			}), onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onEdit,
				className: "text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold underline-offset-4 transition hover:underline",
				children: "Edit"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		})]
	});
}
function BookingReview({ serviceId, date, time, contact, onEdit }) {
	const service = BOOKING_SERVICES.find((s) => s.id === serviceId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow text-gold/90",
			children: "Step 4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "heading-display mt-3 text-2xl text-text-primary md:text-3xl",
			children: "Review your booking"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-text-secondary",
			children: "Confirm the details below — we'll open WhatsApp to send your request."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Service",
			onEdit: onEdit && (() => onEdit("service")),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				icon: Scissors,
				label: "Selected",
				value: service?.label ?? serviceId
			}), service?.duration && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				icon: Clock,
				label: "Duration",
				value: service.duration
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Date & Time",
			onEdit: onEdit && (() => onEdit("schedule")),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				icon: Calendar,
				label: "Date",
				value: formatBookingDate(date)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				icon: Clock,
				label: "Time",
				value: formatSlotLabel(time)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Your Details",
			onEdit: onEdit && (() => onEdit("details")),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: User,
					label: "Name",
					value: contact.fullName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Phone,
					label: "Phone",
					value: contact.phone
				}),
				contact.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Mail,
					label: "Email",
					value: contact.email
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Location",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				icon: MapPin,
				label: "Salon",
				value: SITE.address
			}), contact.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-md bg-bg-primary/50 px-3 py-2 text-sm text-text-secondary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[0.6rem] uppercase tracking-[0.28em] text-text-muted",
					children: ["Notes —", " "]
				}), contact.notes]
			})]
		})
	] });
}
function BookingStepIndicator({ current, onStepClick, className }) {
	const currentIndex = BOOKING_STEPS.findIndex((s) => s.id === current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: cn("booking-steps flex flex-col rounded-xl p-5", className),
		children: BOOKING_STEPS.map((step, i) => {
			const done = i < currentIndex;
			const active = step.id === current;
			const pending = !done && !active;
			const isLast = i === BOOKING_STEPS.length - 1;
			const clickable = done && !!onStepClick;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "booking-step relative flex gap-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !clickable,
						onClick: () => clickable && onStepClick?.(step.id),
						className: cn("booking-step__dot grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 text-xs font-semibold transition-transform", done && "booking-step__dot--done", active && !done && "booking-step__dot--active", pending && "booking-step__dot--pending", clickable && "cursor-pointer hover:scale-110"),
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							size: 15,
							strokeWidth: 2.75
						}) : i + 1
					}), !isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-1 w-px flex-1 overflow-hidden bg-border-subtle",
						style: { minHeight: 26 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 top-0 bg-gold",
							style: {
								height: done ? "100%" : "0%",
								transition: "height 450ms ease"
							}
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 pb-7 pt-0.5 last:pb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("booking-step__label text-[0.65rem] font-semibold uppercase tracking-[0.3em]", done && "booking-step__label--done", active && !done && "booking-step__label--active", pending && "booking-step__label--pending"),
						children: step.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("booking-step__desc mt-1 font-display text-[0.95rem] leading-snug", done && "booking-step__desc--done", active && !done && "booking-step__desc--active", pending && "booking-step__desc--pending"),
						children: step.description
					})]
				})]
			}, step.id);
		})
	});
}
function FloatingField({ label, children, hasValue, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "booking-field relative pt-6",
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: cn("pointer-events-none absolute left-0 transition-all duration-300", hasValue ? "top-0 text-[0.65rem] tracking-[0.25em] uppercase text-gold" : "top-7 text-text-secondary"),
				children: label
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-red-400",
				children: error
			})
		]
	});
}
var inputCls = "peer w-full bg-transparent border-0 border-b border-text-muted/60 pb-2 text-text-primary outline-none focus:border-gold transition-colors";
function ContactFields({ value, onChange, errors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow text-gold/90",
			children: "Step 3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "heading-display mt-3 text-2xl text-text-primary md:text-3xl",
			children: "Your details"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-text-secondary",
			children: "We'll confirm your appointment via WhatsApp within 24 hours."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingField, {
						label: "Full name *",
						hasValue: !!value.fullName,
						error: errors.fullName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: value.fullName,
							onChange: (e) => onChange("fullName", e.target.value),
							autoComplete: "name"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingField, {
						label: "Phone *",
						hasValue: !!value.phone,
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							type: "tel",
							value: value.phone,
							onChange: (e) => onChange("phone", e.target.value),
							autoComplete: "tel"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingField, {
					label: "Email",
					hasValue: !!value.email,
					error: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						type: "email",
						value: value.email,
						onChange: (e) => onChange("email", e.target.value),
						autoComplete: "email"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingField, {
					label: "Special requests",
					hasValue: !!value.notes,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						className: inputCls,
						value: value.notes,
						onChange: (e) => onChange("notes", e.target.value),
						placeholder: ""
					})
				})
			]
		})
	] });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var LEGEND = [
	{
		status: "available",
		label: "Available",
		className: "slot--available"
	},
	{
		status: "limited",
		label: "Limited",
		className: "slot--limited"
	},
	{
		status: "busy",
		label: "Busy",
		className: "slot--busy"
	},
	{
		status: "recommended",
		label: "Best time",
		className: "slot--recommended"
	}
];
function bucketLabel(hour) {
	if (hour < 12) return "Morning";
	if (hour < 17) return "Afternoon";
	return "Evening";
}
function SlotButton({ slot, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: !slot.selectable,
		onClick: onSelect,
		className: cn("booking-slot relative rounded-md border px-2.5 py-2 text-center text-xs transition-all sm:text-sm", `slot--${slot.status}`, selected && "booking-slot--selected scale-[1.03]", !slot.selectable && "slot--busy cursor-not-allowed"),
		children: [
			slot.status === "recommended" && slot.selectable && !selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size: 10,
				className: "absolute right-1.5 top-1.5 fill-gold text-gold",
				"aria-hidden": true
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				size: 11,
				className: "absolute right-1.5 top-1.5 text-gold",
				strokeWidth: 3,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn(!slot.selectable && "line-through opacity-50"),
				children: slot.label
			})
		]
	});
}
function SchedulePicker({ date, time, onDateChange, onTimeChange, dateError, timeError }) {
	const { from, to } = getBookableDateRange();
	const slots = (0, import_react.useMemo)(() => date ? getSlotsForDate(date) : [], [date]);
	const summary = (0, import_react.useMemo)(() => date ? getDaySummary(date) : null, [date]);
	const groups = (0, import_react.useMemo)(() => {
		const buckets = {
			Morning: [],
			Afternoon: [],
			Evening: []
		};
		slots.forEach((s) => buckets[bucketLabel(s.time.getHours())].push(s));
		return Object.entries(buckets).filter(([, arr]) => arr.length > 0);
	}, [slots]);
	const selectedTimeKey = time ? time.getTime() : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "booking-schedule flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "booking-schedule__intro shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold/90",
						children: "Step 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "heading-display mt-2 text-xl text-text-primary md:text-2xl",
						children: "Choose date & time"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-text-secondary",
						children: "Pick a date, then select an available slot."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "booking-schedule__panels mt-4 flex min-h-0 flex-1 flex-col gap-4 md:mt-5 md:flex-row md:items-start md:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "booking-calendar-wrap shrink-0 self-start rounded-lg border border-border-subtle p-2 shadow-sm md:p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
						mode: "single",
						selected: date,
						onSelect: (d) => {
							onDateChange(d);
							onTimeChange(void 0);
						},
						disabled: (d) => !isDateBookable(d),
						fromDate: from,
						toDate: to,
						className: "booking-calendar mx-auto [--cell-size:2rem] md:[--cell-size:2.125rem]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "booking-schedule__times flex min-h-0 min-w-0 flex-1 flex-col md:h-[292px]",
					children: date ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "booking-schedule-summary shrink-0 rounded-lg border px-3 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-text-primary md:text-base",
								children: formatBookingDate(date)
							}), summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-text-secondary",
								children: summary.label
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex shrink-0 flex-wrap gap-1.5",
							children: LEGEND.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.18em] sm:text-[0.6rem]", item.className),
								children: [item.status === "recommended" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 8,
									className: "fill-current",
									"aria-hidden": true
								}), item.label]
							}, item.status))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "booking-schedule__slots mt-3 min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain pr-0.5",
							children: groups.map(([label, groupSlots]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-text-muted",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2",
								children: groupSlots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotButton, {
									slot,
									selected: selectedTimeKey === slot.time.getTime(),
									onSelect: () => onTimeChange(slot.time)
								}, slot.time.getTime()))
							})] }, label))
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "booking-schedule-empty flex h-full min-h-[140px] flex-1 items-center justify-center rounded-lg border border-dashed px-4 text-center text-sm text-text-muted md:min-h-0",
						children: "Select a date to view available times"
					})
				})]
			}),
			(dateError || timeError) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 shrink-0 text-sm text-red-400",
				children: dateError || timeError
			})
		]
	});
}
function ServicePicker({ value, onChange, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "booking-service-picker",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "booking-service-picker__header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "booking-service-picker__eyebrow eyebrow",
						children: "Step 1 — Service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "heading-display mt-3 text-2xl text-text-primary md:text-[1.75rem]",
						children: ["Select your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "font-accent not-italic text-gold",
							children: "ritual"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "booking-service-picker__rule",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-text-secondary",
						children: "Each appointment begins with a quiet consultation — choose the experience you'd like to reserve."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "booking-service-picker__grid mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2",
				role: "listbox",
				"aria-label": "Salon services",
				children: BOOKING_SERVICES.map((service, index) => {
					const Icon = service.icon;
					const selected = value === service.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "option",
						"aria-selected": selected,
						onClick: () => onChange(service.id),
						className: cn("booking-service-card group relative overflow-hidden text-left transition-all duration-300", selected && "booking-service-card--selected"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "booking-service-card__index",
								"aria-hidden": "true",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "booking-service-card__icon-wrap",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 22,
									strokeWidth: 1.35
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "booking-service-card__body",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "booking-service-card__title font-display text-lg leading-tight text-text-primary",
										children: service.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "booking-service-card__tagline mt-1.5 block text-[0.8rem] leading-snug text-text-secondary",
										children: service.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "booking-service-card__meta mt-3 inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											size: 11,
											strokeWidth: 1.5,
											className: "shrink-0 opacity-70"
										}), service.duration]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("booking-service-card__check grid place-items-center transition-all duration-300", selected ? "scale-100 opacity-100" : "scale-75 opacity-0"),
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 14,
									strokeWidth: 2.5
								})
							})
						]
					}, service.id);
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "booking-service-picker__error mt-4 text-sm text-red-400",
				role: "alert",
				children: error
			})
		]
	});
}
function getLenis() {
	if (typeof window === "undefined") return void 0;
	return window.__lenis;
}
/** Pause Lenis smooth scroll while overlays (modals, drawers) are open. */
function useLenisLock(locked) {
	(0, import_react.useEffect)(() => {
		if (!locked) return;
		const lenis = getLenis();
		lenis?.stop();
		return () => {
			lenis?.start();
		};
	}, [locked]);
}
var INITIAL_CONTACT = {
	fullName: "",
	phone: "",
	email: "",
	notes: ""
};
function BookingModal({ open, onOpenChange, prefillService, onClose }) {
	const [step, setStep] = (0, import_react.useState)("service");
	const [serviceId, setServiceId] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)();
	const [time, setTime] = (0, import_react.useState)();
	const [contact, setContact] = (0, import_react.useState)(INITIAL_CONTACT);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const stepIndex = BOOKING_STEPS.findIndex((s) => s.id === step);
	const isFirst = stepIndex === 0;
	const isLast = stepIndex === BOOKING_STEPS.length - 1;
	useLenisLock(open);
	(0, import_react.useEffect)(() => {
		if (open && prefillService) setServiceId(prefillService);
	}, [open, prefillService]);
	const resetForm = () => {
		setStep("service");
		setServiceId(prefillService ?? "");
		setDate(void 0);
		setTime(void 0);
		setContact(INITIAL_CONTACT);
		setSubmitted(false);
		setErrors({});
	};
	const handleOpenChange = (next) => {
		onOpenChange(next);
		if (!next) {
			setTimeout(resetForm, 300);
			onClose();
		}
	};
	const updateContact = (key, val) => {
		setContact((c) => ({
			...c,
			[key]: val
		}));
		setErrors((e) => ({
			...e,
			[key]: ""
		}));
	};
	const validateStep = () => {
		const next = {};
		if (step === "service" && !serviceId) next.service = "Please select a service";
		if (step === "schedule") {
			if (!date) next.date = "Please select a date";
			if (!time) next.time = "Please select a time slot";
		}
		if (step === "details") {
			if (!contact.fullName.trim()) next.fullName = "Name is required";
			if (!contact.phone.trim()) next.phone = "Phone is required";
			else if (!/^[\d\s+()-]{8,}$/.test(contact.phone.trim())) next.phone = "Enter a valid phone number";
		}
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	const goNext = () => {
		if (!validateStep()) return;
		const next = BOOKING_STEPS[stepIndex + 1];
		if (next) setStep(next.id);
	};
	const goBack = () => {
		const prev = BOOKING_STEPS[stepIndex - 1];
		if (prev) setStep(prev.id);
	};
	const handleSubmit = () => {
		if (!date || !time || !serviceId) return;
		const serviceLabel = BOOKING_SERVICES.find((s) => s.id === serviceId)?.label ?? serviceId;
		const message = buildWhatsAppBookingMessage({
			name: contact.fullName.trim(),
			phone: contact.phone.trim(),
			email: contact.email.trim() || void 0,
			service: serviceLabel,
			date,
			time,
			notes: contact.notes.trim() || void 0
		});
		window.open(waLink(message), "_blank", "noopener,noreferrer");
		setSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "booking-modal__overlay fixed inset-0 z-[1200] bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: cn("booking-modal__content fixed z-[1201] flex h-[96dvh] max-h-[96dvh] flex-col overflow-hidden border border-border-subtle bg-bg-primary shadow-2xl", "inset-x-0 bottom-0 top-auto rounded-t-2xl", "md:inset-auto md:left-1/2 md:top-1/2 md:h-[min(90vh,720px)] md:max-h-[min(90vh,720px)] md:w-[min(96vw,1040px)] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", "md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95"),
			"data-booking-step": step,
			"aria-describedby": void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: "Book an appointment"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "booking-modal__layout flex h-full min-h-0 flex-1 flex-col md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "booking-modal__brand relative hidden w-[38%] shrink-0 overflow-hidden md:flex md:flex-col md:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: PAGE_BANNERS.contact,
							alt: "",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-gold",
									children: "Reserve"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "heading-display mt-4 text-3xl text-white drop-shadow-md",
									children: "Book your visit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-white/85 drop-shadow-sm",
									children: "A quiet, considered appointment at Orvella — Lajpat Nagar II."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 p-8 pt-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStepIndicator, { current: step })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "booking-modal__form flex min-h-0 flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "booking-modal__header flex items-center justify-between border-b px-5 py-4 md:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "booking-modal__eyebrow eyebrow",
									children: "Book Now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-display text-lg text-text-primary",
									children: [
										"Step ",
										stepIndex + 1,
										" of ",
										BOOKING_STEPS.length
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								className: "booking-modal__close ml-auto grid h-9 w-9 place-items-center rounded-full border transition",
								"aria-label": "Close",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("booking-modal__body min-h-0 flex-1 px-5 py-5 md:px-8 md:py-6", step === "schedule" && !submitted ? "flex flex-col overflow-hidden" : "overflow-y-auto"),
							"data-lenis-prevent": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 16
									},
									animate: {
										opacity: 1,
										y: 0
									},
									className: "flex flex-col items-center py-12 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-16 w-16 place-items-center rounded-full border border-gold text-gold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 28 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "heading-display mt-8 text-3xl text-text-primary",
											children: "Request sent"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-sm text-text-secondary",
											children: "Your booking details were sent via WhatsApp. We'll confirm within 24 hours."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
											className: "mt-10",
											onClick: () => handleOpenChange(false),
											children: "Close"
										})
									]
								}, "success") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: 12
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -12
									},
									transition: { duration: .25 },
									className: cn(step === "schedule" && "flex h-full min-h-0 flex-col"),
									children: [
										step === "service" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePicker, {
											value: serviceId,
											onChange: setServiceId,
											error: errors.service
										}),
										step === "schedule" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulePicker, {
											date,
											time,
											onDateChange: setDate,
											onTimeChange: setTime,
											dateError: errors.date,
											timeError: errors.time
										}),
										step === "details" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactFields, {
											value: contact,
											onChange: updateContact,
											errors: {
												fullName: errors.fullName,
												phone: errors.phone,
												email: errors.email
											}
										}),
										step === "review" && date && time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingReview, {
											serviceId,
											date,
											time,
											contact
										})
									]
								}, step)
							})
						}),
						!submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "booking-modal__footer flex items-center justify-between gap-3 border-t px-5 py-4 md:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
								variant: "ghost",
								onClick: goBack,
								disabled: isFirst,
								className: cn(isFirst && "invisible"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
									size: 16,
									className: "mr-2 inline"
								}), "Back"]
							}), isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
								variant: "whatsapp",
								onClick: handleSubmit,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {
									size: 16,
									className: "mr-2 inline"
								}), "Confirm via WhatsApp"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
								onClick: goNext,
								children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									className: "ml-2 inline"
								})]
							})]
						})
					]
				})]
			})]
		})] })
	});
}
var BookingModalContext = (0, import_react.createContext)(null);
function useBookingModal() {
	const ctx = (0, import_react.useContext)(BookingModalContext);
	if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
	return ctx;
}
function BookingModalProvider({ children }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [prefillService, setPrefillService] = (0, import_react.useState)();
	const openBooking = (0, import_react.useCallback)((options) => {
		setPrefillService(options?.service);
		setIsOpen(true);
	}, []);
	const closeBooking = (0, import_react.useCallback)(() => {
		setIsOpen(false);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BookingModalContext.Provider, {
		value: {
			isOpen,
			openBooking,
			closeBooking
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingModal, {
			open: isOpen,
			onOpenChange: setIsOpen,
			prefillService,
			onClose: closeBooking
		})]
	});
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
	const { openBooking } = useBookingModal();
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
							onClick: () => openBooking(),
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex flex-col items-center justify-center gap-8 h-[80vh]",
			children: [NAV_LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.href,
				className: "font-display text-5xl text-text-primary hover:text-gold transition-colors",
				style: {
					opacity: open ? 1 : 0,
					transform: open ? "translateY(0)" : "translateY(30px)",
					transition: `opacity .6s ease ${.2 + i * .08}s, transform .6s ease ${.2 + i * .08}s`
				},
				children: l.label
			}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setOpen(false);
					openBooking();
				},
				className: "font-display text-5xl text-gold transition-colors hover:text-gold-muted",
				style: {
					opacity: open ? 1 : 0,
					transform: open ? "translateY(0)" : "translateY(30px)",
					transition: `opacity .6s ease ${.2 + NAV_LINKS.length * .08}s, transform .6s ease ${.2 + NAV_LINKS.length * .08}s`
				},
				children: "Book Now"
			})]
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
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: {
				duration: .45,
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BookingModalProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			!isGallery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreFooterZone, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		] }) })
	});
}
var $$splitComponentImporter$5 = () => import("./services-CvQcEQ9B.mjs");
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
var $$splitComponentImporter$4 = () => import("./gallery-CbM-vBQa.mjs");
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
var $$splitComponentImporter$3 = () => import("./contact-DnO3AQTs.mjs");
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
var $$splitComponentImporter$2 = () => import("./bridal-CABuTG-F.mjs");
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
var $$splitComponentImporter$1 = () => import("./about-CawxKrHs.mjs");
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
var $$splitComponentImporter = () => import("./routes-CsGRzJsn.mjs");
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
