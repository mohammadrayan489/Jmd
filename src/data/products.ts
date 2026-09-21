import { CatalogProduct } from '../types';

export const BUSINESS_INFO = {
  name: "JMD Enterprises",
  shortTagline: "Premium Corporate Gifting",
  fullTagline: "Premium Corporate Gifting Solutions",
  subtitle: "Browse our products, choose your quantity and send your order directly to JMD Enterprises on WhatsApp.",
  taglineFeatures: "Bulk Orders • Custom Branding • Pan-India Delivery",
  phone: "+91 97138 76808",
  cleanPhone: "919713876808",
  instagram: "@jmd_enterprises_gwl",
  instagramUrl: "https://www.instagram.com/jmd_enterprises_gwl/",
  address: "Gwalior, Madhya Pradesh — 474002",
  city: "Gwalior",
  state: "Madhya Pradesh",
  pincode: "474002"
};

export const CATEGORIES = [
  "All",
  "Corporate Gifts",
  "Apparel",
  "Drinkware",
  "Stationery",
  "Accessories"
] as const;

export const PRODUCTS: CatalogProduct[] = [
  {
    id: 1,
    name: "Executive Signature Gift Box",
    description: "Curated matte black luxury hamper box with custom foil stamping and premium items.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    category: "Corporate Gifts",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 2,
    name: "Custom Combed Cotton Polo T-Shirt",
    description: "Heavyweight 240 GSM breathable pique cotton with custom embroidery or screen branding.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    category: "Apparel",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 3,
    name: "Thermal Matte Vacuum Flask (500ml)",
    description: "Double-wall food-grade stainless steel bottle with laser engraving and temperature retention.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop",
    category: "Drinkware",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 4,
    name: "Artisan Leather Executive Notebook",
    description: "Hardbound vegan leather journal with 100 GSM ivory paper, ribbon marker and debossed logo.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    category: "Stationery",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 5,
    name: "VIP Welcome Hamper Box",
    description: "All-in-one employee onboarding kit with branded merchandise, greeting card & luxury finish.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    category: "Corporate Gifts",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 6,
    name: "Premium Corporate Fleece Hoodie",
    description: "Ultra-soft brushed fleece pullover or zip hoodie with high-density team logo branding.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    category: "Apparel",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 7,
    name: "Ceramic Matte Coffee Mug with Cork Base",
    description: "Insulated natural cork bottom mug with spill-resistant lid and custom corporate print.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    category: "Drinkware",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 8,
    name: "Metal Rollerball & Ballpoint Pen Set",
    description: "Weighted brass body pens with smooth German ink cartridge and laser engraved branding.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    category: "Stationery",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 9,
    name: "Fast Qi Wireless Charging Stand",
    description: "15W aluminum desktop fast charger with dual coils and LED ambient indicator.",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?q=80&w=800&auto=format&fit=crop",
    category: "Accessories",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 10,
    name: "Luxury Desk Organizer & Mat Set",
    description: "Vegan leather dual-side desk pad with matching pen holder and phone docking stand.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    category: "Accessories",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 11,
    name: "Festive Celebration Gift Hamper",
    description: "Handcrafted festive gift basket with branded goodies, dry fruits canister & customized wrap.",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop",
    category: "Corporate Gifts",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: 12,
    name: "Stainless Steel Smart LED Temperature Flask",
    description: "Touch LED display cap showing real-time liquid temperature with leakproof seal.",
    image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?q=80&w=800&auto=format&fit=crop",
    category: "Drinkware",
    price: null,
    priceType: "on_request",
    available: true
  }
];
