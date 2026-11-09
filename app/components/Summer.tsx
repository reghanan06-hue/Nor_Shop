

import PictureGallery from "./PictureGallery";

type SummerProps = {
  style: string;
};

export default function Summer({ style }: SummerProps) {
  return (
    <div className="flex min-h-screen flex-col items-center 
    gap-4 bg-[#FFF5F5] dark:bg-black">
      <h1
  className={`font-bold capitalize text-[#d26a58] 
    mt-6 mb-0
    text-lg
    sm:text-xl
    lg:text-2xl`}
>
  Clothes of Autumn - {style}
</h1>

      <div className="w-full max-w-5xl px-4">
        <PictureGallery season="summer" style={style} />
      </div>
    </div>
  );
}