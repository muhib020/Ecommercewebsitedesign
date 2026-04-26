import { useState } from 'react';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { ProductsSection } from './components/ProductsSection';
import { TrustBadges } from './components/TrustBadges';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { FloatingButtons } from './components/FloatingButtons';
import { motion, AnimatePresence } from 'motion/react';
import { toast, Toaster } from 'sonner';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast.success('Quantity updated!');
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success('Added to cart!', {
        description: product.name
      });
    }
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.error('Removed from cart');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950">
      <Toaster
        position="top-center"
        richColors
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff'
          }
        }}
      />

      <Hero />
      <Categories />
      <ProductsSection onAddToCart={handleAddToCart} />
      <TrustBadges />
      <Reviews />
      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <AnimatePresence>
        {isCheckoutOpen && (
          <Checkout
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            total={cartTotal}
          />
        )}
      </AnimatePresence>

      <FloatingButtons
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
    </div>
  );
}