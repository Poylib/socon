import Image from "next/image";

import Price from "@@/price/price.jpeg";

export default function page() {
  const priceArr = [
    {
      title: "인테리어 촬영",
      content: [
        { key: "촬영컷수", value: "30 - 150컷" },
        { key: "촬영시간", value: "30분 - 90분" },
        { key: "촬영비용", value: "350,000원 부터" },
        { key: "편집기간", value: "7일 - 10일" },
      ],
    },
    {
      title: "건축물 촬영",
      content: [
        { key: "촬영컷수", value: "50 - 300컷" },
        { key: "촬영시간", value: "60분 - 180분" },
        { key: "촬영비용", value: "600,000원 부터" },
        { key: "편집기간", value: "10일 - 15일" },
      ],
    },
    {
      title: "프로필 영상",
      content: [
        { key: "영상길이", value: "1분 - 2분" },
        { key: "촬영시간", value: "60분 - 120분" },
        { key: "촬영비용", value: "300,000원 부터" },
        { key: "편집기간", value: "7일 - 10일" },
      ],
    },
    {
      title: "인테리어 영상",
      content: [
        { key: "영상길이", value: "2분 이상" },
        { key: "촬영시간", value: "90분 이상" },
        { key: "촬영비용", value: "900,000원 부터" },
        { key: "편집기간", value: "10일 이상" },
      ],
    },
  ];

  const areaPrice = [
    "- 서울시 : 없음",
    "- 경기도 전역 및 인천광역시 : 5만원",
    "- 강원도 및 충청도 전역 : 12만원",
    "- 전라도 전역 및 광주광역시 : 18만원",
    "- 경상도 전역 : 18만원",
    "- 대구광역시, 울산광역시, 부산광역시 : 18만원",
  ];

  return (
    <div className="flex flex-col items-center py-[70px] max-w-[1024px]">
      <h1 className="mt-10 mb-20 text-xl">PRICE</h1>
      <div className="flex flex-wrap px-5 mb-5 md:w-full">
        {priceArr.map((el, idx) => {
          return (
            <div key={idx} className="flex flex-col w-[50%] mb-12 md:w-[25%]">
              <h3 className="text-base mb-6 mx-auto">{el.title}</h3>
              <div className="mx-auto">
                {el.content.map((row, index) => {
                  return (
                    <span
                      key={index}
                      className="mb-3 text-xs"
                      style={{ display: "block" }}
                    >
                      {row.key} : {row.value}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <span className="font-thin text-sm">
        (vat 별도이며, 세금계산서 발행가능합니다)
      </span>
      <div className="md:flex md:mt-10">
        <div className="my-[15%] md:my-0 md:w-[50%] md:p-12">
          <Image src={Price} alt="가격 탭 메인 사진" placeholder="blur" />
        </div>
        <div className="flex flex-col w-full px-10 md:w-[50%] md:justify-center md:py-5">
          <h3 className="mb-5">출장비</h3>
          <ul className="mb-10">
            {areaPrice.map((el, idx) => {
              return (
                <li key={idx} className="mb-2 text-sm">
                  {el}
                </li>
              );
            })}
          </ul>
          <span className="font-thin text-xs">
            (경상남도와 부산광역시는 일정 조율시 출장비가 없을 수 있습니다)
          </span>
        </div>
      </div>
    </div>
  );
}
