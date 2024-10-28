import { getJpgContentList } from "@/app/aws/jpg/getPostList";
import Image from "next/image";

async function getContentList({ category, slug }) {
  const response = await fetch(
    `${process.env.BASE_URL}/aws/slug/api?category=${category}&slug=${slug}`,
    {
      cache: "no-cache",
    }
  );
  return response.json();
}

export default async function Category({ params, searchParams }) {
  const { category } = searchParams;
  const { slug } = params;

  const { Contents } = await getContentList({ category, slug });

  const str = `https://${process.env.CLOUDFRONT_URL}/${Contents[0].Key}`;

  const formattedStr = str.replace(/ /g, "+");
  console.log("🪄  Category  formattedStr", formattedStr);

  return (
    <section className=" w-[100%] py-[70px] px-6 max-w-screen-md min-h-[100vh]">
      {Contents?.map((el, idx) => {
        if (idx === 0) return;
        const KEY = `https://${process.env.CLOUDFRONT_URL}/${encodeURIComponent(
          el.Key
        )}`;

        return (
          <Image
            src={KEY}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto mb-4"
            alt="photo"
            key={`${idx}`}
            loading="lazy"
          />
        );
      })}
    </section>
  );
}
