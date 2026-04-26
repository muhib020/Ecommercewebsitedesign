import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { Zap } from 'lucide-react';

const trendingProducts = [
  {
    id: 1,
    name: 'Premium Wireless Earbuds Pro Max',
    price: 2999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 234,
    badge: 'TRENDING',
    stock: 7
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
    stock: 5
  },
  {
    id: 3,
    name: 'USB-C Fast Charging Cable 2M',
    price: 599,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 456,
    stock: 15
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
    stock: 8
  },
  {
    id: 5,
    name: 'Magnetic Car Phone Mount',
    price: 899,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 167,
    stock: 12
  },
  {
    id: 6,
    name: 'Premium Screen Protector Glass',
    price: 499,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 289,
    stock: 20
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
    stock: 9
  },
  {
    id: 8,
    name: '65W GaN Fast Charger Adapter',
    price: 1999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1591290619762-c588f23e8fc6?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 201,
    stock: 6
  }
];

interface ProductsSectionProps {
  onAddToCart: (product: any) => void;
}

export function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  return (
    <>
      <section id="products" className="py-20 bg-gradient-to-b from-slate-900 to-slate-900/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-4">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-purple-300 font-semibold">Trending Now</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Hot Deals & Best Sellers</h2>
            <p className="text-slate-400 text-lg">Limited stock available - Grab them before they're gone!</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} onAddToCart={() => onAddToCart(product)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 border-y border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg shadow-red-500/50 mb-4">
              <Zap className="text-white animate-pulse" size={24} />
              <span className="text-white font-bold text-lg">FLASH SALE - 50% OFF</span>
              <Zap className="text-white animate-pulse" size={24} />
            </div>
            <p className="text-white text-xl font-semibold">Limited Time Offer - Ends Tonight!</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
