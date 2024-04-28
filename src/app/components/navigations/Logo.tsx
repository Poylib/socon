"use client";
import useSidebar from "@/store/useSideBar";
import Link from "next/link";

export default function Logo() {
  const { isOpen } = useSidebar();
  return (
    <Link href={"/"} style={{ color: isOpen ? "#1a2637" : "#1a2637" }}>
      socon
    </Link>
  );
}
