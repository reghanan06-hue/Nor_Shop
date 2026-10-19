
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


type Picture = {
  id: number;
  title: string;
  season: string;
  style: string;
  image: string;
  width: number;
  height: number;
  price:number;
};
export default function PictureGallery({
  season,
  style,
}: {
  season: string;
  style: string;
}) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPictures() {
      setLoading(true);
      setError("");

      try {
        console.log("Loading:", season, style);

        const response = await fetch(
          `/api/pictures?season=${encodeURIComponent(season)}&style=${encodeURIComponent(style)}`,
          { signal: controller.signal }
        );

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received pictures:", data.pictures);

        setPictures(data.pictures);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Gallery error:", err);
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadPictures();

    return () => controller.abort();
  }, [season, style]);

  if (loading) return <p>Loading pictures...</p>;
  if (error) return <p>Erreur: {error}</p>;
  if (pictures.length === 0) return <p>No pictures found.</p>;

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {pictures.map((picture) => (
        <article key={picture.id}>
          {/* <Image
            src={picture.image}
            alt={picture.title}
            width={600}
            height={800}
            className="w-full h-auto rounded-lg object-cover"
          /> */}
          <Image
  src={picture.image}
  alt={picture.title}
  width={picture.width}
  height={picture.height}
  className="h-auto w-full rounded-lg object-cover"
/>
          <h2 className=" flex mt-2 font-medium text-orange-500 items-center-safe">{picture.title}</h2>
        <p>{picture.price} <span> MD</span></p>
        </article>
      ))}
    </div>
  );
}
