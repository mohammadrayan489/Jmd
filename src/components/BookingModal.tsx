import React, { useEffect, useRef } from 'react';
import { CatalogProduct, CustomerDetails, FormErrors } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { X, MapPin, User, Phone, Building2, FileText, AlertCircle, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { JMDLogo } from './JMDLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: CatalogProduct | null;
  quantity: number;
  customer: CustomerDetails;
  errors: FormErrors;
  onChange: (field: keyof CustomerDetails, value: string) => void;
  onSubmit: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  product,
  quantity,
  customer,
  errors,
  onChange,
  onSubmit
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70 flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <JMDLogo className="w-12 h-12 shadow-xs ring-2 ring-slate-900/10 mt-0.5 shrink-0" />
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-1">
                    <Sparkles size={11} className="text-emerald-600" />
                    <span>Book on WhatsApp</span>
                  </div>
                  <h3
                    id="booking-modal-title"
                    className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug"
                  >
                    Confirm Order Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Please provide your delivery location and details for WhatsApp order dispatch.
                  </p>
                </div>
              </div>

              <button
                type="button"
                id="close-booking-modal-btn"
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0 cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              {/* Selected Product Box */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-3.5 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Selected Product
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                    Price on Request
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-sm text-slate-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-slate-500">{product.category}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block font-black text-xs sm:text-sm text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-200 whitespace-nowrap">
                      Quantity: {quantity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Input Fields */}
              <div className="space-y-3.5">
                {/* Location Field (Prominent & Required) */}
                <div>
                  <label
                    htmlFor="modal-input-location"
                    className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1"
                  >
                    <span>Delivery Location / Address <span className="text-rose-500">*</span></span>
                    <span className="text-[10px] font-medium text-emerald-600">Pan-India Delivery</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-600">
                      <MapPin size={16} />
                    </div>
                    <input
                      type="text"
                      id="modal-input-location"
                      value={customer.location ?? ''}
                      onChange={(e) => onChange('location', e.target.value)}
                      placeholder="City, State or full office address (e.g. Gwalior, MP)"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50/80 border text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white ${
                        errors.location
                          ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                  </div>
                  {errors.location && (
                    <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="modal-input-name"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User size={15} />
                      </div>
                      <input
                        type="text"
                        id="modal-input-name"
                        value={customer.fullName ?? ''}
                        onChange={(e) => onChange('fullName', e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50/80 border text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white ${
                          errors.fullName
                            ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="modal-input-phone"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      WhatsApp Phone <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone size={15} />
                      </div>
                      <input
                        type="tel"
                        id="modal-input-phone"
                        value={customer.phoneNumber ?? ''}
                        onChange={(e) => onChange('phoneNumber', e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50/80 border text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white ${
                          errors.phoneNumber
                            ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Custom Name / Brand to Print or Engrave */}
                <div>
                  <label
                    htmlFor="modal-input-custom-name"
                    className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1"
                  >
                    <span className="flex items-center gap-1.5 text-emerald-800">
                      <Sparkles size={13} className="text-emerald-600" />
                      Name or Text to Print / Engrave
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Custom Branding</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="modal-input-custom-name"
                      value={customer.customNameToPrint ?? ''}
                      onChange={(e) => onChange('customNameToPrint', e.target.value)}
                      placeholder="e.g. Rahul Sharma, Dr. Aman Gupta, or Company Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-50/40 border border-emerald-300 text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 font-medium"
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Write the exact name, designation, or brand title to engrave/print on this item.
                  </p>
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <label
                    htmlFor="modal-input-company"
                    className="block text-xs font-bold text-slate-800 mb-1"
                  >
                    Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Building2 size={15} />
                    </div>
                    <input
                      type="text"
                      id="modal-input-company"
                      value={customer.companyName ?? ''}
                      onChange={(e) => onChange('companyName', e.target.value)}
                      placeholder="e.g. Acme Corp / Brand Name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>

                {/* Additional Notes (Optional) */}
                <div>
                  <label
                    htmlFor="modal-input-notes"
                    className="block text-xs font-bold text-slate-800 mb-1"
                  >
                    Customization / Branding Notes <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-2.5 left-3 pointer-events-none text-slate-400">
                      <FileText size={15} />
                    </div>
                    <textarea
                      id="modal-input-notes"
                      rows={2}
                      value={customer.additionalNotes ?? ''}
                      onChange={(e) => onChange('additionalNotes', e.target.value)}
                      placeholder="e.g. Logo embossing, specific colors, required delivery date..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 resize-y"
                    />
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="p-3 rounded-xl bg-slate-100/90 text-slate-600 text-xs flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>
                  Final bulk pricing & delivery timeline will be shared directly on WhatsApp by {BUSINESS_INFO.name}.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex flex-col gap-2">
              <button
                type="button"
                id="modal-submit-whatsapp-btn"
                onClick={onSubmit}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa52] text-white font-heading font-bold text-base shadow-md hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer group"
              >
                <MessageCircle size={20} className="fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Send Order to WhatsApp Now</span>
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-400 font-medium">
                Directly opens WhatsApp ({BUSINESS_INFO.phone}) with your order details and delivery location.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
