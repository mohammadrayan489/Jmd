import { CatalogProduct } from '../types';

export const BUSINESS_INFO = {
  name: "JMD Enterprises",
  shortTagline: "Print Your Imagination",
  fullTagline: "Custom Name & Brand Merchandise Printing",
  subtitle: "Specialists in custom name engraved bottles, pens, t-shirts, caps, diaries, books, keychains, badges & mugs for brands and professionals.",
  taglineFeatures: "Custom Name Engraving • Bulk Brand Orders • Pan-India Delivery",
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
  "Bottles",
  "Pens",
  "T-Shirts",
  "Caps",
  "Diaries & Books",
  "Keychains & Badges",
  "Cups & Mugs"
] as const;

export const PRODUCTS: CatalogProduct[] = [
  // --- BOTTLES ---
  {
    id: "bottle-temp-led",
    name: "Custom Name Smart LED Temperature Bottle (500ml)",
    description: "Premium matte finish vacuum insulated flask with touch LED temperature display. Laser-engraved with your custom name or company logo.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop",
    category: "Bottles",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: "bottle-matte-black",
    name: "Matte Black Stainless Steel Thermal Bottle",
    description: "Double-wall 304 food-grade stainless steel bottle. Crisp permanent silver/gold laser engraving of custom names and brand designs.",
    image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?q=80&w=800&auto=format&fit=crop",
    category: "Bottles",
    price: null,
    priceType: "on_request",
    available: true
  },

  // --- PENS ---
  {
    id: "pen-metallic-roller",
    name: "Luxury Metallic Rollerball Pen with Engraved Name",
    description: "Weighted brass metallic body with gold trim. High-precision laser engraving of individual names or company brand title.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    category: "Pens",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: "pen-matte-executive",
    name: "Executive Matte Black Ballpoint Pen with Custom Name",
    description: "Sleek soft-touch matte finish with smooth German ink cartridge. Permanent silver laser engraved personalization for corporate teams.",
    image: "https://images.unsplash.com/photo-1585336261026-77cc7c22e496?q=80&w=800&auto=format&fit=crop",
    category: "Pens",
    price: null,
    priceType: "on_request",
    available: true
  },

  // --- T-SHIRTS ---
  {
    id: "tshirt-bio-wash-round",
    name: "Custom Printed Premium Cotton T-Shirt",
    description: "100% combed bio-washed 210 GSM cotton. High-definition screen, vinyl, or DTF printing for custom names, quotes, and company logos.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    category: "T-Shirts",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: "tshirt-collar-polo",
    name: "Corporate Collar Polo T-Shirt with Embroidered Name",
    description: "Breathable heavy-knit pique cotton with reinforced collar. Premium computer embroidery of brand logo on chest and custom name on sleeve.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
    category: "T-Shirts",
    price: null,
    priceType: "on_request",
    available: true
  },

  // --- CAPS ---
  {
    id: "cap-structured-baseball",
    name: "Custom Name Embroidered Baseball Cap",
    description: "6-panel structured premium twill cotton cap with adjustable metal clasp. 3D high-density embroidery of your custom name and brand.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    category: "Caps",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: "cap-snapback-corporate",
    name: "Matte Black Corporate Snapback Cap with Logo",
    description: "Flat-brim urban and corporate profile cap with custom embroidered team name or high-frequency heat transfer vinyl branding.",
    image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=800&auto=format&fit=crop",
    category: "Caps",
    price: null,
    priceType: "on_request",
    available: true
  },

  // --- DIARIES & BOOKS ---
  {
    id: "diary-leatherette-deboss",
    name: "Custom Debossed Name Executive Diary",
    description: "Premium PU leatherette hardbound diary with magnetic clasp, pen loop, and 192 ruled ivory pages. Custom name debossed or gold foil stamped.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    category: "Diaries & Books",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: "book-custom-notebook",
    name: "Custom Brand Notebook & Ruled Book",
    description: "Fully customized corporate cover notebook with your brand identity, employee name section, ribbon bookmark, and calendar planner.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    category: "Diaries & Books",
    price: null,
    priceType: "on_request",
    available: true
  },

  // --- KEYCHAINS & BADGES ---
  {
    id: "keychain-laser-metal",
    name: "Laser-Engraved Metal & Leather Name Keychain",
    description: "Solid zinc alloy and genuine leatherette keychain. Razor-sharp laser engraving with custom names, phone numbers, or corporate emblem.",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?q=80&w=800&auto=format&fit=crop",
    category: "Keychains & Badges",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: "badge-magnetic-corporate",
    name: "Custom Metallic Staff Name & Logo Badges",
    description: "Brushed silver or golden metal name plates with strong dual neodymium magnets. UV printed with crisp individual employee names and designations.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
    category: "Keychains & Badges",
    price: null,
    priceType: "on_request",
    available: true
  },

  // --- CUPS & MUGS ---
  {
    id: "mug-ceramic-custom-name",
    name: "Personalized Ceramic Coffee Mug with Name & Art",
    description: "350ml glossy ceramic coffee mug with fade-proof sublimation printing. Personalized with individual names, quotes, or custom brand artwork.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    category: "Cups & Mugs",
    price: null,
    priceType: "on_request",
    available: true
  },
  {
    id: "cup-thermal-travel-mug",
    name: "Custom Insulated Travel Cup with Spill Lid",
    description: "Stainless steel double-walled coffee tumbler mug with spill-proof sipper lid. Permanent laser etched name or company logo.",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=800&auto=format&fit=crop",
    category: "Cups & Mugs",
    price: null,
    priceType: "on_request",
    available: true
  }
];
