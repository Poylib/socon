"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Picture1 from "@@/about/about_2_2.jpeg";
import Picture1z from "@@/about/about_2_2_z.jpeg";
import Picture2 from "@@/about/about_1_1.jpeg";
import Picture3 from "@@/about/about_1_2.jpeg";
import Picture4 from "@@/about/about_1_3.jpeg";
import Picture5 from "@@/about/about_2_1.jpg";
import Picture6 from "@@/about/about_2_3.jpeg";
import Picture7 from "@@/about/about_3_1.jpeg";
import Picture8 from "@@/about/about_3_2.jpeg";
import Picture9 from "@@/about/about_3_3.jpeg";

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
      scale: 5,
    },
    {
      src: Picture4,
      scale: 5,
    },
    {
      src: Picture5,
      scale: 5,
    },
    {
      src: Picture6,
      scale: 5,
    },
    {
      src: Picture7,
      scale: 5,
    },
    {
      src: Picture8,
      scale: 5,
    },
    {
      src: Picture9,
      scale: 5,
    },
    {
      src: Picture1z,
      scale: 4,
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
          scale: 4,
          opacity: 1,
        },
        "<"
      );
    });

    growTl
      .to(".glowTitle", {
        duration: 0.4,
        delay: -0.7,
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
                    style={{
                      objectFit: "cover",
                      imageRendering: "crisp-edges",
                    }}
                    sizes={index === 9 ? "100vw" : "40vw"}
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
        <span
          className="glowTitle absolute top-[15%] transform translate-y-[40px] opacity-0 text-black text-xl font-semibold md:text-3xl"
          style={{ letterSpacing: 5 }}
        >
          So Concretus!
        </span>
        <span
          className="glowContent absolute top-[25%] px-2 transform translate-y-[20px] opacity-0 text-black text-center text-[10px] md:text-xl"
          style={{ lineHeight: 1.6 }}
        >
          현대 건축의 상징이자 미학의 한 축을 이루는 콘크리트
          <br />
          일반적으로 그저 회색의 덩어리 정도로 생각하지만
          <br />
          콘크리트의 색상, 형태, 마감 방법에 따라 건축물 전체의 이미지를
          바꿉니다
          <br />
          Concretus는 콘크리트의 어원으로 ‘함께 성장하다’라는 뜻을 지니고
          있습니다
          <br />
          저희 studio SOCON은 클라이언트와 함께 소통하며
          <br />
          협업하여 최고의 결과물을 만들어내기 위해 노력합니다
        </span>
      </div>
    </div>
  );
}
