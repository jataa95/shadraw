"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Work } from "@/content/site";

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
      <ul className="grid grid-cols-1 gap-5 md:auto-rows-[24rem] md:grid-cols-12">
        {works.map((w, i) => (
          <li
            key={w.slug}
            className={`reveal ${w.className ?? ""}`}
            style={{ "--delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
          >
            <button
              type="button"
              onClick={() => openAt(i)}
              className="group block h-full w-full text-left"
              aria-label={`View ${w.title}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full rounded-2xl bg-parchment">
                <Image
                  src={w.image}
                  alt={w.alt}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-linen">
                  <div>
                    <p className="font-serif text-2xl leading-tight md:text-3xl">{w.title}</p>
                    <p className="mt-1 text-xs tracking-wide text-linen/75">
                      {w.medium} · {w.year}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-linen/30 px-3 py-1 text-[11px] tracking-wide backdrop-blur-sm">
                    {w.status}
                  </span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink p-0 text-linen backdrop:bg-ink/80"
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
