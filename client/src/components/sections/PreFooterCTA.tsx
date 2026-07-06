/* PreFooter CTA — Airbnb "Become a Host" style CTA */

export default function PreFooterCTA() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{
      background: "linear-gradient(135deg, #FF385C 0%, #E31C5F 100%)",
      padding: "5rem 0",
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 800,
          fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em",
          color: "white", lineHeight: 1.15, marginBottom: "1rem",
        }}>
          Ready to activate your brand?
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "1.125rem",
          color: "rgba(255,255,255,0.88)", lineHeight: 1.6,
          marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem",
        }}>
          Tell us what you're building. We'll tell you exactly how to bring it to life.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1rem",
              background: "white", color: "#222222",
              padding: "1rem 2rem", borderRadius: "8px",
              border: "none", cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            Start a Project
          </button>
          <button
            onClick={() => scrollTo("#work")}
            style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem",
              background: "transparent", color: "white",
              padding: "1rem 2rem", borderRadius: "8px",
              border: "1.5px solid rgba(255,255,255,0.6)", cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "white"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)"; }}
          >
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
