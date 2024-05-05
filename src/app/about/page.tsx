"use client";
import Image from "next/image";

import main from "@@/main/main_0.png";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import TopScroll from "../components/main/TopScroll";

export default function About() {
  return (
    <main className="pt-[70px] h-[200dvh]">
      {/* <div className="flex items-center justify-center b">
        <h2 className="text-[5rem] tracking-wider">SOCON</h2>
      </div> */}
      <TopScroll />
      {/* <div>
        <Image
          src={main}
          style={{ objectFit: "cover" }}
          alt={`메인사진`}
          placeholder="blur"
          sizes="25vw"
        />
      </div> */}
      <span>blabla</span>
    </main>
  );
}
