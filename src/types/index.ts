export interface CatalogProduct {
  id: number | string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number | null;
  priceType: 'on_request' | 'fixed';
  available: boolean;
}

export interface CartItem {
  product: CatalogProduct;
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  phoneNumber: string;
  companyName: string;
  location: string;
  customNameToPrint: string;
  additionalNotes: string;
}

export interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  location?: string;
  cart?: string;
}
