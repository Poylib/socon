import { s3Client } from "@/utils/aws";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const slug = params.get("slug");
  const category = params.get("category");

  const command = new ListObjectsV2Command({
    Bucket: "socon-live",
    Prefix: `jpg/${category}/${slug}`,
  });
  const { Contents } = await s3Client.send(command);
  console.log("🪄  GET  Contents", Contents);

  return NextResponse.json({ Contents });
}
