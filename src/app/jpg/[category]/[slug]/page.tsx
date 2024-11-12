import Image from "next/image";

interface Props {
  params: {
    slug: string;
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

export default async function Page({ params }: Props) {
  const { slug, category } = params;
  let decodedSlug = decodeURIComponent(slug);
  decodedSlug = decodedSlug.replace(/_/g, " ");

  const { Contents } = await getContentList({ category, slug });

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: decodedSlug,
    description: "소콘 스튜디오 사진 컬렉션",
    creator: {
      "@type": "Person",
      name: "Jihoon Han",
    },
    datePublished: new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
    ).toISOString(),
    contentUrl: `https://socon.kr/jpg/${category}/${slug}`,
  };

  return (
    <section className=" w-[100%] py-[70px] px-6 max-w-screen-md min-h-[100vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      {Contents?.map((el, idx) => {
        const SRC = `https://${process.env.CLOUDFRONT_URL}/${el.Key}`;
        return (
          <Image
            src={SRC}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto mb-4"
            alt={`${decodedSlug} 사진 ${idx}`}
            title={`${decodedSlug} 사진`}
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
