/* ============================================================
   VENUE How It Works Section — Airbnb clean steps
   White background, numbered steps with icons
   ============================================================ */

import { useEffect, useRef } from "react";

const STEPS = [
  {
    number: "01",
    icon: "💬",
    phase: "Discovery",
    title: "Tell us about your brand",
    description: "Share your vision, timeline, and budget. We'll ask the right questions to understand exactly what your activation needs to achieve.",
    duration: "Day 1",
  },
  {
    number: "02",
    icon: "📍",
    phase: "Space & Strategy",
    title: "We find the perfect space",
    description: "We tap our network of 500+ spaces nationwide to identify and negotiate the ideal location — at the right price, in the right neighborhood.",
    duration: "Week 1–2",
  },
  {
    number: "03",
    icon: "🎨",
    phase: "Design",
    title: "We design the experience",
    description: "Our creative team designs every detail: spatial layout, brand environment, fixtures, and the story visitors will feel the moment they walk in.",
    duration: "Week 2–4",
  },
  {
    number: "04",
    icon: "🔨",
    phase: "Production",
    title: "We build it",
    description: "Our production crew handles permitting, build-out, fabrication, and installation. We open on time and on budget — every time.",
    duration: "Week 4–8",
  },
  {
    number: "05",
    icon: "🚀",
    phase: "Launch",
    title: "We open the doors",
    description: "Trained staff, managed operations, real-time reporting. You show up to a finished, fully running activation. We run the rest.",
    duration: "Activation Period",
  },
  {
    number: "06",
    icon: "📊",
    phase: "Wrap & Reporting",
    title: "We close with clarity",
    description: "Detailed performance analytics, media impressions, sales data. You get a complete picture of what the activation achieved — and what's next.",
    duration: "Post-Activation",
  },
];

export default function HowItWorksSection() {
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
      id="how-it-works"
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
            04 — The Process
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 className="reveal" style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em",
            color: "#222222", lineHeight: 1.15, maxWidth: "540px",
          }}>
            From brief to opening day — we run the whole show.
          </h2>
          <button
            className="reveal btn-primary"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ flexShrink: 0 }}
          >
            Start a Project
          </button>
        </div>

        {/* Steps grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div style={{
                background: "white",
                borderRadius: "16px",
                padding: "1.75rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                transition: "box-shadow 0.25s ease",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "1.75rem" }}>{step.icon}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "0.75rem",
                    fontWeight: 700, color: "#FF385C",
                    background: "#FFF0F3", borderRadius: "4px",
                    padding: "0.25rem 0.625rem", letterSpacing: "0.04em",
                  }}>
                    {step.duration}
                  </span>
                </div>

                <div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem",
                    fontWeight: 600, color: "#717171", textTransform: "uppercase",
                    letterSpacing: "0.08em", marginBottom: "0.375rem",
                  }}>
                    Step {step.number} — {step.phase}
                  </div>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 700,
                    fontSize: "1.0625rem", color: "#222222", letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                  }}>
                    {step.title}
                  </h3>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                  color: "#717171", lineHeight: 1.6, flex: 1,
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ marginTop: "3rem", textAlign: "center" }}>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
            style={{ borderRadius: "8px" }}
          >
            Start the Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
