import type { Metadata } from "next";
import localFont from "next/font/local";

import Nav from "./components/navigations";
import SideNav from "./components/navigations/SideNav";

import "../style/globals.css";

const SCDream = localFont({
  src: [
    { path: "./fonts/SCDream1.otf", weight: "100", style: "normal" },
    { path: "./fonts/SCDream2.otf", weight: "200", style: "normal" },
    { path: "./fonts/SCDream3.otf", weight: "300", style: "normal" },
    { path: "./fonts/SCDream4.otf", weight: "400", style: "normal" },
    { path: "./fonts/SCDream5.otf", weight: "500", style: "normal" },
    { path: "./fonts/SCDream6.otf", weight: "600", style: "normal" },
    { path: "./fonts/SCDream7.otf", weight: "700", style: "normal" },
    { path: "./fonts/SCDream8.otf", weight: "800", style: "normal" },
    { path: "./fonts/SCDream8.otf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "소콘 스튜디오 | socon",
  description:
    "건축사진, 프로필 영상, 인테리어 촬영, 인테리어 영상 소콘 스튜디오",
  openGraph: {
    images: [
      {
        alt: "socon thumbnail",
        url: "https://github.com/Poylib/socon/assets/100523313/4c334b52-930c-4b20-a0a3-81e92e21f686",
      },
    ],
  },
  verification: {
    other: {
      "naver-site-verification": ["7b633493e159ff07d101ee4655f706898e02c54a"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={SCDream.className}>
      <body className="overscroll-none" suppressHydrationWarning>
        <SideNav />
        <Nav />
        {children}
      </body>
    </html>
  );
}
