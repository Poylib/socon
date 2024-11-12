import { JpgResponseType } from "../aws/jpg/api/route";

export async function getCategories(): Promise<JpgResponseType> {
  const response = await fetch(`${process.env.SSR_BASE_URL}/aws/jpg/api`);
  if (!response.ok) {
    return { data: [] };
  }
  return response.json();
}
