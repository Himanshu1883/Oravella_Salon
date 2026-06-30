import { useEffect, useRef, useState } from "react";
import {
  Grid3x3,
  Clapperboard,
  UserSquare,
  Play,
  Heart,
  MessageCircle,
  Plus,
  Settings,
  Camera,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { IG_PROFILE, SITE } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { IgPost } from "@/types";

const IG_URL = SITE.instagram;

type Tab = "posts" | "reels" | "tagged";

function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-label="Verified" className={className} fill="none">
      <path
        fill="#3897f0"
        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.292h6.234L14.638 40l5.36-3.094L25.358 40l3.232-5.609h6.058v-6.292l5.736-3.137L37.39 20l2.994-5.36-5.736-3.135V5.15h-6.058L25.358 0l-5.36 3.094Z"
      />
      <path
        fill="#fff"
        d="m18.343 27.852-7.07-7.07 2.121-2.122 4.949 4.95 8.485-8.486 2.121 2.122-10.606 10.606Z"
      />
    </svg>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5 md:flex-row md:gap-1.5">
      <span className="font-semibold text-text-primary">{value}</span>
      <span className="text-text-secondary">{label}</span>
    </div>
  );
}

/** Muted inline autoplay — IntersectionObserver + programmatic play for iOS Safari */
function AutoplayVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.muted = true;

    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    tryPlay();

    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      className={className}
    />
  );
}

