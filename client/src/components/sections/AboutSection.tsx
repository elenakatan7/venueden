/* ============================================================
   VENUE About Section — Airbnb trust signals style
   Stats, story, and social proof
   ============================================================ */

import { useEffect, useRef } from "react";

const ABOUT_IMAGE = "/manus-storage/venue-v3-about_ce0365e9.jpg";

const STATS = [
  { value: "150+", label: "Activations produced" },
  { value: "40+", label: "Cities & markets" },
  { value: "98%", label: "On-time delivery" },
  { value: "8 yrs", label: "In production" },
];

const REVIEWS = [
  {
    name: "Sarah Chen",
    role: "VP of Marketing, Soleil Skincare",
    avatar: "SC",
    text: "VENUE took our concept from a vague idea to a fully operational pop-up in 6 weeks. The execution was flawless.",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "Founder, Meridian Studio",
    avatar: "MW",
    text: "They understood our brand instinctively. The space felt like us at our best — and it sold out in 6 days.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Head of Brand, Grove Wellness",
    avatar: "PN",
    text: "Managing 5 simultaneous city activations with zero hiccups. I can't recommend VENUE enough.",
    rating: 5,
  },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#FF385C">
          <path d="M6 1l1.5 3.1 3.4.5-2.45 2.4.58 3.38L6 8.77 2.97 10.38l.58-3.38L1.1 4.6l3.4-.5z"/>
        </svg>
      ))}
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 90);
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
    <section id="about" ref={ref} style={{ backgroundColor: "white", padding: "5rem 0" }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "0.5rem" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
            fontWeight: 600, color: "#FF385C", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            07 — About VENUE
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem", alignItems: "center", marginBottom: "4rem",
        }}>
          {/* Text */}
          <div>
            <h2 className="reveal" style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em",
              color: "#222222", lineHeight: 1.15, marginBottom: "1.25rem",
            }}>
              We built VENUE because brands deserved better.
            </h2>
            <p className="reveal" style={{
              fontFamily: "'Inter', sans-serif", fontSize: "1rem",
              color: "#717171", lineHeight: 1.65, marginBottom: "1rem",
            }}>
              VENUE was founded by a team of retail designers, production directors, and brand
              strategists who spent years watching great brands struggle with the complexity of
              physical retail.
            </p>
            <p className="reveal" style={{
              fontFamily: "'Inter', sans-serif", fontSize: "1rem",
              color: "#717171", lineHeight: 1.65, marginBottom: "2rem",
            }}>
              We built a company that removes every obstacle between a brand and its best physical
              moment. One partner. One process. One standard of excellence.
            </p>
            <button
              className="reveal btn-primary"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Work With Us
            </button>
          </div>

          {/* Image */}
          <div className="reveal img-hover" style={{ borderRadius: "16px", overflow: "hidden" }}>
            <img
              src={ABOUT_IMAGE}
              alt="VENUE team"
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1px",
          background: "#EBEBEB",
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "4rem",
        }}>
          {STATS.map((stat) => (
            <div key={stat.label} style={{ background: "white", padding: "2rem 1.5rem", textAlign: "center" }}>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 800,
                fontSize: "2rem", color: "#222222",
                letterSpacing: "-0.04em", lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                color: "#717171", marginTop: "0.375rem",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="reveal" style={{ marginBottom: "0.75rem" }}>
          <h3 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: "1.25rem", color: "#222222", letterSpacing: "-0.02em",
            marginBottom: "0.375rem",
          }}>
            What our clients say
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <StarRow />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "#222222" }}>
              4.97
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#717171" }}>
              · 143 reviews
            </span>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className="reveal"
              style={{
                transitionDelay: `${i * 80}ms`,
                background: "#F7F7F7",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <StarRow count={review.rating} />
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem",
                color: "#222222", lineHeight: 1.6, margin: "0.875rem 0 1rem",
              }}>
                "{review.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "36px", height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(to bottom right, #FF385C, #E31C5F)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  fontSize: "0.75rem", color: "white", flexShrink: 0,
                }}>
                  {review.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#222222" }}>
                    {review.name}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#717171" }}>
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
