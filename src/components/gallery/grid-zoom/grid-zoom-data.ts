import { MEDIA } from "@/lib/media";

export type GridZoomItem = {
  id: string;
  cellClass: string;
  image: string;
  number: string;
  title: string;
  text: string;
  navPrev: string;
  navNext: string;
};

/** Grid cell layout — matches Codrops GridZoom positions exactly */
export const GRID_ZOOM_CELLS: Omit<GridZoomItem, "number" | "title" | "text" | "navPrev" | "navNext">[] = [
  { id: "gz-item-1", cellClass: "grid__cell-c1-r1", image: MEDIA.salonLounge },
  { id: "gz-item-2", cellClass: "grid__cell-c3-r1", image: MEDIA.salonChandelier },
  { id: "gz-item-3", cellClass: "grid__cell-c4-r1", image: MEDIA.salonNails },
  { id: "gz-item-4", cellClass: "grid__cell-c1-r2", image: MEDIA.salonLounge2 },
  { id: "gz-item-5", cellClass: "grid__cell-c3-r2", image: MEDIA.salonExtra1 },
  { id: "gz-item-6", cellClass: "grid__cell-c2-r3", image: MEDIA.salonExtra2 },
  { id: "gz-item-7", cellClass: "grid__cell-c4-r3", image: MEDIA.bannerAbout },
  { id: "gz-item-8", cellClass: "grid__cell-c1-r4", image: MEDIA.bannerBridal },
  { id: "gz-item-9", cellClass: "grid__cell-c3-r4", image: MEDIA.bannerServices },
  { id: "gz-item-10", cellClass: "grid__cell-c3-r5", image: MEDIA.bannerContact },
];

const COPY = [
  {
    title: "Velvet Hour",
    text: "A softly lit room designed around the way light moves across the day — calm, warm, and camera-ready.",
  },
  {
    title: "Golden Ratio",
    text: "Proportion and restraint. Beauty measured, never rushed — every frame considered twice.",
  },
  {
    title: "Soft Power",
    text: "Confidence that whispers rather than shouts. The finish you feel before you see it.",
  },
  {
    title: "Quiet Luxe",
    text: "Nothing loud. Nothing hurried. A space that lets you exhale the moment you walk in.",
  },
  {
    title: "Atelier Light",
    text: "Warm layers of light, tuned for colour work and for the quiet rituals in between.",
  },
  {
    title: "Slow Beauty",
    text: "We do not believe beauty has to shout to be felt. Every visit is unhurried by design.",
  },
  {
    title: "The Finish",
    text: "The last considered touch — colour, texture and shine brought into perfect balance.",
  },
  {
    title: "Gilded",
    text: "Hand-finished brass and warm light. Every fixture chosen on purpose, never by accident.",
  },
  {
    title: "Ivory",
    text: "Timeless elegance for the modern bride — soft, luminous, entirely your own.",
  },
  {
    title: "Rose Gold",
    text: "Complete luxury from consultation to reveal. Your ritual, orchestrated with care.",
  },
] as const;

export const GRID_ZOOM_ITEMS: GridZoomItem[] = GRID_ZOOM_CELLS.map((cell, i) => {
  const prev = GRID_ZOOM_CELLS[(i - 1 + GRID_ZOOM_CELLS.length) % GRID_ZOOM_CELLS.length]!.image;
  const next = GRID_ZOOM_CELLS[(i + 1) % GRID_ZOOM_CELLS.length]!.image;
  return {
    ...cell,
    number: String(i + 1).padStart(2, "0"),
    title: COPY[i]!.title,
    text: COPY[i]!.text,
    navPrev: prev,
    navNext: next,
  };
});
