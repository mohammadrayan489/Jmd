import React, { useState, useMemo } from 'react';
import { CatalogProduct } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/products';
import { Search, X, SlidersHorizontal, PackageOpen } from 'lucide-react';

interface ProductCatalogProps {
  products: CatalogProduct[];
  onBookNow: (product: CatalogProduct, quantity: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onBookNow
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
          <SlidersHorizontal size={12} />
          <span>Custom Engraved & Printed Merchandise</span>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Print Your Imagination
        </h2>
        <p className="mt-2 text-slate-600 text-base sm:text-lg">
          Personalized bottles, pens, t-shirts, caps, diaries, books, keychains, badges & mugs with custom names.
        </p>
      </div>

      {/* Controls: Search & Category Filters */}
      <div className="space-y-5 mb-10">
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            id="product-search-input"
            value={searchQuery ?? ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bottles, pens, t-shirts, caps, diaries, keychains..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              id="clear-search-btn"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                id={`category-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div
          id="product-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBookNow={onBookNow}
            />
          ))}
        </div>
      ) : (
        <div
          id="no-products-found"
          className="text-center py-16 px-4 bg-white/70 rounded-3xl border border-slate-200 max-w-lg mx-auto"
        >
          <PackageOpen size={48} className="mx-auto text-slate-300 mb-3" />
          <h3 className="font-heading font-bold text-slate-800 text-lg">No products found</h3>
          <p className="text-slate-500 text-sm mt-1">
            No matching items for &ldquo;{searchQuery || selectedCategory}&rdquo;. Try another search term.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
