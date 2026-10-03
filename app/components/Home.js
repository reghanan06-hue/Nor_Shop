import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div className="flex  w-full min-h-screen flex-col items-center  gap-2.5 bg-[#FFF5F5] mt-0">
      <h2 className=" w-80  p-2  text-sm font-semibold text-center
       bg-green-200 mt-8 text-black rounded-xl">
        The Four Seasons Collection
      </h2>
      <h1 className=" 
       p-2  text-3xl font-semibold text-center
      mt-8 rounded-xl font-[Pacifico] text-[#d26a58]" >
The architecture of Modest Grace
      </h1>
<p> 
Elegant hijabs and modest clothing for every season, combining comfort, timeless beauty, and effortless grace.
</p>
{/* <div className="flex flex-row md:flex-row gap-4 mt-4 "> */}
{/* <div className="grid grid-cols-4 gap-4">

  <Image src="/Summer.jpg" alt="Summer" width={300} height={80} className="rounded-3xl" />

<Image src="/Spring.jpg" alt="Spring" width={300} height={80} className="rounded-3xl" />
<Image src="/Autumn.jpg" alt="Autumn" width={300} height={80} className="rounded-3xl" />
<Image src="/Winter1.jpg" alt="Winter" width={300} height={80} className="rounded-3xl" />

</div> */}
<div className="relative h-500 w-full">
  <Image
   
    
      src="/First-img.jpg"
    alt="First picture"
    width={650}
    height={30}
    className="justify-content-center  rounded-2xl border-2 border-amber-600"
  />
  <Image
  
    src="/Summer.jpg"
    alt="Spring"
    width={300}
    height={80}
    className="absolute left-0 top-6 z-90 rounded-3xl"
  />

  <Image
   src="/Winter1.jpg"
    alt="Winter"
    width={300}
    height={80}
    className="absolute left-150 top-140 z-90 rounded-3xl"
  />

  <Image
    src="/Autumn.jpg"
    alt="Autumn"
    width={300}
    height={80}
    className="absolute left-4 top-160 z-50 rounded-3xl"
  />

  
   <Image
   
    
      src="/Spring.jpg"
    alt="Spring"
    width={300}
    height={100}
    className="absolute left-190 top-10 z-4 rounded-2xl "
  />
</div>
    </div>
  )
}

