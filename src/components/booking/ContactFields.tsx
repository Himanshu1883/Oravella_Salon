import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function FloatingField({
  label,
  children,
  hasValue,
  error,
}: {
  label: string;
  children: ReactNode;
  hasValue: boolean;
  error?: string;
}) {
  return (
    <div className="booking-field relative pt-6">
      {children}
      <label
        className={cn(
          "pointer-events-none absolute left-0 transition-all duration-300",
          hasValue
            ? "top-0 text-[0.65rem] tracking-[0.25em] uppercase text-gold"
            : "top-7 text-text-secondary",
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

const inputCls =
  "peer w-full bg-transparent border-0 border-b border-text-muted/60 pb-2 text-text-primary outline-none focus:border-gold transition-colors";

export type ContactFormData = {
  fullName: string;
  phone: string;
  email: string;
  notes: string;
};

type Props = {
  value: ContactFormData;
  onChange: (key: keyof ContactFormData, val: string) => void;
  errors: Partial<Record<keyof ContactFormData, string>>;
};

export function ContactFields({ value, onChange, errors }: Props) {
  return (
    <div>
      <p className="eyebrow text-gold/90">Step 3</p>
      <h3 className="heading-display mt-3 text-2xl text-text-primary md:text-3xl">
        Your details
      </h3>
      <p className="mt-2 text-sm text-text-secondary">
        We&apos;ll confirm your appointment via WhatsApp within 24 hours.
      </p>

      <div className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FloatingField label="Full name *" hasValue={!!value.fullName} error={errors.fullName}>
            <input
              className={inputCls}
              value={value.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              autoComplete="name"
            />
          </FloatingField>
          <FloatingField label="Phone *" hasValue={!!value.phone} error={errors.phone}>
            <input
              className={inputCls}
              type="tel"
              value={value.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              autoComplete="tel"
            />
          </FloatingField>
        </div>

        <FloatingField label="Email" hasValue={!!value.email} error={errors.email}>
          <input
            className={inputCls}
            type="email"
            value={value.email}
            onChange={(e) => onChange("email", e.target.value)}
            autoComplete="email"
          />
        </FloatingField>

        <FloatingField label="Special requests" hasValue={!!value.notes}>
          <textarea
            rows={3}
            className={inputCls}
            value={value.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            placeholder=""
          />
        </FloatingField>
      </div>
    </div>
  );
}
