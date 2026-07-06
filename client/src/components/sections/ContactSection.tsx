/* ============================================================
   VENUE Contact Section — Airbnb clean inquiry form
   ============================================================ */

import { useState } from "react";
import { toast } from "sonner";

const BRAND_CATEGORIES = [
  "Fashion & Apparel","Beauty & Skincare","Wellness & Lifestyle",
  "Food & Beverage","Art & Culture","Consumer Goods",
  "Hospitality & Travel","Technology","Other",
];
const BUDGETS = [
  "Under $25,000","$25,000 – $75,000","$75,000 – $150,000",
  "$150,000 – $300,000","$300,000+","Not sure yet",
];
const TIMELINES = [
  "Less than 4 weeks","4–8 weeks","2–4 months",
  "4–6 months","6+ months","Flexible",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", brand: "", email: "", category: "",
    budget: "", timeline: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brand) {
      toast.error("Please fill in your name, brand, and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Your inquiry has been received. We'll be in touch within 24 hours.");
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.8125rem",
    fontWeight: 600,
    color: "#222222",
    display: "block",
    marginBottom: "0.375rem",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#F7F7F7", padding: "5rem 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
            fontWeight: 600, color: "#FF385C", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            08 — Start a Project
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem", alignItems: "start",
        }}>
          {/* Left: Copy */}
          <div>
            <h2 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.03em",
              color: "#222222", lineHeight: 1.15, marginBottom: "1rem",
            }}>
              Let's build something real.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: "1rem",
              color: "#717171", lineHeight: 1.65, marginBottom: "2rem",
            }}>
              Tell us about your brand and your vision. We'll respond within 24 hours
              with initial thoughts and next steps.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              {[
                { label: "Email", value: "hello@venuepop.co", href: "mailto:hello@venuepop.co" },
                { label: "New Business", value: "projects@venuepop.co", href: "mailto:projects@venuepop.co" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "#717171", marginBottom: "0.25rem" }}>
                    {item.label}
                  </div>
                  <a href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#222222", fontWeight: 500, textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF385C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#222222")}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "#717171", marginBottom: "0.25rem" }}>
                  Headquarters
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#717171" }}>
                  New York, NY · Operating Nationwide
                </p>
              </div>
            </div>

            {/* Trust callout */}
            <div style={{
              background: "white", borderRadius: "16px", padding: "1.5rem",
              border: "1.5px solid #EBEBEB",
            }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>💬</div>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem",
                color: "#222222", lineHeight: 1.6, fontStyle: "italic",
              }}>
                "Every project begins with a conversation. No pitch decks, no pressure —
                just an honest discussion about what you're building and how we can help."
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem",
                color: "#717171", marginTop: "0.75rem", fontWeight: 600,
              }}>
                — VENUE Founding Team
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: "white", borderRadius: "20px", padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "linear-gradient(to bottom right, #FF385C, #E31C5F)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}>
                  <svg width="24" height="20" viewBox="0 0 20 16" fill="none">
                    <path d="M1 8L7 14L19 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 800,
                  fontSize: "1.5rem", color: "#222222", marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}>
                  Inquiry received!
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#717171", lineHeight: 1.6 }}>
                  Thanks, {form.name}. We've received your inquiry for <strong style={{ color: "#222222" }}>{form.brand}</strong> and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="First Last" className="venue-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Brand Name *</label>
                    <input type="text" name="brand" value={form.brand} onChange={handleChange}
                      placeholder="Your Brand" className="venue-input" />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@yourbrand.com" className="venue-input" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Brand Category</label>
                    <select name="category" value={form.category} onChange={handleChange} className="venue-select">
                      <option value="">Select category</option>
                      {BRAND_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Estimated Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className="venue-select">
                      <option value="">Select budget</option>
                      {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Desired Timeline</label>
                  <select name="timeline" value={form.timeline} onChange={handleChange} className="venue-select">
                    <option value="">Select timeline</option>
                    {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Tell us about your project</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Describe your brand, goals, and any specific requirements..."
                    rows={4} className="venue-textarea" />
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.25rem" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#717171" }}>
                    Response within 24 hours
                  </p>
                  <button type="submit" className="btn-primary">
                    Send Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
