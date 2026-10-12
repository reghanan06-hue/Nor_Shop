
import { LucideHeading5 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-rose-950 font-mono text-sm 
    rounded-xl border-2 border-[#F8B2B2] gap-5">
                      

      <div className="mx-auto flex min-h-[400px] flex-col gap-10 px-6 py-10 md:flex-row md:justify-between md:px-16 lg:px-24">
        {/* Navigation 1 */}
        <div className="flex items-start justify-center pt-24">
          <nav className="flex flex-col gap-4 text-[#FFDCDC]">
            <Link
              href="/"
              className="transition-colors hover:text-orange-300"
            >
              Home
            </Link>

            <Link
              href="/autumn"
              className="transition-colors hover:text-orange-300"
            >
              Clothes of Autumn
            </Link>

            <Link
              href="/winter"
              className="transition-colors hover:text-orange-300"
            >
              Clothes of Winter
            </Link>

            <Link
              href="/spring"
              className="transition-colors hover:text-orange-300"
            >
              Clothes of Spring
            </Link>

            <Link
              href="/summer"
              className="transition-colors hover:text-orange-300"
            >
              Clothes of Summer
            </Link>
          </nav>
        </div>

        {/* Navigation 2 */}
        <div className="flex items-start justify-center pt-24 ">
          <nav className="flex flex-col gap-4 text-[#FFDCDC]">
            <Link
              href="/about"
              className="transition-colors hover:text-orange-300"
            >
              About us
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-orange-300"
            >
              Contact
            </Link>

            <Link
              href="/faq"
              className="transition-colors hover:text-orange-300"
            >
              FAQ
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-orange-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors text-[#f5b7ab] hover:text-orange-300 "
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>

        {/* Subscribe */}
        <form className="flex items-center justify-center  ">
<h5 className="p-2 text-sm font-light text-center mt-1 mx-4 rounded-xl font-[Pacifico] text-[#f5b7ab]">
  Join the Nor Shop Family
</h5>    
          <div className="flex   bg-amber-300 rounded-lg border border-[#F8B2B2] shadow-5xl">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="w-48 rounded-l bg-amber-100 px-3 py-2  text-sm text-gray-700 focus:outline-none"
            />

            <button
              type="submit"
              className="rounded-r bg-[#d26a58] px-4 py-2 text-sm text-white transition-colors hover:bg-[#b55a4c] focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Copyright */}
      <div className="flex w-full flex-col items-center justify-center 
      gap-2 border-t border-amber-50 py-5 ">
        <Image
          src="/LogoShop.png"
          alt="Nor Shop logo"
          width={90}
          height={90}
          className="animation-pulse"
        />

        <p className="text-center text-sm    
         text-[#f1ccc5] ">
          &copy; {new Date().getFullYear()} <span className=" p-2  text-sm font-semibold text-center
      mt-8 rounded-xl font-[Pacifico] text-[#f5b7ab]">Nor Shop</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

