import { getJpgContent } from "@/app/aws/jpg/getPost";
import { getPosts } from "@/data/jpg/get-contents";
import Image from "next/image";

export default async function Category({ params, searchParams }) {
  const { category } = searchParams;
  const { path, slug } = params;

  const req = `${path}/${category}/${slug}`;

  const { Contents } = await getJpgContent(req);

  return (
    <section className="grid grid-cols-1 w-[100%] md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[70px] px-6">
      {Contents?.map((el, idx) => {
        if (idx === 0) return;
        return (
          <div
            key={`${idx}`}
            className="relative h-[210px] w-[100%] sm:h-[280px] md:h=[360px]"
          >
            <Image
              src={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${el.Key}`}
              fill={true}
              style={{ objectFit: "cover" }}
              alt="photo"
              sizes={"50vw"}
              priority={true}
            />
          </div>
        );
      })}
    </section>
  );
}
