import { motion } from 'motion/react';
import { ShoppingCart, Star, Zap } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  stock?: number;
  onAddToCart: () => void;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge,
  stock,
  onAddToCart
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
    >
      {badge && (
        <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white shadow-lg">
          {badge}
        </div>
      )}

      {discount > 0 && (
        <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-red-500 rounded-full text-xs font-bold text-white shadow-lg">
          -{discount}%
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-slate-800/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onAddToCart}
          className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ShoppingCart size={20} className="text-white" />
        </motion.button>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}
            />
          ))}
          <span className="text-xs text-slate-400 ml-1">({reviews})</span>
        </div>

        <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Rs. {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-slate-500 line-through">
              Rs. {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {stock !== undefined && stock < 10 && (
          <div className="flex items-center gap-2 text-orange-400 text-xs mb-3">
            <Zap size={14} />
            <span>Only {stock} left in stock!</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-xs text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Cash on Delivery Available
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl"></div>
        <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
      </div>
    </motion.div>
  );
}
