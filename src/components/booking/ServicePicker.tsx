import { Check, Clock } from "lucide-react";
import { BOOKING_SERVICES } from "@/lib/booking-constants";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  onChange: (id: string) => void;
  error?: string;
};

export function ServicePicker({ value, onChange, error }: Props) {
  return (
    <div className="booking-service-picker">
      <header className="booking-service-picker__header">
        <p className="booking-service-picker__eyebrow eyebrow">Step 1 — Service</p>
        <h3 className="heading-display mt-3 text-2xl text-text-primary md:text-[1.75rem]">
          Select your <em className="font-accent not-italic text-gold">ritual</em>
        </h3>
        <div className="booking-service-picker__rule" aria-hidden="true" />
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
          Each appointment begins with a quiet consultation — choose the experience you&apos;d like
          to reserve.
        </p>
      </header>

      <div
        className="booking-service-picker__grid mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
        role="listbox"
        aria-label="Salon services"
      >
        {BOOKING_SERVICES.map((service, index) => {
          const Icon = service.icon;
          const selected = value === service.id;

          return (
            <button
              key={service.id}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => onChange(service.id)}
              className={cn(
                "booking-service-card group relative overflow-hidden text-left transition-all duration-300",
                selected && "booking-service-card--selected",
              )}
            >
              <span className="booking-service-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="booking-service-card__icon-wrap" aria-hidden="true">
                <Icon size={22} strokeWidth={1.35} />
              </span>

              <span className="booking-service-card__body">
                <span className="booking-service-card__title font-display text-lg leading-tight text-text-primary">
                  {service.label}
                </span>
                <span className="booking-service-card__tagline mt-1.5 block text-[0.8rem] leading-snug text-text-secondary">
                  {service.tagline}
                </span>
                <span className="booking-service-card__meta mt-3 inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-text-muted">
                  <Clock size={11} strokeWidth={1.5} className="shrink-0 opacity-70" />
                  {service.duration}
                </span>
              </span>

              <span
                className={cn(
                  "booking-service-card__check grid place-items-center transition-all duration-300",
                  selected ? "scale-100 opacity-100" : "scale-75 opacity-0",
                )}
                aria-hidden="true"
              >
                <Check size={14} strokeWidth={2.5} />
              </span>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="booking-service-picker__error mt-4 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
