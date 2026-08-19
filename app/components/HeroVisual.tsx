"use client";

import { useEffect, useRef } from "react";

export default function HeroVisual() {
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    const MAX_OFFSET = 50; // px, stays within the 60px inset buffer
    const PARALLAX_RATE = 0.07;
    const MIN_SCALE = 1;
    const MAX_SCALE = 1.08;
    const SCALE_RATE = 0.00015;

    const updateParallax = () => {
      const scrollY = window.scrollY;

      const rawOffset = scrollY * PARALLAX_RATE;
      const offset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, rawOffset));

      const scale = Math.max(MIN_SCALE, MAX_SCALE - scrollY * SCALE_RATE);

      image.style.setProperty("--parallax-y", `${offset}px`);
      image.style.setProperty("--parallax-scale", `${scale}`);

      frameRef.current = null;
    };

    const handleScroll = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-image-wrap">
      <img
        ref={imageRef}
        src="/hero-data.png"
        alt="Data flowing from business systems into analytics"
        className="hero-image"
      />
    </div>
  );
}