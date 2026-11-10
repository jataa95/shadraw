import Image from "next/image";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Gallery } from "@/components/Gallery";
import { Reel } from "@/components/Reel";
import { EnquiryForm } from "@/components/EnquiryForm";
import { RevealObserver } from "@/components/RevealObserver";
import { faq, nav, offers, process, quotes, reels, site, works } from "@/content/site";
import vesselUmber from "@/assets/vessel-umber.jpg";
import shoreline from "@/assets/shoreline.jpg";

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-caramel">
      <span className="tabular-nums">{n}</span>
      <span className="h-px w-8 bg-caramel/50" />
      {children}
    </p>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VisualArtist",
  name: site.name,
  alternateName: site.artist,
  description: `${site.tagline}. Oil and pencil portraits and commissions.`,
  email: site.email,
  url: site.url,
  sameAs: [site.instagram],
  address: { "@type": "PostalAddress", addressLocality: "Verona", addressCountry: "IT" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Header />

      <main id="main">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-clay/25 blur-3xl"
          />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7 lg:pt-10">
              <p className="reveal flex items-center gap-2 text-sm text-umber">
                <span className="inline-block h-2 w-2 rounded-full bg-caramel" />
                Commissions open · {site.location}
              </p>
              <h1
                className="reveal mt-6 font-serif text-[clamp(3rem,8vw,7.25rem)] leading-[0.95] tracking-tight text-espresso"
                style={{ "--delay": "80ms" } as React.CSSProperties}
              >
                Painting the quiet <em className="text-caramel">stories</em> people carry.
              </h1>

              <dl
                className="reveal mt-12 grid gap-6 border-t border-espresso/10 pt-8 sm:grid-cols-3"
                style={{ "--delay": "160ms" } as React.CSSProperties}
              >
                {[
                  ["Practice", "Portraiture & figurative art"],
                  ["Medium", "Oils on board & canvas, graphite on paper"],
                  ["Studio", `${site.artist} — ${site.location}`],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs uppercase tracking-[0.2em] text-espresso/50">{k}</dt>
                    <dd className="mt-2 text-[15px] leading-snug text-espresso/85">{v}</dd>
                  </div>
                ))}
              </dl>

              <div
                className="reveal mt-10 flex flex-wrap gap-3"
                style={{ "--delay": "240ms" } as React.CSSProperties}
              >
                <a
                  href="#contact"
                  className="rounded-full bg-espresso px-6 py-3.5 text-linen transition-colors hover:bg-umber"
                >
                  Commission a portrait
                </a>
                <a
                  href="#works"
                  className="rounded-full border border-espresso/20 px-6 py-3.5 transition-colors hover:border-espresso/50"
                >
                  View the works
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="reveal relative mx-auto aspect-[4/5.6] max-w-md overflow-hidden rounded-[2rem] bg-umber shadow-[0_40px_80px_-30px_rgba(42,28,20,0.55)] lg:max-w-none">
                <Image
                  src={vesselUmber}
                  alt="Oil painting of a man in profile balancing a clay pot on his head, against a warm umber background."
                  placeholder="blur"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div
                className="reveal absolute -bottom-6 left-0 hidden w-48 overflow-hidden rounded-2xl border-4 border-linen shadow-xl sm:block lg:-left-16"
                style={{ "--delay": "300ms" } as React.CSSProperties}
              >
                <Image
                  src={shoreline}
                  alt="Detail of a painting of a couple in a sunlit alcove by the sea."
                  placeholder="blur"
                  sizes="12rem"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* Quote marquee */}
          <div className="mt-24 overflow-hidden border-y border-espresso/10 bg-parchment/60 py-5 md:mt-32">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-serif text-2xl italic text-umber md:text-3xl">
              {[...quotes, ...quotes, ...quotes, ...quotes].map((q, i) => (
                <span key={i} className="flex items-center gap-12" aria-hidden={i >= quotes.length}>
                  {q}
                  <span className="text-clay not-italic">✦</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow n="00">The studio</Eyebrow>
            </div>
            <p className="reveal font-serif text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.1] text-espresso lg:col-span-9">
              Shadraw is the studio of {site.artist}. I paint figures held in warm light — skin,
              cloth and stillness — so each piece feels like a moment{" "}
              <span className="text-caramel italic">just before the story begins.</span>
            </p>
          </div>
        </section>

        {/* ── Works ──────────────────────────────────────────── */}
        <section id="works" className="mx-auto max-w-7xl px-5 pb-28 md:px-8 md:pb-40">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow n="01">Selected works</Eyebrow>
              <h2 className="reveal mt-5 font-serif text-5xl leading-none md:text-7xl">
                Recent paintings
              </h2>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="reveal text-sm text-umber underline decoration-clay underline-offset-4 hover:text-espresso"
            >
              More on Instagram {site.instagramHandle} ↗
            </a>
          </div>
          <Gallery works={works} />
        </section>

        {/* ── Process ────────────────────────────────────────── */}
        <section id="process" className="bg-espresso py-28 text-linen md:py-40">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-clay">
                  <span>02</span>
                  <span className="h-px w-8 bg-clay/50" />
                  Process
                </p>
                <h2 className="reveal mt-5 font-serif text-5xl leading-none md:text-7xl">
                  One slow line, <em className="text-clay">first mark</em> to final glaze.
                </h2>
              </div>
              <p className="reveal self-end text-lg leading-relaxed text-linen/70 lg:col-span-6 lg:col-start-7">
                Oil painting rewards patience. Each stage has its own job — and each one is shared
                with you along the way when you commission a piece.
              </p>
            </div>

            <ol className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-linen/10 md:grid-cols-5">
              {process.map((step, i) => (
                <li
                  key={step.n}
                  className="reveal group flex flex-col bg-espresso"
                  style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      placeholder="blur"
                      fill
                      sizes="(min-width: 768px) 20vw, 100vw"
                      className="object-cover opacity-80 grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs tabular-nums text-clay">{step.n}</span>
                    <h3 className="mt-3 font-serif text-3xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-linen/65">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Studio reels ───────────────────────────────────── */}
        <section id="studio" className="bg-parchment py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-14 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Eyebrow n="03">In the studio</Eyebrow>
                <h2 className="reveal mt-5 font-serif text-5xl leading-none md:text-7xl">
                  Watch the work take shape.
                </h2>
              </div>
              <p className="reveal self-end text-lg leading-relaxed text-espresso/70 lg:col-span-5 lg:col-start-8">
                Moments from the easel in Verona — underpaintings, unfinished faces, and the
                reveal at the end.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reels.map((r, i) => (
                <div
                  key={r.src}
                  className={`reveal ${i === 1 ? "lg:translate-y-12" : ""}`}
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <Reel {...r} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Commissions ────────────────────────────────────── */}
        <section id="commissions" className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
          <div className="mb-14 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow n="04">Commissions</Eyebrow>
              <h2 className="reveal mt-5 font-serif text-5xl leading-none md:text-7xl">
                Commission with the studio
              </h2>
            </div>
            <p className="reveal self-end text-lg leading-relaxed text-espresso/70 lg:col-span-5 lg:col-start-8">
              Three ways to work together. Every commission is quoted individually — size,
              number of figures and complexity all shape the final price.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {offers.map((o, i) => (
              <article
                key={o.n}
                className={`reveal flex flex-col rounded-3xl p-8 ${
                  o.featured
                    ? "bg-umber text-linen"
                    : "border border-espresso/10 bg-parchment/50"
                }`}
                style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs tabular-nums ${o.featured ? "text-sand" : "text-caramel"}`}>
                    {o.n}
                  </span>
                  {o.featured && (
                    <span className="rounded-full bg-linen/15 px-3 py-1 text-[11px] tracking-wide">
                      Most requested
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-serif text-4xl">{o.title}</h3>
                <p className={`mt-3 leading-relaxed ${o.featured ? "text-linen/75" : "text-espresso/70"}`}>
                  {o.lead}
                </p>
                <ul className={`mt-8 space-y-3 border-t pt-6 text-sm ${o.featured ? "border-linen/15" : "border-espresso/10"}`}>
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className={o.featured ? "text-sand" : "text-caramel"}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <p className={`text-sm ${o.featured ? "text-linen/60" : "text-espresso/55"}`}>
                    {o.timeline} · Price on request
                  </p>
                  <a
                    href="#contact"
                    className={`mt-4 inline-flex rounded-full px-5 py-3 text-sm transition-colors ${
                      o.featured
                        ? "bg-linen text-espresso hover:bg-sand"
                        : "bg-espresso text-linen hover:bg-umber"
                    }`}
                  >
                    Enquire about this
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section id="faq" className="border-t border-espresso/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 md:px-8 md:py-40 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow n="05">FAQ</Eyebrow>
              <h2 className="reveal mt-5 font-serif text-5xl leading-none md:text-6xl">
                Questions, answered.
              </h2>
              <p className="reveal mt-6 text-espresso/65">
                Something else on your mind?{" "}
                <a href={`mailto:${site.email}`} className="text-caramel underline underline-offset-4">
                  Just ask
                </a>
                .
              </p>
            </div>
            <div className="divide-y divide-espresso/10 border-y border-espresso/10 lg:col-span-8">
              {faq.map((item) => (
                <details key={item.q} className="reveal group py-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg md:text-xl">
                    {item.q}
                    <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-espresso/15 text-caramel transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-espresso/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact / CTA ──────────────────────────────────── */}
        <section id="contact" className="px-3 pb-3 md:px-5 md:pb-5">
          <div className="relative overflow-hidden rounded-[2rem] bg-oxblood text-linen">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-caramel/30 blur-3xl"
            />
            <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.22em] text-sand">06 — Contact</p>
                <h2 className="reveal mt-5 font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98]">
                  Have a story worth <em className="text-sand">painting?</em>
                </h2>
                <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-linen/70">
                  Tell me about the people and the moment. I&apos;ll reply with availability, a
                  quote and how we&apos;d bring it to the canvas.
                </p>
                <div className="reveal mt-8 space-y-2 text-linen/80">
                  <a href={`mailto:${site.email}`} className="block hover:text-sand">
                    {site.email}
                  </a>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="block hover:text-sand">
                    Instagram {site.instagramHandle} ↗
                  </a>
                  <p className="text-linen/50">{site.location}</p>
                </div>
              </div>
              <div className="reveal lg:col-span-6 lg:col-start-7">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-espresso/60">
              {site.tagline}. Original paintings and commissions from {site.location}.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs uppercase tracking-[0.2em] text-espresso/45">Studio</p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-espresso/75 hover:text-caramel">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-espresso/45">Connect</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="text-espresso/75 hover:text-caramel">
                  Instagram
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-espresso/75 hover:text-caramel">
                  Email
                </a>
              </li>
              <li>
                <a href="#contact" className="text-espresso/75 hover:text-caramel">
                  Commission enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p
          aria-hidden
          className="mt-20 select-none font-serif text-[clamp(5rem,22vw,20rem)] leading-[0.8] tracking-tight text-parchment"
        >
          shadraw
        </p>
        <div className="mt-6 flex flex-wrap justify-between gap-4 border-t border-espresso/10 pt-6 text-sm text-espresso/50">
          <p>© 2026 Shadraw. All artworks © {site.artist}.</p>
          <a href="#top" className="hover:text-espresso">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
