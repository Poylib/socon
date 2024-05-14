import Image from "next/image";

import img0 from "@@/about/han.jpeg";
import img1 from "@@/about/kim.jpeg";

export default function Introduce() {
  const person = [
    {
      name: "한지훈",
      en: "HAN Jihoon",
      src: img0,
      category: "JPG",
      position: "Executive Director",
      job: "Architect",
    },
    {
      name: "김동일",
      en: "KIM Dongil",
      src: img1,
      category: "MP4",
      position: "Creative Director",
      job: "Designer",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between pt-[30vh] mb-[30vh]">
      <h2 className="mb-8 text-2xl md:text-4xl" style={{ letterSpacing: 2 }}>
        MEMBER
      </h2>
      <div className="flex max-sm:flex-col justify-evenly px-4 w-full max-w-[1024px]">
        {person.map((el, idx) => (
          <div className="max-sm:w-full w-[40%] max-sm:mb-10" key={`${idx}`}>
            <div className="relative">
              <Image
                src={el.src}
                className="h-33 w-[100%]"
                style={{
                  objectFit: "cover",
                }}
                alt="작가 프로필 사진"
              />
            </div>
            <div className="mt-3">
              <span className="text-lg">{el.name}</span>
              <span className="ml-3 text-lg font-semibold">{el.en}</span>
            </div>
            <span className="text-xs">{`${el.category} | ${el.position} | ${el.job}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
