import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { BUSINESS_INFO } from '../data/content';
import { IMAGES } from '../data/images';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-[#dfb775]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#dfb775]/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dfb775]/10 border border-[#dfb775]/20 text-[#dfb775] text-sm font-bold mb-8"
          >
            <Sparkles size={16} />
            PREMIUM CORPORATE GIFTING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8"
          >
            Elevate Your Brand, <br />
            <span className="text-gold-gradient">One Gift at a Time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-xl md:text-2xl max-w-2xl lg:mx-0 mx-auto leading-relaxed mb-12"
          >
            {BUSINESS_INFO.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <Button size="xl" onClick={() => window.location.href = '#quote'}>
              Get a Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="whatsapp" size="xl" onClick={() => window.open(BUSINESS_INFO.contact.whatsappUrl, '_blank')}>
              <MessageCircle className="mr-2" size={20} />
              WhatsApp Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 font-bold text-sm tracking-widest uppercase"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#dfb775]" />
              Bulk Orders
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-[#dfb775]" />
              Custom Branding
            </div>
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-[#dfb775]" />
              Pan-India
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Main Image Container */}
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src={IMAGES.heroMain}
                alt="Premium Corporate Gifts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Glass Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-panel p-6 rounded-2xl border-gold-subtle shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#dfb775]/20 flex items-center justify-center text-[#dfb775]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-white font-bold">Premium Quality</div>
                  <div className="text-gray-400 text-xs">Curated Exclusively</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 -left-20 glass-panel p-6 rounded-2xl border-white/5 shadow-2xl hidden md:block max-w-[240px]"
            >
              <div className="text-[#dfb775] font-black text-2xl mb-1">4,500+</div>
              <div className="text-white text-sm font-bold mb-2">Happy Business Connections</div>
              <div className="text-gray-400 text-xs leading-relaxed">Trusted by corporate teams for luxury branding solutions.</div>
            </motion.div>
          </motion.div>

          {/* Decorative shapes */}
          <div className="absolute -top-20 -left-20 w-64 h-64 border border-[#dfb775]/20 rounded-full -z-10 blur-sm"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-[#dfb775]/10 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};
