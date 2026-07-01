import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Always register on the same gsap instance we export — avoids duplicate
// gsap/ScrollTrigger copies in split production chunks (e.g. Vercel).
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export { gsap, ScrollTrigger };
