"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TopScroll from "../components/main/TopScroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const mainRef = useRef(null);

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
      backgroundColor: "#3E3E3B",
    });
  });

  return (
    <main ref={mainRef} className="pt-[70px] h-[500dvh]">
      <TopScroll />

      <span>blabla</span>
    </main>
  );
}
