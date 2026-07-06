/* ============================================================
   VENUE Hero Section — Airbnb × Peerspace style
   Full-screen image with prominent search bar + category chips
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const VIDEO_URL = "/manus-storage/retail-interior_17124b3a.mp4";
const FALLBACK_IMAGE = "/manus-storage/venue-hero-daytime_7c23c88e.jpg";

const CATEGORIES = [
  { label: "Pop-Up Retail", icon: "🏪" },
  { label: "Brand Activations", icon: "⚡" },
  { label: "Showrooms", icon: "🎨" },
  { label: "Launch Events", icon: "🚀" },
  { label: "Fashion Drops", icon: "👗" },
  { label: "Wellness Spaces", icon: "🌿" },
  { label: "Food & Bev", icon: "☕" },
  { label: "Art Installations", icon: "🖼️" },
];

const TRUST_STATS = [
  { value: "150+", label: "Activations produced" },
  { value: "40+", label: "Markets nationwide" },
  { value: "98%", label: "On-time delivery" },
];

export default function VideoHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Video / image background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: videoLoaded ? 1 : 0 }}
        poster={FALLBACK_IMAGE}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${FALLBACK_IMAGE})`, opacity: videoLoaded ? 0 : 1 }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center items-center text-center"
        style={{
          flex: 1,
          paddingTop: "120px",
          paddingBottom: "80px",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {/* Headline */}
        <div
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}
        >
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              color: "white",
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              maxWidth: "780px",
              margin: "0 auto 0.75rem",
            }}
          >
            Your brand deserves
            <br />a space of its own.
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.88)",
              marginBottom: "2.5rem",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.55,
            }}
          >
            Full-service pop-up production — we find the space, design the concept,
            build the store, and run the whole show.
          </p>
        </div>

        {/* Search Bar */}
        <div
          style={{
            width: "100%",
            maxWidth: "860px",
            marginBottom: "1.5rem",
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease 0.5s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.5s",
          }}
        >
          {/* Desktop search bar */}
          <div className="search-bar hidden md:flex">
            <button className="search-field" style={{ flex: "1.4" }}>
              <span className="search-field-label">Location</span>
              <span className="search-field-value">Where do you want to activate?</span>
            </button>
            <button className="search-field" onClick={() => scrollTo("#industries")}>
              <span className="search-field-label">Activation Type</span>
              <span className="search-field-value">Pop-up, Showroom, Event...</span>
            </button>
            <button className="search-field" onClick={() => scrollTo("#how-it-works")}>
              <span className="search-field-label">Timeline</span>
              <span className="search-field-value">When do you need it?</span>
            </button>
            <button className="search-btn" onClick={() => scrollTo("#contact")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Get a Proposal
            </button>
          </div>

          {/* Mobile search bar */}
          <button
            className="md:hidden w-full"
            onClick={() => scrollTo("#contact")}
            style={{
              background: "white",
              borderRadius: "40px",
              padding: "1rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              boxShadow: "0 3px 12px rgba(0,0,0,0.18)",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#717171" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#717171", flex: 1, textAlign: "left" }}>
              Start your brand activation...
            </span>
            <span style={{
              background: "linear-gradient(to right, #FF385C, #E31C5F)",
              color: "white",
              borderRadius: "24px",
              padding: "0.375rem 0.875rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              flexShrink: 0,
            }}>
              Search
            </span>
          </button>
        </div>

        {/* Category Chips */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "720px",
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s ease 0.75s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.75s",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => { setActiveCategory(cat.label); scrollTo("#services"); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.5rem 1rem",
                background: activeCategory === cat.label ? "white" : "rgba(255,255,255,0.15)",
                border: `1px solid ${activeCategory === cat.label ? "white" : "rgba(255,255,255,0.4)"}`,
                borderRadius: "24px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: activeCategory === cat.label ? "#222222" : "white",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "0.875rem" }}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Trust Stats */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "2.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: textVisible ? 1 : 0,
            transition: "opacity 0.8s ease 1s",
          }}
        >
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                color: "white",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.75)",
                marginTop: "0.25rem",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
