import React from "react";
import { HeaderL, HeaderS, SubHeaderL } from "./_components/typography";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* To Change Current Page */}
      <section className=" grid  py-3 text-center text-lightBlue lg:grid-cols-[39%,1fr] lg:gap-0 lg:text-left lg:mt-0  mx-auto w-11/12 mt-14 pb-20 sm:pb-0">
        <figure className="space-y-12 self-center lg:self-start">
          <SubHeaderL style="mb-16 sm:mb-0">
            SO, YOU WANT TO TRAVEL TO
          </SubHeaderL>
          <HeaderL style="text-white">SPACE</HeaderL>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </figure>
        <Link
          href="/destination"
          className=" flex size-64 items-center justify-center justify-self-center rounded-full bg-white text-dark transition-all duration-500 hover:text-gray-400 hover:shadow-[0px_0px_0px_4rem_#d0d6f980] active:shadow-[0px_0px_0px_4rem_#d0d6f980] xl:mb-0 lg:me-12 lg:justify-self-end self-center mt-20 lg:mt-0"
        >
          <HeaderS>EXPLORE</HeaderS>
        </Link>
      </section>
    </>
  );
}
