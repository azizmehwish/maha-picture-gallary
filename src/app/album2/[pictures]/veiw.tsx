"use client";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { AddTags } from "./action";
import Album from "@/app/gallery/albumDialog";

function Veiw({ src, tag, fun }: { src: string; tag: string[]; fun?: any }) {
  const [fav, setfav] = useState(tag.includes("favourite"));

  return (
    <div className="relative">
      <CldImage
        className="rounded-sm"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Image"
      />
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          setfav(!fav);
          AddTags(src, fav);
          fun();
        }}
      >
        {fav ? (
          <AiFillHeart className="w-8 h-8 cursor-pointer text-red-700" />
        ) : (
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-whithover:text-red-600 duration-300" />
        )}
      </div>
      <div className="absolute top-1 left-1">
        <Link href={`/edith?public_id=${src}`}>
          <CiEdit className="w-8 h-8 cursor-pointer text-red-300" />
        </Link>
      </div>
      {/* add to album */}
      <div className="absolute bottom-1 left-1">
        <Album imageData={src} />
      </div>
    </div>
  );
}
export default Veiw;
