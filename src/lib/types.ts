import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Vehicle = {
  id: string;
  name: string;
  price: string;
  specs: string[];
  image: {
    id: string;
    url: string;
    hint: string;
  };
};

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  avatar: {
    id: string;
    url: string;
    hint: string;
  };
};
