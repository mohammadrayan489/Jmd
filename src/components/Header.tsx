import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a href="#" className="flex flex-col group">
          <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
            JMD ENTERPRISES
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide uppercase">
            Premium Corporate Gifting
          </span>
        </a>

        {/* Right: Cart Button */}
        <button
          type="button"
          id="header-cart-btn"
          onClick={onCartClick}
          aria-label="View Cart"
          className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 active:scale-95 transition-all text-xs sm:text-sm font-semibold cursor-pointer shadow-xs"
        >
          <ShoppingCart size={16} />
          <span className="hidden sm:inline">Cart</span>
          <span
            id="header-cart-count"
            className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-emerald-500 text-white font-bold text-xs"
          >
            {cartItemCount}
          </span>
        </button>
      </div>
    </header>
  );
};
