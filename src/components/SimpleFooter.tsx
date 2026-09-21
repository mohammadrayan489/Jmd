import React from 'react';
import { BUSINESS_INFO } from '../data/products';
import { MapPin, MessageCircle, Instagram } from 'lucide-react';
import { JMDLogo } from './JMDLogo';

export const SimpleFooter: React.FC = () => {
  return (
    <footer id="footer" className="mt-16 border-t border-slate-200 bg-white/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex flex-col items-center">
          <JMDLogo className="w-16 h-16 mb-3 shadow-sm ring-2 ring-slate-900/10" />
          <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
            {BUSINESS_INFO.name.toUpperCase()}
          </h3>
          <p className="text-emerald-700 text-xs font-bold tracking-widest uppercase mt-0.5">
            Print Your Imagination • Since 2019
          </p>
          <p className="text-slate-600 text-sm font-medium mt-1">
            {BUSINESS_INFO.fullTagline}
          </p>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <MapPin size={15} className="text-emerald-600 shrink-0" />
          <span>{BUSINESS_INFO.address}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold pt-1">
          <a
            href={`https://wa.me/${BUSINESS_INFO.cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-emerald-600 transition-colors"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            <span>WhatsApp: {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-pink-600 transition-colors"
          >
            <Instagram size={16} className="text-pink-600" />
            <span>Instagram: {BUSINESS_INFO.instagram}</span>
          </a>
        </div>

        <div className="pt-5 border-t border-slate-100 text-xs text-slate-400">
          © 2026 {BUSINESS_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
