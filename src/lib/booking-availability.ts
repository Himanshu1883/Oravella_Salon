import {
  addDays,
  addMinutes,
  format,
  isAfter,
  isBefore,
  isSameDay,
  setHours,
  setMinutes,
  startOfDay,
} from "date-fns";
import { BOOKING_HORIZON_DAYS, SLOT_INTERVAL_MINUTES } from "@/lib/booking-constants";

export type SlotStatus = "available" | "limited" | "busy" | "recommended";

export type TimeSlot = {
  time: Date;
  label: string;
  status: SlotStatus;
  selectable: boolean;
};

export type DaySummary = {
  available: number;
  limited: number;
  recommended: number;
  busy: number;
  label: string;
};

type DayHours = { open: number; openMin: number; close: number; closeMin: number };

const DAY_HOURS: Record<number, DayHours> = {
  0: { open: 11, openMin: 0, close: 19, closeMin: 0 },
  1: { open: 10, openMin: 0, close: 20, closeMin: 0 },
  2: { open: 10, openMin: 0, close: 20, closeMin: 0 },
  3: { open: 10, openMin: 0, close: 20, closeMin: 0 },
  4: { open: 10, openMin: 0, close: 20, closeMin: 0 },
  5: { open: 10, openMin: 0, close: 20, closeMin: 0 },
  6: { open: 10, openMin: 0, close: 21, closeMin: 0 },
};

function hashSlot(dateKey: string, hour: number, minute: number): number {
  const str = `${dateKey}-${hour}-${minute}`;
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % 100;
}

function isQuietHour(hour: number, minute: number): boolean {
  const mins = hour * 60 + minute;
  const morning = mins >= 10 * 60 && mins <= 11 * 60 + 30;
  const evening = mins >= 17 * 60 && mins <= 19 * 60;
  return morning || evening;
}

function isPeakHour(hour: number): boolean {
  return hour >= 12 && hour < 15;
}

function resolveStatus(date: Date, slotTime: Date): SlotStatus {
  const dateKey = format(date, "yyyy-MM-dd");
  const hour = slotTime.getHours();
  const minute = slotTime.getMinutes();
  const h = hashSlot(dateKey, hour, minute);
  const day = date.getDay();
  const weekend = day === 0 || day === 6;

  let busyThreshold = 28;
  if (weekend) busyThreshold += 12;
  if (isPeakHour(hour)) busyThreshold += 18;

  if (h < busyThreshold) return "busy";
  if (h < busyThreshold + 14) return "limited";
  if (isQuietHour(hour, minute) && h < busyThreshold + 28) return "recommended";
  return "available";
}

function getDayHours(date: Date): DayHours | null {
  return DAY_HOURS[date.getDay()] ?? null;
}

export function isDateBookable(date: Date, now = new Date()): boolean {
  const today = startOfDay(now);
  const target = startOfDay(date);
  if (isBefore(target, today)) return false;
  if (isAfter(target, addDays(today, BOOKING_HORIZON_DAYS))) return false;
  return getDayHours(date) !== null;
}

export function getBookableDateRange(now = new Date()): { from: Date; to: Date } {
  return {
    from: startOfDay(now),
    to: addDays(startOfDay(now), BOOKING_HORIZON_DAYS),
  };
}

export function formatSlotLabel(time: Date): string {
  return format(time, "h:mm a");
}

export function formatBookingDate(date: Date): string {
  return format(date, "EEEE, d MMMM yyyy");
}

export function getSlotsForDate(date: Date, now = new Date()): TimeSlot[] {
  const hours = getDayHours(date);
  if (!hours) return [];

  const open = setMinutes(setHours(startOfDay(date), hours.open), hours.openMin);
  const close = setMinutes(setHours(startOfDay(date), hours.close), hours.closeMin);

  const slots: TimeSlot[] = [];
  let cursor = open;

  while (isBefore(cursor, close)) {
    const slotTime = cursor;
    const status = resolveStatus(date, slotTime);
    const isPast =
      isSameDay(date, now) && isBefore(slotTime, addMinutes(now, SLOT_INTERVAL_MINUTES));
    const selectable = status !== "busy" && !isPast;

    slots.push({
      time: slotTime,
      label: formatSlotLabel(slotTime),
      status,
      selectable,
    });

    cursor = addMinutes(cursor, SLOT_INTERVAL_MINUTES);
  }

  return slots;
}

export function getDaySummary(date: Date, now = new Date()): DaySummary {
  const slots = getSlotsForDate(date, now);
  const available = slots.filter((s) => s.selectable && s.status === "available").length;
  const limited = slots.filter((s) => s.selectable && s.status === "limited").length;
  const recommended = slots.filter((s) => s.selectable && s.status === "recommended").length;
  const busy = slots.filter((s) => s.status === "busy").length;

  const parts: string[] = [];
  const openCount = available + limited + recommended;
  if (openCount > 0) parts.push(`${openCount} slot${openCount === 1 ? "" : "s"} available`);
  if (recommended > 0) parts.push(`${recommended} best time${recommended === 1 ? "" : "s"}`);

  return {
    available,
    limited,
    recommended,
    busy,
    label: parts.length ? parts.join(" · ") : "Fully booked today",
  };
}

export function buildWhatsAppBookingMessage(data: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: Date;
  time: Date;
  notes?: string;
}): string {
  const lines = [
    "Hello Orvella, I'd like to book an appointment.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];
  if (data.email) lines.push(`Email: ${data.email}`);
  lines.push(
    `Service: ${data.service}`,
    `Date: ${formatBookingDate(data.date)}`,
    `Time: ${formatSlotLabel(data.time)}`,
  );
  if (data.notes?.trim()) lines.push(`Notes: ${data.notes.trim()}`);
  return lines.join("\n");
}
