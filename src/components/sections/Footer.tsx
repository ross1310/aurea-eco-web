import React from 'react';
import { Share2, Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants/config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#182E1E] text-[#FDFBF7]/90 pt-16 pb-8 border-t border-[#5A0C1E]/20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-12 border-b border-[#FDFBF7]/10">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-wider text-[#FDFBF7]">Áurea Eco</h3>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed">
              Estilo vintage celestial y curaduría consciente de segunda mano. Un proyecto romántico nacido para darle al planeta un respiro de belleza circular.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#FDFBF7]">
              Enlaces Celestiales
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogo" className="hover:text-[#5A0C1E] transition-colors">
                  Ver Todas las Prendas
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-[#5A0C1E] transition-colors">
                  Nuestros Valores Eco
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#5A0C1E] transition-colors">
                  Solicitar Colaboración
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#5A0C1E] transition-colors">
                  Ubicación del Atelier
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#FDFBF7]">
              Síguenos en el Cosmos
            </h4>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FDFBF7]/10 rounded-full hover:bg-[#5A0C1E] hover:text-[#FDFBF7] transition-all"
              >
                <Share2 size={18} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-2 bg-[#FDFBF7]/10 rounded-full hover:bg-[#5A0C1E] hover:text-[#FDFBF7] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
            <div className="space-y-1 text-xs text-[#FDFBF7]/60">
              <p className="flex items-center gap-1.5">
                <MapPin size={12} /> {SOCIAL_LINKS.address}
              </p>
              <p className="flex items-center gap-1.5">
                <Mail size={12} /> {SOCIAL_LINKS.email}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#FDFBF7]/40 uppercase tracking-widest text-center">
          <p>© {new Date().getFullYear()} Áurea Eco. Hecho con amor cósmico y ética sostenible.</p>
        </div>
      </div>
    </footer>
  );
};
