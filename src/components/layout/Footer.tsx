import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const FOOTER_HOURS = "Mon – Sun — 10:00 AM – 9:00 PM";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-bg-primary">
      {/* Top — four columns */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-8 md:px-16 pt-20 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div
            className="font-display text-text-primary tracking-[0.12em]"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1 }}
          >
            ORVELLA
          </div>
          <p className="mt-3 text-[0.65rem] tracking-[0.28em] uppercase text-text-muted">
            Salon — Est. Lajpat Nagar
          </p>
          <p className="mt-6 font-display italic text-text-secondary text-base md:text-lg leading-relaxed max-w-xs">
            {SITE.tagline}
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mb-6">
            Explore
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="font-display text-lg text-text-primary hover:text-gold transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mb-6">
            Contact
          </p>
          <ul className="space-y-4 text-sm text-text-primary leading-relaxed">
            <li className="flex gap-3 items-start">
              <MapPin size={14} className="mt-1 shrink-0 text-text-muted" strokeWidth={1.5} />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={14} className="shrink-0 text-text-muted" strokeWidth={1.5} />
              <a href={SOCIAL_LINKS.phone} className="hover:text-gold transition-colors">
                +91 95821 80189
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <FaWhatsapp size={14} className="shrink-0 text-text-muted" />
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                +91 92170 02598
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={14} className="shrink-0 text-text-muted" strokeWidth={1.5} />
              <a href={SOCIAL_LINKS.email} className="hover:text-gold transition-colors break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Follow & Hours */}
        <div>
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mb-6">
            Follow
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-text-primary hover:text-gold transition-colors"
          >
            <FaInstagram size={14} className="text-text-muted" />
            {SITE.instagramHandle}
          </a>

          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-text-muted mt-10 mb-4">
            Hours
          </p>
          <p className="text-sm text-text-primary">{FOOTER_HOURS}</p>
        </div>
      </div>

      {/* Ghost watermark */}
      <div aria-hidden className="relative pointer-events-none select-none py-4 md:py-8 overflow-hidden">
        <p
          className="text-center font-display font-normal whitespace-nowrap text-text-primary"
          style={{
            fontSize: "clamp(7rem, 22vw, 16rem)",
            lineHeight: 0.9,
            letterSpacing: "0.03em",
            opacity: 0.055,
          }}
        >
          ORVELLA
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-border-subtle">
        <p className="py-7 text-center text-[0.62rem] tracking-[0.35em] uppercase text-text-muted">
          © {year} ORVELLA SALON — CRAFTED WITH INTENTION
        </p>
      </div>
    </footer>
  );
}
