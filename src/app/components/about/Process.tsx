import { title } from "process";
import { Fragment } from "react";

export default function Process() {
  const processArr = [
    {
      title: "사전미팅 및 사전답사",
      content: "최고의 결과물을 위해 철저한 사전 미팅이 진행됩니다",
    },
    {
      title: "촬영",
      content: "디테일을 중시하며, 피사체의 특성에 맞춰 촬영합니다",
    },
    {
      title: "백업",
      content: "물리적인 공간과 클라우드 공간에 데이터를 보관합니다",
    },
    { title: "리터칭", content: "색감보정 및 세부 수정을 진행합니다" },
    {
      title: "컨펌",
      content: "모든 과정에서 클라이언트의 동의를 받아 진행합니다",
    },
    { title: "전송", content: "" },
  ];

  return (
    <div className="flex flex-col justify-center items-center pt-12 h-[100vh]">
      {processArr.map((el, idx) => {
        return (
          <Fragment key={idx}>
            <h3 className="mb-4 text-2xl">{el.title}</h3>
            <span className="mb-4 text-sm">{el.content}</span>
          </Fragment>
        );
      })}
    </div>
  );
}
