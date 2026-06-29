import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-[998] w-14 h-14 grid place-items-center rounded-full text-white shadow-xl transition-transform hover:scale-110"
      style={{ background: "#25D366", boxShadow: "0 10px 30px -10px rgba(37,211,102,0.6)" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background: "#25D366",
          animation: "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
        }}
      />
      <FaWhatsapp size={26} className="relative z-10" />
      <span className="absolute right-16 whitespace-nowrap rounded-full bg-bg-secondary px-3 py-1.5 text-xs text-text-primary border border-border-subtle opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
