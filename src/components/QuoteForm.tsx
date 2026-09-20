import { useState } from 'react';
import { motion } from 'motion/react';
import { QuoteFormData, QuoteFormErrors } from '../types';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    requirement: '',
    quantity: '',
    deliveryLocation: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<QuoteFormErrors>({});

  const validate = () => {
    const newErrors: QuoteFormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.requirement) newErrors.requirement = 'Please select a requirement';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // We don't have a backend, so we guide them to WhatsApp if they want immediate response
      setStatus('success');
    }, 1500);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello JMD Enterprises, I have a gifting requirement:
Name: ${formData.name}
Company: ${formData.companyName}
Requirement: ${formData.requirement}
Qty: ${formData.quantity}
Location: ${formData.deliveryLocation}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.contact.phoneClean}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="quote" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <div>
            <span className="text-[#dfb775] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Request Quotation</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Have a Gifting <br />
              <span className="text-gold-gradient">Requirement?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              Tell us what you're looking for and our team will help you find the right solution. We provide customized quotes based on your volume and branding needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#dfb775] group-hover:bg-[#dfb775] group-hover:text-[#0b0d10] transition-all duration-300">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Quick Enquiry</div>
                  <div className="text-gray-500">Tap to start a direct WhatsApp chat.</div>
                </div>
              </div>
              
              <GlassCard className="p-8 border-gold-subtle bg-[#dfb775]/5">
                <div className="text-[#dfb775] font-bold mb-2">Need Help?</div>
                <p className="text-gray-300 text-sm mb-6">Our corporate gifting consultants are available to guide you through curation and logistics.</p>
                <Button variant="whatsapp" className="w-full" onClick={() => window.open(BUSINESS_INFO.contact.whatsappUrl, '_blank')}>
                  Chat with Consultant
                </Button>
              </GlassCard>
            </div>
          </div>

          {/* Form Side */}
          <GlassCard className="p-8 md:p-12 border-white/5 relative">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. For a faster response, you can send this same information to us on WhatsApp.
                </p>
                <div className="flex flex-col gap-4">
                  <Button variant="whatsapp" size="lg" onClick={handleWhatsAppRedirect}>
                    Send to WhatsApp Now
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => setStatus('idle')}>
                    Back to Form
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Company Name</label>
                    <input
                      type="text"
                      placeholder="Your Company Pvt Ltd"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors ${errors.phone ? 'border-red-500/50' : 'border-white/10'}`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Work Email *</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Requirement *</label>
                    <select
                      className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors appearance-none ${errors.requirement ? 'border-red-500/50' : 'border-white/10'}`}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option value="" className="bg-[#0b0d10]">Select Category</option>
                      <option value="Gift Boxes" className="bg-[#0b0d10]">Corporate Gift Boxes</option>
                      <option value="Apparel" className="bg-[#0b0d10]">Custom Apparel</option>
                      <option value="Drinkware" className="bg-[#0b0d10]">Branded Drinkware</option>
                      <option value="Tech" className="bg-[#0b0d10]">Tech Accessories</option>
                      <option value="Other" className="bg-[#0b0d10]">Other / Multiple</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Approx Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g. 100 units"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Delivery Location</label>
                  <input
                    type="text"
                    placeholder="City, State"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Message / Specific Needs</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand or event..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#dfb775] transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  className="w-full gap-2"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Processing...'
                  ) : (
                    <>
                      <Send size={18} />
                      Request a Quote
                    </>
                  )}
                </Button>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm justify-center">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or use WhatsApp.
                  </div>
                )}
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
