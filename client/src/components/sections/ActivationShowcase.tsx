/* ============================================================
   VENUE Activation Showcase
   Full-bleed image with overlay text — editorial break section
   ============================================================ */

const STOREFRONT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663793204270/LQXSCBTUQQS3eNgJ3twkPA/venue-dark-storefront-23EPNY5iUEP2X4d4BvJYTk.webp";

export default function ActivationShowcase() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: "480px" }}>
      {/* Background image */}
      <div className="absolute inset-0 img-hover">
        <img
          src={STOREFRONT_IMAGE}
          alt="Premium pop-up storefront"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.75) 100%)",
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container h-full flex flex-col justify-end pb-12 md:pb-16">
        <div className="reveal max-w-2xl">
          <p
            className="venue-label mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            The VENUE Standard
          </p>
          <p
            className="font-display text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Every space we produce is designed to feel like it was always meant to be there.{" "}
            <em className="font-display-italic"             style={{ color: "oklch(0.72 0.09 44)" }}>
              Intentional. Immersive. Unforgettable.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
