"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-bark/80 shadow-[0_1px_0_rgba(201,162,107,0.15)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-bark"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-linen" aria-label="Shadraw — home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sand/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-gold/50 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-bark sm:inline-flex"
          >
            Commission a piece
          </a>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-gold/30 px-4 text-sm text-sand md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] border-t border-gold/15 bg-bark px-5 pt-6 md:hidden"
      >
        <ul className="space-y-1">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-gold/15 py-4 font-serif text-4xl text-linen"
              >
                <span className="font-sans text-xs text-gold">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-bark"
        >
          Commission a piece
        </a>
      </div>
    </header>
  );
}
