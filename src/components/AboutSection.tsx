import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Leaf, Gift, Heart } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Sparkles, text: "Fresh baked setiap hari" },
    { icon: Leaf, text: "Tanpa bahan pengawet" },
    { icon: Gift, text: "Cocok untuk oleh-oleh & hampers" },
    { icon: Heart, text: "Homemade premium quality" },
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 bg-cream-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Section badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-sm font-medium text-brown">Tentang Kami</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Apa itu <span className="text-gradient-golden">Bika N'Bon</span>?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bika N'Bon adalah UMKM kuliner lokal yang menghadirkan Bika Ambon premium dengan resep autentik, tekstur lembut berongga khas sarang lebah, dan rasa konsisten di setiap produksi. Kami percaya bahwa rasa terbaik datang dari bahan pilihan, proses teliti, dan komitmen terhadap kualitas.
          </motion.p>

          {/* Highlights grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-golden/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-golden" size={24} />
                </div>
                <p className="font-body text-sm md:text-base font-medium text-brown">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
