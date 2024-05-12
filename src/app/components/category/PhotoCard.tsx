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
  console.log("bb", photo.src);
  return (
    <div
      className="relative h-[210px] w-[100%] sm:h-[280px] md:h=[360px]"
      onClick={() => goDetail(photo.content, photo.category)}
    >
      <Image
        src={photo.src}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="photo"
        sizes={"50vw"}
        priority={index}
      />
    </div>
  );
}
