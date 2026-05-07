export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  city: string;
  items: {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  paymentMethod: 'cod' | 'easypaisa' | 'jazzcash';
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

// Mock orders data for demonstration
export const mockOrders: Order[] = [
  {
    id: 'ORD-2026-0001',
    customerName: 'Ahmed Khan',
    phone: '+923001234567',
    address: 'House 123, Street 5, Block A',
    city: 'karachi',
    items: [
      {
        productId: 1,
        productName: 'Premium Wireless Earbuds Pro Max',
        quantity: 1,
        price: 2999
      }
    ],
    total: 2999,
    paymentMethod: 'cod',
    status: 'delivered',
    createdAt: new Date('2026-05-01'),
    updatedAt: new Date('2026-05-05')
  },
  {
    id: 'ORD-2026-0002',
    customerName: 'Fatima Ali',
    phone: '+923211234567',
    address: 'Flat 45, Garden Town',
    city: 'lahore',
    items: [
      {
        productId: 2,
        productName: '30000mAh Fast Charging Power Bank',
        quantity: 1,
        price: 3499
      },
      {
        productId: 3,
        productName: 'USB-C Fast Charging Cable 2M',
        quantity: 2,
        price: 599
      }
    ],
    total: 4697,
    paymentMethod: 'easypaisa',
    status: 'shipped',
    createdAt: new Date('2026-05-03'),
    updatedAt: new Date('2026-05-06')
  }
];
