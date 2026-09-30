import Image from "next/image";
import Link from "next/link";
import { Mail, User,ShoppingCart,Languages } from "lucide-react";
  import { Globe } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* <div className="flex justify-center align-center
       bg-rose-950  text-[#FFDCDC] w-full 
       font-mono text-sm h-10 pt-2 mb-0">Livraison offerte en Mondial Relay dès 80 € d’achat.</div> */}
<div className="flex justify-center items-center bg-rose-950 text-[#FFDCDC] w-full font-mono text-sm h-10">
  {/* Livraison offerte en Mondial Relay dès 80 € d’achat. */}
  Free delivery with Mondial Relay on orders over €80.

</div>
    <header className="flex w-full 
      bg-amber-50 px-6 py-4  gap-6">
        {/* <div className=" flex flex-row mt-2 gap-4"> */}
   <div className="flex items-center gap-0">
  <Image
    src="/LogoShop.png"
    alt="Shop Nor logo"
    width={80}
    height={80}
  />

  <h1 className="text-xl font-stretch-50% text-[#d26a58] -ml-6 font-[Pacifico]">
   Nor shop
  </h1>
</div>
{/* </div> */}
      <nav className="flex items-center  justify-center gap-10 mx-20 "        
     
 >
         <Link
          href="/user-profile"
className="text-smx text-[#d26a58] hover:text-orange-900"  >
        Home       
 </Link>
        <Link
          href="/user-profile"
className="text-smx text-[#d26a58] hover:text-orange-900"  
        >
          clothes of winter
        </Link>

        <Link href="/"
        className="text-smx text-[#d26a58] hover:text-orange-900"  >

          clothes of Spring
        </Link>

        <Link href="/about"
        className="text-smx text-[#d26a58] hover:text-orange-900"  >
 
          clothes of Summer
        </Link>
         <Link href="/about" 
         className="text-smx text-[#d26a58] hover:text-orange-900"  

>          clothes of automne
        </Link>
        
      </nav>
    <div className="flex justify-end items-center gap-4 mt-2 mx-6">
      {/* <Link
  href="/language"
  aria-label="Changer la langue"
  className="text-[#790D16] hover:opacity-70"
>
  <Languages size={22} />
</Link> */}

<button className="flex items-center gap-2 text-[#790D16]">
  {/* <Globe size={18} /> */}
  <span>Fr</span>
</button>
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

  <Link href="/cart" className="text-[#790D16]">
    <ShoppingCart size={22} />
  </Link>
</div>
      
    </header>
    </>
        
  );
}