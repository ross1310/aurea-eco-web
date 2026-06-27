import React, { useState } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import type { Product } from '../../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onReserve: (product: Product, notes: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onReserve
}) => {
  const [notes, setNotes] = useState('');

  if (!product) return null;

  const handleReserve = () => {
    onReserve(product, notes);
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#182E1E]/65 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFBF7] rounded-[2.5rem] overflow-hidden max-w-2xl w-full shadow-2xl border border-[#5A0C1E]/20 relative transform transition-all duration-500 scale-100 flex flex-col md:flex-row">
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FDFBF7]/85 text-[#182E1E] hover:bg-[#5A0C1E] hover:text-[#FDFBF7] transition-all"
        >
          <X size={16} />
        </button>

        {/* Imagen */}
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
          <img
            src={product.imagen}
            alt={product.titulo}
            className="w-full h-full object-cover"
          />
          {!product.disponible && (
            <div className="absolute inset-0 bg-[#5A0C1E]/30 flex items-center justify-center">
              <span className="bg-[#5A0C1E] text-[#FDFBF7] px-4 py-2 rounded-full font-serif text-xs uppercase tracking-widest">
                Agotado
              </span>
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-[#5A0C1E]">
              <Sparkles size={12} />
              <span className="text-[9px] uppercase tracking-widest font-bold">
                Reserva Exclusiva
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#182E1E]">
              {product.titulo}
            </h3>

            <p className="text-xs text-[#182E1E]/80 leading-relaxed">
              {product.descripcion}
            </p>

            <div className="pt-2">
              <span className="text-[10px] text-[#182E1E]/50 uppercase tracking-widest block">
                Precio Final de Segunda Mano
              </span>
              <span className="text-2xl font-serif font-bold text-[#5A0C1E]">
                S/. {product.precio.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Formulario */}
          {product.disponible ? (
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#182E1E]/70 font-semibold mb-1">
                  ¿Alguna duda o especificación? (Opcional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej: ¿Qué medidas tiene de hombros?"
                  className="w-full px-3 py-2 rounded-xl border border-[#5A0C1E]/15 bg-[#FDFBF7] text-xs text-[#182E1E] focus:outline-none focus:border-[#5A0C1E]"
                />
              </div>

              <button
                onClick={handleReserve}
                className="w-full bg-[#182E1E] hover:bg-[#5A0C1E] text-[#FDFBF7] py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={16} /> Preguntar por WhatsApp
              </button>

              <p className="text-[9px] text-[#182E1E]/50 text-center">
                Serás redirigido para chatear directamente con nuestro Atelier. No requerimos pago inmediato.
              </p>
            </div>
          ) : (
            <div className="space-y-3 bg-[#5A0C1E]/5 p-4 rounded-xl border border-[#5A0C1E]/10">
              <p className="text-xs text-[#5A0C1E] font-serif font-semibold">
                Este tesoro ya encontró hogar 🍂
              </p>
              <p className="text-[11px] text-[#182E1E]/70 leading-relaxed">
                Nuestras prendas son únicas e irrepetibles. Escríbenos si quieres que busquemos algo similar para ti en nuestra próxima cacería vintage.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
