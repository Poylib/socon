import { sync } from "glob";
import { JPG_PATH } from "../config";

export function getPaths(slug?: string): string[] {
  return sync(`${JPG_PATH}/${slug}/**/*.jpg`);
}
