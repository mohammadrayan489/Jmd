import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { WHY_US_POINTS } from '../data/content';
import { GlassCard } from './ui/GlassCard';

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfb775]/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#dfb775]/5 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <SectionHeader
          badge="The JMD Advantage"
          title="Why Businesses Choose Us"
          subtitle="We combine premium product selection with seamless business execution to deliver gifting experiences that reflect your brand's excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_POINTS.map((point, i) => {
            const IconComponent = (Icons as any)[point.iconName] || Icons.Check;
            
            return (
              <GlassCard key={point.id} delay={i * 0.1} className="p-10 border-white/5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb775] to-[#b89255] flex items-center justify-center text-[#0b0d10] mb-8 shadow-xl shadow-[#dfb775]/10">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
