"use client";

import Link from "next/link";
import { NAV_CATEGORY } from "@/constants/navigation";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

import styles from "./Nav.module.scss";
import useMainAnimation from "@/store/useMainAnimation";

export default function Nav() {
  const { currentColor, setCurrentColor } = useMainAnimation();
  return (
    <>
      <header className={styles.container}>
        <Logo />
        <nav>
          <ul>
            {NAV_CATEGORY.map((item, idx) => (
              <li key={`${idx}_${item.name}`}>
                <Link
                  href={item.href}
                  className="transition-colors duration-2000"
                  style={{ color: currentColor }}
                  onClick={() => setCurrentColor("black")}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Hamburger />
      </header>
    </>
  );
}
