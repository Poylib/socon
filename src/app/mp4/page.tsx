import { getAwsContent } from "../aws/jpg/getPost";

export default async function MP4() {
  const req = `mp4/`;

  const { Contents } = await getAwsContent(req);

  const mp4Arr = Contents?.filter((el) => el?.Key.includes(".mp4"));
  const thumbnail = Contents?.filter((el) => el?.Key.includes(".jpeg"));
  console.log("🪄  MP4  thumbnail", thumbnail);

  return (
    <div className="flex flex-col items-center py-[70px] max-w-[1024px]">
      {mp4Arr?.map((el, idx) => {
        return (
          <video
            controls
            key={idx}
            className="mb-4"
            style={{ width: idx === 1 ? "50%" : "100%" }}
            poster={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${thumbnail[idx].Key}`}
          >
            <source
              src={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${el.Key}`}
              type="video/mp4"
            />
          </video>
        );
      })}
    </div>
  );
}
