import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({
  itemCount,
  onClick
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        type="button"
        id="floating-cart-btn"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`View Cart with ${itemCount} items`}
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 border border-white/20 backdrop-blur-md cursor-pointer group"
      >
        <ShoppingCart size={19} className="group-hover:rotate-6 transition-transform" />
        <span className="font-heading font-bold text-sm">Cart</span>

        <AnimatePresence mode="wait">
          <motion.span
            key={itemCount}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            id="floating-cart-badge"
            className="flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full bg-emerald-500 text-white font-extrabold text-xs shadow-sm"
          >
            {itemCount}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
