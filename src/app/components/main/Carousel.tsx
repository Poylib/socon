"use client";
import useMainAnimation from "@/store/useMainAnimation";
import Image from "next/image";
import {
  TouchEvent as TouchEventType,
  WheelEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import main_1 from "@@/main/main_1.jpeg";
import main_2 from "@@/main/main_2.jpeg";
import main_3 from "@@/main/main_3.jpeg";
import main_4 from "@@/main/main_4.jpeg";
import main_5 from "@@/main/main_5.jpeg";
import main_6 from "@@/main/main_6.jpeg";
import studio_white from "@@/main/STUDIO_white.png";
import studio_black from "@@/main/STUDIO_black.png";
import concretus_white from "@@/main/Concretus_white.png";
import concretus_black from "@@/main/Concretus_black.png";
import side_white from "@@/main/side_white.png";
import side_black from "@@/main/side_black.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MainFooter from "./MainFooter";

type Direction = "up" | "down";

gsap.registerPlugin(useGSAP);

export default function Carousel() {
  const { panel, setPanel, setCurrentColor, currentColor } = useMainAnimation();
  const [beforeIdx, setBeforeIdx] = useState<number>(5);

  const pictures = [
    { src: main_1, color: "#3E3E3B" },
    { src: main_2, color: "#4C586F" },
    { src: main_3, color: "#A2AAB0" },
    { src: main_4, color: "#A2AAB0" },
    { src: main_5, color: "#CBC5C1" },
    { src: main_6, color: "#EBECED" },
  ];

  const isThrottled = useRef(false);

  const handlePanel = (type: Direction) => {
    setBeforeIdx(panel);
    if (type === "up") {
      if (panel > 4) {
        setPanel(0);
      } else {
        setPanel(panel + 1);
      }
    } else {
      if (panel === 0) {
        setPanel(5);
        // here
      } else {
        setPanel(panel - 1);
      }
    }
  };

  const handleUserInput = (direction: Direction) => {
    if (!isThrottled.current) {
      handlePanel(direction);

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 2000);
    }
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY < 0) {
      handleUserInput("down");
    } else if (e.deltaY > 0) {
      handleUserInput("up");
    }
  };

  const handleTouchStart = (e: TouchEventType<HTMLDivElement>) => {
    const startY = e.touches[0].clientY;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const currentY = moveEvent.touches[0].clientY;

      if (currentY < startY) {
        handleUserInput("up");
      } else if (currentY > startY) {
        handleUserInput("down");
      }
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    // auto carousel
    const intervalId = setInterval(() => {
      handlePanel("up");
    }, 5000);

    // global color
    if (panel < 2) setCurrentColor("white");
    else setCurrentColor("black");

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panel]);

  const scrollGesture = useMemo(() => {
    if (panel === 0 && beforeIdx === 5) {
      return "down";
    } else if (panel === 5 && beforeIdx === 0) {
      return "up";
    }

    if (panel > beforeIdx) return "down";
    else return "up";
  }, [panel, beforeIdx]);

  useGSAP(() => {
    gsap.to("body", {
      backgroundColor: pictures[panel].color,
    });
  }, [panel]);

  return (
    <div
      className={`absolute flex flex-col justify-center items-center h-[100dvh] w-screen transition duration-[2s]`}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
    >
      <div
        className={`absolute top-1/2 left-1/2 w-[80%] h-[70%] md:h-[500px] md:w-[380px] max-md:max-h-[392px] max-md:max-w-[280px] transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className="absolute top-[-14%] w-[125%] left-[-12%] md:top-[-13%] md:w-[480px] md:left-[-10%] z-0"
          style={{ color: currentColor }}
        >
          <Image
            src={currentColor === "black" ? studio_black : studio_white}
            alt="studio text"
          />
        </div>
        <div
          className="absolute bottom-[-16%] left-[-15%] w-[130%] md:bottom-[-18%] md:left-[-22%] md:w-[580px] z-0"
          style={{ color: currentColor }}
        >
          <Image
            src={currentColor === "black" ? concretus_black : concretus_white}
            alt="so concretus text"
          />
        </div>
        <div
          className={`absolute h-[100%] w-[100%] md:h-[500px] md:w-[380px] max-md:max-h-[392px] max-md:max-w-[280px] overflow-hidden`}
        >
          {pictures.map((el, idx) => {
            const selected = idx === panel;
            return (
              <div
                className={`absolute h-[100%] w-[100%] md:h-[560px] md:w-[400px]`}
                style={{
                  zIndex: selected ? 10 : 0,
                  transition: selected ? "transform 2s" : "none",
                  visibility:
                    beforeIdx === idx || selected ? undefined : "hidden",
                  transform:
                    selected || beforeIdx === idx
                      ? "translate(0,0%) translate3d(0px,0px,0px)"
                      : `translate(0,${
                          scrollGesture === "up" ? "-100%" : "100%"
                        })`,
                }}
                key={`${idx}`}
              >
                <Image //
                  fill={true}
                  src={el.src}
                  style={{ objectFit: "cover" }}
                  alt={`메인사진${idx}`}
                  placeholder="blur"
                  sizes="25vw"
                />
              </div>
            );
          })}
        </div>
      </div>
      <MainFooter />
      {/* for mobile */}
      <div className="absolute flex justify-center items-center bottom-10 w-full h-5 sm:hidden">
        <span
          className="transition-colors duration-2000"
          style={{ color: currentColor }}
        >
          0{panel + 1}
        </span>
        <div className="mx-2 h-full w-[1px] bg-gray-500" />
        <span className="text-gray-500">06</span>
      </div>
      {/* for web */}
      <div className="absolute flex flex-col justify-center items-center top-[43%] right-5 max-sm:hidden">
        <span
          className="transition-colors duration-2000"
          style={{ color: currentColor }}
        >
          0{panel + 1}
        </span>
        <div className="h-[1px] w-10 bg-gray-500 my-3" />
        <span className="text-gray-500">06</span>
      </div>
      <span className="absolute top-[43%] left-5  w-[120px] h-[120px] transform -rotate-90 max-md:hidden">
        <Image
          src={currentColor === "black" ? side_black : side_white}
          alt="side logo text"
        />
      </span>
    </div>
  );
}
