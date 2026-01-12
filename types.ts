
export interface Service {
  id: string;
  name: string;
  description: string;
  priceStart: string;
  duration: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  dogName: string;
}

export type AppView = 'home' | 'assistant' | 'booking';
