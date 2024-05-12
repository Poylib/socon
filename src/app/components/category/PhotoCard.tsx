"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  photo: {
    category: string;
    content: string;
    src: string;
  };
}

export default function PhotoCard({ photo, index }: Props) {
  const router = useRouter();

  const goDetail = (path: string, category: string) => {
    const slug = path.split(" ").join("_");
    router.push(`jpg/${slug}?category=${category}`);
  };

  return (
    <div
      className="relative h-[210px] w-[100%] sm:h-[280px] md:h=[360px]"
      onClick={() => goDetail(photo.content, photo.category)}
    >
      <Image
        src="https://d66us06o4pe3t.cloudfront.net/jpg/[Commercial]_%E1%84%80%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%80%E1%85%A1%E1%84%92%E1%85%A7%E1%86%B8%E1%84%92%E1%85%AC%20%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5/1.jpg"
        fill={true}
        style={{ objectFit: "cover" }}
        alt="photo"
        sizes={"50vw"}
        priority={index}
      />
    </div>
  );
}
