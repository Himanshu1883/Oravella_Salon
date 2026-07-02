import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { MEDIA } from "@/lib/media";
import { PreFooterZone } from "@/components/layout/PreFooterBanner";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import "./column-scroll.css";

/* -------------------------------------------------------------------------
   Data — 24 items across 3 columns, mirroring the Codrops demo layout.
   data-pos values are interleaved across columns so the open/close FLIP
   maps each grid item to its content item (content[pos-1]).
-------------------------------------------------------------------------- */

const IMAGES = [
  MEDIA.salonLounge,
  MEDIA.salonChandelier,
  MEDIA.salonNails,
  MEDIA.salonLounge2,
  MEDIA.salonExtra1,
  MEDIA.salonExtra2,
];

const TITLES = [
  "Velvet Hour", "Golden Ratio", "Soft Power", "Quiet Luxe", "Atelier Light",
  "Slow Beauty", "The Finish", "Gilded", "Ivory", "Rose Gold", "Bespoke",
  "Handwork", "Stillness", "Warm Light", "Polished", "The Lounge",
  "Considered", "Crafted", "Unhurried", "Glow", "Texture", "Balance",
  "Shine", "Detail",
];

const TEXTS = [
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
  "The details others overlook, we notice first.",
];

const COLUMN_POSITIONS = [
  [2, 5, 8, 11, 14, 17, 20, 23], // left
  [1, 4, 7, 10, 13, 16, 19, 22], // middle (scroll-section)
  [3, 6, 9, 12, 15, 18, 21, 24], // right
];

interface Item {
  pos: number;
  image: string;
  title: string;
  text: string;
  year: string;
}

function buildData() {
  const byPosition: Item[] = new Array(24);
  let imgI = 0;
  const columns: Item[][] = COLUMN_POSITIONS.map((positions) =>
    positions.map((pos) => {
      const idx = pos - 1;
      const item: Item = {
        pos,
        image: IMAGES[imgI % IMAGES.length],
        title: TITLES[idx],
        text: TEXTS[idx],
        year: `Nº ${String(idx + 1).padStart(2, "0")}`,
      };
      imgI += 1;
      byPosition[idx] = item;
      return item;
    })
  );
  const nav = Array.from({ length: 19 }, (_, i) => IMAGES[i % IMAGES.length]);
  return { columns, byPosition, nav };
}

const DATA = buildData();

/* -------------------------------------------------------------------------
   Helpers ported from the demo (utils.js)
-------------------------------------------------------------------------- */

function calcWinsize() {
  return { width: window.innerWidth, height: window.innerHeight };
}

function adjustedBoundingRect(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx && tx !== "none") {
    let sx: number, sy: number, dx: number, dy: number;
    if (tx.startsWith("matrix3d(")) {
      const ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0]; sy = +ta[5]; dx = +ta[12]; dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      const ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0]; sy = +ta[3]; dx = +ta[4]; dy = +ta[5];
    } else {
      return rect;
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth;
    const h = sy ? rect.height / sy : el.offsetHeight;
    return { x, y, width: w, height: h, top: y, right: x + w, bottom: y + h, left: x };
  }
  return rect;
}

/* -------------------------------------------------------------------------
   GridItem / ContentItem (ported)
-------------------------------------------------------------------------- */

class ContentItem {
  el: HTMLElement;
  title: HTMLElement | null;
  text: HTMLElement | null;
  constructor(el: HTMLElement) {
    this.el = el;
    this.title = el.querySelector(".content__item-title");
    this.text = el.querySelector(".content__item-text");
  }
}

class GridItem {
  el: HTMLElement;
  imgOuter: HTMLElement;
  imgInner: HTMLElement;
  caption: HTMLElement | null;
  position: number;
  contentItem: ContentItem | null = null;
  constructor(el: HTMLElement) {
    this.el = el;
    this.imgOuter = el.querySelector(".column__item-imgwrap") as HTMLElement;
    this.imgInner = el.querySelector(".column__item-img") as HTMLElement;
    this.position = Number(this.imgOuter.dataset.pos) - 1;
    this.caption = el.querySelector("figcaption");
  }
}

