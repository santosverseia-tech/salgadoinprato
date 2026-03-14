import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import BenefitsSection from "@/components/BenefitsSection";
import VideoSection from "@/components/VideoSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  useEffect(() => {
    // Meta Pixel ViewContent
    if ((window as any).fbq) (window as any).fbq("track", "ViewContent");

    // Scroll tracking for GA4
    let tracked50 = false;
    let tracked90 = false;
    const handleScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (!tracked50 && pct >= 50) {
        tracked50 = true;
        if ((window as any).gtag) (window as any).gtag("event", "scroll_50");
      }
      if (!tracked90 && pct >= 90) {
        tracked90 = true;
        if ((window as any).gtag) (window as any).gtag("event", "scroll_90");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <MenuSection />
      <VideoSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
