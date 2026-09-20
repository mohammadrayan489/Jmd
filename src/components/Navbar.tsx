import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { BUSINESS_INFO } from '../data/content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`flex items-center justify-between rounded-full px-6 py-2 transition-all duration-500 ${
              isScrolled
                ? 'bg-[#0b0d10]/80 backdrop-blur-xl border border-white/5 shadow-2xl'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#dfb775] to-[#b89255] flex items-center justify-center font-black text-[#0b0d10] text-xl shadow-lg group-hover:scale-110 transition-transform">
                J
              </div>
              <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
                JMD <span className="text-[#dfb775]">ENTERPRISES</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#dfb775] text-sm font-semibold tracking-wide transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dfb775] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={BUSINESS_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#dfb775] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <Button size="sm" onClick={() => window.location.href = '#quote'}>
                Get a Quote
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0b0d10] flex flex-col p-8 pt-24"
          >
            <button
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white hover:text-[#dfb775] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                 <a
                  href={BUSINESS_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#dfb775]"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phoneClean}`}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#dfb775]"
                >
                  <Phone size={24} />
                </a>
              </div>
              <Button size="lg" onClick={() => { setMobileMenuOpen(false); window.location.href = '#quote'; }}>
                Request a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
