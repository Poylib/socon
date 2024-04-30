import Image from "next/image";

import main_1 from "@@/main/main_1.png";
import main_2 from "@@/main/main_2.png";

export default function Carousel() {
  return (
    <div className="h-[500vh] overflow-hidden">
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
