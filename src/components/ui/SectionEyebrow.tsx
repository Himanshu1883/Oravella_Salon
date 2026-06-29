export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-4">
      <span className="h-px w-12 bg-gold/60" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
