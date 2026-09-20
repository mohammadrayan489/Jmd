import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { USE_CASES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export const UseCases = () => {
  return (
    <section className="py-24 bg-[#0b0d10]">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Versatile Applications"
          title="Gifts for Every Professional Milestone"
          subtitle="Whether you're welcoming a new team member or celebrating a festive tradition, we have the perfect curated solution."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <img
                src={uc.image}
                alt={uc.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100 p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{uc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {uc.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex items-center justify-between translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-[10px] font-black text-[#dfb775] uppercase tracking-widest">{uc.recommendedProducts}</span>
                  <div className="w-8 h-8 rounded-full bg-[#dfb775] flex items-center justify-center text-[#0b0d10]">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
