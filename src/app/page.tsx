"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import useMainAnimation from "@/store/useMainAnimation";
import Carousel from "./components/main/Carousel";
import TopScroll from "./components/main/TopScroll";

export default function Home() {
  const { currentBg, setCurrentBg } = useMainAnimation();

  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    });
  }, [currentBg]);

  return (
    <>
      <main className="pt-[10vh] bg-[#222]" ref={appRef}>
        <TopScroll />
        <Carousel />
      </main>
    </>
  );
}
