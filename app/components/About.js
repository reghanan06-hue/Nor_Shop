import { Truck, ShieldCheck, Award, Headset } from "lucide-react";
export default function AboutPage() {
  return (
    <>
      {/* Title */}
      <div className="mt-9 flex items-center justify-center text-[#d26a58]">
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>

      <main>
        {/* Accordion */}
        <div className="mx-auto mt-10 w-full max-w-6xl px-8">
          
          {/* 1 */}
          <details className="group border-b border-gray-300 py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                About Nor Shop
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
                Welcome to Nor Shop, your destination for fashion and modern
                clothing.
              </p>
            </div>
          </details>

          {/* 2 */}
          <details className="group border-b border-gray-300 py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                Website Launch & Purpose
              </span>

              <span className="text-base text-[#DE7272] group-open:hidden">
                ⌄
              </span>

              <span className="hidden text-base text-[#978c7b] group-open:inline">
                ⌃
              </span>
            </summary>

            <div className="mt-8 text-[#978c7b]">
              <p>
                Our website was created to offer quality fashion and make
                shopping easier for our customers.
              </p>
            </div>
          </details>

          {/* 3 */}
          <details className="group border-b border-gray-300 py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                Our Products & Reach
              </span>

              <span className="text-base text-[#978c7b] group-open:hidden">
                ⌄
              </span>

              <span className="hidden text-base text-[#978c7b] group-open:inline">
                ⌃
              </span>
            </summary>

            <div className="mt-8 text-[#978c7b]">
              <p>
                We offer different collections adapted to every season.
              </p>
            </div>
          </details>

          {/* 4 */}
          <details className="group border-b border-gray-300 py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                Quality & Customer Satisfaction
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
                Customer satisfaction and product quality are our priorities.
              </p>
            </div>
          </details>

          {/* 5 */}
          <details className="group border-b border-gray-300 py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                Sales Channels
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
                Our products are available through our online platform.
              </p>
            </div>
          </details>

          {/* 6 */}
          <details className="group border-b border-gray-300 py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
              <span className="px-2 py-1 text-[#d26a58]">
                Commitment & Responsibility
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
                We are always committed to fulfilling our duties on time, with
                precision and integrity, and taking full responsibility.
              </p>
            </div>
          </details>
        </div>

        {/* Main section */}
        <div
          className="mx-auto mt-10 mb-5 flex min-h-screen w-full max-w-6xl
          flex-row items-start gap-12 rounded-b-4xl bg-[#FFF5F5] px-8"
        >
          {/* Journal */}
          <div className="mt-[250px] w-1/2 ">
            <h2 className="mb-6 text-xl font-bold text-[#d26a58]">
              Journal by the Numbers
            </h2>

            <p className="text-[#978c7b]">
              Our milestones through the years 👉
            </p>

            <button
              className="mt-5  mx-8 rounded-4xl bg-[#d26a58] px-4 py-2 text-white
              hover:bg-[#d97462] cursor-pointer"
            >
              Buy journal
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-[150px] flex w-2/3 flex-col">
            
            {/* First row */}
            <div className="mb-5 flex flex-row gap-5">
              
              <div className="h-40 w-50 rounded-2xl bg-[#d26a58] animation-bounce
               font-bold shadow-lg ">
                <h1 className="mt-10 text-center text-4xl font-bold text-white">
                  30,000+
                </h1>

                <p className="text-center text-orange-100 text-sm">
                  Satisfied Customers
                </p>
              </div>

              <div className="h-40 w-50 rounded-2xl bg-[#978c7b] font-bold">
                <h1 className="mt-10 text-center text-4xl font-bold text-white">
                  30,000+
                </h1>

                <p className="text-center text-orange-100 text-sm">
                  5 Star Average Reviews
                </p>
              </div>
            </div>

            {/* Second row */}
            <div className="mb-10 flex flex-row gap-5">
              
              <div className="h-40 w-50 rounded-2xl bg-[#978c7b] font-bold">
                <h1 className="mt-10 text-center text-4xl font-bold text-white">
                  200K
                </h1>

                <p className="text-center text-orange-100 text-sm">
                  Orders Shipped
                </p>
              </div>

              <div className="h-40 w-50 rounded-2xl bg-[#d26a58] font-bold">
                <h1 className="mt-10 text-center text-4xl font-bold text-white">
                  10Y
                </h1>

                <p className="text-center text-orange-100 text-sm">
                  Years on the Market
                </p>
              </div>
            </div>

          </div>
        
        </div>
  <div className="flex flex-1 flex-row gap-3 rounded-t-2xl px-4 py-6 bg-[#FFF5F5] mb-7"> 
    {/* Fast Shipping */} 
    <div className="flex flex-1 flex-col gap-3 rounded-2xl px-4 py-6">
       <Truck size={32} className="text-[#978c7b] mx-10" />
        <h3 className="font-bold text-[#978c7b]">Fast Shipping</h3>
     <p className="text-sm text-[#978c7b]">
     Fast, reliable delivery. </p> </div>
               <div className="flex flex-1 flex-col gap-3 rounded-2xl px-4 py-6 "> 

        <ShieldCheck size={32} className="text-[#978c7b] mx-10" />
         <h3 className="font-bold text-[#978c7b]">Secure Shopping</h3>
         <p className="text-sm text-[#978c7b]"
         > Secure payments, worry-free shopping </p>
          </div> 
          {/* Amazing Quality */}
           <div className="flex flex-1 flex-col gap-3 rounded-2xl px-4 py-6 "> 
            <Award size={32} className="text-[#978c7b] mx-10" />
             <h3 className="font-bold text-[#978c7b]">Amazing Quality</h3>
             <p className="text-sm text-[#978c7b]">
              Exceptional quality, every time. </p> 
             </div> {/* 24h Service */} <div className="flex flex-1 flex-col gap-3 rounded-2xl px-4 py-6">
               <Headset size={32} className="text-[#978c7b]  mx-6" />
                <h3 className="font-bold text-[#978c7b]">24h Service</h3>
                <p className="text-sm
  text-[#978c7b]">  24/7 customer support.</p> 
  </div>
  </div>

        <hr />
      </main>
    </>
  );
}

