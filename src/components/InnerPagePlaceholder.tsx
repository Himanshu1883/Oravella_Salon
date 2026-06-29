import { Link } from "@tanstack/react-router";

export function InnerPagePlaceholder({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="min-h-screen grid place-items-center px-6 pt-32 pb-20 bg-bg-primary">
      <div className="text-center max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="heading-display mt-6 text-text-primary text-5xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-8 text-text-secondary">
          This page is coming next. In the meantime, explore our homepage or get in touch.
        </p>
        <Link to="/" className="inline-flex mt-10 eyebrow gold-underline text-gold">← Back to Home</Link>
      </div>
    </section>
  );
}
