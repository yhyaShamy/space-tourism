import React from "react";
import typography from "../_components/typography";
import data from "../_lib/data.json";
import ClientDestination from "./clientDestination";
import type { Metadata } from "next";
import { destinationObj } from "../_interface/destination";

// Get data of destination

export const metadata: Metadata = {
  title: "Destinations",
};

export default function page() {
  const destinationsData: destinationObj[] = data.destinations;

  return (
    <>
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
