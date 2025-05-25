export default async function Category() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '소콘 스튜디오',
    description:
      '개인 촬영으로 진행된 건축 사진 컬렉션에는 다양한 빌딩 사진과 인테리어 사진이 포함되어 있으며, 상업 사진을 전문으로 하는 출장 사진 서비스도 제공합니다.',
    // mainEntity: data.map((photo) => {
    //   return {
    //     '@type': 'ImageObject',
    //     contentUrl: `https://socon.kr/jpg/${
    //       photo.category
    //     }/${photo.place.replace(' ', '_')}`,
    //     name: photo.place,
    //   };
    // }),
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-[70px] px-6 w-full max-w-[1024px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <div>
        <h1>소콘 스튜디오</h1>
      </div>
    </section>
  );
}
