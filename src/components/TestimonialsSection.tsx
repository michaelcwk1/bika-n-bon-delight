import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      text: "Teksturnya lembut banget, gak bikin enek. Repeat order!",
      name: "Rina",
      location: "Jakarta",
    },
    {
      text: "Packaging rapi, cocok buat oleh-oleh.",
      name: "Andi",
      location: "Bekasi",
    },
    {
      text: "Anak-anak suka banget varian kejunya.",
      name: "Sari",
      location: "Depok",
    },
  ];

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-gradient-warm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-honey-light/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-sm font-medium text-brown">Testimoni</span>
          </motion.div>

          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Apa Kata <span className="text-gradient-golden">Mereka</span>?
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-golden/20">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-golden fill-golden"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-lg text-brown mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-golden">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-brown">{testimonial.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
