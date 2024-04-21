import Image from "next/image";

import main_1 from "@@/main/main_1.png";
import main_2 from "@@/main/main_2.png";

import styles from "./Carousel.module.scss";

export default function Carousel() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <section className="relative flex items-center justify-center h-screen w-full overflow-hidden snap-always snap-center">
        {/* <FadeInSection /> */}
        <Image //
          fill={true}
          src={main_2}
          className={styles.fadeIn}
          style={{
            objectFit: "cover",
            zIndex: 2,
          }}
          alt="메인사진1"
          placeholder="blur"
        />
      </section>
      <section className="relative flex items-center justify-center h-screen w-full overflow-hidden snap-always snap-center">
        <Image //
          fill={true}
          src={main_1}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
      <section className="relative flex items-center justify-center h-screen w-full overflow-hidden snap-always snap-center">
        <Image //
          fill={true}
          src={main_2}
          style={{ objectFit: "cover" }}
          alt="메인사진2"
          placeholder="blur"
        />
      </section>
    </div>
  );
}
