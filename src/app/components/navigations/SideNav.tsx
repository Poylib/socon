"use client";

import useSidebar from "@/store/useSideBar";
import Link from "next/link";

import { NAV_CATEGORY } from "@/constants/navigation";

import styles from "./Nav.module.scss";
import useMainAnimation from "@/store/useMainAnimation";

export default function SideNav() {
  const { isOpen, setOpenSide } = useSidebar();
  const { currentColor, setCurrentColor } = useMainAnimation();

  return (
    <div className={`${styles.sideNav} ${isOpen ? styles["sideNav-on"] : ""}`}>
      <nav>
        <ul>
          {NAV_CATEGORY.map((item, idx) => (
            <li key={`${idx}_${item.name}`}>
              <Link
                href={item.href}
                onClick={() => {
                  setCurrentColor("black");
                  setOpenSide();
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
