/* ============================================================
   VENUE Manifesto / Value Prop Section — Airbnb style
   Clean white, card-based pillars, photo-forward
   ============================================================ */

import { useEffect, useRef } from "react";

const PILLARS = [
  {
    icon: "📍",
    title: "The Right Space",
    body: "We hold relationships with hundreds of landlords, property managers, and real estate partners across every major market. The right room exists — we know where it is.",
    stat: "500+ spaces",
    statLabel: "in our network",
  },
  {
    icon: "🎨",
    title: "The Right Design",
    body: "Every activation is a world unto itself. Our creative team designs environments that feel like your brand at its most essential — not a pop-up, but a destination.",
    stat: "100%",
    statLabel: "custom design",
  },
  {
    icon: "⚡",
    title: "The Right Execution",
    body: "From permit to opening day, we manage every detail. Production, staffing, logistics, operations. You focus on your brand. We handle everything else.",
    stat: "98%",
    statLabel: "on-time delivery",
  },
];

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-intro"
      ref={ref}
      style={{ backgroundColor: "#FFFFFF", padding: "5rem 0" }}
    >
      <div className="container">
        {/* Section label */}
        <div className="reveal" style={{ marginBottom: "0.75rem" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "#FF385C",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}>
            What We Do
          </span>
        </div>

        {/* Main statement */}
        <div className="reveal" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            color: "#222222",
            maxWidth: "640px",
            lineHeight: 1.15,
          }}>
            Physical retail is not dead.
            Permanent retail is just expensive.
          </h2>
        </div>

        {/* Supporting copy */}
        <div className="reveal" style={{ marginBottom: "4rem", maxWidth: "560px" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.0625rem",
            fontWeight: 400,
            color: "#717171",
            lineHeight: 1.65,
          }}>
            VENUE was built for brands that understand the power of physical presence — but
            aren't ready to sign a five-year lease. We produce temporary retail experiences
            that feel permanent: fully designed, fully built, fully staffed, and fully managed.
          </p>
        </div>

        {/* Three pillars — card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div style={{
                padding: "2rem",
                background: "#F7F7F7",
                borderRadius: "16px",
                height: "100%",
                transition: "box-shadow 0.25s ease",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                  (e.currentTarget as HTMLElement).style.background = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.background = "#F7F7F7";
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{pillar.icon}</div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1875rem",
                  color: "#222222",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#717171",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}>
                  {pillar.body}
                </p>
                <div style={{
                  borderTop: "1px solid #EBEBEB",
                  paddingTop: "1rem",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.375rem",
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.375rem",
                    color: "#FF385C",
                    letterSpacing: "-0.03em",
                  }}>{pillar.stat}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#717171",
                  }}>{pillar.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
