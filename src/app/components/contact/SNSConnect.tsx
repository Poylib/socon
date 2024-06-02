"use client";
import Image from "next/image";
import { useMemo } from "react";

import kakao from "@@/contact/kakao.png";
import insta from "@@/contact/instagram.png";
import { useRouter } from "next/navigation";
import { INSTA_LINK, KAKAO_LINK } from "@/constants/navigation";

export default function SNSConnect({
  connect,
}: {
  connect: "insta" | "kakao";
}) {
  const router = useRouter();
  const src = useMemo(() => {
    if (connect === "insta") return insta;
    else return kakao;
  }, [connect]);

  const handleClick = () => {
    if (connect === "insta") router.push(INSTA_LINK);
    else router.push(KAKAO_LINK);
  };

  return (
    <button onClick={handleClick}>
      <Image src={src} alt="카카오톡 연결 이미지" className="mr-3 w-[20px]" />
    </button>
  );
}
