import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'zm-01',
    name: 'Nomad’s Obsidian Trench',
    price: 850,
    category: 'Outerwear',
    description: 'A heavyweight dual-layered trench crafted from high-density tech fibers, finished with hand-stitched nomadic border motifs.',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800',
    specs: ['Tech-Waterproof blend', 'Handcrafted trim lines', 'Over-dimensional fit'],
    customizable: true,
    colors: [
      { name: 'Obsidian', hex: '#111111' },
      { name: 'Garnet', hex: '#58181F' }
    ]
  },
  {
    id: 'zm-02',
    name: 'Quetta Guild Velvet Bomber',
    price: 520,
    category: 'Outerwear',
    description: 'Crushed charcoal velvet exterior featuring the ZAA MUR sigil woven in silver threading. A nod to local Quetta grandeur.',
    image: 'https://images.unsplash.com/photo-1551028711-0305329d818a?auto=format&fit=crop&q=80&w=800',
    specs: ['Velvet-Cotton fusion', 'Signature back engraving', 'Limited drop'],
    customizable: true,
    colors: [
      { name: 'Charcoal', hex: '#262626' },
      { name: 'Deep Sage', hex: '#2D3B36' }
    ]
  },
  {
    id: 'zm-03',
    name: 'Monolith Combat Boots',
    price: 640,
    category: 'Heritage Footwear',
    description: 'Structured from vulcanized thick-tread rubber and pristine calfskin. Resilient against the elements yet poised for runways.',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
    specs: ['Full-grain calfskin', 'Modular sole setup', 'Reinforced steel toe caps'],
    customizable: false,
    colors: [
      { name: 'Pitch Black', hex: '#0a0a0a' }
    ]
  },
  {
    id: 'zm-04',
    name: 'Brewery Road Silk Scarf',
    price: 190,
    category: 'Accessories',
    description: 'Draped in opulent silk featuring geometric patterns inspired by the rugged mountains surrounding Brewery Road, Quetta.',
    image: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&q=80&w=800',
    specs: ['100% Pure Silk', 'Golden thread borders', 'Hypoallergenic dyes'],
    customizable: false,
    colors: [
      { name: 'Sunset Amber', hex: '#D97706' },
      { name: 'Alpine Teal', hex: '#0F766E' }
    ]
  },
  {
    id: 'zm-05',
    name: 'Tribal Mirrorwork Breastplate',
    price: 1100,
    category: 'Avant-Garde Jewelry',
    description: 'Dazzling mirrored centerpieces woven into highly architectural silver hardware. Fits like body armor.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    specs: ['Sterling silver base', 'Fitted shoulder harness', 'Cultural mirror integration'],
    customizable: true,
    colors: [
      { name: 'Polished Silver', hex: '#E5E7EB' }
    ]
  },
  {
    id: 'zm-06',
    name: 'Obsidian Expedition Duffel',
    price: 430,
    category: 'Accessories',
    description: 'Heavy duty waterproof canvas accented with Balochi weave straps. Your ultimate luxury travel partner.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    specs: ['Abrasion-resistant canvas', 'Italian leather accents', '50L Capacity'],
    customizable: true,
    colors: [
      { name: 'Nox Black', hex: '#1C1C1C' },
      { name: 'Arid Sand', hex: '#C2B280' }
    ]
  }
];
export const categories = ['All', 'Outerwear', 'Heritage Footwear', 'Accessories', 'Avant-Garde Jewelry'];
