"use client";

import React, { useState } from "react";
import BenefistPages from "../components/BenefitsPage";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {

    console.log({ name, email, message });

    alert("Your message has been sent successfully !");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="min-h-screen w-full bg-[#fef2f2] rounded-b-4xl">
      {/* <main className="mx-auto w-full max-w-6xl px-4 py-12 "> */}
      <main className="mx-auto w-full max-w-6xl px-4 pt-12 pb-20 sm:pb-12">
        <h1 className="text-2xl font-bold md:text-4xl 
         lg:text-5xl text-[#d26a58] text-center">
          Contact us 
        </h1>

        {/* <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 flex w-full
           max-w-xl flex-col gap-6 rounded-2xl
            bg-red-200 p-6 shadow-md sm:p-8 mb-2"
        > */}
       <form
  onSubmit={handleSubmit}
  className="mx-auto mt-12 mb-8 sm:mb-4 flex w-full max-w-xl flex-col
    gap-2 sm:gap-2 rounded-2xl bg-red-200 p-6
    shadow-md sm:p-8"
>
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-bold text-[#797062]" >
              Name :
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full rounded-xl border-1 border-amber-500 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#d26a58] focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-bold text-[#797062]"
            >
              Email :
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border-1 border-amber-500
               bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#d26a58] focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-bold text-[#797062]"
            >
              Message :
            </label>

            <textarea
              id="message"
              placeholder="Enter your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={5}
              className="w-full resize-y rounded-xl
               border-1 border-amber-500
                bg-white px-4 py-3 text-sm
                 text-gray-700 outline-none transition 
                 focus:border-[#d26a58] focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className=" mx-auto mt-2 w-full rounded-xl
             bg-[#d26a58] px-14 py-3 text-sm font-semibold
              text-white transition duration-200
               hover:bg-[#f6826d] 
               focus:outline-none focus:ring-2
                focus:ring-amber-700 
                focus:ring-offset-2 sm:w-40 cursor-pointer"
          >
          Submit  
          </button>
        </form>

        {/* <hr className=" md:my-2 border border-[#d26a58]  " /> */}

      </main>

    </div>
  );
}