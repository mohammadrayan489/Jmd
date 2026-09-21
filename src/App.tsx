/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CatalogProduct, CartItem, CustomerDetails as CustomerDetailsType, FormErrors } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { Cart } from './components/Cart';
import { CustomerDetails } from './components/CustomerDetails';
import { OrderSummary } from './components/OrderSummary';
import { WhatsAppOrderButton } from './components/WhatsAppOrderButton';
import { SimpleFooter } from './components/SimpleFooter';
import { FloatingCartButton } from './components/FloatingCartButton';

export default function App() {
  // 1. Cart State
  const [cart, setCart] = useState<CartItem[]>([]);

  // 2. Customer Details State
  const [customer, setCustomer] = useState<CustomerDetailsType>({
    fullName: '',
    phoneNumber: '',
    companyName: '',
    location: '',
    additionalNotes: ''
  });

  // 3. Validation Errors State
  const [errors, setErrors] = useState<FormErrors>({});

  // Add Product to Cart
  const handleAddToCart = (product: CatalogProduct, quantity: number) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [...prevCart, { product, quantity }];
    });

    // Clear cart error if was previously empty
    if (errors.cart) {
      setErrors((prev) => ({ ...prev, cart: undefined }));
    }
  };

  // Update Item Quantity in Cart
  const handleUpdateQuantity = (productId: number | string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove Item from Cart
  const handleRemoveItem = (productId: number | string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Handle Customer Form Field Change
  const handleCustomerChange = (field: keyof CustomerDetailsType, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));

    // Clear field-specific error as user types
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Validation function
  const validateOrder = (): boolean => {
    const newErrors: FormErrors = {};

    if (cart.length === 0) {
      newErrors.cart = 'Please add at least one product.';
    }

    if (!customer.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }

    if (!customer.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number.';
    } else if (customer.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid contact number.';
    }

    if (!customer.location.trim()) {
      newErrors.location = 'Please enter your delivery location.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Scroll helpers
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCart = () => {
    document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased flex flex-col justify-between selection:bg-emerald-500/20 selection:text-emerald-900">
      <div>
        {/* 1. Header */}
        <Header cartItemCount={totalCartCount} onCartClick={scrollToCart} />

        <main>
          {/* 2. Hero / Intro */}
          <Hero onShopClick={scrollToCatalog} />

          {/* 3. Product Catalog */}
          <ProductCatalog products={PRODUCTS} onAddToCart={handleAddToCart} />

          {/* 4. Cart */}
          <Cart
            items={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onBrowseProducts={scrollToCatalog}
          />

          {/* 5. Customer Details */}
          <CustomerDetails
            details={customer}
            errors={errors}
            onChange={handleCustomerChange}
          />

          {/* 6. Order Summary */}
          <OrderSummary items={cart} customer={customer} />

          {/* 7. WhatsApp Order Button */}
          <WhatsAppOrderButton
            items={cart}
            customer={customer}
            onValidate={validateOrder}
            errors={errors}
          />
        </main>
      </div>

      {/* 8. Simple Footer */}
      <SimpleFooter />

      {/* Floating Cart Button (Mobile & Desktop) */}
      <FloatingCartButton itemCount={totalCartCount} onClick={scrollToCart} />
    </div>
  );
}
