"use client";

import { useEffect, useState } from "react";

export default function HeroVisual() {
  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Moves the image upward slightly as the page scrolls
      setTranslateY(scrollY * -0.15);

      // Fades the image slightly as the user scrolls down
      setOpacity(Math.max(0.4, 1 - scrollY / 600));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-image-wrap">
      <img
        src="/hero-data.png"
        alt="Data flowing from business systems into analytics"
        className="hero-image"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      />
    </div>
  );
}