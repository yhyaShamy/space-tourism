import React from "react";
import typography from "../_components/typography";
import data from "../_lib/data.json";
import ClientCrew from "./clientCrew";
import type { Metadata } from "next";
import { Crew } from "../_interface/crew";

export const metadata: Metadata = {
  title: "Crew",
};

export default function page() {
  const crewMembersData: Crew[] = data.crew;

  return (
    <>
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
