import { useMemo } from "react";
import { Check, Star } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  formatBookingDate,
  getBookableDateRange,
  getDaySummary,
  getSlotsForDate,
  isDateBookable,
  type TimeSlot,
} from "@/lib/booking-availability";
import { cn } from "@/lib/utils";

type Props = {
  date: Date | undefined;
  time: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: Date | undefined) => void;
  dateError?: string;
  timeError?: string;
};

const LEGEND = [
  { status: "available", label: "Available", className: "slot--available" },
  { status: "limited", label: "Limited", className: "slot--limited" },
  { status: "busy", label: "Busy", className: "slot--busy" },
  { status: "recommended", label: "Best time", className: "slot--recommended" },
] as const;

function bucketLabel(hour: number) {
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}

function SlotButton({
  slot,
  selected,
  onSelect,
}: {
  slot: TimeSlot;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      disabled={!slot.selectable}
      onClick={onSelect}
      className={cn(
        "booking-slot relative rounded-md border px-2.5 py-2 text-center text-xs transition-all sm:text-sm",
        `slot--${slot.status}`,
        selected && "booking-slot--selected scale-[1.03]",
        !slot.selectable && "slot--busy cursor-not-allowed",
      )}
    >
      {slot.status === "recommended" && slot.selectable && !selected && (
        <Star size={10} className="absolute right-1.5 top-1.5 fill-gold text-gold" aria-hidden />
      )}
      {selected && (
        <Check size={11} className="absolute right-1.5 top-1.5 text-gold" strokeWidth={3} aria-hidden />
      )}
      <span className={cn(!slot.selectable && "line-through opacity-50")}>{slot.label}</span>
    </button>
  );
}

export function SchedulePicker({
  date,
  time,
  onDateChange,
  onTimeChange,
  dateError,
  timeError,
}: Props) {
  const { from, to } = getBookableDateRange();
  const slots = useMemo(() => (date ? getSlotsForDate(date) : []), [date]);
  const summary = useMemo(() => (date ? getDaySummary(date) : null), [date]);

  const groups = useMemo(() => {
    const buckets: Record<string, TimeSlot[]> = { Morning: [], Afternoon: [], Evening: [] };
    slots.forEach((s) => buckets[bucketLabel(s.time.getHours())].push(s));
    return Object.entries(buckets).filter(([, arr]) => arr.length > 0);
  }, [slots]);

  const selectedTimeKey = time ? time.getTime() : null;

  return (
    <div className="booking-schedule flex h-full min-h-0 flex-col">
      <div className="booking-schedule__intro shrink-0">
        <p className="eyebrow text-gold/90">Step 2</p>
        <h3 className="heading-display mt-2 text-xl text-text-primary md:text-2xl">
          Choose date &amp; time
        </h3>
        <p className="mt-1.5 text-sm text-text-secondary">
          Pick a date, then select an available slot.
        </p>
      </div>

      <div className="booking-schedule__panels mt-4 flex min-h-0 flex-1 flex-col gap-4 md:mt-5 md:flex-row md:items-start md:gap-6">
        <div className="booking-calendar-wrap shrink-0 self-start rounded-lg border border-border-subtle p-2 shadow-sm md:p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              onDateChange(d);
              onTimeChange(undefined);
            }}
            disabled={(d) => !isDateBookable(d)}
            fromDate={from}
            toDate={to}
            className="booking-calendar mx-auto [--cell-size:2rem] md:[--cell-size:2.125rem]"
          />
        </div>

        <div className="booking-schedule__times flex min-h-0 min-w-0 flex-1 flex-col md:h-[292px]">
          {date ? (
            <>
              <div className="booking-schedule-summary shrink-0 rounded-lg border px-3 py-2.5">
                <p className="font-display text-sm text-text-primary md:text-base">
                  {formatBookingDate(date)}
                </p>
                {summary && (
                  <p className="mt-0.5 text-xs text-text-secondary">{summary.label}</p>
                )}
              </div>

              <div className="mt-3 flex shrink-0 flex-wrap gap-1.5">
                {LEGEND.map((item) => (
                  <span
                    key={item.status}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.18em] sm:text-[0.6rem]",
                      item.className,
                    )}
                  >
                    {item.status === "recommended" && (
                      <Star size={8} className="fill-current" aria-hidden />
                    )}
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="booking-schedule__slots mt-3 min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain pr-0.5">
                {groups.map(([label, groupSlots]) => (
                  <div key={label}>
                    <p className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-text-muted">
                      {label}
                    </p>
                    <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2">
                      {groupSlots.map((slot) => (
                        <SlotButton
                          key={slot.time.getTime()}
                          slot={slot}
                          selected={selectedTimeKey === slot.time.getTime()}
                          onSelect={() => onTimeChange(slot.time)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="booking-schedule-empty flex h-full min-h-[140px] flex-1 items-center justify-center rounded-lg border border-dashed px-4 text-center text-sm text-text-muted md:min-h-0">
              Select a date to view available times
            </div>
          )}
        </div>
      </div>

      {(dateError || timeError) && (
        <p className="mt-3 shrink-0 text-sm text-red-400">{dateError || timeError}</p>
      )}
    </div>
  );
}