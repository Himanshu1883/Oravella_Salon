import { useEffect, useMemo, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Footer } from "@/components/layout/Footer";
import { PRE_FOOTER_BY_ROUTE, PRE_FOOTER_DEFAULT } from "@/lib/constants";
import { PAGE_BANNERS } from "@/lib/media";

const HOME_IMAGE = PAGE_BANNERS.about;

function resolveImage(key: typeof PRE_FOOTER_DEFAULT.imageKey) {
  return key === "home" ? HOME_IMAGE : PAGE_BANNERS[key];
}

/**
 * Sticky full-viewport photograph with quote + footer scrolling over it.
 */
export function PreFooterZone() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const zone = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  const content = useMemo(() => {
    const override = PRE_FOOTER_BY_ROUTE[pathname];
    return {
      eyebrow: override?.eyebrow ?? PRE_FOOTER_DEFAULT.eyebrow,
      quote: override?.quote ?? PRE_FOOTER_DEFAULT.quote,
      image: resolveImage(override?.imageKey ?? PRE_FOOTER_DEFAULT.imageKey),
    };
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const trackEl = track.current;
      if (!trackEl) return;

      if (reduce) {
        gsap.set(copy.current, { yPercent: 0 });
        return;
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: trackEl,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          copy.current,
          { yPercent: 32 },
          { yPercent: 0, ease: "power2.out", duration: 0.25 },
        )
        .to(copy.current, { yPercent: 0, duration: 0.5 })
        .to(copy.current, { yPercent: -32, ease: "power2.in", duration: 0.25 });
    }, zone);

    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 300);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [content.image, pathname]);

  return (
    <div
      ref={zone}
      className="pre-footer-zone relative bg-black"
      aria-label="Brand statement"
    >
      {/* Sticky photograph — stays locked while quote + footer scroll over */}
      <div
        className="pre-footer__bg-layer sticky top-0 z-0 h-screen w-full overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={content.image}
          alt=""
          className="pre-footer__bg absolute inset-0 h-full w-full object-cover object-center max-md:object-[center_35%]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 42%, transparent 58%, rgba(0,0,0,0.38) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, rgba(0,0,0,0.22) 100%)",
          }}
        />
      </div>

      {/* Pulled up over the sticky layer */}
      <div className="pre-footer__scroll relative z-10 -mt-[100vh]">
        <div
          ref={track}
          className="pre-footer__track relative flex h-[90vh] min-h-[520px] items-center justify-center px-6 md:h-[100vh] md:px-12"
        >
          <div ref={copy} className="pre-footer__copy mx-auto max-w-4xl text-center">
            <p className="pre-footer__eyebrow eyebrow text-gold/90">{content.eyebrow}</p>
            <blockquote
              className="pre-footer__quote heading-display mt-5 font-accent italic text-white md:mt-7"
              style={{
                fontSize: "clamp(1.85rem, 5.5vw, 4.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
              }}
            >
              &ldquo;{content.quote}&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="pre-footer__footer relative z-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

/** @deprecated Use PreFooterZone — kept for existing imports */
export const PreFooterBanner = PreFooterZone;
