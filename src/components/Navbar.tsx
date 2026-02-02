import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#tentang", label: "Tentang" },
    { href: "#menu", label: "Menu" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#cara-pesan", label: "Cara Pesan" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-cream-light/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading text-xl md:text-2xl font-bold text-brown">
          Bika N'Bon
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-brown/80 hover:text-golden transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Bika%20N'Bon%20saya%20ingin%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-5 py-2.5 rounded-full font-body font-semibold text-sm text-primary-foreground hover:scale-105 transition-transform duration-200"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-brown"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-cream-light/95 backdrop-blur-md border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-brown/80 hover:text-golden transition-colors duration-200 text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Bika%20N'Bon%20saya%20ingin%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-5 py-3 rounded-full font-body font-semibold text-base text-primary-foreground text-center"
            >
              Pesan Sekarang
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
