import { NAV_CATEGORY } from "@/constants/navigation";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://socon.kr";
  const tab = NAV_CATEGORY.filter((el) => el.name !== "INSTAGRAM").map((el) => {
    return { url: `${baseUrl}${el.href}`, lastModified: new Date() };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...tab,
  ];
}
