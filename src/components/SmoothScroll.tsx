import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { useLenisScroll } from "@/hooks/useLenis";
import { ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useLenisScroll();

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 100);
    const t2 = window.setTimeout(refresh, 500);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
