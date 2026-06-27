import React from 'react';
import { AureaLogo } from '../common';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-light py-3 px-4 text-xs font-serif tracking-widest text-center uppercase flex justify-center items-center gap-2 relative z-40 font-semibold rounded-b-lg">
        <span>✦</span> MODA CONSCIENTE DE SEGUNDA MANO PARA ALMAS CON ESTILO <span>✦</span>
      </div>

      {/* Header */}
      <header
        className={`transition-all duration-500 z-30 relative ${
          isScrolled
            ? 'fixed top-8 left-0 right-0 bg-light/95 backdrop-blur-md shadow-lg py-2'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          {/* Logo */}
          <div className="text-center group cursor-pointer relative transform hover:scale-[1.01] transition-transform duration-500">
            <AureaLogo />
          </div>

          {/* Navegación */}
          <nav className="mt-4 w-full max-w-md">
            <ul className="flex justify-center items-center gap-8 md:gap-12 border-t border-b border-primary/10 py-4 text-xs md:text-sm uppercase tracking-[0.15em] font-semibold text-secondary">
              <li>
                <a href="#catalogo" className="hover:text-primary transition-colors relative py-1 group font-semibold">
                  Catálogo
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-primary transition-colors relative py-1 group font-semibold">
                  Filosofía
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors relative py-1 group font-semibold">
                  Contacto
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
