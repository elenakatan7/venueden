/* ============================================================
   VENUE Trust Strip
   Warm parchment, editorial trust signals
   ============================================================ */

const TRUST_ITEMS = [
  { label: "Average Activation Timeline", value: "6 Weeks" },
  { label: "Cities with Active Partnerships", value: "40+" },
  { label: "Brands Served", value: "150+" },
  { label: "Average Client Rating", value: "4.9 / 5" },
  { label: "On-Time Opens", value: "98%" },
];

export default function TrustStrip() {
  return (
    <section
      className="py-12"
      style={{
        backgroundColor: "#F5F0E8",
        borderTop: "1px solid oklch(0.14 0 0)",
        borderBottom: "1px solid oklch(0.14 0 0)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 stagger-children">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center py-2 ${
                i < TRUST_ITEMS.length - 1 ? "md:border-r" : ""
              }`}
              style={{ borderColor: "oklch(0.14 0 0)" }}
            >
              <div
                className="font-display text-3xl mb-1"
                style={{ color: "oklch(0.72 0.09 44)" }}
              >
                {item.value}
              </div>
              <div className="venue-label text-center" style={{ maxWidth: "120px", color: "oklch(0.32 0 0)" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
