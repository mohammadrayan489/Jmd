import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { GlassCard } from './ui/GlassCard';
import { SOLUTIONS } from '../data/content';
import { Button } from './ui/Button';

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Expert Solutions"
          title="Solutions Built Around Your Brand"
          subtitle="From thoughtful employee gifts to fully branded corporate merchandise, we help businesses create experiences people remember."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol, i) => {
            const IconComponent = (Icons as any)[sol.iconName] || Icons.Gift;
            
            return (
              <GlassCard key={sol.id} delay={i * 0.1} className="flex flex-col h-full group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#dfb775] mb-8 group-hover:bg-[#dfb775] group-hover:text-[#0b0d10] transition-all duration-500">
                  <IconComponent size={30} />
                </div>
                
                <div className="text-xs font-black text-[#dfb775] mb-2 uppercase tracking-widest">{sol.number}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{sol.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                  {sol.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {sol.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#dfb775] mt-1.5 shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between"
                  onClick={() => window.location.href = '#quote'}
                >
                  {sol.ctaText}
                  <Icons.ArrowRight size={16} />
                </Button>
              </GlassCard>
            );
          })}
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#dfb775]/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};
