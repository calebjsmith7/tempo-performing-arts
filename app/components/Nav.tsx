"use client";

import { useEffect, useState } from "react";
import { nav, recital } from "../content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-ink/75 py-2 backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="group flex items-center gap-3" aria-label="Tempo School of Performing Arts — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tempo-logo.png"
            alt=""
            width={48}
            height={48}
            className={`rounded-full transition-all duration-500 group-hover:rotate-[-8deg] ${scrolled ? "h-10 w-10" : "h-12 w-12"}`}
          />
          <span className="hidden leading-none sm:block">
            <span className="font-display block text-xl italic">Tempo</span>
            <span className="block text-[0.62rem] uppercase tracking-[0.3em] text-mute">School of Performing Arts</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`relative rounded-full px-4 py-2 text-sm tracking-wide transition-colors hover:text-blush ${
                  active === n.href ? "text-blush" : "text-cream/80"
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-blush transition-transform duration-500 ${
                    active === n.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={recital.tickets}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-blush px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-blush-soft hover:shadow-[0_0_30px_rgba(244,163,163,0.45)] sm:inline-block"
          >
            Get Tickets
          </a>
          <button
            type="button"
            className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute h-px w-5 bg-cream transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-5 bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-px w-5 bg-cream transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-velvet-deep/95 px-8 backdrop-blur-xl transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] lg:hidden ${
          open ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]"
        }`}
      >
        <ul className="space-y-2">
          {nav.map((n, i) => (
            <li key={n.href} className="overflow-hidden">
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                className={`font-display block text-5xl italic transition-all duration-700 hover:text-blush ${
                  open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={recital.tickets}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          className="mt-12 inline-block self-start rounded-full bg-blush px-6 py-3 font-semibold text-ink"
        >
          Get Recital Tickets
        </a>
      </div>
    </header>
  );
}
