import React from "react";
import PageStateHandler from "../_components/zustand/PageStateHandler";
import typography from "../_components/typography";
import data from "../_lib/data.json";
import { imagesObj } from "../destination/page";
import ClientCrew from "./clientCrew";
import $ from "jquery";
import type { Metadata } from "next";

export interface Crew {
  name: string;
  images: imagesObj;
  role: string;
  bio: string;
}

export const metadata: Metadata = {
  title: "Crew",
};

export default function page() {
  const crewMembersData: Crew[] = data.crew;

  return (
    <>
      <PageStateHandler>crew</PageStateHandler>
      <section
        className=" text-center md:text-start mx-auto w-11/12 mt-14 cursor-grab "
        id="crewSection"
      >
        <div className="flex gap-3">
          <typography.HeaderXS style="text-slate-500 text-gray-400">
            02
          </typography.HeaderXS>
          <typography.HeaderXS style="mb-16 md:mb-0">
            meet your crew
          </typography.HeaderXS>
        </div>
        <ClientCrew membersData={crewMembersData} />
      </section>
    </>
  );
}
