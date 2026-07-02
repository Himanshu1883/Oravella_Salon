import { gsap } from "@/lib/gsap";
import { ImageCell } from "./ImageCell";
import { TextReveal } from "./TextReveal";
import { adjustedBoundingRect, calcWinsize } from "./utils";

let winsize = { width: 0, height: 0 };

/**
 * Codrops GridZoom — image grid zooms to enlarged view with content panel.
 * @see https://github.com/codrops/GridZoom
 */
export class GridZoomGrid {
  private root: HTMLElement;
  private abort = new AbortController();
  private onWinResize: () => void;

  DOM = {
    el: null as unknown as HTMLElement,
    imageCells: [] as Element[],
    content: null as unknown as Element,
    backCtrl: null as unknown as Element,
    miniGrid: {
      el: null as unknown as Element,
      cells: [] as Element[],
    },
  };

  imageCellArr: ImageCell[] = [];
  currentCell = -1;
  isGridView = true;
  isAnimating = false;
  textReveal: TextReveal | null = null;
  otherImageCells: Element[] = [];

  constructor(gridEl: HTMLElement, root: HTMLElement, contentRoot?: HTMLElement) {
    winsize = calcWinsize();
    const contentScope = contentRoot ?? root;
    this.root = root;
    this.DOM.el = gridEl;
    this.DOM.imageCells = [...gridEl.querySelectorAll(".grid__cell-img")];
    this.DOM.imageCells.forEach((el) => this.imageCellArr.push(new ImageCell(el, contentScope)));
    this.DOM.content = contentScope.querySelector(".content")!;
    this.DOM.backCtrl = this.DOM.content.querySelector(".back")!;
    this.DOM.miniGrid.el = this.DOM.content.querySelector(".grid--mini")!;
    this.DOM.miniGrid.cells = [...this.DOM.miniGrid.el.querySelectorAll(".grid__cell")];

    this.textReveal = new TextReveal([...gridEl.querySelectorAll(".oh")]);

    this.onWinResize = () => {
      winsize = calcWinsize();
      if (this.isGridView) return;
      const imageTransform = this.calcTransformImage();
      gsap.set(this.imageCellArr[this.currentCell]!.DOM.el, {
        scale: imageTransform.scale,
        x: imageTransform.x,
        y: imageTransform.y,
      });
    };
    window.addEventListener("resize", this.onWinResize, { signal: this.abort.signal });

    this.initEvents();
  }

  destroy() {
    this.abort.abort();
    gsap.killTweensOf([
      ...this.DOM.imageCells,
      ...this.imageCellArr.map((c) => [c.DOM.el, c.DOM.inner]).flat(),
      this.DOM.backCtrl,
      ...this.DOM.miniGrid.cells,
    ]);
    document.body.classList.remove("gz-oh");
    this.root.classList.remove("content--open");
    for (const cell of this.imageCellArr) cell.destroy();
  }

  private initEvents() {
    const { signal } = this.abort;

    for (const [position, imageCell] of this.imageCellArr.entries()) {
      const onClick = () => {
        if (!this.isGridView || this.isAnimating) return;
        this.isAnimating = true;
        this.isGridView = false;

        if (this.currentCell !== -1) {
          this.DOM.miniGrid.cells[this.currentCell]!.classList.remove("grid__cell--current");
        }
        this.currentCell = position;
        this.DOM.miniGrid.cells[this.currentCell]!.classList.add("grid__cell--current");
        this.showContent(imageCell);
      };

      const onEnter = () => {
        if (!this.isGridView) return;
        gsap.killTweensOf([imageCell.DOM.el, imageCell.DOM.inner]);
        gsap
          .timeline({ defaults: { duration: 2.4, ease: "expo" } })
          .to(imageCell.DOM.el, { scale: 0.95 }, 0)
          .to(imageCell.DOM.inner, { scale: 1.4 }, 0);
      };

      const onLeave = () => {
        if (!this.isGridView) return;
        gsap.killTweensOf([imageCell.DOM.el, imageCell.DOM.inner]);
        gsap
          .timeline({ defaults: { duration: 2.4, ease: "expo" } })
          .to([imageCell.DOM.el, imageCell.DOM.inner], { scale: 1 }, 0);
      };

      imageCell.DOM.el.addEventListener("click", onClick, { signal });
      imageCell.DOM.el.addEventListener("mouseenter", onEnter, { signal });
      imageCell.DOM.el.addEventListener("mouseleave", onLeave, { signal });
    }

    this.DOM.backCtrl.addEventListener(
      "click",
      () => {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.isGridView = true;
        this.closeContent();
      },
      { signal },
    );

    this.DOM.miniGrid.cells.forEach((cell, position) => {
      cell.addEventListener(
        "click",
        () => {
          if (this.isAnimating || this.currentCell === position) return;
          this.isAnimating = true;
          this.changeContent(position);
        },
        { signal },
      );
    });
  }

