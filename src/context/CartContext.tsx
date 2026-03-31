import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Car } from '../data/cars';

interface CartItem extends Car {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (car: Car) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: string;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('car_brand_cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('car_brand_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (car: Car) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === car.id);
      if (existing) {
        return prev.map(i => i.id === car.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...car, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) { removeFromCart(id); return; }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const cartTotal = '$' + cartItems.reduce((sum, i) => {
    const price = parseFloat(i.price.replace(/[$,]/g, ''));
    return sum + price * i.quantity;
  }, 0).toLocaleString();

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
