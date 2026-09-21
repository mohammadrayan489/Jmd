import React from 'react';
import { CustomerDetails as CustomerDetailsType, FormErrors } from '../types';
import { User, Phone, Building2, MapPin, FileText, AlertCircle } from 'lucide-react';

interface CustomerDetailsProps {
  details: CustomerDetailsType;
  errors: FormErrors;
  onChange: (field: keyof CustomerDetailsType, value: string) => void;
}

export const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  details,
  errors,
  onChange
}) => {
  return (
    <section id="customer-details" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm bg-white/95">
        {/* Header */}
        <div className="mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
              <User size={18} />
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Your Details
            </h2>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Please enter your contact details so JMD Enterprises can prepare and confirm your custom order quote.
          </p>
        </div>

        {/* Global Cart Error Notice if any */}
        {errors.cart && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-sm">
            <AlertCircle size={18} className="shrink-0" />
            <span>{errors.cart}</span>
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="input-full-name"
                className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User size={16} />
                </div>
                <input
                  type="text"
                  id="input-full-name"
                  value={details.fullName}
                  onChange={(e) => onChange('fullName', e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50/70 border text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white ${
                    errors.fullName
                      ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="input-phone-number"
                className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
              >
                Phone Number (WhatsApp) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone size={16} />
                </div>
                <input
                  type="tel"
                  id="input-phone-number"
                  value={details.phoneNumber}
                  onChange={(e) => onChange('phoneNumber', e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50/70 border text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white ${
                    errors.phoneNumber
                      ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Company Name (Optional) */}
          <div>
            <label
              htmlFor="input-company-name"
              className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
            >
              Company Name <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Building2 size={16} />
              </div>
              <input
                type="text"
                id="input-company-name"
                value={details.companyName}
                onChange={(e) => onChange('companyName', e.target.value)}
                placeholder="e.g. Acme Technologies Ltd."
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          {/* Row 3: Location / Delivery Address */}
          <div>
            <label
              htmlFor="input-location"
              className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
            >
              Location / Delivery Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <MapPin size={16} />
              </div>
              <input
                type="text"
                id="input-location"
                value={details.location}
                onChange={(e) => onChange('location', e.target.value)}
                placeholder="City, State or full office delivery address"
                className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50/70 border text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white ${
                  errors.location
                    ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                    : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20'
                }`}
              />
            </div>
            {errors.location && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.location}
              </p>
            )}
          </div>

          {/* Row 4: Additional Notes (Optional) */}
          <div>
            <label
              htmlFor="input-additional-notes"
              className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
            >
              Additional Notes <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                <FileText size={16} />
              </div>
              <textarea
                id="input-additional-notes"
                rows={3}
                value={details.additionalNotes}
                onChange={(e) => onChange('additionalNotes', e.target.value)}
                placeholder="Specific branding requirements, color preferences, target date or packaging needs..."
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 transition-all focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 resize-y"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
