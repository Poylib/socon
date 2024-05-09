import { getPaths } from "./get-paths";

export async function getPosts() {
  return await getPaths("jpg");
}
