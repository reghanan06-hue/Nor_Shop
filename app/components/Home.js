'use client';
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  w-full min-h-screen flex-col items-center  gap-2.5 bg-[#FFF5F5] mt-0">
      <h2 className=" w-80  p-2  text-sm font-semibold text-center
       bg-green-200 mt-8 text-green-600 rounded-xl">
        The Four Seasons Collection
      </h2>
      <h1 className=" 
       p-2  text-3xl font-semibold text-center
      mt-8 rounded-xl font-[Pacifico] text-[#d26a58]" >
The architecture of Modest Grace
      </h1>
<p className="text-[#EA9D9D]"> 
Elegant hijabs and modest clothing for every season, combining comfort, timeless beauty, and effortless grace.
</p>


<div className="relative mx-auto mt-20 h-[600px] w-full max-w-5xl">
   <Image
    src="/First-img.jpg"
    alt="Main collection"
    width={500}
    height={300}
    className="absolute left-1/2 top-1/2 z-30
      -translate-x-1/2 -translate-y-1/2
      rounded-xl border-2 border-[#F8B2B2]
      object-cover
"  />  

      {/* Summer */}
      <Image
        src="/Summer1.jpg"
        alt="Summer"
        width={220}
        height={220}
        className={`absolute right-2 top-0 z-20 rounded-xl border-2 border-[#F8B2B2] object-cover
          ${activeImage === 0 ? "animate-pulse" : "animate-none"}
        `}
      />

      {/* Spring */}
      <Image
        src="/Spring.jpg"
        alt="Spring"
        width={220}
        height={220}
        className={`absolute left-2 top-0 z-20 rounded-xl border-2 border-[#F8B2B2] object-cover
          ${activeImage === 1 ? "animate-pulse" : "animate-none"}
        `}
      />

      {/* Autumn */}
      <Image
        src="/Autumn.jpg"
        alt="Autumn"
        width={220}
        height={220}
        className={`absolute bottom-0 left-2 z-20 rounded-xl object-cover
          ${activeImage === 2 ? "animate-pulse" : "animate-none"}
        `}
      />

      {/* Winter */}
      <Image
        src="/Winter1.jpg"
        alt="Winter"
        width={220}
        height={220}
        className={`absolute bottom-0 right-2 z-20 rounded-xl border-2 border-[#F8B2B2] object-cover
          ${activeImage === 3 ? "animate-pulse" : "animate-none"}
        `}
      />

    </div>
    </div>
  )
}

