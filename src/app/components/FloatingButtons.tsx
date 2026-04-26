import { motion } from 'motion/react';
import { MessageCircle, ShoppingCart } from 'lucide-react';

interface FloatingButtonsProps {
  cartCount: number;
  onCartClick: () => void;
}

export function FloatingButtons({ cartCount, onCartClick }: FloatingButtonsProps) {
  return (
    <>
      <motion.a
        href="https://wa.me/923057040162"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 z-30 hover:shadow-2xl hover:shadow-green-500/70 transition-shadow"
      >
        <MessageCircle size={24} className="text-white" />
      </motion.a>

      <motion.button
        onClick={onCartClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 z-30 hover:shadow-2xl hover:shadow-purple-500/70 transition-shadow"
      >
        <ShoppingCart size={24} className="text-white" />
        {cartCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
          >
            {cartCount}
          </motion.div>
        )}
      </motion.button>
    </>
  );
}
