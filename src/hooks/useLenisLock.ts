import { useEffect } from "react";

type LenisInstance = { stop: () => void; start: () => void };

function getLenis(): LenisInstance | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { __lenis?: LenisInstance }).__lenis;
}

/** Pause Lenis smooth scroll while overlays (modals, drawers) are open. */
export function useLenisLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const lenis = getLenis();
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [locked]);
}
