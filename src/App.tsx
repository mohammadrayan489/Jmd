/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Solutions } from './components/Solutions';
import { ProductShowcase } from './components/ProductShowcase';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { UseCases } from './components/UseCases';
import { InstagramGrid } from './components/InstagramGrid';
import { FAQ } from './components/FAQ';
import { QuoteForm } from './components/QuoteForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { motion } from 'motion/react';
import { Button } from './components/ui/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f3f4f6]">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#dfb775]/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#dfb775]/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <Solutions />
        <ProductShowcase />
        <FeaturedShowcase />
        <Process />
        <WhyUs />
        <UseCases />
        
        {/* Made for Businesses Trust Section */}
        <section id="about" className="py-24 border-y border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12">Made for Businesses That Want to Be Remembered.</h2>
            <div className="flex flex-wrap justify-center gap-12 text-gray-500 font-bold uppercase tracking-[0.3em] text-sm">
              <span className="hover:text-[#dfb775] transition-colors">Premium Gifting</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span className="hover:text-[#dfb775] transition-colors">Custom Apparel</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span className="hover:text-[#dfb775] transition-colors">Bulk Orders</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span className="hover:text-[#dfb775] transition-colors">Pan-India Delivery</span>
            </div>
          </div>
        </section>

        <InstagramGrid />
        <FAQ />
        
        <QuoteForm />
        
        {/* Final CTA Section */}
        <section className="py-24 relative px-6">
          <div className="container mx-auto max-w-6xl">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group"
             >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#dfb775]/10 via-transparent to-[#dfb775]/5 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">Your Next Corporate <br /><span className="text-gold-gradient">Gift Starts Here.</span></h2>
                  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    Tell us what you have in mind. We'll help you turn it into something worth remembering.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="xl" onClick={() => window.location.href = '#quote'}>
                      Get a Quote
                    </Button>
                    <Button variant="whatsapp" size="xl" onClick={() => window.open('https://wa.me/919713876808', '_blank')}>
                      WhatsApp Us
                    </Button>
                  </div>
                </div>
             </motion.div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
