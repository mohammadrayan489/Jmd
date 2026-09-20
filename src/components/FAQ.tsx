import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { FAQS } from '../data/content';
import { Plus, Minus } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0b0d10]">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          badge="Support"
          title="Common Inquiries"
          subtitle="Everything you need to know about our corporate gifting process and nationwide delivery."
        />

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <GlassCard
              key={i}
              hoverable={false}
              className={`p-0 overflow-hidden border-white/5 ${openIndex === i ? 'border-[#dfb775]/30' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-[#dfb775]' : 'text-white group-hover:text-[#dfb775]'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#dfb775] border-[#dfb775] text-[#0b0d10] rotate-180' : 'text-gray-500'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
