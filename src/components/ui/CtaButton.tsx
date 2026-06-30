import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost" | "underline" | "whatsapp";

const VARIANTS: Record<Variant, string> = {
  gold: "animated-button",
  outline: "animated-button animated-button--outline",
  ghost: "animated-button animated-button--ghost",
  underline: "eyebrow gold-underline text-gold !tracking-[0.25em] px-0 py-0",
  whatsapp: "animated-button animated-button--whatsapp",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  compact?: boolean;
  /** Use on dark image/video overlays so text and ring stay light */
  onDark?: boolean;
}

type ButtonProps = BaseProps & {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
};

function AnimatedContent({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="animated-button__label">{children}</span>
      <span className="animated-button__blob" aria-hidden="true" />
    </>
  );
}

export function CtaButton({
  children,
  variant = "gold",
  className,
  compact,
  onDark,
  to,
  href,
  onClick,
  type = "button",
  disabled,
  target,
}: ButtonProps) {
  const isUnderline = variant === "underline";

  const base = cn(
    VARIANTS[variant],
    onDark && !isUnderline && "animated-button--on-dark",
    compact && !isUnderline && "animated-button--compact",
    disabled && "opacity-60 pointer-events-none",
    className
  );

  if (isUnderline) {
    if (to) {
      return (
        <Link to={to} className={base}>
          {children}
        </Link>
      );
    }
    if (href) {
      return (
        <a href={href} target={target ?? "_blank"} rel="noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return (
      <button type={type} onClick={onClick} disabled={disabled} className={base}>
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={base} aria-disabled={disabled || undefined}>
        <AnimatedContent>{children}</AnimatedContent>
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
        aria-disabled={disabled || undefined}
      >
        <AnimatedContent>{children}</AnimatedContent>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      <AnimatedContent>{children}</AnimatedContent>
    </button>
  );
}
