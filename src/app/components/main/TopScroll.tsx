"use client";

import Image from "next/image";
import { useScroll, useTransform, motion, delay } from "framer-motion";
import { useRef } from "react";

import Picture1 from "@@/main/1_1.jpeg";
import Picture2 from "@@/main/1.jpeg";
import Picture3 from "@@/main/3.jpg";
import Picture4 from "@@/main/4.jpg";
import Picture5 from "@@/main/5.jpg";
import Picture6 from "@@/main/6.jpg";
import Picture7 from "@@/main/main_1.png";

import styles from "./TopScroll.module.scss";

export default function TopScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={styles.el}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                  style={{ objectFit: "cover" }}
                  sizes="25vw"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
