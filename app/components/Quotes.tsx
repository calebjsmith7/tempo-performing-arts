"use client";

import { useEffect, useState } from "react";
import { quotes } from "../content";

export default function Quotes() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((n) => (n + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  const q = quotes[i];

  return (
    <div
      className="relative mx-auto max-w-4xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span aria-hidden className="font-display pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 text-[10rem] leading-none text-blush/20">
        &ldquo;
      </span>
      <figure key={i} className="quote-in min-h-[14rem] sm:min-h-[12rem]" aria-live="polite">
        <blockquote className="font-display text-3xl leading-tight italic text-balance sm:text-5xl">
          {q.text}
        </blockquote>
        <figcaption className="mt-8 text-xs uppercase tracking-[0.35em] text-gold">— {q.by}</figcaption>
      </figure>
      <div className="mt-10 flex justify-center gap-3" role="tablist" aria-label="Choose a quote">
        {quotes.map((x, n) => (
          <button
            key={x.by}
            type="button"
            role="tab"
            aria-selected={n === i}
            aria-label={`Quote by ${x.by}`}
            onClick={() => setI(n)}
            className="group relative h-6 w-10"
          >
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
            <span
              className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 origin-left bg-blush transition-transform duration-500 ${
                n === i ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
