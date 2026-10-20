
import PictureGallery from "./PictureGallery";

type SpringProps = {
  style: string;
};

export default function Spring({ style }: SpringProps) {
  return (
    <div className="flex min-h-screen flex-col items-center 
    gap-4 bg-[#FFF5F5] dark:bg-black">
      <h1 className="text-2xl font-bold capitalize text-[#d26a58] mt-6">
        Clothes of Spring - {style}
      </h1>

      <div className="w-full max-w-5xl px-4">
        <PictureGallery season="spring" style={style} />
      </div>
    </div>
  );
}
