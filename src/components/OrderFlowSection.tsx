import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ShoppingBag, MapPin, Truck } from "lucide-react";

const OrderFlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Klik tombol WhatsApp",
      description: "Hubungi kami langsung via WhatsApp",
    },
    {
      icon: ShoppingBag,
      number: "02",
      title: "Pilih varian & jumlah",
      description: "Tentukan varian dan jumlah pesanan",
    },
    {
      icon: MapPin,
      number: "03",
      title: "Konfirmasi alamat",
      description: "Berikan alamat pengiriman lengkap",
    },
    {
      icon: Truck,
      number: "04",
      title: "Produk dikirim fresh",
      description: "Pesanan sampai dalam kondisi fresh",
    },
  ];

  return (
    <section id="cara-pesan" className="py-20 md:py-28 bg-cream-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-sm font-medium text-brown">Mudah & Cepat</span>
          </motion.div>

          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cara <span className="text-gradient-golden">Pesan</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-golden/20" />
              )}

              {/* Step card */}
              <div className="relative bg-card rounded-3xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group">
                {/* Number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden text-primary-foreground font-heading font-bold text-sm px-3 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-golden/10 flex items-center justify-center mx-auto mb-4 mt-2 group-hover:bg-golden/20 transition-colors duration-200">
                  <step.icon className="text-golden" size={28} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-brown mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderFlowSection;