/* -------------------------------------------------------------------------
   Grid (ported from grid.js, scoped to a root element + cleanup)
-------------------------------------------------------------------------- */

type LocoCtor = new (opts: Record<string, unknown>) => {
  on: (ev: string, cb: (obj: { scroll: { y: number } }) => void) => void;
  destroy: () => void;
  scrollTo: (target: number, opts?: Record<string, unknown>) => void;
};

class Grid {
  el: HTMLElement;
  root: HTMLElement;
  Loco: LocoCtor;
  oddColumns: HTMLElement[];
  gridItems: HTMLElement[];
  content: HTMLElement;
  contentItems: NodeListOf<HTMLElement>;
  headingTop: HTMLElement;
  headingBottom: HTMLElement;
  backCtrl: HTMLElement;
  contentNav: HTMLElement;
  contentNavItems: NodeListOf<HTMLElement>;

  gridItemArr: GridItem[] = [];
  currentGridItem = -1;
  isGridView = true;
  isAnimating = false;
  lastscroll = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lscroll: any = null;
  winsize = calcWinsize();
  viewportGridItems: GridItem[] = [];
  viewportGridItemsImgOuter: HTMLElement[] = [];
  remainingGridItems: HTMLElement[] = [];
  observer: IntersectionObserver | null = null;
  timeline: gsap.core.Timeline | null = null;

  private onResize = () => {
    this.winsize = calcWinsize();
    if (this.isGridView) return;
    const imageTransform = this.calcTransformImage();
    gsap.set(this.gridItemArr[this.currentGridItem].imgOuter, {
      scale: imageTransform.scale, x: imageTransform.x, y: imageTransform.y,
    });
    for (const [position, vp] of this.viewportGridItems.entries()) {
      const imgOuter = vp.imgOuter;
      gsap.set(imgOuter, {
        scale: this.getFinalScaleValue(imgOuter),
        x: this.getFinalTranslationValue(imgOuter, position).x,
        y: this.getFinalTranslationValue(imgOuter, position).y,
      });
    }
  };

  constructor(el: HTMLElement, root: HTMLElement, Loco: LocoCtor) {
    this.el = el;
    this.root = root;
    this.Loco = Loco;

    this.oddColumns = [...root.querySelectorAll<HTMLElement>(".column")].filter((_, i) => i !== 1);
    this.gridItems = [...root.querySelectorAll<HTMLElement>(".column__item")];
    this.content = root.querySelector(".content") as HTMLElement;
    this.contentItems = root.querySelectorAll<HTMLElement>(".content__item");
    this.headingTop = root.querySelector(".heading--up") as HTMLElement;
    this.headingBottom = root.querySelector(".heading--down") as HTMLElement;
    this.backCtrl = root.querySelector(".button-back") as HTMLElement;
    this.contentNav = root.querySelector(".content__nav") as HTMLElement;
    this.contentNavItems = root.querySelectorAll<HTMLElement>(".content__nav-item");

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
      lerp: 0.13,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
    this.lscroll.on("scroll", (obj: { scroll: { y: number } }) => {
      this.lastscroll = obj.scroll.y;
      this.oddColumns.forEach((c) => (c.style.transform = `translateY(${obj.scroll.y}px)`));
    });
  }

