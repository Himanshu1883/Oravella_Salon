import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaButton-B1cdr6-K.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var VARIANTS = {
	gold: "animated-button",
	outline: "animated-button animated-button--outline",
	ghost: "animated-button animated-button--ghost",
	underline: "eyebrow gold-underline text-gold !tracking-[0.25em] px-0 py-0",
	whatsapp: "animated-button animated-button--whatsapp"
};
function AnimatedContent({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "animated-button__label",
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "animated-button__blob",
		"aria-hidden": "true"
	})] });
}
function CtaButton({ children, variant = "gold", className, compact, onDark, to, href, onClick, type = "button", disabled, target }) {
	const isUnderline = variant === "underline";
	const base = cn(VARIANTS[variant], onDark && !isUnderline && "animated-button--on-dark", compact && !isUnderline && "animated-button--compact", disabled && "opacity-60 pointer-events-none", className);
	if (isUnderline) {
		if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: base,
			children
		});
		if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: target ?? "_blank",
			rel: "noreferrer",
			className: base,
			children
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type,
			onClick,
			disabled,
			className: base,
			children
		});
	}
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: base,
		"aria-disabled": disabled || void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContent, { children })
	});
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: target ?? "_blank",
		rel: "noreferrer",
		className: base,
		"aria-disabled": disabled || void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContent, { children })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled,
		className: base,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContent, { children })
	});
}
//#endregion
export { cn as n, CtaButton as t };
