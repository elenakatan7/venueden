/* ============================================================
   VENUE Mission Strip — Dark Luxury
   Pure black background, Moncler-style editorial statement
   ============================================================ */

export default function MissionStrip() {
  return (
    <section
      id="mission"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Section number */}
          <div className="lg:col-span-1 reveal">
            <span className="venue-number">01</span>
          </div>

          {/* Main statement */}
          <div className="lg:col-span-8 reveal" style={{ transitionDelay: "60ms" }}>
            <h2
              className="font-display text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.75rem)" }}
            >
              Physical retail is not dead.
              <br />
              <em className="font-display-italic" style={{ color: "oklch(0.72 0.09 44)" }}>
                Permanent retail is just expensive.
              </em>
            </h2>
          </div>

          {/* Right column */}
          <div className="lg:col-span-3 lg:col-start-10 flex items-end reveal" style={{ transitionDelay: "120ms" }}>
            <p
              className="font-ui text-sm leading-relaxed"
              style={{ color: "oklch(0.45 0 0)", fontWeight: 300 }}
            >
              VENUE gives brands the physical presence they need — without the 10-year lease, the build-out headaches, or the operational overhead.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div
          className="mt-16 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 reveal"
          style={{
            borderTop: "1px solid oklch(0.14 0 0)",
            transitionDelay: "160ms",
          }}
        >
          {[
            {
              label: "For Emerging Brands",
              text: "Test physical retail without the capital commitment. Learn what your customers want before you sign a lease.",
            },
            {
              label: "For Established Brands",
              text: "Launch in new markets, test new concepts, and create cultural moments that a permanent store can't replicate.",
            },
            {
              label: "For Every Brand",
              text: "The pop-up is the most powerful tool in modern retail. VENUE makes sure you use it right.",
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="venue-label mb-3" style={{ color: "oklch(0.35 0 0)" }}>{item.label}</div>
              <p
                className="font-ui text-sm leading-relaxed"
                style={{ color: "oklch(0.42 0 0)", fontWeight: 300 }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
