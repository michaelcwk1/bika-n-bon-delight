import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProductCatalogSection from "@/components/ProductCatalogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderFlowSection from "@/components/OrderFlowSection";
import CTABannerSection from "@/components/CTABannerSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setShowContent(true), 100);
  };

  // Skip intro if already visited in this session
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("bikanbon-visited");
    if (hasVisited) {
      setShowIntro(false);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (!showIntro) {
      sessionStorage.setItem("bikanbon-visited", "true");
    }
  }, [showIntro]);

  return (
    <>
      {/* Intro Screen */}
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <WhyChooseUsSection />
              <ProductCatalogSection />
              <TestimonialsSection />
              <OrderFlowSection />
              <CTABannerSection />
            </main>
            <Footer />
            <FloatingWhatsApp />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
