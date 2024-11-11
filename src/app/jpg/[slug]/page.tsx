import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    category: string;
  };
}

type Content = {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  StorageClass: string;
};

interface ContentListRes {
  Contents: Content[];
}

async function getContentList({
  category,
  slug,
}: {
  category: string;
  slug: string;
}): Promise<ContentListRes> {
  const response = await fetch(
    `${process.env.SSR_BASE_URL}/aws/slug/api?category=${category}&slug=${slug}`
  );
  return response.json();
}

export default async function Category({ params, searchParams }: Props) {
  const { category } = searchParams;
  const { slug } = params;
  let decodedSlug = decodeURIComponent(slug);
  decodedSlug = decodedSlug.replace(/_/g, " ");

  const { Contents } = await getContentList({ category, slug });

  return (
    <section className=" w-[100%] py-[70px] px-6 max-w-screen-md min-h-[100vh]">
      {Contents?.map((el, idx) => {
        const SRC = `https://${process.env.CLOUDFRONT_URL}/${el.Key}`;
        return (
          <Image
            src={SRC}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto mb-4"
            alt={`${decodedSlug} ${idx}번째 이미지`}
            title={`${decodedSlug} ${idx}번째 이미지`}
            key={`${idx}`}
            loading="lazy"
            placeholder="blur"
            blurDataURL={SRC}
          />
        );
      })}
    </section>
  );
}
