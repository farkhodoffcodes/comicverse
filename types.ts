export interface Comic {
  id: number;
  title: string;
  price: number;
  image: string;
  issue: string;
  category: string;
  description?: string;
}

export interface Plan {
  name: string;
  price: number;
  features: string[];
  color: string;
  textColor: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
}

export type View = 'HOME' | 'CATALOG' | 'MEDIA' | 'CONTACTS';