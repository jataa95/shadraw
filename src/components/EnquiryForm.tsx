"use client";

import { useState } from "react";
import { site } from "@/content/site";

const field =
  "w-full rounded-xl border border-linen/15 bg-linen/5 px-4 py-3 text-linen placeholder:text-linen/40 outline-none transition focus:border-clay focus:bg-linen/10";

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
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm text-linen/70">
        Name
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm text-linen/70">
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
      <label className="grid gap-2 text-sm text-linen/70">
        Commission
        <select name="type" className={field} defaultValue="Oil Portrait">
          <option className="text-espresso">Pencil Portrait</option>
          <option className="text-espresso">Oil Portrait</option>
          <option className="text-espresso">Figurative Scene</option>
          <option className="text-espresso">Original artwork</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm text-linen/70">
        Size / format
        <input name="size" className={field} placeholder="e.g. 50 × 70 cm, or not sure" />
      </label>
      <label className="grid gap-2 text-sm text-linen/70 sm:col-span-2">
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
          className="rounded-full bg-sand px-6 py-3 text-espresso transition-colors hover:bg-linen"
        >
          Send enquiry
        </button>
        <p className="text-sm text-linen/60" aria-live="polite">
          {sent
            ? "Your email app should open with the message ready to send."
            : `Or write directly to ${site.email}`}
        </p>
      </div>
    </form>
  );
}
