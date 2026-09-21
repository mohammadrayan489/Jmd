import React, { useState } from 'react';
import { CatalogProduct } from '../types';
import { QuantitySelector } from './QuantitySelector';
import { Tag, MessageCircle, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: CatalogProduct;
  onBookNow: (product: CatalogProduct, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onBookNow
}) => {
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);

  const handleBookNow = () => {
    onBookNow(product, quantity);
  };

  const fallbackImage =
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop";

  return (
    <div
      id={`product-card-${product.id}`}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-200/90 bg-white/90 shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={imageError ? fallbackImage : product.image}
          alt={product.name}
          onError={() => setImageError(true)}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-700 shadow-sm border border-white/60">
            <Tag size={11} className="text-emerald-600" />
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Pricing
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              Price on Request
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between gap-2 mb-3.5 bg-slate-50/80 p-2 rounded-xl border border-slate-200/60">
            <span className="text-xs font-semibold text-slate-600 pl-1">
              Select Quantity:
            </span>
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
              size="sm"
            />
          </div>

          {/* Only Option: Book Now */}
          <button
            type="button"
            id={`book-now-btn-${product.id}`}
            onClick={handleBookNow}
            className="w-full flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa52] text-white text-sm font-bold shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer group"
            title="Book now on WhatsApp"
          >
            <MessageCircle size={18} className="fill-white/20 group-hover:scale-110 transition-transform" />
            <span>Book Now</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform opacity-90" />
          </button>
        </div>
      </div>
    </div>
  );
};
