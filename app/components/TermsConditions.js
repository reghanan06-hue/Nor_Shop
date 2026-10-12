
"use client";

import React from "react";
import { House, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
  return (
   <>
     <div className="flex h-40 w-full flex-col items-center justify-center gap-4 bg-[#FFF5F5] text-[#d26a58]">

      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2">
        <Link href="/" className="flex items-center gap-1 hover:underline">
          <ArrowLeft size={18} />
          <House size={22} />
          <span>Home</span>
        </Link>

        <span>/</span>
        <span className="text-[#c36959]">Terms & Conditions</span>
      </div>

      {/* Page title */}
      <h1 className="text-4xl font-bold mt-8">
Terms & Conditions      </h1>

    </div>

<div className="mx-auto mt-10 mb-19 w-full max-w-6xl px-8">

  {/* 1. Proprietary Rights */}
  <details id="collapseTwo" className="group border-b border-gray-300 py-2">
    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
      <span className="px-2 py-1 text-[#d26a58]">
        Proprietary Rights
      </span>
      <span className="text-base text-[#d26a58] group-open:hidden">⌄</span>
      <span className="hidden text-base text-[#978c7b] group-open:inline">⌃</span>
    </summary>

    <div className="mt-8 space-y-4 text-[#978c7b]">
      <p>
        All content on the Shop Nor website, including text, images, logos,
        graphics, designs, and other materials, is the property of Shop Nor
        or its respective owners and is protected by applicable intellectual
        property laws.
      </p>
      <p>
        You may not copy, reproduce, distribute, modify, or use any content
        from this website for commercial purposes without prior written
        permission.
      </p>
    </div>
  </details>

  {/* 2. Ideas & Feedback */}
  <details id="collapseThree" className="group border-b border-gray-300 py-2">
    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
      <span className="px-2 py-1 text-[#d26a58]">
        Ideas &amp; Feedback
      </span>
      <span className="text-base text-[#d26a58] group-open:hidden">⌄</span>
      <span className="hidden text-base text-[#978c7b] group-open:inline">⌃</span>
    </summary>

    <div className="mt-8 space-y-4 text-[#978c7b]">
      <p>
        We welcome your suggestions, comments, and feedback to help us
        improve Shop Nor and your shopping experience.
      </p>
      <p>
        By submitting feedback, you grant Shop Nor permission to use and
        consider your suggestions to improve our products and services,
        without any obligation to compensate you, subject to applicable law.
      </p>
    </div>
  </details>

  {/* 3. Indemnity */}
  <details id="collapseFour" className="group border-b border-gray-300 py-2">
    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
      <span className="px-2 py-1 text-[#d26a58]">
        Indemnity
      </span>
      <span className="text-base text-[#d26a58] group-open:hidden">⌄</span>
      <span className="hidden text-base text-[#978c7b] group-open:inline">⌃</span>
    </summary>

    <div className="mt-8 space-y-4 text-[#978c7b]">
      <p>
        You agree to use the Shop Nor website in accordance with applicable
        laws and these terms. You are responsible for any unlawful use of
        the website or violation of these terms.
      </p>
      <p>
        To the extent permitted by applicable law, you agree to indemnify
        Shop Nor against claims arising from your unlawful use of the
        website or your violation of these terms.
      </p>
    </div>
  </details>

  {/* 4. Security */}
  <details id="collapseFive" className="group border-b border-gray-300 py-2">
    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
      <span className="px-2 py-1 text-[#d26a58]">
        Security
      </span>
      <span className="text-base text-[#d26a58] group-open:hidden">⌄</span>
      <span className="hidden text-base text-[#978c7b] group-open:inline">⌃</span>
    </summary>

    <div className="mt-8 space-y-4 text-[#978c7b]">
      <p>
        Shop Nor uses SSL/TLS encryption to help protect your personal
        information during transmission. We take reasonable measures to
        safeguard your information against unauthorized access and misuse.
      </p>
      <p>
        Your credit card details are processed securely by our payment
        provider and are not stored on Shop Nor servers unless explicitly
        stated otherwise. Payment security also depends on the systems and
        safeguards used by our payment provider.
      </p>
    </div>
  </details>

  {/* 5. Governing Law */}
  <details id="collapseSix" className="group border-b border-gray-300 py-2">
    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
      <span className="px-2 py-1 text-[#d26a58]">
        Governing Law
      </span>
      <span className="text-base text-[#d26a58] group-open:hidden">⌄</span>
      <span className="hidden text-base text-[#978c7b] group-open:inline">⌃</span>
    </summary>

    <div className="mt-8 space-y-4 text-[#978c7b]">
      <p>
        These terms are subject to the applicable laws and regulations
        governing Shop Nor and its customers.
      </p>
      <p>
        Any disputes arising from the use of this website will be handled
        by the competent courts or authorities in accordance with
        applicable law.
      </p>
    </div>
  </details>

  {/* 6. Amendments */}
  <details id="collapseSeven" className="group border-b border-gray-300 py-2">
    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
      <span className="px-2 py-1 text-[#d26a58]">
        Amendments
      </span>
      <span className="text-base text-[#d26a58] group-open:hidden">⌄</span>
      <span className="hidden text-base text-[#978c7b] group-open:inline">⌃</span>
    </summary>

    <div className="mt-8 space-y-4 text-[#978c7b]">
      <p>
        Shop Nor may update these terms and policies from time to time
        to reflect changes to our services, business practices, or
        applicable legal requirements.
      </p>
      <p>
        Updates will be published on this website and will take effect
        as required by applicable law. We encourage you to review this
        page periodically.
      </p>
    </div>
  </details>

</div>

   </>
  )
}