  initEvents() {
    for (const [position, gridItem] of this.gridItemArr.entries()) {
      gridItem.imgOuter.addEventListener("click", () => {
        if (!this.isGridView || this.isAnimating ||
            document.documentElement.classList.contains("has-scroll-scrolling")) {
          return;
        }
        this.isAnimating = true;
        this.isGridView = false;
        this.currentGridItem = position;
        this.lscroll.destroy();
        this.showContent(gridItem);
      });

      gridItem.imgOuter.addEventListener("mouseenter", () => {
        if (!this.isGridView || this.isAnimating) return;
        gsap.killTweensOf([gridItem.imgOuter, gridItem.imgInner]);
        gsap
          .timeline({
            defaults: { duration: 1.4, ease: "expo" },
            onComplete: () => gsap.set([gridItem.imgOuter, gridItem.imgInner], { willChange: "" }),
          })
          .addLabel("start", 0)
          .set([gridItem.imgOuter, gridItem.imgInner], { willChange: "transform" }, "start")
          .to(gridItem.imgOuter, { scaleY: 0.95, scaleX: 0.88 }, "start")
          .to(gridItem.imgInner, { ease: "power4", scaleY: 1.2, scaleX: 1.7 }, "start");
      });

      gridItem.imgOuter.addEventListener("mouseleave", () => {
        if (!this.isGridView || this.isAnimating) return;
        gsap.killTweensOf([gridItem.imgOuter, gridItem.imgInner]);
        gsap
          .timeline({
            defaults: { duration: 1.4, ease: "expo" },
            onComplete: () => gsap.set([gridItem.imgOuter, gridItem.imgInner], { willChange: "" }),
          })
          .addLabel("start", 0)
          .set([gridItem.imgOuter, gridItem.imgInner], { willChange: "transform" }, "start")
          .to([gridItem.imgOuter, gridItem.imgInner], { scale: 1 }, 0);
      });
    }

    window.addEventListener("resize", this.onResize);

    this.backCtrl.addEventListener("click", () => {
      if (this.isGridView || this.isAnimating) return;
      this.isAnimating = true;
      this.isGridView = true;
      this.initSmoothScroll();
      this.lscroll.scrollTo(this.lastscroll, { duration: 0, disableLerp: true });
      this.closeContent();
    });
  }

