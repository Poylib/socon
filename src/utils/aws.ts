import { S3Client } from "@aws-sdk/client-s3";

if (!process.env.ACCESS_KEY_ID || !process.env.SECRET_ACCESS_KEY) {
  throw new Error("AWS credentials are not defined");
}

export const s3Client = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});
