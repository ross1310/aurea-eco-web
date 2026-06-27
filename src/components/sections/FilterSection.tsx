import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { FilterType } from '../../types';

interface FiltersProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  activeCategory: any;
  onCategoryChange: (category: any) => void;
  filterAvailability: FilterType;
  onAvailabilityChange: (filter: FilterType) => void;
  productCount: number;
  totalCount: number;
}

export const FilterSection: React.FC<FiltersProps> = ({
  searchValue,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  filterAvailability,
  onAvailabilityChange,
  productCount,
  totalCount
}) => {
  const categories = ['Todos', 'Outfits'];

  return (
    <section id="catalogo" className="max-w-7xl mx-auto px-4 pt-12 pb-6">
      <div className="border-b border-[#5A0C1E]/10 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Título */}
          <div>
            <div className="flex items-center gap-2 text-[#5A0C1E]">
              <span className="text-xl">✦</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Tesoros Encontrados</span>
              <span className="text-xl">✦</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#182E1E] mt-1">
              Catálogo Exclusivo
            </h2>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar prenda ideal..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#5A0C1E]/10 bg-[#FDFBF7] focus:outline-none focus:border-[#5A0C1E] focus:ring-1 focus:ring-[#5A0C1E] text-sm text-[#182E1E] transition-all"
            />
            <Search className="absolute left-3.5 top-3 text-[#182E1E]/40" size={16} />
            {searchValue && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3.5 top-3 text-[#182E1E]/60 hover:text-[#5A0C1E]"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#5A0C1E] text-[#FDFBF7] shadow-md'
                    : 'bg-[#182E1E]/5 hover:bg-[#182E1E]/10 text-[#182E1E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 bg-[#182E1E]/5 px-3 py-1.5 rounded-full text-xs">
            <SlidersHorizontal size={14} className="text-[#182E1E]/60" />
            <span className="text-[#182E1E]/60 font-medium">Filtro:</span>
            <select
              value={filterAvailability}
              onChange={(e) => onAvailabilityChange(e.target.value as FilterType)}
              className="bg-transparent font-semibold focus:outline-none text-[#182E1E] cursor-pointer"
            >
              <option value="todos">Todos los tesoros</option>
              <option value="disponibles">Disponibles</option>
              <option value="agotados">Agotados (Vendido)</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 text-xs text-[#182E1E]/60 font-serif italic">
          Mostrando {productCount} de {totalCount} prendas únicas.
        </div>
      </div>
    </section>
  );
};
