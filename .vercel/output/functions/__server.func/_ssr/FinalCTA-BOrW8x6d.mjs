import { n as MEDIA, u as WHATSAPP_URL } from "./constants-DQnu0zFC.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as CtaButton } from "./CtaButton-B1cdr6-K.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { n as FaWhatsapp } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalCTA-BOrW8x6d.js
var import_jsx_runtime = require_jsx_runtime();
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-32 md:py-48 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: MEDIA.salonExtra2,
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-3xl text-center px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Begin Your Journey" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "heading-display mt-6 text-white text-4xl md:text-6xl lg:text-7xl",
						children: [
							"Book your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-accent italic text-gold",
								children: "appointment"
							}),
							" today."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-white/70 max-w-xl mx-auto",
						children: "Reserve your seat in our atelier. Our team will confirm your booking personally."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
							to: "/contact",
							onDark: true,
							children: "Book Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
							href: WHATSAPP_URL,
							variant: "whatsapp",
							onDark: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 16 }), " WhatsApp Us"]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { FinalCTA as t };