function MediaTile({ post, index }: { post: IgPost; index: number }) {
  const isVideo = post.type === "video";
  return (
    <a
      href={IG_URL}
      target="_blank"
      rel="noreferrer"
      className="ig-cell group relative block aspect-square overflow-hidden bg-bg-secondary"
      aria-label={post.caption}
    >
      {isVideo ? (
        <AutoplayVideo
          src={post.src}
          poster={post.poster}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src={post.src}
          alt={post.caption}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {isVideo && (
        <div className="absolute right-2 top-2 text-white drop-shadow">
          <Play size={18} fill="currentColor" />
        </div>
      )}

      <div className="absolute inset-0 hidden items-center justify-center gap-6 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
        <span className="flex items-center gap-2 font-semibold text-white">
          <Heart size={20} fill="white" />
          {(index + 1) * 37}
        </span>
        <span className="flex items-center gap-2 font-semibold text-white">
          <MessageCircle size={20} fill="white" />
          {index + 3}
        </span>
      </div>
    </a>
  );
}

export function InstagramSection() {
  const root = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<Tab>("posts");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ig-section-header > *", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".ig-section-header", start: "top 85%" },
      });
      gsap.from(".ig-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: { trigger: ".ig-card", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ig-cell",
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: { amount: 0.4, from: "start" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [tab]);

  const p = IG_PROFILE;

  return (
    <section ref={root} className="bg-bg-primary px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-14">
      <div className="ig-section-header mx-auto mb-12 max-w-3xl text-center md:mb-16">
        <SectionEyebrow>Follow Our Story</SectionEyebrow>
        <h2 className="heading-display mt-6 text-text-primary text-4xl md:text-6xl">
          Life at <em className="font-accent italic text-gold">Orvella</em>.
        </h2>
        <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed">
          Step inside our world on Instagram — real clients, real results, and the
          quiet craft behind every visit.
        </p>
      </div>

      <div className="ig-card mx-auto w-full max-w-[1280px]">
        <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-primary md:rounded-2xl">
          {/* ===================== HEADER ===================== */}
          <header className="px-4 pt-6 md:px-8 md:pt-8 lg:px-10">
            <div className="flex items-start gap-6 md:gap-20">
              {/* Avatar */}
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
                aria-label={`@${p.handle} on Instagram`}
              >
                <div className="rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] p-[3px]">
                  <div className="rounded-full bg-bg-primary p-[3px]">
                    <img
                      src={p.highlights[3].cover}
                      alt={p.handle}
                      className="h-20 w-20 rounded-full object-cover md:h-36 md:w-36"
                    />
                  </div>
                </div>
              </a>

              {/* Right column */}
              <div className="min-w-0 flex-1">
                {/* Row 1: username + actions */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xl font-normal text-text-primary md:text-2xl">
                      {p.handle}
                    </h2>
                    {p.verified && <VerifiedBadge className="h-[18px] w-[18px]" />}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={IG_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-[#0095f6] px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-[#1aa1f7]"
                    >
                      Follow
                    </a>
                    <a
                      href={IG_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-bg-secondary px-5 py-1.5 text-sm font-semibold text-text-primary transition hover:opacity-80"
                    >
                      Message
                    </a>
                    <button
                      type="button"
                      aria-label="Options"
                      className="hidden text-text-primary md:inline-flex"
                    >
                      <Settings size={22} />
                    </button>
                  </div>
                </div>

                {/* Row 2: stats (desktop) */}
                <div className="mt-5 hidden gap-10 text-base md:flex">
                  <StatItem value={p.stats.posts} label="posts" />
                  <StatItem value={p.stats.followers} label="followers" />
                  <StatItem value={p.stats.following} label="following" />
                </div>

                {/* Row 3: name + bio (desktop) */}
                <div className="mt-5 hidden md:block">
                  <p className="font-semibold text-text-primary">{p.name}</p>
                  <div className="mt-1 space-y-0.5 text-sm text-text-primary">
                    {p.bio.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <a
                    href={p.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-[#4a7ba6] hover:underline"
                  >
                    🔗 {p.link}
                  </a>
                </div>
              </div>
            </div>

            {/* Name + bio (mobile) */}
            <div className="mt-5 md:hidden">
              <p className="text-sm font-semibold text-text-primary">{p.name}</p>
              <div className="mt-1 space-y-0.5 text-sm text-text-primary">
                {p.bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <a
                href={p.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-[#4a7ba6] hover:underline"
              >
                🔗 {p.link}
              </a>
            </div>

            {/* Follow / message (mobile) */}
            <div className="mt-4 flex gap-2 md:hidden">
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg bg-[#0095f6] py-1.5 text-center text-sm font-semibold text-white"
              >
                Follow
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg bg-bg-secondary py-1.5 text-center text-sm font-semibold text-text-primary"
              >
                Message
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Add"
                className="grid w-9 place-items-center rounded-lg bg-bg-secondary text-text-primary"
              >
                <Plus size={18} />
              </a>
            </div>

            {/* ===================== HIGHLIGHTS ===================== */}
            <div className="mt-6 flex gap-5 overflow-x-auto pb-2 md:mt-8 md:gap-8">
              {p.highlights.map((h) => (
                <a
                  key={h.label}
                  href={IG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex shrink-0 flex-col items-center gap-1.5"
                >
                  <div className="rounded-full border border-border-subtle p-[3px]">
                    <img
                      src={h.cover}
                      alt={h.label}
                      className="h-14 w-14 rounded-full object-cover md:h-20 md:w-20"
                    />
                  </div>
                  <span className="max-w-[72px] truncate text-xs text-text-primary">
                    {h.label}
                  </span>
                </a>
              ))}
            </div>
          </header>

          {/* Stats bar (mobile) */}
          <div className="mt-2 flex justify-around border-y border-border-subtle py-3 text-center text-sm md:hidden">
            <div>
              <div className="font-semibold text-text-primary">{p.stats.posts}</div>
              <div className="text-text-secondary">posts</div>
            </div>
            <div>
              <div className="font-semibold text-text-primary">{p.stats.followers}</div>
              <div className="text-text-secondary">followers</div>
            </div>
            <div>
              <div className="font-semibold text-text-primary">{p.stats.following}</div>
              <div className="text-text-secondary">following</div>
            </div>
          </div>

          {/* ===================== TABS ===================== */}
          <nav className="mt-2 flex items-center justify-center gap-12 border-t border-border-subtle md:gap-16">
            <TabButton active={tab === "posts"} onClick={() => setTab("posts")} icon={<Grid3x3 size={14} />} label="Posts" />
            <TabButton active={tab === "reels"} onClick={() => setTab("reels")} icon={<Clapperboard size={14} />} label="Reels" />
            <TabButton active={tab === "tagged"} onClick={() => setTab("tagged")} icon={<UserSquare size={14} />} label="Tagged" />
          </nav>

          {/* ===================== GRID ===================== */}
          <div className="px-2 pb-2 md:px-3 md:pb-3">
            {tab === "posts" && (
              <div className="grid grid-cols-3 gap-[3px] md:gap-1">
                {p.posts.map((post, i) => (
                  <MediaTile key={`post-${i}`} post={post} index={i} />
                ))}
              </div>
            )}

            {tab === "reels" && (
              <div className="grid grid-cols-3 gap-[3px] md:gap-1">
                {p.reels.map((post, i) => (
                  <a
                    key={`reel-${i}`}
                    href={IG_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="ig-cell group relative block aspect-[9/16] overflow-hidden bg-bg-secondary"
                    aria-label={post.caption}
                  >
                    <AutoplayVideo
                      src={post.src}
                      poster={post.poster}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute left-2 top-2 text-white drop-shadow">
                      <Clapperboard size={18} />
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 font-semibold text-white drop-shadow">
                      <Play size={16} fill="currentColor" />
                      {(i + 2) * 413}
                    </div>
                  </a>
                ))}
              </div>
            )}

            {tab === "tagged" && (
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-text-primary">
                  <Camera size={30} className="text-text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-text-primary">No Photos</h3>
                <p className="max-w-xs text-sm text-text-secondary">
                  When people tag {p.handle} in photos, they'll appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`-mt-px flex items-center gap-1.5 border-t py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
        active
          ? "border-text-primary text-text-primary"
          : "border-transparent text-text-secondary hover:text-text-primary"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
