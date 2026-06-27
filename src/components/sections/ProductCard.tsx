import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number, event: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onSelectProduct
}) => {
  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="reveal bg-light rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-primary/5 hover:border-primary/30 group cursor-pointer flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-300"
    >
      {/* Imagen */}
      <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10 bg-light/95 backdrop-blur-sm text-secondary px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold border border-primary/20 shadow-md">
          🌿 100% Sostenible
        </div>

        {/* Botón Favorito */}
        <button
          onClick={(e) => onToggleFavorite(product.id, e)}
          className="absolute top-4 right-4 z-10 p-3 rounded-full bg-light/95 backdrop-blur-sm text-primary hover:bg-primary hover:text-light hover:scale-110 transition-all shadow-md"
        >
          <Heart
            size={18}
            fill={isFavorite ? 'currentColor' : 'none'}
            className="transition-all"
          />
        </button>

        {/* Imagen */}
        <img
          src={product.imagen}
          alt={product.titulo}
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out ${
            !product.disponible ? 'opacity-60 grayscale' : ''
          }`}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80';
          }}
        />

        {/* Overlay Agotado */}
        {!product.disponible && (
          <div className="absolute inset-0 bg-secondary/30 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-primary text-light py-3 px-6 rounded-full font-serif text-sm uppercase tracking-widest font-bold shadow-lg border border-light/30 transform -rotate-6 animate-pulse">
              ✦ AGOTADO / VENDIDO ✦
            </div>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-3">
            <h3 className="font-serif text-lg md:text-xl font-semibold text-secondary group-hover:text-primary transition-colors leading-snug">
              {product.titulo}
            </h3>
            <span className="bg-secondary/8 text-xs text-secondary/70 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold shrink-0">
              {product.categoria}
            </span>
          </div>

          <p className="text-xs md:text-sm text-secondary/65 line-clamp-2 leading-relaxed">
            {product.descripcion}
          </p>
        </div>

        <div className="pt-4 border-t border-primary/8 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-secondary/40 block font-semibold">
              Precio único
            </span>
            <span
              className={`text-2xl font-serif font-bold ${
                product.disponible ? 'text-primary' : 'text-secondary/40 line-through'
              }`}
            >
              S/. {product.precio.toFixed(2)}
            </span>
          </div>

          {product.disponible ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              className="bg-secondary hover:bg-primary text-light px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-md hover:shadow-lg"
            >
              <MessageCircle size={14} /> Reservar
            </button>
          ) : (
            <button
              disabled
              className="bg-secondary/10 text-secondary/30 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider cursor-not-allowed"
            >
              En otra vida
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
