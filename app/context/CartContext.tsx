
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    async function loadCart() {
      try {
        const response = await fetch("/api/cart", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();
        setCartItems(Array.isArray(data.items) ? data.items : []);
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }

    loadCart();
  }, []);

  function addToCart(item: CartItem) {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        return previousItems.map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity: product.quantity + item.quantity,
              }
            : product
        );
      }

      return [...previousItems, item];
    });
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}