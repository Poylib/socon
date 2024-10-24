"use client";
import { DataType } from "@/app/aws/jpg/api/route";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

interface PhotoCardProps {
  photo: DataType;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const goDetail = () => {
    router.push(`jpg/${photo.place}?category=${photo.category}`);
  };

  return (
    <div
      className="relative h-[210px] w-[100%] sm:h-[280px] md:h=[360px] overflow-hidden hover:cursor-pointer"
      onClick={goDetail}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={photo.url}
        fill={true}
        className="transition-scale duration-500"
        style={{ objectFit: "cover", scale: isHovered ? 1.2 : 1 }}
        alt="photo"
        sizes={"50vw"}
      />
      <div
        className="absolute flex flex-col items-center justify-center w-full h-full bg-white z-10 transition-opacity duration-500"
        style={{ opacity: isHovered ? 0.8 : 0 }}
      >
        <span className="mb-8">{photo.category}</span>
        <span className="text-xl">{photo.place}</span>
      </div>
    </div>
  );
}