  showContent(gridItem: GridItem) {
    this.viewportGridItems = this.gridItemArr.filter(
      (el) => el !== gridItem && el.el.classList.contains("in-view")
    );
    this.remainingGridItems = this.gridItemArr
      .filter((el) => !this.viewportGridItems.includes(el) && el !== gridItem)
      .map((g) => g.el);
    this.viewportGridItemsImgOuter = this.viewportGridItems.map((g) => g.imgOuter);

    const imageTransform = this.calcTransformImage();

    gsap.killTweensOf([gridItem.imgOuter, gridItem.imgInner]);
    this.timeline = gsap
      .timeline({
        defaults: { duration: 1.4, ease: "expo.inOut" },
        onStart: () => document.body.classList.add("cs-oh"),
        onComplete: () => {
          gsap.set(this.remainingGridItems, { opacity: 0 });
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      .set([gridItem.el, gridItem.el.parentNode!.parentNode as HTMLElement], { zIndex: 100 }, "start")
      .set([gridItem.imgOuter, gridItem.imgInner, this.viewportGridItemsImgOuter], { willChange: "transform, opacity" }, "start")
      .to(this.headingTop, { y: "-200%", scaleY: 4 }, "start")
      .to(this.headingBottom, { y: "200%", scaleY: 4 }, "start+=0.05")
      .to(gridItem.imgOuter, {
        scale: imageTransform.scale, x: imageTransform.x, y: imageTransform.y,
        onComplete: () => gsap.set(gridItem.imgOuter, { willChange: "" }),
      }, "start")
      .to(gridItem.imgInner, {
        scale: 1,
        onComplete: () => gsap.set(gridItem.imgInner, { willChange: "" }),
      }, "start")
      .add(() => {
        gsap.set(this.contentNavItems, { y: `${gsap.utils.random(100, 300)}%`, opacity: 0 });
      }, "start");

    for (const [position, vp] of this.viewportGridItems.entries()) {
      const imgOuter = vp.imgOuter;
      this.timeline
        .to([vp.caption, gridItem.caption], { ease: "expo", opacity: 0, delay: 0.03 * position }, "start")
        .to(imgOuter, {
          scale: this.getFinalScaleValue(imgOuter),
          x: this.getFinalTranslationValue(imgOuter, position).x,
          y: this.getFinalTranslationValue(imgOuter, position).y,
          onComplete: () => gsap.set(imgOuter, { willChange: "" }),
          delay: 0.03 * position,
        }, "start");
    }

    this.timeline
      .addLabel("showContent", "start+=0.2")
      .to([...this.contentNavItems].slice(this.viewportGridItems.length + 1), {
        y: "0%", opacity: 1, delay: (pos: number) => 0.03 * pos,
      }, "showContent")
      .add(() => {
        gridItem.contentItem!.el.classList.add("content__item--current");
        document.body.classList.add("cs-view-content");
      }, "showContent")
      .to([this.backCtrl, this.contentNav, gridItem.contentItem!.text], { opacity: 1 }, "showContent")
      .to(gridItem.contentItem!.title, {
        opacity: 1, startAt: { y: "-100%", scaleY: 3 }, y: "0%", scaleY: 1,
      }, "showContent");
  }

  closeContent() {
    const gridItem = this.gridItemArr[this.currentGridItem];
    gsap
      .timeline({
        defaults: { duration: 1.4, ease: "expo.inOut" },
        onStart: () => {
          gsap.set(this.remainingGridItems, { opacity: 1 });
          document.body.classList.remove("cs-oh");
        },
        onComplete: () => {
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      .to([this.backCtrl, this.contentNav, gridItem.contentItem!.text], { opacity: 0 }, "start")
      .to(gridItem.contentItem!.title, { opacity: 0, y: "-100%", scaleY: 3 }, "start")
      .to([...this.contentNavItems].slice(this.viewportGridItems.length + 1), {
        y: `${gsap.utils.random(100, 300)}%`,
        opacity: 0,
        delay: (pos: number) => -0.03 * pos,
        onComplete: () => document.body.classList.remove("cs-view-content"),
      }, "start")
      .add(() => gridItem.contentItem!.el.classList.remove("content__item--current"))
      .set([gridItem.imgOuter, this.viewportGridItemsImgOuter], { willChange: "transform, opacity" }, "start")
      .to(gridItem.imgOuter, {
        scale: 1, x: 0, y: 0,
        onComplete: () => {
          gsap.set(gridItem.imgOuter, { willChange: "" });
          gsap.set([gridItem.el, gridItem.el.parentNode!.parentNode as HTMLElement], { zIndex: 1 });
        },
      }, "start")
      .to(this.viewportGridItemsImgOuter, {
        scale: 1, x: 0, y: 0,
        stagger: (pos: number) => -0.03 * pos,
        onComplete: () => gsap.set(this.viewportGridItemsImgOuter, { willChange: "" }),
      }, "start")
      .addLabel("showGrid", "start+=0.2")
      .to([this.headingTop, this.headingBottom], { y: "0%", scaleY: 1 }, "showGrid")
      .to([this.viewportGridItems.map((g) => g.caption), gridItem.caption], { ease: "power4.in", opacity: 1 }, "showGrid");
  }

  getFinalScaleValue(imgOuter: HTMLElement) {
    return this.contentNavItems[0].offsetHeight / imgOuter.offsetHeight;
  }

  getFinalTranslationValue(imgOuter: HTMLElement, position: number) {
    const imgrect = adjustedBoundingRect(imgOuter);
    const navrect = adjustedBoundingRect(this.contentNavItems[position]);
    return {
      x: navrect.left + navrect.width / 2 - (imgrect.left + imgrect.width / 2),
      y: navrect.top + navrect.height / 2 - (imgrect.top + imgrect.height / 2),
    };
  }

  trackVisibleItems() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) entry.target.classList.add("in-view");
        else entry.target.classList.remove("in-view");
      });
    });
    this.gridItems.forEach((item) => this.observer!.observe(item));
  }

  calcTransformImage() {
    const imgrect = adjustedBoundingRect(this.gridItemArr[this.currentGridItem].imgOuter);
    return {
      scale: (this.winsize.height * 0.7) / imgrect.height,
      x: this.winsize.width * 0.5 - (imgrect.left + imgrect.width / 2),
      y: this.winsize.height * 0.5 - (imgrect.top + imgrect.height / 2),
    };
  }

  destroy() {
    window.removeEventListener("resize", this.onResize);
    this.observer?.disconnect();
    this.timeline?.kill();
    try {
      this.lscroll?.destroy();
    } catch {
      /* already destroyed */
    }
  }
}

/* -------------------------------------------------------------------------
   React component
-------------------------------------------------------------------------- */

