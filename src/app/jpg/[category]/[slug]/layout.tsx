import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let decodedSlug = decodeURIComponent(params.slug);
  decodedSlug = decodedSlug.replace(/_/g, " ");

  return {
    title: `${decodedSlug} | socon`,
    description: `${decodedSlug}의 건축, 인테리어, 상업적 공간 사진을 제공합니다. 출장 촬영 서비스와 함께 다양한 구도에서 촬영된 고퀄리티 이미지를 만나보세요.`,
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
