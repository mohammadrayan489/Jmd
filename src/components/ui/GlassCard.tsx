import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  delay?: number;
}

export const GlassCard = ({ children, className = '', hoverable = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-panel rounded-2xl p-6 ${hoverable ? 'glass-panel-hover' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};
