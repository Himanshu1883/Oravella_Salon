import type { LucideIcon } from "lucide-react";
import {
  Scissors,
  Palette,
  Sparkles,
  Droplets,
  Heart,
  Paintbrush,
  Gem,
  Crown,
} from "lucide-react";

export type BookingService = {
  id: string;
  label: string;
  tagline: string;
  duration: string;
  icon: LucideIcon;
};

export const BOOKING_SERVICES: BookingService[] = [
  {
    id: "hair",
    label: "Hair Cut & Styling",
    tagline: "Shape, movement & a finish you'll love",
    duration: "60–90 min",
    icon: Scissors,
  },
  {
    id: "color",
    label: "Hair Coloring",
    tagline: "Balayage, highlights & dimensional colour",
    duration: "2–3 hrs",
    icon: Palette,
  },
  {
    id: "keratin",
    label: "Keratin Treatment",
    tagline: "Smoothing rituals with lasting shine",
    duration: "2–4 hrs",
    icon: Sparkles,
  },
  {
    id: "botox",
    label: "Hair Botox",
    tagline: "Deep repair for soft, supple hair",
    duration: "90 min",
    icon: Droplets,
  },
  {
    id: "skincare",
    label: "Advanced Skincare",
    tagline: "Facials tailored to your skin",
    duration: "60–90 min",
    icon: Heart,
  },
  {
    id: "makeup",
    label: "Makeup Artistry",
    tagline: "From soft glam to editorial finish",
    duration: "60–120 min",
    icon: Paintbrush,
  },
  {
    id: "nails",
    label: "Nail Services",
    tagline: "Manicure, gel & considered nail art",
    duration: "45–90 min",
    icon: Gem,
  },
  {
    id: "bridal",
    label: "Bridal Package",
    tagline: "Your day, orchestrated with care",
    duration: "Half / full day",
    icon: Crown,
  },
];

export const BOOKING_STEPS = [
  { id: "service", label: "Service", description: "Choose your ritual" },
  { id: "schedule", label: "Schedule", description: "Pick date & time" },
  { id: "details", label: "Details", description: "Your information" },
  { id: "review", label: "Review", description: "Confirm booking" },
] as const;

export type BookingStepId = (typeof BOOKING_STEPS)[number]["id"];

export const BOOKING_HORIZON_DAYS = 60;
export const SLOT_INTERVAL_MINUTES = 30;
