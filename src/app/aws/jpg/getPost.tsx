import { s3Client } from "@/utils/aws";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

export const getAwsContent = async (path) => {
  const command = new ListObjectsV2Command({
    Bucket: "socon-image",
    Prefix: path,
  });
  const { Contents } = await s3Client.send(command);

  return { Contents };
};
