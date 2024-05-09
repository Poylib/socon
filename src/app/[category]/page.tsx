import fs from "fs";
import { getPosts } from "@/data/jpg/get-contents";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default async function Category() {
  // const pathname = usePathname();
  const gg = await getPosts();
  console.log("🪄  Category  gg", gg[0].split("public")[1]);
  return (
    <div>
      {/* <span>{pathname}</span> */}
      <Image
        src={gg[0].split("public")[1]}
        className="w-14"
        alt="fe"
        width={22}
        height={22}
      />
    </div>
  );
}
