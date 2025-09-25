import type { NavItem, Service, Vehicle, Testimonial } from './types';
import { Globe, DollarSign, Ship, Award, ShieldCheck, Users } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const navItems: NavItem[] = [
  { label: 'Inventory', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
];

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    description: 'We source vehicles from around the world to find the perfect match for your needs.',
  },
  {
    icon: DollarSign,
    title: 'Flexible Financing',
    description: 'Our finance experts work with you to create a customized payment plan that fits your budget.',
  },
  {
    icon: Ship,
    title: 'Worldwide Shipping',
    description: 'Secure and reliable shipping to your doorstep, no matter where you are.',
  },
  {
    icon: Award,
    title: 'Quality Inspection',
    description: 'Every vehicle undergoes a rigorous multi-point inspection to ensure top quality and safety.',
  },
];

const findImage = (id: string) => {
  const img = PlaceHolderImages.find(p => p.id === id);
  if (!img) throw new Error(`Image with id ${id} not found in placeholder-images.json`);
  return { id: img.id, url: img.imageUrl, hint: img.imageHint };
}

export const featuredVehicles: Vehicle[] = [
  {
    id: '1',
    name: '2024 Apex Phantom',
    price: '$120,000',
    specs: ['3.2s 0-60mph', '580hp', 'AWD'],
    image: findImage('car-1'),
  },
  {
    id: '2',
    name: '2024 Nova-E SUV',
    price: '$85,000',
    specs: ['410-mile range', 'Dual Motor', 'Autopilot'],
    image: findImage('car-2'),
  },
  {
    id: '3',
    name: '1968 Horizon Roadster',
    price: '$250,000',
    specs: ['V8 Engine', 'Fully Restored', 'Show Winner'],
    image: findImage('car-3'),
  },
  {
    id: '4',
    name: '2025 Genesis X Concept',
    price: 'Inquire',
    specs: ['AI Assistant', 'Holographic Display', 'Electric'],
    image: findImage('car-4'),
  },
];

export const whyChooseUsFeatures = [
    {
        icon: Users,
        title: "Expert Team",
        description: "Our passionate team of car enthusiasts and logistics experts are here to guide you every step of the way."
    },
    {
        icon: ShieldCheck,
        title: "Transparent & Secure",
        description: "From pricing to paperwork, we ensure every transaction is clear, secure, and hassle-free."
    },
    {
        icon: Globe,
        title: "Worldwide Network",
        description: "Leverage our extensive global network to access an unparalleled selection of vehicles."
    }
];


export const testimonials: Testimonial[] = [
  {
    quote: "Global Auto Connect made my dream of owning a rare European classic a reality. The process was seamless, and their team was incredibly professional. I couldn't be happier!",
    author: 'Alex Johnson',
    title: 'Classic Car Collector',
    avatar: findImage('testimonial-avatar-1'),
  },
];
