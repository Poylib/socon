import { Metadata } from "next";
import Footer from "../components/navigations/Footer";

export const metadata: Metadata = {
  title: "소콘 스튜디오 갤러리 | socon",
  description:
    "개인 촬영으로 진행된 건축 사진 컬렉션에는 다양한 빌딩 사진과 인테리어 사진이 포함되어 있으며, 상업 사진을 전문으로 하는 출장 사진 서비스도 제공합니다.",
};

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <Footer />
    </div>
  );
}
