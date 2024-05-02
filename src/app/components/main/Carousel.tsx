import Image from "next/image";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

import main_1 from "@@/main/main_1.png";
import main_2 from "@@/main/main_2.png";
import useMainAnimation from "@/store/useMainAnimation";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Carousel() {
  const { setCurrentBg } = useMainAnimation();
  let containerRef = useRef(null);
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          backgroundColor: "red",
          scrollTrigger: {
            trigger: box,
            pin: true,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);
  //   }
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "+=200 90%",
  //       end: "+=200",
  //       scrub: true,
  //       markers: true,
  //       pinSpacing: false,
  //       onEnter: () => {
  //         setCurrentBg("#fff");
  //         // gsap.to(textRef.current, {
  //         //   color: "#ffca28",
  //         //   duration: 1,
  //         // });
  //       },
  //       onLeaveBack: () => {
  //         setCurrentBg("#222");
  //         // gsap.to(textRef.current, {
  //         //   color: "#000",
  //         //   duration: 1,
  //         // });
  //       },
  //     },
  //   });
  // }, []);

  return (
    <div
      id="container"
      className="h-[500vh] overflow-hidden"
      ref={containerRef}
    >
      <section className="h-screen w-screen">
        <p>blabla</p>
      </section>
      <div className="section flex-center column" ref={main}>
        <div className="box" style={{ backgroundColor: "blue" }}>
          box
        </div>
        <div className="box" style={{ backgroundColor: "blue" }}>
          box
        </div>
        <div className="box" style={{ backgroundColor: "blue" }}>
          box
        </div>
      </div>
      <section className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <Image //
          fill={true}
          src={main_1}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
      <section className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <Image //
          fill={true}
          src={main_1}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
      <section className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <Image //
          fill={true}
          src={main_1}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
      <section className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <Image //
          fill={true}
          src={main_1}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
      <section className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <Image //
          fill={true}
          src={main_1}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
    </div>
  );
}
