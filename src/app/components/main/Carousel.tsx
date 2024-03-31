import Image from "next/image";
import styles from "./Carousel.module.scss";

import main_0 from "@@/main/main_2.png";
import main_1 from "@@/main/main_1.png";

export default function Carousel() {
  return (
    <>
      <section className={styles.container}>
        <Image //
          fill={true}
          // width={300}
          src={main_0}
          style={{ objectFit: "cover" }}
          alt="메인사진1"
          placeholder="blur"
        />
      </section>
      <section className={styles.container}>
        <Image //
          fill={true}
          // width={300}
          src={main_1}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
      <section
        className={styles.container}
        style={{ backgroundColor: "coral" }}
      >
        <p>Dwqq</p>
      </section>
    </>
  );
}
