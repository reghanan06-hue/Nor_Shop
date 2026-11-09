

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 8);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center
      bg-[#FFF5F5]  pb-16 md:pb-0">

      {/* TITLE */}
      <h2 className="mt-8 mb-0 w-fit rounded-full
        bg-[#d26a58] px-4 py-2 text-center text-sm
        font-semibold text-[#f8ecea] shadow-md
        shadow-amber-700 animate-bounce">
        The Four Seasons Collection
      </h2>

      <h1 className="mt-6 px-4 py-2 text-center
        text-2xl font-normal text-[#d26a58]
        font-[Pacifico] sm:text-4xl">
        The Architecture of Modest Grace
      </h1>

<p className="
  mt-3 mb-6
  w-full max-w-lg
  px-4 sm:px-5
  mx-auto
  text-center
  text-sm sm:text-base
  font-normal
  leading-6 sm:leading-7
  text-[#978c7b]
">
  Elegant hijabs and modest clothing for every season,
  combining comfort, timeless beauty, and effortless grace.
</p>
      {/* DESKTOP / TABLET DESIGN */}
      <div className="hidden md:block relative mx-auto mt-6
        mb-12 h-[600px] w-full max-w-5xl">

        {/* Spring */}
        <Image
          src="/Sp.png"
          alt="Spring"
          width={220}
          height={300}
          className={`absolute left-8 top-0 z-40
            h-[300px] w-[220px] rounded-t-xl
            border-2 border-b-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 0 ? "animate-slide-up" : ""}`}
        />

        {/* Autumn */}
        <Image
          src="/Autumn.jpg"
          alt="Autumn"
          width={220}
          height={300}
          className={`absolute bottom-0 left-8 z-40
            h-[300px] w-[220px] rounded-b-xl
            border-2 border-t-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 1 ? "animate-slide-up" : ""}`}
        />

        {/* Summer Classic */}
        <Image
          src="/images/classic-summer2.png"
          alt="Summer Classic"
          width={220}
          height={300}
          className={`absolute left-[260px] top-0 z-40
            h-[300px] w-[220px] rounded-t-xl
            border-2 border-b-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 2 ? "animate-slide-up" : ""}`}
        />

        {/* Autumn Sport */}
        <Image
          src="/images/autumn-sport1.jpg"
          alt="Autumn Sport"
          width={220}
          height={300}
          className={`absolute bottom-0 left-[260px] z-40
            h-[300px] w-[220px] rounded-b-xl
            border-2 border-t-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 3 ? "animate-slide-up" : ""}`}
        />

        {/* Spring Classic */}
        <Image
          src="/images/classic-spring3.jpg"
          alt="Spring Classic"
          width={220}
          height={300}
          className={`absolute right-[260px] top-0 z-20
            h-[300px] w-[220px] rounded-t-xl
            border-2 border-b-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 4 ? "animate-slide-up" : ""}`}
        />

        {/* Summer Modern */}
        <Image
          src="/images/modern-summer.png"
          alt="Summer Modern"
          width={220}
          height={300}
          className={`absolute bottom-0 right-[260px] z-40
            h-[300px] w-[220px] rounded-b-xl
            border-2 border-t-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 5 ? "animate-slide-up" : ""}`}
        />

        {/* Winter */}
        <Image
          src="/winter.jpg"
          alt="Winter"
          width={220}
          height={300}
          className={`absolute bottom-0 right-8 z-30
            h-75 w-55 rounded-b-xl
            border-4 border-t-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 6 ? "animate-slide-up" : ""}`}
        />

        {/* Summer */}
        <Image
          src="/Summer1.jpg"
          alt="Summer"
          width={220}
          height={300}
          className={`absolute right-8 top-0 z-20
            h-[300px] w-[220px] rounded-t-xl
            border-2 border-b-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 7 ? "animate-slide-up" : ""}`}
        />

      </div>


      {/* MOBILE DESIGN */}
<div className="relative mx-auto 
  flex h-[400px] w-full  mb-15 max-w-[330px]
  justify-center md:hidden">
        {/* Spring */}
        <Image
          src="/Sp.png"
          alt="Spring"
          width={150}
          height={200}
          className={`absolute left-[1%] top-0 z-40
            h-[200px] w-[150px] rounded-t-xl
            border-2 border-b-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 0 ? "animate-slide-up" : ""}`}
        />

        {/* Autumn */}
        <Image
          src="/Autumn.jpg"
          alt="Autumn"
          width={150}
          height={200}
          className={`absolute bottom-0 left-[1%] z-40
            h-50 w-37.5 rounded-b-xl
            border-2 border-t-0 border-[#F8B2B2]
            object-cover 
            ${activeImage === 1 ? "animate-slide-up" : ""}`}
        />
 {/* Summer */}
        <Image
          src="/Summer1.jpg"
          alt="Summer"
          width={150}
          height={200}
          className={`absolute right-[1%] top-0 z-20
            h-50 w-37.5 rounded-t-xl
            border-2 border-b-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 2 ? "animate-slide-up" : ""}`}
        />
        {/* Winter */}
        <Image
          src="/Winter.jpg"
          alt="Winter"
          width={150}
          height={200}
          className={`absolute bottom-0 right-[1%] z-30
            h-50 w-37.5 rounded-b-xl
            border-2 border-t-0 border-[#F8B2B2]
            object-cover
            ${activeImage === 3 ? "animate-slide-up" : ""}`}
        />

       

      </div>

{/* // desgin 4 phone */}

<div className="relative mx-auto 
  flex h-[400px] w-full  max-w-[330px]
  justify-center md:hidden mb-15">

  {/* Spring Sport */}
  <Image
    src="/images/autumn-sport1.jpg"
    alt="Autumn Sport"
    width={150}
    height={200}
    className={`absolute left-[1%] top-0 z-40
      h-[200px] w-[150px]
      rounded-t-xl border-2 border-b-0 border-[#F8B2B2]
      object-cover
      ${activeImage === 4 ? "animate-slide-up" : ""}`}
  />

  {/* Summer Modern */}
  <Image
    src="/images/modern-summer.png"
    alt="Summer Modern"
    width={150}
    height={200}
    className={`absolute right-[1%] top-0 z-20
      h-[200px] w-[150px]
      rounded-t-xl border-2 border-b-0 border-[#F8B2B2]
      object-cover
      ${activeImage === 6 ? "animate-slide-up" : ""}`}
  />

  {/* Autumn */}
  <Image
    src="/images/classic-summer1.png"
    alt="Summer Classic"
    width={150}
    height={200}
    className={`absolute bottom-0 left-[1%] z-40
      h-[200px] w-[150px]
      rounded-b-xl border-2 border-t-0 border-[#F8B2B2]
      object-cover
      ${activeImage === 5 ? "animate-slide-up" : ""}`}
  />

  {/* Winter */}
  <Image
    src="/images/classic-spring3.jpg"
    alt="Spring Classic"
    width={150}
    height={200}
    className={`absolute bottom-0 right-[1%] z-30
      h-[200px] w-[150px]
      rounded-b-xl border-2 border-t-0 border-[#F8B2B2]
      object-cover
      ${activeImage === 7 ? "animate-slide-up" : ""}`}
  />

</div>
    </div>
  );
}
