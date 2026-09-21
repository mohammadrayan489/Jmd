import React, { useState } from 'react';
import { CatalogProduct } from '../types';
import { QuantitySelector } from './QuantitySelector';
import { ShoppingCart, Check, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  product: CatalogProduct;
  onAddToCart: (product: CatalogProduct, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showAddedConfirmation, setShowAddedConfirmation] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setShowAddedConfirmation(true);
    setTimeout(() => {
      setShowAddedConfirmation(false);
    }, 1800);
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

        {/* Temporary Added to Cart Overlay Banner */}
        <AnimatePresence>
          {showAddedConfirmation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 bg-emerald-950/85 backdrop-blur-xs flex items-center justify-center text-white font-medium z-10 px-4 text-center"
            >
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
                  <Check size={20} strokeWidth={3} />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Added to Cart!</span>
                <span className="text-xs text-emerald-200">({quantity} {quantity === 1 ? 'unit' : 'units'})</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
              size="md"
              className="w-full sm:w-auto justify-center"
            />

            <button
              type="button"
              id={`add-to-cart-btn-${product.id}`}
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-semibold shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer"
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
