import PhotoGrid from "../components/category/PhotoGrid";
import { getJpgContentList } from "../aws/jpg/getPostList";

export default async function Category() {
  const { Contents } = await getJpgContentList();
  function compare(a, b) {
    const numA = Number(a.Key.match(/\/list\/(\d+)_/)[1]);
    const numB = Number(b.Key.match(/\/list\/(\d+)_/)[1]);

    if (numA < numB) {
      return -1;
    }
    if (numA > numB) {
      return 1;
    }
    return 0;
  }
  Contents?.sort(compare);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-[70px] px-6 w-[100%] max-w-[1024px]">
      <PhotoGrid data={Contents?.sort(compare)} />
    </section>
  );
}
