import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/media";

const STEPS = [
  { title: "Consultation", text: "We begin months ahead — understanding your vision, your outfits, and your skin." },
  { title: "Pre-Bridal Care", text: "Curated facials, hair therapy, and skin regimes timed perfectly for your day." },
  { title: "The Trial", text: "A full trial so there are zero surprises — only confidence — on the morning of." },
  { title: "The Big Day", text: "A calm, dedicated team ensuring you are radiant from first light to last dance." },
];

export function PreBridalSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={MEDIA.salonExtra2} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="max-w-2xl">
          <SectionEyebrow>The Journey</SectionEyebrow>
          <h2 className="heading-display mt-6 text-white text-4xl md:text-6xl">
            Pre-bridal, <em className="font-accent italic text-gold">perfected</em>.
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STEPS.map((s, i) => (
            <div key={s.title}>
              <div className="font-display text-5xl text-gold/30">0{i + 1}</div>
              <h3 className="heading-display mt-4 text-white text-2xl">{s.title}</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
