export interface Review {
  id: number;
  name: string;
  city: string;
  rating: number;
  comment: string;
  product: string;
  date: Date;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Ahmed Khan',
    city: 'Karachi',
    rating: 5,
    comment: 'Excellent quality earbuds! Sound is crystal clear and battery lasts all day. COD was super convenient.',
    product: 'Wireless Earbuds Pro',
    date: new Date('2026-04-15'),
    verified: true
  },
  {
    id: 2,
    name: 'Fatima Ali',
    city: 'Lahore',
    rating: 5,
    comment: 'Fast delivery and genuine products. The power bank is exactly as described. Highly recommended!',
    product: '20000mAh Power Bank',
    date: new Date('2026-04-18'),
    verified: true
  },
  {
    id: 3,
    name: 'Hassan Raza',
    city: 'Islamabad',
    rating: 4,
    comment: 'Great service and quality. Received my order in just 3 days. Will buy again!',
    product: 'Fast Charging Cable',
    date: new Date('2026-04-22'),
    verified: true
  },
  {
    id: 4,
    name: 'Ayesha Malik',
    city: 'Multan',
    rating: 5,
    comment: 'Best online shopping experience! Products are premium quality and prices are reasonable.',
    product: 'Phone Holder Stand',
    date: new Date('2026-04-25'),
    verified: true
  },
  {
    id: 5,
    name: 'Bilal Ahmed',
    city: 'Faisalabad',
    rating: 5,
    comment: 'Amazing quality and fast shipping. The earbuds are worth every rupee!',
    product: 'TWS Gaming Earbuds',
    date: new Date('2026-04-28'),
    verified: true
  },
  {
    id: 6,
    name: 'Sana Khan',
    city: 'Rawalpindi',
    rating: 4,
    comment: 'Good product quality. Packaging was excellent and delivery was on time.',
    product: 'Solar Power Bank',
    date: new Date('2026-05-01'),
    verified: true
  },
  {
    id: 7,
    name: 'Usman Ali',
    city: 'Peshawar',
    rating: 5,
    comment: 'Very satisfied with my purchase. The charger works perfectly with all my devices.',
    product: '65W GaN Charger',
    date: new Date('2026-05-03'),
    verified: true
  },
  {
    id: 8,
    name: 'Zainab Hussain',
    city: 'Karachi',
    rating: 5,
    comment: 'Excellent seller! Quick response and genuine products. Will definitely order again.',
    product: 'Wireless Charger Stand',
    date: new Date('2026-05-05'),
    verified: true
  }
];
