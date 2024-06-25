import React from "react";
import PageStateHandler from "../_components/zustand/PageStateHandler";
import typography from "../_components/typography";
import data from "../_lib/data.json";
import ClientDestination from "./clientDestination";
import type { Metadata } from "next";

// Get data of destination
export interface imagesObj {
  png: string;
  webp: string;
}

export interface destinationObj {
  name: string;
  images: imagesObj;
  description: string;
  distance: string;
  travel: string;
}

export const metadata: Metadata = {
  title: "Destinations",
};

export default function page() {
  const destinationsData: destinationObj[] = data.destinations;

  return (
    <>
      <PageStateHandler>destination</PageStateHandler>

      <section className="pb-24 text-center md:text-start mx-auto w-11/12 mt-14">
        <div className="flex gap-3 mb-24 ">
          <typography.HeaderXS style="text-gray-400">01</typography.HeaderXS>
          <typography.HeaderXS>PICK YOUR DESTINATION</typography.HeaderXS>
        </div>
        <ClientDestination destinationsData={destinationsData} />
      </section>
    </>
  );
}
