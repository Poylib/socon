import { getPaths } from "./get-paths";

export async function getPosts(category: string) {
  return await getPaths(category).map((path) => path.split("public")[1]);
}
