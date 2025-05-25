interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { category } = params;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '소콘 스튜디오',
    description:
      '개인 촬영으로 진행된 건축 사진 컬렉션에는 다양한 빌딩 사진과 인테리어 사진이 포함되어 있으며, 상업 사진을 전문으로 하는 출장 사진 서비스도 제공합니다.',
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-[70px] px-6 w-full max-w-[1024px]">
      <div>
        <h1>소콘 스튜디오</h1>
      </div>
    </section>
  );
}
