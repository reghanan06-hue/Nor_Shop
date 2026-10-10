
"use client";

import React, { useState } from "react";
import { QuoteIcon, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    username: "Sarah Mitchell",
    text: "I've purchased hundreds of files over the past 7 years, but I've never experienced support and professionalism like this. The theme is modern, easy to use, and beautifully designed. Everything works perfectly, and the customer service is outstanding. I'm extremely happy with my purchase and would definitely recommend it!",
  },
  {
    id: 2,
    username: "James Anderson",
    text: "This theme exceeded all my expectations. The design is clean, elegant, and very easy to customize. I love how every detail has been carefully designed to create a great user experience. The documentation is helpful, and the support team is always ready to answer questions. Definitely worth every penny!",
  },
  {
    id: 3,
    username: "Emily Carter",
    text: "I'm really impressed with the quality of this product. Everything looks professional, works smoothly, and is easy to manage. The layout is modern, responsive, and perfect for my website. What impressed me most was the quick and friendly customer support. I would happily purchase from this store again!",
  },
  {
    id: 4,
    username: "Michael Thompson",
    text: "Finding a theme that combines great design with excellent functionality isn't easy, but this one does exactly that. The installation was straightforward, and customization was much easier than expected. The attention to detail is impressive, and the support team made the entire process stress-free. Highly recommended!",
  },
  {
    id: 5,
    username: "Amina Hassan",
    text: "I love finding hijab clothing that suits every season of the year! This store offers beautiful, comfortable, and stylish outfits for spring, summer, autumn, and winter. The quality is excellent, and there are so many lovely designs to choose from. It's easy to find modest clothing for every occasion while staying comfortable all year round. Highly recommended!",
  },
  {
    id: 6,
    username: "Layla Bennett",
    text: "This store has become my favorite place to shop for modest fashion! I love the variety of hijabs, dresses, and outfits available for every season. The fabrics are comfortable, the designs are elegant, and the pieces are easy to style for both everyday wear and special occasions. I can always find something beautiful that matches my style. Definitely a wonderful shopping experience!",
  },
];

export default function ReviewCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = testimonials.length - visibleCards;

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="mx-auto mb-15 w-full max-w-6xl px-4">

      {/* Navigation buttons */}
      <div className="mb-6 flex justify-end gap-3">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous reviews"
          className="rounded-full border border-[#c36959] p-3 
          text-[#c36959] transition hover:bg-[#c36959] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next reviews"
          className="rounded-full border border-[#c36959] p-3 text-[#c36959] transition hover:bg-[#c36959] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials
          .slice(currentIndex, currentIndex + visibleCards)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex min-h-90 flex-col gap-4 rounded-2xl bg-[#c36959] px-5 py-6"
            >
              <QuoteIcon
                size={32}
                className="shrink-0 self-center text-[#e8bb78]"
              />

              <p className="flex-1 leading-7 text-[#eedfc9]">
                {testimonial.text}
              </p>

              <p className="font-semibold text-[#e8bb78]">
                {testimonial.username}
              </p>
            </div>
          ))}
      </div>

    </section>
  );
}

