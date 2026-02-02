import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bikaHero from "@/assets/bika-ambon-hero.png";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [phase, setPhase] = useState<"idle" | "lifting" | "splitting" | "done">("idle");

  const handleOpen = useCallback(() => {
    if (phase !== "idle") return;
    
    // Phase 1: Bika spins and lifts
    setPhase("lifting");
    
    // Phase 2: Screen splits after bika reaches top
    setTimeout(() => {
      setPhase("splitting");
    }, 400);

    // Phase 3: Complete and show content
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1000);
  }, [phase, onComplete]);

  const handleSkip = useCallback(() => {
    setPhase("done");
    onComplete();
  }, [onComplete]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase === "idle" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleOpen();
      }
      if (e.key === "Escape") {
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, handleOpen, handleSkip]);

  // Block scroll when intro is active
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Top Panel */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 will-change-transform"
        style={{
          background: "linear-gradient(180deg, hsl(32 35% 82%) 0%, hsl(35 30% 76%) 100%)",
        }}
        animate={{
          y: phase === "splitting" ? "-100%" : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.32, 0.72, 0, 1],
        }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Decorative fold line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brown/20 to-transparent" />
      </motion.div>

      {/* Bottom Panel */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 will-change-transform"
        style={{
          background: "linear-gradient(0deg, hsl(32 35% 82%) 0%, hsl(35 30% 76%) 100%)",
        }}
        animate={{
          y: phase === "splitting" ? "100%" : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.32, 0.72, 0, 1],
        }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Decorative fold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brown/20 to-transparent" />
      </motion.div>

      {/* Center Content Layer */}
      <AnimatePresence>
        {phase !== "splitting" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Brand name */}
            <motion.h1 
              className="font-heading text-2xl md:text-3xl font-bold text-brown tracking-wide mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Bika N'Bon
            </motion.h1>

            {/* Bika Ambon image - clickable */}
            <motion.button
              onClick={handleOpen}
              className="relative group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-golden/50 rounded-full"
              aria-label="Tap to open and enter website"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: phase === "lifting" ? "-30vh" : 0,
                rotate: phase === "lifting" ? 360 : 0,
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.3 },
                scale: { duration: 0.5, delay: 0.3 },
                y: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                rotate: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
              }}
              whileHover={{ scale: phase === "idle" ? 1.05 : 1 }}
              whileTap={{ scale: phase === "idle" ? 0.95 : 1 }}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-golden/20 blur-3xl scale-150 group-hover:bg-golden/40 transition-all duration-500" />
              
              {/* Subtle shadow */}
              <div className="absolute inset-4 rounded-full bg-brown/20 blur-2xl translate-y-4" />
              
              {/* Pulsing ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-golden/40"
                animate={{ 
                  scale: [1, 1.15, 1], 
                  opacity: [0.4, 0, 0.4] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main image container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cream-light/80 shadow-elevated">
                <img
                  src={bikaHero}
                  alt="Bika Ambon"
                  className="w-full h-full object-cover"
                />
                
                {/* Inner highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Bounce indicator */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                👆
              </motion.div>
            </motion.button>

            {/* Instruction text */}
            <motion.p
              className="font-body text-brown/80 text-center text-base md:text-lg mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: phase === "idle" ? 1 : 0,
                y: phase === "idle" ? 0 : -20
              }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Tap the Bika to Open
            </motion.p>

            {/* Keyboard hint */}
            <motion.p
              className="font-body text-brown/50 text-center text-xs mt-2 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "idle" ? 1 : 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              or press Enter / Space
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip button */}
      <motion.button
        onClick={handleSkip}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-6 py-2 rounded-full bg-brown/10 hover:bg-brown/20 border border-brown/20 font-body text-sm text-brown/70 hover:text-brown transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-golden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: phase === "idle" ? 1 : 0,
          y: phase === "idle" ? 0 : 20
        }}
        transition={{ delay: 0.8, duration: 0.4 }}
        aria-label="Skip intro and go to main page"
      >
        Skip Intro
      </motion.button>

      {/* Decorative corner patterns */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-brown/10 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-brown/10 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-brown/10 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-brown/10 rounded-br-lg pointer-events-none" />
    </div>
  );
};

export default IntroScreen;
