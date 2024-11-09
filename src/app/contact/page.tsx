import Image from "next/image";
import SNSConnect from "../components/contact/SNSConnect";

export default async function Contact() {
  const arr = [
    { title: "E-mail", content: "soocn_us@naver.com" },
    { title: "Mobile", content: "+82 10-8199-6398" },
    { title: "SNS", content: "" },
  ];

  return (
    <div className="flex flex-col items-center py-[70px] max-w-xl">
      <h1 className="mt-10 mb-20 text-xl">CONTACT</h1>
      <div className="px-5">
        <p> 스튜디오 소콘의 작업시간은 10일 ~ 15일 입니다.</p>
        <br />
        <p>
          비교적 오랜기간이 소요되는 이유는 초안 작업에서, 촬영후 당일 1차
          색감보정을 진행하고 3일 ~ 5일 후 새로운 시점으로 한번 더 진행하기
          때문입니다 또한, 기존의 프리셋을 사용하는 것이 아닌 최상의 결과물을
          위해 맞춤형 보정을 진행하기 때문입니다.
        </p>
        <br />
        <p> 결과물이 급히 필요하신 분은 미리 말씀해주시기 바랍니다.</p>
      </div>
      <div className="flex mt-12 w-full px-5">
        <div className="flex flex-col w-[50%]">
          {arr.map((el, idx) => {
            return (
              <div key={idx} className="flex flex-col mb-5">
                <span className="mb-2">{el.title}</span>
                {idx === arr.length - 1 ? (
                  <div className="flex">
                    <SNSConnect connect="kakao" />
                    <SNSConnect connect="insta" />
                  </div>
                ) : (
                  <span className="text-xs">{el.content}</span>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-[50%]">
          <Image
            src={`https://${process.env.CLOUDFRONT_URL}/Contact/contact.jpeg`}
            width="200"
            height="200"
            sizes="100%"
            alt="건물 사진"
            className="w-full"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
