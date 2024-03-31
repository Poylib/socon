"use client";
import { usePathname } from "next/navigation";

export default function Category() {
  const pathname = usePathname();
  return (
    <div>
      <span>{pathname}</span>
    </div>
  );
}
