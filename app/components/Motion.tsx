"use client";

import { useEffect } from "react";

/**
 * Page-wide motion: scroll reveals, hero parallax, cursor spotlight and
 * count-up numbers. Sections stay server-rendered; they opt in with
 * data-reveal / data-count attributes.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion");

    // Scroll reveals
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    // Count-up numbers
    const counters = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          counters.unobserve(el);
          const target = Number(el.dataset.count);
          const from = Number(el.dataset.from ?? 0);
          if (reduce) {
            el.textContent = String(target);
            continue;
          }
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = String(Math.round(from + (target - from) * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );
    document.querySelectorAll("[data-count]").forEach((el) => counters.observe(el));

    if (reduce) {
      return () => {
        reveal.disconnect();
        counters.disconnect();
      };
    }

    // Hero parallax (only while the hero is near the viewport)
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.5) root.style.setProperty("--scroll", String(y));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cursor-following spotlight on elements with .spotlight
    const lights = Array.from(document.querySelectorAll<HTMLElement>(".spotlight"));
    const onMove = (ev: PointerEvent) => {
      for (const el of lights) {
        const r = el.getBoundingClientRect();
        if (ev.clientY < r.top || ev.clientY > r.bottom) continue;
        el.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        el.style.setProperty("--my", `${ev.clientY - r.top}px`);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      reveal.disconnect();
      counters.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
