"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Picture1 from "@@/main/top.png";
import Picture2 from "@@/main/main_2.jpeg";
import Picture3 from "@@/main/main_3.jpeg";
import Picture4 from "@@/main/main_4.jpeg";
import Picture5 from "@@/main/main_5.jpeg";
import Picture6 from "@@/main/main_6.jpeg";
import Picture7 from "@@/main/main_6.jpeg";

import styles from "./TopScroll.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TopScroll() {
  const container = useRef(null);

  const pictures = [
    {
      src: Picture1,
      scale: 4,
    },
    {
      src: Picture2,
      scale: 5,
    },
    {
      src: Picture3,
      scale: 6,
    },
    {
      src: Picture4,
      scale: 5,
    },
    {
      src: Picture5,
      scale: 6,
    },
    {
      src: Picture6,
      scale: 8,
    },
    {
      src: Picture7,
      scale: 9,
    },
  ];

  useGSAP(() => {
    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: 1.5,
        start: "top 0%",
        end: "+=250",
        markers: true,
      },
    });
    pictures.forEach((el, idx) => {
      growTl.to(
        `.picture${idx}`,
        {
          duration: 1,
          scale: el.scale,
        },
        "<"
      );
    });
  });

  return (
    <div ref={container} className={styles.container}>
      <div className={`sticky ${styles.sticky}`}>
        {pictures.map(({ src }, index) => {
          return (
            <div key={index} className={`picture${index} ${styles.el}`}>
              <div className={`${styles.imageContainer}`}>
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                  style={{ objectFit: "cover" }}
                  sizes="100vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
