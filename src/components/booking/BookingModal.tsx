import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { BookingReview } from "@/components/booking/BookingReview";
import { BookingStepIndicator } from "@/components/booking/BookingStepIndicator";
import { ContactFields, type ContactFormData } from "@/components/booking/ContactFields";
import { SchedulePicker } from "@/components/booking/SchedulePicker";
import { ServicePicker } from "@/components/booking/ServicePicker";
import { CtaButton } from "@/components/ui/CtaButton";
import { useLenisLock } from "@/hooks/useLenisLock";
import { buildWhatsAppBookingMessage } from "@/lib/booking-availability";
import { BOOKING_SERVICES, BOOKING_STEPS, type BookingStepId } from "@/lib/booking-constants";
import { waLink } from "@/lib/constants";
import { PAGE_BANNERS } from "@/lib/media";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefillService?: string;
  onClose: () => void;
};

const INITIAL_CONTACT: ContactFormData = {
  fullName: "",
  phone: "",
  email: "",
  notes: "",
};

export function BookingModal({ open, onOpenChange, prefillService, onClose }: Props) {
  const [step, setStep] = useState<BookingStepId>("service");
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<Date | undefined>();
  const [contact, setContact] = useState<ContactFormData>(INITIAL_CONTACT);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const stepIndex = BOOKING_STEPS.findIndex((s) => s.id === step);
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === BOOKING_STEPS.length - 1;

  useLenisLock(open);

  useEffect(() => {
    if (open && prefillService) setServiceId(prefillService);
  }, [open, prefillService]);

  const resetForm = () => {
    setStep("service");
    setServiceId(prefillService ?? "");
    setDate(undefined);
    setTime(undefined);
    setContact(INITIAL_CONTACT);
    setSubmitted(false);
    setErrors({});
  };

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (!next) {
      setTimeout(resetForm, 300);
      onClose();
    }
  };

  const updateContact = (key: keyof ContactFormData, val: string) => {
    setContact((c) => ({ ...c, [key]: val }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validateStep = (): boolean => {
    const next: Record<string, string> = {};
    if (step === "service" && !serviceId) next.service = "Please select a service";
    if (step === "schedule") {
      if (!date) next.date = "Please select a date";
      if (!time) next.time = "Please select a time slot";
    }
    if (step === "details") {
      if (!contact.fullName.trim()) next.fullName = "Name is required";
      if (!contact.phone.trim()) next.phone = "Phone is required";
      else if (!/^[\d\s+()-]{8,}$/.test(contact.phone.trim()))
        next.phone = "Enter a valid phone number";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    const next = BOOKING_STEPS[stepIndex + 1];
    if (next) setStep(next.id);
  };

  const goBack = () => {
    const prev = BOOKING_STEPS[stepIndex - 1];
    if (prev) setStep(prev.id);
  };

  const handleSubmit = () => {
    if (!date || !time || !serviceId) return;
    const serviceLabel = BOOKING_SERVICES.find((s) => s.id === serviceId)?.label ?? serviceId;
    const message = buildWhatsAppBookingMessage({
      name: contact.fullName.trim(),
      phone: contact.phone.trim(),
      email: contact.email.trim() || undefined,
      service: serviceLabel,
      date,
      time,
      notes: contact.notes.trim() || undefined,
    });
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="booking-modal__overlay fixed inset-0 z-[1200] bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "booking-modal__content fixed z-[1201] flex h-[96dvh] max-h-[96dvh] flex-col overflow-hidden border border-border-subtle bg-bg-primary shadow-2xl",
            "inset-x-0 bottom-0 top-auto rounded-t-2xl",
            "md:inset-auto md:left-1/2 md:top-1/2 md:h-[min(90vh,720px)] md:max-h-[min(90vh,720px)] md:w-[min(96vw,1040px)] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            "md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95",
          )}
          data-booking-step={step}
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">Book an appointment</DialogPrimitive.Title>

          <div className="booking-modal__layout flex h-full min-h-0 flex-1 flex-col md:flex-row">
            {/* Brand panel — desktop */}
            <aside className="booking-modal__brand relative hidden w-[38%] shrink-0 overflow-hidden md:flex md:flex-col md:justify-between">
              <img
                src={PAGE_BANNERS.contact}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />
              <div className="relative z-10 p-8">
                <p className="eyebrow text-gold">Reserve</p>
                <h2 className="heading-display mt-4 text-3xl text-white drop-shadow-md">
                  Book your visit
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/85 drop-shadow-sm">
                  A quiet, considered appointment at Orvella — Lajpat Nagar II.
                </p>
              </div>
              <div className="relative z-10 p-8 pt-0">
                <BookingStepIndicator current={step} />
              </div>
            </aside>

            {/* Form panel */}
            <div className="booking-modal__form flex min-h-0 flex-1 flex-col">
              <div className="booking-modal__header flex items-center justify-between border-b px-5 py-4 md:px-8">
                <div className="md:hidden">
                  <p className="booking-modal__eyebrow eyebrow">Book Now</p>
                  <p className="mt-1 font-display text-lg text-text-primary">
                    Step {stepIndex + 1} of {BOOKING_STEPS.length}
                  </p>
                </div>
                <DialogPrimitive.Close
                  className="booking-modal__close ml-auto grid h-9 w-9 place-items-center rounded-full border transition"
                  aria-label="Close"
                >
                  <X size={18} />
                </DialogPrimitive.Close>
              </div>

              <div
                className={cn(
                  "booking-modal__body min-h-0 flex-1 px-5 py-5 md:px-8 md:py-6",
                  step === "schedule" && !submitted
                    ? "flex flex-col overflow-hidden"
                    : "overflow-y-auto",
                )}
                data-lenis-prevent
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center py-12 text-center"
                    >
                      <div className="grid h-16 w-16 place-items-center rounded-full border border-gold text-gold">
                        <Check size={28} />
                      </div>
                      <h3 className="heading-display mt-8 text-3xl text-text-primary">
                        Request sent
                      </h3>
                      <p className="mt-4 max-w-sm text-text-secondary">
                        Your booking details were sent via WhatsApp. We&apos;ll confirm within 24
                        hours.
                      </p>
                      <CtaButton className="mt-10" onClick={() => handleOpenChange(false)}>
                        Close
                      </CtaButton>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        step === "schedule" && "flex h-full min-h-0 flex-col",
                      )}
                    >
                      {step === "service" && (
                        <ServicePicker
                          value={serviceId}
                          onChange={setServiceId}
                          error={errors.service}
                        />
                      )}
                      {step === "schedule" && (
                        <SchedulePicker
                          date={date}
                          time={time}
                          onDateChange={setDate}
                          onTimeChange={setTime}
                          dateError={errors.date}
                          timeError={errors.time}
                        />
                      )}
                      {step === "details" && (
                        <ContactFields
                          value={contact}
                          onChange={updateContact}
                          errors={{
                            fullName: errors.fullName,
                            phone: errors.phone,
                            email: errors.email,
                          }}
                        />
                      )}
                      {step === "review" && date && time && (
                        <BookingReview
                          serviceId={serviceId}
                          date={date}
                          time={time}
                          contact={contact}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {!submitted && (
                <div className="booking-modal__footer flex items-center justify-between gap-3 border-t px-5 py-4 md:px-8">
                  <CtaButton
                    variant="ghost"
                    onClick={goBack}
                    disabled={isFirst}
                    className={cn(isFirst && "invisible")}
                  >
                    <ArrowLeft size={16} className="mr-2 inline" />
                    Back
                  </CtaButton>
                  {isLast ? (
                    <CtaButton variant="whatsapp" onClick={handleSubmit}>
                      <FaWhatsapp size={16} className="mr-2 inline" />
                      Confirm via WhatsApp
                    </CtaButton>
                  ) : (
                    <CtaButton onClick={goNext}>
                      Continue
                      <ArrowRight size={16} className="ml-2 inline" />
                    </CtaButton>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
