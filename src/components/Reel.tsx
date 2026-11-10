"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster: string; quote: string; label: string };

/** Muted looping studio clip that only plays while on screen. */
export function Reel({ src, poster, quote, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <figure className="group relative overflow-hidden bg-umber">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        className="aspect-[9/16] w-full object-cover"
        aria-label={`Studio clip: ${label}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bark/85 via-transparent to-bark/20" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-linen">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold">{label}</p>
        <p className="mt-2 font-serif text-2xl leading-snug italic">“{quote}”</p>
      </figcaption>
      <button
        type="button"
        onClick={toggle}
        className="absolute right-4 top-4 rounded-full bg-bark/50 px-3 py-1.5 text-xs text-linen backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100"
      >
        {paused ? "Play" : "Pause"}
      </button>
    </figure>
  );
}
