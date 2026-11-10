"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Work } from "@/content/site";
import { toRoman } from "@/lib/roman";

export function Gallery({ works }: { works: Work[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const openAt = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + works.length) % works.length)),
    [works.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const active = index === null ? null : works[index];

  return (
    <>
      <ul className="grid grid-cols-1 items-start gap-x-8 gap-y-20 md:grid-cols-12">
        {works.map((w, i) => (
          <li key={w.slug} className={w.className ?? ""}>
            <button
              type="button"
              onClick={() => openAt(i)}
              className="group block w-full text-left"
              aria-label={`View ${w.title}`}
            >
              <div className="frame transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                <div
                  className="frame-inner reveal-img"
                  style={{ "--delay": `${(i % 2) * 120}ms` } as React.CSSProperties}
                >
                  <Image
                    src={w.image}
                    alt={w.alt}
                    placeholder="blur"
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="h-auto w-full transition-[filter] duration-700 group-hover:brightness-110"
                  />
                </div>
              </div>
              <div className="reveal mt-6 flex items-start justify-between gap-6 border-t border-gold/20 pt-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold/80">
                    Plate {toRoman(i + 1)}
                  </p>
                  <p className="mt-2 font-serif text-3xl leading-tight text-linen md:text-4xl">
                    <span className="italic">{w.title}</span>
                  </p>
                  <p className="mt-1 text-sm text-sand/60">
                    {w.medium}, {w.year}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-[11px] uppercase tracking-[0.2em] text-sand/50 transition-colors group-hover:text-gold">
                  {w.status} ↗
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-bark p-0 text-linen backdrop:bg-bark/90"
        aria-label={active ? active.title : "Artwork viewer"}
      >
        {active && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-5 py-4 text-sm md:px-8">
              <span className="text-linen/60">
                {String((index ?? 0) + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-linen/20 px-4 py-2 hover:bg-linen/10"
              >
                Close
              </button>
            </div>
            <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
              <Image
                key={active.slug}
                src={active.image}
                alt={active.alt}
                placeholder="blur"
                fill
                sizes="100vw"
                className="object-contain p-4 md:p-10"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-5 md:px-8">
              <button
                type="button"
                onClick={() => step(-1)}
                className="rounded-full border border-linen/20 px-4 py-2 text-sm hover:bg-linen/10"
              >
                ← Prev
              </button>
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl">{active.title}</p>
                <p className="text-xs text-linen/60">
                  {active.medium} · {active.year} · {active.status}
                </p>
              </div>
              <button
                type="button"
                onClick={() => step(1)}
                className="rounded-full border border-linen/20 px-4 py-2 text-sm hover:bg-linen/10"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
