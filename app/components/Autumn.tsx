
// import Image from 'next/image'
import React from 'react'
import PictureGallery from './PictureGallery';

type AutumnProps ={
  style:string;
}
export default function Autumn({style}:AutumnProps) {
  return (
  <div className="flex min-h-screen 
  flex-col items-center 
  bg-[#FFF5F5] gap-4 dark:bg-black ">
      <h1 className="text-2xl font-bold capitalize text-[#d26a58] mt-6 mb-0">
        Clothes of Autumn - {style}

       </h1>
       <div className='w-full  max-w-5xl px-4 mt-0  '>
<PictureGallery season='autumn' style={style}/>
       </div>
        </div>
  )
}

