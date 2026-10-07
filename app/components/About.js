

import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
  <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
       <h1 className='text-5xl mt-6'>About Us</h1>
       <div className='text-center text-lg mt-6 mx-4'>
        <p>Welcome to Nor Shop, your ultimate destination for fashion that transcends seasons. We are passionate about bringing you the latest trends and timeless classics for every season of the year. Our curated collections are designed to keep you stylish and comfortable, whether it's the crisp air of autumn, the cozy vibes of winter, the blooming beauty of spring, or the sunny days of summer.</p>
        <p className='mt-4'>At Nor Shop, we believe that fashion is a form of self-expression. That's why we offer a diverse range of clothing and accessories to suit every taste and occasion. From casual wear to elegant ensembles, our products are crafted with quality and style in mind.</p>
        <p className='mt-4'>Join us on this fashionable journey and explore our seasonal collections. Whether you're looking for a statement piece or everyday essentials, Nor Shop has something special for everyone. Thank you for choosing us as your go-to fashion destination!</p>
       </div>
       <nav>
        <Link href="/about" className="text-[#f5b7ab] hover:text-orange-300"> About Nor Shop</Link>
       </nav>
        </div>
  )
}

