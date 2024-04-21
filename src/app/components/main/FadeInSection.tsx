"use client";
import Image from "next/image";

import main_2 from "@@/main/main_2.png";
import main_3 from "@@/main/main_3.png";

import styles from "./FadeInSection.module.scss";
import { useEffect } from "react";

export default function FadeInSection() {
  // useEffect()

  return (
    <div className={styles.container}>
      <Image //
        fill={true}
        src={main_3}
        style={{ objectFit: "cover" }}
        alt="메인사진1"
        placeholder="blur"
      />
    </div>
  );
}
