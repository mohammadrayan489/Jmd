/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { CatalogProduct, CustomerDetails as CustomerDetailsType, FormErrors } from './types';
import { PRODUCTS, BUSINESS_INFO } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { SimpleFooter } from './components/SimpleFooter';
import { BookingModal } from './components/BookingModal';

export default function App() {
  // Selected product and quantity to book
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Customer details state (remembered in localStorage)
  const [customer, setCustomer] = useState<CustomerDetailsType>(() => {
    try {
      const saved = localStorage.getItem('jmd_customer_details');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
    return {
      fullName: '',
      phoneNumber: '',
      companyName: '',
      location: '',
      customNameToPrint: '',
      additionalNotes: ''
    };
  });

  // Sync customer details to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jmd_customer_details', JSON.stringify(customer));
    } catch {
      // Ignore error
    }
  }, [customer]);

  // Validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Direct Book Now handler from any product card
  const handleBookNow = (product: CatalogProduct, quantity: number) => {
    setSelectedProduct(product);
    setSelectedQuantity(quantity);
    setErrors({});
    setIsBookingModalOpen(true);
  };

  // Handle form changes in the modal
  const handleCustomerChange = (field: keyof CustomerDetailsType, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Validate required details
  const validateOrder = (): boolean => {
    const newErrors: FormErrors = {};

    if (!customer.location.trim()) {
      newErrors.location = 'Please enter your delivery location or address.';
    }

    if (!customer.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!customer.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your WhatsApp phone number.';
    } else if (customer.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit and redirect to WhatsApp
  const handleModalSubmit = () => {
    if (!selectedProduct) return;

    const isValid = validateOrder();
    if (!isValid) return;

    // Format the WhatsApp message with exact product, quantity, location and details
    const message = `Hello JMD Enterprises,

I would like to place an order.

Product Details:
• Product: ${selectedProduct.name}
• Category: ${selectedProduct.category}
• Quantity Needed: ${selectedQuantity}

Customization / Branding:
• Name/Text to Print/Engrave: ${customer.customNameToPrint.trim() || 'To be provided / N/A'}
• Company / Brand Name: ${customer.companyName.trim() || 'N/A'}

Customer & Delivery Details:
• Delivery Location: ${customer.location.trim()}
• Customer Name: ${customer.fullName.trim()}
• WhatsApp Phone: ${customer.phoneNumber.trim()}

Additional Notes:
${customer.additionalNotes.trim() || 'None'}

Please share the pricing and delivery details.
Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.cleanPhone}?text=${encodedText}`;

    // Close the modal
    setIsBookingModalOpen(false);

    // Open WhatsApp in a new tab/window
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased flex flex-col justify-between selection:bg-emerald-500/20 selection:text-emerald-900">
      <div>
        {/* Header with brand and WhatsApp contact */}
        <Header />

        <main>
          {/* Hero Section */}
          <Hero onShopClick={scrollToCatalog} />

          {/* Product Catalog with Quantity selection & "Book Now" */}
          <ProductCatalog
            products={PRODUCTS}
            onBookNow={handleBookNow}
          />
        </main>
      </div>

      {/* Simple Clean Footer */}
      <SimpleFooter />

      {/* Direct Order Details & Location Modal before WhatsApp redirect */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        product={selectedProduct}
        quantity={selectedQuantity}
        customer={customer}
        errors={errors}
        onChange={handleCustomerChange}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}
