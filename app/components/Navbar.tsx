

"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, User, ShoppingCart } from "lucide-react";

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
      <div className="absolute left-0 top-full z-50 hidden min-w-40 flex-col rounded-md border border-gray-200 bg-white py-2 shadow-lg group-hover:flex group-focus-within:flex">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="block w-full whitespace-nowrap px-4 py-2 text-sm text-[#978c7b] transition-colors hover:bg-orange-50 hover:text-[#d26a58]"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Bandeau de livraison */}
      <div className="flex h-10 w-full items-center justify-center border-b border-black bg-rose-950 px-2 text-center font-mono text-sm text-[#FFDCDC]">
        Free delivery with Mondial Relay on orders over €80.
      </div>

      {/* Navbar */}
      <header className="flex w-full items-center justify-between gap-4 bg-red-100 px-4">
        {/* Logo */}
        <Link href="/about" className="flex shrink-0 items-center">
  <Image
    src="/LogoShop.png"
    alt="Shop Nor logo"
    width={60}
    height={60}
    priority
    className="h-auto w-[90px] "
  />

          <h1 className="-ml-6 whitespace-nowrap font-[Pacifico] text-xl text-[#d26a58]">
            Nor shop
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-8">
          <Link
            href="/"
            className="whitespace-nowrap text-sm text-[#d26a58] hover:text-orange-900"
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
            className="text-[#790D16] hover:opacity-70"
            aria-label="Contact"
          >
            <Mail size={20} />
          </Link>

          <Link
            href="/about"
            className="text-[#790D16] hover:opacity-70"
            aria-label="About"
          >
            <User size={20} />
          </Link>

          <Link
            href="/cart"
            className="text-[#790D16] hover:opacity-70"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={22} />
          </Link>
        </div>
      </header>
    </>
  );
}
