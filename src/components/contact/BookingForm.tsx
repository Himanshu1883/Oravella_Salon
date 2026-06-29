import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CtaButton } from "@/components/ui/CtaButton";
import { waLink } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Hair Cut & Styling",
  "Hair Coloring",
  "Keratin Treatment",
  "Botox Treatment",
  "Advanced Skincare",
  "Makeup",
  "Nail Services",
  "Bridal Package",
  "Other",
];

const TIME_OPTIONS = ["Morning", "Afternoon", "Evening"];

function FloatingField({
  label,
  children,
  hasValue,
}: {
  label: string;
  children: ReactNode;
  hasValue: boolean;
}) {
  return (
    <div className="floating-field relative pt-6">
      {children}
      <label
        className={`pointer-events-none absolute left-0 transition-all duration-300 ${
          hasValue
            ? "top-0 text-[0.65rem] tracking-[0.25em] uppercase text-gold"
            : "top-7 text-text-secondary"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

const inputCls =
  "peer w-full bg-transparent border-0 border-b border-text-muted/60 pb-2 text-text-primary outline-none focus:border-gold transition-colors";

export function BookingForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div id="booking" className="bg-bg-secondary p-8 md:p-12 border border-border-subtle">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold text-gold">
              <Check size={28} />
            </div>
            <h3 className="heading-display mt-8 text-text-primary text-3xl">Thank you</h3>
            <p className="mt-4 text-text-secondary max-w-md mx-auto">
              Your appointment request has been received. We'll confirm via WhatsApp within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <FloatingField label="Full Name" hasValue={!!form.fullName}>
                <input className={inputCls} value={form.fullName} onChange={update("fullName")} required />
              </FloatingField>
              <FloatingField label="Phone" hasValue={!!form.phone}>
                <input className={inputCls} value={form.phone} onChange={update("phone")} required />
              </FloatingField>
            </div>

            <FloatingField label="Email" hasValue={!!form.email}>
              <input type="email" className={inputCls} value={form.email} onChange={update("email")} />
            </FloatingField>

            <div className="grid sm:grid-cols-2 gap-6">
              <FloatingField label="Service" hasValue={!!form.service}>
                <select className={inputCls} value={form.service} onChange={update("service")} required>
                  <option value="" />
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o} className="bg-bg-secondary text-text-primary">
                      {o}
                    </option>
                  ))}
                </select>
              </FloatingField>
              <FloatingField label="Preferred Time" hasValue={!!form.time}>
                <select className={inputCls} value={form.time} onChange={update("time")}>
                  <option value="" />
                  {TIME_OPTIONS.map((o) => (
                    <option key={o} value={o} className="bg-bg-secondary text-text-primary">
                      {o}
                    </option>
                  ))}
                </select>
              </FloatingField>
            </div>

            <FloatingField label="Preferred Date" hasValue={!!form.date}>
              <input type="date" className={inputCls} value={form.date} onChange={update("date")} />
            </FloatingField>

            <FloatingField label="Message" hasValue={!!form.message}>
              <textarea rows={3} className={inputCls} value={form.message} onChange={update("message")} />
            </FloatingField>

            <CtaButton type="submit" variant="gold" className="w-full" disabled={submitting}>
              {submitting ? "Sending…" : "Request Appointment"}
            </CtaButton>

            <div className="flex items-center gap-4 text-text-muted text-xs">
              <span className="h-px flex-1 bg-border-subtle" />
              or
              <span className="h-px flex-1 bg-border-subtle" />
            </div>

            <CtaButton
              href={waLink(
                `Hello Orvella, I'd like to book ${form.service || "an appointment"}${
                  form.fullName ? ` for ${form.fullName}` : ""
                }.`
              )}
              variant="whatsapp"
              className="w-full"
            >
              <FaWhatsapp size={16} /> Book Directly on WhatsApp
            </CtaButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
