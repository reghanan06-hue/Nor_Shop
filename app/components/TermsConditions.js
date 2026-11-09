
"use client";

import React from "react";
import { House, ArrowLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "proprietary-rights",
    title: "Proprietary Rights",
    paragraphs: [
      "All content on the Shop Nor website, including text, images, logos, graphics, designs, and other materials, is the property of Shop Nor or its respective owners and is protected by applicable intellectual property laws.",
      "You may not copy, reproduce, distribute, modify, or use any content from this website for commercial purposes without prior written permission.",
    ],
  },
  {
    id: "ideas-feedback",
    title: "Ideas & Feedback",
    paragraphs: [
      "We welcome your suggestions, comments, and feedback to help us improve Shop Nor and your shopping experience.",
      "By submitting feedback, you grant Shop Nor permission to use and consider your suggestions to improve our products and services, without any obligation to compensate you, subject to applicable law.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    paragraphs: [
      "You agree to use the Shop Nor website in accordance with applicable laws and these terms. You are responsible for any unlawful use of the website or violation of these terms.",
      "To the extent permitted by applicable law, you agree to indemnify Shop Nor against claims arising from your unlawful use of the website or your violation of these terms.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "Shop Nor uses SSL/TLS encryption to help protect your personal information during transmission. We take reasonable measures to safeguard your information against unauthorized access and misuse.",
      "Your credit card details are processed securely by our payment provider and are not stored on Shop Nor servers unless explicitly stated otherwise. Payment security also depends on the systems and safeguards used by our payment provider.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These terms are subject to the applicable laws and regulations governing Shop Nor and its customers.",
      "Any disputes arising from the use of this website will be handled by the competent courts or authorities in accordance with applicable law.",
    ],
  },
  {
    id: "amendments",
    title: "Amendments",
    paragraphs: [
      "Shop Nor may update these terms and policies from time to time to reflect changes to our services, business practices, or applicable legal requirements.",
      "Updates will be published on this website and will take effect as required by applicable law. We encourage you to review this page periodically.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden ">

      {/* Page Header */}
      <header className="flex min-h-[150px] w-full flex-col
        items-center justify-center gap-4 bg-[#FFF5F5]
        px-4 py-8 text-[#d26a58] md:min-h-[220px] ">

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link
            href="/"
            className="flex items-center gap-1 hover:underline"
          >
            <ArrowLeft size={18} />
            <House size={20} />
            <span>Home</span>
          </Link>

          <span>/</span>

          <span className="text-[#c36959]">
            Terms & Conditions
          </span>
        </nav>

        <h1 className="mt-2 text-center text-2xl font-bold md:mt-4 md:text-4xl">
          Terms & Conditions
        </h1>
      </header>

      {/* Terms and Conditions */}
      <section className="mx-auto mb-12 mt-6 w-full
        max-w-6xl min-w-0 px-4 md:mt-10 md:px-8">

        {sections.map((section) => (
          <details
            key={section.id}
            id={section.id}
            className="group border-b border-gray-300 py-3"
          >
            <summary className="flex cursor-pointer list-none
              items-center justify-between gap-3 text-base
              font-medium md:text-lg">

              <span className="min-w-0 break-words px-2 py-1 text-[#d26a58]">
                {section.title}
              </span>

              <span className="shrink-0 text-xl text-[#d26a58] group-open:hidden">
                ⌄
              </span>

              <span className="hidden shrink-0 text-xl text-[#978c7b] group-open:inline">
                ⌃
              </span>
            </summary>

            <div className="mt-5 space-y-4 px-2 text-sm
              leading-7 text-[#978c7b] md:mt-8 md:text-base">

              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>
          </details>
        ))}

      </section>
    
    </main>
  );
}

