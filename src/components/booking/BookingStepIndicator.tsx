import { Check } from "lucide-react";
import { BOOKING_STEPS, type BookingStepId } from "@/lib/booking-constants";
import { cn } from "@/lib/utils";

type Props = {
  current: BookingStepId;
  onStepClick?: (id: BookingStepId) => void;
  className?: string;
};

export function BookingStepIndicator({ current, onStepClick, className }: Props) {
  const currentIndex = BOOKING_STEPS.findIndex((s) => s.id === current);

  return (
    <ol className={cn("booking-steps flex flex-col rounded-xl p-5", className)}>
      {BOOKING_STEPS.map((step, i) => {
        const done = i < currentIndex;
        const active = step.id === current;
        const pending = !done && !active;
        const isLast = i === BOOKING_STEPS.length - 1;
        const clickable = done && !!onStepClick;

        return (
          <li key={step.id} className="booking-step relative flex gap-3.5">
            <div className="flex shrink-0 flex-col items-center">
              <button
                type="button"
                disabled={!clickable}
                onClick={() => clickable && onStepClick?.(step.id)}
                className={cn(
                  "booking-step__dot grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 text-xs font-semibold transition-transform",
                  done && "booking-step__dot--done",
                  active && !done && "booking-step__dot--active",
                  pending && "booking-step__dot--pending",
                  clickable && "cursor-pointer hover:scale-110",
                )}
              >
                {done ? <Check size={15} strokeWidth={2.75} /> : i + 1}
              </button>
              {!isLast && (
                <div className="relative mt-1 w-px flex-1 overflow-hidden bg-border-subtle" style={{ minHeight: 26 }}>
                  <div
                    className="absolute inset-x-0 top-0 bg-gold"
                    style={{ height: done ? "100%" : "0%", transition: "height 450ms ease" }}
                  />
                </div>
              )}
            </div>
            <div className="min-w-0 pb-7 pt-0.5 last:pb-0">
              <p
                className={cn(
                  "booking-step__label text-[0.65rem] font-semibold uppercase tracking-[0.3em]",
                  done && "booking-step__label--done",
                  active && !done && "booking-step__label--active",
                  pending && "booking-step__label--pending",
                )}
              >
                {step.label}
              </p>
              <p
                className={cn(
                  "booking-step__desc mt-1 font-display text-[0.95rem] leading-snug",
                  done && "booking-step__desc--done",
                  active && !done && "booking-step__desc--active",
                  pending && "booking-step__desc--pending",
                )}
              >
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}