export function ColumnScrollGallery({ afterColumns }: { afterColumns?: ReactNode } = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-hero-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(".cs-hero-sub", {
        opacity: 0,
        y: 18,
        duration: 0.85,
        delay: 0.75,
        ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let grid: Grid | null = null;
    let destroyed = false;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    (async () => {
      const [{ default: LocomotiveScroll }, { default: imagesLoaded }] = await Promise.all([
        import("locomotive-scroll"),
        import("imagesloaded"),
      ]);
      if (destroyed) return;

      await new Promise<void>((resolve) => {
        imagesLoaded(
          root.querySelectorAll(".column__item-img"),
          { background: true },
          () => resolve()
        );
      });
      if (destroyed) return;

      grid = new Grid(
        root.querySelector(".cs-scroll") as HTMLElement,
        root,
        LocomotiveScroll as unknown as LocoCtor
      );
    })();

    // Grid Zoom (rendered after the columns) opens a fullscreen overlay. While
    // it is open, freeze Locomotive so the background doesn't scroll behind it.
    const onGzOpen = () => grid?.lscroll?.stop?.();
    const onGzClose = () => grid?.lscroll?.start?.();
    window.addEventListener("gz:open", onGzOpen);
    window.addEventListener("gz:close", onGzClose);

    return () => {
      destroyed = true;
      window.removeEventListener("gz:open", onGzOpen);
      window.removeEventListener("gz:close", onGzClose);
      grid?.destroy();
      document.body.classList.remove("cs-oh", "cs-view-content");
      document.documentElement.classList.remove(
        "has-scroll-smooth",
        "has-scroll-init",
        "has-scroll-scrolling"
      );
      lenis?.start();
    };
  }, []);

  return (
    <div className="cs-root" ref={rootRef}>
      <h2 className="heading heading--up">Orvella</h2>
      <h2 className="heading heading--down">Orvella</h2>

      <div className="cs-scroll" data-scroll-container="">
        <header className="cs-hero" ref={heroRef} data-scroll-section="">
          <div className="cs-hero__inner">
            <SectionEyebrow>The Atelier in Motion</SectionEyebrow>
            <h1
              className="cs-hero__title heading-display text-text-primary"
              style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)", lineHeight: 0.95 }}
            >
              <span className="block overflow-hidden">
                <span className="cs-hero-line inline-block">The</span>{" "}
                <span className="cs-hero-line inline-block italic font-accent text-gold">
                  Gallery
                </span>
              </span>
            </h1>
            <p className="cs-hero-sub cs-hero__sub text-text-secondary">
              Scroll through the spaces, details, and craft of Orvella. Tap any frame
              to step inside.
            </p>
          </div>
        </header>

        <div className="columns">
          {DATA.columns.map((col, ci) => (
            <div
              key={ci}
              className={ci === 1 ? "column-wrap" : "column-wrap column-wrap--height"}
            >
              <div className="column" {...(ci === 1 ? { "data-scroll-section": "" } : {})}>
                {col.map((item) => (
                  <figure className="column__item" key={item.pos}>
                    <div className="column__item-imgwrap" data-pos={item.pos}>
                      <div
                        className="column__item-img"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                    <figcaption className="column__item-caption">
                      <span>{item.title}</span>
                      <span>{item.year}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>

        {afterColumns ? (
          <div className="cs-after-columns" data-scroll-section="">
            {afterColumns}
          </div>
        ) : null}

        <div className="cs-footer" data-scroll-section="">
          <PreFooterZone pinned={false} />
        </div>
      </div>

      <div className="content">
        {DATA.byPosition.map((item, i) => (
          <div className="content__item" key={i}>
            <h2 className="content__item-title">{item.title}</h2>
            <div className="content__item-text">
              <span>{item.text}</span>
              <span>{item.year}</span>
            </div>
          </div>
        ))}

        <nav className="content__nav">
          <div className="content__nav-wrap">
            {DATA.nav.map((img, i) => (
              <div
                key={i}
                className="content__nav-item"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </nav>

        <button className="unbutton button-back" aria-label="Back to gallery">
          <svg viewBox="0 0 50 9" width="100%">
            <path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77" />
          </svg>
        </button>
      </div>
    </div>
  );
}
