
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import BenefitsPage from "./components/BenefitsPage";
import Footer from "./components/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-center 
    overflow-hidden bg-[#FBF6F0] px-6 py-10 mb-5 ">
    
   <Image
       src="/images/not-found.jpg"
       alt="Summer"
       width={900}
       height={420}
       className="  rounded-xl" />
   

      <h2 className="mt-2 text-center text-2xl font-bold text-[#d26a58] sm:text-3xl">
        Page Not Found
      </h2>

      <p className="mt-3 text-center text-[#978c7b]">
        Sorry, the page you are looking for does not exist.
      </p>

      <button
        type="button"
        onClick={() => router.push("/")}
        className="mt-6 rounded-full bg-[#d26a58]
         px-8 py-3 text-lg font-bold text-white transition
          hover:bg-orange-900 cursor-pointer"
      >
        Back to Home
      </button>
      
    </main>
    <BenefitsPage/>
      <Footer/>
    </>
    
  );
}
