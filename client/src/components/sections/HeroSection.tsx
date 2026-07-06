/* ============================================================
   VENUE Hero Section
   Full-screen cinematic — Ralph Lauren navy × Loro Piana cream
   Moncler-style Playfair Display headline
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-hero-daytime-4X7aNW7nBHfayxLPYHpBrY.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setLoaded(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.35;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="scroll-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(248,244,238,0.30) 0%, rgba(248,244,238,0.10) 55%, rgba(248,244,238,0.02) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(248,244,238,0.20) 0%, transparent 60%)",
        }}
      />

      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0" style={{ backgroundColor: "#F8F4EE" }} />
      )}

      {/* Content */}
      <div className="relative z-10 container flex flex-col justify-end h-full pb-20 md:pb-28" style={{ minHeight: "100vh" }}>
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className="venue-label mb-8"
            style={{
              color: "#C4956A",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
            }}
          >
            Venue Production Studio
          </div>

          {/* Headline */}
          <h1
            className="font-display leading-none mb-8"
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(3.5rem, 7vw, 7.5rem)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 1.1s ease 0.5s, transform 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s",
            }}
          >
            Your brand
            <br />
            deserves{" "}
            <em className="font-display-italic" style={{ color: "#C4956A" }}>
              a room
            </em>
            <br />
            of its own.
          </h1>

          {/* Subheadline */}
          <p
            className="font-ui mb-12"
            style={{
              color: "rgba(44, 64, 102, 0.85)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              fontWeight: 300,
              maxWidth: "480px",
              lineHeight: 1.7,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease 0.75s, transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.75s",
            }}
          >
            We find the space, design the concept, build the store, and manage every detail — so your activation opens on time, on brand, and on budget.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 1s ease 1s, transform 1s cubic-bezier(0.23, 1, 0.32, 1) 1s",
            }}
          >
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
              Start a Project
            </a>
            <a href="#work" onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline-cream">
              See Our Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-3"
          style={{
            opacity: loaded ? 0.5 : 0,
            transition: "opacity 1s ease 1.5s",
          }}
        >
          <span className="venue-label" style={{ color: "#1A1A1A", writingMode: "vertical-rl", letterSpacing: "0.25em" }}>Scroll</span>
          <div
            className="scroll-indicator"
            style={{ width: "1px", height: "48px", backgroundColor: "#C4956A" }}
          />
        </div>
      </div>
    </section>
  );
}
