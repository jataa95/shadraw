"use client";

import { useEffect, useRef, useState } from "react";

/** Autoplaying, muted studio film for the hero, with a pause control. */
export function HeroVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React doesn't render the `muted` attribute on the server, so start playback here.
    v.muted = true;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.play().catch(() => {});
    }
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="group relative">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="auto"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        aria-label={label}
        className="block aspect-[9/16] w-full object-cover object-[50%_80%] lg:aspect-[4/5]"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={paused ? "Play video" : "Pause video"}
        className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-bark/50 text-xs text-gold backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
      >
        {paused ? "▶" : "❚❚"}
      </button>
    </div>
  );
}
