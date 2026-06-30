import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";
import { CtaButton } from "@/components/ui/CtaButton";
import { MEDIA } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500",
          scrolled
            ? "py-3 backdrop-blur-xl bg-bg-primary/85 border-b border-border-subtle"
            : "py-5 bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1600px] flex items-center justify-between px-6 md:px-12">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={MEDIA.logo} alt="Orvella" className="h-10 w-10 object-contain" />
            <span className="hidden sm:inline font-display text-xl tracking-[0.25em] text-text-primary">
              ORVELLA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={cn(
                    "gold-underline text-[0.72rem] tracking-[0.25em] uppercase text-text-secondary hover:text-text-primary transition-colors",
                    active && "text-text-primary link-active"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 grid place-items-center rounded-full border border-border-subtle text-text-secondary hover:text-gold hover:border-gold transition"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <CtaButton to="/contact" variant="ghost" compact className="hidden md:inline-flex">
              Book Now
            </CtaButton>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-text-primary"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[1100] bg-bg-primary transition-[clip-path] duration-700",
          open ? "[clip-path:circle(150%_at_top_right)]" : "[clip-path:circle(0%_at_top_right)] pointer-events-none"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)" }}
      >
        <div className="flex items-center justify-between p-6">
          <span className="font-display text-xl tracking-[0.3em] text-gold">ORVELLA</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-text-primary">
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 h-[80vh]">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              className="font-display text-5xl text-text-primary hover:text-gold transition-colors"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(30px)",
                transition: `opacity .6s ease ${0.2 + i * 0.08}s, transform .6s ease ${0.2 + i * 0.08}s`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
