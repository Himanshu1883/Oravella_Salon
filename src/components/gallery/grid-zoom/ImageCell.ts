import { ContentItem } from "./ContentItem";

export class ImageCell {
  DOM: {
    el: Element;
    inner: Element;
    contentId: string;
    contentItem: ContentItem;
  };

  constructor(DOM_el: Element, root: ParentNode) {
    this.DOM = {
      el: DOM_el,
      inner: DOM_el.querySelector(".grid__cell-img-inner")!,
      contentId: (DOM_el.querySelector(".grid__cell-img-inner") as HTMLElement).dataset.item!,
      contentItem: null as unknown as ContentItem,
    };
    this.DOM.contentItem = new ContentItem(root.querySelector(`#${this.DOM.contentId}`)!);
  }

  destroy() {
    this.DOM.contentItem.destroy();
  }
}
