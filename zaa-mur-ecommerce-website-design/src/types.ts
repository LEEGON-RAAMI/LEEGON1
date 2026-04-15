export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  specs: string[];
  customizable: boolean;
  colors: { name: string; hex: string }[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  engraving?: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}
