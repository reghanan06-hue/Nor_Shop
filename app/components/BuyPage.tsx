
"use client";

import { useEffect, useState} from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type Picture = {
  id: number;
  title: string;
  image: string;
  width: number;
  height: number;
  price: number;
  description: string;
  season: string;
  style: string;
};

const sizes = ["S", "M", "L", "XL"];
const lengths = ["52", "54", "56", "58"];

export default function BuyPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [picture, setPicture] = useState<Picture | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selected, setSelected] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<string | null>(null);
  const [countQte, setCountQte] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
const [successMessage, setSuccessMessage] = useState("");
  const totalPrice = picture ? countQte * picture.price : 0;

  useEffect(() => {
    let cancelled = false;

    async function loadPicture() {
      setLoading(true);
      setError("");
      setPicture(null);

      if (!id) {
        setError("Product ID not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/pictures");

        if (!response.ok) {
          throw new Error("Unable to load products.");
        }

        const data = await response.json();

        const found = data.pictures?.find(
          (p: Picture) => String(p.id) === id
        );

        if (!cancelled) {
          if (found) {
            setPicture(found);
          } else {
            setError("Product not found.");
          }
        }
      } catch {
        if (!cancelled) {
          setError("An error occurred while loading the product.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPicture();

    return () => {
      cancelled = true;
    };
  }, [id]);

 
  function handleSubmit() {
  if (!picture) return;

  if (!selected || !selectedLength) {
    alert("Please select a size and a length.");
    return;
  }

  const order = {
    productId: picture.id,
    product: picture.title,
    name,
    phone,
    city,
    size: selected,
    length: selectedLength,
    quantity: countQte,
    unitPrice: picture.price,
    totalPrice,
  };

  console.log("Order details:", order);

  setSuccessMessage(
    `Thank you, ${name}! Your order has been placed successfully. Total: ${totalPrice} MD.`
  );

  setName("");
  setPhone("");
  setCity("");
}

  if (loading) {
    return <p className="p-6 text-center">Loading product...</p>;
  }

  if (error || !picture) {
    return (
      <p className="p-6 text-center text-red-600">
        {error || "Product not found."}
      </p>
    );
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-9 p-5   ">
      <h1 className="mb-8 text-center text-2xl font-bold text-[#d26a58]">
        {picture.title}
      </h1>

     
        <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row">
      
        {/* Clothes image */}
<div className="w-full max-w-md h-130">
  <Image
    src={picture.image}
    alt={picture.title}
    width={picture.width || 500}
    height={picture.height || 500}
    className="h-full w-full rounded-3xl object-cover"
  />
</div>

        {/* clothes details */}
<section className="w-full max-w-md h-130 overflow-y-auto rounded-3xl bg-[#FFF5F5] p-6">          <p className="mb-6 text-base text-[#978c7b]">
            {picture.description}
          </p>

          <h2 className="mb-2 text-sm font-bold text-[#978c7b]">Size:</h2>

          <div className="mb-6 flex flex-wrap gap-3 ">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                aria-pressed={selected === size}
                onClick={() => setSelected(size)}
                className={`h-10 min-w-10 rounded-full border
                   border-amber-700 px-3 text-sm font-semibold transition ${
                  selected === size
                    ? "bg-amber-700 text-white"
                    : "bg-white text-amber-900 hover:bg-amber-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <h2 className="mb-2 text-sm font-bold text-[#978c7b]">Length:</h2>

          <div className="mb-6 flex flex-wrap gap-3">
            {lengths.map((length) => (
              <button
                key={length}
                type="button"
                aria-pressed={selectedLength === length}
                onClick={() => setSelectedLength(length)}
                className={`h-10 min-w-10 rounded-full border
                   border-amber-700 px-3 text-sm font-semibold transition ${
                  selectedLength === length
                    ? "bg-amber-700 text-white"
                    : "bg-white text-amber-900 hover:bg-amber-100"
                }`}
              >
                {length}
              </button>
            ))}
          </div>

          <h2 className="mb-2 text-sm font-bold text-[#978c7b]">Quantity:</h2>

          <div className="mb-6 flex items-center gap-5">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() =>
                setCountQte((prev) => Math.max(1, prev - 1))
              }
              className="flex h-9 w-9 items-center justify-center
               rounded-full bg-[#d26a58] text-white text-lg font-bold hover:bg-amber-600"
            >
              −
            </button>

            <span className="text-base font-semibold text-[#978c7b] ">
              {countQte}
            </span>

            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setCountQte((prev) => prev + 1)}
              className="flex h-9 w-9 items-center justify-center 
              rounded-full text-white bg-[#d26a58] text-lg font-bold hover:bg-amber-600"
            >
              +
            </button>
          </div>

          {/* Price */}
          <div className="border-t border-amber-200 pt-2 mt-4 
          ">
            <p className="text-sm text-[#978c7b] ">
              Unit price: {picture.price} MD
            </p>

            <p className="mt-2 text-lg font-bold text-[#d26a58] 
            flex flex-col items-center justify-center mb-4">
              Total price: {totalPrice} MD
            </p>
          </div>
        </section>
      </div>

      {/* Customer form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 flex w-full max-w-md flex-col"
      >
        <h2 className="mb-6 text-center text-xl font-bold
         text-[#d26a58]">
          Customer information
        </h2>

        <div className="mb-5 flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-bold text-[#797062]"
          >
            Name:
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
            className="w-full rounded-xl border
             border-amber-500 bg-white px-4 
             py-3 text-sm text-gray-700 outline-none
              focus:border-[#d26a58] focus:ring-2 focus:ring-orange-200"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-bold text-[#797062]"
          >
            Phone:
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            required
            className="w-full rounded-xl border border-amber-500 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#d26a58] focus:ring-2 focus:ring-orange-200"
          />
        </div>

        <div className="mb-2 flex flex-col gap-2">
          <label
            htmlFor="city"
            className="text-sm font-bold text-[#797062]"
          >
            City:
          </label>

          <input
            id="city"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            autoComplete="address-level2"
            required
            className="w-full rounded-xl border
             border-amber-500 bg-white 
             px-4 py-3 text-sm text-gray-700 outline-none
              focus:border-[#d26a58] focus:ring-2
               focus:ring-orange-200"
          />
        </div>

        <button
          type="submit"
          className=" btn mb-8 mt-6 w-full cursor-pointer 
          rounded-xl bg-[#d26a58] py-4 text-sm font-bold
           text-white transition hover:bg-amber-800"
        >
         <span className="text">Confirm order   {totalPrice} MD </span>
        </button>
        {successMessage && (
  <div className="mx-auto mt-3 w-fit max-w-full rounded-lg
    bg-green-100 px-3 py-2 text-center
    text-xs font-medium text-green-700
    sm:w-full sm:px-4 sm:py-3 sm:text-sm md:text-base">
    {successMessage}
  </div>
)}
      </form>
    </main>
  );
}
