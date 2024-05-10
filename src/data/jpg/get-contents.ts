import { getPaths } from "./get-paths";

export async function getPosts(category: string) {
  return getPaths(category).map((filePath) => {
    const fileName = filePath.split("/").pop();
    const thumbnail = fileName;

    // 카테고리 추출
    const mathPath = filePath.match(/\[(.*?)\]/);
    const category = mathPath ? mathPath[1] : "";

    // 컨텐츠 추출
    const contentMatch = filePath.match(/\[.*?\]_(.*)\//);
    const content = contentMatch ? contentMatch[1] : "";
    const src = filePath.split("public")[1];

    const obj = { thumbnail, category, content, src };

    return obj;
  });
}
