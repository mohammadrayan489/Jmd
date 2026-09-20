import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { IMAGES } from '../data/images';
import { Sparkles, Package, Truck, ShieldCheck } from 'lucide-react';

export const FeaturedShowcase = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative border-white/5">
          {/* Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter whitespace-nowrap">
            JMD LUXURY
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl">
                <img
                  src={IMAGES.featuredBox}
                  alt="Premium Gifting"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Labels */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -right-8 glass-panel py-3 px-6 rounded-full border-[#dfb775]/30 flex items-center gap-2"
              >
                <Sparkles size={16} className="text-[#dfb775]" />
                <span className="text-sm font-bold text-white">Custom Branding</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 -left-10 glass-panel py-3 px-6 rounded-full border-white/10 flex items-center gap-2"
              >
                <Package size={16} className="text-[#dfb775]" />
                <span className="text-sm font-bold text-white">Premium Packaging</span>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <div className="text-center lg:text-left">
              <span className="text-[#dfb775] font-black tracking-[0.3em] uppercase text-xs mb-6 block">The JMD Standard</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Your Brand. <br />
                Your Story. <br />
                <span className="text-gold-gradient">Your Gift.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                We believe a gift is more than just an object; it's a bridge between your brand and its people. Our editorial-grade curation ensures every box tells your story with elegance.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col gap-2">
                  <div className="text-white font-bold flex items-center gap-2">
                    <ShieldCheck size={20} className="text-[#dfb775]" />
                    Unmatched Quality
                  </div>
                  <p className="text-gray-500 text-sm">Vetted luxury materials only.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-white font-bold flex items-center gap-2">
                    <Truck size={20} className="text-[#dfb775]" />
                    Reliable Delivery
                  </div>
                  <p className="text-gray-500 text-sm">Safe Pan-India logistics.</p>
                </div>
              </div>

              <Button size="xl" onClick={() => window.location.href = '#quote'}>
                Start Creating Your Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
