"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function PhotoCard({ photo, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const goDetail = (key: string) => {
    const hash = key.match(/_(.*?)\.jpg/);
    if (!hash) return;
    const [slug, category] = hash[1].split("_");

    router.push(`jpg/${category}?category=${slug}`);
  };

  const keyArr = useMemo(() => {
    const result = photo.Key.match(/\/([^\/]+)\.jpg$/);
    const key = result?.[1].split("_");
    return key;
  }, [photo]);
  console.log("bbv", keyArr[3]);

  return (
    <div
      className="relative h-[210px] w-[100%] sm:h-[280px] md:h=[360px] overflow-hidden hover:cursor-pointer"
      onClick={() => goDetail(photo.Key)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${photo.Key}`}
        fill={true}
        className="transition-scale duration-500"
        style={{ objectFit: "cover", scale: isHovered ? 1.2 : 1 }}
        alt="photo"
        sizes={"50vw"}
        priority={index}
      />
      <div
        className="absolute flex flex-col items-center justify-center w-full h-full bg-white z-10 transition-opacity duration-500"
        style={{ opacity: isHovered ? 0.8 : 0 }}
      >
        <span className="mb-8">{keyArr[1]}</span>
        <span className="text-xl">{keyArr[3].normalize("NFC")}</span>
      </div>
    </div>
  );
}
