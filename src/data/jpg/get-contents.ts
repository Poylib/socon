import { sync } from "glob";

import { JPG_PATH } from "../config";

export async function getPosts(post: string) {
  const path = sync(`${JPG_PATH}/${post}/postList/*.jpg`);
  return path.reverse().map((str) => {
    const src = str.split("public")[1];
    const trimmedPath = str.match(/\d+_.*?(?=\.jpg$)/)?.[0];
    if (!trimmedPath) return;
    const [_, category, content] = trimmedPath.split("_");
    console.log({
      src,
      content,
      category,
    });
    return {
      src,
      content,
      category,
    };
  });
}
