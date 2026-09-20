import { MapPin, Phone, Instagram, Send, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, PRODUCT_CATEGORIES, SOLUTIONS } from '../data/content';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0d10] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
             <a href="#home" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#dfb775] to-[#b89255] flex items-center justify-center font-black text-[#0b0d10] text-xl">
                J
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                JMD <span className="text-[#dfb775]">ENTERPRISES</span>
              </span>
            </a>
            <p className="text-gray-500 leading-relaxed mb-8">
              "Built for brands that want to be remembered." <br />
              Premium corporate gifting solutions, custom apparel and branded merchandise delivered Pan-India.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#dfb775] hover:bg-[#dfb775]/10 transition-all border border-white/10"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all border border-white/10"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Quick Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Solutions', 'Products', 'Why Us', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-500 hover:text-[#dfb775] transition-colors flex items-center group"
                  >
                    <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Solutions</h4>
            <ul className="space-y-4">
              {SOLUTIONS.slice(0, 4).map((sol) => (
                <li key={sol.id}>
                  <a
                    href="#solutions"
                    className="text-gray-500 hover:text-[#dfb775] transition-colors"
                  >
                    {sol.title}
                  </a>
                </li>
              ))}
              {PRODUCT_CATEGORIES.slice(1, 4).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    className="text-gray-500 hover:text-[#dfb775] transition-colors"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#dfb775] shrink-0" />
                <span className="text-gray-500">
                  {BUSINESS_INFO.location.addressLine}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-[#dfb775] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.contact.phoneClean}`} className="text-gray-500 hover:text-white transition-colors">
                  {BUSINESS_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Instagram size={20} className="text-[#dfb775] shrink-0" />
                <a href={BUSINESS_INFO.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  @{BUSINESS_INFO.contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="text-gray-600 text-sm">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-gray-600 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
