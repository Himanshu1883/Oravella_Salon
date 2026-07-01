import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { f as waLink, i as PAGE_BANNERS, o as SITE, u as WHATSAPP_URL } from "./constants-DQnu0zFC.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { t as MarqueeStrip } from "./MarqueeStrip-BUhUmcXv.mjs";
import { n as FaWhatsapp, t as FaInstagram } from "../_libs/react-icons.mjs";
import { d as Mail, o as Phone, p as Clock, u as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-PSLSChPD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const root = (0, import_react.useRef)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".ct-hero-line", {
				yPercent: 110,
				opacity: 0,
				stagger: .12,
				duration: 1.2,
				ease: "power4.out",
				delay: .3
			});
			gsapWithCSS.from(".ct-hero-banner", {
				scale: 1.12,
				duration: 1.8,
				ease: "power3.out",
				delay: .2
			});
			gsapWithCSS.from(".ct-hero-sub", {
				opacity: 0,
				y: 18,
				duration: .9,
				delay: .9,
				ease: "power3.out"
			});
			gsapWithCSS.from(".ct-form > *", {
				y: 30,
				opacity: 0,
				stagger: .08,
				duration: .7,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".ct-form",
					start: "top 80%"
				}
			});
			gsapWithCSS.from(".ct-info-block", {
				x: 30,
				opacity: 0,
				stagger: .1,
				duration: .7,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".ct-info",
					start: "top 80%"
				}
			});
			gsapWithCSS.from(".ct-map", {
				scale: 1.08,
				opacity: 0,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".ct-map",
					start: "top 80%"
				}
			});
			ScrollTrigger.refresh();
		}, root);
		return () => ctx.revert();
	}, []);
	function handleSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const text = `Hello Orvella, I'd like to book an appointment.%0A%0AName: ${fd.get("name") || ""}%0APhone: ${fd.get("phone") || ""}%0AService: ${fd.get("service") || ""}%0APreferred date: ${fd.get("date") || ""}%0AMessage: ${fd.get("message") || ""}`;
		window.open(`https://wa.me/${SITE.whatsappRaw}?text=${text}`, "_blank");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "bg-bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-40 pb-16 md:pt-56 md:pb-24 px-6 md:px-12 overflow-hidden min-h-[min(72vh,820px)] flex items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PAGE_BANNERS.contact,
						alt: "",
						className: "ct-hero-banner absolute inset-0 w-full h-full object-cover",
						loading: "eager"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto max-w-[1500px] w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "[&_.eyebrow]:text-white/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Get In Touch" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "heading-display mt-8 text-white",
								style: {
									fontSize: "clamp(3rem, 9vw, 9rem)",
									lineHeight: .95
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ct-hero-line inline-block",
											children: "Let's create"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ct-hero-line inline-block",
											children: "something"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ct-hero-line inline-block italic font-accent text-gold",
											children: "beautiful."
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ct-hero-sub mt-8 max-w-lg text-white/75 text-lg leading-relaxed",
								children: "Reach us by phone, WhatsApp, or the form below — and our team will personally confirm your appointment."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, { text: "Book Now · WhatsApp Us · Visit Lajpat Nagar · " }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 md:py-32 px-6 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-12 lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Send a Note" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "heading-display mt-6 text-text-primary text-3xl md:text-5xl",
								children: [
									"Book your ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "font-accent italic text-gold",
										children: "appointment"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "ct-form mt-10 grid sm:grid-cols-2 gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "name",
										label: "Your name",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "phone",
										label: "Phone",
										type: "tel",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "service",
										label: "Service of interest",
										placeholder: "Hair, colour, bridal…",
										wide: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "date",
										label: "Preferred date",
										type: "date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "eyebrow block mb-3",
											children: "Message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "message",
											rows: 5,
											className: "w-full bg-transparent border border-border-subtle px-4 py-3 text-text-primary focus:border-gold outline-none transition-colors resize-none"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2 flex flex-wrap items-center gap-4 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
											type: "submit",
											variant: "whatsapp",
											children: ["Send via WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 16 })]
										}), sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-gold",
											children: "Opening WhatsApp…"
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "ct-info lg:col-span-5 lg:border-l lg:border-border-subtle lg:pl-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Visit · Call · Write" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 space-y-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }),
										label: "Atelier",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: SITE.address })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }),
										label: "Phone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:${SITE.phoneRaw}`,
											className: "gold-underline hover:text-gold transition",
											children: SITE.phone
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 18 }),
										label: "WhatsApp",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: WHATSAPP_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "gold-underline hover:text-gold transition",
											children: SITE.whatsapp
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }),
										label: "Email",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${SITE.email}`,
											className: "gold-underline hover:text-gold transition break-all",
											children: SITE.email
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaInstagram, { size: 18 }),
										label: "Instagram",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: SITE.instagram,
											target: "_blank",
											rel: "noreferrer",
											className: "gold-underline hover:text-gold transition",
											children: SITE.instagramHandle
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 18 }),
										label: "Opening hours",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1.5",
											children: [
												{
													day: "Monday — Friday",
													time: "10:00 — 20:00"
												},
												{
													day: "Saturday",
													time: "10:00 — 21:00"
												},
												{
													day: "Sunday",
													time: "11:00 — 19:00"
												}
											].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-6 text-text-secondary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-text-primary",
													children: h.time
												})]
											}, h.day))
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
									href: waLink("Hi Orvella, I'd like to book an appointment."),
									variant: "whatsapp",
									compact: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 14 }), " WhatsApp Now"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
									href: `tel:${SITE.phoneRaw}`,
									variant: "ghost",
									compact: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), " Call"]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 md:px-12 pb-24 md:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1500px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ct-map relative overflow-hidden border border-border-subtle",
						style: { aspectRatio: "16 / 9" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Orvella Salon location",
							src: "https://www.google.com/maps?q=Lajpat+Nagar+II,+New+Delhi&output=embed",
							className: "absolute inset-0 w-full h-full grayscale-[60%] contrast-110",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				})
			})
		]
	});
}
function Field({ name, label, type = "text", placeholder, required, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: wide ? "sm:col-span-2" : "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "eyebrow block mb-3",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			placeholder,
			required,
			className: "w-full bg-transparent border border-border-subtle px-4 py-3 text-text-primary focus:border-gold outline-none transition-colors"
		})]
	});
}
function InfoBlock({ icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ct-info-block flex gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-10 h-10 shrink-0 grid place-items-center border border-gold/50 text-gold rounded-full",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-2",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-text-secondary leading-relaxed",
				children
			})]
		})]
	});
}
//#endregion
export { ContactPage as component };
