import { motion } from 'motion/react';
import { TRUST_METRICS } from '../data/content';

export const TrustStrip = () => {
  return (
    <div className="relative py-12 border-y border-white/5 bg-[#0b0d10]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {TRUST_METRICS.map((metric, i) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              {metric.badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-[#dfb775]/10 text-[#dfb775] text-[10px] font-black uppercase tracking-wider mb-2 border border-[#dfb775]/20">
                  {metric.badge}
                </span>
              )}
              <div className="text-2xl md:text-4xl font-black text-white mb-1 group-hover:text-[#dfb775] transition-colors duration-300">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{metric.label}</div>
              <div className="text-xs text-gray-600 mt-1">{metric.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
