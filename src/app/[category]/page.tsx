import { getPosts } from "@/data/jpg/get-contents";
import PhotoGrid from "../components/category/PhotoGrid";

export default async function Category() {
  // const pathname = usePathname();
  const data = (await getPosts("jpg")).filter((e) => e.includes("img0"));

  return (
    <section className="h-[400vh]">
      <PhotoGrid data={data} />
    </section>
  );
}
