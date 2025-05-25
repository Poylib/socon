import { NAV_CATEGORY } from "@/constants/navigation";
import white_logo from "@@/nav/logo_white.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-5 w-full bg-[#3E3E3B] text-sm text-white">
      <Link
        href={"/"}
        className="flex items-center mb-10 transition-colors duration-2000"
      >
        <Image src={white_logo} className="w-14" alt="socon logo" />
      </Link>
      <ul className="mb-10">
        {NAV_CATEGORY.map((item, idx) => (
          <li key={`${idx}_${item.name}`} className="mb-1">
            <Link href={item.href} className="transition-colors duration-2000">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <span className="text-[8px] md:text-sm">
        © 2024 SOCON ㅣSOCON Co.,Ltd.ㅣ최정은 한지훈ㅣBUSINESS NO. 796-87-02906
      </span>
    </div>
  );
}
