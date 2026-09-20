import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { BUSINESS_INFO } from '../data/content';
import { MapPin, Phone, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Find Us"
          title="Let's Create Something Memorable"
          subtitle="Ready to discuss your next corporate gifting project? Reach out to our team via WhatsApp, Phone or visit our center in Gwalior."
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <GlassCard className="flex flex-col items-center text-center p-12 border-white/5 group">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#dfb775] mb-8 group-hover:bg-[#dfb775] group-hover:text-[#0b0d10] transition-all duration-500">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
            <p className="text-gray-400">
              {BUSINESS_INFO.location.addressLine}
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col items-center text-center p-12 border-[#dfb775]/20 bg-[#dfb775]/5 group">
            <div className="w-16 h-16 rounded-full bg-[#dfb775] flex items-center justify-center text-[#0b0d10] mb-8 shadow-xl shadow-[#dfb775]/20 group-hover:scale-110 transition-transform duration-500">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">WhatsApp & Call</h3>
            <a href={`tel:${BUSINESS_INFO.contact.phoneClean}`} className="text-xl text-[#dfb775] font-bold hover:underline">
              {BUSINESS_INFO.contact.phone}
            </a>
            <p className="text-gray-500 text-sm mt-2">{BUSINESS_INFO.contact.responseTime}</p>
          </GlassCard>

          <GlassCard className="flex flex-col items-center text-center p-12 border-white/5 group">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#dfb775] mb-8 group-hover:bg-[#dfb775] group-hover:text-[#0b0d10] transition-all duration-500">
              <Instagram size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Social Feed</h3>
            <a href={BUSINESS_INFO.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xl text-white font-bold hover:text-[#dfb775]">
              @{BUSINESS_INFO.contact.instagramHandle}
            </a>
          </GlassCard>
        </div>

        {/* Visual Location Card (Premium alternative to fake map) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden aspect-[21/9] md:aspect-[21/7] group"
        >
          <div className="absolute inset-0 bg-[#1f2530] flex items-center justify-center overflow-hidden">
             {/* Stylized Map Pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#dfb775 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             {/* Center Point */}
             <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#dfb775]/20 rounded-full"
                ></motion.div>
                <div className="w-16 h-16 bg-[#dfb775] rounded-full flex items-center justify-center text-[#0b0d10] relative z-10 shadow-[0_0_40px_rgba(223,183,117,0.5)]">
                  <MapPin size={32} />
                </div>
             </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-12 left-12">
            <h4 className="text-3xl font-black text-white mb-2">Based in Gwalior</h4>
            <p className="text-[#dfb775] font-bold tracking-widest uppercase text-sm">Serving Businesses Pan-India</p>
          </div>
          
          <button 
             onClick={() => window.location.href = '#quote'}
             className="absolute bottom-12 right-12 glass-panel py-4 px-8 rounded-full border-white/20 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Start Your Enquiry
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
