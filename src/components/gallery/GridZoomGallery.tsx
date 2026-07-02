import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GRID_ZOOM_ITEMS } from "@/components/gallery/grid-zoom/grid-zoom-data";
import "./grid-zoom.css";

function GridZoomContent() {
  return (
    <div className="content">
      {GRID_ZOOM_ITEMS.map((item) => (
        <div key={item.id} className="content__item" id={item.id}>
          <span className="content__item-number oh">
            <span className="oh__inner">{item.number}</span>
          </span>
          <h3 className="content__item-heading oh">
            <span className="oh__inner">{item.title}</span>
          </h3>
          <p className="content__item-text">{item.text}</p>
          <span className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </span>
          <nav className="slide-nav" aria-hidden="true">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: `url(${item.navPrev})` }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: `url(${item.navNext})` }}
            />
          </nav>
        </div>
      ))}

      <button type="button" className="unbutton back" aria-label="Back to grid">
        <svg viewBox="0 0 50 9" width="100%">
          <path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77" />
        </svg>
      </button>

      <nav className="grid grid--mini" aria-label="Mini grid navigation">
        {GRID_ZOOM_ITEMS.map((item) => (
          <div key={`mini-${item.id}`} className={`grid__cell ${item.cellClass}`}>
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export function GridZoomGallery() {
  const rootRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentHostRef = useRef<HTMLDivElement>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    // Portal to body so column-scroll's own `.cs-root .content` rules don't
    // clobber the Grid Zoom overlay. Neither ancestor is transformed, so the
    // fixed-position content behaves identically.
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const gridEl = gridRef.current;
    const contentHost = contentHostRef.current;
    if (!root || !gridEl || !contentHost) return;

    let destroyed = false;
    let grid: { destroy: () => void } | null = null;

    root.classList.add("gz-loading");

    (async () => {
      const [{ GridZoomGrid }, { preloadImages }] = await Promise.all([
        import("@/components/gallery/grid-zoom/GridZoomGrid"),
        import("@/components/gallery/grid-zoom/utils"),
      ]);
      if (destroyed) return;

      await preloadImages(contentHost, ".grid__cell-img-inner, .slide-nav__img");
      if (destroyed) return;

      root.classList.remove("gz-loading");
      grid = new GridZoomGrid(gridEl, root, contentHost);
      window.dispatchEvent(new Event("resize"));
    })();

    return () => {
      destroyed = true;
      grid?.destroy();
      document.body.classList.remove("gz-oh");
    };
  }, [portalTarget]);

  return (
    <>
      <section ref={rootRef} className="gz-root" aria-label="Grid zoom gallery">
        <div className="grid grid--large" ref={gridRef}>
          <div className="grid__cell grid__cell-c4-r2 grid__cell--padded">
            <div className="frame">
              <SectionEyebrow>Collection</SectionEyebrow>
              <h2 className="frame__title oh">
                <span className="oh__inner">Grid Zoom</span>
              </h2>
              <p className="frame__tagline oh">
                <span className="oh__inner">Tap any frame to step inside</span>
              </p>
            </div>
          </div>
          <div className="grid__cell grid__cell-c2-r2 grid__cell--padded">
            <span className="oh">
              <span className="oh__inner eyebrow text-gold">Orvella Salon</span>
            </span>
          </div>

          {GRID_ZOOM_ITEMS.map((item) => (
            <div key={item.id} className={`grid__cell ${item.cellClass}`}>
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: `url(${item.image})` }}
                  data-item={item.id}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {portalTarget &&
        createPortal(
          <div ref={contentHostRef} className="gz-root gz-content-host">
            <GridZoomContent />
          </div>,
          portalTarget,
        )}
    </>
  );
}
