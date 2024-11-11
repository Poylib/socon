import { Metadata } from "next";
import Footer from "../components/navigations/Footer";

export const metadata: Metadata = {
  title: "소콘 스튜디오 갤러리 | socon",
  description: "개인촬영, 상업촬영, 건축촬영, 인테리어촬영",
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
