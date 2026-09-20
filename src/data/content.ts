import {
  Product,
  ProductCategory,
  SolutionItem,
  ProcessStep,
  WhyUsPoint,
  UseCaseItem,
  FaqItem,
} from '../types';
import { IMAGES } from './images';

export const BUSINESS_INFO = {
  name: "JMD Enterprises",
  shortTagline: "Premium Corporate Gifting Solutions + Custom Apparel",
  tagline: "Elevating your brand, one gift at a time. Bulk orders & Pan-India delivery.",
  heroHeadline: "Premium Corporate Gifting, Made Memorable.",
  heroSubheadline: "Thoughtfully curated corporate gifts, custom apparel and branded solutions designed to make your business stand out.",
  location: {
    city: "Gwalior",
    state: "Madhya Pradesh",
    pincode: "474002",
    country: "India",
    addressLine: "Gwalior, Madhya Pradesh, India — 474002",
    serviceArea: "Pan-India Delivery & Logistics Support"
  },
  contact: {
    phone: "+91 97138 76808",
    phoneClean: "919713876808",
    whatsappUrl: "https://wa.me/919713876808?text=Hello%20JMD%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20corporate%20gifting%20solutions.",
    instagramHandle: "jmd_enterprises_gwl",
    instagramUrl: "https://www.instagram.com/jmd_enterprises_gwl/",
    responseTime: "Typically replies within 2-4 business hours on WhatsApp",
  },
  stats: {
    socialFollowers: "4,500+",
    socialPosts: "61",
    deliveryCoverage: "Pan-India",
    bulkCapacity: "Bulk Orders",
  }
};

