'use client';
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 9);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  w-full min-h-screen flex-col items-center
      gap-0 bg-[#FFF5F5] mt-0">
      <h2 className=" w-80  p-1 mb-0 text-sm font-semibold text-center
       bg-[#d26a58] mt-8 text-[#f8ecea] rounded-xl animate-bounce transform-3d shadow-amber-700 shadow-2xl">
        The Four Seasons Collection
      </h2>
      <h1 className=" 
       p-2  text-3xl font-semibold text-center
      mt-8 rounded-xl font-[Pacifico] text-[#d26a58]" >
The architecture of Modest Grace
      </h1>
<p className="text-[#EA9D9D] text-sm font-light
 text-center mt-1 mx-4 rounded-xl font-[Pacifico] mb-4"> 
Elegant hijabs and modest clothing for every season, combining comfort, timeless beauty, and effortless grace.
</p>


<div className="relative mx-auto mt-6 h-[600px] w-full max-w-5xl mb-15"> 
  


 {/* Spring */}
  <Image
    src="/Sp.png"
    alt="Spring"
    width={220}
    height={220}
    className={`absolute left-8 top-0 z-40 rounded-xl border-2 border-[#F8B2B2] object-cover
      ${activeImage === 0 ? "animate-slide-up" : ""}`}
  />
  {/* Autumn */}
  <Image
    src="/Autumn.jpg"
    alt="Autumn"
    width={220}
    height={220}
    className={`absolute bottom-0 left-8 z-40 rounded-xl object-cover border-2 border-[#F8B2B2]
      ${activeImage === 1 ? "animate-slide-up" : ""}`}
  />
 <Image
    src="/images/classic-summer2.png"
    alt="Spring"
    width={220}
    height={220}
    className={`absolute left-70 top-0 z-40 rounded-xl border-2 border-[#F8B2B2] object-cover
      ${activeImage === 2 ? "animate-slide-up" : ""}`}
  />
  <Image
    src="/images/autumn-sport1.jpg"
    alt="Winter"
    width={220}
    height={220}
    className={`absolute bottom-0 left-70 z-40 rounded-xl border-2 border-[#F8B2B2] object-cover
      ${activeImage === 3 ? "animate-slide-up" : ""}`}
  />
 
   <Image
    src="/images/classic-spring3.jpg"
    alt="Spring"
    width={220}
    height={220}
    className={`absolute right-70 top-0 z-20 rounded-xl border-2 border-[#F8B2B2] object-cover
      ${activeImage === 4 ? "animate-slide-up" : ""}`}
  />
 
 
   <Image
    src="/images/modern-summer.png"
    alt="Winter"
    width={220}
    height={220}
    className={`absolute bottom-1 right-70 z-80 rounded-xl border-2 border-[#F8B2B2] object-cover
      ${activeImage === 6 ? "animate-slide-up" : ""}`}
  />
   {/* Summer */}
  <Image
    src="/Summer1.jpg"
    alt="Summer"
    width={220}
    height={220}
    className={`absolute right-8 top-0 z-40 rounded-xl border-2 border-[#F8B2B2] object-cover
      ${activeImage === 7 ? "animate-slide-up" : ""}`}
  />
  {/* Winter */}
  <Image
    src="/Winter1.jpg"
    alt="Winter"
    width={220}
    height={220}
    className={`absolute bottom-0 right-8 z-20 rounded-xl border-2 border-[#F8B2B2] object-cover
      ${activeImage === 8 ? "animate-slide-up" : ""}`}
  />
  
 





  
</div>

    </div>
  )
}

