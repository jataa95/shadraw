"use client";

import { useState } from "react";
import { site } from "@/content/site";

const field =
  "w-full border-0 border-b border-gold/30 bg-transparent px-0 py-3 text-lg text-linen placeholder:text-sand/35 outline-none transition focus:border-gold";

/**
 * Builds an email to the studio from the form fields and opens the visitor's
 * mail app — no backend needed.
 */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const type = String(data.get("type") ?? "");
    const subject = `Commission enquiry — ${type}${name ? ` (${name})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email") ?? ""}`,
      `Commission: ${type}`,
      `Size / format: ${data.get("size") || "Not sure yet"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-sand/60">
        Name
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-sand/60">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@example.com"
        />
      </label>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-sand/60">
        Commission
        <select name="type" className={field} defaultValue="Oil Portrait">
          <option className="bg-espresso text-linen">Pencil Portrait</option>
          <option className="bg-espresso text-linen">Oil Portrait</option>
          <option className="bg-espresso text-linen">Figurative Scene</option>
          <option className="bg-espresso text-linen">Original artwork</option>
        </select>
      </label>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-sand/60">
        Size / format
        <input name="size" className={field} placeholder="e.g. 50 × 70 cm, or not sure" />
      </label>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-sand/60 sm:col-span-2">
        Tell me the story
        <textarea
          name="message"
          required
          rows={4}
          className={`${field} resize-none`}
          placeholder="Who is in it, what moment, any references or deadlines…"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-gold px-7 py-3.5 text-bark transition-colors hover:bg-sand"
        >
          Send enquiry
        </button>
        <p className="text-sm text-sand/60" aria-live="polite">
          {sent
            ? "Your email app should open with the message ready to send."
            : `Or write directly to ${site.email}`}
        </p>
      </div>
    </form>
  );
}
