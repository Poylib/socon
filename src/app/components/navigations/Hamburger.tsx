"use client";
import useSidebar from "@/store/useSideBar";
import { Fade } from "hamburger-react";

export default function Hamburger() {
  const { setOpenSide, isOpen } = useSidebar();

  return (
    <button>
      <Fade
        color="#fff"
        rounded
        size={20}
        toggle={setOpenSide}
        toggled={isOpen}
      />
    </button>
  );
}
