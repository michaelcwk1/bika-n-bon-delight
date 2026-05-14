import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import bikaHero from "@/assets/bika-ambon-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-warm">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-golden/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-honey-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            {/* <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="font-body text-sm font-medium text-brown">Premium Homemade</span>
            </motion.div> */}

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brown leading-tight mb-6">
              Bika N'Bon — 
              <span className="text-gradient-golden"> Lembut, Berongga, Bikin Nagih</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Bika Ambon homemade dengan tekstur sarang lebah sempurna, aroma harum, dan rasa autentik yang bikin repeat order.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/6281234567890?text=Halo%20Bika%20N'Bon%20saya%20ingin%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-body font-semibold text-lg text-primary-foreground hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                Pesan via WhatsApp
              </motion.a>

              <motion.a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-lg text-brown bg-cream-light border-2 border-brown/20 hover:border-golden hover:text-golden transition-all duration-200"
                whileHover={{ scale: 1.02 }}
              >
                Lihat Menu
              </motion.a>
            </div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: "🔥", text: "Fresh Setiap Hari" },
                { icon: "⭐", text: "500+ Happy Customers" },
                { icon: "🎁", text: "Packaging Premium" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-80 md:w-[500px] md:h-96 bg-golden/20 rounded-full blur-3xl animate-pulse-soft" />
            </div>

            {/* Main image */}
            <div className="relative">
              <motion.img
                src={bikaHero}
                alt="Bika Ambon Premium"
                className="w-96 h-72 md:w-[500px] md:h-96 object-cover rounded-full  "
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating badge */}
              <motion.div
                className="absolute right-11 top-10 bg-cream-light rounded-2xl px-4 py-3 shadow-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="font-heading font-bold text-golden text-lg">100%</p>
                <p className="font-body text-xs text-muted-foreground">Homemade</p>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                className="absolute left-16 bottom-16 bg-cream-light rounded-2xl px-4 py-3 shadow-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <p className="font-heading font-bold text-brown text-lg">⭐ 4.9</p>
                <p className="font-body text-xs text-muted-foreground">Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="text-brown/40" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;