import { NextResponse } from "next/server";

export interface MP4Res {
  index: number;
  url: string;
  thumbnail: string;
}

export async function GET() {
  const urlSet = [
    {
      url: "MP4/0.mp4",
      thumbnail: "MP4/0.jpeg",
    },
    // {
    //   url: "MP4/1.mp4",
    //   thumbnail: "MP4/1.jpeg",
    // },
    // {
    //   url: "MP4/2.mp4",
    //   thumbnail: "MP4/2.jpeg",
    // },
  ];

  const data: MP4Res[] = urlSet.map((set, index) => {
    return {
      index,
      url: `https://${process.env.CLOUDFRONT_URL}/${set.url}`,
      thumbnail: `https://${process.env.CLOUDFRONT_URL}/${set.thumbnail}`,
    };
  });

  return NextResponse.json({ data });
}
