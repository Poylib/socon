import { title } from "process";
import { getAwsContent } from "../aws/jpg/getPost";
import { Fragment } from "react";

export default async function MP4() {
  const req = `mp4/`;

  const { Contents } = await getAwsContent(req);

  const mp4Arr = Contents?.filter((el) => el?.Key.includes(".mp4"));
  const thumbnail = Contents?.filter((el) => el?.Key.includes(".jpeg"));
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
      {mp4Arr?.map((el, idx) => {
        return (
          <Fragment key={idx}>
            <video
              controls
              className="mb-2"
              style={{ width: idx === 1 ? "50%" : "100%" }}
              poster={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${thumbnail[idx].Key}`}
            >
              <source
                src={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${el.Key}`}
                type="video/mp4"
              />
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
