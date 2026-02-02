import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      emoji: "🍯",
      title: "Tekstur Sarang Lebah Sempurna",
      description: "Lembut, moist, tidak bantat",
    },
    {
      emoji: "🔥",
      title: "Fresh Setiap Hari",
      description: "Diproduksi harian, bukan stok lama",
    },
    {
      emoji: "🎁",
      title: "Cocok untuk Oleh-Oleh",
      description: "Packaging rapi dan premium",
    },
    {
      emoji: "❤️",
      title: "Rasa Konsisten",
      description: "Banyak pelanggan repeat order",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-warm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-honey-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-sm font-medium text-brown">Keunggulan</span>
          </motion.div>

          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kenapa Pilih <span className="text-gradient-golden">Bika N'Bon</span>?
          </motion.h2>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Emoji */}
              <motion.div
                className="text-5xl mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {reason.emoji}
              </motion.div>

              {/* Title */}
              <h3 className="font-heading text-lg md:text-xl font-bold text-brown mb-3 group-hover:text-golden transition-colors duration-200">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="font-body text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
