import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost" | "underline" | "whatsapp";

const VARIANTS: Record<Variant, string> = {
  gold: "px-8 py-4 bg-gold text-bg-primary hover:bg-gold-muted",
  outline:
    "px-8 py-4 border border-white/40 text-white hover:bg-white hover:text-bg-primary",
  ghost:
    "px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-bg-primary",
  underline: "eyebrow gold-underline text-gold !tracking-[0.25em] px-0 py-0",
  whatsapp: "px-8 py-4 text-white hover:opacity-90",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonProps = BaseProps & {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
};

export function CtaButton({
  children,
  variant = "gold",
  className,
  to,
  href,
  onClick,
  type = "button",
  disabled,
  target,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-3 text-[0.72rem] tracking-[0.3em] uppercase transition-colors duration-300",
    VARIANTS[variant],
    disabled && "opacity-60 pointer-events-none",
    className
  );

  const style =
    variant === "whatsapp" ? { background: "#25D366" } : undefined;

  if (to) {
    return (
      <Link to={to} className={base} style={style}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel="noreferrer"
        className={base}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base} style={style}>
      {children}
    </button>
  );
}
