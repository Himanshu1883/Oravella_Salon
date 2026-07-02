import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { wrapLines } from "./utils";

export class TextLinesReveal {
  DOM: { animationElems: Element[] };
  SplitTypeInstances: SplitType[] = [];
  lines: Element[][] = [];
  isVisible = false;
  private onResize: () => void;

  constructor(animationElems: Element | Element[]) {
    this.DOM = {
      animationElems: Array.isArray(animationElems) ? animationElems : [animationElems],
    };

    for (const el of this.DOM.animationElems) {
      const instance = new SplitType(el as HTMLElement, { types: "lines" });
      const lines = instance.lines ?? [];
      wrapLines(lines, "div", "oh");
      this.lines.push(lines);
      this.SplitTypeInstances.push(instance);
    }

    this.onResize = () => {
      this.lines = [];
      for (const instance of this.SplitTypeInstances) {
        instance.split({ types: "lines" });
        const lines = instance.lines ?? [];
        wrapLines(lines, "div", "oh");
        this.lines.push(lines);
      }
      if (!this.isVisible) {
        gsap.set(this.lines.flat(), { y: "-150%" });
      }
    };
    window.addEventListener("resize", this.onResize);
  }

  destroy() {
    window.removeEventListener("resize", this.onResize);
    for (const instance of this.SplitTypeInstances) {
      instance.revert();
    }
  }

  in() {
    this.isVisible = true;
    gsap.killTweensOf(this.lines.flat());
    return gsap
      .timeline({ defaults: { duration: 1.2, ease: "expo" } })
      .set(this.lines.flat(), { y: "150%", rotate: 15 })
      .to(this.lines.flat(), { y: "0%", rotate: 0, stagger: 0.04 });
  }

  out() {
    this.isVisible = false;
    gsap.killTweensOf(this.lines.flat());
    return gsap
      .timeline({ defaults: { duration: 0.5, ease: "expo.in" } })
      .to(this.lines.flat(), { y: "-150%", rotate: -5, stagger: 0.02 });
  }
}
