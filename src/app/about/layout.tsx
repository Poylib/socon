import { Metadata } from "next";

export const metadata: Metadata = {
  title: "소콘 스튜디오 소개 | socon",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
