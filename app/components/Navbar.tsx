

"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, User, ShoppingCart } from "lucide-react";
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
};

export default function Navbar() {

  const [open, setOpen] = useState(false);
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
  // const Auth: Category[] = [
  //   { name: "login", href: "/auth/login" },
  //   { name: "register", href: "/auth/register" },
  // ];
  // Composant réutilisable pour chaque saison
  const SeasonMenu = ({
    title,
    href,
    categories,
  }: SeasonMenuProps) => (
    <div className="relative group">
      <Link
        href={href}
        className="inline-flex items-center gap-2 whitespace-nowrap text-sm 
        text-[#d26a58] hover:text-orange-900"
      >
        {title}

        <span className="h-2 w-2 rotate-45 border-b-2 border-r-2
         border-current transition-transform duration-300 group-hover:-rotate-[135deg]" />
      </Link>

      {/* Sous-menu vertical */}
      <div className="absolute left-0 top-full z-50 hidden min-w-40
       flex-col rounded-md border border-gray-200
        bg-white py-2 shadow-lg group-hover:flex group-focus-within:flex">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="block w-full whitespace-nowrap px-4 py-2 text-sm 
            text-[#978c7b] transition-colors hover:bg-red-100 hover:text-[#d26a58]"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
const { cartCount } = useCart();

  return (
    <>
      {/* Bandeau de livraison */}
      <div className="flex h-10 w-full items-center justify-center border-b
       border-black bg-rose-950 px-2 text-center font-mono text-sm text-[#FFDCDC]">
        Free delivery with Mondial Relay on orders over €80.
      </div>

      {/* Navbar */}
      <header className="flex w-full items-center justify-between gap-4
       bg-red-100 px-4">
        <Link href="/about" className="flex shrink-0 items-center ">
        {/* Logo */}
  <Image
    src="/LogoShop.png"
    alt="Shop Nor logo"
    width={60}
    height={60}
    priority
    className="h-auto w-[90px] "
  />

          <h1 className="-ml-6 whitespace-nowrap font-[Pacifico] text-xl
           text-[#d26a58]  hover:text-amber-800">
            Nor Shop
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-8 hover:opacity-100">
          <Link
            href="/"
            className="whitespace-nowrap text-sm text-[#d26a58]
             hover:text-orange-900"
          >
            Home
          </Link>

          <SeasonMenu
            title="Clothes of Autumn"
            href="autumn/classic"
            categories={autumnCategories}
          />

          <SeasonMenu
            title="Clothes of Winter"
            href="/winter"
            categories={winterCategories}
          />

          <SeasonMenu
            title="Clothes of Spring"
            href="spring/classic"
            categories={springCategories}
          />

          <SeasonMenu
            title="Clothes of Summer"
            href="/summer"
            categories={summerCategories}
          />
        </nav>

        {/* Icônes à droite */}
        <div className="flex shrink-0 items-center gap-4">
          <Link
            href="/contact"
            className="text-[#d26a58] hover:opacity-70 hover:text-orange-900"
            aria-label="Contact"

          >
            <Mail size={20} />
          </Link>

          {/* <Link
            href="/about"
            className="text-[#d26a58] hover:opacity-70 hover:text-orange-900"
            aria-label="About"
          >
            <User size={20} />
          </Link> */}
  <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <User size={20} className="text-[#d26a58] cursor-pointer" />
      </button>

      {open && (
        <div className="absolute  right-0 mt-2 w-28 mx-[-2]
         rounded bg-white shadow-lg  ">
          <Link href="/user" className="block p-2 
           hover:bg-red-100 text-[#978c7b] cursor-pointer mt-2 hover:text-[#d26a58]">
            Sign In
          </Link>
          <Link href="/sign-up" className="block p-2
           hover:bg-red-100  text-[#978c7b] cursor-pointer hover:text-[#d26a58]">
            Sign Up
          </Link>
        </div>
      )}
    </div>
          
<Link
  href="/cart"
  aria-label={`Shopping cart: ${cartCount} items`}
  className="relative inline-flex text-[#d26a58] hover:opacity-70 hover:text-orange-900"
>
  <ShoppingCart size={22} />

  {cartCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-950 px-1 text-xs font-bold text-white">
      {cartCount}
    </span>
  )}
</Link>

        </div>
      </header>
    </>
  );
}


