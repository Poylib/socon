import { s3Client } from "@/utils/aws";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

export const getJpgContentList = async () => {
  const command = new ListObjectsV2Command({
    Bucket: "socon-image",
    Prefix: "jpg/list",
  });
  const { Contents } = await s3Client.send(command);

  return { Contents: Contents?.filter((el) => el.Key?.includes(".jpg")) };
};
