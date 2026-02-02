import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-cream-light mb-3">
              Bika N'Bon
            </h3>
            <p className="font-body text-cream-light/60 mb-4">
              Lembut, Berongga, Bikin Nagih
            </p>
            <p className="font-body text-sm text-cream-light/50 leading-relaxed">
              UMKM kuliner lokal yang menghadirkan Bika Ambon premium dengan resep autentik.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream-light mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-cream-light/70 hover:text-golden transition-colors duration-200"
              >
                <MessageCircle size={18} />
                WhatsApp: 0812-3456-7890
              </a>
              <a
                href="https://instagram.com/bikanbon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-cream-light/70 hover:text-golden transition-colors duration-200"
              >
                <Instagram size={18} />
                @bikanbon
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream-light mb-4">
              Informasi
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 font-body text-cream-light/70">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 font-body text-cream-light/70">
                <Clock size={18} />
                <span>Senin - Sabtu, 08:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream-light/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-cream-light/50">
              © 2025 Bika N'Bon. All rights reserved.
            </p>
            <p className="font-body text-sm text-cream-light/50">
              Made with 🍯 in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