  private showContent(imageCell: ImageCell) {
    const imageTransform = this.calcTransformImage();
    this.otherImageCells = this.DOM.imageCells.filter((el) => el !== imageCell.DOM.el);

    gsap.killTweensOf([imageCell.DOM.el, imageCell.DOM.inner, this.otherImageCells]);
    gsap
      .timeline({
        defaults: { duration: 1.2, ease: "expo.inOut" },
        onStart: () => {
          document.body.classList.add("gz-oh");
          window.dispatchEvent(new Event("gz:open"));
        },
        onComplete: () => {
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      .add(() => this.textReveal?.out(), "start")
      .set(this.DOM.el, { pointerEvents: "none" }, "start")
      .set(imageCell.DOM.el, { zIndex: 100 }, "start")
      .set([imageCell.DOM.el, imageCell.DOM.inner, this.otherImageCells], {
        willChange: "transform, opacity",
      }, "start")
      .to(
        imageCell.DOM.el,
        {
          scale: imageTransform.scale,
          x: imageTransform.x,
          y: imageTransform.y,
          onComplete: () => gsap.set(imageCell.DOM.el, { willChange: "" }),
        },
        "start",
      )
      .to(
        imageCell.DOM.inner,
        {
          scale: 1,
          onComplete: () => gsap.set(imageCell.DOM.inner, { willChange: "" }),
        },
        "start",
      )
      .to([imageCell.DOM.contentItem.DOM.nav.prev, imageCell.DOM.contentItem.DOM.nav.next], {
        y: 0,
      }, "start")
      .to(
        this.otherImageCells,
        {
          opacity: 0,
          scale: 0.8,
          onComplete: () => gsap.set(this.otherImageCells, { willChange: "" }),
          stagger: { grid: "auto", amount: 0.17, from: this.currentCell },
        },
        "start",
      )
      .addLabel("showContent", "start+=0.45")
      .to(
        this.DOM.backCtrl,
        { ease: "expo", startAt: { x: "50%" }, x: "0%", opacity: 1 },
        "showContent",
      )
      .set(this.DOM.miniGrid.el, { opacity: 1 }, "showContent")
      .set(this.DOM.miniGrid.cells, { opacity: 0 }, "showContent")
      .to(
        this.DOM.miniGrid.cells,
        {
          duration: 1,
          ease: "expo",
          opacity: 1,
          startAt: { scale: 0.8 },
          scale: 1,
          stagger: { grid: "auto", amount: 0.3, from: this.currentCell },
        },
        "showContent+=0.2",
      )
      .add(() => {
        imageCell.DOM.contentItem.textReveal.in();
        imageCell.DOM.contentItem.textLinesReveal.in();
        this.DOM.content.classList.add("content--open");
      }, "showContent")
      .add(
        () => imageCell.DOM.contentItem.DOM.el.classList.add("content__item--current"),
        "showContent+=0.02",
      );
  }

  private closeContent() {
    const imageCell = this.imageCellArr[this.currentCell]!;
    this.otherImageCells = this.DOM.imageCells.filter((el) => el !== imageCell.DOM.el);

    gsap
      .timeline({
        defaults: { duration: 1, ease: "expo.inOut" },
        onStart: () => {
          document.body.classList.remove("gz-oh");
          window.dispatchEvent(new Event("gz:close"));
        },
        onComplete: () => {
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      .to(this.DOM.backCtrl, { x: "50%", opacity: 0 }, "start")
      .to(
        this.DOM.miniGrid.cells,
        {
          duration: 0.5,
          ease: "expo.in",
          opacity: 0,
          scale: 0.8,
          stagger: { grid: "auto", amount: 0.1, from: -this.currentCell },
          onComplete: () => gsap.set(this.DOM.miniGrid.el, { opacity: 0 }),
        },
        "start",
      )
      .add(() => {
        imageCell.DOM.contentItem.textReveal.out();
        imageCell.DOM.contentItem.textLinesReveal.out();
        this.DOM.content.classList.remove("content--open");
      }, "start")
      .add(() => imageCell.DOM.contentItem.DOM.el.classList.remove("content__item--current"))
      .addLabel("showGrid", 0)
      .set([imageCell.DOM.el, this.otherImageCells], { willChange: "transform, opacity" }, "showGrid")
      .to(
        imageCell.DOM.el,
        {
          scale: 1,
          x: 0,
          y: 0,
          onComplete: () => gsap.set(imageCell.DOM.el, { willChange: "", zIndex: 1 }),
        },
        "showGrid",
      )
      .to(imageCell.DOM.contentItem.DOM.nav.prev, { y: "-100%" }, "showGrid")
      .to(imageCell.DOM.contentItem.DOM.nav.next, { y: "100%" }, "showGrid")
      .to(
        this.otherImageCells,
        {
          opacity: 1,
          scale: 1,
          onComplete: () => {
            gsap.set(this.otherImageCells, { willChange: "" });
            gsap.set(this.DOM.el, { pointerEvents: "auto" });
          },
          stagger: { grid: "auto", amount: 0.17, from: -this.currentCell },
        },
        "showGrid",
      )
      .add(() => this.textReveal?.in(), "showGrid+=0.3");
  }

  private changeContent(position: number) {
    const imageCell = this.imageCellArr[this.currentCell]!;
    const upcomingImageCell = this.imageCellArr[position]!;

    this.DOM.miniGrid.cells[this.currentCell]!.classList.remove("grid__cell--current");
    this.currentCell = position;
    this.DOM.miniGrid.cells[this.currentCell]!.classList.add("grid__cell--current");

    const imageTransform = this.calcTransformImage();

    gsap
      .timeline({
        defaults: { duration: 1, ease: "expo.inOut" },
        onComplete: () => {
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      .add(imageCell.DOM.contentItem.textReveal.out(), "start")
      .add(imageCell.DOM.contentItem.textLinesReveal.out(), "start")
      .add(() => imageCell.DOM.contentItem.DOM.el.classList.remove("content__item--current"))
      .set([imageCell.DOM.el, upcomingImageCell.DOM.el], { willChange: "transform, opacity" }, "start")
      .to(
        imageCell.DOM.el,
        {
          opacity: 0,
          scale: 0.8,
          x: 0,
          y: 0,
          onComplete: () => gsap.set(imageCell.DOM.el, { willChange: "", zIndex: 1 }),
        },
        "start",
      )
      .to(imageCell.DOM.contentItem.DOM.nav.prev, { y: "-100%" }, "start")
      .to(imageCell.DOM.contentItem.DOM.nav.next, { y: "100%" }, "start")
      .addLabel("showContent", ">-=0.4")
      .set(upcomingImageCell.DOM.el, { zIndex: 100 }, "start")
      .to(
        upcomingImageCell.DOM.el,
        {
          scale: imageTransform.scale,
          x: imageTransform.x,
          y: imageTransform.y,
          opacity: 1,
          onComplete: () => gsap.set(upcomingImageCell.DOM.el, { willChange: "" }),
        },
        "start",
      )
      .to(
        [upcomingImageCell.DOM.contentItem.DOM.nav.prev, upcomingImageCell.DOM.contentItem.DOM.nav.next],
        { ease: "expo", y: 0 },
        "showContent",
      )
      .add(() => {
        upcomingImageCell.DOM.contentItem.textReveal.in();
        upcomingImageCell.DOM.contentItem.textLinesReveal.in();
      }, "showContent")
      .add(
        () => upcomingImageCell.DOM.contentItem.DOM.el.classList.add("content__item--current"),
        "showContent+=0.02",
      );
  }

  private calcTransformImage() {
    const cellrect = adjustedBoundingRect(this.imageCellArr[this.currentCell]!.DOM.el);
    return {
      scale: (winsize.width * 0.54) / cellrect.width,
      x: winsize.width * 0.65 - (cellrect.left + cellrect.width / 2),
      y: winsize.height * 0.5 - (cellrect.top + cellrect.height / 2),
    };
  }
}
