

import {
  Home,
  Info,
  ShoppingCart,
  Mail,
 ShieldCheck ,
 FileText,
 CircleHelp ,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* TABLET / DESKTOP FOOTER */}
      <footer
        className="hidden md:block w-full
        bg-rose-950 font-mono text-sm
        rounded-xl border-2 border-[#F8B2B2]
        mt-0"
      >
        {/* Navigation + Subscribe */}
        <div
          className="mx-auto flex min-h-[300px]
          flex-col items-center justify-around
          gap-10 px-6 py-10
          md:flex-row md:items-start
          md:px-10 lg:px-24"
        >
          {/* Navigation 1 */}
          <div className="pt-4 md:pt-10">
            <nav className="flex flex-col gap-4 text-[#FFDCDC]">
              <Link href="/" className="hover:text-orange-300 transition-colors">
                Home
              </Link>

              <Link href="/autumn/classic" className="hover:text-orange-300 transition-colors">
                Clothes of Autumn
              </Link>

              <Link href="/winter/classic" className="hover:text-orange-300 transition-colors">
                Clothes of Winter
              </Link>

              <Link href="/spring/classic" className="hover:text-orange-300 transition-colors">
                Clothes of Spring
              </Link>

              <Link href="/summer/classic" className="hover:text-orange-300 transition-colors">
                Clothes of Summer
              </Link>
            </nav>
          </div>

          {/* Navigation 2 */}
          <div className="pt-4 md:pt-10">
            <nav className="flex flex-col gap-4 text-[#FFDCDC]">
              <Link href="/about" className="hover:text-orange-300 transition-colors">
                About us
              </Link>

              <Link href="/contact" className="hover:text-orange-300 transition-colors">
                Contact
              </Link>

              <Link href="/faq" className="hover:text-orange-300 transition-colors">
                FAQ
              </Link>

              <Link href="/privacy" className="hover:text-orange-300 transition-colors">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-orange-300 transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Subscribe */}
          <form
            className="flex flex-col items-center
            justify-center gap-5 pt-4 md:pt-10"
          >
            <h5
              className="text-center text-[#eab3a9]
              font-[var(--font-pacifico)] text-lg"
            >
              Join the Nor Shop Family
            </h5>

            <div
              className="flex w-full max-w-sm overflow-hidden
              rounded-lg border border-[#F8B2B2]
              bg-amber-300 shadow-lg"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Your email address"
                className="min-w-0 flex-1 bg-amber-100
                px-3 py-2 text-sm text-gray-700
                focus:outline-none"
              />

              <button
                type="submit"
                className="shrink-0 bg-[#d26a58]
                px-3 py-2 text-sm text-white
                transition-colors hover:bg-[#b55a4c]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Copyright */}
        <div
          className="flex w-full flex-col
          items-center justify-center gap-2
          border-t border-amber-50 py-5"
        >
          <Image
            src="/LogoShop.png"
            alt="Nor Shop logo"
            width={75}
            height={75}
            className="animate-pulse"
          />

          <p className="text-center text-sm text-[#f1ccc5]">
            © {new Date().getFullYear()}

            <span
              className="p-2 font-semibold
              font-[Pacifico] text-[#f5b7ab]"
            >
              Nor Shop
            </span>

            . All rights reserved.
          </p>
        </div>
      </footer>

      {/* MOBILE FOOTER */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 z-50
        flex w-full md:hidden
        flex-row items-center justify-around
        gap-2 border-t border-[#F8B2B2]
        bg-rose-950 px-2 py-4
        text-[#e19494] shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
      >
        {/* Home */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center justify-center p-2
          transition-transform hover:scale-110"
        >
          <Home className="h-6 w-6" />
        </Link>

       
{/* ShieldCheck */}
        <Link
          href="/privacy"
          aria-label="Privacy policy"
          className="flex items-center justify-center p-2
          transition-transform hover:scale-110"
        >
          <ShieldCheck className="h-6 w-6" />
        </Link>
        {/* Logo */}
        {/* <Link
          href="/about"
          aria-label="Nor Shop home"
          className="flex items-center justify-center "
         
        >
           {/* animate-pulse object-contain rounded-full
            p-2 border-2 border-orange-100" */}
         {/* <Image
  src="/LogoShop.png"
  alt="Nor Shop logo"
  width={65}
  height={65}
// className="animate-pulse object-contain rounded-full bg-red-100 p-2 border-2 border-orange-100 
// shadow-lg
/>
        </Link> */} 
        {/* CircleHelp  */}
        <Link
          href="/faq"
          aria-label="Terms of service"
          className="flex items-center justify-center p-2
          transition-transform hover:scale-110"
        >
          <CircleHelp className="h-6 w-6" />
        </Link>
{/* <Terms and conditions /> */}
<Link
          href="/terms"
          aria-label="Terms of service"
          className="flex items-center justify-center p-2
          transition-transform hover:scale-110"
        >
          <FileText className="h-6 w-6" />
        </Link>
      

        {/* Contact */}
        <Link
          href="/contact"
          aria-label="Contact"
          className="flex items-center justify-center p-2
          transition-transform hover:scale-110"
        >
          <Mail className="h-6 w-6" />
        </Link>

        {/* Shopping Cart
        <Link
          href="/cart"
          aria-label="Shopping cart"
          className="flex items-center justify-center p-2
          transition-transform hover:scale-110"
        >
          <ShoppingCart className="h-6 w-6" />
        </Link> */}
      </nav>
    </>
  );
}
