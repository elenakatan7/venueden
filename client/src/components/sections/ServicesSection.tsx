/* ============================================================
   VENUE Services Section — Peerspace-style venue card grid
   Cards with photos, tags, and pricing
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const ACTIVATION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-v3-activation-nGJFvxJNFMTHaHSUiEJjLx.webp";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-v3-hero-PpjtsGd4MGqYpb9r7FuZnK.webp";
const STOREFRONT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-v3-design-5jtHGxnCKJMdRwPFVhEqpB.webp";
const SERVICES_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-v3-hero-PpjtsGd4MGqYpb9r7FuZnK.webp";

const FILTER_TABS = ["All", "Retail", "Events", "Showrooms", "Wellness", "Food & Bev"];

const SERVICES = [
  {
    id: 1,
    image: ACTIVATION_IMAGE,
    category: "Retail",
    title: "Space Sourcing & Leasing",
    location: "Nationwide",
    rating: 4.97,
    reviews: 143,
    priceFrom: "$5,000",
    priceUnit: "/ week",
    tags: ["Site Scouting", "Lease Negotiation", "Permits"],
    superhost: true,
  },
  {
    id: 2,
    image: HERO_IMAGE,
    category: "Events",
    title: "Concept Design & Creative Direction",
    location: "New York · LA · Chicago",
    rating: 4.99,
    reviews: 88,
    priceFrom: "$8,000",
    priceUnit: "/ project",
    tags: ["Spatial Design", "Brand Alignment", "Visual Merch"],
    superhost: true,
  },
  {
    id: 3,
    image: STOREFRONT_IMAGE,
    category: "Showrooms",
    title: "Build-Out & Production",
    location: "On-site anywhere",
    rating: 4.95,
    reviews: 212,
    priceFrom: "$15,000",
    priceUnit: "/ build",
    tags: ["Contracting", "Fabrication", "Installation"],
    superhost: false,
  },
  {
    id: 4,
    image: SERVICES_IMAGE,
    category: "Retail",
    title: "Vendor & Supplier Coordination",
    location: "All markets",
    rating: 4.96,
    reviews: 67,
    priceFrom: "$2,500",
    priceUnit: "/ project",
    tags: ["Sourcing", "Logistics", "Scheduling"],
    superhost: false,
  },
  {
    id: 5,
    image: ACTIVATION_IMAGE,
    category: "Events",
    title: "Staffing & Operations",
    location: "40+ cities",
    rating: 4.98,
    reviews: 178,
    priceFrom: "$3,500",
    priceUnit: "/ week",
    tags: ["Hiring", "Training", "Management"],
    superhost: true,
  },
  {
    id: 6,
    image: HERO_IMAGE,
    category: "Retail",
    title: "Reporting & Wrap",
    location: "Post-activation",
    rating: 4.94,
    reviews: 54,
    priceFrom: "Included",
    priceUnit: "",
    tags: ["Analytics", "Performance Review", "Teardown"],
    superhost: false,
  },
];

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="#222222">
      <path d="M6 1l1.5 3.1 3.4.5-2.45 2.4.58 3.38L6 8.77 2.97 10.38l.58-3.38L1.1 4.6l3.4-.5z"/>
    </svg>
  );
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#FF385C" : "none"} stroke={filled ? "#FF385C" : "white"} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [saved, setSaved] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === "All" ? SERVICES : SERVICES.filter(s => s.category === activeFilter);

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="services"
      ref={ref}
      style={{ backgroundColor: "white", padding: "4rem 0 5rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "0.5rem" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
            fontWeight: 600, color: "#FF385C", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            03 — Our Services
          </span>
        </div>
        <div className="reveal" style={{ marginBottom: "2rem" }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em",
            color: "#222222", lineHeight: 1.15,
          }}>
            Everything your activation needs — under one roof.
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          className="reveal"
          style={{
            display: "flex", gap: "0.5rem", flexWrap: "wrap",
            marginBottom: "2.5rem", paddingBottom: "1.25rem",
            borderBottom: "1px solid #EBEBEB",
          }}
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "0.5rem 1rem",
                borderRadius: "24px",
                border: activeFilter === tab ? "1.5px solid #222222" : "1.5px solid #DDDDDD",
                background: activeFilter === tab ? "#222222" : "white",
                color: activeFilter === tab ? "white" : "#222222",
                cursor: "pointer",
                transition: "all 0.15s ease",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}>
          {filtered.map((service, i) => (
            <div
              key={service.id}
              className="venue-card reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="venue-card-image-wrap" style={{ position: "relative", marginBottom: "0.875rem" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="venue-card-image"
                  style={{ aspectRatio: "4/3" }}
                />
                {/* Heart */}
                <button
                  onClick={(e) => toggleSave(service.id, e)}
                  style={{
                    position: "absolute", top: "0.75rem", right: "0.75rem",
                    background: "none", border: "none", cursor: "pointer",
                    filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))",
                    padding: "4px",
                    display: "flex",
                  }}
                >
                  <HeartIcon filled={saved.has(service.id)} />
                </button>
                {/* Superhost badge */}
                {service.superhost && (
                  <div style={{
                    position: "absolute", bottom: "0.75rem", left: "0.75rem",
                    background: "white", borderRadius: "4px",
                    padding: "0.25rem 0.5rem",
                    fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem",
                    fontWeight: 700, color: "#222222",
                    display: "flex", alignItems: "center", gap: "0.25rem",
                  }}>
                    ⭐ Top Service
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: "0 0.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.375rem" }}>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    fontSize: "0.9375rem", color: "#222222",
                    lineHeight: 1.3, flex: 1, paddingRight: "0.5rem",
                  }}>
                    {service.title}
                  </h3>
                  <div className="stars" style={{ flexShrink: 0 }}>
                    <StarIcon />
                    <span>{service.rating}</span>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                  color: "#717171", marginBottom: "0.625rem",
                }}>
                  {service.location}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "0.875rem" }}>
                  {service.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem",
                      fontWeight: 500, color: "#717171",
                      background: "#F7F7F7", borderRadius: "4px",
                      padding: "0.25rem 0.5rem",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 700,
                    fontSize: "0.9375rem", color: "#222222",
                  }}>
                    From {service.priceFrom}
                  </span>
                  {service.priceUnit && (
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                      color: "#717171",
                    }}>
                      {service.priceUnit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: "1rem",
            color: "#717171", marginBottom: "1.25rem",
          }}>
            Every service available as a full-production engagement or standalone.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Get a Custom Proposal
          </button>
        </div>
      </div>
    </section>
  );
}
