import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  index: number;
}

const ProductCard = ({ image, name, description, price, index }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(`Halo Bika N'Bon, saya ingin pesan ${name}`);
  const whatsappLink = `https://wa.me/6281234567890?text=${whatsappMessage}`;

  return (
    <motion.div
      className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-golden/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="font-heading font-bold text-sm text-primary-foreground">{price}</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-6 py-3 rounded-full font-body font-semibold text-sm text-primary-foreground flex items-center gap-2"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={18} />
            Pesan Sekarang
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-brown mb-2 group-hover:text-golden transition-colors duration-200">
          {name}
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-4">
          {description}
        </p>

        {/* CTA button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body font-semibold text-sm text-golden hover:text-brown transition-colors duration-200"
        >
          <MessageCircle size={16} />
          Pesan via WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
