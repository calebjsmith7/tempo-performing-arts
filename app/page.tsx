/* eslint-disable @next/next/no-img-element -- images are pre-sized for static export */
import Gallery from "./components/Gallery";
import Motion from "./components/Motion";
import Nav from "./components/Nav";
import Quotes from "./components/Quotes";
import {
  beliefs,
  instructors,
  newsletters,
  recital,
  stats,
  studio,
  styles,
  welcome,
} from "./content";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold sm:tracking-[0.35em]">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </p>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Motion />

      {/* Opening curtain */}
      <div className="curtain" aria-hidden>
        <div className="curtain__panel" />
        <div className="curtain__panel" />
        <img src="/images/tempo-logo.png" alt="" className="curtain__logo rounded-full" />
      </div>

      <Nav />

      <main id="top">
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-24">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src="/images/stage/stage-1.jpg"
              alt=""
              fetchPriority="high"
              className="hero-photo h-full w-full object-cover object-[70%_30%] sm:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
          </div>
          <div aria-hidden className="spotlight pointer-events-none absolute inset-0 -z-[5]" />

          <div className="mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <div className="fade-up" style={{ ["--i" as string]: 0 }}>
                <Eyebrow>Castle Rock, Colorado · Est. {studio.established}</Eyebrow>
              </div>
              <h1 className="font-display mt-6 text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.88] font-light tracking-tight">
                <span className="line-mask"><span style={{ ["--i" as string]: 0 }}>Everyone</span></span>
                <span className="line-mask"><span style={{ ["--i" as string]: 1 }}>can <em className="text-blush">dance.</em></span></span>
              </h1>
              <p className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-cream/80" style={{ ["--i" as string]: 2 }}>
                {studio.name} — a studio where structure meets joy, hard work breaks down
                boundaries, and nobody here believes in the word &ldquo;can&rsquo;t.&rdquo;
              </p>
              <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ ["--i" as string]: 3 }}>
                <a href="#recital" className="group inline-flex items-center gap-3 rounded-full bg-blush px-7 py-4 font-semibold text-ink transition hover:bg-blush-soft hover:shadow-[0_0_40px_rgba(244,163,163,0.5)]">
                  The Recital <Arrow />
                </a>
                <a href="#studio" className="group inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 font-semibold transition hover:border-blush hover:text-blush">
                  Discover Tempo <Arrow />
                </a>
              </div>
            </div>
          </div>

          {/* Rotating badge */}
          <div className="fade-up absolute bottom-10 right-6 hidden h-40 w-40 md:block lg:right-16 lg:h-48 lg:w-48" style={{ ["--i" as string]: 4 }} aria-hidden>
            <svg viewBox="0 0 200 200" className="spin-slow h-full w-full">
              <defs>
                <path id="ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text className="fill-cream/70 text-[13px] uppercase" style={{ letterSpacing: "0.32em" }}>
                <textPath href="#ring">School of Performing Arts · {studio.season} Season ·</textPath>
              </text>
            </svg>
            <img src="/images/tempo-logo.png" alt="" className="absolute inset-[22%] rounded-full shadow-[0_0_60px_rgba(244,163,163,0.35)]" />
          </div>

          <a href="#styles" className="fade-up absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-mute sm:flex" style={{ ["--i" as string]: 5 }}>
            Scroll
            <span className="relative h-10 w-px overflow-hidden bg-white/15">
              <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-blush" />
            </span>
          </a>
        </section>

        {/* ── STYLES MARQUEE ─────────────────────────────────── */}
        <section id="styles" aria-label="Dance styles" className="relative border-y border-white/10 bg-ink-2 py-6">
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee">
              {[0, 1].map((dup) => (
                <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                  {styles.map((s, i) => (
                    <li key={s} className="flex items-center">
                      <span className={`font-display px-8 text-4xl italic sm:text-6xl ${i % 2 ? "text-outline" : "text-cream"}`}>{s}</span>
                      <span className="text-2xl text-blush">✦</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

        {/* ── STUDIO / WELCOME ───────────────────────────────── */}
        <section id="studio" className="relative overflow-hidden py-28 sm:py-40">
          <div className="pointer-events-none absolute -right-40 top-20 h-[40rem] w-[40rem] rounded-full bg-velvet/30 blur-[120px]" />
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div data-reveal><Eyebrow>Act I · Our Motto</Eyebrow></div>
              <h2 data-reveal style={{ ["--d" as string]: 1 }} className="font-display mt-6 text-5xl leading-[0.95] font-light sm:text-7xl">
                Students <em className="text-blush">to the art</em> — always.
              </h2>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-cream/75">
                {welcome.paragraphs.map((p, i) => (
                  <p key={i} data-reveal style={{ ["--d" as string]: i + 2 }}>{p}</p>
                ))}
                <p data-reveal style={{ ["--d" as string]: 5 }} className="font-semibold text-cream">{welcome.noCant}</p>
              </div>
              <figure data-reveal className="mt-12 border-l-2 border-blush pl-6">
                <blockquote className="font-display text-2xl italic leading-snug text-cream/90">&ldquo;{welcome.ownerQuote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.3em] text-gold">— Sara Taylor, Owner</figcaption>
              </figure>
            </div>

            <div className="relative min-h-[34rem] lg:col-span-6">
              <div data-reveal="right" className="absolute right-0 top-0 w-[78%] overflow-hidden rounded-[2rem] shadow-2xl">
                <img src="/images/stage/stage-3.jpg" alt="Contemporary dancers in burgundy reaching across a dark stage" loading="lazy" className="aspect-[4/5] w-full object-cover object-[30%_50%]" />
              </div>
              <div data-reveal="left" style={{ ["--d" as string]: 2 }} className="absolute bottom-0 left-0 w-[55%] overflow-hidden rounded-[2rem] border-8 border-ink shadow-2xl">
                <img src="/images/stage/stage-4.jpg" alt="Three dancers in white embracing on stage" loading="lazy" className="aspect-square w-full object-cover" />
              </div>
              <div className="float absolute -left-2 top-10 rounded-full bg-blush px-6 py-5 text-center text-ink shadow-xl sm:left-4" data-reveal="zoom" style={{ ["--d" as string]: 4 }}>
                <p className="font-display text-lg italic leading-tight">&ldquo;{welcome.pullQuote}&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <dl className="mx-auto mt-28 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 px-0 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} data-reveal style={{ ["--d" as string]: i }} className="bg-ink px-6 py-10 text-center sm:py-14">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-5xl font-light text-blush sm:text-7xl">
                  <span data-count={s.value} data-from={s.plain ? s.value - 40 : 0}>{s.value}</span>
                  {s.suffix}
                </dd>
                <p aria-hidden className="mt-3 text-xs uppercase tracking-[0.25em] text-mute">{s.label}</p>
              </div>
            ))}
          </dl>
        </section>

        {/* ── RECITAL ────────────────────────────────────────── */}
        <section id="recital" className="footlights relative overflow-hidden bg-gradient-to-b from-velvet-deep via-[#3a0a18] to-ink py-28 sm:py-40">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,.35)_0_2px,transparent_2px_40px)] [mask-image:linear-gradient(#000,transparent)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
            <div data-reveal="zoom" className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-blush/20 blur-3xl" />
              <img
                src={recital.poster}
                alt={`${recital.title} — ${recital.edition} poster`}
                loading="lazy"
                className="relative rotate-[-3deg] rounded-[1.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] transition duration-700 hover:rotate-0 hover:scale-[1.02]"
              />
            </div>

            <div>
              <div data-reveal><Eyebrow>Act II · On Stage</Eyebrow></div>
              <p data-reveal style={{ ["--d" as string]: 1 }} className="mt-6 text-sm uppercase tracking-[0.3em] text-blush-soft/80">{recital.edition}</p>
              <h2 data-reveal style={{ ["--d" as string]: 2 }} className="font-display mt-3 text-6xl leading-[0.9] font-light sm:text-8xl">
                Halloween <em className="text-blush">Fright Night</em>
              </h2>
              <p data-reveal style={{ ["--d" as string]: 3 }} className="font-display mt-6 text-xl italic text-cream/70">{recital.tagline}</p>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {recital.dates.map((d, i) => (
                  <li key={d.date} data-reveal style={{ ["--d" as string]: 4 + i }} className="ticket bg-cream px-7 py-6 text-ink">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-velvet">{d.label}</p>
                    <p className="font-display mt-2 text-2xl"><time dateTime={d.date}>{d.display}</time></p>
                  </li>
                ))}
              </ul>

              <div data-reveal style={{ ["--d" as string]: 6 }} className="mt-10 flex flex-wrap gap-4">
                <a href={recital.tickets} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-blush px-7 py-4 font-semibold text-ink transition hover:bg-blush-soft hover:shadow-[0_0_40px_rgba(244,163,163,0.5)]">
                  Buy Tickets <Arrow />
                </a>
                <a href={recital.program} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 font-semibold transition hover:border-blush hover:text-blush">
                  View the Program <Arrow />
                </a>
              </div>

              <p data-reveal className="mt-12 max-w-md border-t border-white/10 pt-6 text-sm leading-relaxed text-mute">
                <span className="font-semibold text-cream">Tempo&rsquo;s Nutcracker.</span> An archive of memories
                from our past three Nutcracker productions is coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* ── QUOTES ─────────────────────────────────────────── */}
        <section aria-label="Words on dance" className="relative px-5 py-32 sm:px-8 sm:py-44">
          <Quotes />
        </section>

        {/* ── FACULTY ────────────────────────────────────────── */}
        <section id="faculty" className="relative bg-cream py-28 text-ink sm:py-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <div data-reveal><p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-velvet"><span className="h-px w-8 bg-velvet/60" />Act III · Faculty</p></div>
                <h2 data-reveal style={{ ["--d" as string]: 1 }} className="font-display mt-6 text-5xl leading-[0.95] font-light sm:text-7xl">
                  Meet your <em className="text-velvet">teachers</em>
                </h2>
              </div>
              <p data-reveal style={{ ["--d" as string]: 2 }} className="max-w-sm text-ink/70">
                &ldquo;I don&rsquo;t want people that want to dance. I want people that need to dance!&rdquo;
                <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-velvet">— George Balanchine</span>
              </p>
            </div>

            <div className="mt-20 grid gap-10 lg:grid-cols-2">
              {instructors.map((t, i) => (
                <article key={t.name} data-reveal style={{ ["--d" as string]: i * 2 }} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_60px_-30px_rgba(43,7,18,0.35)]">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img src={t.photo} alt={`${t.name}, ${t.role}`} loading="lazy" className="h-full w-full object-cover object-top transition duration-[1.4s] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-cream">
                      <h3 className="font-display text-4xl italic">{t.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-blush-soft">{t.role}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="leading-relaxed text-ink/75">{t.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {t.credentials.map((c) => (
                        <li key={c} className="rounded-full border border-velvet/15 bg-blush-soft/40 px-3 py-1 text-xs text-velvet">{c}</li>
                      ))}
                    </ul>
                    <details className="group/d mt-6 border-t border-ink/10 pt-5">
                      <summary className="flex cursor-pointer items-center justify-between font-semibold text-velvet">
                        In {t.name.split(" ")[0]}&rsquo;s words
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-velvet/30 transition-transform duration-300 group-open/d:rotate-45">+</span>
                      </summary>
                      <div className="mt-4 space-y-4 leading-relaxed text-ink/70">
                        {t.story.map((s, n) => <p key={n}>{s}</p>)}
                      </div>
                    </details>
                    {t.email && (
                      <a href={`mailto:${t.email}`} className="group mt-6 inline-flex items-center gap-2 font-semibold text-velvet hover:underline">
                        Email Miss {t.name.split(" ")[0]} <Arrow />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Beliefs */}
            <div className="mt-28 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p data-reveal className="font-display text-3xl italic leading-snug">Why choose Tempo? <span className="text-velvet">In Miss Sara&rsquo;s words…</span></p>
              </div>
              <ol className="space-y-1 lg:col-span-8">
                {beliefs.map((b, i) => (
                  <li key={b} data-reveal style={{ ["--d" as string]: i }} className="group flex items-baseline gap-6 border-b border-ink/10 py-5">
                    <span className="font-display text-sm text-velvet/60">0{i + 1}</span>
                    <span className="font-display text-2xl font-light transition-colors duration-300 group-hover:text-velvet sm:text-3xl">{b}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── GALLERY ────────────────────────────────────────── */}
        <section id="gallery" className="relative py-28 sm:py-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div data-reveal><Eyebrow>Act IV · Gallery</Eyebrow></div>
                <h2 data-reveal style={{ ["--d" as string]: 1 }} className="font-display mt-6 text-5xl leading-[0.95] font-light sm:text-7xl">
                  Moments <em className="text-blush">in the light</em>
                </h2>
              </div>
              <a data-reveal href={studio.facebook} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-semibold text-blush">
                More on Facebook <Arrow />
              </a>
            </div>
            <Gallery />
          </div>
        </section>

        {/* ── NEWSLETTERS ────────────────────────────────────── */}
        <section id="news" className="relative border-t border-white/10 bg-ink-2 py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div data-reveal><Eyebrow>Intermission · Newsletters</Eyebrow></div>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 data-reveal style={{ ["--d" as string]: 1 }} className="font-display text-5xl leading-[0.95] font-light sm:text-6xl">
                Studio <em className="text-blush">notes</em>
              </h2>
              <p data-reveal style={{ ["--d" as string]: 2 }} className="max-w-sm text-mute">
                Monthly updates on classes, competitions and recital prep. Tap any month to read it in full.
              </p>
            </div>
          </div>
          <ul className="mt-14 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-6 sm:scroll-px-8 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [scrollbar-width:thin]">
            {newsletters.map((n, i) => (
              <li key={n.file} data-reveal style={{ ["--d" as string]: i }} className="w-60 shrink-0 snap-start sm:w-72">
                <a href={`/newsletters/${n.file}.jpg`} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink">
                    <img src={`/newsletters/thumb-${n.file}.jpg`} alt={`${n.month} ${n.year} newsletter cover`} loading="lazy" width={384} height={480} className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105 group-hover:-rotate-1" />
                  </div>
                  <p className="mt-4 flex items-center justify-between">
                    <span className="font-display text-2xl italic group-hover:text-blush">{n.month}</span>
                    <span className="text-sm text-mute">{n.year}</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── VISIT ──────────────────────────────────────────── */}
        <section id="visit" className="relative isolate overflow-hidden py-28 sm:py-40">
          <div className="absolute inset-0 -z-10">
            <img src="/images/stage/stage-2.jpg" alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
          </div>
          <div aria-hidden className="spotlight pointer-events-none absolute inset-0 -z-[5]" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <div data-reveal className="flex justify-center"><Eyebrow>Finale · Visit Us</Eyebrow></div>
              <h2 data-reveal style={{ ["--d" as string]: 1 }} className="font-display mx-auto mt-6 max-w-4xl text-6xl leading-[0.9] font-light sm:text-8xl">
                Take <em className="text-blush">the stage.</em>
              </h2>
              <p data-reveal style={{ ["--d" as string]: 2 }} className="mx-auto mt-6 max-w-xl text-lg text-cream/75">
                Questions about classes, the recital, or anything else? We&rsquo;d love to hear from you.
              </p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3">
              <a data-reveal href={studio.mapsHref} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-white/10 bg-ink/60 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-blush/50">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Studio</p>
                <address className="font-display mt-4 text-2xl not-italic leading-snug">
                  {studio.address.street}<br />
                  {studio.address.city}, {studio.address.region} {studio.address.zip}
                </address>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blush">Get directions <Arrow /></span>
              </a>
              <div data-reveal style={{ ["--d" as string]: 1 }} className="rounded-3xl border border-white/10 bg-ink/60 p-8 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
                <a href={studio.phoneHref} className="font-display mt-4 block text-2xl hover:text-blush">{studio.phone}</a>
                <a href={`mailto:${studio.email}`} className="mt-2 block break-all text-cream/80 hover:text-blush">{studio.email}</a>
                <a href={studio.facebook} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blush">Like us on Facebook <Arrow /></a>
              </div>
              <div data-reveal style={{ ["--d" as string]: 2 }} className="rounded-3xl border border-white/10 bg-ink/60 p-8 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Office Hours</p>
                <ul className="font-display mt-4 space-y-2 text-2xl leading-snug">
                  {studio.hours.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-sm text-mute sm:flex-row sm:px-8">
          <div className="flex items-center gap-4">
            <img src="/images/tempo-logo.png" alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
            <p>© {studio.name} · Est. {studio.established}</p>
          </div>
          <p className="font-display italic text-cream/60">Everyone can dance.</p>
        </div>
      </footer>
    </>
  );
}
