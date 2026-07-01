import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MarqueeStrip-BUhUmcXv.js
var import_jsx_runtime = require_jsx_runtime();
function MarqueeStrip({ text }) {
	const items = Array(8).fill(text);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border-subtle py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex whitespace-nowrap",
			style: { animation: "marquee 40s linear infinite" },
			children: [...items, ...items].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display italic text-3xl md:text-5xl text-gold/70 px-8",
				children: t
			}, i))
		})
	});
}
//#endregion
export { MarqueeStrip as t };
