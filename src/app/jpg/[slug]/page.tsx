import Image from "next/image";

export default async function Category({ params, searchParams }) {
  const { category } = searchParams;
  const { slug } = params;
  const data = await fetch(
    `${process.env.BASE_URL}/aws/slug/api?category=${category}&slug=${slug}`,
    {
      cache: "no-cache",
    }
  );

  const { Contents } = await data.json();

  return (
    <section className=" w-[100%] py-[70px] px-6 max-w-screen-md min-h-[100vh]">
      {Contents?.map((el, idx) => {
        if (idx === 0) return;
        return (
          <Image
            src={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${el.Key}`}
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
