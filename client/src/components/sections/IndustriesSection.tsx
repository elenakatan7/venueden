/* ============================================================
   VENUE Industries Section — Airbnb category-card style
   Grid of industry cards with icons and hover states
   ============================================================ */

import { useEffect, useRef } from "react";

const INDUSTRIES = [
  { label: "Fashion & Apparel", icon: "👗", description: "Seasonal drops, capsule launches, and brand activations." },
  { label: "Beauty & Skincare", icon: "💄", description: "Product launches, treatment experiences, and brand education." },
  { label: "Wellness & Lifestyle", icon: "🌿", description: "Supplement brands, fitness concepts, and wellness philosophy spaces." },
  { label: "Food & Beverage", icon: "☕", description: "Tasting rooms, limited-edition retail, and culinary brand experiences." },
  { label: "Art & Culture", icon: "🖼️", description: "Gallery activations, artist collaborations, and cultural moments." },
  { label: "Consumer Goods", icon: "📦", description: "DTC brands testing physical retail and expanding their footprint." },
  { label: "Hospitality & Travel", icon: "✈️", description: "Hotel brand activations, destination experiences, and travel retail." },
  { label: "Technology", icon: "💻", description: "Product launches, demo experiences, and tech brand storytelling." },
];

export default function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="industries"
      ref={ref}
      style={{ backgroundColor: "white", padding: "5rem 0" }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "0.5rem" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
            fontWeight: 600, color: "#FF385C", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            05 — Industries
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 className="reveal" style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em",
            color: "#222222", lineHeight: 1.15, maxWidth: "520px",
          }}>
            Built for brands that move culture.
          </h2>
          <p className="reveal" style={{
            fontFamily: "'Inter', sans-serif", fontSize: "1rem",
            color: "#717171", maxWidth: "360px", lineHeight: 1.6,
          }}>
            We've produced activations across every consumer category. If your brand has a story worth telling in physical space, we know how to tell it.
          </p>
        </div>

        {/* Industry grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1rem",
        }}>
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.label}
              className="reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                style={{
                  padding: "1.75rem 1.5rem",
                  background: "#F7F7F7",
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: "1.5px solid transparent",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "white";
                  el.style.border = "1.5px solid #FF385C";
                  el.style.boxShadow = "0 4px 20px rgba(255,56,92,0.12)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#F7F7F7";
                  el.style.border = "1.5px solid transparent";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }}>{industry.icon}</div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  fontSize: "1rem", color: "#222222",
                  letterSpacing: "-0.01em", marginBottom: "0.5rem",
                }}>
                  {industry.label}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
                  color: "#717171", lineHeight: 1.55,
                }}>
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="reveal" style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: "1rem",
            color: "#717171", fontStyle: "italic",
          }}>
            Don't see your category? Let's talk — we've worked in more industries than we can list.
          </p>
        </div>
      </div>
    </section>
  );
}
