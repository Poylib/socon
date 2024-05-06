"use client";
import useMainAnimation from "@/store/useMainAnimation";
import useSidebar from "@/store/useSideBar";
import Link from "next/link";

export default function Logo() {
  const { currentColor } = useMainAnimation();
  const { isOpen } = useSidebar();
  return (
    <Link
      href={"/"}
      className="transition-colors duration-2000"
      style={{ color: isOpen ? "1a2637" : currentColor }}
    >
      socon
    </Link>
  );
}
