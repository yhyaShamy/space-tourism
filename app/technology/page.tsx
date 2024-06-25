import React from "react";
import PageStateHandler from "../_components/zustand/PageStateHandler";
import typography from "../_components/typography";
import data from "../_lib/data.json";
import ClientTechnology from "./ClientTechnology";
import type { Metadata } from "next";

interface technologyImg {
  portrait: string;
  landscape: string;
}

export interface technologyData {
  name: string;
  images: technologyImg;
  description: string;
}

export const metadata: Metadata = {
  title: "Technologies",
};

export default function page() {
  const technologyData: technologyData[] = data.technology;
  return (
    <>
      <PageStateHandler>technology</PageStateHandler>
      <section className="pb-24 text-center lg:text-start lg:h-[78dvh] lg:mx-auto lg:w-11/12 mt-14">
        <div className="flex gap-3 mb-16 lg:mb-0">
          <typography.HeaderXS style="text-gray-400">03</typography.HeaderXS>
          <typography.HeaderXS>SPACE LAUNCH 101</typography.HeaderXS>
        </div>
        <ClientTechnology data={technologyData} />
      </section>
    </>
  );
}
