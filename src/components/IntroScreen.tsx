import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bikaHero from "@/assets/bika-ambon-hero.png";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-envelope"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Top envelope flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-envelope"
            style={{
              background: "linear-gradient(180deg, hsl(30 30% 82%) 0%, hsl(35 25% 75%) 100%)",
              borderBottom: "2px dashed hsl(24 51% 33% / 0.2)",
            }}
            animate={isOpening ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          />

          {/* Bottom envelope flap */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-envelope"
            style={{
              background: "linear-gradient(0deg, hsl(30 30% 82%) 0%, hsl(35 25% 75%) 100%)",
              borderTop: "2px dashed hsl(24 51% 33% / 0.2)",
            }}
            animate={isOpening ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          />

          {/* Center content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Decorative seal */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-golden/20 blur-2xl" />
            
            {/* Brand name */}
            <motion.h1 
              className="font-heading text-2xl md:text-3xl font-bold text-brown tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Bika N'Bon
            </motion.h1>

            {/* Bika Ambon image - clickable */}
            <motion.button
              onClick={handleOpen}
              className="relative group cursor-pointer focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-golden/30 blur-3xl scale-150 group-hover:bg-golden/50 transition-colors duration-500" />
              
              {/* Circular frame */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cream-light shadow-elevated">
                <img
                  src={bikaHero}
                  alt="Bika Ambon"
                  className="w-full h-full object-cover animate-float"
                />
              </div>

              {/* Tap indicator ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-golden/50"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* Instruction text */}
            <motion.p
              className="font-body text-brown/80 text-center text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="animate-bounce-gentle inline-block">👆</span>
              <br />
              Tap Bika Ambon untuk Membuka
            </motion.p>
          </motion.div>

          {/* Decorative pattern overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237A4A2E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroScreen;
