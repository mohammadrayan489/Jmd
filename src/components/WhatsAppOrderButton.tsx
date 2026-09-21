import React from 'react';
import { CartItem, CustomerDetails, FormErrors } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { MessageCircle, Send, AlertTriangle } from 'lucide-react';

interface WhatsAppOrderButtonProps {
  items: CartItem[];
  customer: CustomerDetails;
  onValidate: () => boolean;
  errors: FormErrors;
}

export const WhatsAppOrderButton: React.FC<WhatsAppOrderButtonProps> = ({
  items,
  customer,
  onValidate,
  errors
}) => {
  const handleSendOrder = () => {
    const isValid = onValidate();
    if (!isValid) {
      // Scroll to either cart or customer details
      if (items.length === 0) {
        document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById('customer-details')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Generate formatted WhatsApp message
    const productsList = items
      .map((item, index) => `${index + 1}. ${item.product.name} — Quantity: ${item.quantity}`)
      .join('\n');

    const message = `Hello JMD Enterprises,

I would like to place an order/enquiry.

Customer Details:
Name: ${customer.fullName.trim()}
Phone: ${customer.phoneNumber.trim()}
Company: ${customer.companyName.trim() || 'N/A'}
Location: ${customer.location.trim()}

Products:
${productsList}

Additional Notes:
${customer.additionalNotes.trim() || 'None'}

Please share the pricing and further details.

Thank you.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.cleanPhone}?text=${encodedText}`;

    // Open WhatsApp URL directly in new tab/window
    window.open(whatsappUrl, '_blank');
  };

  const hasErrors = Boolean(errors.cart || errors.fullName || errors.phoneNumber || errors.location);

  return (
    <section id="whatsapp-cta" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-200/80 bg-gradient-to-b from-white to-emerald-50/40 shadow-md">
        {/* Error notification summary if clicked with missing fields */}
        {hasErrors && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm max-w-md mx-auto text-left flex items-start gap-2.5">
            <AlertTriangle size={18} className="shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm">
              <span className="font-bold block">Please complete the required details:</span>
              {errors.cart && <p>• {errors.cart}</p>}
              {errors.fullName && <p>• {errors.fullName}</p>}
              {errors.phoneNumber && <p>• {errors.phoneNumber}</p>}
              {errors.location && <p>• {errors.location}</p>}
            </div>
          </div>
        )}

        <div className="max-w-md mx-auto">
          <button
            type="button"
            id="send-whatsapp-order-btn"
            onClick={handleSendOrder}
            className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa52] text-white font-heading font-bold text-base sm:text-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer group"
          >
            <MessageCircle size={22} className="fill-white/20 group-hover:scale-110 transition-transform" />
            <span>Send Order on WhatsApp</span>
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-3.5 text-xs sm:text-sm text-slate-500 font-medium">
            Your order details will be sent directly to JMD Enterprises.
          </p>
        </div>
      </div>
    </section>
  );
};
