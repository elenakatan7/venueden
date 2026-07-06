/* ============================================================
   VENUE Footer — Airbnb style clean white footer
   ============================================================ */

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "white", borderTop: "1px solid #EBEBEB" }}>
      <div className="container" style={{ padding: "3rem 6rem 3rem" }}>
        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid #EBEBEB",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.875rem" }}>
              <svg width="16" height="11" viewBox="0 0 20 14" fill="none">
                <path d="M0 0L10 14L20 0H16.5L10 10.5L3.5 0H0Z" fill="#FF385C" />
              </svg>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: "1rem", color: "#222222", letterSpacing: "-0.01em",
              }}>
                venue
              </span>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
              color: "#717171", lineHeight: 1.6, maxWidth: "240px", marginBottom: "1rem",
            }}>
              Full-service pop-up production for brands that demand more than a tent and a table.
            </p>
            <a href="mailto:hello@venuepop.co" style={{
              fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
              fontWeight: 600, color: "#FF385C", textDecoration: "none",
            }}>
              hello@venuepop.co
            </a>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#222222", marginBottom: "1rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Company
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Our Work", href: "#work" },
              ].map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                    color: "#717171", border: "none", background: "transparent",
                    padding: 0, cursor: "pointer", transition: "color 0.2s ease",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#222222")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#717171")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#222222", marginBottom: "1rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Industries
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["Fashion", "Beauty", "Wellness", "Food & Beverage", "Art & Culture"].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo("#industries")} style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                    color: "#717171", border: "none", background: "transparent",
                    padding: 0, cursor: "pointer", transition: "color 0.2s ease",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#222222")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#717171")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#222222", marginBottom: "1rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Contact
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "General Inquiries", href: "mailto:hello@venuepop.co" },
                { label: "New Projects", href: "mailto:projects@venuepop.co" },
                { label: "Press", href: "mailto:press@venuepop.co" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                    color: "#717171", textDecoration: "none", transition: "color 0.2s ease",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#222222")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#717171")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#AAAAAA" }}>
                  New York, NY
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: "1.5rem", flexWrap: "wrap", gap: "0.75rem",
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#AAAAAA" }}>
            © {new Date().getFullYear()} VENUE Production Studio. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <button key={item} style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
                color: "#AAAAAA", border: "none", background: "transparent",
                cursor: "pointer", padding: 0, transition: "color 0.2s ease",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#717171")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#AAAAAA")}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
