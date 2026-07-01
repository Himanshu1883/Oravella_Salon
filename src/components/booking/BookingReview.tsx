import type { ReactNode } from "react";
import { Calendar, Clock, Mail, MapPin, Phone, Scissors, User } from "lucide-react";
import { formatBookingDate, formatSlotLabel } from "@/lib/booking-availability";
import { BOOKING_SERVICES } from "@/lib/booking-constants";
import type { BookingStepId } from "@/lib/booking-constants";
import { SITE } from "@/lib/constants";
import type { ContactFormData } from "@/components/booking/ContactFields";

type Props = {
  serviceId: string;
  date: Date;
  time: Date;
  contact: ContactFormData;
  onEdit?: (step: BookingStepId) => void;
};

function Row({ icon: Icon, label, value }: { icon: typeof User; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-border-subtle py-3 last:border-0">
      <Icon size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
      <div className="min-w-0">
        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-text-muted">{label}</p>
        <p className="mt-0.5 text-sm text-text-primary">{value}</p>
      </div>
    </div>
  );
}

function Section({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="booking-review-card mt-4 rounded-lg border bg-bg-surface/30 p-5 first:mt-0 md:p-6">
      <div className="flex items-center justify-between">
        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-text-muted">{title}</p>
        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold underline-offset-4 transition hover:underline"
          >
            Edit
          </button>
        )}
      </div>
      <div className="mt-1">{children}</div>
    </div>
  );
}

export function BookingReview({ serviceId, date, time, contact, onEdit }: Props) {
  const service = BOOKING_SERVICES.find((s) => s.id === serviceId);

  return (
    <div>
      <p className="eyebrow text-gold/90">Step 4</p>
      <h3 className="heading-display mt-3 text-2xl text-text-primary md:text-3xl">
        Review your booking
      </h3>
      <p className="mt-2 text-sm text-text-secondary">
        Confirm the details below — we&apos;ll open WhatsApp to send your request.
      </p>

      <Section title="Service" onEdit={onEdit && (() => onEdit("service"))}>
        <Row icon={Scissors} label="Selected" value={service?.label ?? serviceId} />
        {service?.duration && <Row icon={Clock} label="Duration" value={service.duration} />}
      </Section>

      <Section title="Date &amp; Time" onEdit={onEdit && (() => onEdit("schedule"))}>
        <Row icon={Calendar} label="Date" value={formatBookingDate(date)} />
        <Row icon={Clock} label="Time" value={formatSlotLabel(time)} />
      </Section>

      <Section title="Your Details" onEdit={onEdit && (() => onEdit("details"))}>
        <Row icon={User} label="Name" value={contact.fullName} />
        <Row icon={Phone} label="Phone" value={contact.phone} />
        {contact.email && <Row icon={Mail} label="Email" value={contact.email} />}
      </Section>

      <Section title="Location">
        <Row icon={MapPin} label="Salon" value={SITE.address} />
        {contact.notes && (
          <div className="mt-3 rounded-md bg-bg-primary/50 px-3 py-2 text-sm text-text-secondary">
            <span className="text-[0.6rem] uppercase tracking-[0.28em] text-text-muted">
              Notes —{" "}
            </span>
            {contact.notes}
          </div>
        )}
      </Section>
    </div>
  );
}