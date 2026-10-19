import React from 'react'
import { Truck, ShieldCheck, Award, Headset } from "lucide-react";
import { Leaf } from "lucide-react";

export default function  () {
  return (
     <div className="flex flex-1 flex-row gap-2 rounded-t-2xl  px-4 py-6 bg-[#FFF5F5] mb-0"> 
    {/* Fast Shipping */} 
    <div className="flex flex-1 flex-col mt-8 mx-8 rounded-2xl px-4 py-6 hover:bg-red-100">
       <Truck size={32} className="text-[#978c7b]  mx-10" />
        <h3 className="font-bold text-[#978c7b]">Fast Shipping</h3>
     <p className="text-sm text-[#978c7b]">
     Fast, reliable delivery. </p> 
     </div>
               <div className="flex flex-1 flex-col mt-8 mx-4 rounded-2xl px-4 py-6  hover:bg-red-100"> 

        <ShieldCheck size={32} className="text-[#978c7b] mx-10" />
         <h3 className="font-bold text-[#978c7b]">Secure Shopping</h3>
         <p className="text-sm text-[#978c7b]"
         > Secure payments, worry-free shopping </p>
          </div> 
          {/* Amazing Quality */}
           <div className="flex flex-1 flex-col mt-8 mx-4 rounded-2xl px-4 py-6  hover:bg-red-100 "> 
            <Award size={32} className="text-[#978c7b] mx-10" />
             <h3 className="font-bold text-[#978c7b]">Amazing Quality</h3>
             <p className="text-sm text-[#978c7b]">
              Exceptional quality, every time. </p> 
             </div> 
                       {/* Style hijab by seasons */}


                <div className="flex flex-1 flex-col mt-8 mx-4 rounded-2xl px-4 py-6  hover:bg-red-100"> 

             <Leaf size={32} className="text-[#978c7b]  mx-10" />
             <h3 className="font-bold text-[#978c7b]">Seasonal Collection</h3>
             <p className="text-sm text-[#978c7b]">
              Stylish hijabs for every season. </p> 
             </div> 
             {/* 24h Service */}
              <div className="flex flex-1 flex-col mt-8 mx-4 rounded-2xl px-4 py-6  hover:bg-red-100">
               <Headset size={32} className="text-[#978c7b]  mx-6" />
                <h3 className="font-bold text-[#978c7b]">24h Service</h3>
                <p className="text-sm
  text-[#978c7b]">  24/7 customer support.</p> 
  </div>
    </div>

  )
}
