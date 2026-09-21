import React from 'react';
import { CartItem, CustomerDetails } from '../types';
import { ClipboardList, Info, CheckCircle2 } from 'lucide-react';

interface OrderSummaryProps {
  items: CartItem[];
  customer: CustomerDetails;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ items, customer }) => {
  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section id="order-summary" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm bg-white/95">
        {/* Header */}
        <div className="flex items-center gap-2.5 pb-5 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
            <ClipboardList size={18} />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Order Summary
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Review your items and customer information before sending to WhatsApp
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {/* Selected Products List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Products Requested ({items.length} items • {totalUnits} units)
              </h3>
            </div>

            {items.length > 0 ? (
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 divide-y divide-slate-200/60">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 pr-3 min-w-0">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span className="font-medium text-slate-900 truncate">
                        {product.name}
                      </span>
                    </div>
                    <span className="font-bold text-slate-700 whitespace-nowrap bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-xs">
                      Quantity: {quantity}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 italic bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200">
                No products selected yet.
              </p>
            )}
          </div>

          {/* Customer Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Customer Information
            </h3>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 text-sm space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="text-xs text-slate-400 block">Name</span>
                  <span className="font-medium text-slate-900">
                    {customer.fullName || <span className="text-slate-400 italic">Not provided yet</span>}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Phone</span>
                  <span className="font-medium text-slate-900">
                    {customer.phoneNumber || <span className="text-slate-400 italic">Not provided yet</span>}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
                <div>
                  <span className="text-xs text-slate-400 block">Company</span>
                  <span className="font-medium text-slate-900">
                    {customer.companyName || <span className="text-slate-400 italic">—</span>}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Delivery Location</span>
                  <span className="font-medium text-slate-900">
                    {customer.location || <span className="text-slate-400 italic">Not provided yet</span>}
                  </span>
                </div>
              </div>

              {customer.additionalNotes && (
                <div className="pt-2 border-t border-slate-200/60">
                  <span className="text-xs text-slate-400 block">Additional Notes</span>
                  <p className="text-slate-700 mt-0.5 text-xs sm:text-sm whitespace-pre-wrap">
                    {customer.additionalNotes}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Pricing Confirmation Notice */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Notice:</span>
              <span>Final pricing will be confirmed by JMD Enterprises.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
