
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
  description:string,
  width: number;
  height: number;
  price: number;
};

export default function PictureGallery({
  season,
  style,
  // title,
}: {
  season: string;
  style: string;
  // title:string;
}) {

  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router =useRouter();
  const { addToCart } = useCart();

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

  // Close zoom popup with Escape key
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

  if (loading) {
    return <p className="p-6">Loading pictures...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">Erreur: {error}</p>;
  }

  if (pictures.length === 0) {
    return <p className="p-6">No pictures found.</p>;
  }
  

    
 
  return (
    <>
      {/* Product gallery */}
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {pictures.map((picture) => (
          <article key={picture.id}>
            <div className="group relative">
              {/* Product image */}
              <Image
                src={picture.image}
                alt={picture.title}
                width={picture.width}
                height={picture.height}
                // className="h-auto w-full rounded-lg object-cover"
                  className="h-[480px] w-[500px] rounded-lg object-cover"

              />

              {/* Zoom button */}
              <button
                type="button"
                onClick={() => setSelectedImage(picture.image)}
                aria-label={`Zoomer sur ${picture.title}`}
                className="absolute right-3 top-3 z-10 rounded-full
                           bg-white/90 p-2 text-[#d26a58] shadow-md
                           transition hover:bg-white
                           sm:opacity-0 sm:group-hover:opacity-100
                           focus:opacity-100"
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

              {/* Product details */}
              <div className="flex flex-col items-center">
                <h2 className="mt-2 font-medium text-orange-500">
                  {picture.title}
                </h2>

                <p className="text-sm font-bold text-orange-800">
                  {picture.price} <span>MD</span>
                </p>

                <button
                  type="button"
                  className="mt-3 rounded-2xl bg-[#d26a58]
                             px-6 py-2 text-sm text-[#faefe5]
                             hover:bg-amber-900 cursor-pointer"
               
                 onClick={()=>{
                  router.push(
                    `/buy?id=${picture.id}`
                  );
                 }}
               >
                  Buy Now
                </button>
{/* <button className="btn mt-3 rounded-2xl bg-[#f58f31]
                             px-6 py-2 text-sm text-[#faefe5]
                             hover:bg-amber-900 cursor-pointer"
                             onClick={()=>{
                              router.push(
                                `/cart?id=${picture.id}`
                              );
                             }}>
  <span className="text">Add Cart  </span>
</button> */}
{/* <button
 className="btn mt-3 rounded-2xl bg-[#f58f31]
                             px-6 py-2 text-sm text-[#faefe5]
                             hover:bg-amber-900 cursor-pointer"
  onClick={() => {
  addToCart();
    router.push(`/cart?id=${picture.id}`);
  }}
>
  <span>Add Cart  </span>
</button> */}

<button
  className="btn mt-3 cursor-pointer rounded-2xl bg-[#f58f31]
             px-6 py-2 text-sm text-[#faefe5]
             transition-colors duration-300 hover:bg-amber-900"
  onClick={async () => {
    try {
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

      addToCart();
      router.push("/cart");
    } catch (error) {
      console.error(error);
      alert("Unable to add item to cart.");
    }
  }}
>
  <span>Add Cart</span>
</button>

              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Full-screen image zoom popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center
                     justify-center bg-black/85 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer l'image"
            className="absolute right-5 top-3 z-20
                       text-5xl leading-none text-white
                       hover:text-orange-400"
          >
            &times;
          </button>

          {/* Prevent closing when clicking the image */}
          <div
            className="flex max-h-[90vh] max-w-[95vw]
                       items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Image du produit agrandie"
              width={1600}
              height={1600}
              sizes="95vw"
              priority
              className="h-auto max-h-[85vh] w-auto
                         max-w-full rounded-lg object-contain"
            />
          </div>
         
        </div>
      )}
    </>
  );
}
