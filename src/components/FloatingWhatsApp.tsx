import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/6281234567890?text=Halo%20Bika%20N'Bon%20saya%20ingin%20pesan"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-full bg-[#25D366] text-white font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      <MessageCircle size={24} className="relative z-10" />
      <span className="hidden md:inline relative z-10">Chat Sekarang</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
