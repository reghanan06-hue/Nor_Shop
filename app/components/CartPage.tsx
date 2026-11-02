
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState<number | null>(null);

  const router = useRouter();
  const { setCartItems } = useCart();

  // Charger le panier et synchroniser la Navbar
  async function loadCart() {
    try {
      setError("");

      const response = await fetch("/api/cart", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to load cart");
      }

      const data = await response.json();

      const updatedItems: CartItem[] = Array.isArray(data.items)
        ? data.items
        : [];

      setItems(updatedItems);
      setCartItems(updatedItems);

    } catch (error) {
      console.error(error);
      setError("Impossible de charger votre panier.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  // Supprimer un produit et actualiser le compteur Navbar
  async function removeItem(id: number) {
    try {
      setRemovingId(id);
      setError("");

      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      const data = await response.json();

      let updatedItems: CartItem[];

      // Utiliser les articles renvoyés par DELETE
      if (Array.isArray(data.items)) {
        updatedItems = data.items;
      } else {
        // Sinon, recharger le panier depuis le serveur
        const refreshResponse = await fetch("/api/cart", {
          method: "GET",
          cache: "no-store",
        });

        if (!refreshResponse.ok) {
          throw new Error("Unable to refresh cart");
        }

        const refreshData = await refreshResponse.json();

        updatedItems = Array.isArray(refreshData.items)
          ? refreshData.items
          : [];
      }

      // Mise à jour de CartPage
      setItems(updatedItems);

      // Mise à jour immédiate de Navbar
      setCartItems(updatedItems);

    } catch (error) {
      console.error(error);
      setError("Impossible de supprimer ce produit.");
    } finally {
      setRemovingId(null);
    }
  }

  // Acheter un produit
  function handleBuy(item: CartItem) {
    router.push(`/buy?id=${item.id}`);
  }

  // Calculer le total
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading cart...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-center gap-3">

          <h1 className="text-3xl font-bold text-[#d26a58]">
            My Shopping Cart
          </h1>
        </div>

        {error && (
          <p className="mb-5 rounded-lg bg-red-100 p-3 text-red-700">
            {error}
          </p>
        )}

        {items.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <ShoppingBag
              size={50}
              className="mx-auto mb-4 text-[#d26a58]"
            />

            <h2 className="mb-3 text-xl font-semibold text-[#978c7b]">
              Your cart is empty
            </h2>

            <p className="mb-6 text-[#978c7b]">
              Add some products to your cart.
            </p>

            <Link
              href="/"
              className="rounded-lg px-6 py-3 text-white bg-[#d26a58] hover:bg-orange-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl
                   bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >
                  <div className="relative h-28 w-full shrink-0 sm:w-28">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="rounded-lg object-cover"
                      sizes="112px"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-red-400">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-[#978c7b]">
                      Price: {item.price} MD
                    </p>

                    <p className="text-[#978c7b]">
                      Quantity: {item.quantity}
                    </p>

                    <p className="mt-1 font-semibold text-[#978c7b]">
                      Subtotal: {item.price * item.quantity} MD
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleBuy(item)}
                      className="rounded-lg bg-[#d26a58] px-5 py-2
                       text-white hover:bg-orange-800 cursor-pointer"
                    >
                      Buy Now
                    </button>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      disabled={removingId === item.id}
                      className="flex items-center gap-2 rounded-lg
                       bg-red-100 px-4 py-2 text-red-600
                        hover:bg-red-200 disabled:opacity-50 cursor-pointer"
                    >
                      <Trash2 size={18} />

                      {removingId === item.id
                        ? "Removing..."
                        : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#978c7b]">
                  Total
                </h2>

                <p className="text-2xl font-bold text-[#d26a58]">
                  {total} MD
                </p>
              </div>

              <button
              onClick={()=>{
                router.push("/");
              }}
                className="btn mt-6 w-full rounded-lg
                 bg-[#d26a58] py-3 font-semibold text-white
                  hover:bg-orange-800 cursor-pointer"
              >
                 <span className="text">Continue Shopping</span>  
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
