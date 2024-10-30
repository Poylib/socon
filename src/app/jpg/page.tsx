import { JpgResponseType } from "../aws/jpg/api/route";
import PhotoGrid from "../components/category/PhotoGrid";

async function getCategories(): Promise<JpgResponseType> {
  console.log("call", `${process.env.SSR_BASE_URL}/aws/jpg/api`);
  const response = await fetch(`${process.env.SSR_BASE_URL}/aws/jpg/api`);
  if (!response.ok) {
    console.log("Fetch error::::", response.text());
    return { data: [] };
  }
  return response.json();
}

export default async function Category() {
  const { data } = await getCategories();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-[70px] px-6 w-[100%] max-w-[1024px]">
      <PhotoGrid data={data} />
    </section>
  );
}
