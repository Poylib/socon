import useMainAnimation from "@/store/useMainAnimation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import main_1 from "@@/main/main_1.jpeg";
import main_2 from "@@/main/main_2.jpeg";
import main_3 from "@@/main/main_3.jpeg";
import main_4 from "@@/main/main_4.jpeg";
import main_5 from "@@/main/main_5.jpeg";
import main_6 from "@@/main/main_6.jpeg";

export default function Carousel() {
  const { setCurrentBg, panel, setPanel } = useMainAnimation();
  const [beforeIdx, setBeforeIdx] = useState<null | number>(null);

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
        handlePanel("up");
      } else if (e.deltaY > 0) {
        handlePanel("down");
      }

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 1000); // 1초 동안 쓰로틀링
    }
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e) => {
    const startY = e.touches[0].clientY;

    const handleTouchMove = (moveEvent) => {
      const currentY = moveEvent.touches[0].clientY;

      if (currentY < startY) {
        handlePanel("up");
      } else if (currentY > startY) {
        handlePanel("down");
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
      // 반복 실행하고자 하는 함수
      handlePanel("up");
    }, 3000);

    return () => clearInterval(intervalId);
  }, [panel]);

  return (
    <div
      className={`relative flex flex-col justify-center items-center h-[100vh] w-screen transition duration-1000`}
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
                transition: selected ? "transform 1s" : "none",
                visibility:
                  beforeIdx === idx || selected ? undefined : "hidden",
                transform:
                  selected || beforeIdx === idx
                    ? "translate(0,0%) translate3d(0px,0px,0px)"
                    : "translate(0,100%)",
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
