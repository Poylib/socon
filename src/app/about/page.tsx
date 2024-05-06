"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopScroll from "../components/about/TopScroll";
import useMainAnimation from "@/store/useMainAnimation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const mainRef = useRef(null);
  const { setCurrentColor } = useMainAnimation();

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    setCurrentColor("white");
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: `${window.innerHeight * 2} ${window.innerHeight * 0.8}`,
        scrub: 1,
      },
    });

    tl.to("body", {
      backgroundColor: "#fff",
    });
  });

  return (
    <main ref={mainRef} className="pt-[70px] h-[500dvh]">
      <TopScroll />

      <span>blabla</span>
    </main>
  );
}
