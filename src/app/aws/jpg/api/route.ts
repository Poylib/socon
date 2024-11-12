import { NextResponse } from "next/server";

export type DataType = {
  index: number;
  place: string;
  category: string;
  url: string;
};

export interface JpgResponseType {
  data: DataType[];
}

export async function GET() {
  const urlSet = [
    {
      url: "JPG/Individual/나오시마_답사/나오시마_답사_0.jpg",
      place: "나오시마 답사",
      category: "Individual",
    },
    {
      url: "JPG/Individual/마곡나루_답사/마곡나루_답사_0.jpg",
      place: "마곡나루 답사",
      category: "Individual",
    },
    {
      url: "JPG/Interior/부산_영도_주택/부산_영도_주택_0.jpg",
      place: "부산 영도 주택",
      category: "Interior",
    },
    {
      url: "JPG/Commercial/압구정_압집/압구정_압집_0.jpg",
      place: "압구정 압집",
      category: "Commercial",
    },
    {
      url: "JPG/Commercial/양산_어느_커피/양산_어느_커피_0.jpg",
      place: "양산 어느 커피",
      category: "Commercial",
    },
    {
      url: "JPG/Interior/창원_시티세븐/창원_시티세븐_0.jpg",
      place: "창원 시티세븐",
      category: "Interior",
    },
    {
      url: "JPG/Interior/송도_풍림_아이원/송도_풍림_아이원_0.jpg",
      place: "송도 풍림 아이원",
      category: "Interior",
    },
    {
      url: "JPG/Individual/덕수궁_답사/덕수궁_답사_0.jpg",
      place: "덕수궁 답사",
      category: "Individual",
    },
    {
      url: "JPG/Individual/강남_신논현_답사/강남_신논현_답사_0.jpg",
      place: "강남 신논현 답사",
      category: "Individual",
    },
    {
      url: "JPG/Individual/예술의_전당/예술의_전당_0.jpg",
      place: "예술의 전당",
      category: "Individual",
    },
    {
      url: "JPG/Interior/다대_푸르지오/다대_푸르지오_0.jpg",
      place: "다대 푸르지오",
      category: "Interior",
    },
    {
      url: "JPG/Individual/사유원_답사/사유원_답사_0.jpg",
      place: "사유원 답사",
      category: "Individual",
    },
    {
      url: "JPG/Interior/해운대_카멜리아/해운대_카멜리아_0.jpg",
      place: "해운대 카멜리아",
      category: "Interior",
    },
    {
      url: "JPG/Commercial/건축가_협회_전시/건축가_협회_전시_0.jpg",
      place: "건축가 협회 전시",
      category: "Commercial",
    },
    {
      url: "JPG/Commercial/석촌_카페_ORTN/석촌_카페_ORTN_0.jpg",
      place: "석촌 카페 ORTN",
      category: "Commercial",
    },
    {
      url: "JPG/Individual/다카마츠_답사/다카마츠_답사_0.jpg",
      place: "다카마츠 답사",
      category: "Individual",
    },
  ];

  const data: DataType[] = urlSet.map((set, index) => {
    return {
      index,
      place: set.place,
      category: set.category,
      url: `https://${process.env.CLOUDFRONT_URL}/${set.url}`,
    };
  });

  return NextResponse.json({ data });
}
