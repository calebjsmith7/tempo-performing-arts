"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "../content";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setOpen((n) => (n === null ? n : (n + d + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  // Touch swipe inside the lightbox
  const touchX = useRef(0);

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {gallery.map((p, i) => (
          <button
            key={p.src}
            type="button"
            data-reveal="zoom"
            style={{ ["--d" as string]: i % 4 }}
            onClick={(e) => {
              lastTrigger.current = e.currentTarget;
              setOpen(i);
            }}
            className="group relative mb-3 block w-full overflow-hidden rounded-2xl bg-ink-2 sm:mb-4"
            aria-label={`Open photo: ${p.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              loading="lazy"
              decoding="async"
              className="h-auto w-full transition duration-[1.2s] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06] group-hover:brightness-110"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-3 text-left text-xs leading-snug text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {p.alt}
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="lightbox-enter fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <figure className="relative flex max-h-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={open}
              src={gallery[open].src}
              alt={gallery[open].alt}
              className="lightbox-img max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-mute">
              {gallery[open].alt} <span className="ml-2 text-gold">{open + 1} / {gallery.length}</span>
            </figcaption>
          </figure>
          <button
            ref={closeBtn}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-2xl transition hover:bg-white/10"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-2xl transition hover:bg-white/10 sm:grid"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-2xl transition hover:bg-white/10 sm:grid"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
