import { Link } from "@tanstack/react-router";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-subtle bg-bg-primary pt-24 pb-8">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-2 gap-16 relative z-10">
        <div>
          <div className="font-display text-3xl tracking-[0.3em] text-gold">ORVELLA</div>
          <p className="mt-4 font-display italic text-text-secondary text-lg max-w-sm">
            {SITE.tagline}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="eyebrow mb-5">Pages</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-text-secondary hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Connect</p>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold transition">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-gold transition break-all">{SITE.email}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-gold transition inline-flex items-center gap-2"><FaWhatsapp /> WhatsApp</a></li>
              <li><a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-gold transition inline-flex items-center gap-2"><FaInstagram /> {SITE.instagramHandle}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="h-px w-full bg-border-subtle" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs text-text-muted">
          <p>{SITE.address}</p>
          <p>© {new Date().getFullYear()} Orvella Salon. All rights reserved.</p>
        </div>
      </div>

      {/* Ghost wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-[-2vw] font-display font-semibold leading-none"
        style={{
          fontSize: "clamp(5rem, 18vw, 22rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(var(--accent-gold-rgb), 0.09)",
        }}
      >
        ORVELLA
      </div>
    </footer>
  );
}
