export async function preloadImages(root: ParentNode, selector = "img"): Promise<void> {
  const { default: imagesLoaded } = await import("imagesloaded");
  return new Promise((resolve) => {
    const els = root.querySelectorAll(selector);
    if (!els.length) {
      resolve();
      return;
    }
    imagesLoaded(els, { background: true }, () => resolve());
  });
}

export function calcWinsize() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }
  return { width: window.innerWidth, height: window.innerHeight };
}

export function wrapLines(elems: Element[], wrapType: string, wrapClass: string) {
  elems.forEach((char) => {
    const wrapEl = document.createElement(wrapType);
    wrapEl.className = wrapClass;
    char.parentNode?.appendChild(wrapEl);
    wrapEl.appendChild(char);
  });
}

export function adjustedBoundingRect(el: Element): DOMRect {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;

  if (!tx) return rect;

  let sx: number;
  let sy: number;
  let dx: number;
  let dy: number;

  if (tx.startsWith("matrix3d(")) {
    const ta = tx.slice(9, -1).split(/, /);
    sx = +ta[0]!;
    sy = +ta[5]!;
    dx = +ta[12]!;
    dy = +ta[13]!;
  } else if (tx.startsWith("matrix(")) {
    const ta = tx.slice(7, -1).split(/, /);
    sx = +ta[0]!;
    sy = +ta[3]!;
    dx = +ta[4]!;
    dy = +ta[5]!;
  } else {
    return rect;
  }

  const to = style.transformOrigin;
  const x = rect.x - dx - (1 - sx) * parseFloat(to);
  const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
  const w = sx ? rect.width / sx : (el as HTMLElement).offsetWidth;
  const h = sy ? rect.height / sy : (el as HTMLElement).offsetHeight;

  return {
    x,
    y,
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x,
    toJSON: () => ({}),
  } as DOMRect;
}
