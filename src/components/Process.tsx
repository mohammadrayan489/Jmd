import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { PROCESS_STEPS } from '../data/content';
import { GlassCard } from './ui/GlassCard';

export const Process = () => {
  return (
    <section className="py-24 bg-[#0b0d10] relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="How It Works"
          title="Curated With Precision"
          subtitle="Our streamlined process ensures your corporate gifting requirement is handled from concept to delivery with absolute care."
        />

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <GlassCard className="h-full border-white/5 group-hover:border-[#dfb775]/30 relative overflow-hidden">
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-7xl font-black text-white/5 group-hover:text-[#dfb775]/10 transition-colors">
                    {step.step}
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#dfb775]/10 flex items-center justify-center text-[#dfb775] font-black text-xl mb-6 border border-[#dfb775]/20">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-gray-600 text-xs italic">
                    {step.detail}
                  </p>

                  <div className="mt-8 h-1 w-0 bg-[#dfb775] transition-all duration-700 group-hover:w-full"></div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
