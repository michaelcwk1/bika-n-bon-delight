import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTABannerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-brown relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Honeycomb pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23F5B301' stroke-width='1'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23F5B301' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream-light mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Siap Nikmati Bika Ambon{" "}
            <span className="text-golden">Terlezat</span> Hari Ini?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-body text-lg md:text-xl text-cream-light/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Klik tombol di bawah dan pesan langsung via WhatsApp — fast response, fresh product!
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/6281234567890?text=Halo%20Bika%20N'Bon%20saya%20ingin%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-body font-bold text-lg bg-golden text-brown-dark hover:bg-honey transition-all duration-200 shadow-golden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={24} />
            Pesan Sekarang via WhatsApp
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              "✓ Fast Response",
              "✓ Fresh Product",
              "✓ Pengiriman Aman",
            ].map((badge, index) => (
              <span
                key={index}
                className="font-body text-sm text-cream-light/70"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
