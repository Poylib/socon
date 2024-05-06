"use client";
import useMainAnimation from "@/store/useMainAnimation";
import useSidebar from "@/store/useSideBar";
import { Fade } from "hamburger-react";

export default function Hamburger() {
  const { setOpenSide, isOpen } = useSidebar();
  const { currentColor } = useMainAnimation();
  return (
    <button>
      <Fade
        color={isOpen ? "#1a2637" : currentColor}
        rounded
        size={20}
        toggle={setOpenSide}
        toggled={isOpen}
      />
    </button>
  );
}
