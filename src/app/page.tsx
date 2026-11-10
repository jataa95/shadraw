import Image from "next/image";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Gallery } from "@/components/Gallery";
import { Reel } from "@/components/Reel";
import { EnquiryForm } from "@/components/EnquiryForm";
import { RevealObserver } from "@/components/RevealObserver";
import { Spotlight } from "@/components/Spotlight";
import { HeroVideo } from "@/components/HeroVideo";
import { faq, nav, offers, process, quotes, reels, site, works } from "@/content/site";

type Delay = React.CSSProperties;
const d = (ms: number) => ({ "--delay": `${ms}ms` }) as Delay;

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="reveal flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-gold/90">
      <span className="font-serif text-base normal-case tracking-normal italic">{n}</span>
      <span className="h-px w-10 bg-gold/40" />
      {children}
    </p>
  );
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-4 text-gold/60 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
      <span className="text-xs">✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
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

      {/* Opening curtain */}
      <div
        aria-hidden
        className="intro-curtain pointer-events-none fixed inset-0 z-[70] grid animate-curtain place-items-center bg-bark"
      >
        <span className="animate-curtain-word font-serif text-5xl italic text-gilt md:text-7xl">
          shadraw
        </span>
      </div>

      <RevealObserver />
      <Header />

      <main id="main">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section id="top" className="relative isolate overflow-hidden bg-bark pb-24 pt-32 md:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] top-[5%] -z-10 h-[50rem] w-[50rem] rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(168,113,63,0.45) 0%, rgba(90,59,37,0.25) 40%, transparent 70%)",
            }}
          />
          <Spotlight />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="reveal flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-sand/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                Commissions open · {site.location}
              </p>
              <h1
                className="reveal mt-8 font-serif text-[clamp(3.25rem,8.4vw,8rem)] leading-[0.92] tracking-[-0.02em] text-linen"
                style={d(120)}
              >
                Painting the <br className="hidden sm:block" />
                quiet <em className="text-gilt pr-2">stories</em>
                <br />
                people carry.
              </h1>
              <p
                className="reveal mt-8 max-w-lg text-lg leading-relaxed text-sand/70"
                style={d(220)}
              >
                Portraiture and figurative art in oil and graphite — figures held in warm light,
                painted slowly by {site.artist} in her studio in Verona.
              </p>
              <div className="reveal mt-10 flex flex-wrap items-center gap-6" style={d(300)}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-bark transition-colors hover:bg-sand"
                >
                  Commission a portrait
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#works"
                  className="border-b border-gold/40 pb-1 text-sand transition-colors hover:border-gold hover:text-gold"
                >
                  Enter the gallery
                </a>
              </div>
            </div>

            <figure className="relative lg:col-span-5">
              <div className="frame mx-auto w-full max-w-[22rem] lg:mr-0 xl:max-w-[24rem]">
                <div className="frame-inner reveal-img" style={d(250)}>
                  <HeroVideo
                    src="/media/hero.mp4"
                    poster="/media/hero-poster.jpg"
                    label="Studio film: a portrait of a woman in a flowing gown, from pencil sketch to finished oil painting."
                  />
                </div>
              </div>
              <figcaption
                className="reveal mx-auto mt-5 flex w-full max-w-[22rem] items-baseline justify-between gap-4 text-sm lg:mr-0 xl:max-w-[24rem]"
                style={d(400)}
              >
                <span>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold/80">Studio film</span>
                  <span className="ml-3 font-serif text-xl italic text-linen">Sketch to finish</span>
                </span>
                <span className="text-sand/50">Verona</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Quote marquee ──────────────────────────────────── */}
        <div className="relative overflow-hidden border-y border-gold/15 bg-espresso py-7">
          <div className="flex w-max animate-marquee gap-14 whitespace-nowrap font-serif text-3xl italic md:text-5xl">
            {[...quotes, ...quotes, ...quotes, ...quotes].map((q, i) => (
              <span key={i} className="flex items-center gap-14" aria-hidden={i >= quotes.length}>
                <span className={i % 2 ? "text-sand/80" : "text-gilt"}>{q}</span>
                <span className="text-base not-italic text-gold/50">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Statement ──────────────────────────────────────── */}
        <section className="relative bg-gradient-to-b from-espresso to-umber px-5 py-32 md:px-8 md:py-48">
          <div className="mx-auto max-w-5xl text-center">
            <Eyebrow n="i.">
              <span>The studio</span>
            </Eyebrow>
            <p className="reveal mt-12 font-serif text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.12] text-linen">
              Shadraw is the studio of {site.artist}. I paint figures held in warm light — skin,
              cloth and stillness — so each piece feels like a moment{" "}
              <em className="text-gilt">just before the story begins.</em>
            </p>
            <p className="reveal mt-12 font-serif text-2xl italic text-sand/70" style={d(150)}>
              — {site.artist}
            </p>
            <Ornament className="reveal mt-12" />
          </div>
        </section>

        {/* ── Works (salon wall) ─────────────────────────────── */}
        <section
          id="works"
          className="relative bg-umber px-5 pb-32 pt-8 md:px-8 md:pb-48"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(168,113,63,0.18), transparent 60%)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
              <div>
                <Eyebrow n="ii.">Selected works</Eyebrow>
                <h2 className="reveal mt-6 font-serif text-6xl leading-[0.95] text-linen md:text-8xl">
                  The <em className="text-gilt">gallery</em>
                </h2>
              </div>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="reveal border-b border-gold/40 pb-1 text-sm text-sand transition-colors hover:text-gold"
              >
                More on Instagram {site.instagramHandle} ↗
              </a>
            </div>
            <Gallery works={works} />
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────── */}
        <section id="process" className="relative bg-espresso px-5 py-32 md:px-8 md:py-48">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Eyebrow n="iii.">Process</Eyebrow>
                <h2 className="reveal mt-6 font-serif text-6xl leading-[0.95] text-linen md:text-8xl">
                  First mark <br />
                  to <em className="text-gilt">final glaze</em>
                </h2>
              </div>
              <p className="reveal self-end text-lg leading-relaxed text-sand/65 lg:col-span-5 lg:col-start-8">
                Oil painting rewards patience. Each stage has its own job — and each one is shared
                with you along the way when you commission a piece.
              </p>
            </div>

            <ol className="mt-24 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, i) => (
                <li
                  key={step.n}
                  className={`group ${i % 2 ? "lg:mt-20" : ""}`}
                >
                  <div
                    className="reveal-img relative aspect-[3/4.4] overflow-hidden rounded-t-full border border-gold/25 p-1.5"
                    style={d(i * 90)}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-t-full">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        placeholder="blur"
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover sepia-[.35] transition duration-1000 group-hover:sepia-0"
                      />
                    </div>
                  </div>
                  <div className="reveal mt-6" style={d(i * 90)}>
                    <span className="font-serif text-5xl italic text-gilt">{step.n}</span>
                    <h3 className="mt-2 font-serif text-3xl text-linen">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-sand/60">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Studio reels ───────────────────────────────────── */}
        <section
          id="studio"
          className="relative overflow-hidden bg-gradient-to-b from-walnut via-tobacco/70 to-umber px-5 py-32 md:px-8 md:py-48"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <Eyebrow n="iv.">
                <span>In the studio</span>
              </Eyebrow>
              <h2 className="reveal mx-auto mt-6 max-w-4xl font-serif text-6xl leading-[0.95] text-linen md:text-8xl">
                Watch the work <em className="text-gilt">take shape</em>
              </h2>
              <p className="reveal mx-auto mt-8 max-w-xl text-lg leading-relaxed text-sand/70">
                Moments from the easel in Verona — underpaintings, unfinished faces, and the
                reveal at the end.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-2 lg:gap-12">
              {reels.map((r, i) => (
                <div
                  key={r.src}
                  className={`reveal border border-gold/25 p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ${i === 1 ? "sm:mt-24" : ""}`}
                  style={d(i * 120)}
                >
                  <Reel {...r} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Commissions ────────────────────────────────────── */}
        <section id="commissions" className="bg-bark px-5 py-32 md:px-8 md:py-48">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Eyebrow n="v.">Commissions</Eyebrow>
                <h2 className="reveal mt-6 font-serif text-6xl leading-[0.95] text-linen md:text-8xl">
                  Commission a <em className="text-gilt">piece</em>
                </h2>
              </div>
              <p className="reveal self-end text-lg leading-relaxed text-sand/65 lg:col-span-5 lg:col-start-8">
                Three ways to work together. Every commission is quoted individually — size,
                number of figures and complexity all shape the final price.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {offers.map((o, i) => (
                <article
                  key={o.n}
                  className={`reveal group relative flex flex-col p-10 transition-colors ${
                    o.featured
                      ? "bg-gradient-to-b from-tobacco to-walnut shadow-[0_50px_100px_-40px_rgba(168,113,63,0.5)]"
                      : "border border-gold/20 bg-espresso/60 hover:border-gold/45"
                  }`}
                  style={d(i * 100)}
                >
                  {o.featured && (
                    <span className="pointer-events-none absolute inset-2 border border-gold/35" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl italic text-gilt">{o.n}</span>
                    {o.featured && (
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                        Most requested
                      </span>
                    )}
                  </div>
                  <h3 className="mt-8 font-serif text-4xl text-linen md:text-5xl">{o.title}</h3>
                  <p className="mt-4 leading-relaxed text-sand/70">{o.lead}</p>
                  <ul className="mt-8 space-y-3 border-t border-gold/20 pt-6 text-sm text-sand/80">
                    {o.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-gold">✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto pt-12">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-sand/50">
                      {o.timeline} · Price on request
                    </p>
                    <a
                      href="#contact"
                      className={`mt-5 inline-flex rounded-full px-6 py-3 text-sm transition-colors ${
                        o.featured
                          ? "bg-gold text-bark hover:bg-sand"
                          : "border border-gold/40 text-gold hover:bg-gold hover:text-bark"
                      }`}
                    >
                      Enquire about this
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section id="faq" className="border-t border-gold/10 bg-espresso px-5 py-32 md:px-8 md:py-48">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow n="vi.">FAQ</Eyebrow>
              <h2 className="reveal mt-6 font-serif text-6xl leading-[0.95] text-linen md:text-7xl">
                Questions, <em className="text-gilt">answered</em>
              </h2>
              <p className="reveal mt-8 text-sand/60">
                Something else on your mind?{" "}
                <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-4">
                  Just ask
                </a>
                .
              </p>
            </div>
            <div className="divide-y divide-gold/15 border-y border-gold/15 lg:col-span-8">
              {faq.map((item, i) => (
                <details key={item.q} className="reveal group py-7">
                  <summary className="flex cursor-pointer items-center gap-6 font-serif text-2xl text-linen transition-colors hover:text-gold md:text-3xl">
                    <span className="w-8 shrink-0 font-serif text-base italic text-gold/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{item.q}</span>
                    <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 font-sans text-lg text-gold transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl pl-14 leading-relaxed text-sand/65">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact / CTA ──────────────────────────────────── */}
        <section id="contact" className="relative isolate overflow-hidden bg-oxblood px-5 py-32 md:px-8 md:py-44">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(168,113,63,0.4), transparent 65%)" }}
          />
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow n="vii.">Contact</Eyebrow>
              <h2 className="reveal mt-6 font-serif text-[clamp(3rem,6.5vw,6rem)] leading-[0.95] text-linen">
                Have a story worth <em className="text-gilt">painting?</em>
              </h2>
              <p className="reveal mt-8 max-w-md text-lg leading-relaxed text-sand/70">
                Tell me about the people and the moment. I&apos;ll reply with availability, a quote
                and how we&apos;d bring it to the canvas.
              </p>
              <div className="reveal mt-10 space-y-3 text-sand/80">
                <a href={`mailto:${site.email}`} className="block font-serif text-2xl italic hover:text-gold">
                  {site.email}
                </a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="block hover:text-gold">
                  Instagram {site.instagramHandle} ↗
                </a>
                <p className="text-sand/45">{site.location}</p>
              </div>
            </div>
            <div className="reveal lg:col-span-6 lg:col-start-7 lg:pt-6">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-bark px-5 pb-10 pt-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="text-linen md:col-span-5">
              <Logo />
              <p className="mt-5 max-w-sm text-sand/55">
                {site.tagline}. Original paintings and commissions from {site.location}.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-7">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gold/70">Studio</p>
              <ul className="mt-5 space-y-2.5">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-sand/70 hover:text-gold">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gold/70">Connect</p>
              <ul className="mt-5 space-y-2.5">
                <li>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="text-sand/70 hover:text-gold">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-sand/70 hover:text-gold">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sand/70 hover:text-gold">
                    Commission enquiry
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p
            aria-hidden
            className="mt-24 select-none text-center font-serif text-[clamp(5rem,23vw,21rem)] italic leading-[0.8] tracking-tight text-gilt opacity-25"
          >
            shadraw
          </p>
          <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-gold/15 pt-6 text-sm text-sand/40">
            <p>© 2026 Shadraw. All artworks © {site.artist}.</p>
            <a href="#top" className="hover:text-gold">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
