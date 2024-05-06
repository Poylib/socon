"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Picture1 from "@@/main/top.png";
import Picture2 from "@@/main/main_2.jpeg";
import Picture3 from "@@/main/main_3.jpeg";
import Picture4 from "@@/main/main_4.jpeg";
import Picture5 from "@@/main/main_5.jpeg";
import Picture6 from "@@/main/main_6.jpeg";
import Picture7 from "@@/main/main_6.jpeg";

import styles from "./TopScroll.module.scss";

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

    growTl
      .to(".glowLine", {
        duration: 0.4,
        delay: -0.8,
        opacity: 1,
        y: 0,
      })
      .to(".glowContent", {
        duration: 0.3,
        delay: -0.4,
        opacity: 1,
        y: 0,
      });
  });

  return (
    <div ref={container} className={styles.container}>
      <div className={`sticky ${styles.sticky}`}>
        {pictures.map(({ src }, index) => {
          return (
            <Fragment key={index}>
              <div className={`picture${index} ${styles.el}`}>
                <div className={`${styles.imageContainer}`}>
                  <Image
                    src={src}
                    fill
                    alt="image"
                    placeholder="blur"
                    style={{ objectFit: "cover" }}
                    sizes="40vw"
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
        <span className="glowLine absolute top-[120px] transform translate-y-[40px] opacity-0 text-white">
          ABOUT
        </span>
        <span className="glowContent absolute top-[160px] transform translate-y-[40px] opacity-0 text-white">
          socon이 추구하는 가치. 꿈은 없고 그냥 놀고싶어요
        </span>
      </div>
    </div>
  );
}
