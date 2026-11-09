
"use client";

import React, { useState, useEffect } from "react";
import { QuoteIcon, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    username: "Sarah Asri",
    text: "I absolutely love my experience with this store! The hijabs are beautiful, soft, and comfortable to wear. The quality is amazing, and the colors are even more beautiful in person. I will definitely be ordering again!",
  },
  {
    id: 2,
    username: "Jamila Mansour",
    text: "Such a lovely collection of modest clothing! I found exactly what I was looking for. The designs are elegant, the fabrics feel comfortable, and the quality is excellent. Everything arrived beautifully packaged. Highly recommended!",
  },
  {
    id: 3,
    username: "Emily Carter",
    text: "I'm so happy with my purchase! The outfit is stylish, comfortable, and perfect for everyday wear. I really appreciate the attention to detail and the beautiful designs. Shopping here was a wonderful experience!",
  },
  {
    id: 4,
    username: "Michael Thompson",
    text: "The collection is beautiful and offers something for every style. The website is easy to navigate, the ordering process was simple, and the customer service was very helpful. I'm impressed with the overall quality!",
  },
  {
    id: 5,
    username: "Amina Hassan",
    text: "I love how easy it is to find beautiful hijabs for every season! The fabrics are lightweight, comfortable, and easy to style. There are so many lovely colors and designs to choose from. This store has become one of my favorites!",
  },
  {
    id: 6,
    username: "Layla Bennett",
    text: "A wonderful shopping experience from start to finish! I love the variety of hijabs, dresses, and modest outfits. Everything feels elegant and comfortable, whether it's for everyday wear or a special occasion. I'll definitely shop here again!",
  },
];

export default function ReviewCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Responsive cards
  useEffect(() => {
    const updateCards = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = Math.max(
    0,
    testimonials.length - visibleCards
  );

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  return (
    <section className="mx-auto mb-10 w-full max-w-6xl px-4 md:px-6">
      <div className="flex w-full min-w-0 items-center gap-2 md:gap-4">

        {/* Previous button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous reviews"
          className="shrink-0 rounded-full border border-[#c36959] p-2 md:p-3
          text-[#c36959] transition hover:bg-[#c36959] hover:text-white
          disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Review Cards */}
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-3 md:gap-4">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex min-h-80 min-w-0 w-full flex-col gap-4
              rounded-2xl bg-[#c36959] px-5 py-6
              md:min-h md:px-6"
            >
              <QuoteIcon
                size={32}
                className="shrink-0 self-center text-[#e8bb78]"
              />

              <p className="flex-1 warp-break-words text-sm font-bold leading-7
              text-[#eedfc9] md:text-base">
                {testimonial.text}
              </p>

              <p className="font-semibold text-[#e8bb78]">
                {testimonial.username}
              </p>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next reviews"
          className="shrink-0 rounded-full border border-[#c36959] p-2 md:p-3
          text-[#c36959] transition hover:bg-[#c36959] hover:text-white
          disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Review counter */}
      {/* <p className="mt-4 text-center text-sm text-gray-500">
        {currentIndex + 1} - {Math.min(currentIndex + visibleCards, testimonials.length)}
        {" / "}
        {testimonials.length}
      </p> */}
    </section>
  );
}
