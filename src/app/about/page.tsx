"use client";
import Image from "next/image";

import main_3 from "@@/main/main_3.png";
import { useEffect, useState } from "react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 컴포넌트가 마운트될 때 스크롤 이벤트를 추가합니다.
    window.addEventListener("scroll", handleScroll);
    const documentHeight = document.documentElement.scrollHeight;
    console.log("🚀 ~ useEffect ~ documentHeight:", documentHeight);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="fixed top-0 left-10 bg-blue-400 z-10">
        <p>현재 스크롤 위치: {scrollY}px</p>
        {/* 화면의 전체 높이는 window.innerHeight로 얻을 수 있습니다. */}
        <p>100vh: {window.innerHeight}px</p>
      </div>
      <div className="relative h-[90vh] ">
        <Image //
          fill={true}
          src={main_3}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </div>
      <div className="relative h-[90vh]">
        <Image //
          fill={true}
          src={main_3}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
