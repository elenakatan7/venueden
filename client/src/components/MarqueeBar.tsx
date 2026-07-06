/* ============================================================
   VENUE Marquee Bar — Airbnb / Peerspace style
   Light gray background, clean chips
   ============================================================ */

import { useEffect, useRef } from "react";

const ITEMS = [
  "Space Sourcing",
  "Concept Design",
  "Build-Out & Production",
  "Vendor Coordination",
  "Staffing & Operations",
  "Brand Activations",
  "Pop-Up Retail",
  "Experiential Marketing",
  "Short-Term Storefronts",
  "Full-Service Production",
];

export default function MarqueeBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let animId: number;
    const animate = () => {
      pos -= 0.35;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const allItems = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden py-3"
      style={{ backgroundColor: "#F7F7F7", borderBottom: "1px solid #EBEBEB", borderTop: "1px solid #EBEBEB" }}
    >
      <div ref={trackRef} className="flex items-center whitespace-nowrap will-change-transform">
        {allItems.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#717171",
                padding: "0 1.25rem",
              }}
            >
              {item}
            </span>
            <span style={{ color: "#DDDDDD", fontSize: "0.5rem" }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
