import Image from "next/image";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

import main_1 from "@@/main/main_1.png";

import useMainAnimation from "@/store/useMainAnimation";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollToPlugin);

export default function Carousel() {
  const { setCurrentBg } = useMainAnimation();
  let containerRef = useRef(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");

      const observer = ScrollTrigger.normalizeScroll(true);
      let scrollTween;

      if (!observer) return;
      // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
      document.addEventListener(
        "touchstart",
        (e) => {
          if (scrollTween) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        },
        { capture: true, passive: false }
      );

      function goToSection(i) {
        scrollTween = gsap.to(window, {
          scrollTo: { y: i * window.innerHeight, autoKill: false },
          onStart: () => {
            observer.disable();
            observer.enable();
          },
          duration: 1,
          onComplete: () => (scrollTween = null),
          overwrite: true,
        });
      }

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=200%",
          onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="h-[500vh] overflow-hidden" ref={containerRef}>
      <section className="panel bg-red-200 h-screen">
        <p>This is page 1</p>
      </section>
      <section className="panel bg-gray-300 h-screen">
        <p>This is page 2</p>
      </section>
      <section className="panel bg-blue-200 h-screen">
        <p>This is page 3</p>
      </section>
      <section className="panel bg-yellow-200 h-screen">
        <p>This is page 4</p>
      </section>
    </div>
  );
}
