import { useTheme } from "@/components/ThemeProvider";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

const BLOCKS = [
  { label: "Location", value: SITE.address },
  { label: "Hours", value: SITE.hours },
  { label: "Phone", value: SITE.phone, href: SOCIAL_LINKS.phone },
  { label: "WhatsApp", value: SITE.whatsapp, href: SOCIAL_LINKS.whatsapp, external: true },
  { label: "Email", value: SITE.email, href: SOCIAL_LINKS.email },
  { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram, external: true },
];

export function ContactInfo() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="divide-y divide-border-subtle">
        {BLOCKS.map((b) => (
          <div key={b.label} className="py-5">
            <p className="eyebrow text-[0.6rem]">{b.label}</p>
            {b.href ? (
              <a
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel={b.external ? "noreferrer" : undefined}
                className="mt-2 block text-text-primary hover:text-gold transition-colors"
              >
                {b.value}
              </a>
            ) : (
              <p className="mt-2 text-text-primary">{b.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 border border-border-subtle overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
        <iframe
          title="Orvella Salon location"
          src="https://maps.google.com/maps?q=C+48+Block+C+Lajpat+Nagar+II+New+Delhi&output=embed"
          className="h-full w-full"
          style={{
            border: 0,
            filter: theme === "dark" ? "invert(0.9) hue-rotate(180deg) saturate(0.5)" : "none",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
