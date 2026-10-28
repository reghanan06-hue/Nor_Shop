
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag  } from "lucide-react";
import { useRouter } from "next/navigation";

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

  // Load cart items
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
      setItems(data.items ?? []);
    } catch {
      setError("Unable to load your cart. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  // Remove an item from the cart
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
      setItems(data.items ?? []);
    } catch {
      setError("Unable to remove this item. Please try again.");
    } finally {
      setRemovingId(null);
    }
  }

  // Redirect to the buy page for the selected product
  function handleBuy(item: CartItem) {
    router.push(`/buy?id=${item.id}`);
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <p className="p-6 text-center">
        Loading cart...
      </p>
    );
  }

  return (
    <main className="mx-auto flex max-w-xl flex-col items-center justify-center px-8 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#d26a58]">
        My Shopping Cart
      </h1>

      {error && (
        <p className="mb-4 text-red-600" role="alert">
          {error}
        </p>
      )}

      {items.length === 0 ? (
        <div className="text-center">
          <p className="font-bold text-[#978c7b]">
            Your cart is empty.
          </p>

          <Link
            href="/"
            className="font-bold text-[#978c7b] underline hover:text-[#d26a58]"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="w-full space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl border-2 border-red-100 bg-[#FFF5F5] p-3"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-semibold text-[#978c7b]">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-600">
                    Price: {item.price} MD
                  </p>

                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                {/* Buy button */}
                <button
                  type="button"
                  onClick={() => handleBuy(item)}
                  aria-label={`Buy ${item.title}`}
                  title="Buy this product"
                  className="shrink-0 cursor-pointer text-rose-900 hover:text-[#d26a58]"
                >
                  <ShoppingBag  size={22} />
                </button>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  disabled={removingId === item.id}
                  aria-label={`Remove ${item.title}`}
                 title="Delete this product"

                  className="shrink-0 cursor-pointer
                   text-red-500 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {removingId === item.id ? (
                    <span className="text-xs">
                      Removing...
                    </span>
                  ) : (
                    <Trash2 size={20} />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Cart total */}
          <div className="mt-6 w-full border-t pt-4 text-right text-orange-400">
            <p className="text-lg font-bold">
              Total: {total} MD
            </p>

            <Link
              href="/"
              className="mt-4 inline-block rounded-3xl bg-[#d26a58] px-5 py-2 text-white hover:opacity-90"
            >
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </main>
  );
}