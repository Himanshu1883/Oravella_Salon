import { TextReveal } from "./TextReveal";
import { TextLinesReveal } from "./TextLinesReveal";

export class ContentItem {
  DOM: {
    el: Element;
    nav: { prev: Element; next: Element };
  };
  textReveal: TextReveal;
  textLinesReveal: TextLinesReveal;

  constructor(DOM_el: Element) {
    this.DOM = {
      el: DOM_el,
      nav: {
        prev: DOM_el.querySelector(".slide-nav__img--prev")!,
        next: DOM_el.querySelector(".slide-nav__img--next")!,
      },
    };
    this.textReveal = new TextReveal([...DOM_el.querySelectorAll(".oh")]);
    const textEl = DOM_el.querySelector(".content__item-text");
    this.textLinesReveal = textEl ? new TextLinesReveal(textEl) : new TextLinesReveal(DOM_el);
  }

  destroy() {
    this.textLinesReveal.destroy();
  }
}
