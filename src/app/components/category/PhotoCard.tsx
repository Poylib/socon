"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PhotoCard({ photo, index }) {
  const gg = "jpg/list/5_Commercial_78b1n.jpg";
  const result = gg.match(/\/([^\/]+)\.jpg$/);
  console.log("🪄  PhotoCard  photo", result?.[1]);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const goDetail = (key: string) => {
    const hash = key.match(/_(.*?)\.jpg/);
    if (!hash) return;
    const [slug, category] = hash[1].split("_");

    router.push(`jpg/${category}?category=${slug}`);
  };

  return (
    <div
      className="relative h-[210px] w-[100%] sm:h-[280px] md:h=[360px]"
      onClick={() => goDetail(photo.Key)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${photo.Key}`}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="photo"
        sizes={"50vw"}
        priority={index}
      />
      {isHovered && (
        <div className="absolute w-full h-full bg-white opacity-70 z-10"></div>
      )}
    </div>
  );
}
