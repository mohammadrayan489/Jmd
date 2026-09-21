import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  min?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  className = '',
  size = 'md'
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < min) {
      onQuantityChange(min);
    } else {
      onQuantityChange(val);
    }
  };

  const sizeClasses = {
    sm: 'h-8 text-xs',
    md: 'h-10 text-sm',
    lg: 'h-12 text-base'
  };

  const buttonSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div
      id="quantity-selector-container"
      className={`inline-flex items-center rounded-xl bg-slate-100/90 border border-slate-200 p-1 select-none ${sizeClasses[size]} ${className}`}
    >
      <button
        type="button"
        id="qty-decrease-btn"
        onClick={handleDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className={`flex items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-slate-900 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all ${buttonSizeClasses[size]}`}
      >
        <Minus size={size === 'sm' ? 14 : 16} strokeWidth={2.5} />
      </button>

      <input
        type="number"
        id="qty-input"
        min={min}
        value={quantity}
        onChange={handleInputChange}
        aria-label="Quantity"
        className="w-12 sm:w-14 text-center font-bold text-slate-900 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        type="button"
        id="qty-increase-btn"
        onClick={handleIncrease}
        aria-label="Increase quantity"
        className={`flex items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-slate-900 active:scale-95 transition-all ${buttonSizeClasses[size]}`}
      >
        <Plus size={size === 'sm' ? 14 : 16} strokeWidth={2.5} />
      </button>
    </div>
  );
};
