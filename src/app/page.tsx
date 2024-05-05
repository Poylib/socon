"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import useMainAnimation from "@/store/useMainAnimation";
import Carousel from "./components/main/Carousel";

export default function Home() {
  let appRef = useRef(null);

  return (
    <main ref={appRef}>
      <Carousel />
    </main>
  );
}
