import React from 'react';
import { CartItem } from '../types';
import { QuantitySelector } from './QuantitySelector';
import { Trash2, ShoppingCart, ArrowDown, PackageX } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: number | string, quantity: number) => void;
  onRemoveItem: (productId: number | string) => void;
  onClearCart: () => void;
  onBrowseProducts: () => void;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onBrowseProducts
}) => {
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section id="cart" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm bg-white/95">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <ShoppingCart size={18} />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Your Order Cart
              </h2>
            </div>
            <p className="text-slate-500 text-sm mt-1">
              {items.length === 0
                ? 'Your cart is currently empty'
                : `${items.length} ${items.length === 1 ? 'product' : 'products'} selected (${totalItemsCount} total units)`}
            </p>
          </div>

          {items.length > 0 && (
            <button
              type="button"
              id="clear-cart-btn"
              onClick={onClearCart}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors self-start sm:self-center cursor-pointer"
            >
              <Trash2 size={13} />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {/* Cart List */}
        {items.length > 0 ? (
          <div className="divide-y divide-slate-100 mt-2">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                id={`cart-item-${product.id}`}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Product details */}
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover bg-slate-100 shrink-0 border border-slate-200/60"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{product.category}</p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/70 px-2 py-0.5 rounded-full">
                      Price on Request
                    </span>
                  </div>
                </div>

                {/* Quantity Controls & Delete */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 sm:hidden">Qty:</span>
                    <QuantitySelector
                      quantity={quantity}
                      onQuantityChange={(newQty) => onUpdateQuantity(product.id, newQty)}
                      size="sm"
                    />
                  </div>

                  <button
                    type="button"
                    id={`remove-cart-item-${product.id}`}
                    onClick={() => onRemoveItem(product.id)}
                    aria-label={`Remove ${product.name} from cart`}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
              <PackageX size={26} />
            </div>
            <h3 className="font-heading font-bold text-slate-800 text-lg">Your cart is empty</h3>
            <p className="text-slate-500 text-sm max-w-sm mt-1 mb-5">
              Browse the catalog above, select your desired items and quantities to build your custom order.
            </p>
            <button
              type="button"
              id="cart-browse-products-btn"
              onClick={onBrowseProducts}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
            >
              <span>Browse Catalog</span>
              <ArrowDown size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
