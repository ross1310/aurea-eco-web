import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
      <div className="relative rounded-3xl overflow-hidden bg-secondary text-light p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border-2 border-primary/20">
        {/* Overlay Orgánico */}
        <div className="absolute inset-0 bg-[radial-gradient(#5a0c1e15_2px,transparent_2px)] [background-size:30px_30px] pointer-events-none"></div>

        <div className="max-w-2xl space-y-6 md:space-y-8 relative z-10">
          <div className="inline-flex items-center gap-3 bg-light/15 text-light px-4 py-2 rounded-full text-xs tracking-wider uppercase border border-light/20">
            <Sparkles size={14} className="text-primary" />
            <span className="font-semibold">Edición Única & Celestial</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Prendas con alma que reducen tu huella
          </h2>

          <p className="text-light/85 text-base md:text-lg leading-relaxed">
            Cada pieza en Áurea Eco ha sido seleccionada de forma meticulosa para darte un estilo único y nostálgico sin comprometer el bienestar del planeta. Creemos en un clóset cósmico y circular.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="bg-light text-secondary hover:bg-primary hover:text-light px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-sans"
            >
              Explorar Catálogo <ArrowRight size={16} />
            </a>
            <a
              href="#filosofia"
              className="border-2 border-light/40 hover:border-light hover:bg-light/10 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 font-sans"
            >
              Nuestra Esencia
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative w-full md:w-1/3 flex justify-center">
          <div className="relative p-4 bg-light rounded-[2.5rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-xs">
            <img
              src="https://i.pinimg.com/736x/c8/26/3c/c8263c85b2d220517e86a9f19c0127b4.jpg"
              alt="Moda Sostenible"
              className="rounded-[2rem] object-cover h-96 w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary text-light p-4 rounded-full shadow-xl border-4 border-secondary">
              <Sparkles size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
