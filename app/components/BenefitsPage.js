

"use client";

import React from "react";
import {
  Truck,
  ShieldCheck,
  Award,
  Headset,
  Leaf,
} from "lucide-react";

export default function BenefitsPage() {
  const benefits = [
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Fast, reliable delivery.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description: "Secure payments, worry-free shopping.",
    },
    {
      icon: Award,
      title: "Amazing Quality",
      description: "Exceptional quality, every time.",
    },
    {
      icon: Leaf,
      title: "Seasonal Collection",
      description: "Stylish hijabs for every season.",
    },
    {
      icon: Headset,
      title: "24h Service",
      description: "24/7 customer support.",
    },
  ];

  return (
    <section className="relative isolate box-border w-full max-w-full min-w-0
      overflow-hidden rounded-t-2xl bg-[#FFF5F5] mt-9
      px-3 py-5 md:px-6 md:py-6 
 ">

      {/* Desktop and Tablet */}
      <div className="hidden w-full min-w-0 grid-cols-3 gap-3
        md:grid lg:grid-cols-5 lg:gap-4">

        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex min-w-0 flex-col items-center justify-center
                rounded-2xl px-2 py-6 text-center
                transition-colors duration-300 hover:bg-red-200"
            >
              <Icon
                size={32}
                className="mb-3 shrink-0 text-[#978c7b]"
              />

              <h3 className="break-words font-bold text-[#978c7b]">
                {benefit.title}
              </h3>

              <p className="mt-2 break-words text-sm text-[#978c7b]">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className=" mb-7 block w-full  min-w-0 md:hidden  ">
        <div
          className="flex w-full  min-w-0 gap-3 overflow-x-auto
            overflow-y-hidden pb-3 snap-x snap-mandatory
            touch-pan-x overscroll-x-contain scroll-smooth
            [-webkit-overflow-scrolling:touch]
            [&::-webkit-scrollbar]:hidden "
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex min-h-[145px] w-[180px] shrink-0
                  snap-start flex-col items-center justify-center
                  gap-2 rounded-xl bg-white p-4 text-center hover:bg-red-200"
              >
                <Icon
                  size={32}
                  className="shrink-0 text-[#978c7b]"
                />

                <h3 className="font-bold text-[#978c7b]">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[#978c7b]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
