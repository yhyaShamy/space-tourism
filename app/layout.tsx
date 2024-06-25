import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import BgImg from "./_components/BgImg";
("");

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "Space tourism / %s",
    default: "Space tourism",
  },
  description:
    "So, you want to travel to Space Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-x-hidden ">
      <body
        className={`${barlow.className} text-[18px] leading-[180%] text-white pt-1 sm:pt-0 xl:pt-1  relative md:h-screen flex flex-col overflow-hidden`}
      >
        <BgImg />
        <NavBar />
        <main className="flex items-center h-[90%] sm:h-[80%] w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
