

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";

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

  async function loadCart() {
    try {
      setError("");

      const response = await fetch("/api/cart", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to load cart.");
      }

      const data = await response.json();
      setItems(data.items);
    } catch {
      setError("Unable to load your cart. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

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
        throw new Error("Failed to remove item.");
      }

      const data = await response.json();

      // Update the page with the cart returned by the API.
      setItems(data.items);
    } catch {
      setError("Unable to remove this item. Please try again.");
    } finally {
      setRemovingId(null);
    }
  }

  if (loading) {
    return (
      <p className="p-6 text-center">Loading cart...</p>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-[#d26a58] text-center">
        My Shopping Cart
      </h1>

      {error && (
        <p className="mb-4 text-red-600" role="alert">
          {error}
        </p>
      )}

      {items.length === 0 ? (
        <div >
          <p className="text-center">Your cart is empty.</p>
{/* mt-4 inline-block underline */}
          <Link
            href="/"
            className=" text-center"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl 
                border border-red-100 border-2 p-3 bg-[#FFF5F5]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-600">
                    Price: {item.price} MD
                  </p>

                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  disabled={removingId === item.id}
                  aria-label={`Remove ${item.title}`}
                  className="shrink-0 cursor-pointer text-red-500 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {removingId === item.id ? (
                    <span className="text-sm">Removing...</span>
                  ) : (
                    <Trash2 size={20} />
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 text-right">
            <p className="text-lg font-bold">
              Total:{" "}
              {items.reduce(
                (total, item) =>
                  total + item.price * item.quantity,
                0
              )}{" "}
              MD
            </p>

            <Link
              href="/" 
              className="mt-4 inline-block rounded-3xl 
              bg-[#d26a58] px-5 py-2 text-white hover:opacity-90"
            >
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
