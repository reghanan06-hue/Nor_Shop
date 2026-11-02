"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
export default function AdminPage() {
    const router = useRouter()
  return (
    <>
          <div className="mt-9 flex items-center justify-center text-[#d26a58]">
  <h1 className="text-center text-5xl font-bold text-[#d26a58]">
     Admin</h1>
      </div>
      <form className='flex flex-col gap-4 w-1/2 mx-auto mt-5 
      justify-center items-center bg-pink-50 rounded-3xl  py-10 mb-5'>
 <div className='flex flex-col gap-2 mb-3' >
        <label htmlFor="username" className='text-lg font-semibold
         text-[#978c7b] mt-14'>Username:</label>
        <input
         type="text" 
         id="username" 
         name="username"
         className="w-90 rounded-md border
   border-orange-200 px-3 py-2 text-[#978c7b] 
   outline-none transition focus:border-[#d26a58] focus:ring-2 focus:ring-orange-200"
 />
      </div>

 <div className='flex flex-col gap-2 mb-3  '>
        <label htmlFor="password" className='text-lg font-semibold 
         text-[#978c7b]'>Password:</label>
      <input
  type="password"
  id="password"
  name="password"
  placeholder="Enter your password"
  className="w-90 rounded-md border
   border-orange-200 px-3 py-2 text-[#978c7b] 
   outline-none transition focus:border-[#d26a58] focus:ring-2 focus:ring-orange-200"
/>
      </div>
      <button type="submit" 
      onClick={() => router.push('/admin/dashboard')}
      className='bg-[#d26a58]
       text-white py-2 w-90 rounded-2xl
       hover:bg-orange-700 transition-colors 
       duration-300 cursor-pointer mt-1 mb-6'>Login</button>
      </form>
    </>
  )
}


