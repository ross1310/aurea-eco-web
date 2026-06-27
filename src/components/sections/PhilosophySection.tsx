import React from 'react';
import { Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofia" className="bg-[#182E1E] text-[#FDFBF7] py-16 md:py-24 relative overflow-hidden reveal opacity-0 translate-y-10 transition-all duration-1000 rounded-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(#5a0c1e15_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-8">
        <div className="text-[#5A0C1E] animate-bounce flex justify-center">
          <Sparkles size={36} />
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-wide">
          Moda Circular, Estilo Infinito
        </h2>

        <p className="text-lg md:text-xl font-serif italic text-[#FDFBF7]/80 max-w-3xl mx-auto leading-relaxed">
          "Creemos que cada prenda merece una segunda oportunidad para seguir contando historias. La moda más sostenible es la que ya existe."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="p-6 bg-[#FDFBF7]/5 rounded-2xl border border-[#FDFBF7]/10 space-y-3">
            <span className="text-3xl">👗</span>
            <h4 className="font-serif font-bold text-lg text-[#FDFBF7]">Selección Curada</h4>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed">
              No compramos en masa. Filtramos y restauramos cuidadosamente cada tesoro vintage para asegurar piezas impecables y de alta calidad.
            </p>
          </div>

          <div className="p-6 bg-[#FDFBF7]/5 rounded-2xl border border-[#FDFBF7]/10 space-y-3">
            <span className="text-3xl">🌱</span>
            <h4 className="font-serif font-bold text-lg text-[#FDFBF7]">Cero Residuo</h4>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed">
              Al comprar ropa de segunda mano de calidad, previenes el desperdicio textil y ahorras miles de litros de agua al planeta.
            </p>
          </div>

          <div className="p-6 bg-[#FDFBF7]/5 rounded-2xl border border-[#FDFBF7]/10 space-y-3">
            <span className="text-3xl">✨</span>
            <h4 className="font-serif font-bold text-lg text-[#FDFBF7]">Expresión Única</h4>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed">
              Huye del fast fashion y de la uniformidad. Nuestras prendas poseen una estética única que no verás repetida en nadie más.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
