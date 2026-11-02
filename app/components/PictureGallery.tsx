
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

type Picture = {
  id: number;
  title: string;
  season: string;
  style: string;
  image: string;
  description: string;
  width: number;
  height: number;
  price: number;
};

export default function PictureGallery({
  season,
  style,
}: {
  season: string;
  style: string;
}) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [addingId, setAddingId] = useState<number | null>(null);

  const router = useRouter();
  const { addToCart, setCartItems } = useCart();

  // Load pictures from API
  useEffect(() => {
    const controller = new AbortController();

    async function loadPictures() {
      setLoading(true);
      setError("");
      setPictures([]);

      try {
        const response = await fetch(
          `/api/pictures?season=${encodeURIComponent(
            season
          )}&style=${encodeURIComponent(style)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setPictures(data.pictures ?? []);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadPictures();

    return () => controller.abort();
  }, [season, style]);

  // Close zoom popup with Escape
  useEffect(() => {
    if (!selectedImage) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  // Add product to cart
  async function handleAddToCart(picture: Picture) {
    try {
      setAddingId(picture.id);

      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: picture.id,
          title: picture.title,
          image: picture.image,
          price: picture.price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();

      // Update shared cart using the API response if available
      if (Array.isArray(data.items)) {
        setCartItems(data.items);
      } else {
        // Otherwise update the shared cart locally
        addToCart({
          id: picture.id,
          title: picture.title,
          image: picture.image,
          price: picture.price,
          quantity: 1,
        });
      }

      router.push("/cart");
    } catch (error) {
      console.error(error);
      alert("Unable to add item to cart.");
    } finally {
      setAddingId(null);
    }
  }

  if (loading) {
    return <p className="p-6 text-center">Loading pictures...</p>;
  }

  if (error) {
    return (
      <p className="p-6 text-center text-red-600">
        Error: {error}
      </p>
    );
  }

  if (pictures.length === 0) {
    return <p className="p-6 text-center">No pictures found.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {pictures.map((picture) => (
          <article key={picture.id} className="group">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={picture.image}
                alt={picture.title}
                width={picture.width}
                height={picture.height}
                className="h-[400px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <button
                type="button"
                onClick={() => setSelectedImage(picture.image)}
                aria-label={`Zoom in on ${picture.title}`}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-[#d26a58] shadow-md transition hover:scale-110 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="6" />
                  <path d="m20 20-4-4" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center py-3">
              <h2 className="mt-2 font-medium text-orange-500">
                {picture.title}
              </h2>

              <p className="text-sm font-bold text-orange-800">
                {picture.price} <span>MD</span>
              </p>

              <button
                type="button"
                onClick={() => router.push(`/buy?id=${picture.id}`)}
                className="btn mt-3 cursor-pointer rounded-2xl bg-[#d26a58] px-6 py-2 text-sm text-[#faefe5] transition-all duration-300 hover:scale-105 hover:bg-amber-900 hover:shadow-lg active:scale-95"
              >
                <span className="text">Buy Now</span>
              </button>

              <button
                type="button"
                disabled={addingId !== null}
                onClick={() => handleAddToCart(picture)}
                className="btn mt-3 cursor-pointer rounded-2xl bg-[#f58f31] px-6 py-2 text-sm text-[#faefe5] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-amber-900 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="text">
                  {addingId === picture.id ? "Adding..." : "Add Cart"}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged product image"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-5 top-3 z-20 text-5xl leading-none
             text-white transition hover:scale-110 hover:text-orange-400 
            "
          >
            &times;
          </button>

          <div
            className="flex max-h-[90vh] max-w-[95vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged product image"
              width={1600}
              height={1600}
              sizes="95vw"
              priority
              className="h-auto max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
