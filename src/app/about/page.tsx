"use client";
import Image from "next/image";

import main_3 from "@@/main/main_3.png";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const TopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (TopRef.current) {
        const ViewHeight = window.innerHeight;
        const Y = window.scrollY;
        console.log("🚀 ~ handleScroll ~ ViewHeight:", ViewHeight * 0.2);

        console.log("🚀 ~ handleScroll ~ Y:", Y);
        const divStyle = TopRef.current.style;

        //스크롤 움직이면 padding 생성
        if (Y > 10) {
          divStyle.width = `95%`;
        } else divStyle.width = `100%`;

        // 상단 이미지 고정
        if (Y > ViewHeight * 0.2) {
          divStyle.transform = `translateY(${Y}px)`;
        }

        // if (ViewHeight * 0.3 < Y) {
        // } else {
        //   divStyle.transform = `translateY(-${0}px)`;
        // }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[400vh]">
      <div
        ref={TopRef}
        className="relative mx-auto h-[80vh] transition duration-500 ease-in-out translate-y-[20vh] "
        style={{ transition: "width 0.5s ease-in-out" }}
      >
        <Image //
          fill={true}
          src={main_3}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </div>
      <div className="relative h-[90vh] w-[50%] mx-auto">
        <div className="flex flex-col items-center bg-green-700 h-fit opacity-50">
          <h1>ABOUT</h1>
        </div>
      </div>
    </div>
  );
}
