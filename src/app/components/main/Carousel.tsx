import useMainAnimation from "@/store/useMainAnimation";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import main_1 from "@@/main/main_1.jpeg";
import main_2 from "@@/main/main_2.jpeg";
import main_3 from "@@/main/main_3.jpeg";
import main_4 from "@@/main/main_4.jpeg";
import main_5 from "@@/main/main_5.jpeg";
import main_6 from "@@/main/main_6.jpeg";

export default function Carousel() {
  const { setCurrentBg, panel, setPanel } = useMainAnimation();
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

  const handlePanel = (type: "up" | "down") => {
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

  const handleWheel = (e) => {
    if (!isThrottled.current) {
      if (e.deltaY < 0) {
        handlePanel("down");
      } else if (e.deltaY > 0) {
        handlePanel("up");
      }

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 2000); // 1초 동안 쓰로틀링
    }
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e) => {
    const startY = e.touches[0].clientY;

    const handleTouchMove = (moveEvent) => {
      const currentY = moveEvent.touches[0].clientY;

      if (!isThrottled.current) {
        if (currentY < startY) {
          handlePanel("up");
        } else if (currentY > startY) {
          handlePanel("down");
        }

        isThrottled.current = true;
        setTimeout(() => {
          isThrottled.current = false;
        }, 2000); // 1초 동안 쓰로틀링
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
    const intervalId = setInterval(() => {
      handlePanel("up");
    }, 5000);

    return () => clearInterval(intervalId);
  }, [panel]);

  const scrollGesture = useMemo(() => {
    console.log("🚀 ~ scrollGesture ~ beforeIdx:", beforeIdx);
    console.log("🚀 ~ scrollGesture ~ panel:", panel);
    if (panel === 0 && beforeIdx === 5) {
      return "down";
    } else if (panel === 5 && beforeIdx === 0) {
      return "up";
    }

    if (panel > beforeIdx) return "down";
    else return "up";
  }, [panel, beforeIdx]);

  console.log("🚀 ~ scrollGesture ~ scrollGesture:", scrollGesture);
  return (
    <div
      className={`relative flex flex-col justify-center items-center h-[100vh] w-screen transition duration-[2s]`}
      style={{ backgroundColor: pictures[panel].color }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
    >
      <div
        className={`absolute  w-[50%] mx-[280px] h-[60%] overflow-hidden bg-red-200`}
      >
        {pictures.map((el, idx) => {
          const selected = idx === panel;

          return (
            <div
              className={`absolute h-[100%] w-[100%]`}
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
  );
}
