/* ============================================================
   VENUE Work / Case Studies Section — Peerspace-style listing cards
   ============================================================ */

import { useEffect, useRef } from "react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-v3-hero-PpjtsGd4MGqYpb9r7FuZnK.webp";
const ACTIVATION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-v3-activation-nGJFvxJNFMTHaHSUiEJjLx.webp";
const STOREFRONT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-v3-design-5jtHGxnCKJMdRwPFVhEqpB.webp";

const CASE_STUDIES = [
  {
    id: "01",
    category: "Beauty",
    brand: "Soleil Skincare",
    title: "A 30-Day Skin School in SoHo",
    description: "A luxury skincare brand's first physical retail experience. We sourced a 1,800 sq ft space on Spring Street, designed a custom consultation environment, and staffed 12 trained brand educators.",
    metrics: [
      { label: "Duration", value: "30 Days" },
      { label: "Location", value: "SoHo, NYC" },
      { label: "Sq Ft", value: "1,800" },
      { label: "Sales", value: "$480K" },
    ],
    image: ACTIVATION_IMAGE,
    rating: 4.98,
    reviewCount: 47,
  },
  {
    id: "02",
    category: "Fashion",
    brand: "Meridian Studio",
    title: "A Capsule Drop in the Meatpacking District",
    description: "An emerging fashion label's limited-edition capsule collection launch. We designed and built a fully custom retail environment in 3 weeks. Sold out in 6 days.",
    metrics: [
      { label: "Duration", value: "14 Days" },
      { label: "Location", value: "Meatpacking" },
      { label: "Build Time", value: "21 Days" },
      { label: "Result", value: "Sold Out" },
    ],
    image: HERO_IMAGE,
    rating: 5.0,
    reviewCount: 31,
  },
  {
    id: "03",
    category: "Wellness",
    brand: "Grove Wellness",
    title: "A Multi-City Wellness Tour",
    description: "A DTC wellness brand's first physical tour across 5 cities in 8 weeks — coordinating simultaneous activations in NY, LA, Chicago, Miami, and Austin.",
    metrics: [
      { label: "Cities", value: "5" },
      { label: "Duration", value: "8 Weeks" },
      { label: "Staff", value: "60+" },
      { label: "New Customers", value: "12,400" },
    ],
    image: STOREFRONT_IMAGE,
    rating: 4.96,
    reviewCount: 58,
  },
];

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="#222222">
      <path d="M6 1l1.5 3.1 3.4.5-2.45 2.4.58 3.38L6 8.77 2.97 10.38l.58-3.38L1.1 4.6l3.4-.5z"/>
    </svg>
  );
}

export default function WorkSection() {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section
      id="work"
      ref={ref}
      style={{ backgroundColor: "#F7F7F7", padding: "5rem 0" }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "0.5rem" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
            fontWeight: 600, color: "#FF385C", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            06 — Selected Work
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 className="reveal" style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em",
            color: "#222222", lineHeight: 1.15,
          }}>
            Activations that moved the needle.
          </h2>
          <p className="reveal" style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem",
            color: "#717171", maxWidth: "360px",
          }}>
            A sample of what VENUE has produced. Every project is different. Every result is measurable.
          </p>
        </div>

        {/* Case Studies — alternating layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.id}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                minHeight: "360px",
              }}>
                {/* Image */}
                <div
                  style={{
                    order: i % 2 === 0 ? 1 : 2,
                    overflow: "hidden",
                    minHeight: "280px",
                  }}
                  className="img-hover"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>

                {/* Content */}
                <div style={{
                  order: i % 2 === 0 ? 2 : 1,
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                      <span style={{
                        background: "#FFF0F3", color: "#FF385C",
                        fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem",
                        fontWeight: 700, borderRadius: "4px",
                        padding: "0.25rem 0.625rem", letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}>
                        {study.category}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <StarIcon />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "#222222" }}>
                          {study.rating}
                        </span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#717171" }}>
                          ({study.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
                      fontWeight: 600, color: "#FF385C", marginBottom: "0.5rem",
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>
                      {study.brand}
                    </p>

                    <h3 style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 800,
                      fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#222222",
                      letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "1rem",
                    }}>
                      {study.title}
                    </h3>

                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem",
                      color: "#717171", lineHeight: 1.6, marginBottom: "1.5rem",
                    }}>
                      {study.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div style={{
                    display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "0.5rem", borderTop: "1px solid #EBEBEB", paddingTop: "1.25rem",
                  }}>
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div style={{
                          fontFamily: "'Inter', sans-serif", fontWeight: 800,
                          fontSize: "1.125rem", color: "#222222",
                          letterSpacing: "-0.02em", lineHeight: 1,
                        }}>
                          {metric.value}
                        </div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem",
                          color: "#717171", marginTop: "0.25rem",
                        }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "2rem" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
            color: "#AAAAAA", textAlign: "center",
          }}>
            Case studies are representative of VENUE's work. Brand names are used for illustrative purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
