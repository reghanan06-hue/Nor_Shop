
"use client";

import React from "react";
import { House, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
        <span className="text-[#c36959]">Privacy Policy</span>
      </div>

      {/* Page title */}
      <h1 className="text-4xl font-bold mt-8">
        Privacy Policy
      </h1>

    </div>
   
         <div className="mx-auto mt-10 w-full max-w-6xl px-8">
          
          {/* 1 */}
          <details className="group border-b border-gray-300 py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                Privacy
              </span>

              <span className="text-base text-[#d26a58] group-open:hidden">
                ⌄
              </span>

              <span className="hidden text-base text-[#978c7b] group-open:inline">
                ⌃
              </span>
            </summary>

            <div className="mt-8 text-[#978c7b]">
              <p>
            Your personal information (such as your name, age, phone number, and email) is collected solely to enhance customer service, offer special promotions, and tailor your shopping experience without sending unsolicited emails.
              </p>
              <p>Your details are kept private, never sold or shared for external commercial purposes without your consent, and can only be accessed or updated by you. Anonymous site usage statistics may be shared with partners to improve the service, and personal data is only disclosed to official authorities if required by law.</p>
            </div>
          </details>

{/* <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                Privacy
              </span>

              <span className="text-base text-[#d26a58] group-open:hidden">
                ⌄
              </span>

              <span className="hidden text-base text-[#978c7b] group-open:inline">
                ⌃
              </span>
            </summary>

            <div className="mt-8 text-[#978c7b]">
              <p>
            Your personal information (such as your name, age, phone number, and email) is collected solely to enhance customer service, offer special promotions, and tailor your shopping experience without sending unsolicited emails.
              </p>
              <p>Your details are kept private, never sold or shared for external commercial purposes without your consent, and can only be accessed or updated by you. Anonymous site usage statistics may be shared with partners to improve the service, and personal data is only disclosed to official authorities if required by law.</p>
            </div>
          </details>*/}
           
                      </div> 


    </>
   
  );
}

