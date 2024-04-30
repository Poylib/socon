import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";

import Nav from "./components/navigations";
import SideNav from "./components/navigations/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "socon",
  description: "socon 이 어쩌구 저쩌구",
  openGraph: {
    images: [
      {
        alt: "socon thumbnail",
        url: "https://github.com/Poylib/socon/assets/100523313/4c334b52-930c-4b20-a0a3-81e92e21f686",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <Nav />
        <SideNav />
        {children}
      </body>
    </html>
  );
}
