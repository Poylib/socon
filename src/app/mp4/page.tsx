import { getAwsContent } from "../aws/jpg/getPost";

export default async function MP4() {
  const req = `mp4/`;

  const { Contents } = await getAwsContent(req);

  return (
    <div className="flex flex-col items-center py-[70px] max-w-[1024px]">
      {Contents?.map((el, idx) => {
        if (idx)
          return (
            <video controls key={idx} className="mb-4">
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
