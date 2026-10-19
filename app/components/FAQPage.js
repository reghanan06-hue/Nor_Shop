
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of seasonal clothes do you offer?",
    answer:
      "We offer four seasonal collections: lightweight dresses, T-shirts, and shorts for Summer; floral dresses and light jackets for Spring; sweaters, cardigans, and coats for Autumn; and warm coats, jackets, scarves, and knitwear for Winter.",
  },
  {
    question: "How do I choose clothes for each season?",
    answer:
      "For Summer, choose breathable fabrics like cotton and linen. For Spring, try light layers and floral styles. For Autumn, choose sweaters and jackets. For Winter, stay warm with coats, knitwear, scarves, and other cozy essentials.",
  },
  {
    question: "What sizes are available?",
    answer:
      "Our clothing collections offer a range of sizes depending on the item. Please check the size guide on each product page to find your perfect fit.",
  },
  {
    question: "What materials are used in your clothes?",
    answer:
      "Our seasonal clothing may feature materials such as cotton, linen, wool, denim, and knitted fabrics. Check each product description for its exact material and care instructions.",
  },
  {
    question: "How can I care for my seasonal clothes?",
    answer:
      "Always follow the washing instructions on the garment label. Wash delicate fabrics gently, store knitwear carefully, and keep coats and winter clothing clean and dry before storing them for the next season.",
  },
  {
    question: "Can I return or exchange clothing?",
    answer:
      "Please review our return and exchange policy for eligibility, return deadlines, and instructions. Items may need to be unworn and returned with their original tags.",
  },
  {
    question: "How can I style clothes for different seasons?",
    answer:
      "Create Summer outfits with light dresses and sandals, Spring looks with floral pieces and light jackets, Autumn outfits with sweaters and boots, and Winter styles with layered clothing, warm coats, and scarves.",
  },
];



export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="min-h-screen bg-white px-6 py-20">
    <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-[#d26a58]">
          Frequently Asked Questions
        </h1>

        <p className="mb-12 text-center text-[#978c7b]">
          Find answers to your questions below.
        </p>
      

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-gray-200 py-4"
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between gap-4 text-left 
                font-semibold text-[#896c65] hover:text-[#978c7b]"
                aria-expanded={openIndex === index}
              >
                {faq.question}

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pt-4 leading-7 text-[#978c7b]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
