import { Fragment } from "react";
import { MP4Res } from "../aws/mp4/api/route";

const mp4UrlSet = [
  { url: "MP4/0.mp4", thumbnail: "MP4/0.jpeg" },
  { url: "MP4/1.mp4", thumbnail: "MP4/1.jpeg" },
  { url: "MP4/2.mp4", thumbnail: "MP4/2.jpeg" },
];

async function getContentList(): Promise<{ data: MP4Res[] }> {
  const data: MP4Res[] = mp4UrlSet.map((set, index) => ({
    index,
    url: `https://${process.env.CLOUDFRONT_URL}/${set.url}`,
    thumbnail: `https://${process.env.CLOUDFRONT_URL}/${set.thumbnail}`,
  }));
  return { data };
}

export default async function MP4() {
  const { data } = await getContentList();

  const explainArr = [
    {
      title: "현대자동차 울산 2공장 안전표준작업 홍보영상 ",
      role: "감독",
    },
    {
      title: "INNISFREE Breaking Trouble Algorithm ",
      role: "조감독",
    },
    {
      title:
        "장한나 (Hannah Jang), GENESIO - Muse (ft. Paloalto) Live Performance",
      role: "감독",
    },
  ];

  return (
    <div className="flex flex-col items-center py-[70px] max-w-[1024px]">
      {data?.map((el, idx) => {
        return (
          <Fragment key={idx}>
            <video
              controls
              className="mb-2"
              style={{ width: idx === 1 ? "50%" : "100%" }}
              poster={el.thumbnail}
            >
              <source src={el.url} type="video/mp4" />
            </video>
            <div className="mb-7 px-4">
              <p className="text-lg mb-1">{explainArr[idx].title}</p>
              <p className="text-sm">{explainArr[idx].role}</p>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
