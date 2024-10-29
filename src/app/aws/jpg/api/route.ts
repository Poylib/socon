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
  ];

  const data: DataType[] = urlSet.map((set, index) => {
    return {
      index,
      place: set.place,
      category: set.category,
      url: `https://${process.env.CLOUDFRONT_URL}/${set.url}`,
    };
  });
  console.log("dqwwdqdqw", `http://${process.env.VERCEL_URL}/aws/jpg/api`);

  return NextResponse.json({ data });
}
