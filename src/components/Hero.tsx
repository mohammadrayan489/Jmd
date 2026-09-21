import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { JMDLogo } from './JMDLogo';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section
      id="hero"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
    >
      {/* Brand Emblem Logo */}
      <div className="mx-auto mb-6 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
        <JMDLogo className="w-full h-full shadow-lg ring-4 ring-slate-900/10 hover:scale-105 transition-transform duration-300 cursor-pointer" />
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 mb-5 shadow-2xs">
        <Sparkles size={14} className="text-emerald-600" />
        <span>Direct WhatsApp Gifting Catalog</span>
      </div>

      <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.15]">
        Corporate Gifting <br className="hidden sm:inline" />
        <span className="text-emerald-700">Made Simple</span>
      </h1>

      <p className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Browse our products, choose your quantity and send your order directly to JMD Enterprises on WhatsApp.
      </p>

      {/* 3-Step Instant Ordering Guide */}
      <div className="mt-7 max-w-xl mx-auto grid grid-cols-3 gap-2 text-left bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-slate-200/90 shadow-2xs">
        <div className="flex items-start gap-2 p-1.5">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
            1
          </span>
          <div>
            <p className="text-xs font-bold text-slate-800">Pick & Adjust Qty</p>
            <p className="text-[11px] text-slate-500">Choose units needed</p>
          </div>
        </div>

        <div className="flex items-start gap-2 p-1.5 border-x border-slate-100">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
            2
          </span>
          <div>
            <p className="text-xs font-bold text-slate-800">Enter Location</p>
            <p className="text-[11px] text-slate-500">Tap Book Now</p>
          </div>
        </div>

        <div className="flex items-start gap-2 p-1.5">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
            3
          </span>
          <div>
            <p className="text-xs font-bold text-slate-800">WhatsApp Order</p>
            <p className="text-[11px] text-slate-500">Pre-filled message</p>
          </div>
        </div>
      </div>

      {/* Primary Action */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          id="hero-shop-btn"
          onClick={onShopClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <span>Shop Products</span>
          <ArrowDown size={18} />
        </button>
      </div>

      {/* Information Line */}
      <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-500">
        <span className="inline-flex items-center gap-1.5 text-slate-700">
          <CheckCircle2 size={14} className="text-emerald-600" />
          Bulk Orders
        </span>
        <span className="text-slate-300">•</span>
        <span className="inline-flex items-center gap-1.5 text-slate-700">
          <Sparkles size={14} className="text-emerald-600" />
          Custom Branding
        </span>
        <span className="text-slate-300">•</span>
        <span className="inline-flex items-center gap-1.5 text-slate-700">
          <ShieldCheck size={14} className="text-emerald-600" />
          Pan-India Delivery
        </span>
      </div>
    </section>
  );
};
