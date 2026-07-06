/* ============================================================
   VENUE — Full-Screen Scrollable Video Experience
   White/cream palette, Playfair Display + Jost typography
   Snap scrolling between full-viewport cinematic panels
   ============================================================ */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoHeroSection from "@/components/sections/VideoHeroSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import MarqueeBar from "@/components/MarqueeBar";
import PreFooterCTA from "@/components/sections/PreFooterCTA";

export default function Home() {
  return (
    <div
      className="relative"
      style={{ backgroundColor: "#FDFAF6" }}
    >
      <Navigation />

      {/* Full-screen video hero */}
      <VideoHeroSection />

      {/* Marquee ticker */}
      <MarqueeBar />

      {/* Manifesto — full-screen cream panel */}
      <ManifestoSection />

      {/* About — full-screen image panel */}
      <AboutSection />

      {/* Services — full-screen image panel */}
      <ServicesSection />

      {/* How It Works — cream panel */}
      <HowItWorksSection />

      {/* Industries — cream/ivory panel */}
      <IndustriesSection />

      {/* Work / Case Studies */}
      <WorkSection />

      {/* Pre-footer CTA — full-screen image panel */}
      <PreFooterCTA />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
