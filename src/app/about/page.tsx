"use client";
import Image from "next/image";

import main_3 from "@@/main/main_3.png";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./styles.css";

export default function About() {
  const { scrollYProgress } = useScroll();
  const options = {
    // ease: [[0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0]]
  };
  const x = useTransform(scrollYProgress, [0, 0.7, 1], [800, 250, 0], options);
  const y = useTransform(scrollYProgress, [0, 0.7, 1], [-200, 0, 200], options);
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.9, 1],
    [0, 1, 1, 0],
    options
  );

  return (
    <main>
      <div className="div1" />
      <div style={{ height: "3500px" }}>
        <div className="div2">
          <div className="container">
            <div className="left">
              <h1>
                Invite your team to collaborate and make edits of their own.
              </h1>
              <h3>
                Pin comments to specific elements and start a thread to get more
                targeted feedback.
              </h3>
            </div>
            <div className="right">
              <motion.div
                // style={{
                //   scale: x,
                // }}
                style={{
                  x,
                  y,
                  opacity,
                }}
              >
                <img
                  className="arrow"
                  alt="ra"
                  src="https://d33wubrfki0l68.cloudfront.net/484d8f0c0484cc7d31186d60f80a2da57ee4a647/f559a/static/images/web/collaborate/cursor-ben@2x.png"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="div3" />
    </main>
  );
}
