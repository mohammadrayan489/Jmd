export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  image: string;
  secondaryImages?: string[];
  customizationOptions: string[];
  minimumQuantity: string;
  featured: boolean;
  active: boolean;
  leadTime?: string;
  idealFor?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  ctaText: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  recommendedProducts: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  imageUrl: string;
  likes: number;
  comments: number;
  tags: string[];
}

export interface QuoteFormData {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  requirement: string;
  quantity: string;
  deliveryLocation: string;
  message: string;
}

export interface QuoteFormErrors {
  name?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  requirement?: string;
  quantity?: string;
  deliveryLocation?: string;
  message?: string;
}
