/* ============================================================
   VENUE Navigation — Airbnb style
   Always white, clean, logo + links + CTA
   ============================================================ */

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #EBEBEB" : "1px solid transparent",
        }}
      >
        <div className="container">
          <nav className="flex items-center justify-between" style={{ height: "72px" }}>
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 flex-shrink-0"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <svg width="18" height="13" viewBox="0 0 20 14" fill="none">
                <path d="M0 0L10 14L20 0H16.5L10 10.5L3.5 0H0Z" fill="#FF385C" />
              </svg>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: scrolled ? "#222222" : "#FFFFFF",
                letterSpacing: "-0.01em",
                transition: "color 0.3s ease",
              }}>
                venue
              </span>
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center" style={{ gap: "0.125rem" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: scrolled ? "#222222" : "rgba(255,255,255,0.92)",
                      padding: "0.5rem 0.875rem",
                      borderRadius: "6px",
                      border: "none",
                      background: "transparent",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = scrolled ? "#F7F7F7" : "rgba(255,255,255,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right: CTA buttons */}
            <div className="hidden md:flex items-center" style={{ gap: "0.5rem" }}>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: scrolled ? "#222222" : "rgba(255,255,255,0.92)",
                  padding: "0.5rem 0.875rem",
                  borderRadius: "6px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Log in
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: scrolled ? "white" : "#222222",
                  background: scrolled ? "#222222" : "white",
                  padding: "0.5rem 1.125rem",
                  borderRadius: "24px",
                  border: "none",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                Start a Project
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden flex flex-col justify-center gap-1.5 p-2"
              style={{
                border: `1px solid ${scrolled ? "#DDDDDD" : "rgba(255,255,255,0.5)"}`,
                borderRadius: "8px",
                background: scrolled ? "white" : "rgba(255,255,255,0.1)",
                width: "40px",
                height: "40px",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} className="block w-5 h-px transition-all duration-200" style={{
                  backgroundColor: scrolled ? "#222222" : "white",
                  transform: menuOpen && i === 0 ? "rotate(45deg) translate(3px, 3px)"
                    : menuOpen && i === 2 ? "rotate(-45deg) translate(3px, -3px)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  margin: "0 auto",
                }} />
              ))}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 md:hidden overflow-y-auto"
        style={{
          backgroundColor: "white",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.25s ease, transform 0.3s ease",
        }}
      >
        <div className="container flex flex-col pt-24 pb-10 min-h-screen">
          <ul className="flex-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href} style={{ borderBottom: "1px solid #EBEBEB" }}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#222222",
                    padding: "1rem 0",
                    border: "none",
                    background: "transparent",
                    textAlign: "left",
                    width: "100%",
                    cursor: "pointer",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary mt-8"
            style={{ borderRadius: "8px", fontSize: "1rem", width: "100%" }}
          >
            Start a Project
          </button>
          <p style={{ textAlign: "center", marginTop: "1rem", color: "#717171", fontSize: "0.875rem", fontFamily: "'Inter', sans-serif" }}>
            hello@venuepop.co
          </p>
        </div>
      </div>
    </>
  );
}
