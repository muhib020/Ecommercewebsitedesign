interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CART_STORAGE_KEY = 'techcart_shopping_cart';

export const cartStorage = {
  // Load cart from localStorage
  loadCart: (): CartItem[] => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  },

  // Save cart to localStorage
  saveCart: (items: CartItem[]): void => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  },

  // Clear cart
  clearCart: (): void => {
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  }
};

// Order storage
const ORDER_STORAGE_KEY = 'techcart_orders';

export const orderStorage = {
  // Save order
  saveOrder: (order: any): void => {
    try {
      const orders = orderStorage.getOrders();
      orders.push(order);
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
    } catch (error) {
      console.error('Error saving order:', error);
    }
  },

  // Get all orders
  getOrders: (): any[] => {
    try {
      const stored = localStorage.getItem(ORDER_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading orders:', error);
      return [];
    }
  },

  // Get order by ID
  getOrderById: (orderId: string): any | null => {
    try {
      const orders = orderStorage.getOrders();
      return orders.find(order => order.id === orderId) || null;
    } catch (error) {
      console.error('Error getting order:', error);
      return null;
    }
  }
};
