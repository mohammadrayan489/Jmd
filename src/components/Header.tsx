import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { JMDLogo } from './JMDLogo';

export const Header: React.FC = () => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Left: Brand Identity with Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <JMDLogo className="w-10 h-10 sm:w-11 sm:h-11 shadow-xs ring-2 ring-slate-900/10 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
              JMD ENTERPRISES
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Print Your Imagination • Since 2019
            </span>
          </div>
        </a>

        {/* Right: Direct WhatsApp Contact Link */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.cleanPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          id="header-whatsapp-btn"
          aria-label="Contact on WhatsApp"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/80 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
        >
          <MessageCircle size={16} className="text-[#25D366] fill-[#25D366]/20" />
          <span className="hidden sm:inline">WhatsApp:</span>
          <span>{BUSINESS_INFO.phone}</span>
        </a>
      </div>
    </header>
  );
};
