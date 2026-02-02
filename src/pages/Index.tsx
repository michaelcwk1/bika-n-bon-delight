import { useState } from "react";
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
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 50);
  };

  return (
    <>
      {/* Intro Screen - Always shows on refresh */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <Navbar />
            <main>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              >
                <HeroSection />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AboutSection />
                <WhyChooseUsSection />
                <ProductCatalogSection />
                <TestimonialsSection />
                <OrderFlowSection />
                <CTABannerSection />
              </motion.div>
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
