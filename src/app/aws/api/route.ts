import { s3Client } from "@/utils/aws";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

export async function GET() {
  const command = new ListObjectsV2Command({
    Bucket: "socon-image",
    Prefix: "jpg/list",
  });
  const { Contents } = await s3Client.send(command);

  const data = { Contents: Contents?.filter((el) => el.Key?.includes(".jpg")) };

  return NextResponse.json({ data });
}
