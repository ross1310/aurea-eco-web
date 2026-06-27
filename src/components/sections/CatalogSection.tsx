import React from 'react';
import { Sparkles } from 'lucide-react';
import type { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface CatalogSectionProps {
  products: Product[];
  favoriteIds: number[];
  onToggleFavorite: (id: number, event: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  favoriteIds,
  onToggleFavorite,
  onSelectProduct
}) => {
  if (products.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-20 bg-[#182E1E]/5 rounded-3xl border border-dashed border-[#5A0C1E]/20">
          <Sparkles
            className="mx-auto text-[#5A0C1E]/40 mb-4 animate-spin"
            size={36}
            style={{ animationDuration: '4s' }}
          />
          <h3 className="text-xl font-serif font-medium text-[#5A0C1E]">No hemos hallado esa prenda</h3>
          <p className="text-sm text-[#182E1E]/70 mt-2 max-w-md mx-auto">
            Las prendas en Áurea Eco vuelan como estrellas fugaces. Prueba limpiando los filtros para ver otras bellezas retro disponibles.
          </p>
          <button
            onClick={() => window.location.href = '#catalogo'}
            className="mt-6 bg-[#182E1E] hover:bg-[#5A0C1E] text-[#FDFBF7] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          >
            Reestablecer Filtros
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favoriteIds.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
};
