export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  stock?: number;
  category: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Earbuds Pro Max',
    price: 2999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 234,
    badge: 'TRENDING',
    stock: 7,
    category: 'Wireless Earbuds',
    description: 'High-quality wireless earbuds with crystal clear sound and long battery life',
    features: [
      'Active Noise Cancellation',
      '30 Hours Battery Life',
      'IPX7 Water Resistant',
      'Bluetooth 5.3',
      'Touch Controls'
    ]
  },
  {
    id: 2,
    name: '30000mAh Fast Charging Power Bank',
    price: 3499,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 189,
    badge: 'BEST SELLER',
    stock: 5,
    category: 'Power Banks',
    description: 'High capacity power bank with fast charging support for all devices',
    features: [
      '30000mAh Capacity',
      'PD 20W Fast Charging',
      'Multiple Ports (USB-C + USB-A)',
      'LED Display',
      'Premium Build Quality'
    ]
  },
  {
    id: 3,
    name: 'USB-C Fast Charging Cable 2M',
    price: 599,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 456,
    stock: 15,
    category: 'Chargers & Cables',
    description: 'Durable fast charging cable with braided design',
    features: [
      '2 Meter Length',
      '60W Fast Charging',
      'Braided Design',
      'Data Transfer Support',
      'Universal Compatibility'
    ]
  },
  {
    id: 4,
    name: 'Phone Ring Holder with Stand',
    price: 399,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 312,
    badge: 'HOT DEAL',
    stock: 8,
    category: 'Mobile Accessories',
    description: '360° rotating ring holder for secure grip and hands-free viewing',
    features: [
      '360° Rotation',
      'Strong Adhesive',
      'Universal Fit',
      'Doubles as Stand',
      'Premium Metal Build'
    ]
  },
  {
    id: 5,
    name: 'Magnetic Car Phone Mount',
    price: 899,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 167,
    stock: 12,
    category: 'Mobile Accessories',
    description: 'Strong magnetic car mount for safe phone navigation',
    features: [
      'Strong Magnetic Hold',
      'Air Vent Clip',
      '360° Adjustable',
      'One-Hand Operation',
      'Universal Compatibility'
    ]
  },
  {
    id: 6,
    name: 'Premium Screen Protector Glass',
    price: 499,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 289,
    stock: 20,
    category: 'Mobile Accessories',
    description: 'Tempered glass screen protector with oleophobic coating',
    features: [
      '9H Hardness',
      'Crystal Clear',
      'Bubble-Free Installation',
      'Oleophobic Coating',
      'Case Friendly'
    ]
  },
  {
    id: 7,
    name: 'Bluetooth Speaker Portable',
    price: 2499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 145,
    badge: 'NEW',
    stock: 9,
    category: 'Mobile Accessories',
    description: 'Portable wireless speaker with deep bass and long battery',
    features: [
      '20W Powerful Sound',
      '12 Hours Playtime',
      'IPX6 Waterproof',
      'Bluetooth 5.0',
      'Built-in Microphone'
    ]
  },
  {
    id: 8,
    name: '65W GaN Fast Charger Adapter',
    price: 1999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1591290619762-c588f23e8fc6?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 201,
    stock: 6,
    category: 'Chargers & Cables',
    description: 'Compact GaN charger with multiple port fast charging',
    features: [
      '65W Power Delivery',
      'GaN Technology',
      '3 Ports (2 USB-C + 1 USB-A)',
      'Compact Design',
      'Universal Compatibility'
    ]
  },
  {
    id: 9,
    name: 'TWS Gaming Earbuds with Low Latency',
    price: 3499,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 178,
    badge: 'TRENDING',
    stock: 4,
    category: 'Wireless Earbuds',
    description: 'Gaming earbuds with ultra-low latency and RGB lighting',
    features: [
      '40ms Low Latency',
      'RGB Gaming Lights',
      '25 Hours Battery',
      'Gaming Mode',
      'Premium Sound Quality'
    ]
  },
  {
    id: 10,
    name: '20000mAh Solar Power Bank',
    price: 2799,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 156,
    stock: 11,
    category: 'Power Banks',
    description: 'Solar charging power bank for outdoor adventures',
    features: [
      '20000mAh Capacity',
      'Solar Charging Panel',
      'Dual USB Ports',
      'LED Flashlight',
      'Waterproof Design'
    ]
  },
  {
    id: 11,
    name: 'Multi-Device Wireless Charger Stand',
    price: 1899,
    originalPrice: 3799,
    image: 'https://images.unsplash.com/photo-1591290619762-c588f23e8fc6?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 134,
    stock: 8,
    category: 'Chargers & Cables',
    description: '3-in-1 wireless charging station for phone, watch, and earbuds',
    features: [
      '3-in-1 Charging',
      '15W Fast Wireless',
      'Foldable Design',
      'LED Indicator',
      'Safe Charging Protection'
    ]
  },
  {
    id: 12,
    name: 'Premium Phone Case with MagSafe',
    price: 1299,
    originalPrice: 2599,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 267,
    stock: 14,
    category: 'Mobile Accessories',
    description: 'Protective case with built-in MagSafe technology',
    features: [
      'MagSafe Compatible',
      'Military Grade Protection',
      'Slim Design',
      'Raised Edges',
      'Premium Materials'
    ]
  }
];

export const categories = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    slug: 'wireless-earbuds',
    count: products.filter(p => p.category === 'Wireless Earbuds').length
  },
  {
    id: 2,
    name: 'Power Banks',
    slug: 'power-banks',
    count: products.filter(p => p.category === 'Power Banks').length
  },
  {
    id: 3,
    name: 'Chargers & Cables',
    slug: 'chargers-cables',
    count: products.filter(p => p.category === 'Chargers & Cables').length
  },
  {
    id: 4,
    name: 'Mobile Accessories',
    slug: 'mobile-accessories',
    count: products.filter(p => p.category === 'Mobile Accessories').length
  }
];
