import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProductCard from "./ProductCard";

import productOriginal from "@/assets/product-original.jpg";
import productCheese from "@/assets/product-cheese.jpg";
import productChocolate from "@/assets/product-chocolate.jpg";
import productPandan from "@/assets/product-pandan.jpg";

const ProductCatalogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      image: productOriginal,
      name: "Original Bika Ambon",
      description: "Rasa klasik autentik yang lembut dan harum.",
      price: "Rp 35.000",
    },
    {
      image: productCheese,
      name: "Bika Ambon Keju",
      description: "Perpaduan gurih keju dan tekstur empuk.",
      price: "Rp 40.000",
    },
    {
      image: productChocolate,
      name: "Bika Ambon Coklat",
      description: "Manis coklat kaya rasa untuk pecinta dessert.",
      price: "Rp 40.000",
    },
    {
      image: productPandan,
      name: "Bika Ambon Pandan",
      description: "Aroma pandan alami yang segar dan wangi.",
      price: "Rp 38.000",
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-28 bg-cream-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-sm font-medium text-brown">Menu Kami</span>
          </motion.div>

          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Menu <span className="text-gradient-golden">Favorit Kami</span>
          </motion.h2>

          <motion.p
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pilih varian favorit Anda dan nikmati kelezatan Bika Ambon premium
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
