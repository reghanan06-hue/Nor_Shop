
"use client";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div
        className="flex min-h-screen flex-col items-center gap-0 dark:bg-black"
      >
        <Navbar />
        <Home />
        <Footer />
      </div>
    </CartProvider>
  );
}
