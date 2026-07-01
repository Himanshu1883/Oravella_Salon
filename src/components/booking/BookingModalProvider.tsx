import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { BookingModal } from "@/components/booking/BookingModal.tsx";

type OpenOptions = {
  service?: string;
};

type BookingModalContextValue = {
  isOpen: boolean;
  openBooking: (options?: OpenOptions) => void;
  closeBooking: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillService, setPrefillService] = useState<string | undefined>();

  const openBooking = useCallback((options?: OpenOptions) => {
    setPrefillService(options?.service);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <BookingModalContext.Provider value={{ isOpen, openBooking, closeBooking }}>
      {children}
      <BookingModal
        open={isOpen}
        onOpenChange={setIsOpen}
        prefillService={prefillService}
        onClose={closeBooking}
      />
    </BookingModalContext.Provider>
  );
}
