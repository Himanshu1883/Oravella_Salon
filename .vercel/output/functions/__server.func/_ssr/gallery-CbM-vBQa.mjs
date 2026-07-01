import { o as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { t as MEDIA } from "./media-VvPOLAU-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SectionEyebrow } from "./SectionEyebrow-DcGyr-l9.mjs";
import { t as PreFooterZone } from "./PreFooterBanner-BnXZi_TG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CbM-vBQa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var IMAGES = [
	MEDIA.salonLounge,
	MEDIA.salonChandelier,
	MEDIA.salonNails,
	MEDIA.salonLounge2,
	MEDIA.salonExtra1,
	MEDIA.salonExtra2
];
var TITLES = [
	"Velvet Hour",
	"Golden Ratio",
	"Soft Power",
	"Quiet Luxe",
	"Atelier Light",
	"Slow Beauty",
	"The Finish",
	"Gilded",
	"Ivory",
	"Rose Gold",
	"Bespoke",
	"Handwork",
	"Stillness",
	"Warm Light",
	"Polished",
	"The Lounge",
	"Considered",
	"Crafted",
	"Unhurried",
	"Glow",
	"Texture",
	"Balance",
	"Shine",
	"Detail"
];
var TEXTS = [
	"A softly lit room designed around the way light moves across the day.",
	"Proportion and restraint — beauty measured, never rushed.",
	"Confidence that whispers rather than shouts.",
	"Nothing loud. Nothing hurried. A space that lets you exhale.",
	"Warm layers of light, tuned for calm and for camera alike.",
	"We do not believe beauty has to shout to be felt.",
	"The last considered touch — colour, texture and shine in balance.",
	"Hand-finished brass and warm light, every fixture chosen on purpose.",
	"Timeless elegance for the modern bride.",
	"Complete bridal luxury, start to finish.",
	"For those who deserve only the extraordinary.",
	"Careful listening and confident hands, in every appointment.",
	"The quiet moments between transformations.",
	"Ambient light that flatters and forgives.",
	"Precise, considered artistry that completes the look.",
	"Private nooks for the unhurried.",
	"We tell you what works for you, not what is fashionable.",
	"Every cut and colour the product of patience.",
	"Your morning, entirely your own.",
	"A finish that catches the light just so.",
	"Surface, feel and shine in perfect agreement.",
	"Equilibrium between bold and bare.",
	"Polished to a quiet brilliance.",
	"The details others overlook, we notice first."
];
var COLUMN_POSITIONS = [
	[
		2,
		5,
		8,
		11,
		14,
		17,
		20,
		23
	],
	[
		1,
		4,
		7,
		10,
		13,
		16,
		19,
		22
	],
	[
		3,
		6,
		9,
		12,
		15,
		18,
		21,
		24
	]
];
function buildData() {
	const byPosition = new Array(24);
	let imgI = 0;
	return {
		columns: COLUMN_POSITIONS.map((positions) => positions.map((pos) => {
			const idx = pos - 1;
			const item = {
				pos,
				image: IMAGES[imgI % IMAGES.length],
				title: TITLES[idx],
				text: TEXTS[idx],
				year: `Nº ${String(idx + 1).padStart(2, "0")}`
			};
			imgI += 1;
			byPosition[idx] = item;
			return item;
		})),
		byPosition,
		nav: Array.from({ length: 19 }, (_, i) => IMAGES[i % IMAGES.length])
	};
}
var DATA = buildData();
function calcWinsize() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	};
}
function adjustedBoundingRect(el) {
	const rect = el.getBoundingClientRect();
	const style = getComputedStyle(el);
	const tx = style.transform;
	if (tx && tx !== "none") {
		let sx, sy, dx, dy;
		if (tx.startsWith("matrix3d(")) {
			const ta = tx.slice(9, -1).split(/, /);
			sx = +ta[0];
			sy = +ta[5];
			dx = +ta[12];
			dy = +ta[13];
		} else if (tx.startsWith("matrix(")) {
			const ta = tx.slice(7, -1).split(/, /);
			sx = +ta[0];
			sy = +ta[3];
			dx = +ta[4];
			dy = +ta[5];
		} else return rect;
		const to = style.transformOrigin;
		const x = rect.x - dx - (1 - sx) * parseFloat(to);
		const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
		const w = sx ? rect.width / sx : el.offsetWidth;
		const h = sy ? rect.height / sy : el.offsetHeight;
		return {
			x,
			y,
			width: w,
			height: h,
			top: y,
			right: x + w,
			bottom: y + h,
			left: x
		};
	}
	return rect;
}
var ContentItem = class {
	el;
	title;
	text;
	constructor(el) {
		this.el = el;
		this.title = el.querySelector(".content__item-title");
		this.text = el.querySelector(".content__item-text");
	}
};
var GridItem = class {
	el;
	imgOuter;
	imgInner;
	caption;
	position;
	contentItem = null;
	constructor(el) {
		this.el = el;
		this.imgOuter = el.querySelector(".column__item-imgwrap");
		this.imgInner = el.querySelector(".column__item-img");
		this.position = Number(this.imgOuter.dataset.pos) - 1;
		this.caption = el.querySelector("figcaption");
	}
};
var Grid = class {
	el;
	root;
	Loco;
	oddColumns;
	gridItems;
	content;
	contentItems;
	headingTop;
	headingBottom;
	backCtrl;
	contentNav;
	contentNavItems;
	gridItemArr = [];
	currentGridItem = -1;
	isGridView = true;
	isAnimating = false;
	lastscroll = 0;
	lscroll = null;
	winsize = calcWinsize();
	viewportGridItems = [];
	viewportGridItemsImgOuter = [];
	remainingGridItems = [];
	observer = null;
	timeline = null;
	onResize = () => {
		this.winsize = calcWinsize();
		if (this.isGridView) return;
		const imageTransform = this.calcTransformImage();
		gsapWithCSS.set(this.gridItemArr[this.currentGridItem].imgOuter, {
			scale: imageTransform.scale,
			x: imageTransform.x,
			y: imageTransform.y
		});
		for (const [position, vp] of this.viewportGridItems.entries()) {
			const imgOuter = vp.imgOuter;
			gsapWithCSS.set(imgOuter, {
				scale: this.getFinalScaleValue(imgOuter),
				x: this.getFinalTranslationValue(imgOuter, position).x,
				y: this.getFinalTranslationValue(imgOuter, position).y
			});
		}
	};
	constructor(el, root, Loco) {
		this.el = el;
		this.root = root;
		this.Loco = Loco;
		this.oddColumns = [...root.querySelectorAll(".column")].filter((_, i) => i !== 1);
		this.gridItems = [...root.querySelectorAll(".column__item")];
		this.content = root.querySelector(".content");
		this.contentItems = root.querySelectorAll(".content__item");
		this.headingTop = root.querySelector(".heading--up");
		this.headingBottom = root.querySelector(".heading--down");
		this.backCtrl = root.querySelector(".button-back");
		this.contentNav = root.querySelector(".content__nav");
		this.contentNavItems = root.querySelectorAll(".content__nav-item");
		this.gridItems.forEach((gridItem) => {
			const newItem = new GridItem(gridItem);
			this.gridItemArr.push(newItem);
			newItem.contentItem = new ContentItem(this.contentItems[newItem.position]);
		});
		this.initSmoothScroll();
		this.initEvents();
		this.trackVisibleItems();
	}
	initSmoothScroll() {
		this.lscroll = new this.Loco({
			el: this.el,
			smooth: true,
			lerp: .13,
			smartphone: { smooth: true },
			tablet: { smooth: true }
		});
		this.lscroll.on("scroll", (obj) => {
			this.lastscroll = obj.scroll.y;
			this.oddColumns.forEach((c) => c.style.transform = `translateY(${obj.scroll.y}px)`);
		});
	}
	initEvents() {
		for (const [position, gridItem] of this.gridItemArr.entries()) {
			gridItem.imgOuter.addEventListener("click", () => {
				if (!this.isGridView || this.isAnimating || document.documentElement.classList.contains("has-scroll-scrolling")) return;
				this.isAnimating = true;
				this.isGridView = false;
				this.currentGridItem = position;
				this.lscroll.destroy();
				this.showContent(gridItem);
			});
			gridItem.imgOuter.addEventListener("mouseenter", () => {
				if (!this.isGridView || this.isAnimating) return;
				gsapWithCSS.killTweensOf([gridItem.imgOuter, gridItem.imgInner]);
				gsapWithCSS.timeline({
					defaults: {
						duration: 1.4,
						ease: "expo"
					},
					onComplete: () => gsapWithCSS.set([gridItem.imgOuter, gridItem.imgInner], { willChange: "" })
				}).addLabel("start", 0).set([gridItem.imgOuter, gridItem.imgInner], { willChange: "transform" }, "start").to(gridItem.imgOuter, {
					scaleY: .95,
					scaleX: .88
				}, "start").to(gridItem.imgInner, {
					ease: "power4",
					scaleY: 1.2,
					scaleX: 1.7
				}, "start");
			});
			gridItem.imgOuter.addEventListener("mouseleave", () => {
				if (!this.isGridView || this.isAnimating) return;
				gsapWithCSS.killTweensOf([gridItem.imgOuter, gridItem.imgInner]);
				gsapWithCSS.timeline({
					defaults: {
						duration: 1.4,
						ease: "expo"
					},
					onComplete: () => gsapWithCSS.set([gridItem.imgOuter, gridItem.imgInner], { willChange: "" })
				}).addLabel("start", 0).set([gridItem.imgOuter, gridItem.imgInner], { willChange: "transform" }, "start").to([gridItem.imgOuter, gridItem.imgInner], { scale: 1 }, 0);
			});
		}
		window.addEventListener("resize", this.onResize);
		this.backCtrl.addEventListener("click", () => {
			if (this.isGridView || this.isAnimating) return;
			this.isAnimating = true;
			this.isGridView = true;
			this.initSmoothScroll();
			this.lscroll.scrollTo(this.lastscroll, {
				duration: 0,
				disableLerp: true
			});
			this.closeContent();
		});
	}
	showContent(gridItem) {
		this.viewportGridItems = this.gridItemArr.filter((el) => el !== gridItem && el.el.classList.contains("in-view"));
		this.remainingGridItems = this.gridItemArr.filter((el) => !this.viewportGridItems.includes(el) && el !== gridItem).map((g) => g.el);
		this.viewportGridItemsImgOuter = this.viewportGridItems.map((g) => g.imgOuter);
		const imageTransform = this.calcTransformImage();
		gsapWithCSS.killTweensOf([gridItem.imgOuter, gridItem.imgInner]);
		this.timeline = gsapWithCSS.timeline({
			defaults: {
				duration: 1.4,
				ease: "expo.inOut"
			},
			onStart: () => document.body.classList.add("cs-oh"),
			onComplete: () => {
				gsapWithCSS.set(this.remainingGridItems, { opacity: 0 });
				this.isAnimating = false;
			}
		}).addLabel("start", 0).set([gridItem.el, gridItem.el.parentNode.parentNode], { zIndex: 100 }, "start").set([
			gridItem.imgOuter,
			gridItem.imgInner,
			this.viewportGridItemsImgOuter
		], { willChange: "transform, opacity" }, "start").to(this.headingTop, {
			y: "-200%",
			scaleY: 4
		}, "start").to(this.headingBottom, {
			y: "200%",
			scaleY: 4
		}, "start+=0.05").to(gridItem.imgOuter, {
			scale: imageTransform.scale,
			x: imageTransform.x,
			y: imageTransform.y,
			onComplete: () => gsapWithCSS.set(gridItem.imgOuter, { willChange: "" })
		}, "start").to(gridItem.imgInner, {
			scale: 1,
			onComplete: () => gsapWithCSS.set(gridItem.imgInner, { willChange: "" })
		}, "start").add(() => {
			gsapWithCSS.set(this.contentNavItems, {
				y: `${gsapWithCSS.utils.random(100, 300)}%`,
				opacity: 0
			});
		}, "start");
		for (const [position, vp] of this.viewportGridItems.entries()) {
			const imgOuter = vp.imgOuter;
			this.timeline.to([vp.caption, gridItem.caption], {
				ease: "expo",
				opacity: 0,
				delay: .03 * position
			}, "start").to(imgOuter, {
				scale: this.getFinalScaleValue(imgOuter),
				x: this.getFinalTranslationValue(imgOuter, position).x,
				y: this.getFinalTranslationValue(imgOuter, position).y,
				onComplete: () => gsapWithCSS.set(imgOuter, { willChange: "" }),
				delay: .03 * position
			}, "start");
		}
		this.timeline.addLabel("showContent", "start+=0.2").to([...this.contentNavItems].slice(this.viewportGridItems.length + 1), {
			y: "0%",
			opacity: 1,
			delay: (pos) => .03 * pos
		}, "showContent").add(() => {
			gridItem.contentItem.el.classList.add("content__item--current");
			document.body.classList.add("cs-view-content");
		}, "showContent").to([
			this.backCtrl,
			this.contentNav,
			gridItem.contentItem.text
		], { opacity: 1 }, "showContent").to(gridItem.contentItem.title, {
			opacity: 1,
			startAt: {
				y: "-100%",
				scaleY: 3
			},
			y: "0%",
			scaleY: 1
		}, "showContent");
	}
	closeContent() {
		const gridItem = this.gridItemArr[this.currentGridItem];
		gsapWithCSS.timeline({
			defaults: {
				duration: 1.4,
				ease: "expo.inOut"
			},
			onStart: () => {
				gsapWithCSS.set(this.remainingGridItems, { opacity: 1 });
				document.body.classList.remove("cs-oh");
			},
			onComplete: () => {
				this.isAnimating = false;
			}
		}).addLabel("start", 0).to([
			this.backCtrl,
			this.contentNav,
			gridItem.contentItem.text
		], { opacity: 0 }, "start").to(gridItem.contentItem.title, {
			opacity: 0,
			y: "-100%",
			scaleY: 3
		}, "start").to([...this.contentNavItems].slice(this.viewportGridItems.length + 1), {
			y: `${gsapWithCSS.utils.random(100, 300)}%`,
			opacity: 0,
			delay: (pos) => -.03 * pos,
			onComplete: () => document.body.classList.remove("cs-view-content")
		}, "start").add(() => gridItem.contentItem.el.classList.remove("content__item--current")).set([gridItem.imgOuter, this.viewportGridItemsImgOuter], { willChange: "transform, opacity" }, "start").to(gridItem.imgOuter, {
			scale: 1,
			x: 0,
			y: 0,
			onComplete: () => {
				gsapWithCSS.set(gridItem.imgOuter, { willChange: "" });
				gsapWithCSS.set([gridItem.el, gridItem.el.parentNode.parentNode], { zIndex: 1 });
			}
		}, "start").to(this.viewportGridItemsImgOuter, {
			scale: 1,
			x: 0,
			y: 0,
			stagger: (pos) => -.03 * pos,
			onComplete: () => gsapWithCSS.set(this.viewportGridItemsImgOuter, { willChange: "" })
		}, "start").addLabel("showGrid", "start+=0.2").to([this.headingTop, this.headingBottom], {
			y: "0%",
			scaleY: 1
		}, "showGrid").to([this.viewportGridItems.map((g) => g.caption), gridItem.caption], {
			ease: "power4.in",
			opacity: 1
		}, "showGrid");
	}
	getFinalScaleValue(imgOuter) {
		return this.contentNavItems[0].offsetHeight / imgOuter.offsetHeight;
	}
	getFinalTranslationValue(imgOuter, position) {
		const imgrect = adjustedBoundingRect(imgOuter);
		const navrect = adjustedBoundingRect(this.contentNavItems[position]);
		return {
			x: navrect.left + navrect.width / 2 - (imgrect.left + imgrect.width / 2),
			y: navrect.top + navrect.height / 2 - (imgrect.top + imgrect.height / 2)
		};
	}
	trackVisibleItems() {
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) entry.target.classList.add("in-view");
				else entry.target.classList.remove("in-view");
			});
		});
		this.gridItems.forEach((item) => this.observer.observe(item));
	}
	calcTransformImage() {
		const imgrect = adjustedBoundingRect(this.gridItemArr[this.currentGridItem].imgOuter);
		return {
			scale: this.winsize.height * .7 / imgrect.height,
			x: this.winsize.width * .5 - (imgrect.left + imgrect.width / 2),
			y: this.winsize.height * .5 - (imgrect.top + imgrect.height / 2)
		};
	}
	destroy() {
		window.removeEventListener("resize", this.onResize);
		this.observer?.disconnect();
		this.timeline?.kill();
		try {
			this.lscroll?.destroy();
		} catch {}
	}
};
function ColumnScrollGallery() {
	const rootRef = (0, import_react.useRef)(null);
	const heroRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".cs-hero-line", {
				yPercent: 110,
				opacity: 0,
				stagger: .1,
				duration: 1.1,
				ease: "power4.out",
				delay: .2
			});
			gsapWithCSS.from(".cs-hero-sub", {
				opacity: 0,
				y: 18,
				duration: .85,
				delay: .75,
				ease: "power3.out"
			});
		}, heroRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root) return;
		let grid = null;
		let destroyed = false;
		const lenis = window.__lenis;
		lenis?.stop();
		(async () => {
			const [{ default: LocomotiveScroll }, { default: imagesLoaded }] = await Promise.all([import("../_libs/locomotive-scroll.mjs").then((n) => n.t), import("../_libs/imagesloaded.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))]);
			if (destroyed) return;
			await new Promise((resolve) => {
				imagesLoaded(root.querySelectorAll(".column__item-img"), { background: true }, () => resolve());
			});
			if (destroyed) return;
			grid = new Grid(root.querySelector(".cs-scroll"), root, LocomotiveScroll);
		})();
		return () => {
			destroyed = true;
			grid?.destroy();
			document.body.classList.remove("cs-oh", "cs-view-content");
			document.documentElement.classList.remove("has-scroll-smooth", "has-scroll-init", "has-scroll-scrolling");
			lenis?.start();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cs-root",
		ref: rootRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "heading heading--up",
				children: "Orvella"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "heading heading--down",
				children: "Orvella"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cs-scroll",
				"data-scroll-container": "",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "cs-hero",
						ref: heroRef,
						"data-scroll-section": "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cs-hero__inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "The Atelier in Motion" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "cs-hero__title heading-display text-text-primary",
									style: {
										fontSize: "clamp(2.75rem, 9vw, 7.5rem)",
										lineHeight: .95
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "cs-hero-line inline-block",
												children: "The"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "cs-hero-line inline-block italic font-accent text-gold",
												children: "Gallery"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "cs-hero-sub cs-hero__sub text-text-secondary",
									children: "Scroll through the spaces, details, and craft of Orvella. Tap any frame to step inside."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "columns",
						children: DATA.columns.map((col, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: ci === 1 ? "column-wrap" : "column-wrap column-wrap--height",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "column",
								...ci === 1 ? { "data-scroll-section": "" } : {},
								children: col.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "column__item",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "column__item-imgwrap",
										"data-pos": item.pos,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "column__item-img",
											style: { backgroundImage: `url(${item.image})` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
										className: "column__item-caption",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.year })]
									})]
								}, item.pos))
							})
						}, ci))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cs-footer",
						"data-scroll-section": "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreFooterZone, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "content",
				children: [
					DATA.byPosition.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "content__item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "content__item-title",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "content__item-text",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.year })]
						})]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "content__nav",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "content__nav-wrap",
							children: DATA.nav.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "content__nav-item",
								style: { backgroundImage: `url(${img})` }
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "unbutton button-back",
						"aria-label": "Back to gallery",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 50 9",
							width: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 4.5l5-3M0 4.5l5 3M50 4.5h-77" })
						})
					})
				]
			})
		]
	});
}
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColumnScrollGallery, {});
}
//#endregion
export { GalleryPage as component };
