
"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, User, ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

type Category = {
  name: string;
  href: string;
};

type SeasonMenuProps = {
  title: string;
  href: string;
  categories: Category[];
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSeason, setActiveSeason] = useState("");

  const { cartCount } = useCart();

  const springCategories: Category[] = [
    { name: "CLASSIC", href: "/spring/classic" },
    { name: "MODERN", href: "/spring/modern" },
    { name: "SPORTS", href: "/spring/sports" },
  ];

  const autumnCategories: Category[] = [
    { name: "CLASSIC", href: "/autumn/classic" },
    { name: "MODERN", href: "/autumn/modern" },
    { name: "SPORTS", href: "/autumn/sports" },
  ];

  const winterCategories: Category[] = [
    { name: "CLASSIC", href: "/winter/classic" },
    { name: "MODERN", href: "/winter/modern" },
    { name: "SPORTS", href: "/winter/sports" },
  ];

  const summerCategories: Category[] = [
    { name: "CLASSIC", href: "/summer/classic" },
    { name: "MODERN", href: "/summer/modern" },
    { name: "SPORTS", href: "/summer/sports" },
  ];

  const SeasonMenu = ({
    title,
    href,
    categories,
    mobile = false,
    onNavigate,
  }: SeasonMenuProps) => (
    <div className="relative group">

      <div className="flex items-center gap-2">

        <Link
          href={href}
          onClick={onNavigate}
          className="whitespace-nowrap text-sm text-[#d26a58]
           hover:text-orange-900"
        >
          {title}
        </Link>

        {mobile && (
          <button
            type="button"
            onClick={() =>
              setActiveSeason(activeSeason === title ? "" : title)
            }
            aria-label={`Toggle ${title} categories`}
          >
            <ChevronDown
              size={16}
              className={`text-[#d26a58] transition-transform ${
                activeSeason === title ? "rotate-180" : ""
              }`}
            />
          </button>
        )}

        {!mobile && (
          <ChevronDown
            size={14}
            className="text-[#d26a58] transition-transform group-hover:rotate-180"
          />
        )}

      </div>

      <div
        className={
          mobile
            ? `${activeSeason === title ? "flex" : "hidden"} flex-col pl-4 pt-3 gap-2`
            : "absolute left-0 top-full z-50 hidden min-w-40 flex-col rounded-md border border-gray-200 bg-white py-2 shadow-lg group-hover:flex group-focus-within:flex"
        }
      >
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            onClick={onNavigate}
            className="block whitespace-nowrap px-4 py-2 text-sm text-[#978c7b] transition-colors hover:bg-red-100 hover:text-[#d26a58]"
          >
            {category.name}
          </Link>
        ))}
      </div>

    </div>
  );

  const closeMobile = () => {
    setIsOpen(false);
    setActiveSeason("");
  };

  return (
    <>
      {/* Delivery Banner */}

      <div className="flex h-10 w-full items-center justify-center border-b border-[#FFDCDC]
       bg-rose-950 px-2 text-center font-mono text-xs sm:text-sm text-[#FFDCDC]">
        Free delivery with Mondial Relay on orders over €80.
      </div>

      {/* Navbar */}

     

              <header className="w-full bg-red-100 px-4">

  <div className="relative flex min-h-[75px] items-center justify-between">

    {/* MOBILE: Menu button LEFT */}
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="text-2xl text-[#d26a58] md:hidden"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      {isOpen ? "✕" : "☰"}
    </button>

    {/* LOGO: CENTER on mobile */}
    <Link
      href="/about"
      className="absolute left-1/2 flex -translate-x-1/2 items-center
       md:static md:translate-x-0"
    >
      <Image
        src="/LogoShop.png"
        alt="Shop Nor logo"
        width={80}
        height={80}
        priority
        className="h-auto w-[80px] sm:w-[75px] "
      />

      <h1 className="-ml-4 whitespace-nowrap font-[Pacifico] text-xl text-[#d26a58]
       hover:text-orange-900">
        Nor Shop
      </h1>
    </Link>

    {/* DESKTOP NAVIGATION */}
    <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
      <Link href="/" className="text-sm text-[#d26a58]">
        Home
      </Link>

      <SeasonMenu title="Clothes of Autumn"
        href="/autumn/classic" categories={autumnCategories} />

      <SeasonMenu title="Clothes of Winter"
        href="/winter" categories={winterCategories} />

      <SeasonMenu title="Clothes of Spring"
        href="/spring/classic" categories={springCategories} />

      <SeasonMenu title="Clothes of Summer"
        href="/summer/classic" categories={summerCategories} />
    </nav>

    {/* RIGHT ICONS */}
    <div className="flex items-center gap-3 ">

 {/* User Menu */}

            <div className="relative ">

              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="User menu"
              >
                <User size={20} className="text-[#d26a58] hidden md:flex items-center gap-1" />
              </button>

              {open && (
                <div className="absolute right-0 top-full z-50 mt-2 w-28 rounded
                 bg-white shadow-lg hidden md:block">

                  <Link
                    href="/user"
                    onClick={() => setOpen(false)}
                    className="block p-2 text-sm text-[#978c7b]
                     hover:bg-red-100 hover:text-[#d26a58]"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/sign-up"
                    onClick={() => setOpen(false)}
                    className="block p-2 text-sm text-[#978c7b] hover:bg-red-100 hover:text-[#d26a58]"
                  >
                    Sign Up
                  </Link>

                </div>
              )}

            </div>
      <Link href="/contact"
        aria-label="Contact"
        className="text-[#d26a58] hover:text-orange-900
         hidden md:flex items-center gap-1">
        <Mail size={20} />
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        aria-label={`Shopping cart: ${Math.max(0, cartCount)} items`}
        className="relative text-[#d26a58] hover:text-orange-900"
      >
        <ShoppingCart size={22} />

        {cartCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-950 px-1 text-xs font-bold text-white">
            {Math.max(0, cartCount)}
          </span>
        )}
      </Link>
    </div>
  </div>

  {/* MOBILE MENU */}
  {isOpen && (
    <nav className="flex flex-col gap-5 border-t border-[#FFDCDC] py-5 md:hidden">

      <Link href="/" onClick={closeMobile}
        className="text-sm text-[#d26a58]">
        Home
      </Link>

      <SeasonMenu title="Clothes of Autumn"
        href="/autumn/classic"
        categories={autumnCategories}
        mobile onNavigate={closeMobile} />

      <SeasonMenu title="Clothes of Winter"
        href="/winter/classic"
        categories={winterCategories}
        mobile onNavigate={closeMobile} />

      <SeasonMenu title="Clothes of Spring"
        href="/spring/classic"
        categories={springCategories}
        mobile onNavigate={closeMobile} />

      <SeasonMenu title="Clothes of Summer"
        href="/summer"
        categories={summerCategories}
        mobile onNavigate={closeMobile} />
          <Link href="/contact"
        aria-label="Contact"
        className=" flex flex-row gap-2 text-[#d26a58] hover:text-orange-900 md:hidden
         ">
        <Mail size={20} /> <span>Contact us</span>
      </Link>
<div className="flex flex-row items-center gap-2 md:hidden">
  <Link
    href="/user"
    aria-label="Sign In"
    className=" gap-2 flex items-center text-[#d26a58] hover:text-orange-900
     hover:underline-offset-2"
  >
    <User size={20} />
    <span>Sign In</span>
  </Link>

  <span className="text-[#d26a58]">/</span>

  <Link
    href="/sign-up"
    aria-label="Sign Up"
    className="text-[#d26a58] hover:text-orange-900 hover:underline-offset-2"
  >
    Sign Up
  </Link>
</div>
 
    </nav>
  )}
  
</header>

    </>
  );
}
