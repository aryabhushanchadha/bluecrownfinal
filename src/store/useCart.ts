import { useState, useCallback } from "react";

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

// Simple global state for cart
let cartItems: CartItem[] = [];
let listeners: Set<() => void> = new Set();

function emitChange() {
  listeners.forEach((l) => l());
}

export function useCart() {
  const [, setTick] = useState(0);

  const subscribe = useCallback(() => {
    const listener = () => setTick((t) => t + 1);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  // Subscribe on mount
  useState(() => {
    const unsub = subscribe();
    return unsub;
  });

  const addToCart = useCallback(
    (item: Omit<CartItem, "quantity">) => {
      const existing = cartItems.find(
        (ci) => ci.productId === item.productId && ci.size === item.size
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        cartItems.push({ ...item, quantity: 1 });
      }
      cartItems = [...cartItems];
      emitChange();
    },
    []
  );

  const removeFromCart = useCallback((productId: number, size: string) => {
    cartItems = cartItems.filter(
      (ci) => !(ci.productId === productId && ci.size === size)
    );
    emitChange();
  }, []);

  const updateQuantity = useCallback(
    (productId: number, size: string, quantity: number) => {
      if (quantity <= 0) {
        cartItems = cartItems.filter(
          (ci) => !(ci.productId === productId && ci.size === size)
        );
      } else {
        const item = cartItems.find(
          (ci) => ci.productId === productId && ci.size === size
        );
        if (item) {
          item.quantity = quantity;
          cartItems = [...cartItems];
        }
      }
      emitChange();
    },
    []
  );

  const clearCart = useCallback(() => {
    cartItems = [];
    emitChange();
  }, []);

  const totalItems = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, ci) => sum + ci.price * ci.quantity,
    0
  );

  return {
    items: cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
}