export const TRUST_METRICS = [
  {
    id: "metric-1",
    label: "Social Community",
    value: "4,500+",
    subtext: "Followers on Instagram",
    numericTarget: 4500,
    suffix: "+"
  },
  {
    id: "metric-2",
    label: "Bulk Orders",
    value: "High Capacity",
    subtext: "Flexible batch volumes",
    badge: "Scale Ready"
  },
  {
    id: "metric-3",
    label: "Custom Branding",
    value: "Precision Craft",
    subtext: "Embroidery, Laser & Deboss",
    badge: "Bespoke"
  },
  {
    id: "metric-4",
    label: "Pan-India Delivery",
    value: "Direct to Doorstep",
    subtext: "Safe & insured logistics",
    badge: "Nationwide"
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "sol-1",
    number: "01",
    title: "Corporate Gifting",
    description: "Premium gifting solutions designed for clients, employees, partners and special occasions.",
    iconName: "Gift",
    features: [
      "Curated executive boxes",
      "VIP client appreciation hampers",
      "Festive and anniversary packaging"
    ],
    ctaText: "Enquire Corporate Gifts"
  },
  {
    id: "sol-2",
    number: "02",
    title: "Custom Apparel",
    description: "Branded apparel designed around your team's identity, campaigns and events.",
    iconName: "Shirt",
    features: [
      "Custom polo t-shirts & crewnecks",
      "Corporate jackets & hoodies",
      "High-density embroidery & DTF prints"
    ],
    ctaText: "Explore Custom Apparel"
  },
  {
    id: "sol-3",
    number: "03",
    title: "Custom Branding",
    description: "Turn everyday products into branded experiences with customized designs and packaging.",
    iconName: "Sparkles",
    features: [
      "Laser etching & UV color print",
      "Leather foil debossing",
      "Custom inserts & brand ribbons"
    ],
    ctaText: "Discuss Branding Options"
  },
  {
    id: "sol-4",
    number: "04",
    title: "Bulk Orders",
    description: "Reliable bulk gifting solutions for companies, events, celebrations and campaigns.",
    iconName: "Boxes",
    features: [
      "Tiered corporate quantity pricing",
      "Quality assurance at volume",
      "Staggered milestone dispatches"
    ],
    ctaText: "Plan Bulk Order"
  },
  {
    id: "sol-5",
    number: "05",
    title: "Employee Gifting",
    description: "Thoughtful gift solutions for onboarding, milestones, festivals and employee appreciation.",
    iconName: "Users",
    features: [
      "Day-one new hire welcome kits",
      "Work anniversary commemorations",
      "Diwali & festive employee hampers"
    ],
    ctaText: "Build Employee Kits"
  },
  {
    id: "sol-6",
    number: "06",
    title: "Event & Promotional Merchandise",
    description: "Custom merchandise that helps your brand stay memorable before, during and after every event.",
    iconName: "Award",
    features: [
      "Conference delegate swag bags",
      "Product launch memorabilia",
      "Branded exhibition giveaways"
    ],
    ctaText: "Get Event Merchandise"
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "all", name: "All Collections", description: "Browse our complete corporate gifting catalog", count: 9 },
  { id: "gift-sets", name: "Corporate Gift Sets", description: "All-in-one curated luxury executive boxes", count: 1 },
  { id: "drinkware", name: "Premium Drinkware", description: "Thermal flasks, smart mugs & stainless bottles", count: 1 },
  { id: "notebooks", name: "Branded Notebooks", description: "Hardbound, soft leather & debossed stationery", count: 1 },
  { id: "apparel", name: "Custom Apparel", description: "Polo t-shirts, corporate vests & team hoodies", count: 1 },
  { id: "tech", name: "Tech Accessories", description: "Wireless chargers, powerbanks & bluetooth speakers", count: 1 },
  { id: "desk", name: "Desk Accessories", description: "Organizers, metal pens, leather mats & clocks", count: 1 },
  { id: "employee-gifts", name: "Employee Gifts", description: "Onboarding packs & recognition awards", count: 1 },
  { id: "event-merch", name: "Event Merchandise", description: "Exhibition kits, tote bags & lanyards", count: 1 },
  { id: "hampers", name: "Customized Hampers", description: "Gourmet, festive & celebratory hamper boxes", count: 1 }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Executive Signature Gift Box",
    category: "Corporate Gift Sets",
    categoryId: "gift-sets",
    description: "A handcrafted matte black gift box featuring debossed leather journal, brass metal ballpoint, vacuum temperature flask, and brand identity card.",
    image: IMAGES.products.giftSets,
    customizationOptions: ["Foil stamped logo on box", "Laser engraving on flask & pen", "Personalized note card"],
    minimumQuantity: "25 Units",
    featured: true,
    active: true,
    leadTime: "7-10 Days",
    idealFor: "VIP Clients, Leadership Teams, Annual Gifts"
  },
  {
    id: "prod-2",
    name: "Thermal Matte Smart Insulated Flask",
    category: "Premium Drinkware",
    categoryId: "drinkware",
    description: "Double-wall food grade 304 stainless steel flask keeping beverages 24h cold or 12h hot, with sleek matte finish and spill-proof cap.",
    image: IMAGES.products.drinkware,
    customizationOptions: ["Precision UV color print", "Laser etching", "Custom cylinder box"],
    minimumQuantity: "50 Units",
    featured: true,
    active: true,
    leadTime: "5-7 Days",
    idealFor: "Employee Welcome, Fitness Rewards, Daily Office"
  },
  {
    id: "prod-3",
    name: "Artisan Debossed Executive Journal",
    category: "Branded Notebooks",
    categoryId: "notebooks",
    description: "Premium vegan leather hardbound journal with 100 GSM acid-free ivory pages, satin ribbon marker, and integrated pen loop.",
    image: IMAGES.products.notebooks,
    customizationOptions: ["Blind deboss or gold foil logo", "Custom watermark inner pages", "Bespoke elastic band"],
    minimumQuantity: "50 Units",
    featured: false,
    active: true,
    leadTime: "6-8 Days",
    idealFor: "Conferences, Planning Retreats, Board Meetings"
  },
  {
    id: "prod-4",
    name: "Premium Combed Cotton Corporate Polo",
    category: "Custom Apparel",
    categoryId: "apparel",
    description: "240 GSM breathable honeycomb pique cotton polo tailored for all-day comfort with ribbed collar and reinforced placket.",
    image: IMAGES.products.apparel,
    customizationOptions: ["Chest embroidery badge", "Sleeve brand crest", "Custom woven neck label"],
    minimumQuantity: "30 Units",
    featured: true,
    active: true,
    leadTime: "8-12 Days",
    idealFor: "Uniforms, Offsite Retreats, Brand Ambassadors"
  },
  {
    id: "prod-5",
    name: "Minimalist Fast Qi Wireless Charging Pad",
    category: "Tech Accessories",
    categoryId: "tech",
    description: "15W aluminum alloy fast wireless charging pad with LED ambient ring and anti-slip matte silicone surface.",
    image: IMAGES.products.tech,
    customizationOptions: ["Full surface UV logo print", "Laser engraved metallic edge", "Custom sleeve box"],
    minimumQuantity: "35 Units",
    featured: true,
    active: true,
    leadTime: "7-9 Days",
    idealFor: "Tech Summits, Modern Workspaces, Client Tech Kits"
  },
  {
    id: "prod-6",
    name: "Artisan Leatherette Desk Mat & Organizer",
    category: "Desk Accessories",
    categoryId: "desk",
    description: "Dual-sided water-resistant desk blotter (80x40cm) crafted from premium PU leather with smooth mouse-glide finish and cable organizer.",
    image: IMAGES.products.desk,
    customizationOptions: ["Corner debossed company emblem", "Color stitching match", "Matching coaster pair"],
    minimumQuantity: "30 Units",
    featured: false,
    active: true,
    leadTime: "5-7 Days",
    idealFor: "Workstation Makeovers, Executive Desks"
  },
  {
    id: "prod-7",
    name: "Day-One Employee Onboarding Welcome Kit",
    category: "Employee Gifts",
    categoryId: "employee-gifts",
    description: "Everything a new hire needs: custom branded hoodie or polo, thermal bottle, premium notebook, customized pen, and welcome letter.",
    image: IMAGES.products.employeeGifts,
    customizationOptions: ["Cohesive theme styling", "Personalized employee name tags", "Rigid presentation box"],
    minimumQuantity: "20 Units",
    featured: true,
    active: true,
    leadTime: "8-12 Days",
    idealFor: "HR Teams, Growing Startups, Enterprise Onboarding"
  },
  {
    id: "prod-8",
    name: "Eco Canvas Conference Delegate Tote & Swag",
    category: "Event Merchandise",
    categoryId: "event-merch",
    description: "Heavy-duty 12oz natural cotton canvas tote paired with customized badge lanyards, metal badges, and presentation folio.",
    image: IMAGES.products.eventMerch,
    customizationOptions: ["Screen or digital screen print", "Reinforced custom strap", "Pocket zip addition"],
    minimumQuantity: "100 Units",
    featured: false,
    active: true,
    leadTime: "6-10 Days",
    idealFor: "Expos, Annual General Meetings, Trade Shows"
  },
  {
    id: "prod-9",
    name: "Celebration Artisan Gourmet & Festive Hamper",
    category: "Customized Hampers",
    categoryId: "hampers",
    description: "Luxurious keepsake hamper with golden magnetic clasp, artisanal treats, brass diya or aromatic candle, and customized corporate greetings.",
    image: IMAGES.products.hampers,
    customizationOptions: ["Customized festive packaging", "Gold hot foil branding", "Bespoke contents selection"],
    minimumQuantity: "25 Units",
    featured: true,
    active: true,
    leadTime: "7-12 Days",
    idealFor: "Diwali, New Year, Milestone Milestones"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description: "Share your gifting purpose, target recipient, quantity requirements, budget framework, and timeline.",
    detail: "We listen to your brand values and specific event goals to outline matching curation ideas."
  },
  {
    step: "02",
    title: "Choose Your Products",
    description: "Select from our curated catalog of premium gift boxes, customized drinkware, notebooks, apparel, or bespoke tech.",
    detail: "Review high-quality sample mockups and material options tailored to your company's aesthetic."
  },
  {
    step: "03",
    title: "Customize & Brand",
    description: "We prepare digital proofs of your logo and branding across your selected merchandise with precision finishes.",
    detail: "Choose between laser engraving, embroidery, foil debossing, and custom gift box packaging."
  },
  {
    step: "04",
    title: "Approve & Deliver",
    description: "Once your proofs are approved, we manufacture, perform strict quality checks, and dispatch with Pan-India tracking.",
    detail: "Direct, secure shipment to your headquarters, event venue, or distributed to remote employee addresses."
  }
];

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    id: "why-1",
    title: "Premium Product Selection",
    description: "Carefully vetted materials, durable finishes, and modern aesthetics designed to represent your brand with genuine prestige.",
    iconName: "ShieldCheck"
  },
  {
    id: "why-2",
    title: "Custom Branding",
    description: "Laser etching, high-density embroidery, UV prints, and foil debossing executed with exact pantone matching and zero compromise.",
    iconName: "Palette"
  },
  {
    id: "why-3",
    title: "Bulk Order Support",
    description: "Scalable fulfillment infrastructure capable of handling large enterprise orders with structured quality checks and milestone updates.",
    iconName: "Layers"
  },
  {
    id: "why-4",
    title: "Pan-India Delivery",
    description: "Reliable logistics network shipping from our Gwalior center directly to offices, conference centers, or employee doorsteps across India.",
    iconName: "Truck"
  },
  {
    id: "why-5",
    title: "Personalized Solutions",
    description: "Flexible gift combinations designed to align with your brand guidelines, festive occasions, or unique marketing campaign briefs.",
    iconName: "Compass"
  },
  {
    id: "why-6",
    title: "Business-Focused Service",
    description: "Dedicated account support, prompt digital quotes, GST-compliant invoicing, and proactive WhatsApp communication throughout.",
    iconName: "Briefcase"
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: "uc-1",
    title: "Employee Onboarding",
    description: "Make day one unforgettable with curated welcome boxes, team apparel, and workspace essentials.",
    image: IMAGES.useCases.onboarding,
    recommendedProducts: "Welcome Kits • Polos • Drinkware"
  },
  {
    id: "uc-2",
    title: "Corporate Events",
    description: "Elevate annual conferences, leadership offsites, and summit delegate experiences with branded kits.",
    image: IMAGES.useCases.events,
    recommendedProducts: "Lanyards • Tote Bags • Tech Sets"
  },
  {
    id: "uc-3",
    title: "Client Appreciation",
    description: "Strengthen high-value business relationships with tasteful executive hampers and personalized gifts.",
    image: IMAGES.useCases.clientAppreciation,
    recommendedProducts: "Luxury Gift Sets • Leather Goods"
  },
  {
    id: "uc-4",
    title: "Festival Gifting",
    description: "Celebrate Diwali, New Year, and Indian festive traditions with culturally elegant corporate hampers.",
    image: IMAGES.useCases.festivals,
    recommendedProducts: "Festive Hampers • Sweets Boxes"
  },
  {
    id: "uc-5",
    title: "Annual Celebrations",
    description: "Commemorate foundation days, company milestones, and long-service awards with lasting honors.",
    image: IMAGES.useCases.celebrations,
    recommendedProducts: "Commemorative Keepsakes • Flasks"
  },
  {
    id: "uc-6",
    title: "Brand Promotions",
    description: "Distribute memorable brand assets during product launches, roadshows, and marketing campaigns.",
    image: IMAGES.useCases.promotions,
    recommendedProducts: "Custom Tees • Caps • Keychains"
  },
  {
    id: "uc-7",
    title: "Team Merchandise",
    description: "Build team cohesion and internal culture with premium customized polo shirts, hoodies, and jackets.",
    image: IMAGES.useCases.teamMerch,
    recommendedProducts: "Embroidered Hoodies • Corporate Polos"
  },
  {
    id: "uc-8",
    title: "Special Occasions",
    description: "Bespoke gifting for executive speaker thank-yous, partnership milestones, and shareholder meetings.",
    image: IMAGES.useCases.specialOccasions,
    recommendedProducts: "Handcrafted Wood & Metal Keepsakes"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do you handle bulk corporate orders?",
    answer: "Yes, JMD Enterprises specializes in bulk corporate orders. We fulfill volume requirements for corporate gifting, team apparel, and promotional merchandise with tiered quantity support and thorough quality inspection before dispatch."
  },
  {
    question: "Can products be customized with our company branding?",
    answer: "Absolutely. We offer complete custom branding solutions including precision laser engraving, high-density embroidery, debossing on leatherette, foil stamping on gift boxes, and crisp UV color printing according to your brand identity."
  },
  {
    question: "Do you provide custom apparel?",
    answer: "Yes. Our custom apparel line covers premium combed cotton polo t-shirts, crewneck tees, corporate jackets, and hoodies. All apparel can be tailored with company logos via embroidery or durable prints."
  },
  {
    question: "Do you deliver outside Gwalior?",
    answer: "Yes, we provide Pan-India delivery. Based in Gwalior (Madhya Pradesh — 474002), we ship safely to corporate offices, event locations, and warehouses across India through verified courier and freight logistics partners."
  },
  {
    question: "How can I request a quotation?",
    answer: "You can easily request a quote using our website enquiry form below, or by tapping 'Talk to Us on WhatsApp' to directly chat with our team at +91 97138 76808. We will discuss your required products, quantities, and branding to provide a prompt quote."
  },
  {
    question: "Can I discuss a custom gifting requirement?",
    answer: "Certainly. If you have a specific theme, budget range, or custom kit requirement not found in standard catalogs, message us directly. We curate personalized combinations tailored to your occasion and recipient."
  }
];
