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
    description: `${decodedSlug} 갤러리`,
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
