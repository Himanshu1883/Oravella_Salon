export function MarqueeStrip({ text }: { text: string }) {
  const items = Array(8).fill(text);
  return (
    <div className="overflow-hidden border-y border-border-subtle py-6">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display italic text-3xl md:text-5xl text-gold/70 px-8">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
