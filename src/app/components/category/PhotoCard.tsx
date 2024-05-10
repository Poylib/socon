"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  photo: {
    thumbnail: string | undefined;
    category: string;
    content: string;
    src: string;
  };
}

export default function PhotoCard({ photo }: Props) {
  const router = useRouter();

  const goDetail = (path: string) => {
    const slug = path.split(" ").join("_");
    router.push(`jpg/${slug}`);
  };

  return (
    <div
      className="relative h-[210px] w-[100%] sm:h-[280px] md:h=[360px]"
      onClick={() => goDetail(photo.content)}
    >
      <Image
        src={photo.src}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="photo"
        sizes={"50vw"}
      />
    </div>
  );
}
