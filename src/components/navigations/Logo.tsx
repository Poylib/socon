"use client";

import Link from "next/link";
import { useMemo } from "react";

import useMainAnimation from "@/store/useMainAnimation";
import useSidebar from "@/store/useSideBar";
import white_logo from "@@/nav/logo_white.png";
import black_logo from "@@/nav/logo_black.png";
import Image from "next/image";

export default function Logo() {
  const { currentColor } = useMainAnimation();
  const { isOpen } = useSidebar();

  const logo = useMemo(() => {
    if (isOpen) return black_logo;

    if (currentColor === "white") return white_logo;
    else return black_logo;
  }, [currentColor]);

  return (
    <Link
      href={"/"}
      className="flex items-center transition-colors duration-2000"
    >
      <Image src={logo} className="w-14 md:w-16" alt="socon logo" />
    </Link>
  );
}
