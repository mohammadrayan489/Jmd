import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#dfb775] text-[#0b0d10] hover:bg-[#f7e7ce] shadow-[0_0_20px_rgba(223,183,117,0.3)] hover:shadow-[0_0_30px_rgba(223,183,117,0.5)]',
    secondary: 'bg-[#1f2530] text-white hover:bg-[#2d3542] border border-white/5',
    outline: 'bg-transparent border border-[#dfb775]/40 text-[#dfb775] hover:border-[#dfb775] hover:bg-[#dfb775]/10',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-[0_0_20px_rgba(37,211,102,0.2)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
